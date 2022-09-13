// Objetos em JavaScript
let amigo = {nome: 'José',
sexo:'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou!')
    this.peso += p
}}

console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)
amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)

/*
PRÓXIMOS PASSOS

arrow functions
modularização
regex
json
ajax
NodeJS
JQuery
Vue
Angular
React
*/