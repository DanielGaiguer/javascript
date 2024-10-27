let txtpeso = document.querySelector("#ipeso");
let txtaltura = document.querySelector ("#ialtura");
let res = document.querySelector ("#ires");
let peso = Number(txtpeso.value);
let alt = Number(txtaltura.value);
function calcular(){
    res.innerHTML += 'txtpeso'
    res.innerHTML += peso
    res.innerHTML += alt
    peso = Number(txtpeso.value)
    res.innerHTML += peso 
    if ((eNumero(peso, alt)) && (ePeso()) ){
        let IMC = peso / alt**2 
    }else{
        
    }
}

function eNumero(peso, alt){
    if(peso === 0 || alt === 0 ){
        res.innerHTML = "Dados Invalidos!"
        
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

function num(v){
    
}