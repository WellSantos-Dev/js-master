/*
Pode receber um ou mais valores numéricos
Deve retornar um único número
Deve gerar um erro se receber um parâmetro não número
Deve retornar zero caso não receba nenhum parâmetro
*/

(function() {

    function calcularMedia() {
        let sum = 0;
        let media = 0;
        let qtd = arguments.length
        for(let i = 0; i < arguments.length; i++) {
            if(typeof arguments[i] != 'number') {
                console.log("Por favor, digite um numero");
                break;
            }
            let resultSum = (sum += arguments[i]);
            media = resultSum / qtd;
        }

        if(media == 0) {
            console.log("Digite os números separados por vírgula. Ex: 1, 2, 3");
        } else {
            console.log(`A media é: ${media}`)
        }
    }

    calcularMedia(1, 2, 3)
    
})()