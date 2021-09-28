/*
Muito abaixo do peso - 16 a 16,9 kg/m2
Abaixo do peso - 17 a 18,4 kg/m2
Peso normal - 18,5 a 24,9 kg/m2
Acima do peso - 25 a 29,9 kg/m2
Obesidade Grau I - 30 a 34,9 kg/m2
Obesidade Grau II - 35 a 40 kg/m2
Obesidade Grau III - maior que 40 kg/m2
*/

function imc(peso, altura) {


    if(peso == undefined || altura == undefined) {
        throw Error("Need two parameters.")
    } else {
        console.log("Bem vindo ao calculador de IMC!")
    }
    result = peso / (altura * altura)
    
    if(result >= 16 && result <= 16.9) {
        return "Você está muito abaixo do peso!"
    } else if(result >= 17 && result <= 18.4) {
        return "Você está abaixo do peso."
    } else if(result >= 18.5 && result <= 24.9) {
        return "Seu peso está normal."
    } else if(result >= 25) {
        return "Você está acima do peso."
    } else if(result >= 30) {
        return "Você está obeso. Grau: I"
    } else if(result >= 35) {
        return "Você está obeso. Grau: II"
    } else if(result > 40) {
        return "Você está obeso. Grau: III"
    }
    
}

console.log(imc(65, 1.72))