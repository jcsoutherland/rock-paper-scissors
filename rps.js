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

let playerScore = 0
let computerScore = 0
const resultText = document.querySelector('.result')
const scoreText = document.querySelector('.score')
const playerChoice = document.querySelector('.player-choice')
const computerChoice = document.querySelector('.computer-choice')
const finalText = document.querySelector('.final-text')
const buttonDiv = document.querySelector('.button-div')
const rematchBtn = document.createElement('button')
rematchBtn.textContent = 'Rematch'

const buttons = document.querySelectorAll('button#play')
const btnClickHandler = (e) => {
  const comp = getComputerChoice()
  const result = playRound(e.target.innerHTML, comp)
  playerChoice.innerHTML = e.target.innerHTML.toLowerCase()
  computerChoice.innerHTML = comp
  resultText.innerHTML = result
  if (result === 'win') {
    playerScore++
    if (playerScore >= 5) {
      finalText.innerHTML = 'WINNER!'
      buttons.forEach((button) => {
        button.disabled = true
        buttonDiv.appendChild(rematchBtn)
      })
    }
  }
  if (result === 'lose') {
    computerScore++
    if (computerScore >= 5) {
      finalText.innerHTML = 'LOSER!'
      buttons.forEach((button) => {
        button.disabled = true
        buttonDiv.appendChild(rematchBtn)
      })
    }
  }
  scoreText.innerHTML = `${playerScore} - ${computerScore}`
}

buttons.forEach((button) => {
  button.addEventListener('click', btnClickHandler)
})

const rematchHandler = () => {
  location.reload()
  return false
}

rematchBtn.addEventListener('click', rematchHandler)

// for (let i = 0; i < 5; i++) {
//   let user = prompt('Type what you want to play (rock, paper, scissors): ')
//   let comp = getComputerChoice()
//   console.log(comp)
//   let result = playRound(user, comp)
//   if (result === 'win') {
//     score += 1
//   }
// }
