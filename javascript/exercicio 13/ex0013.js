var agora = new Date()
var dia = agora.getDay()

switch(dia){
    case 0:
        console.log("Domingo")
        break

    case 1:
         console.log("Segunda-feira")
        break
    
    case 2:
        console.log("terça-feira")
        break

    case 3:
        console.log("Quarta-feira")
        break

    case 4:
        console.log("Quinta-feira")
        break

    case 5:
        console.log("Sexta-feira")
        break

    case 6:
        console.log("Sabado")
        break

     default:
        console.log("Dia inválido")
        break
        
}
/*Caso eu altere o valor da variável dia,
ele passara a mostrar o valor que eu defini
manualmente. */