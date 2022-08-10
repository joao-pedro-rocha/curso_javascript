let lista = []
let resultadoElement = document.getElementById('result')

function inLista(numero, lista) {
	if (lista.indexOf(numero) != -1) {
		return true
	} else {
		return false
	}
}

function adicionar() {
	let numeroElement = document.getElementById('number')
	let numero = Number(numeroElement.value)
	let displayLista = document.getElementById('values')

	if (numeroElement.value.length == 0) {
		window.alert('Você precisa digitar um número para adicionar.')
	} else if (numero < 1 || numero > 100) {
		window.alert('Digite um número entre 1 e 100.')
	} else if (inLista(numero, lista)) {
		window.alert(`O número ${numero} já está na lista.`)
	} else {
		lista.push(numero)
		resultadoElement.innerHTML = ''
		displayLista.innerHTML +=`<option>Valor ${numero} foi adicionado.</option>`
	}
	numeroElement.value = ''
	numeroElement.focus()
}

function analisar(lista) {
	/*
	Math.max e Math.min são usados para descobrir maior e menor valores,
	respectivamente.
	Math.max.apply e Math.min.apply são usados para descobrir o maior e o menor
	valor dentro de um array
	*/
	let maior = Math.max.apply(Math, lista)
	let menor = Math.min.apply(Math, lista)
	// Alternativa para saber o menor e o maior número.
	/*
	let maior = lista[0]
	let menor = lista[0]
	*/
	let soma = 0

	
	// For tradicional em um array.
	/*
	for(let c = 0; c < lista.length; c++) {
		soma += lista[c]
	}
	*/
	
	for(pos in lista) {
		soma += lista[pos]
		// Alternativa para saber o menor e o maior número.
		/*
		if (lista[pos] > maior) {
			maior = lista[pos]
		}
		
		if (lista[pos] < menor) {
			menor = lista[pos]
		}
		*/
	}
	
	resultadoElement.innerHTML += `<p>Quantidade de números adicionados: ${lista.length}</p>`
	resultadoElement.innerHTML += `<p>Maior número: ${maior}.<p>`
	resultadoElement.innerHTML += `<p>Menor número: ${menor}.</p>`
	resultadoElement.innerHTML += `<p>Soma dos números digitados: ${soma}.</p>`

	let media = soma / lista.length

	resultadoElement.innerHTML += `<p>Média dos números digitados: ${media}</p>`
}