let n = 1

n = n || 10

console.log(n)

let isValid = 0

// if (isValid) {
//     console.log("é valido")
// }

isValid && console.log("é valido")
isValid || console.log("não é valido")


function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.falar = () => {
    document.write(`${this.nome} está falando!`)
  }
}


const well = new Pessoa('Wellington', 19)

console.log(well.nome)