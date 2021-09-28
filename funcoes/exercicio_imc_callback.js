/*
Muito abaixo do peso - 16 a 16,9 kg/m2
Abaixo do peso - 17 a 18,4 kg/m2
Peso normal - 18,5 a 24,9 kg/m2
Acima do peso - 25 a 29,9 kg/m2
Obesidade Grau I - 30 a 34,9 kg/m2
Obesidade Grau II - 35 a 40 kg/m2
Obesidade Grau III - maior que 40 kg/m2
*/

function calcularImc(peso, altura, cb) {

    if(peso == undefined || altura == undefined) {
        console.log("Por favor, preencha os campos 'peso' e 'altura'")
    }
    let imc = peso / (altura * altura)

    cb(imc)
}

function informarImc(imc) {
    if(imc >= 16 && imc <= 16.9) {
        console.log("Você está muito abaixo do peso!") 
    } else if(imc >= 17 && imc <= 18.4) {
        console.log("Você está abaixo do peso.") 
    } else if(imc >= 18.5 && imc <= 24.9) {
        console.log("Seu peso está normal.") 
    } else if(imc >= 25) {
        console.log("Você está acima do peso.") 
    } else if(imc >= 30) {
        console.log("Você está obeso. Grau: I") 
    } else if(imc >= 35) {
        console.log("Você está obeso. Grau: II") 
    } else if(imc > 40) {
        console.log("Você está obeso. Grau: III") 
    }
}

calcularImc(68, 1.72, informarImc)