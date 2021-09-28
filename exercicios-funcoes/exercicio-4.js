function retornaAleatorio(numeroMaximo) {
  return Math.floor(Math.random() * numeroMaximo) + 1;
}

console.log(retornaAleatorio(100))