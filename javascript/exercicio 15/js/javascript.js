function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    //Sendo fullyear ele vai pegar os 4 digitos do ano.
    var fano = window.document.getElementById('txtano')
    //variável do input txtano
    var res = window.document.getElementById('res')
    //variável da div res
    /*Agora vamos criar os laços*/
    if(fano.value.length == 0 || fano.value.length > ano){
        window.alert('[ERRO] verifique os dados e tente novamente')
        /*Aqui ele vai pegar e conferir se a variável ano, que tem como valor 
        o ano atual, se ela é igual a 0 ou maior que o ano atual.
        Caso uma dessas condições sejam satisfeitas ele dará a mensagem de 
        alerta*/
    } else{
        /*Caso as condições do if não sejam satisfeitas, vamos realizar
        a seguinte condição:*/
        var fsex = window.document.getElementsByName('radsex')
        /*Como há 2 tags com o name 'radsex' utilizamos elements para 
        detectar as 2 tags*/
        var idade = ano - Number(fano.value)
        /* a variável idade irá calcular a idade através da subtração
        entre o ano(ano atual) e fano(ano digitado pelo usuário)
        o number ira converter de string para numero*/
        var genero = ''
        var img = document.createElement('img')
        //Irá criar uma tag img no código javascript
        img.setAttribute('id', 'foto')
        //Irá criar no código um id pra img com o nome foto.

        if(fsex[0].checked){
            //Comandos do formulário masculino
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/homemcriança.png')
            } else if(idade > 10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/homemjovem.png')
            } else if(idade > 21 && idade < 50){
               //Adulto
               img.setAttribute('src', 'imagens/homemadulto.png')
            } else{
                //idoso
                img.setAttribute('src', 'imagens/homemidoso.png')
            }
        } else if(fsex[1].checked){
            //Comandos do formulário feminino
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/mulhercriança.png')
            } else if(idade > 10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/mulherjovem.png')
            } else if(idade > 21 && idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/mulheradulta.png')
            
            } else{
                //idoso
                img.setAttribute('src', 'imagens/mulheridosa.png')


            }

        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        //Irá imprimir a resposta
        res.appendChild(img)
        //Irá adicionar a imagem 
        res.style.textAlign = 'center'
        //ira centralizar o conteudo res

    } 

}