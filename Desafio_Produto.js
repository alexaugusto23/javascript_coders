/*
Necessitamos uma função produto que receba um array de números e retorne o produto: o resultado de multiplicar todos os elementos entre si.
Por exemplo, produto([1, 4, 7]) deve retornar 28, que é 1 * 4 * 7.
*/

function produto (lista){
    resultado = 1;
    for (var i = 0; i < lista.length ; i++){
    resultado = resultado * lista[i]; 
}
return resultado
}