/*
ARROW FUNCTIONS
Fonte: https://www.w3schools.com/js/js_arrow_function.asp

São usadas para escrever menos código. Declara-se o nome da função como se 
fosse uma variável, depois são passados os parâmetros e no final as instuções  
da função (após o "=>").

*/
let somar = (n1, n2) => n1 + n2

console.log(`A soma é igual a ${somar(5, 5)}`)

// -------------------------------------------

let hello

hello = () => {
    return 'Hello World!'
}

console.log(hello())

// -----------------

/*
Arrow function sem chaves e sem a palavra chave return.
Isso funciona se a função tiver apenas uma instrução.
*/
let hello2

hello2 = () => 'Hello! Arrow function sem chaves e sem a palavra chave return.'

console.log(hello2())

// ------------------

// Os parâmetros são passados dentro dos parênteses.
let welcome

welcome = (name) => `Hello, ${name}!`

console.log(welcome('João'))

// Quando houver apenas um parâmetro, não precisa usar parênteses.
let saySomething

saySomething = something => `João says: ${something}`

console.log(saySomething('Bom dia!'))