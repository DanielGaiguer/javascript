function carregar() {
    var msg = window.document.querySelector ('#msg')
    var img = window.document.querySelector ('#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`Agora são ${hora} horas.`)
    if (hora >= 0 && hora < 12) {
        img.src = 'foto_manha.jpg'
        document.body.style.background = '#FFA53F'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'foto_tarde.jpg'
        document.body.style.background = '#B9B46A'
    } else {
        img.src = 'foto_noite.jpg'
        document.body.style.background = '#3D304E'
    }
}
