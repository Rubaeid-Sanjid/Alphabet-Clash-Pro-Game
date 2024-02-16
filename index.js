function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  hideElementById("score-board");

  setElementValueById("score", 0);
  setElementValueById("life", 3);

  continueGame();
}

function continueGame() {
  const alphabet = generateRandomAlphabet();
  const currentAlphabet = document.getElementById("screen-alphabet");
  currentAlphabet.innerText = alphabet;

  setKeyColorById(alphabet);
}

function handlePressedKey(event) {
  const playerPressedKey = event.key;

  const currentAlphabetElement = document.getElementById("screen-alphabet");
  const collectedAlphabet = currentAlphabetElement.innerText;
  const currentAlphabet = collectedAlphabet.toLowerCase();

  if (playerPressedKey === currentAlphabet) {
    let score = getElementValueById("score");
    score++;
    setElementValueById("score", score);

    removeKeyColorById(currentAlphabet);
    continueGame();
  } else {
    let life = getElementValueById("life");
    life--;
    setElementValueById("life", life);

    if (life === 0) {
      gameOver();
    }
  }
}
document.addEventListener("keyup", handlePressedKey);

function gameOver() {
  hideElementById("play-ground");
  showElementById("score-board");

  const finalScore = getElementValueById("score");
  setElementValueById("final-score", finalScore);

  // const currentAlphabet = getElementTextById('screen-alphabet');
  const alphabetElement = document.getElementById("screen-alphabet");
  const currentAlphabet = alphabetElement.innerText;
  removeKeyColorById(currentAlphabet);
}
