/// Desafio 1 função

function soma(number1,number2){
    return number1 + number2;
  }
function subtracao(number1,number2){
    return number1 - number2;
  }
function multi(number1,number2){
    return number1 * number2;
  }
function divisao(number1,number2){
    return number1 / number2;
  }
  
  
  function calc(number1, number2, operator) {
  
  
      if (operator == '+') {
          return soma(number1, number2);
          
      }
      if (operator == '-') {
          return subtracao(number1, number2);
          
      }
      if (operator == '*') {
          return multi(number1, number2);
          
      }
      if (operator == '/') {
          return divisao(number1, number2);
          
      }
    
  }
  
  const result = calc(4,2,'/');
  console.log(result);

/// Desafio 2 função

function deposito(saldo, valor) {
    saldo += valor;
    console.log(Depósito de ${valor} realizado. Novo saldo: ${saldo});
    return saldo;
  }
  
  function saque(saldo, valor) {
    if (valor > saldo) {
      console.log("Saldo insuficiente.");
    } else {
      saldo -= valor;
      console.log(Saque de ${valor} realizado. Novo saldo: ${saldo});
    }
    return saldo;
  }
  
  function consultarSaldo(saldo) {
    console.log(Saldo atual: ${saldo});
  }
  
  function aplicacaoBancaria() {
    let saldo = 0;
    let valorOperacao = 0;
    let regra = true;
    
    while (regra) {
      const escolha = prompt("Escolha uma operação 1. Depósito 2. Saque 3. Consultar Saldo 4. Sair");
  
      switch (escolha) {
        case "1":
          valorOperacao = parseFloat(prompt("Digite o valor da operação: "));
          saldo = deposito(saldo, valorOperacao);
          break;
        case "2":
          valorOperacao = parseFloat(prompt("Digite o valor da operação: "));
          saldo = saque(saldo, valorOperacao);
          break;
        case "3":
          consultarSaldo(saldo);
          break;
        case "4":
          console.log("Saindo da operação");
          regra = false;
          break;
        default:
          console.log("Opção inválida");
          break;
      }
    }
  }
  
  aplicacaoBancaria();


/// Desafio 3 função

function criarTabuleiro() {
  return Array(9).fill(null);
}

function verificarVencedor(tabuleiro) {
  const padroesVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const padrao of padroesVitoria) {
    const [a, b, c] = padrao;
    if (
      tabuleiro[a] &&
      tabuleiro[a] === tabuleiro[b] &&
      tabuleiro[a] === tabuleiro[c]
    ) {
      return tabuleiro[a];
    }
  }
  return null;
}

function tabuleiroCompleto(tabuleiro) {
  return tabuleiro.every((celula) => celula !== null);
}

function jogar() {
  let tabuleiro = criarTabuleiro();
  let jogadorAtual = "X";
  let jogoAtivo = true;

  function status() {
    console.log(
      tabuleiro[0] || " ",
      "|",
      tabuleiro[1] || " ",
      "|",
      tabuleiro[2] || " "
    );
    console.log(
      tabuleiro[3] || " ",
      "|",
      tabuleiro[4] || " ",
      "|",
      tabuleiro[5] || " "
    );
    console.log(
      tabuleiro[6] || " ",
      "|",
      tabuleiro[7] || " ",
      "|",
      tabuleiro[8] || " "
    );
  }

  let rodada = 0;

  while (jogoAtivo) {
    console.log("Rodada número " + rodada);
    status();

    rodada++;

    const movimento = prompt(
      `Jogador ${jogadorAtual}, digite o número da célula (1-9):`
    );
    const indiceMovimento = parseInt(movimento) - 1;

    if (
      tabuleiro[indiceMovimento] === null &&
      indiceMovimento >= 0 &&
      indiceMovimento <= 8
    ) {
      tabuleiro[indiceMovimento] = jogadorAtual;

      const vencedor = verificarVencedor(tabuleiro);
      if (vencedor) {
        console.log(`Jogador ${vencedor} venceu!`);
        jogoAtivo = false;
        status();
      } else if (tabuleiroCompleto(tabuleiro)) {
        console.log("Empate!");
        jogoAtivo = false;
        status();
      } else {
        jogadorAtual = jogadorAtual === "X" ? "O" : "X";
      }
    } else {
      console.log("Jogada inválida. Tente novamente.");
    }
  }
}

jogar();

/// Desafio 1 lógica

let array = [1,3,5,6,9];
let resultado = [];

let tamanho = array.length;

for(let i = 0; i < tamanho - 1; i++){
    let min = i;
    for(let j = i + 1; j < tamanho; j++){
        if(array[j] < array[min]){
            min = j;
        }
    }

    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
}

let arrayMin = array.slice();
let arrayMax = array.slice();

arrayMin.pop();
arrayMax.shift();

let somaMin = arrayMin.reduce((acc, curr) => acc + curr, 0);
let somaMax = arrayMax.reduce((acc, curr) => acc + curr, 0);

resultado.push(somaMin, somaMax);

console.log(resultado);


/// Desafio 2 Lógica

function escada(n) {
  for (let i = 1; i <= n; i++) {

    let blocos = '#'.repeat(i);
    console.log( blocos);
  }
}

escada(9);