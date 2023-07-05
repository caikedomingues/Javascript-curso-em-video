/*Antes de trabalhar na função vamos criar as variáveis e liga-las aos 
ids, só que dessa vez usando o queryselector*/

var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []
/*O vetor está vazio, pois, ele ira coletar os números digitados pelo
usuário */

function adicionar(){
    /*Vamos utilizar um if(se) irá conferir se as variáveis são numeros
    e só ira adicionar esse valor, caso o numero digitado não esteja na
    lista */
    if(isNumero(num.value) && !inLista(num.value, valores)){
        window.alert("Tudo ok")
        //O push serve para adicionar valores no vetor
        //Assim vamos colocar no vetor os valores da 
        //variável num
        valores.push(Number(num.value))
        //Agora temos que fazer o conteudo do vetor aparecer na tela
        /*Para isso, vamos criar um elemento em html através da 
        criação de uma variável */
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ' '

    }else{
        window.alert('Valor invalido ou já encontrado na lista')
    }
    /*Agora vamos automatizar a limpeza da barra de pesquisa.
    A ideia é que o número saia da barra ao ser enviado */
    num.value = " "
    num.focus()

}

function isNumero(n){
    /*Vamos utilizar o if para estabelecer os parâmetros */
    /*Lógica do if: se o valor da variável n for maior ou igual a 1 e(&&)  
    menor ou igual a 100, retorne true, senão retorne false */
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, I){
    if(I.indexOf(Number(n)) != -1){
        return true
    } else{
        false
    }
}

/*Vamos criar a função do botão finalizar, e para isso teremos
que estabelecer algumas condições com o if(se) */

/*Lógica do if: Primeiro ele irá conferir se o campo dos valores está
vázio, caso não esteja ele ira chamar o else que realizara as operações
dos vetores. */
function finalizar(){
    if(valores.length == 0){
        window.alert("Adicione valores antes de finalizar")
    } else{
        var tot = valores.length
        /* Vou criar a variável dos valores maiores e menores */
        var maior = valores[0]
        var menor = valores[0]
        //Variáveis de soma e média
        var soma = 0
        var media = 0
        /*Agora vou criar uma condição de um loop, ou seja, uma
        estrutura de repetição ou um laço*/
        for(var pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        //Cálculo da média
        media = soma / tot

        res.innerHTML = ' '
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> Somando todos os valores temos ${soma}  </p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}</p>`
    }
}


