//---------------------------------
function newFunction(name='oscar',age=22,country='Colombia'){
    console.log(name,age,country)
}
newFunction('pedro',40,'España')
newFunction()


//---------------------------------
let hello = 'Hello'
let world = 'Wordl'
let epic = `${hello} ${world}`
console.log(epic)


//---------------------------------
let lore=`apdawñdkawñdkodawkda
ñalwkdñawodakwñawkodñawolkadakow`
console.log(lore)


//---------------------------------
let person={
    names:'jhon',
    age:24,
    country:'New Zelanda'
}
//forma 1
console.log(person.names)
//Forma 2, Destrucutando datos
let {names,age,country} = person
console.log(names,age)


//----------------------------------
let team1 = ['uno','dos','tres']
let team2 = ['cuatro','cinco','seis']
let numeros = ['Numeros',...team1,...team2]
console.log(numeros)


//----------------------------------
const names=[
    {name:'Oscar',age:22},
    {name:'GG',age:27}
]
let listOfNames = names.map(item=>{console.log(item.name)})


//-------------PROMESA---------------------
const promise = ()=>{
    return new Promise((resolve,reject)=>{
        true?resolve('Excelente,Snior Dev'):reject('Hay un contratiempo,Senior Dev')
    })
}
promise()
    .then(response =>console.log(response))
    .catch(error=>console.log(error));


//-------------CLASES---------------------
class calculator{
    constructor(){
        this.valueA = 0
        this.valueB = 0
    }
    sum(valueA,valueB){
        this.valueA = valueA
        this.valueB = valueB
        return valueA+valueB
    }
}
const calc = new calculator()
console.log(calc.sum(2,4))





