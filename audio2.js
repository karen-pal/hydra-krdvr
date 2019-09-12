a.show()
a.setBins(6)
a.fft[0]

osc(8,-0.5, () => (a.fft[0]*40))
  .color(-1.5, -1.5, -1.5)
  .rotate(-0.5, -0.5)
  .blend(o0).blend(o0).blend(o0).modulate(shape(2).rotate(0.5, -0.5).scale(2).repeatX(3, 3).modulate(noise( () => a.fft[0]* 5)).repeatY(1, 4))
  .out(o0)


