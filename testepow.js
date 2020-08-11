//---------------------------------------
function perimetro (raio,pi) {
    return pi * raio * 2;
}

//---------------------------------------
function area (raio,pi) {
    return pi * raio*raio;
}

perimetro(3,3.14);
area(2,3.14);

//---------------------------------------
function tamanhoNomeCompleto (nome,sobrenome){
    var nomecompleto = nome + " " + sobrenome
    return nomecompleto.length;
}

tamanhoNomeCompleto("Alex","Augusto");

//---------------------------------------
function escreverCartao (titulo,nome,sobrenome){
    var nomecompleto = titulo + " " + nome + " " + sobrenome
    return nomecompleto
}

escreverCartao("Dra.", "Ana", "Pérez");

//---------------------------------------
Math.max(10,200)
Math.min(10,200)
Math.round(10.1)
Math.floor(10.1)
Math.abs(-12)


// gera probabilidade de chuva
function gerarProbabilidade(){
    var prob = Math.random()*100
    return prob
}

gerarProbabilidade(1);

var diaDeSemana = "domingo";

if (diaDeSemana == "domingo"){
    console.log('Hoje é dia de futebol! ! !');
}

//---------------------------------------
function hojeSeJoga(diaDeSemana){
    if (diaDeSemana == "domingo"){
    return "Hoje é dia de futebol! ! !"
    } else {return "Hoje não é dia de futebol :("}
    
}

hojeSeJoga("Segunda");

//---------------------------------------
function eMaior(a,b){
    if (a>b){ return a}
    else {return b}
}

eMaior(4,5);

//---------------------------------------
function sinal(a){
    if (a>0){ return 1}
    else if(a == 0){ return 0}
    else {return -1}
}

sinal(1);

//---------------------------------------
function eNumeroDaSorte (n) {
    return n>0 && n%2 ==0  && n!=15;
  }
  eNumeroDaSorte(2);

//---------------------------------------
  function possoIrAoBanco(diaDaSemana,horaAtual){
    return diaDaSemana != "Sábado" && diaDaSemana != "Domingo" && horaAtual >9 && horaAtual <15 
} 

possoIrAoBanco("Segunda", 10);

//---------------------------------------
function filosofoHipster (profissao,nacionalidade,kmDia){
    return profissao == "Músico" && nacionalidade == "Brasil" && kmDia >=2
}

filosofoHipster ('Músico', 'Brasil', 5);

function filosofoHipster (profissao,nacionalidade,kmDia){
    return profissao == "Músico" && nacionalidade == "Brasil" && kmDia >=2
}

//---------------------------------------
filosofoHipster ('Músico', 'Brasil', 5);
console.log(filosofoHipster)

filosofoHipster ('Músico', 'Argentina', 1);
console.log(filosofoHipster)

filosofoHipster ('Docente', 'Canadá', 12);
console.log(filosofoHipster)

//---------------------------------------
function pagarComCartao
(temJuros, taxasDoCartao, dinheiroDisponivel) {
  return !temJuros && taxasDoCartao >= 3 || dinheiroDisponivel < 100;
}

pagarComCartao(true, 6, 320)
console.log(pagarComCartao)
pagarComCartao(false, 8, 80)
console.log(pagarComCartao)
pagarComCartao(true, 2, 215)
console.log(pagarComCartao)
pagarComCartao(true, 1, 32)
console.log(pagarComCartao)

//---------------------------------------
function podeSeAposentar(idade, sexo, anosContr){
    return (idade >= 60 && sexo == "F" && anosContr >30) || (idade >= 65 && sexo == "M" && anosContr >30)  
}

//---------------------------------------
function podeSubir(alturaPessoa, vemComCompania, temProblemaCardiaco){ return (alturaPessoa >= 1.5 && temProblemaCardiaco == false) || (alturaPessoa >= 1.2 &&vemComCompania== true &&temProblemaCardiaco == false)
}
podeSubir(1.7, false, true)

//---------------------------------------
function medalhaSegundoOPosto (n){

    if (n == 1){return "ouro"}
    else if (n == 2){return "prata"}
    else if (n == 3){return "bronze"}
    else{return "Continue participando"}
}
medalhaSegundoOPosto(1)

//---------------------------------------

