var num = [5, 8, 2, 9, 3]
//Vamos utilizar um método para adicionar um valor na ultima posição
num.push(1)

console.log(`Nosso vetor é o ${num}`)

//Primeiro vamos conferir quantas posições possuem o vetor
console.log(`o vetor possui ${num.length} posições`)

//Vamos conferir agora o valor que ocupa a posição 0
console.log(`O primeiro valor do vetor é ${num[0]}`)

//Vamos utilizar um método para organizar os valores em ordem crescente
console.log(`Vetor em ordem crescente: ${num.sort()}`)

/* Agora vamos colocar o vetor dentro de uma estrutura de repetição
para o programa escrever os valores do vetor até a ultima posição 

var pos = 0: Posição inicial do vetor

pos <= num.lenght: Ira contar quantas posições o vetor possui

pos++: irá adicionar um valor a mais até a posição final do vetor, após
isso, o programa se encerrara.


*/

for(var pos = 0; pos <= num.length; pos++){
    console.log(`vetor dentro da estrutura de repetição: ${num}`)
}
//Vale lembrar que anteriormente organizamos o nosso vetor em ordem
//crescente

//também posso imprimir os valores separadamente//
for(pos = 0; pos <= num.length; pos++){
    console.log(`Também posso escrever separadamente: ${num[pos]}`)
}

//Agora vamos fazer o programa indicar a posição do valor

var valores = [8, 1, 7, 4, 2, 9]

for(var pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}



