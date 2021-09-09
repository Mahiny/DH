// Participante A:  5, 8, 4, 9, 5
// Participante B:  8, 7, 8, 6, 8
// Participante C:  7, 5, 10, 8, 3
// O concurso consiste em 2 modalidades de seleção para um vencedor:
// Melhor média (a maior pontuação média entre os concorrentes)
// Maior e-tip(a maior pontuação entre as 5 notas de cada participante)

let a = [5, 8, 4, 9, 5];
let b = [8, 7, 8, 6, 8];
let c = [7, 5, 10, 8, 3];

/*
2. Crie uma função pontuacaoMedia à
 qual receba um participante por 
 parâmetro e deve calcular e devolver a pontuação média dele.

*/

function pontuacaoMedia(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return soma / array.length;
}

/*
3. Crie uma função pontuacaoMaior que receba um participante 
por parâmetro e deve calcular e 
devolver a pontuação mais alta que o participante tem.
*/
function pontuacaoMaior(array) {
  let maior = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  return maior;
}

//console.log(pontuacaoMaior(c));

/*
4. Logo nosso líder tecnológico nos pede para criar essas duas funções 
geramos uma nova funcionalidade chamada competição que receberá os 
3 participantes por parâmetros, e executará as duas funções criadas 
anteriormente para calcular as médias e pontuações mais altas de cada uma,
 e deve anunciar (mostrar pelo console) o vencedor de cada modalidade de pontuação.

*/

function competicao(a, b, c) {
  let mediaA = pontuacaoMedia(a);
  let maiorA = pontuacaoMaior(a);

  let mediaB = pontuacaoMedia(b);
  let maiorB = pontuacaoMaior(b);

  let mediaC = pontuacaoMedia(c);
  let maiorC = pontuacaoMaior(c);

  if (mediaA > mediaB && mediaA > mediaC) {
    console.log("Na media o participante A Ganhou!");
  } else if (mediaB > mediaA && mediaB > mediaC) {
    console.log("Na media o participante B Ganhou!");
  } else if (mediaC > mediaA && mediaC > mediaB) {
    console.log("Na media o participante C Ganhou!");
  } else {
    console.log("Não houve vencedor nesta modalidade (Empate)");
  }

  if (maiorA > maiorB && maiorA > maiorC) {
    console.log("No maior o participante A Ganhou!");
  } else if (maiorB > maiorA && maiorB > maiorC) {
    console.log("No maior o participante B Ganhou!");
  } else if (maiorC > maiorA && maiorC > maiorB) {
    console.log("No maior o participante C Ganhou!");
  } else {
    console.log("Não houve vencedor nesta modalidade (Empate)");
  }
}

//competicao(a,a,a);
// Se a[i] > b[i], então Alice recebe 1 ponto.
// 	Se a[i] < b[i], então Bob recebe 1 ponto.
// 	Se a[i] = b[i], nenhuma pessoa recebe um ponto.


const alicia = [23, 69, 32];
const bob = [12, 70, 43];


function Participante(mNome,mNotas){
  this.nome = mNome;
  this.notas = mNotas;
}

const participante1 = new Participante("Alicia",[23, 69, 32]);
const participante2 = new Participante("Lucas",[12, 70, 43]);
const participante3 = new Participante("Lucas",[12, 70, 43]);
const participante3 = new Participante("Lucas",[12, 70, 43]);

const alunos = [
  {
    id:1,
    nome:"Lucas",
    matricula:123,
  },
  {
    id:2,
    nome:"Lucas",
    matricula:123,
  },
  {
    id:1,
    nome:"Lucas",
    matricula:123,
  }
  ,{
    id:1,
    nome:"Lucas",
    matricula:123,
  }
]




function encontrarGanhador(participante1, participante2) {
  //solução

  let pontosA = 0;
  let pontosB = 0;

  for(let i = 0; i < participante1.notas.length ; i++){
    if(participante1.notas[i] > participante2.notas[i]) pontosA++;
    if(participante2.notas[i] > participante1.notas[i]) pontosB++;
  }

  if(pontosA > pontosB){
    console.log(participante1.nome + " ganhou!")
  } else if(pontosB > pontosA){
    console.log(participante2.nome + " ganhou!");
  } else {
    console.log("Empate!");
  }
}

encontrarGanhador(participante1,participante2);

const pessoa = {
  nome:"Lucas",
  sobrenome:"Feitosa",
  idade:"26",

}

const pessoas = [
  {
    nome:"Lucas",
    sobrenome:"Feitosa",
    idade:"26",
  
  },
  {
    nome:"Lucas",
    sobrenome:"Feitosa",
    idade:"26",
  
  },
  {
    nome:"Lucas",
    sobrenome:"Feitosa",
    idade:"26",
  
  },
  {
    nome:"Lucas",
    sobrenome:"Feitosa",
    idade:"26",
  
  }
]