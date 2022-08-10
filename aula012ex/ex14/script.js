function carregar() {
    var agora = new Date()
    var hora = agora.getHours()
    var corpo = window.document.body
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('div#imagem')
    msg.innerHTML += `${hora}h.`
    if (hora >= 12 && hora < 18) {
        corpo.style.background = '#d66b24'
        img.innerHTML = '<img src="images/tarde.jpeg" alt="tarde">'
    } else if (hora >= 18) {
        corpo.style.background = '#11297a'
        img.innerHTML = '<img src="images/noite.jpg" alt="noite">'
    }
}
