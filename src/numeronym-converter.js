const convertToNumeronym = (text) => {
	if (text.length >= 3) {
		let input = text
		let inputParts = []
		let result= ''

		// Remove white space & apostrophes
	  input = input.replace(/\s+/g, '').replace(/'/gi,'')

		inputParts.push(input.substr(0, 1), input.length -2, input.substr(input.length - 1, input.length))

		result = inputParts.join('')

		console.log(result)

		return result

	} else {
		console.log('Minimum length of the text is 3 characters.')

		return 'Minimum length of the text is 3 characters.'
	}
}

module.exports = { convertToNumeronym }
