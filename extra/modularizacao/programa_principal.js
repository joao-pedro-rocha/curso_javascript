// Permite que variáveis, funções e objetos sejam importados.
import {hello, saySomething, person, dinamicModule} from './modulos.js'

console.log(hello)
saySomething('Hey!')

console.log(person.name)
console.log(person.age)
person.sayHello()

/*
Importa o módulo apenas quando for necessário, 
nesse caso apenas ao apertar um botão.
*/
let btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    import('./modulos.js').then((Module) => {
        console.log(dinamicModule())
    })
})