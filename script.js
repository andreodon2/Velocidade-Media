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

function askForTemp(){
    rl.question('Digite a velocidade média desejada em Km/h: ', (vm) => {
        const velocidadeMedia = vm;

        rl.question('Digite o tempo da viagem em horas: ', (temp) => {
            const tempoDeViagem = temp;

            espacoPercorrido = tempoDeViagem * vm
    
            console.log(`O espaço corrido da sua viagem é ${espacoPercorrido.toFixed(2)} Km`);
    
            rl.close();
        });
    });
}

function askForTemp(){
    rl.question('Digite a velocidade média desejada em Km/h: ', (vm) => {
        const velocidadeMedia = vm;

        rl.question('Digite a distância percorrida desejada em horas desejada: ', (esp) => {
            const espacoPercorrido = esp;

            tempoDeViagem = espacoPercorrido * vm
            diasViagem = tempoDeViagem / 24
    
            console.log(`O tempo de viagem necessária para a sua viagem é ${tempoDeViagem.toFixed(2)} horas ou ${diasViagem.toFixed(2)} dias`);
    
            rl.close();
        });
    });
}
// FIM FUNÇÕES BASE

askForTemp()