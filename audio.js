a.show() 
//SOUND 
a.setScale (10 ) 
a.setBins (6) 
//
a.settings[0].cutoff = 1 
a.settings[1].cutoff = 2 
a.settings[2].cutoff = 4 
a.settings[3].cutoff = 6 
a.settings[4].cutoff = 8 
a.settings[5].cutoff = 9 

osc(322).color(0,0,0.5) 
.add(shape(2).color(2,2,2).scale(0.006).rotate(0.000001)) 
.modulate(noise(()=> a.fft[1]*10 +0.01).scale(5,0.1)) 
.scale(1.2,1,3) 
//
.scale(()=> a.fft[3]*0.1 -2) 
//
.repeat(1,5) 
//
.rotate(1,()=> a.fft[3]*1 +0.01) 
.out(o0)
