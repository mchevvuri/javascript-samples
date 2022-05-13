'use strict';

let highScore = Number(document.querySelector('.highscore').textContent);
let currentScore = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log('guess: %s is a type of %s', guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '❌ No Number Entered';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent =
      '🎉 Yayy!! Correct Number!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (currentScore > highScore) {
      highScore = currentScore;
      document.querySelector('.highscore').textContent = currentScore;
    }
  } else {
    if (currentScore > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Your guess is too high! 🙁' : '😭 You Lost!!';
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
    } else {
      document.querySelector('.message').textContent = '😭 You Lost!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  currentScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = null;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = currentScore;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
