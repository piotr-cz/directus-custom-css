/**
 * Alternatives:
 * - https://css-tricks.com/converting-color-spaces-in-javascript/
 * - tinycolor2
 */

import { ColorTranslator } from 'colortranslator'

/**
 * Create custom CSS
 * @param {string} colorHex
 * @return {string}
 */
export default function createCss(colorHex) {
  const inputColorTranslator = new ColorTranslator(colorHex)

  const primaryAlt = createVariant(inputColorTranslator, +2, 100, 96) // hsl(253deg 100% 96%)
  const primary10 = createVariant(inputColorTranslator, +2, 100, 96) // hsl(253deg 100% 96%)
  const primary25 = createVariant(inputColorTranslator, 0, 100, 91) // hsl(251deg 100% 91%)
  const primary50 = createVariant(inputColorTranslator, 0, 100, 82) // hsl(251deg 100% 82%)
  const primary75 = createVariant(inputColorTranslator, 0, 100, 73) // hsl(251deg 100% 73%)
  const primary90 = createVariant(inputColorTranslator, 0, 100, 67) // hsl(251deg 100% 67%)

  const primary = createVariant(inputColorTranslator, 0, 100, 63) // hsl(251deg 100% 63%)

  const primary110 = createVariant(inputColorTranslator, -1, 82, 59) // hsl(250deg 82% 59%)
  const primary125 = createVariant(inputColorTranslator, -2, 60, 53) // hsl(249deg 60% 53%)
  const primary150 = createVariant(inputColorTranslator, -6, 49, 42) // hsl(245deg 49% 42%)
  const primary175 = createVariant(inputColorTranslator, -15, 45, 30) // hsl(236deg 45% 30%)
  const primary190 = createVariant(inputColorTranslator, -26, 46, 22) // hsl(225deg 46% 22%)

  const vButtonBackgroundColor = createVariant(inputColorTranslator, 0, 100, 63) // hsl(251deg 100% 63%)
  const vButtonBackgroundColorHover = createVariant(inputColorTranslator, -1, 82, 59) // hsl(250deg 82% 59%)
  const sidebarDetailColorActive = createVariant(inputColorTranslator, -1, 82, 59) // hsl(250deg 82% 59%)

  const foregroundNormal = createVariant(inputColorTranslator, -25, 12, 35) // hsl(226deg 12% 35%)
  const foregroundNormalAlt = createVariant(inputColorTranslator, -37, 47, 17) // hsl(214deg 47% 17%)
  const foregroundSubdued = createVariant(inputColorTranslator, -38, 30, 72) // hsl(213deg 30% 72%)

  return `
#app, #main-content, body {
  --primary-alt: ${format(primaryAlt)} !important;
  --primary-10: ${format(primary10)} !important;
  --primary-25: ${format(primary25)} !important;
  --primary-50: ${format(primary50)} !important;
  --primary-75: ${format(primary75)} !important;
  --primary-90: ${format(primary90)} !important;

  --primary: ${format(primary)} !important;

  --primary-110: ${format(primary110)} !important;
  --primary-125: ${format(primary125)} !important;
  --primary-150: ${format(primary150)} !important;
  --primary-175: ${format(primary175)} !important;
  --primary-190: ${format(primary190)} !important;

  --v-button-background-color: ${format(vButtonBackgroundColor)} !important;
  --v-button-background-color-hover: ${format(vButtonBackgroundColorHover)} !important;
  --sidebar-detail-color-active: ${format(sidebarDetailColorActive)} !important;
}

.public-view {
  --foreground-normal: ${format(foregroundNormal)};
  --foreground-normal-alt: ${format(foregroundNormalAlt)};
  --foreground-subdued: ${format(foregroundSubdued)};
}
  `.trim()
}


/**
 * Create variant from base color
 * @param {ColorTranslator} colorTranslator - Base color
 * @param {number} hueDiff - Hue shift
 * @param {number} saturation - Saturation percentage
 * @param {number} lightness - lightness percentage
 * @return {ColorTranslator}
 */
function createVariant(colorTranslator, hueDiff, saturation, lightness) {
  const variantColorTranslator = new ColorTranslator(colorTranslator.RGBAObject)

  return variantColorTranslator
    .setH(variantColorTranslator.H + hueDiff)
    .setS(saturation)
    .setL(lightness)
}

/**
 * Format color to CSS string
 * @param {ColorTranslator} colorTranslator
 * @return {string}
 */
function format(colorTranslator) {
  return ColorTranslator.toHEX(colorTranslator.HSLAObject)
}
