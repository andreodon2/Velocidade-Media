const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// FUNÇÕES BASE

console.log('=========================================================================================================')
console.log('===================================CALCULADORA DE VELOCIDADE MÉDIA=======================================')
console.log('=========================================================================================================')

function askForVm(){
    rl.question('Digite a distância a ser percorrida em quilômetros: ', (esp) => {
        const espacoPercorrido = esp;

        rl.question('Digite o tempo de viagem em horas: ', (temp) => {
            const tempoDeViagem = temp;

            vm = espacoPercorrido / tempoDeViagem;
    
            console.log(`A velocidade média da viagem é ${vm.toFixed(2)} km/h`);
    
            rl.close();
        });
    });
}

function askForEsp(){
    rl.question('Digite a velocidade média desejada em Km/h: ', (vm) => {
        const velocidadeMedia = vm;

        rl.question('Digite o tempo da viagem em horas: ', (temp) => {
            const tempoDeViagem = temp;

            espacoPercorrido = tempoDeViagem * vm
    
            console.log(`O espaço percorrido da sua viagem é ${espacoPercorrido.toFixed(2)} Km`);
    
            rl.close();
        });
    });
}

function askForTemp(){
    rl.question('Digite a velocidade média desejada em Km/h: ', (vm) => {
        const velocidadeMedia = vm;

        rl.question('Digite a distância da sua viagem: ', (esp) => {
            const espacoPercorrido = esp;

            tempoDeViagem = espacoPercorrido / vm
    
            console.log(`O tempo de sua viagem é ${tempoDeViagem.toFixed(2)} horas`);
    
            rl.close();
        });
    });
}
// FIM FUNÇÕES BASE

// FIM FUNÇÕES BASE

// INÍCIO DO SWITCH CASE

rl.question('Escolha uma opção(1- Velocidade Média | 2- Espaço percorrido | 3- Tempo de viagem): ', (opcao) => {
    switch(opcao) {
        case '1':
            askForVm();
            break;
        case '2':
            askForEsp();
            break;
        case '3':
            askForTemp();
            break;
        default:
            console.log('Opção inválida.');
    }
})
