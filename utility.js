function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const playGround = document.getElementById(elementId);
    playGround.classList.remove('hidden');
}

function setKeyColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function generateRandomAlphabet(){
    const allAlphabets = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = allAlphabets.split('');
    
    const index = Math.round(Math.random() * 25);
    const alphabet = alphabets[index];
    return alphabet;
}