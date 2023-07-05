/*Tentaremos trabalhar o conceito de recursão*/
/* recursão: Uma recursão ocorre quando um função chama outra função */

function fatorial(n){
    if (n == 1){
        return 1
    } else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(4))

/* Reparem que nesse código, caso o n seja diferente de 1, a função
chamara outra função fatorial para realizar a operação, sendo assim,
temos uma recursão  */