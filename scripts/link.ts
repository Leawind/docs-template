/**
 * @module link
 *
 * Make a symlink at ${SITE_ROOT}/docs pointing to dist directory
 */

import { DIST_DIR, SITE_ROOT } from './lib/consts.ts'
import * as fs from '@leawind/inventory/fs'
import log from '@leawind/inventory/log'

if (import.meta.main) {
  if (!SITE_ROOT) {
    log.error('Environment variable `SITE_ROOT` is not set')
    Deno.exit(1)
  }

  const LINK_PATH = fs.P`${SITE_ROOT}/docs`

  if (await LINK_PATH.isSymlink()) {
    if (
      LINK_PATH.targetSync().absolute().toString()
        !== DIST_DIR.absolute().toString()
    ) {
      log.error('Symlink points to the wrong directory')
      await LINK_PATH.remove()
    } else {
      log.info('Symlink already points to the correct directory')
      Deno.exit(0)
    }
  }

  Deno.symlinkSync(DIST_DIR.toString(), LINK_PATH.toString(), { type: 'dir' })

  log.info('Created symlink successfully')
}
