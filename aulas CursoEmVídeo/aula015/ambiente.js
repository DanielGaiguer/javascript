let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log (num)
console.log (`O vetor tem ${num.length} posições`)
console.log (`O primeiro elemento do vetor tem valor ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1){
    console.log (`O valor 8 não foi encontrado`)
}else{
    console.log (`A posição com valor 8 está na posição ${pos}`)
}

