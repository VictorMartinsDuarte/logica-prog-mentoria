//1. Crie um algoritmo que verifica se o nome da Mica está dentro do array de pessoas facilitadoras da Trybe.    //let facilitators = [Silvia, Isa, Marina,Mica, Amanda, Karine]   //Seu algoritmo deve exibir a mensagem "O nome da Mica está no array." Caso contrário, exiba "Não faz parte".

let facilitators = ['Silvia', 'Isa', 'Marina', 'Mica', 'Amanda', 'Karine'];

for (let index = 0; index < facilitators.length; index +=1) {
    if (facilitators[index].toLowerCase() === 'mica') {
        console.log("O nome da Mica está no array.");
    }
}

//2. Dada uma lista de números inteiros, escreva um algoritmo que retorne o MAIOR número da lista.

let lista = [0, 1, 2, 10, 3, 4, 5];
let maiorNumero = Math.max(...lista);

console.log(maiorNumero);

//3. Dada uma lista de números inteiros, escreva um algoritmo que retorne o MENOR número da lista.

let lista = [1, 2, 10, 3, 0, 4, 5];
let menorNumero = Math.min(...lista);

console.log(menorNumero);

//4 Pedro é pai de 4 filhos que têm idades diferentes. Esse ano ele notou que a soma da idade de seus filhos é igual à idade dele. 
// Dada a idade de Pedro e a idade de três de seus filhos, crie um programa para computar e imprimir a idade do filho mais velho de Pedro.
// A saída deve ser da seguinte forma: 'O filho mais velho tem X anos'

let pai = [35];
let idadeFilhos = [10, 9, 7];
let somaIdadesF = 0;

for (let index = 0; index < idadeFilhos.length; index++) {
    somaIdadesF += idadeFilhos[index];
}
idadeFilhos.push(pai - somaIdadesF);
console.log('O filho mais velho tem ' + (Math.max(...idadeFilhos)) + ' anos');

//5. Crie um algoritmo que recebe seu nome, último nome e idade e exibe estas informações no seguinte formato: Meu nome é "nome" "sobrenome" e tenho "x" anos de vida.

let nome = "Victor";
let lastName = ""

//6. Desenvolva um algoritmo que recebe dois números inteiros, executa as quatro operação matemáticas básicas nestes números (soma, subtração, multiplicação e divisão) e exibe os resultados no console.

let adicao = 0;
let subtracao = 0;
let multiplicacao = 0;
let divisao = 0;

function operacoes (a, b) {
    adicao = a + b;
    subtracao = a - b;
    multiplicacao = a * b;
    divisao = a / b;
}
operacoes(10, 2);
console.log(adicao, subtracao, multiplicacao, divisao);

//7. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let n = 150;
let contador = 0;

for (let index = 2; index <= n; index += 1) {
    if ((index % 3) === 0) {
        contador += 1;
    }  
}
if (contador === 50) {
    console.log(contador);
    console.log("Essa é a mensagem secreta!");
}


// 8. Escreva uma função que faça a simulação de um dado de RPG que vai receber como parâmetro o número
// de lados do dado. Exemplo: um D-6 vai sortear um número entre 1 e 6.

function randomD4() {
    return Math.floor((Math.random() * 4) + 1); 
}
function randomD6() {
    return Math.floor((Math.random() * 6) + 1);
}
function randomD10() {
    return Math.floor((Math.random() * 10) + 1);
}
function randomD12() {
    return Math.floor((Math.random() * 12) + 1);
}
function randomD20() {
    return Math.floor((Math.random() * 20) + 1);
}
function randomD100() {
    return Math.floor((Math.random() * 100) + 1);
}
console.log(randomD4(), randomD6(), randomD10(), randomD12(), randomD20(), randomD100())

// 9. Fernando tem um papagaio muito esperto. Quando está com as duas pernas no chão, o papagaio fala em português. Quando levanta a perna esquerda, fala em inglês. Por fim, quando levanta a perna direita fala em francês. 
// Jackson, amigo de Fernando, ficou fascinado com o animal. Em sua emoção perguntou: "E quando ele levanta as duas?". Antes que Fernando pudesse responder, o papagaio gritou: "Ai eu caio, né tio Jack!!".
// Desenvolva a função `papagaio`, que recebe uma string por parâmetro, que contém a situação de levantamento das pernas do papagaio, e retorna o idioma em que ele irá falar.
// Exemplo de entrata | Exemplo de saída
// esquerda           | english
// direita            | français
// nenhuma            | português
// as duas            | Ai eu caio, né!!
//10. Uma empresa irá realizar a entrega de suas mercadorias por meio de um drone. Este drone possui uma inteligência artificial para chegar ao seu destino, porém ainda são necessários alguns ajustes para que ele possa realizar as entregas.
// O drone voará sozinho até a casa de cada cliente e realizará a entrega pela janela. A janela das pessoas clientes possui o formato retangular e sempre estará totalmente aberta. A caixa na qual estarão as mercadorias tem a forma de um paralelepípedo reto retângulo (formato de um tijolo).
// Para realizar a entrega o drone possui uma visão computacional, posicionando a caixa da mercadoria com alguma de suas faces paralela à janela, sendo possivel a rotação.
// Crie um programa que realiza o cálculo para dizer se é possível ou não a entrada da caixa da mercadoria pela janela de cada cliente.
// - As informações que o drone captura na hora da análise são: altura, largura e profundidade da caixa e altura e largura da janela (todas em centimentros). // - A saída deve ter o seguinte formato: 'É possível realizar a entrega' ou 'Não é possível realizar a entrega'  