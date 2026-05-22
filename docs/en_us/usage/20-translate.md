---
title: Multi-language
---

# Multi-language

This document guides you on how to add new language translation support.

## Directory Structure

The documentation uses a multi-language directory structure, with each language in its own subdirectory:

```
docs/
├── zh_cn/          # Chinese documentation
├── en_us/          # English documentation
└── <new-lang>/     # Other languages
```

All language directories should maintain the same directory structure.

## Steps to Add a New Language

### Create Language Directory

> [!NOTE]
>
> Technically, the language code can be arbitrary; as long as it's unique and consistent, it will work properly. It's recommended to use the [Minecraft Wiki](https://minecraft.wiki/w/Language#Languages) language codes for consistency.

Create a new language directory under `docs/`, named with the language code:

```sh
mkdir docs/<lang>
```

For example, to add Russian:

```sh
mkdir docs/ru_ru
```

### Register Language in Configuration

Edit `docs/.vitepress/locales.ts` to add the new language configuration using `defineLocale()`:

```ts
import { defineLocale } from './utils/locale.ts'

export default {
  zh_cn: defineLocale({
    lang: 'zh_cn',
    translation: {
      label: '简体中文',
      title: 'Your Title',
      description: 'Your description',
      themeConfig: {
        nav: [...],
        editLink: { text: '...' },
        lastUpdated: { text: '...' },
      },
    },
  }),
  en_us: defineLocale({
    lang: 'en_us',
    translation: { ... },
  }),
  ru_ru: defineLocale({
    lang: 'ru_ru',
    translation: {
      label: 'Русский',
      // ...
    },
  }),
}
```

### Create Directory Structure

Copy the structure of an existing language directory to the new one:

```sh
cp -r docs/zh_cn/* docs/<lang>/
```

### Translate Documents

Translate the document content in the directory one by one.

## Translation Standards

### Terminology Consistency

- Maintain consistency in terminology translation.
- Use an existing translation glossary if available.

### Language Style

- Use natural expressions in the target language.
- Avoid word-for-word translation; maintain readability.

### Run `deno task docs:dev` to Check

### Submit Pull Request

Don't forget to format before submitting code:

```sh
deno fmt
```
