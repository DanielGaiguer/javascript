let txtpeso = document.querySelector("#ipeso")
let txtaltura = document.querySelector ("#ialtura")
let res = document.querySelector ("#ires")
let peso = Number(txtpeso.value)
let alt = Number(txtaltura.value)

function calcular(){
    
    if ((eNumero(peso, alt)) && (ePeso()) ){
        let IMC = peso / alt**2 
    }else{
        
    }
}

function eNumero(p, a){
    if(p === 0 || a === 0 ){
        res.innerHTML = "Dados Invalidos!"
        res.innerHTML += peso
        res.innerHTML += alt
        res.innerHTML += Number(txtpeso.value)
        return false 
    }else {
        return true 
    }
}

function ePeso(){ 
    if (peso.slice(-3) === '.' && peso.length <= 6 ){
        return true 
    }else{
        res.innerHTML = "Teste"
        return false 
    }
}

function setResultado(msg){
    res.innerHTML += msg
}