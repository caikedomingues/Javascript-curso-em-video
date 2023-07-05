/*Vamos criar a nossa função contar para o botão*/
function contar(){
    //Feito isso criaremos as variáveis que vamos trabalhar.
    /*Após a criação ligaremos as variáveis com 
    os seus respectivos inputs definidos no HTML. */
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    //Tratamento de erro do passo//
    if(p <= 0){
        window.alert("Passo inválido! Considerando passo 1")
        p = 1
    }

    /*Agora vamos testar um formulário utilizando operadores
    lógicos*/
    /* O teste funcionará da seguinte maneira: caso ocorra  das variáveis
    terem valor 0, daremos o alerta "Faltam dados", caso contrario, o
    alerta apresentara a mensagem "Contando". Para isso, utilizaremos
    o operador ou(||) */
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("Faltam dados")
        res.innerHTML = 'Impossivel contar'
    } else{
        res.innerHTML = 'Contando: '

        /*Agora será necessário criar mais tres variáveis para realizar a
        conversão do tipo do dado. Precisamos converter de texto para 
        números.*/

        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        /*Vamos trabalhar no contador utilizando o for (loop, se não
            me engano). Vale lembrar que o for é separado em tres 
            componentes sendo eles: inicialização, teste-lógico e incremento*/

            /*Lógica do for: Definimos um variável c que no inicio sempre 
            receberá 1,depois, iremos comparar se o valor digitado pelo 
            usuário é menor ou igual ao valor definido no fim, feito isso, 
            ele irá adicionar o incremento +1 até o valor definido no 
            passo*/
            if(1 < f){
                //Contagem crescente
                for(var c = 1; c <= f; c += p ){
                    res.innerHTML += ` ${c} \u{1f449} `
                } 
            } else{
                //Contagem regressiva
                for(var c = 1; c >= f; c -= p){
                    res.innerHTML +=  `${c} \u{1f449}`

                }

            }
          
        res.innerHTML += `\u{1f3c1}`
    }


}