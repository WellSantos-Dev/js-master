let idade = 19;
let cnh = true;

if(idade >= 18 && cnh == true) {
  console.log("Pode dirigir")
} else if(idade >= 18 && cnh == false) {
  console.log("Você tem idade para dirigir, mas não tem CNH.")
} else if(idade <= 18 && cnh == true) {
  console.log("Como você tirou sua CNH com essa idade?? KKKK")
} else {
  console.log("Po, sem CNH e sem idade. Cadê sua mãe mlq???")
}