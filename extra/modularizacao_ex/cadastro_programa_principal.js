import {build_person} from "./modulos/cadastro_modulos.mjs"

let btn = document.getElementById('btn')
let thing
btn.addEventListener('click', thing = () => {
    build_person()
})

// console.log(get())