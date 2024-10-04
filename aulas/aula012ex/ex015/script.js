function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector ("#txtano")
    var res = document.querySelector ('#res')
    
    if (Number(fano.value) > ano || fano.value.length == 0 || Number(fano.value) <= 0 ){
        window.alert ('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var pronome = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade > 0 && idade < 10){
                img.setAttribute('src', 'foto-criança-m.jpg')
            } else if(idade < 21){
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if(idade < 50){
                img.setAttribute('src', 'foto-adulto-m.jpg')
            }else{
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
        }else if (fsex[1].checked) {
            genero = 'mulher'
            pronome = "a"
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'foto-criança-f.jpg')
            } else if(idade < 21){
                img.setAttribute('src', 'foto-jovem-f.jpg')
            } else if(idade < 50){
                img.setAttribute('src', 'foto-adulto-f.jpg')
            }else{
                img.setAttribute('src', 'foto-idosa-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `você é um${pronome} ${genero} com ${idade} anos`
        res.appendChild(img)
    }
    
    
}