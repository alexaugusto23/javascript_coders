/*
As árvores utópicas  crescem de uma forma particular, em dois ciclos:

cada primavera dobram seu tamanho
cada verão crescem um metro
Se Laura planta uma árvore utópica com um metro, no final do outono, qual seria sua altura depois de N ciclos?

Alguns exemplos:

si N = 0, sua altura será 1 metro (não cresceu nada)
si N = 1, sua altura será de 2 metros (dobrou a altura na primavera)
si N = 2, sua altura será de 3 metros (cresceu um metro mais no verão)
si N = 3, sua altura será de 6 metros (dobrou a altura na primavera seguinte)
E assim ...
Escreva a função alturaArvoreUtopica, que utilize uma quantidade de ciclos de crescimento, e retorne a altura resultante da árvore de Laura.

*/

function alturaArvoreUtopica (nciclos) {
  var altura = 1;
  for (var i=1; i<=nciclos; i++) {
    if (nciclos == 0) {altura = 1;} 
    else if (i % 2 == 0) {altura += 1;} 
    else {altura = altura*2;}
    }
    return altura
  }

alturaArvoreUtopica (0)
alturaArvoreUtopica (1)
alturaArvoreUtopica (2)
alturaArvoreUtopica (3)
alturaArvoreUtopica (4)
alturaArvoreUtopica (5)
alturaArvoreUtopica (6)