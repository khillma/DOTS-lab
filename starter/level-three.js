/*
 * DOTS: Level Three
 *
 */
console.log('working')
let score = 0
// const balls = document.querySelectorAll('.js-ball')
const ball1 = document.querySelector('[data-increment="20"]')
const ball2 = document.querySelector('[data-increment="5"]')
const ball3 = document.querySelector('[data-increment="10"]')
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')

ball1.addEventListener('click', ()=>{
    console.log('clicked ball1')
    newScore = score+=20
        scoreDisplay.innerText = newScore
    if (newScore >=100) {
        console.log("winner!")
        levelWinner.style.opacity = '1'
        }
  })

  ball2.addEventListener('click', ()=>{
    console.log('clicked ball2')
    newScore = score+=5
        scoreDisplay.innerText = newScore
    if (newScore >=100) {
        console.log("winner!")
        levelWinner.style.opacity = '1'
        }
  })

  ball3.addEventListener('click', ()=>{
    console.log('clicked ball3')
    newScore = score+=10
        scoreDisplay.innerText = newScore
    if (newScore >=100) {
        console.log("winner!")
        levelWinner.style.opacity = '1'
        }
  })




