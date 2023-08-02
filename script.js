const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askForVm(){
    rl.question('Digite a distância a ser percorrida: ', (esp) => {
        const espacoPercorrido = esp;

        // console.log(`Seu nome é ${nomeArmazenado}`);

        rl.question('Digite o tempo de viagem: ', (temp) => {
            const tempoDeViagem = temp;
            // Do jeito que tá funciona, mas eu colocaria o resultado numa variável e faria a formatação e arredondamento do número na hora de fazer o console.log
            console.log(`A velocidade média da viagem é ${espacoPercorrido/tempoDeViagem} km/h`);
    
            rl.close();
        });
    });
}

askForVm()
