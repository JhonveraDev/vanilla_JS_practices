
function no(){
    let option_no='NO'
    document.getElementById('options').innerHTML = option_no
    document.getElementById('box-options').style.display = 'block'
}

function yes(){
    let option_yes='YES'
    document.getElementById('options').innerHTML = option_yes
    document.getElementById('box-options').style.display = 'block'
}

function blue(){
    document.getElementById('box-options-2').style.display = 'block'
    document.getElementById('options').style.color="#000080"

}

function orange(){
    document.getElementById('box-options-2').style.display = 'block'
    document.getElementById('options').style.color="#FF6600"
}

function big(){
    document.getElementById('options').style.fontSize='200px'
}

function small(){
    document.getElementById('options').style.fontSize='25px'

}

