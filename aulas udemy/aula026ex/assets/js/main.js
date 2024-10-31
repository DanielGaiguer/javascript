let form = document.querySelector("#form")

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const inputPeso = e.target.querySelector('input#peso') 
    const inputAltura = e.target.querySelector('input#altura')
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso && !altura){
        setResultado('Peso e Altura Inválidos!', false)
        return
    }
    if (!peso) {
        setResultado('Peso Invalido!', false)
        return 
    }
    if (!altura){
        setResultado('Altura Invalida!', false)
        return
    }
    
    const imc = getImc(peso, altura)
    console.log (imc)
} )

function criaP(){
    let p = document.createElement('p')
    return p 
}

function setResultado(msg, isValid){
    let resultado = document.querySelector("#resultado")
    resultado.innerHTML = ''
    const p = criaP()
    p.innerHTML = msg
    resultado.appendChild(p)
}

function getImc(peso, altura){
    let imc = peso / altura **2
    return imc.toFixed(2)
}