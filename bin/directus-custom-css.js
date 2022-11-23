#! /usr/bin/env node

import createCss from '../src/index.js'

/**
 * Usage:
 * node bin/directus-custom-css.js '#ff0000'
 */
const args = process.argv.slice(2)

const colorHex = args.shift()

if (!colorHex) {
  console.log(`
Directus Custom CSS generator
See Directus Docs > Branding & Style (https://docs.directus.io/configuration/project-settings.html#branding-style) for more info

Please provide color in HEX
`)
  process.exit()
}

const output = createCss(colorHex)

console.log(`
<!-- -->
${output}
<!-- -->
`)
