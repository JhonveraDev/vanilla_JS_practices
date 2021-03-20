const d = document

export function shortcuts(e){
    console.log(e)
    console.log(e.type)

    if(e.key==='a' && e.altKey){
        alert('Alerta lanzada al sistema')
    }
    
    if(e.key==='p' && e.altKey){
        prompt('Prompt Lanzado al si stema')
    }
    
    if(e.key === 'c' && e.altKey){
        confirm('Confirm Lanzado al sistema')
    }
}

