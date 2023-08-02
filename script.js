const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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

askForTemp()