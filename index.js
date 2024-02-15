function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  hideElementById("score-board");
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
    setElementValueById('score', score);

    removeKeyColorById(currentAlphabet);
    continueGame();
  } else {
    let life = getElementValueById("life");
    life--;
    setElementValueById('life', life);

    if (life === 0) {
      hideElementById("play-ground");
      showElementById("score-board");
    }
  }
}
document.addEventListener("keyup", handlePressedKey);