//---------------------------------
function imprimirAzul4(){

    for(var i = 0; i < 4; i++) {
       console.log("Azul")
    }
    }
    
    //---------------------------------
    
    function imprimir5vezes5 (){
    
    for(var i = 0; i < 5; i++) {
       console.log(5)
    }
    }
    
    //---------------------------------
    
    function passoAPasso(){
        for (var i = 0; i <=4; i++){console.log(i);}
    };
    
    //---------------------------------
    
    function passandoPor () {
        for (var i = 0; i <=3; i++ ){console.log("aqui eu tenho o valor de " + i);}
    };
    
    //---------------------------------
    
    function passandoPelosPares(){
        for (var i = 0; i <= 6; i++){
            if(i%2==0){console.log("aqui eu tenho o valor de " + i);}
        }
    };
    
    //---------------------------------
    
    function imprimirAzul (x){
        for (var i =0 ; i < x ; i++){console.log("Azul")
        }
    };
    
    imprimirAzul(3)
    
    //---------------------------------
    
    function somar5MoedasDe25Centavos (){
        moedas = 0;
        for (var i = 0 ; i < 5 ; i++) {
            moedas = moedas + 0.25;
        }
        return moedas
    }
    somar5MoedasDe25Centavos();
    
    //---------------------------------
    
    function somarMoedasDe25(quantidadeDeMoedas) {
        moedas = 0;
        for (var i = 0 ; i < quantidadeDeMoedas ; i++) {
            moedas = moedas + 0.25;
        }
        return moedas
    }
    somarMoedasDe25(7);
    
    //---------------------------------
    
    function somaDosPares(x) {
        var soma = 0;
        for( var i = 0 ; i <= x ; i+=2 ){
            soma = soma + i
        }
        return soma
    }
    somaDosPares(6);
    
    // ou 
    
    function somaDosPares(x) {
        var soma = 0;
        for( var i = 0 ; i <= x ; i++ ){ if (i%2==0) {soma = soma + i }
        }
        return soma
    }
    somaDosPares(6);
    
    
    //---------------------------------
    
    function somatoria(x) {
        var soma = 0;
        for( var i = 0 ; i < x ; i++ ){
            soma = soma + i
        }
        return soma
    }
    somatoria(4);
    
    //---------------------------------
    
    function caloriasDeTrote(num) {
        var soma = 0;
        for (var i = 1 ; i <= num ; i++) {
            var cal = 5;
            cal = cal * i;
            soma = soma + cal;        
        }
        return soma    
    }
    
    caloriasDeTrote(2);
    
    // ou 
    
    function caloriasDeTrote(num) {
        var soma = 0;
        for (var i = 0 ; i <= num ; i++) {
            cal = 5 * i;
            soma = soma + cal;        
        }
        return soma    
    }
    
    caloriasDeTrote(2);
    
    
    //---------------------------------

    //---------------------------

var seriesFavoritasDaAna =
["Game of Thrones", "Breaking Bad", "House of Cards"];
var seriesFavoritasDoHeitor = ["Blindspot", "Blacklist"];
var helloworld = ["olá","mundo!"];
var helloworld2 =["olá","olá"];

console.log(seriesFavoritasDaAna);
console.log(seriesFavoritasDoHeitor);
console.log(helloworld);
console.log(helloworld2);

//---------------------------

var numerosDeLoteria = [2, 11, 17, 32, 36, 39];
var girosDeDado = [1, 6, 6, 2, 2, 4];
var saiuCara = [false, false, true, false];
var listaDeNumeros = [[1, 2, 3], [4, 5, 6]];

console.log(numerosDeLoteria);
console.log(girosDeDado);
console.log(saiuCara);
console.log(listaDeNumeros);

//---------------------------

var umArrayVazio = []

console.log(umArrayVazio
);


//---------------------------

var numerosDeLoteria = [22,40,12]

console.log(numerosDeLoteria.length);
console.log([].length);
console.log([4, 3].length);

//---------------------------

var pertences = ["espada","escudo","crossbow"];
 pertences.push("cross");
console.log(pertences);

//---------------------------

function mover (a,b){
var ultimo = a.pop();
var adicionar = b.push(ultimo);
}

var umArray = [1, 2, 3];
var outroArray = [4, 5];

mover(umArray,outroArray);

//---------------------------

