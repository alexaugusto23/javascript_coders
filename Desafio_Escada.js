/*Queremos representar uma escada com altura variável, utilizando um array de strings.

Por exemplo, uma escada com altura 3, representaremos com o seguinte array:

var escada3 = [
 "  #",
 " ##",
 "###"
]
E uma escada com altura 5, da seguinte forma:

var escada5 = [
 "    #",
 "   ##",
 "  ###",
 " ####",
 "#####"
]
Escreva uma função escada que utilize uma altura (um número) e retorne um array que represente a escada correspondente. Não esqueça que o espaço " " faz parte da resposta :)*/

function escada (alt){
    arrayEscada = [];
    for(var linha = 1 ; linha <= alt ; linha++){
        let espaco = alt - linha;
        arrayEscada.push(" ".repeat(espaco) + "#".repeat(linha));
    }
    return arrayEscada;
}

escada (5);