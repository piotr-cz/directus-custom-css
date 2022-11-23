import createCss from './create-css.js'

/** @type {HTMLFormElement|null} */
const formElement = document.querySelector('[name="form"]')

/** @type {HTMLInputElement|null} */
const inputColorElement = document.querySelector('[name="color"]')

/** @type {HTMLOutputElement|null} */
const outputCssElement = document.querySelector('[name="output"]')

/** @type {HTMLStyleElement|null} */
const customStyleElement = document.querySelector('#custom-css')

// Update immediately
updateOutput()

// Listen to form change
if (formElement) {
  formElement.addEventListener('input', () => updateOutput())
}

/**
 * Handle form input change
 */
function updateOutput () {
  if (!inputColorElement) {
    return
  }

  const colorHex = inputColorElement.value
  const output = createCss(colorHex)

  // Update value
  if (outputCssElement) outputCssElement.textContent = output

  if (customStyleElement) customStyleElement.textContent = output;
}
