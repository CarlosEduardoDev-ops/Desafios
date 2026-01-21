const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(" Calculadora de Rankeadas do Herói ");
console.log("-------------------------------------\n");

readline.question("Informe as vitórias do Herói: ", (v) => {
    readline.question("Informe as derrotas sofridas: ", (d) => {
        
        // parseInt para converter a string em número na operação
        const vitorias = parseInt(v);
        const derrotas = parseInt(d);
        const saldo = vitorias - derrotas;

        // tabela de rankings
        const ranking = [
            { limite: 10, nome: "Ferro" },
            { limite: 20, nome: "Bronze" },
            { limite: 50, nome: "Prata" },
            { limite: 80, nome: "Ouro" },
            { limite: 90, nome: "Diamante" },
            { limite: 100, nome: "Lendário" },
            { limite: Infinity, nome: "Imortal" }
        ];

        // acha o ranking com base no número de vitórias
        const nivel = ranking.find(r => vitorias < r.limite).nome;

        // mensagens extras para ficar mais RPG
        let elogio;

        if (vitorias < 10) elogio = "O começo nunca é fácil, guerreiro!";
        else if (vitorias <= 50) elogio = "Você está no caminho da glória!";
        else if (vitorias <= 80) elogio = "A fama já ecoa pelos reinos!";
        else if (vitorias <= 100) elogio = "Um verdadeiro campeão!";
        else elogio = "As lendas contam feitos como os seus!";

        console.log("\n-------- RESULTADO --------");
        console.log(`Vitórias: ${vitorias}`);
        console.log(`Derrotas: ${derrotas}`);
        console.log(`Saldo de Rankeadas: ${saldo}`);
        console.log(`Nível Alcançado: ${nivel}`);
        console.log(`${elogio}`);
        console.log("------------------------------");

        readline.close();
    });
});