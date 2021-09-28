// const obj1 = {
//     nome: "Daniel"
// }

// const obj2 = new Object()
// obj2.nome = "Maria"
// obj2["idade"] = 28

// console.log(obj1)
// console.log(obj2)

// const str = "minha string"
// console.log(str.length)

// const str2 = new String("minha string 2")
// console.log(str2)
// console.log(str2.length)

// const data1 = Date()
// console.log(data1)
// console.log(typeof data1)

// const data2 = new Date()
// console.log(data2)
// console.log(typeof data2)


// const carro = {
//     modelo : 'Civic',
//     ano : 2021,
//     cor : 'Prata'
// }

// const adicionais = {
//     arCondicionado : true,
//     tetoSolar : true
// }

// console.log(carro)
// Object.assign(carro, adicionais)
// console.log(carro)

// carro.tracaoTrazeira = true;

// console.log(carro)




// function Carro(modelo, cor, ano) {
//     this.modelo = modelo;
//     this.cor = cor;
//     this.ano = ano;
//     this.ligar = () => {
//         console.log("VRRRRUUUUUUUUUUUM")
//     }
// }

// const civic = new Carro('Civic', 'Preto', 2021)

// console.log(civic['cor'])



// const array = [[1,2,3,4, [1,2,3]], {nome:'well', idade: 19}, function() {
//     console.log("Ola, eu sou uma função")
// }]

// console.log(array[0][4][1])
// array[0][4][array.length] = 5

// console.log(array[0][4])

// console.log(array[1].nome)

// let {nome} = array[1]

// console.log(nome)


// console.log(array[2])

// const metamorfo = {
//     voa : true
// }

// Object.assign(array[1], metamorfo)

// console.log(array[1])




let opa = {
    key1 : 'Ola',
    key2 : 'Oi'
}

const chave = Object.keys(opa)

console.log(chave[1])