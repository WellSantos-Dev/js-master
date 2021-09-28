function defineLargura(string) {
  if(typeof string != "string") {
    return "Por favor, digite uma string"
  } else {
    if(string.length > 10) {
      return 'Texto muito longo';
    } else {
      return 'Texto dentro do limite';
    }
  }
}

console.log(defineLargura('Wellingtonn'))