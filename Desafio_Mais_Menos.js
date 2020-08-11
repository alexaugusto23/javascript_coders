/*
Necessitamos uma função maisMenos que receba um array e retorne outro com os seguintes três números:

na primeira posição, a fração de números que são positivos
na segunda posição, a fração de números que são zero
na última posição, a fração de números que são negativos
Por exemplo, maisMenos([1, 2, 0, -1]) deveria retornar [0.5, 0.25, 0.25], devido a que há 50% de positivos, 25% de zeros, e 25% de negativos.

Escreva a função maisMenos.
*/

var resultado = [];
function maisMenos (list) {
    var positivo = 0; 
    var zero = 0; 
    var negativo = 0; 

    for (var elem = 0 ; elem < list.length ; elem++){
          if (list[elem] >= 1)
          positivo += 1 
          
          else if (list[elem]  == 0)
           zero += 1
           
           else            
           negativo += 1
    }

    resultado [0] = positivo / list.length
    resultado [1] = zero / list.length
    resultado [2] = negativo / list.length

    return resultado
} 


maisMenos([1, 2, 0, -1]);