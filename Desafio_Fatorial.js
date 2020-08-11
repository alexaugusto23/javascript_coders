/*
Escreva uma função fatorial, que calcule o fatorial de um número.
Lembre-se das aulas de matemática, e como realizamos uma operação fatorial.
*/

function fatorial(n){
    var resultado = 1;
    for (var i = n ; i >1; i--){
        resultado = resultado * i;
    } 
    return resultado
}