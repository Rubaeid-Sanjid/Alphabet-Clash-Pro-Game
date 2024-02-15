function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

function continueGame(){
    const alphabet = generateRandomAlphabet();
    const currentAlphabet = document.getElementById('screen-alphabet');
    currentAlphabet.innerText = alphabet;

    setKeyColorById(alphabet);
}


function handlePressedKey(event){
    const playerPressedKey = event.key;
    
    const currentAlphabetElement = document.getElementById('screen-alphabet');
    const collectedAlphabet = currentAlphabetElement.innerText;
    const currentAlphabet = collectedAlphabet.toLowerCase();

    if(playerPressedKey === currentAlphabet){
        continueGame();
        removeKeyColorById(currentAlphabet);
    }
    else{
        hideElementById('play-ground');
        showElementById('score-board');
    }

}
document.addEventListener('keyup', handlePressedKey);