const path = document.getElementById('the-path')

const roundTo = function (input, sigdigs) {
  return Math.round(input * Math.pow(10, sigdigs)) / Math.pow(10, sigdigs)
}

const makeSpiralPoints = function (origin, revolutions, pointCount, clockwise, padding) {
  const direction = clockwise ? 1 : -1
  const circ = padding / (2 * Math.PI)
  const step = (2 * Math.PI * revolutions) / pointCount
  const points = []
  let angle = null
  let x = null
  let y = null
  for (let i = 0; i <= pointCount; i++) {
    angle = direction * step * i
    x = roundTo((circ * angle) * Math.cos(angle) + origin.x, 2)
    y = roundTo((circ * angle) * Math.sin(angle) + origin.y, 2)
    points.push(x + ' ' + y)
  }

  return ('M ' + points.shift() + ' S ' + points.join(' '))
}

path.setAttribute('d', makeSpiralPoints({ x: 75, y: 75 }, 4, 2048, false, 25))
