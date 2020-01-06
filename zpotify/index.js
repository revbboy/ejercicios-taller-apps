const SoloNegros = document.querySelector('#sn');
const Frainstrumentos = document.querySelector('#fi');


var audio = document.createElement('audio');

audio.setAttribute('src', './assets/sn.mp3');

SoloNegros.addEventListener('click', musicaSN);
function musicaSN(){
    audio.setAttribute('src', './assets/sn.mp3');
    audio.play();
}
SoloNegros.addEventListener('mouseout', audio.pause());

Frainstrumentos.addEventListener('click', musicaFI);

function musicaFI(){
    audio.setAttribute('src', './assets/fi.mp3');
    audio.play();
}

