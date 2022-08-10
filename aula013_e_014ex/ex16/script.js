function contar() {
	let inicio = document.getElementById('inicio-contagem')
	let fim = document.getElementById('fim-contagem')
	let passo = document.getElementById('passo-contagem')
	let res = document.getElementById('res')
	
	// Verifica se os campos estão vazios
	if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
		res.innerHTML = 'Impossível contar'
		window.alert('[ERRO] Faltam dados!')
	} else {
		res.innerHTML = 'Contando: <br>'
		let i = Number(inicio.value)
		let f = Number(fim.value)
		let p = Number(passo.value)

		if (p <= 0) {
			window.alert('Passo inválido! Considerando passo 1.')
			p = 1
		}

		if (i < f) {
			// Contagem crescente
			for (let c = i; c <= f; c += p) {
				res.innerHTML += `${c} &#128095 `
			}
		} else {
			// Contagem regressiva
			for (let c = i; c >= f; c -= p) {
				res.innerHTML += `${c} &#128095 `
			}
		}
		res.innerHTML += 'FIM'
	}
}