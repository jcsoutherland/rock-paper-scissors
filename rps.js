const options = ['rock', 'paper', 'scissors']

const getComputerChoice = () => {
  const random = Math.floor(Math.random() * options.length)
  return options[random]
}

const playRound = (playerSelecetion, computerSelection) => {
  playerSelecetion = playerSelecetion.toLowerCase()
  console.log(playerSelecetion)

  switch (playerSelecetion) {
    case 'rock':
      if (computerSelection === 'rock') {
        return 'tie'
      } else if (computerSelection === 'paper') {
        return 'lose'
      } else {
        return 'win'
      }
    case 'paper':
      if (computerSelection === 'rock') {
        return 'win'
      } else if (computerSelection === 'paper') {
        return 'tie'
      } else {
        return 'lose'
      }
    case 'scissors':
      if (computerSelection === 'rock') {
        return 'lose'
      } else if (computerSelection === 'paper') {
        return 'win'
      } else {
        return 'tie'
      }
    default:
      return 'Invalid turn option!'
  }
}

let score = 0
for (let i = 0; i < 5; i++) {
  let user = prompt('Type what you want to play (rock, paper, scissors): ')
  let comp = getComputerChoice()
  console.log(comp)
  let result = playRound(user, comp)
  if (result === 'win') {
    score += 1
  }
}
console.log(`User score: ${score} | Computer score: ${5 - score}`)
