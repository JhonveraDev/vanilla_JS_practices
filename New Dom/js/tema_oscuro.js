export default function darkTheme(btn,classDark){
    const $themeBtn = document.querySelector(btn),
    $selectors = document.querySelectorAll('[data-dark]')
    console.log( $selectors)

    let moon ="🌙",
    sun ="☀️"

    document.addEventListener('click',e=>{

        if(e.target.matches(btn)){
            console.log($themeBtn.textContent)
        }
        if($themeBtn.textContent === moon){
            $selectors.forEach(el => el.classList.add(classDark))
            $themeBtn.textContent = sun
        }else{
            $selectors.forEach(el => el.classList.remove(classDark))
            $themeBtn.textContent = moon
        }
    })

}