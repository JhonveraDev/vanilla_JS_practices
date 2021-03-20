/*console.log('Hola')
console.log(document.head)
console.log(document.documentElement)
console.log(document.title)
*/
/*
//Navegación entre etiquetas
console.log(document.getElementsByTagName('li'))
console.log(document.getElementsByClassName('card'))
console.log(document.getElementsByName('nombre'))
console.log(document.getElementById('menu'))//Nivel de rendimiento es mas rapido llamar al selector indicado a cada sección

console.log(document.querySelector('#menu'))//Selector de elemento de CSS,Etiqueta HTML, cualquier selector valido
console.log(document.querySelectorAll('a').length)

document.querySelectorAll('a').forEach((el)=>console.log(el))

console.log(document.querySelectorAll('.card')[2])
console.log(document.querySelectorAll('#menu li'))
console.log(document.querySelector('#menu li'))//Query selector solo hara referencia al primer elemento que encuentre del tipo solicitado


document.documentElement.lang='es'
console.log(document.documentElement.lang)
document.documentElement.setAttribute('lang','Colombia')
console.log(document.documentElement.lang)

//Guardado de variables para el DOM
//Variables para el Dom guardarlas con $, buenas practicas de escritura

const $linkDOM = document.querySelector('.link-dom') //Asignacion de elemento del DOM a una constante
$linkDOM.setAttribute('rel','noopener noreferrer')//Seguridad y tratamiento de datos
$linkDOM.setAttribute('target','_blank')
$linkDOM.setAttribute('href','https://web.whatsapp.com/')//Ingresamos al link

console.log($linkDOM.hasAttribute('rel'))
$linkDOM.removeAttribute('rel')
console.log($linkDOM.hasAttribute('rel'))
$linkDOM.style.setProperty('color','#fff')
$linkDOM.style.setProperty('background','#F7DF1E')
console.log(getComputedStyle($linkDOM).getPropertyValue('color'))

$linkDOM.style.setProperty('text-decoration','none')
$linkDOM.style.setProperty('display','block')
$linkDOM.style.width='50%'
$linkDOM.style.textAlign ='center'
$linkDOM.style.setProperty('margin-left','auto')
$linkDOM.style.setProperty('margin-right','auto')//cuado pasamos el atributo de esta manera, lo asignamos de forma tradiccional al css
$linkDOM.style.padding='1rem'
$linkDOM.style.borderRadius='22px' //cuando se pasa de esta forma, tenemos que referir el atributo en camelCase

console.log($linkDOM.style)//Nos muestra las propiedades abordadas

//ASIGNACIÓN DE COLOR POR MEDIO DE JS
const $html = document.documentElement,//Representa la etiqueta html
$body = document.body;//Referencia al cuerpo completo

let varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color'),//Capturamos el valor desde el archivo CSS
varYellowColor = getComputedStyle($html).getPropertyValue('--yellow-color')

console.log(varDarkColor,varYellowColor)//Muestra los valores del color asignado

$body.style.background=varDarkColor
$body.style.color=varYellowColor

*/

/*
const $card = document.querySelector('.card')//Cada que ingresemos a una clase entraremos con punto.
console.log($card)

console.log($card.classList.contains('rotate-45'))//pregunta y falso
$card.classList.add('rotate-45')//asignacion para verdadero
console.log($card.classList.contains('rotate-45'))//pregunta y verdadero

//$card.classList.toggle('rotate-45')
//Contains sirve para evaluar una clase
$card.classList.replace('rotate-45','rotate-135') //Reemplazo de clases
$card.classList.contains('rotate-135')
$card.classList.add('opacity-80','sepia')

*/
//NodeType,investgar!

