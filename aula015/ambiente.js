// Variáveis compostas, arrays e vetores
let numeros = [6, 8, 9]
// Imprime os valores de cada elemento do array
console.log(numeros)

// Adiciona o número 6 no elemento 3
numeros[3] = 1
console.log(numeros)

// Imprime o valor do elemento de índice 2 do array
console.log(numeros[2])

// Adiciona um novo elemento no fim do array e insere o valor desejado 
numeros.push(5)
console.log(numeros)

// Imprime a quantidade de elementos do  array
console.log(numeros.length)

// Ordena os números do array
console.log(numeros.sort())

// Imprime os valores de cada elemento do vetor sem a formatação padrão (tradicional)
for(let c = 0; c < numeros.length; c++) {
    console.log(`A posição ${c} tem o valor ${numeros[c]}`)
}

console.log('-------------------------')

// Imprime de forma mais simplificada
// Essa sintaxe do for só funciona com vetores e arrays
for(let pos in numeros) {
    console.log(`A posição ${pos} tem o valor ${numeros[pos]}`)
}

// Busca e retorna o índice de um determinado valor
console.log(`O valor 5 está na posição ${numeros.indexOf(5)}`)
// retorna -1 se o valor não existir
console.log(`O valor 10 está na posição ${numeros.indexOf(10)}`)