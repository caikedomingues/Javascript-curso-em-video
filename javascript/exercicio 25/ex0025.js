/*Agora vamos desenvolver uma função para calcular o fatorial de um
número */

function fatorial(n){
    var fat = 1
    for(var c = n; c > 1; c-- ){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))