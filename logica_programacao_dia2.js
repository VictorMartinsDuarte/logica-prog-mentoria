// //Crie um algoritmo que recebe um número inteiro e exibe o seu antecessor e sucessor no seguinte 
// //formato: O antecessor de "number" é "predecessor"; O sucessor de "number" é "successor".

// let number = 0;
// let predecessor = number - 1;
// let sucessor = number + 1;

// console.log("O antecessor de " + number + " é " + predecessor + "; O sucessor de " + number + " é " + sucessor + ".");

// // //Crie um programa para uma loja de ração, onde ao informar o preço do produto sejam exibidas as formas de pagamento disponíveis. Pagamento à vista possui 10% de desconto e parcelado em 4x possui juros de 15%. 
// //Exemplo:
// // - Preço do produto: R$80
// // - À Vista: R$72
// // - 4x de: R$23

// let preçoProduto = 80;
// let aVista = preçoProduto - (preçoProduto * 0.1);
// let parcel4 = (preçoProduto + (preçoProduto * 0.15)) / 4;

// console.log("Preço do produto: " + preçoProduto,"À Vista: " + aVista,"4x de: " + parcel4);

// //Aqui na Trybe você precisa entregar os projetos dentro de algumas regras para obter aprovação. Desenvolva um programa que faça essa verificação seguindo as seguintes regras:
// //- Se a pessoa não estiver em período de recuperação, é preciso entregar 80% ou mais dos requisitos obrigatórios para obter aprovação;
// //- Se a pessoa estiver em período de recuperação, é preciso entregar 90% dos requisitos totais (obrigatórios + bônus) para obter aprovação;
// //Caso a pessoa tenha conseguido entregar o projeto exiba a mensagem: Parabéns, você está aprovado(a)!
// //Caso a pessoa não tenha conseguido entregar o projeto exiba a mensagem: Você ainda precisa entregar mais requisitos ;)

// let requisitosObr = 90;
// let requisitosBon = 90;
// let status = "Recuperaçao".toLocaleLowerCase();

// if (status != "recuperaçao") {
//     if (requisitosObr >= 80) {
//        console.log("Parabéns, você está aprovado(a)!");
//     } else {
//         console.log("Você ainda precisa entregar mais requisitos!");
//     }
// } else {
//     if (requisitosObr >= 90 && requisitosBon >= 90) {
//         console.log("Parabéns, você está aprovado(a)!");
//     } else {
//         console.log("Você ainda precisa entregar mais requisitos!");
//     }
// }

// //Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// //Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
// //Bônus: Crie a condição utilizando operador ternário.

// let age = 17;

// age >= 18 ? (
//     console.log("A pessoa é maior de idade!")
// ) : (
//     console.log("A pessoa é menor de idade!")
// );

// Você está programando um robô que ajude nas tarefas de casa, e seus comportamentos deverão ser escritos em JavaScript.
// Crie um algoritmo que receba 5 booleanos:
// mom, dad, me, brother, sister
// Eles devem representar se a pessoa pediu para que o robô executasse uma tarefa.
// Caso me (você), mom (mãe) ou dad (pai) pedirem, o robô deverá executar sem pensar duas vezes.
// Por outro lado, quando seu irmão ou irmã pedirem algo, o robô só deverá executar se ambos pedirem em conjunto.
// Seu algoritmo deverá receber os 5 booleanos e mostrar a mensagem:
// - "Things I do for love...", caso deva executar a tarefa
// - "Not today.", caso não deva executar.

let dad;
let mom;
let me;
let brother = true;
let sister = true;

function robot (dad, mom, me, brother, sister) {
    if (dad || mom || me || brother && sister) {
        console.log("Things I do for love...");
    } else {
        console.log("Not today.");
    }
}
robot(dad, mom, me, brother, sister)

// _______________________________________
//Maria está aprendendo lógica de programação e recebeu o seguinte código:
//	let contador = 1;
//	while(contador <= 10){
//		console.log("Contator " + contador);
//		contador = contador + 1;
//	}
//Ajuste o código acima para usar a instrução for:
// Escreva um algoritmo que imprima os números inteiros do intervalo de 100 a 200 em ordem decrescente.
// Faça um algoritmo que calcule a soma de 1 a 1000 usando a estrutura "for".
// Faça um algoritmo usando a estrutura "FOR" que escreva 50 vezes seu nome no terminal.
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
/*
Dados 2 arrays A = [1, 2, 4, 5, 6] e B = [3, 9, 8, 5, 0, 2], crie um algoritmo que imprime um novo array com os valores presentes nos Arrays A e B ao mesmo tempo.
Obs: Não utilize o includes, você deve encontrar os valores utilizando 2 fors.
*/