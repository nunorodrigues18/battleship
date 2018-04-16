// Gerar um valor inteiro aleatório entre 1 e 5. (Porque o navio ao estar localizado em 3 quadrados consecutivos, o último qu8e este pode ocupar é o 5).)

var posicaoAleatoria = 1 + Math.floor(Math.random() * 5); //A posição inicial passa de fixa para aleatória.

//Definição das variável das localizações dos quadrados onde se localiza o navio:
var posicao1 = posicaoAleatoria; //A variável posicao1 é definida aleatoriamente na linha dos 7 quadrados.
var posicao2 = posicao1+1; //A variável posicao 2 é definida por ser aquela que vem imediatamente à variável aleatória posicao1.
var posicao3 = posicao2 +1; //A variável posicao3 é definida assim como a variavel posicao2 como a que se soma um a posicao anterior do navio.

//Inicialização de variáveis:
var jogada; //Definição da variável jogada.
var atingidas = 0; //Inicialização da variável aingidas a zero.
var totalJogadas = 0; //Inicialização da variável totalJogadas a zero.

var foiAfundado = false; //Inicialização da variável foiAfundado a falso.

//O Ciclo while ao ser uma forma de iterar sobre um conjunto de valores até algo acontecer, neste caso até 

while (foiAfundado == false) {

   jogada = prompt("Podes jogar - Escolhe um numero entre 1 e 7:");

   if (jogada < 1 || jogada > 7) {

      alert("Jogada inválida. Tenta de novo!");

   } else {

      totalJogadas = totalJogadas + 1;

      if (jogada == posicao1 || jogada == posicao2 || jogada == posicao3) {

         alert("Acertaste em mais uma parte!");

         atingidas = atingidas +1;

         if (atingidas == 3) {

            foiAfundado = true;

            alert("Navio totalmente afundado!");

         }

      } else {

         alert("Falhaste...");

      }

   }

}

var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " + 
                          "o que quer dizer que a tua pontaria foi de " + (3/totalJogadas);

alert(estatistica);
