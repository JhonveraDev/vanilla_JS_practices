    // console.log(JSON.parse("[1,2,3]"))//arreglo
    // console.log(JSON.parse("false"))
    // console.log(JSON.parse("false"))
    // console.log(JSON.stringify([1,2,3]))//Convierte cualquier cosa a cadena de texto
    // console.log(document)
    // let texto= prompt("¿nombre?") 
    // const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
    // hablar("Hola" + " " + texto)







//Curso JavaScript: 62. DOM: Nodos, Elementos y Selectores
// console.log('Elementos')
// console.log(document.head)//accesos al Nodo del Head
// document.write("<h2>Hail Hydra</h2>")
// console.log(document.querySelector('#menu'))
// console.log(document.getElementById('menu')) //Es más rapido este selector ya que no hay que validar nada como en el Query 
// document.querySelectorAll('a').forEach((el)=>console.log(el))
// document.querySelectorAll('.card').forEach((el)=>console.log(el))

// console.log(document.querySelectorAll('.card')[2])
// console.log(document.querySelectorAll('#menu li'))//Selectores descendientes

// const $linkDOM = document.querySelector('.link-dom')
// $linkDOM.setAttribute('target','_blank')
// $linkDOM.setAttribute('href','https://youtube.com')
// console.log($linkDOM)
// console.log($linkDOM.hasAttribute('href'))
// console.log($linkDOM.removeAttribute('href'))
// console.log($linkDOM.hasAttribute('href'))

// //Data Attributes
// console.log('Data attributes')
// console.log($linkDOM.getAttribute('data-description'))//obtener su nombre
// console.log($linkDOM.dataset)//Obtener sus propiedades o elementos
// console.log($linkDOM.hasAttribute('data-description'))//Saber si existe o no
// console.log('cambio a Paredise')
// $linkDOM.setAttribute('data-description','data-paradis')//Itercambiar su descripcion
// console.log($linkDOM.dataset.description)//Muestra su descripción







//Curso JavaScript: 64. DOM: Estilos y Variables CSS - #jonmircha​
// const $linkDOM = document.querySelector(".link-dom")
// console.log($linkDOM.style)
// $linkDOM.style.setProperty('text-decoration','none')
// $linkDOM.style.setProperty('color','#ffff')
// $linkDOM.style.setProperty('background','#000')
// $linkDOM.style.display ="block"
// $linkDOM.style.width ="50%"
// $linkDOM.style.textAlign ="center"
// $linkDOM.style.marginLeft ="auto"
// $linkDOM.style.marginRight ="auto"
// $linkDOM.style.padding ="1rem"
// $linkDOM.style.borderRadius =".5rem"

// //Variable CSS
// const $html = document.documentElement
// const $body = document.body;

// let varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color')//Extraccion de color desde el CSS   
// let varYellowColor = getComputedStyle($html).getPropertyValue('--yellow-color')//Extraccion de color desde el CSS  

// $body.style.backgroundColor  = varYellowColor//Asignacion de color amarillo al fondo
// $body.style.color  = varDarkColor//Asignacion de color negro a la letra

// $html.style.setProperty('--dark-color','#fff')//Itercambio de Colores desde la variable al color que se requiere
// varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color')//Se reasigna el color elegido a la variable ya usada
// $body.style.setProperty('color', varDarkColor)//se le dice donde sera usado el color en la etiqueta






// //Curso JavaScript: 65. DOM: Clases CSS - #jonmircha​
// const $card = document.querySelector('.card')
// console.log($card)
// console.log($card.classList)
// console.log($card.classList.contains('rotate-45'))
// $card.classList.add('rotate-45')
// console.log($card.classList.contains('rotate-45'))
// $card.classList.remove('rotate-45')
// $card.classList.toggle('rotate-45')
// $card.classList.replace('rotate-45','rotate-135')
// $card.classList.add('opacity-80','sepia')






// //Curso JavaScript: 66. DOM: Texto y HTML - #jonmircha​
// const $whatIsDom = document.getElementById('que-es')

// let text = `
//     <p>
//         El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
//         API para documentos HTML y XML.
//     </p>
//     <p>
//         Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
//     </p>
//     <p>
//         <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
//     </p>
// `
// $whatIsDom.innerHTML = text
// $whatIsDom.outerHTML = text


//67 Curso JavaScript: 67. DOM Traversing: Recorriendo el DOM​

// const $cards = document.querySelector('.cards')//Llama al elemento que haremos referencia
// console.log($cards)
// console.log($cards.children)
// console.log($cards.children[2])
// console.log($cards.parentElement)
// console.log($cards.firstChild)
// console.log($cards.firstElementChild)
// console.log($cards.lastElementChild)
// console.log($cards.nextElementSibling)
// console.log($cards.children[3].closest('section'))


//Curso JavaScript: 68. DOM: Creando Elementos y Fragmentos - #jonmircha​

// const $figure = document.createElement('figure'),
// $img = document.createElement('img'),
// $figcaption = document.createElement('figcaption'),
// $figcaptionText = document.createTextNode('Animals'),
// $cards = document.querySelector('.cards')


// $img.setAttribute('src','https://placeimg.com/200/200/animals')
// $figure.appendChild($img)
// $figcaption.appendChild($figcaptionText)
// // $figure.setAttribute('class','card')
// $figure.classList.add('card')
// $figure.appendChild($figcaption)
// $cards.appendChild($figure)

// const estaciones = ['Primavera','Otoño','Verano','Invierno'],
// $ul = document.createElement('ul')

// document.write('<h3>Estacioones del Año</h3>')
// document.body.appendChild($ul)

// $ul.innerHTML = ''
// estaciones.forEach(elements =>($ul.innerHTML += `<h1>${elements}</h1>`));


// const meses = [
//     'Enero',
//     'Febrero',
//     'Marzo',
//     'Abril',
//     'Mayo'
// ]

// $ul2 = document.createElement('ul')
// $fragment = document.createDocumentFragment('ul')

// meses.forEach(element =>{
//     const $li = document.createElement('li')
//     $li.textContent = element
//     $fragment.appendChild($li)
// })
// $ul2.appendChild($fragment)
// document.body.appendChild($ul2)


//Curso JavaScript: 69. DOM: Templates HTML - #jonmircha​


