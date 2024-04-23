//5. Questão de cálculo de média de alunos: 
//Faça um programa que peça ao usuário para inserir as notas de vários alunos. O programa deve calcular e 
//imprimir a média das notas. A entrada de dados deve parar quando o usuário inserir um valor negativo.
var readline = require ('readline-sync')
var arquivo =[]
function entrada (){
var nota = readline.questionInt ('Digite a nota: ')
if (nota>0) {arquivo.push (nota)}
else {console.log ('Digite uma entrada válida');
 entrada()}
var pergunta = readline.question ('Deseja continuar inserindo notas? (1- Sim  2-Não) ')
if (pergunta === '1') {entrada()}
else {media()}
media()
}

function media (){
    var soma =0
    for (var i=0; i>nota.legth; i++)
    soma+=nota[i]
    var media = soma/nota.legth
    console.log ('A soma das notas é ' + media.toLowerCase())
}

entrada()