function mover (a,b){
console.log(a,b,ultimo)
var ultimo = a.pop();
console.log(a,b,ultimo)
var adicionar = b.push(ultimo);
console.log(a,b,ultimo,adicionar)
}

var umArray = [1, 2, 3];
var outroArray = [4, 5];

mover(umArray,outroArray);
console.log(mover)


//---------------------------

var diasDeTrabalho = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"]
console.log(diasDeTrabalho.indexOf ("osvaldo"));

//---------------------------

function contem(array, numero){
    var resultado = array.indexOf(numero) > -1;
    return resultado
}

contem([1, 6, 7, 6], 7);
contem([1, 6, 7, 6], 6);
contem([], 7);
contem([8, 5], 7);

//---------------------------

function medalhaDeAcordoComPosto(numero){
    var medalhas = ["ouro","prata","bronze"]
    if         (numero == 1) {return medalhas[0];}
    else if (numero == 2) {return medalhas[1];}
    else if (numero == 3) {return medalhas[2];}
    else{return "nada"}
}

medalhaDeAcordoComPosto (1);
medalhaDeAcordoComPosto (2);
medalhaDeAcordoComPosto (3);
medalhaDeAcordoComPosto (4);
medalhaDeAcordoComPosto (5);

//---------------------------

function somaLucroSemestre(umSemestre) {
    return umSemestre[0] + umSemestre[1] +
        umSemestre[2] + umSemestre[3] +
        umSemestre[4] + umSemestre[5];
}

var lucroUltimoSemestre = [50, -12, 1000, 300, 200, 0];
somaLucroSemestre(lucroUltimoSemestre);
console.log(somaLucroSemestre);

var lucroUltimoSemestre = [-50, -12, 10000, 350, 2200, 10];
somaLucroSemestre(lucroUltimoSemestre);
console.log(somaLucroSemestre);

var lucroUltimoSemestre = [5, -1412, 1740, 340, 22, 254];
somaLucroSemestre(lucroUltimoSemestre);
console.log(somaLucroSemestre);

//---------------------------

console.log(lucroTotal([2, 3]));
console.log(lucroTotal([2, 3, 1, 8, 8, -1]));
console.log(lucroTotal([]));

//---------------------------

function lucroTotal4(umPeriodo) {
  var soma = 0;
  soma = soma + umPeriodo[0];
  soma = soma + umPeriodo[1];
  soma = soma + umPeriodo[2];
  soma = soma + umPeriodo[3];
  return soma ;
}

//---------------------------,

function lucroTotal(umPeriodo) {
  var soma= 0;
  var mes = 0;
  for (var i=0; i<umPeriodo.length; i++) {
    mes = umPeriodo[i];
    soma= soma+ mes;
  }
  return soma;
}

console.log(lucroTotal([]));
console.log(lucroTotal([100]));
console.log(lucroTotal([100, 2]));
console.log(lucroTotal([2, 10, -20]));
console.log(lucroTotal([2, 10, -20, 0, 0, 10, 10]));

//---------------------------

function quantidadeDeMesesComLucro(umPeriodo) {
 var quantidade = 0;
  for (let mes=0; mes< umPeriodo.length; mes++) {
    if (umPeriodo[mes] > 0){
      quantidade = quantidade + 1}
  }
  return quantidade;
}

quantidadeDeMesesComLucro([0, 3, -1, 5]);

//---------------------------

function quantidadeDeMesesComPerda(umPeriodo) {
 var quantidade = 0;
  for (let mes=0; mes< umPeriodo.length; mes++) {
    if (umPeriodo[mes] < 0){
      quantidade = quantidade + 1}
  }
  return quantidade;
}

quantidadeDeMesesComPerda([0, 3, -1, 5]);

//---------------------------

function saldoDeMesesComLucro(umPeriodo) {
 var quantidade = 0;
 var novalist = []
  for (let mes=0; mes< umPeriodo.length; mes++) {
   
    if (umPeriodo[mes] > 0){
      var adicionar = novalist.push(umPeriodo[mes]);
     
  }
}
return novalist;
}
saldoDeMesesComLucro([10, -10, 2, 100]);

//---------------------------

function naipeDeTruco(naipe) {
  var resultado = [];
  for (var i = 1; i <= 12; i++) {
    if (i == 8 || i == 9) {
      i = i + 1;
    } else {
      resultado.push(i + " de " + naipe);
    }
  }
  return resultado;
}
