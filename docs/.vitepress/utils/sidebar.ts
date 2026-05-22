import log from '@leawind/inventory/log'
import { Path, type PathLike } from '@leawind/inventory/fs'
import * as fs from '@leawind/inventory/fs'
import * as frontMatter from 'jsr:@std/front-matter@1.0.9'
import { DefaultTheme } from 'vitepress/theme'

export function buildSidebars(
  base: PathLike,
  lang: string,
): DefaultTheme.SidebarMulti {
  const sidebars: DefaultTheme.SidebarMulti = {}

  const langRoot = fs.P`${base}/${lang}`

  for (const dir of langRoot.listSync()) {
    if (dir.isDirectorySync()) {
      sidebars[`/${lang}/${dir.name}`] = buildSidebar({ dir, base })
    }
  }

  return sidebars
}

export type Options = {
  /**
   * Relative to cwd or absolute
   */
  dir: PathLike
  base?: PathLike
}
const DEFAULT_OPTIONS = {
  base: 'docs',
}

export function buildSidebar(options: Options): DefaultTheme.SidebarItem[] {
  const opts = Object.assign({}, DEFAULT_OPTIONS, options)
  const dir = Path.from(opts.dir)
  const base = Path.from(opts.base)

  const sidebar = {
    ...buildSidebarRecursive(options),
    collapsed: false,
    link: getLink(dir, base),
  }

  const result: DefaultTheme.SidebarItem[] = [sidebar]
  if (sidebar.items) {
    let i = 0
    while (i < sidebar.items.length) {
      const item = sidebar.items[i]
      if ('items' in item) {
        sidebar.items.splice(i, 1)
        result.push(item)
        continue
      }
      i++
    }
  }
  return result
}

function buildSidebarRecursive(options: Options): DefaultTheme.SidebarItem {
  const opts = Object.assign({}, DEFAULT_OPTIONS, options)
  const dir = Path.from(opts.dir)
  const base = Path.from(opts.base)

  // get dir title and body
  let dirTitle: string
  let dirHasBody: boolean
  {
    const indexFile = dir.join('index.md')
    const indexInfo = parseFile(indexFile)
    dirTitle = indexInfo.title || dir.nameNoExt.replace(/^\d+-/, '')
    dirHasBody = indexInfo.body.trim() !== ''
  }

  return {
    text: dirTitle,
    collapsed: true,
    ...(dirHasBody ? { link: getLink(dir, base) } : {}),
    items: dir.listSync()
      .sort((a, b) => {
        const num = (name: string) => {
          const match = name.match(/^(\d+)-/)
          return match ? parseInt(match[1], 10) : Infinity
        }
        return num(a.name) - num(b.name)
      })
      .map((entry) => {
        if (entry.isFileSync()) {
          if (entry.name === 'index.md') {
            return undefined
          }
          return {
            text: parseFile(entry).title
              || entry.nameNoExt.replace(/^\d+-/, ''),
            link: getLink(entry, base),
          }
        } else {
          return buildSidebarRecursive({ dir: entry, base })
        }
      })
      .filter((item) => item !== undefined),
  }
}

export function parseFile(file: PathLike): {
  /**
   * be undefined if:
   *
   * - file does not exist
   * - file exist but no attributes
   */
  title?: string
  attrs: any
  body: string
} {
  const path = Path.from(file)

  if (path.existsSync()) {
    try {
      const fm = frontMatter.extractYaml(path.readTextSync())
      const attrs: any = fm.attrs

      return {
        ...('title' in attrs ? { title: attrs.title } : {}),
        attrs: attrs,
        body: fm.body.trim(),
      }
    } catch (e) {
      log.error(`Error parsing file ${file}: ${e}`)
    }
  }

  return { attrs: {}, body: '' }
}

function getLink(file: PathLike, base: PathLike) {
  file = Path.from(file)
  base = Path.from(base)

  return '/' + file.relative(base)
    .toString()
    .replace(/(^\/*)|(\/*$)/g, '') // remove leading and trailing slashes
    .replace(/\.md$/g, '') // remove .md suffix
    .replace(/\.html?$/g, '') // remove .htm(l) suffix
}
