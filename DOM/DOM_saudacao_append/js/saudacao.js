(function() {
    
    const nickname = "Well"
    const hero = document.querySelector('.hero');
    const topBarElement = document.createElement('div')

    if(nickname){
        topBarElement.className = "top-bar";
        topBarElement.innerHTML += `<p>Olá, ${nickname}</p>`

        hero.appendChild(topBarElement)
    }
    
})()
