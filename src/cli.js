// CLI version of nymeronym generator

const readline = require('readline')

const { convertToNumeronym } = require('./numeronym-converter')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const init = () => {
  rl.question('What text do you want to convert into numeronym? \n', (answer) => {
    convertToNumeronym(answer)

    rl.question('Do you want to convert another word? (Y/N) \n', (answerTwo) => {
      if (answerTwo.toLowerCase() === 'y') {
        init()
      } else {
        rl.close()
      }
    })
  })
}

init()
