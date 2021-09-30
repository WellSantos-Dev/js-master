function mostraHora() {
    let hour = new Date()
    return hour.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

setInterval(function() {
    console.log(mostraHora())
}, 1000)