//vamos usar o for de maneira simplificada para realizar um dos exercicios
//anteriores
var num = [8, 1, 7, 4, 2, 9]
var pos = 0 

for(var pos in num){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}

//Vamos criar um comando para localizar a posição de um valor
var posiçao = num.indexOf(8)
//O indexOf ira localizar a posição do valor
console.log(`A posição 8 esta no indice ${posiçao}`)




/*Caso ele não encontre o valor, ele dará como resultado -1,
sendo assim, temos que tratar esse dado com uma mensagem mais 
clara para o usuário*/

