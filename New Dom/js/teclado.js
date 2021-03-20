const d = document;

export function shortCuts (e){
    console.log(e)
    console.log(e.type)
    console.log(e.ctrlKey)

    if(e.key === 'a' && e.altKey){
        confirm('Lanzamiento de alerta por ALT')
    }
}
