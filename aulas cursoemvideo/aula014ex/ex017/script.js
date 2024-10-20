function calcular(){
    var numero = document.querySelector("#txtnum")
    var n = Number(numero.value)
    var tab = document.querySelector("#txttab")
    var res = 0 
    tab.innerHTML = ""
    if(numero.value.lenght == 0){
        window.alert('Por favor digite um número ')
    }else{
        for(var c = 1 ; c <= 10 ; c++ ){
        res = n * c
        tab.innerHTML += `<p>${n}x${c}=${res}</p>`
        }
    }
}
    