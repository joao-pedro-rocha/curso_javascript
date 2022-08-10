function calcular() {
	let numeroElement = document.getElementById('numero')
	let numero = Number(numeroElement.value)
	let tabuada = document.getElementById('tabuada')
	let numeroTabuada = document.getElementById('numero-tabuada')

	if (numeroElement.value.length == 0) {
		window.alert('[ERRO] Faltam dados!')
	} else {
		numeroTabuada.innerHTML = `<p>Mostrando a tabuada de ${numero}</p>`
		tabuada.innerHTML = ''
		for (let c = 0; c <= 10; c++) {
			tabuada.innerHTML += `<option>${numero} x ${c} = ${numero * c}</option>`
		}
	}
}