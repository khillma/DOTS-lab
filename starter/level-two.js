/*
 * DOTS: Level Two
 *
 */
console.log('working')
let score = 0
const balls = document.querySelectorAll('.js-ball')
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')
// console.log(balls)

for (let i = 0; i < balls.length; i++) {
        balls[i].addEventListener('click', function() {
          console.log("clicked")
          score+=10
          scoreDisplay.innerText = score
          if (score >=100) {
            console.log("winner!")
            levelWinner.style.opacity = '1'
        }
        });
      }