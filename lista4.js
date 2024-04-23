//1.Questão de contagem regressiva:
var n1 = 10;
 while (n1>=1){
    console.log (n1)
    n1--
 }

//2.Questão de adivinhação de número: 
var readline = reqire ('readline-sync')
var aleatorio= Math.floor (Math.random*100+1)
var palpite = readline.qstion ('Digite se palpite: ')

 function maisProximo(palpite){
var nb1= 100
var nb2=1
var diferenca1= Math.abs (palpite-nb1);
var diferenca2= Math. abs (palpite-nb2);
if (diferenca1>diferenca2) {console.log ('O palpite é mito alto.')}
else if (diferenca2>diferenca1) {console.log ('O palpite é mito baixo.')}
else ('Você')
 }

 maisProximo();

//3.Questão de cálculo de fatorial: 