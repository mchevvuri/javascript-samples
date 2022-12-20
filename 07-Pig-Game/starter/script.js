'use strict';

const score0Element = document.getElementById('score--0');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const currScore0Element = document.getElementById('current--0');
const score1Element = document.getElementById('score--1');
const currScore1Element = document.getElementById('current--1');
const diceDisplayImage = document.querySelector('.dice');
const diceRollBtn = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const resetButton = document.querySelector('.btn--new');
let isActivePlayer0 = true;
let playing = true;
score0Element.textContent = 0;
score1Element.textContent = 0;
diceDisplayImage.classList.add('hidden');

resetButton.addEventListener('click', function () {
  isActivePlayer0 = true;
  playing = true;
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  diceDisplayImage.classList.add('hidden');
  player0Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--winner');
  player1Element.classList.remove('player--active');
});

holdButton.addEventListener('click', function () {
  if (playing) {
    if (
      currScore0Element.textContent != '0' ||
      currScore1Element.textContent != '0'
    ) {
      if (isActivePlayer0) {
        const totalScore0 = accumulateToTotalScore(
          Number(currScore0Element.textContent),
          Number(score0Element.textContent),
          isActivePlayer0
        );
        score0Element.textContent = totalScore0;
        if (totalScore0 >= 20) {
          playing = false;
          player0Element.classList.add('player--winner');
          player0Element.classList.remove('player--active');
          diceDisplayImage.classList.add('hidden');
        }
      } else {
        const totalScore1 = accumulateToTotalScore(
          Number(currScore1Element.textContent),
          Number(score1Element.textContent),
          isActivePlayer0
        );
        score1Element.textContent = totalScore1;
        if (totalScore1 >= 20) {
          playing = false;
          player1Element.classList.add('player--winner');
          player1Element.classList.remove('player--active');
          diceDisplayImage.classList.add('hidden');
        }
      }
      resetCurrentScores();
    } else {
      console.log('Clicked hold when both scores are zero');
    }
  }
});

diceRollBtn.addEventListener('click', function () {
  if (playing) {
    const rolledValue = rollDice();
    updateDisplayImage(rolledValue);
    displayDice(true);
    if (rolledOne(rolledValue)) {
      resetCurrentScores();
    } else {
      updateCurrentScore(isActivePlayer0, rolledValue);
    }
  }
});

function resetCurrentScores() {
  currScore0Element.textContent = '0';
  currScore1Element.textContent = '0';
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
  isActivePlayer0 = !isActivePlayer0;
}

function accumulateToTotalScore(currentScore, totalScore, isActivePlayer0) {
  totalScore += currentScore;
  return totalScore;
}

function updateCurrentScore(activePlayer, rolledValue) {
  if (activePlayer) {
    currScore0Element.textContent =
      Number(currScore0Element.textContent) + rolledValue;
  } else {
    currScore1Element.textContent =
      Number(currScore1Element.textContent) + rolledValue;
  }
}
function rollDice() {
  const rolledVal = Math.trunc(Math.random() * 6) + 1;
  console.log('rolled dice Val: %s', rolledVal);
  return rolledVal;
}

function displayDice(shouldDisplayDice) {
  if (shouldDisplayDice) {
    diceDisplayImage.classList.remove('hidden');
  } else {
    diceDisplayImage.classList.add('hidden');
  }
}
function updateDisplayImage(rolledVal) {
  diceDisplayImage.src = `dice-${rolledVal}.png`;
}

function incrementCurrentScore(currentScore, points) {
  currentScore += points;
}

function rolledOne(rollVal) {
  if (rollVal === 1) {
    return true;
  }
  return false;
}
