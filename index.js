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
    const scoreElement = document.getElementById("score");
    const currentScore = scoreElement.innerText;
    let score = parseInt(currentScore);
    // const newScore = score + 1;
    score++;

    // scoreElement.innerText = newScore;
    scoreElement.innerText = score;

    removeKeyColorById(currentAlphabet);
    continueGame();
  } else {
    const lifeElement = document.getElementById("life");
    const currentLife = lifeElement.innerText;
    let life = parseInt(currentLife);

    life--;
    lifeElement.innerText = life;

    if (life === 0) {
      hideElementById("play-ground");
      showElementById("score-board");
    }
  }
}
document.addEventListener("keyup", handlePressedKey);
