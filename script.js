const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var esp = 0;
var temp = 0;
var vm = esp/temp;

function askForVm(){
    rl.question('Digite a distância a ser percorrida: ', (esp) => {
        const espacoPercorrido = esp;

        // console.log(`Seu nome é ${nomeArmazenado}`);

        rl.question('Digite o tempo de viagem: ', (temp) => {
            const tempoDeViagem = temp;
    
            console.log(`A velocidade média da viagem é ${vm = esp/temp} km/h`);
    
            rl.close();
        });
    });
}

askForVm()