var agora = new Date()
var hora = agora.getDate()
console.log (`Agora são ${hora} horas`)
if (hora >= 18){
    console.log ('Boa noite!')
} else if( hora >= 12 ){
    console.log ("Boa Tarde!")
} else if( hora >= 6){
    console.log ('Bom dia!')
} else {
    console.log('Boa madrugada!')
}
