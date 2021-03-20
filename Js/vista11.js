const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

const onPeopleResponse = function(persona){
    console.log(`Hola, me llamo ${persona.name}`)
}

function obtenerPersonaje(id){
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(URL, opts, onPeopleResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(4)
obtenerPersonaje(2)



//Metodo que permite  hacer un Request y acepta varios parametros en ellos son los URLS
