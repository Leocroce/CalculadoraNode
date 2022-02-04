const operacoes = require('./modulo_inquirer')
const inquirer = require('inquirer')
const soma = operacoes.soma
const subtracao = operacoes.subtracao
const multiplicacao = operacoes.multiplicacao
const divisao = operacoes.divisao
const processAnswers = operacoes.processAnswers
inquirer.prompt([
    {
        type: 'list',
        name: 'op',
        message: `Escolha qual operação deseja realizar:`,
        choices: [
            'soma',
            'subtração',
            'multiplicação',
            'divisão'
        ]
    },
    {
        name: 'n1',
        message: 'Digite o valor do primeiro número'
    },
    {
        name: 'n2',
        message: 'Digite o valor do segundo número'
    }
]).then((answers) => {
     let op = answers.op
     let n1 = parseFloat(answers.n1)
     let n2 = parseFloat(answers.n2)
    console.log('Processando...');

    processandoIntervalo = setTimeout( () => {
        switch(op) {
            case 'soma':
                soma(n1, n2)
            break;
            case 'subtração':
                subtracao(n1, n2)
            break;
            case 'multiplicação':
                multiplicacao(n1, n2)
            break;
            case 'divisão':
                divisao(n1, n2)
            break;
        }
    
    }, 1000)
 }).catch((err) => console.log(err))