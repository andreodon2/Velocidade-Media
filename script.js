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
    
            console.log(`A velocidade média da viagem é ${espacoPercorrido/tempoDeViagem} km/h`);
    
            rl.close();
        });
    });
}

askForVm()