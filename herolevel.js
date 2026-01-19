let nome = "Cassius ";
let xp = 1;
let xpPorCiclo = 1000;
let nivel;

while (nivel !== "Grão-Mestre") {

    console.log("Explorando o território...");
    xp += xpPorCiclo;
    console.log(`XP atual: ${xp}`);

    if (xp < 1000){
        nivel = "Aprendiz"
    }else if (xp <= 2000){
        nivel = "Escudeiro"
    }else if (xp <= 5000){
        nivel = "Arauto"
    }else if (xp <= 7000){
        nivel = "Campeão"
    }else if (xp <= 8000){
        nivel = "Guardião"
    }else if (xp <= 9000){
        nivel = "Ascendente"
    }else if (xp <= 10000){
        nivel = "Imortal"
    }else {
        nivel = "Grão-Mestre"
    }

    console.log(`Nível atual: ${nivel}`);
}

console.log(`O Herói de nome ${nome} alcançou o nível máximo: ${nivel}!`);
console.log("Recompensa: Coroa de Vitória e 1.000 moedas de ouro!");


