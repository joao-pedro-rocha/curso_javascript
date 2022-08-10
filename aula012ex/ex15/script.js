function verificar() {
	var tempo = new Date()
	var anoAtual = tempo.getFullYear()
	var txtano = window.document.querySelector('input#txtano')
	var ano = Number(txtano.value)
	var res = document.querySelector('div#res')

	if (ano == 0 || ano > anoAtual) {
		window.alert('Ano inválido.')
	} else {
		var idade = anoAtual - ano
		var fsexo = window.document.getElementsByName('radsex')
		var genero = ''
		var img = document.createElement('img')
		img.setAttribute('id', 'foto')

		if (fsexo[0].checked) {
			genero = 'Homem'

			if (idade <= 10) {
				res.innerHTML = `<p>${genero} de ${idade} anos</p>`
				img.setAttribute('src', 'images/homem_crianca.webp')
			} else if (idade >= 11 && idade <= 17) {
				res.innerHTML = `<p>${genero} de ${idade} anos</p>`
				img.setAttribute('src', 'images/homem_adolescente.webp')
			} else if (idade >= 18 && idade <= 40) {
				res.innerHTML = `<p>${genero} de ${idade} anos</p>`
				img.setAttribute('src', 'images/homem_jovem.webp')
			} else if (idade >= 41 && idade <= 59) {
				res.innerHTML = `<p>${genero} de ${idade} anos</p>`
				img.setAttribute('src', 'images/homem_adulto.webp')
			} else {
				res.innerHTML = `<p>${genero} de ${idade} anos</p>`
				img.setAttribute('src', 'images/homem_idoso.webp')
			}

		} else if (fsexo[1].checked) {
			genero = 'Mulher'

			if (idade <= 10) {
				res.innerHTML = `<p>${genero} de ${idade} anos</p>`
				img.setAttribute('src', 'images/mulher_crianca.webp')
			} else if (idade >= 11 && idade <= 17) {
				res.innerHTML = `<p>${genero} de ${idade} anos</p>`
				img.setAttribute('src', 'images/mulher_adolescente.webp')
			} else if (idade >= 18 && idade <= 40) {
				res.innerHTML = `<p>${genero} de ${idade} anos</p>`
				img.setAttribute('src', 'images/mulher_jovem.webp')
			} else if (idade >= 41 && idade <= 59) {
				res.innerHTML = `<p>${genero} de ${idade} anos</p>`
				img.setAttribute('src', 'images/mulher_adulta.webp')
			} else {
				res.innerHTML = `<p>${genero} de ${idade} anos</p>`
				img.setAttribute('src', 'images/mulher_idosa.webp')
			}
		}

		res.style.textAlign = 'center'
		res.append(img)
	}
}