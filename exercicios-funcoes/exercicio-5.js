function podeDirigir(idade, cnh) {

  if(idade >= 18 && cnh == true) {
    console.log("Pode dirigir")
  } else {
    console.log("Não pode dirigir")
  }

}

podeDirigir(18, true)
podeDirigir(17, false)
podeDirigir(17, true)
podeDirigir(19, false)


function podeMatricular(idade) {
  if(idade >= 18) {
    return 'Você pode se matricular na auto escola'
  } else {
    return 'Você não pode se matricular na auto escola'
  }
}

console.log(podeMatricular(19))

console.log(podeMatricular(17))
