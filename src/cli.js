// CLI version of nymeronym generator

const readline = require('readline')

const { convertToNumeronym } = require('./numeronym-converter')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('What text do you want to convert into numeronym? \n', (answer) => {
  convertToNumeronym(answer)

  rl.close()
})
