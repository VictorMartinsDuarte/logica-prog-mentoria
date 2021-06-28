//1. André resolveu criar seu próprio programa de cálculo de Índice de Massa Corporal (IMC).
// Tendo em vista que:
// - A fórmula para calcular o IMC é divisão do peso (em kg) pela altura ao quadrado (em metros);
// - André pesa 75 kg e sua altura é 1,80 m;
// Qual deverá ser o algoritmo usado por André para calcular seu próprio IMC?

let altura = 180;
let peso = 75;

let imc = 75/(1.80**1.80);
console.log(imc)

//2. Escreva um algoritmo que faça conversão de temperatura em graus Fahrenheit para graus Celsius.

let celsius = null;
let fahrenheit = 76;

celsius = (fahrenheit - 32) * 5/9;
console.log(celsius);

//3. Escreva um algoritmo que faça conversão de temperatura em graus Celsius para graus Fahrenheit.

let celsius = 24.4;
let fahrenheit = null;

fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit);

//4 Faça um algoritmo que leia dois números A e Z, retornando o valor de A elevado a Z.

let a = 2;
let z = 3;

let result = a**z;
console.log(result);

//5. Crie um programa para gerenciar as contas de um financiamento de veículo. A pessoa que quer fazer o financiamento precisa informar o valor total do carro, o valor da entrada a ser dada e a quantidade de parcelas que ela deseja pagar.
//A loja em questão usa uma taxa de juros fixa de 5% sobre o valor do financiamento.
//Desenvolva a solução e exiba conforme o exemplo (o valor da parcela precisa ter 2 casas decimais após a vírgula):
//- Valor Financiado: R$35000
//- Valor do Juros: R$1750
//- Quantidade de Parcelas: 36 
//- Valor da Parcela: R$1020.83
//- Valor Total do Carro: R$46750

let totalCar = 46750.00;
let entrada = 46750.00 - 35000.00;
let qntParcels = 36;
let valueFin = (totalCar - entrada);
let valueTax = (valueFin * 0.05);
let totalParcels = (qntParcels * valueTax) + valueFin;
let parcels = (totalParcels / qntParcels)
console.log(parcels.toFixed(2));

//6. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando. 
let a = 1;
let b = 2;
1 = pedra 2 = papel 3 = tesoura

if (a === 1 && b === 2) {
    console.log("Pedra vs Papel - O jogador B ganhou!");
} else if (a === 1 && b === 3) {
    console.log("Pedra vs Tesoura - O jogador A ganhou");
} else if (a === 2 && b === 1) {
    console.log("Papel vs Pedra - O jogador  ganhou")
}

//7. A Trybe abriu uma lanchonete e precisa criar um menu de opções para que as pessoas consigam escolher qual lanche maravilhoso irão pedir.
//Para isso você precisa criar um programa que recebe um número inteiro e de acordo com este número escolha uma das seguintes opções de lanches:
//1 - Trybe Lanche Feliz
//2 - McTrybe
//3 - TrybeWooper
//4 - X-Trybe
//5 - Triplo Trybe com JS
//Caso a pessoa escolha uma opção diferente, exiba a mensagem: Não temos esta opção ainda :(
//Utilize Switch/Case para resolver este problema.

//8. A Trybe tem um grupo de aventureiros. Quando o nome de algum é invocado, a classe a qual essa pessoa faz parte é apresentada.
//É sua função criar um programa que recebe o nome de um aventureiro e, de acordo com este nome, revela uma das seguintes classes:
//'Tunico' - 'Mestre dos Magos'
//'Cremoso' - 'Cavaleiro Negro'
//'Gordinho' - 'Pirata'
//'Lobo Solitário' - 'Samurai'
//'Ousado' - 'Mago'
//'Anjo Loiro' - 'Clérigo'
//Caso o nome informado não faça parte do esquadrão , exiba a mensagem: Não foi possível encontrar um aventureiro com esse nome.

//9. Crie um algoritmo que recebe a idade de Marina, Silvia e Iza e imprime quem é a mais nova.

//10. Crie um algoritmo que recebe a idade de Marina, Silvia e Iza e imprime as idades em ordem crescente.