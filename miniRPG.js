const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// ---------- CLASSE HEROI ----------
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();
        this.xp = 0;
        this.nivel = "Aprendiz";
        this.vitorias = 0;
        this.derrotas = 0;
    }

    // Sistema de ataque
    atacar() {
        let ataque;
        switch(this.tipo) {
            case "mago": ataque = "magia"; break;
            case "guerreiro": ataque = "espada"; break;
            case "monge": ataque = "artes marciais"; break;
            case "ninja": ataque = "shuriken"; break;
            default: ataque = "habilidade desconhecida";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
        // Ganhar XP a cada ataque
        this.ganharXP(100);
    }

    // Calcula o nível baseado no XP
    calcularNivel() {
        const xp = this.xp;
        if (xp < 1000) this.nivel = "Aprendiz";
        else if (xp < 2000) this.nivel = "Escudeiro";
        else if (xp < 5000) this.nivel = "Arauto";
        else if (xp < 7000) this.nivel = "Campeão";
        else if (xp < 8000) this.nivel = "Guardião";
        else if (xp < 9000) this.nivel = "Ascendente";
        else if (xp < 10000) this.nivel = "Imortal";
        else this.nivel = "Grão-Mestre";
    }

    // Ganha XP
    ganharXP(valor) {
        this.xp += valor;
        this.calcularNivel();
    }

    // Calcula ranking baseado nas vitórias
    calcularRanking() {
        const rankingTabela = [
            { limite: 10, nome: "Ferro" },
            { limite: 20, nome: "Bronze" },
            { limite: 50, nome: "Prata" },
            { limite: 80, nome: "Ouro" },
            { limite: 90, nome: "Diamante" },
            { limite: 100, nome: "Lendário" },
            { limite: Infinity, nome: "Imortal" }
        ];
        return rankingTabela.find(r => this.vitorias < r.limite).nome;
    }

    // Exibe status do herói
    exibirStatus() {
        console.log("\n------ STATUS DO HERÓI ------");
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`XP: ${this.xp}`);
        console.log(`Nível: ${this.nivel}`);
        console.log(`Vitórias: ${this.vitorias}`);
        console.log(`Derrotas: ${this.derrotas}`);
        console.log(`Ranking: ${this.calcularRanking()}`);
        console.log("-------------------------------\n");
    }
}

// ---------- FUNÇÃO DE CRIAÇÃO DE HERÓI ----------
function criarHeroi() {
    readline.question("Digite o nome do herói: ", (nome) => {
        readline.question("Digite a idade do herói: ", (idadeInput) => {
            const idade = parseInt(idadeInput);

            console.log("Escolha o tipo do herói: guerreiro, mago, monge, ninja");
            readline.question("Digite o tipo: ", (tipoInput) => {
                const tipo = tipoInput.toLowerCase();
                const tiposValidos = ["guerreiro", "mago", "monge", "ninja"];
                if (!tiposValidos.includes(tipo)) {
                    console.log("Tipo inválido! Usando 'guerreiro' como padrão.");
                }
                const heroi = new Heroi(nome, idade, tiposValidos.includes(tipo) ? tipo : "guerreiro");

                console.log(`\nHerói criado: ${heroi.nome}, ${heroi.tipo}, nível inicial ${heroi.nivel}`);
                mostrarMenu(heroi);
            });
        });
    });
}

// ---------- MENU DE AÇÕES ----------
function mostrarMenu(heroi) {
    console.log("\nO que deseja fazer?");
    console.log("1 - Atacar");
    console.log("2 - Exibir status");
    console.log("3 - Sair do jogo");
    readline.question("Escolha uma opção: ", (opcao) => {
        switch(opcao) {
            case "1":
                heroi.atacar();
                heroi.vitorias += 1; // cada ataque é contado como vitória para simplificação
                mostrarMenu(heroi);
                break;
            case "2":
                heroi.exibirStatus();
                mostrarMenu(heroi);
                break;
            case "3":
                console.log("Encerrando o jogo. Até a próxima!");
                readline.close();
                break;
            default:
                console.log("Opção inválida!");
                mostrarMenu(heroi);
                break;
        }
    });
}

// ---------- INICIAR JOGO ----------
console.log("=== BEM-VINDO AO MINI RPG ===");
criarHeroi();
