function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

function continueGame(){
    const alphabet = generateRandomAlphabet();
    const element = document.getElementById('screen-alphabet');
    element.innerText = alphabet;

    setKeyColorById(alphabet);

    document.addEventListener('keyup', )
    console.log();
}