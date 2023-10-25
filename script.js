'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
// start from 20, decrease by 1 for the wrong guess
let score = 20;
let highscore = 0;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '😤 No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '😄 Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else {
    score--;
    document.querySelector('.score').textContent = score;

    if (highscore < guess) {
      highscore = guess;
      document.querySelector('.highscore').textContent = highscore;
    }

    if (score === 0) {
      document.querySelector('.message').textContent = 'You lost the game!';
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = '🧐 Number is too high!';
    } else {
      document.querySelector('.message').textContent = '🧐 Number is too low!';
    }
  }
});

// implement the event for "again" functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  highscore = 0;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highscore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
