import hamburgerMenu from "./menu_hamburguesa.js"
import {shortCuts} from './teclado.js'
import darkTheme from "./tema_oscuro.js"
import contactFormValidations from "./validaciones_formulario.js"

const d = document

d.addEventListener('DOMContentLoaded',(e)=>{
    hamburgerMenu('.panel-btn','.panel','.menu a')
    darkTheme('.dark-theme-btn','dark-mode') 
   contactFormValidations()
})


//Evento de teclado


d.addEventListener('keyup',(e)=>{
    shortCuts(e)
})


