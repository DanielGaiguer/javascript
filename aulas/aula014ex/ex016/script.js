function contar(){
    var ini = document.querySelector ("#txtini")
    var fim = document.querySelector ("#txtfim")
    var pas = document.querySelector ("#txtpas")
    var res = document.querySelector ("#res")
    if (ini.value.lenght == 0 || fim.value.lenght == 0 || pas.value.lenght == 0 ){
        window.alert(" [ERRO] dados invalidos")
        res.innerHTML = "impossivel contar"
    }else{
        res.innerHTML = "Contando: <br>"
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (p <= 0){
            window.alert("dado invalidos! Considerando PASSO = 1")
            p = 1 
        }
        if(i < f) {
            //contagem crescente:
            for(var c = i ; c <= f ; c += p){
            res.innerHTML += `${c}`
            res.innerHTML += ' \u{1F449} '
        }
        }else if(i > f){
            for (var c = i ; c >= f; c -= p ){
                res.innerHTML += `${c}`
                res.innerHTML += ' \u{1F449} '
            }
        }
        res.innerHTML += '\u{1F3C1}'
        }
        
    }