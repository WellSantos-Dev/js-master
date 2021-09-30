// Clicar em iniciar, iniciar o relógio
// clicar em pausar, pausar/despausar o relógio e por cor vermelha nas letras
// clicar em zerar, zerar o relógio

// Cada ação deve ser refletida nos numeros do .relogio
function contaSegundos(segundos) {
  let hour = new Date(segundos * 1000);
  return hour.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  })
}

let relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('p .iniciar')
const pausar = document.querySelector('p .pausar')
const zerar = document.querySelector('p .zerar')
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
    segundos++;
    relogio.innerHTML = contaSegundos(segundos)
  }, 1000);
}

iniciar.addEventListener('click', function() {
  clearInterval(timer)
  iniciaRelogio()

  if(relogio.classList.contains('pausado')) {
    relogio.classList.remove('pausado')
  }
})

pausar.addEventListener('click', function() {
  clearInterval(timer)
  relogio.classList.add('pausado')
})

zerar.addEventListener('click', function() {
  clearInterval(timer)
  relogio.innerHTML = '00:00:00'
  segundos = 0;

  if(relogio.classList.contains('pausado')) {
    relogio.classList.remove('pausado')
  }
})