/*Vamos criar um programa através de uma função que irá conferir se 
o valor da variavel é par ou impar */
//Primeiro vamos chamar um método através de uma variável//
var res = parimpar(4)

//Vamos criar a função e criar laços dentro da função
function parimpar(n){

    if(n%2 == 0){
        return 'Par'
    } else{
        return 'impar'
    }

}

console.log(res)

