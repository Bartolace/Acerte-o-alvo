var tela = document.querySelector('canvas')
var ctx = tela.getContext('2d')

ctx.fillStyle = 'grey'
ctx.fillRect(0, 0, 600, 400)

//pensou primeiro o que a função vai receber
var xAleatorio
var yAleatorio

function desenhaCirculo(x, y, raio, cor) {
  ctx.fillStyle = cor
  ctx.beginPath()
  ctx.arc(x, y, raio, 0, 2 * Math.PI)
  ctx.fill()
}

function limpaTela() {
  ctx.clearRect(0, 0, 600, 400)
}

let raio = 10

function desenhaAlvo(x, y) {
  desenhaCirculo(x, y, raio + 20, 'red')
  desenhaCirculo(x, y, raio + 10, 'white')
  desenhaCirculo(x, y, raio, 'red')
}

function sorteiaPosicao(maximo) {
  return Math.floor(Math.random() * maximo)
  // arredonda para baixo
}

function atualizaTela() {
  limpaTela()
  xAleatorio = sorteiaPosicao(600)
  yAleatorio = sorteiaPosicao(400)
  desenhaAlvo(xAleatorio, yAleatorio)
}

function dispara(evento) {
  var x = evento.pageX - tela.offsetLeft
  var y = evento.pageY - tela.offsetTop

  if (
    x > xAleatorio - raio &&
    x < xAleatorio + raio &&
    y > yAleatorio - raio &&
    y < yAleatorio + raio
  ) {
    alert('Acertou!')
  }
}

setInterval(atualizaTela, 500)

tela.onclick = dispara