//Curso JavaScript: 67. DOM Traversing: Recorriendo el DOM - #jonmircha
/*
const $cards = document.querySelector('.cards')
console.log($cards)
console.log($cards.children)//Coleccion individual de cada una de las tarjetas
console.log($cards.children[2])
*/
/*
//Creacion e incorporacion al DOM
const $figure = document.createElement('figure'),
$img = document.createElement('img'),
$figcaption = document.createElement('figcaption'),
$figcaptionText= document.createTextNode('Animals'),
$cards = document.querySelector('.cards')
$figure.classList.add('card')//Toma los estilos CSS

//Creacion de nodos IMPORTANTE
/*

$img.setAttribute('src','https://placeimg.com/200/200/animals')
$img.setAttribute('alt','Animales')

$figcaption.appendChild($figcaptionText)
$figure.appendChild($img)
$figure.appendChild($figcaption)
$cards.appendChild($figure)
*/

/*Curso JavaScript: 69. DOM: Templates HTML - #jonmircha*/
/*INYECCION DE IMAGENES DINAMICAS*/
/*
// Templates , modelo a seguir, el cual tu estructura es el contenido HTML que quieras para que se convierta en dinámico y es otra forma de poder interactuar con el DOM
const $cards = document.querySelector('.cards'), //Variable que apunta las  cards clase original del contenido
$template = document.getElementById('template-card').content,//Posicionador del Template a la plantilla original
$fragment = document.createDocumentFragment(),//Fragmento que contendra nuestras imagenes dinamicas
cardContent = [//Objeto con atributos los cuales seran usados para la inserccion

    {
        title:'Tecnologia',
        img:'https://placeimg.com/200/200/tech'
    },

    {
        title:'Animales',
        img:'https://placeimg.com/200/200/animals'
    },

    {
        title:'Naturaleza',
        img:'https://placeimg.com/200/200/nature'
    },

    {
        title:'Personas',
        img:'https://placeimg.com/200/200/people'
    },
]

cardContent.forEach(el=>{
    $template.querySelector('img').setAttribute('src',el.img)
    //Todo el contenido de esta plantilla se toma como referencia
    $template.querySelector('img').setAttribute('alt',el.title)
    $template.querySelector('figcaption').textContent = el.title

    let $clone = document.importNode(($template),true) //Ccopia absolutamente toda la estructura interna, la estructura
    $fragment.appendChild($clone)
})

$cards.appendChild($fragment)

*/
/*
const $cards = document.querySelector('.cards'),
$newCard = document.createElement('figure'),
$cloneCards =  $cards.cloneNode(true)//Se clona todo el padre

$newCard.innerHTML =`
<img src = 'https://placeimg.com/200/200/any'>
<figcaption>Any<figcaption>
`;

$newCard.classList.add('card')

//$cards.replaceChild($newCard,$cards.children[2])

//Insercion de una nueva tarjeta
//$cards.insertBefore($newCard,$cards.firstElementChild)
//$cards.removeChild($cards.lastElementChild)
//$cards.removeChild($cards.children[0])

document.body.appendChild($cloneCards)
*/

/*Curso JavaScript: 71. DOM: Modificando Elementos (Cool Style) - #jonmircha*/
/*
const $cards = document.querySelector('.cards'),//Hacemos apuntamiento a la clase que requerimos
$newCard = document.createElement('figure')

//Creacion de la tarjeta por medio de  INNER, no es la mejor practica
/*
$newCard.innerHTML =
`
    <img src = 'https://placeimg.com/200/200/any'>
    <figcaption>Any<figcaption>
`;
*/
/*
let $contentCard =
`
    <img src = 'https://placeimg.com/200/200/any'>
    <figcaption><figcaption>
`;

$newCard.classList.add('card')//Hace busqueda del Estilo CSS definido
$newCard.insertAdjacentHTML('beforeend',$contentCard)
$newCard.querySelector('figcaption').insertAdjacentText('afterbegin','Anya')//Busqueda del elemento a insertar valor
$cards.insertAdjacentElement('afterbegin', $newCard)

*/

