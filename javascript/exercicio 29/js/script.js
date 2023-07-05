function tabuada(){
    /*Para realizar a operação, primeiro temos que ligar as variáveis
    aos ids */
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    /*Agora realizaremos um pequeno tratamento de erro utilizando o if*/
    /*Lógica do if: Caso o valor da variável num for 0, ele apresentara
    o alerta com a mensagem, caso contrário, ele irá converter a variável
    n de texto para número. */
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
        
    } else{
       var n = Number(num.value)
       var c = 1 
       /*Para evitar que a tabuada fique junta com a anterior, devemos
       limpar a antiga para gerar a próxima, sendo assim, usamos o 
       comando tab.innerHTML = '' */
       tab.innerHTML = ''
        //Conversão da variável para numero
        /*Agora vamos utilizar o while(enquanto) para trabalhar na 
        tabuada */

        /*Lógica do while: o while só acontecerá se o usuário digitar um
        valor, pois, o while esta dentro de um senão. O while ira operar
        da seguinte maneira: se o valor de c (contador) for menor ou
        igual a c ele ira criar o elemento options e irá multiplicar o
        valor da variável n com o valor da variável c.*/

        while(c <= 10){
            /*Vamos usar essa variável para criar o elemento option
            dentro do HTML, através do comando createElement*/
            var item = document.createElement('option')
            item.text = `${n}  x ${c} = ${n*c}`
            /*O item.value permite que o usuário selecione o conteudo da
            tabuada */
            item.value = `tab${c}`
            tab.appendChild(item)
            c++

        }
    }
}