let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 100;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess)

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage(' No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = 'rgb(225, 41, 9)';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? ' Too high!' : ' Too low!';
      displayMessage(guess > secretNumber ? 'Too high!' : ' Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😒 You lost the game!';
      displayMessage(' 😒You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
 }
});
