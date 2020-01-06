const home = document.querySelector('#Home');
const whatzapp = document.querySelector('#WhatZapp');
const zpotify = document.querySelector('#Zpotify');
const titulo = document.querySelector('#Titulo');


home.addEventListener('click', fHome);
function fHome(){
    document.getElementById("iFrame").src="../Home/index.html";
    titulo.innerHTML = "HOME";
}

whatzapp.addEventListener('click', fWZ);
function fWZ(){
    document.getElementById("iFrame").src="../WhatZapp/index.html";
    titulo.innerHTML = "WHATZAPP";
}

zpotify.addEventListener('click', Zpot);
function Zpot(){
    document.getElementById("iFrame").src="../zpotify/index.html";
    titulo.innerHTML = "ZPOTIFY";
}