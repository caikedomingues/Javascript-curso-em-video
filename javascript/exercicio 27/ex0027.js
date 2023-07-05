/*Vamos criar um pequeno programa que irá indicar o aumento de gordura de um objeto*/

//Para isso, vamos criar um objeto

var amigo = {
    Nome: 'José',
    Sexo: 'Masculino',
    Peso: 84.5,
    engordar(p = 0){
        console.log('Engordou')
        this.Peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.Nome} pesa ${amigo.Peso}`)
