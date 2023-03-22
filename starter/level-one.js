/*
 * DOTS: Level One
 *
 */
console.log("working")
// set variables for ball js-ball, score js-score, level-winner
let score = 0
let ball = document.querySelector('.js-ball')
let scoreDisplay = document.querySelector('.js-score')
let levelWinner = document.querySelector('.level-winner')


// 
ball.addEventListener('click', ()=>{
    console.log('clicked the ball')
    score+=10
    console.log(score)
    scoreDisplay.innerText = score
    if (score >=100) {
        console.log("winner!")
        levelWinner.style.opacity = '1'
    }
  })
