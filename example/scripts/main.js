// Web version of l33t speak converter

const buttonEl = document.querySelector('.numeronym-button')
const checkboxUpperEl = document.querySelector('.numeronym-upper')
const checkboxLowerEl = document.querySelector('.numeronym-lower')
const resultEl = document.querySelector('.numeronym-result')
const textareaEl = document.querySelector('.numeronym-textarea')

const convertToNumeronym = (text) => {
	if (text.length >= 3) {
		let input = text
		let inputParts = []
		let result= ''

		// Remove white space
	  input = input.replace(/\s+/g, '')

	  // Remove apostrophes "'s"
	  input = input.replace(/'s/gi,'')

		inputParts.push(input.substr(0, 1), input.length -2, input.substr(input.length - 1, input.length))

		result = inputParts.join('')

		return result

	}
}

// If user wants to use advanced l33t conversion, disable option for conversion from l33t to text
checkboxUpperEl.addEventListener('click', (e) => {
  if (e.target.checked) {
    checkboxLowerEl.setAttribute('disabled', true)
    checkboxLowerEl.parentNode.classList.add('switch--inactive')
  } else {
    checkboxLowerEl.removeAttribute('disabled')
    checkboxLowerEl.parentNode.classList.remove('switch--inactive')
  }
})

// If user wants to use conversion from l33t to text, disable option for advanced l33t conversion
checkboxLowerEl.addEventListener('click', (e) => {
  if (e.target.checked) {
    checkboxUpperEl.setAttribute('disabled', true)
    checkboxUpperEl.parentNode.classList.add('switch--inactive')
  } else {
    checkboxUpperEl.removeAttribute('disabled')
    checkboxUpperEl.parentNode.classList.remove('switch--inactive')
  }
})

buttonEl.addEventListener('click', () => {
  let text = textareaEl.value
  let toUpperCase = checkboxUpperEl.checked ? 'y' : 'n'
  let toLowerCase = checkboxLowerEl.checked ? 'y' : 'n'

  text = convertToNumeronym(text)

  if (toUpperCase.toLowerCase() === 'y') {
    text = text.toLowerCase()
  } else if (toLowerCase.toLowerCase() === 'y') {
    text = text.toUpperCase()
  }

  resultEl.value = text
})
