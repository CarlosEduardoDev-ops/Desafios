const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tipoMensagem = null;
let contador = 0;

function main() {
    rl.question("Qual tipo deseja contar? (USER ou BOT): ", tipo => {
        tipoMensagem = tipo.trim() + ":"; // adicionamos ":" automaticamente
        console.log(`Contando mensagens do tipo ${tipoMensagem}`);
        console.log("Digite mensagens (digite FIM para encerrar):\n");

        rl.on("line", linha => {
            if (linha === "FIM") {
                console.log(`\nTotal de mensagens do tipo ${tipoMensagem}: ${contador}`);
                rl.close();
                return;
            }

            // comparação manual de prefixo sem split
            let igual = true;
            for (let i = 0; i < tipoMensagem.length; i++) {
                if (linha[i] !== tipoMensagem[i]) {
                    igual = false;
                    break;
                }
            }

            if (igual) {
                contador++;
            }
        });
    });
}

main();