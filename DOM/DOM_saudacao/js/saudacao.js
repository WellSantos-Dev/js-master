(function saudacao() {

    function Pessoa(nickname) {
        this.nickname = nickname
    }

    const well = new Pessoa('Wellzera')
    const nath = new Pessoa('Nath123')
    const p = document.querySelector('.top-bar p')

    let pessoas = [nath, well]
    
    p.textContent += `${pessoas[1].nickname}`
})()