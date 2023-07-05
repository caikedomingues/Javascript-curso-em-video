

//Vamos pegar o horário atual
/*Vale lembra que sempre usamos o new Date()
quando vamos realizar esse tipo de execução*/


var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if( hora < 12){
    console.log("Bom dia")
} else if(hora <= 18){
    console.log("Boa tarde")
} else {
    console.log("Boa noite")
}