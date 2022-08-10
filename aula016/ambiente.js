// Funções em JavaScript.
/*
function parimp(n) {
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

let numero = 661
console.log(parimp(numero))
*/

// -----------------------------

/*
function soma(n1, n2) {
    return n1 + n2
}

let n1 = 4
let n2 = 1
let resultado1 = soma(n1, n2)

console.log(`A soma entre ${n1} e ${n2} é igual a ${resultado1}.`)
*/
/*
Ao passar apenas um parâmetro para a função, o segundo
parâmetro recebe o valor undefined e o resultado da soma entre um número
e um undefined é NaN (NotaNumber).
*/
/*
let resultado2 = soma(n1)
console.log(`O novo resultado é ${resultado2}.`)
*/

// ----------------------------------------------------------------------------

// Parâmetros opcionais.
/*
function subtracao(n1=0, n2=0) {
    return n1 - n2
}

let n1 = 4
let n2 = 1
let resultado = subtracao(n1, n2)
console.log(`A subtração entre ${n1} e ${n2} é igual a ${resultado}.`)
*/

// -----------------------------------------------------------------------

// Função dentro de uma variável
/*
let v = function(x) {
    return x * 2
}

console.log(v(5))
*/

// ------------------------------

// Função para calcular fatorial.
/*
function fatorial(n) {
    let fat = 1

    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))
*/

// ----------------------

/*
Função recursiva.
Uma função recursiva é uma função que chama a si mesma. 
*/
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))