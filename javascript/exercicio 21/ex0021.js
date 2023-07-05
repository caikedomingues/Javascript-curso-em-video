var num = [8, 1, 7, 4, 2, 9]
 

var posiçao = num.indexOf(5)
/*Caso ele não encontre o valor, ele dará como resultado -1,
sendo assim, temos que tratar esse dado com uma mensagem mais 
clara para o usuário*/

if(posiçao == -1){
    console.log("Valor não encontrado")
}else{
    console.log(`O valor se encontra no indice ${posiçao}`)
}