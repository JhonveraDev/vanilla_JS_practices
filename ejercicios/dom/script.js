import hamburgerMenu from "./menu.js";
import {digitalClock}from "./reloj.js";
import {shortcuts}from "./teclado.js";

const d = document;

d.addEventListener('DOMContentLoaded',(e)=>{
    hamburgerMenu('.panel-btn' ,'.panel','.menu a')    //Capturador de elementos desde EL HTML
    digitalClock('#reloj','#activar-reloj','#desactivar-reloj')
})

d.addEventListener('keydown',e=>{//Eventos de teclado, en ese keydown es donde se especifica lo que se va hacer
    shortcuts(e) //Captura la funcion exportada
})
