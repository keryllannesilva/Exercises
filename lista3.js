//1. Problema da cafeteria
var readline = require ('readline-sync')
var statuspedido = readline.question ('Digite o status do pedido: ')


    if (statuspedido === 'Pendente') {console.log ('Pedido em andamento, aguarde')}
    else if (statuspedido === 'Preparando') {console.log ('Pedido em preparo.')}
    else if (statuspedido === 'Pronto') {console.log ('Pedido pronto para retirada.')}
    else if (statuspedido === 'Entregue'){console.log ('Pedido entregue com sucesso.')}
    else {console.log ('Status do pedido desconhecido.')}


//2. Problema de controle de estoque
var estoque=[
    {produto:'computador', qtd: 2},
    {produto:'Mouse', qtd: 5},
    {produto: 'teclado', qtd:3},
    {produto:'monitor', qtd:5}]
var produto = readline.question ('Digite o nome do produto: ')
var produtoEncontrado = estoque.find (item => item.produto===produto)
if (produtoEncontrado && produtoEncontrado.qtd > 0) {console.log ('Produto disponível para compra.')}
else {console.log ('Produto esgotado.')}

//3. avaliação de desempenho dos funcionários
var nome = readline.question ('Digite o nome do funcionário: ')
var nota = readline.question ('Atribua uma nota para este funcionário: ')
switch (nota){
    case (nota>=9):
        console.log ('Excelente desempenho!')
    case (nota>=7 && nota <= 8.9):
        console.log ('Bom desempenho!')
    case (nota>=5 && nota<=6.9):
        console.log ('Desempenho razoável')
    case (nota<5):
        console.log ('Desempenho insatisfatório')
    default:
        console.log ('Tente outra vez.')
}

//4. priorização de tarefas
var projeto = readline.question ('Digite a urgência do projeto: ').lower
var opcoes = console.log (' Escolha entre: Urgente, Importante, Normal, Baixa prioridade')
switch (projeto){
    case (projeto==='urgente'):
        console.log('Iniciar imediatamente')
    case (projeto==='importante'):
        console.log('Programar para esta semana')
    case (projeto==='normal'):
        console.log ('Programar para o próximo mês')
    case (projeto==='baixa prioridade'):
        console.log ('Programar para o próximo trimestre')
    default:
        console.log ('Erro')
}

//5.Problema de controle de acesso
var usuario= readline.question ('Digite seu usuário:').lower
var senha= readline.question ('Digite sua senha:')
if (usuario==='admin' && senha=== '3449') {console.log ('Acesso concedido como administrador')}
else if (usuario==='funcionario' && senha==='5165') {console.log ('Acesso concedido como funcionário')}
else {console.log ('O usuário ou senha estão incorretos.')}

//6.Problema de verificação de idade
var idade = readline.question ('Digite a sua idade: ')
if (idade>=18) {console.log ('Acesso total permitido')}
else {console.log ('Acesso restrito para menores de 18 anos.')}

//7.Problema de verificação de cartão
var cartao = console.log ('Digite o número do cartão de crédito: ')
switch (cartao){
    case 4:
        console.log ('Sua bandeira é Visa')
    case 5:
        console.log ('Sua bandeira é Mastercard')
    case 3:
        console.log ('Sua bandeira é American Express')
    default: (console.log ('Bandeira desconhecida'))
}

//8.Problema de Notificação de Pagamento: Status de Transação
var notificacao = Aprovado
if (notificacao ==='Aprovado') {console.log ('Pagamento aprovado com sucesso')}
else if (notificacao ==='Pendente') {console.log ('Aguardando confirmação do pagamento')}
else if (notificacao ==='Recusado') {console.log ('Pagamento recusado. Tente novamente')}
else {console.log('Pagamento Cancelado pelo usuário.')}

//9.Problema de Classificação de Veículos: Identificação de Categoria
var tipo = readline.question ('Qual o tipo de veículo? ').lower
if (tipo==='carro'){console.log('Categoria: Veículo de passeio')}
else if (tipo==='caminhão'){console.log('Categoria: Veículo de carga')}
else if (tipo==='moto'){console.log('Motocicleta')}
else {console.log('Categoria desconhecida')};

//10.Problema de Verificação de Tipo de Pagamento: Processamento de Compra

var pagamento = console.log ('Digite sua opção de pagamento: ').lower
switch (pagamento){
    case 'crédito':
        console.log ('Compra realizada com cartão de crédito')
    case 'boleto bancário':
        console.log ('Boleto gerado. Aguardando pagamento')
    case 'transferência bancária':
        console.log ('Instruções de transferência enviadas. Aguardando confirmação')
    default: (console.log ('Método de pagamento não suportado. Por favor, escolha outra opção'))}