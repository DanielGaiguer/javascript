let lista = document.querySelector("#lista")
let num = document.querySelector ("#fnum")
let res = document.querySelector ('#res')
let v =  []





function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){//se ele retornar -1, quer dizer que nao encontrou o valor (n) no vetor, retornando falso na chamada (já que -1 não é diferente de -1) executando o bloco. se ele encontrar o valor de (n), ele vai retornar o numero de onde o valor (n) está localizado no vetor, sendo diferente de -1, ele vai retornar true. porém na chamada existe um sinal de exclamação (!), (ou seja, se o valor for diferente de true,(ele vai executar o bloco) indo pra chamada ele vai verificar que não é diferente de true, ele não vai executar o bloco, pulando direto para o else, que avisa que o valor já está na lista. então, vendo que o valor retornado não é diferente de -1 (ele vai retornar false), retornando false, que é diferente(!) de true, assim ele vai executar o bloco.
        return true
    }else{
        return false
    }
}
function adicionar(){ 
    if(numVal(num.value)){//vai chamar a funcao, caso retorne true vai executar, se retornar falso vai ir pro else if
        window.alert ("[ERRO] Dados inválidos")
    }else if(!inLista(num.value, v) ){// ! = contrario, ele só vai executar o bloco se o número NÂO estiver no inLista 
        v.push(Number(num.value))
        let opt = document.createElement('option')
        opt.text = `Valor ${num.value} adicionado`
        lista.appendChild(opt)
    }else{
        window.alert ("Este valor já esta na lista")
    }
    num.value = ''
    num.focus()
    res.innerHTML = ""
}

function numVal(n) {
    if(num.value.lenght == 0 || num.value < 1 || num.value > 100){
        return true
    }/*else {
        return false
    }*///nao é obrigatorio, ja que se nao é verdadeiro é falso
}

function finalizar(){
    if (v.indexOf(1) == -1 ){//também funcionaria: v.lenght == 0 
        window.alert ('[ERRO] Nenhum valor adicionado!')
    }else{
        let totpos = 0
        let mai = 0 
        let men = 100
        let soma = 0
        let med = 0 
        for (let pos in v ){
            totpos ++ 
            soma += v[pos]
            if (mai < v[pos]){
                mai = v[pos]
            }
            if (men > v[pos]){
                men = v[pos]
            }
        }
        med = soma / totpos 
        res.innerHTML += `<p>Ao todo, temos ${totpos} números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado foi ${mai}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${men}. </p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}.`
        res.innerHTML += `<p> A média dos valores digitados é ${med}.`
    }
}