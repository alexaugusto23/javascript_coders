function alturaArvoreUtopica (nciclos) {
  var altura = 1;
  for (var i = 1; i<=nciclos; i++) {
    if (nciclos == 0) {altura = 1;} 
    else if (i % 2 == 0) {altura += 1;} 
    else {altura = altura*2;}
    }
    return console.log(altura)
  }

alturaArvoreUtopica (0)
alturaArvoreUtopica (1)
alturaArvoreUtopica (2)
alturaArvoreUtopica (3)
alturaArvoreUtopica (4)
alturaArvoreUtopica (5)
alturaArvoreUtopica (6)