//$newCard.classList.add('card')//utiliza los estilos CSS
//$cards.insertAdjacentElement('afterbegin',$newCard)//Aplica la imagen segun la instrucción
//$cards.insertAdjacentElement('beforebegin',$newCard)
//$cards.insertAdjacentElement('beforeend',$newCard)
//$cards.insertAdjacentElement('afterend',$newCard)


//InsertAdjacents...

/*

.insertAdjacentElement(position,el)
.insertAdjacentElement(position,html)
.insertAdjacentElement(position,text)

Posiciones:
beforebegin(hermano anterior)
afterbegin(primer hijo)
beforeend(ultimo hijo)
afterend(hermano siguiente)

*/

//Curso JavaScript: 72. DOM: Manejadores de Eventos - #jonmircha

//Manejador de único evento

/*
function holaMundo(){
    alert('Hola Senior Developer')
}

const $eventoSemantico = document.getElementById('evento-semantico'),
$eventoMultiple = document.getElementById('evento-multiple')//Captura de ID
$eventoSemantico.onclick = holaMundo //Ejecucion de la funcion


//Manejador de Eventos multiples
$eventoMultiple.addEventListener('click',holaMundo)
$eventoMultiple.addEventListener('click',(e)=>{
    alert('Eres el Mejor en todo los que haces :D')
    console.log(e)
    console.log(event)//Utilizacion de event para evitar tener que pasarlo por parametro recibido
    console.log(e.type)
    console.log(e.target)
})



//Curso JavaScript: 73. DOM: Eventos con Parámetros y Remover Eventos - #jonmircha


function saludar(nombre='Desconocid@'){
    alert(`Hola ${nombre}`)
}


//Evento que permite realizar el llamado de varios parametros dentro de una funcion
$eventoMultiple.addEventListener('click',()=>{
    saludar('CHAOKO')
    saludar()
    holaMundo()
    console.log('Rath')
})
*/

//Curso JavaScript: 77. BOM: Propiedades y Eventos - #jonmircha
/*
window.addEventListener('resize',(e)=>{
    console.log('*************************************')
})

console.log(window.innerHeight)
console.log(window.innerWidth)

console.log(window.outerHeight)
console.log(window.outerWidth)

window.addEventListener('load',(e)=>{

    console.log('**********--**********')
    console.log(window.scrollX)
    console.log(window.scrollY)
})

//DOM CONTENT LOAD

*/

//Curso JavaScript: 78. BOM: Métodos - #jonmircha
/*
const $btnAbrir = document.getElementById('abrir-ventana'),
$btnCerrar = document.getElementById('cerrar-ventana'),
$btnImprimir = document.getElementById('imprimir-ventana')

let ventana

$btnAbrir.addEventListener('click',(e)=>{
    ventana = open('http://www.lifeafter.game/')
})

$btnCerrar.addEventListener('click',(e)=>{
    ventana.close()

})

$btnImprimir.addEventListener('click',(e)=>{
    window.print()
})
*/



//Curso JavaScript: 79. BOM: Objetos: URL, Historial y Navegador - #jonmircha
/*
//------------------OBJETO URL(LOCATION)-----------
console.log(location)
console.log(location.protocol)
console.log(location.hostname)
console.log(location.host)
console.log(location.pathname)
console.log(location.hash)
console.log(location.port)
console.log(location.origin)
console.log(location.href)

//--------------------OBJETO HISTORIAL(HISTORY)---------------

console.log(history)
console.log(history.length)
*/
//---------------------OBJETOS NAVEGADOR (navigator)-----------
/*
console.log(navigator)
console.log(navigator.connection)
console.log(navigator.geolocation)
console.log(navigator.mediaDevices)
console.log(navigator.mimeTypes)
console.log(navigator.onLine)
console.log(navigator.serviceWorker)
console.log(navigator.storage)
console.log(navigator.usb)
console.log(navigator.userAgent)
*/