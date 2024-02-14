function play(){
    const element = document.getElementById('home-screen');
    element.classList.add('hidden');

    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');
}