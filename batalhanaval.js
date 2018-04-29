// Gerar um valor inteiro aleatório entre 1 e 5. (Porque o navio ao estar localizado em 3 quadrados consecutivos, o último que este pode ocupar é o 5).) */

var posicaoAleatoria = 1 + Math.floor(Math.random() * 5); //A posição inicial passa de fixa para aleatória. */

//Definição das variável das localizações dos quadrados onde se localiza o navio: */
var posicao1 = posicaoAleatoria; //A variável posicao1 é definida aleatoriamente na linha dos 7 quadrados. */
var posicao2 = posicao1+1; //A variável posicao 2 é definida por ser aquela que vem imediatamente à variável aleatória posicao1. */
var posicao3 = posicao2 +1; //A variável posicao3 é definida assim como a variavel posicao2 como a que se soma um a posicao anterior do navio. */

//Inicialização de variáveis:*/
var jogada; //Definição da variável jogada.*/
var atingidas = 0; //Inicialização da variável aingidas a zero.*/
var totalJogadas = 0; //Inicialização da variável totalJogadas a zero. */

var foiAfundado = false; //Inicialização da variável foiAfundado a falso. */

//O Ciclo while ao ser uma forma de iterar sobre um conjunto de valores até algo acontecer, neste caso até a variavel foiAfundado */
// deixar de ser verdadeiro o ciclo continua a ser executado até que o navio seja afundado. */

while (foiAfundado == false) {

   jogada = prompt("Podes jogar - Escolhe um numero entre 1 e 7:"); //Aparece uma caixa pedindo a jogada, onde neste neste é escolher um número entre 1 e 7. */

   	//condiçao 'if' que determina se o valor que o utilizador deu é um número
	//se não for, o ciclo recomeça até ser dado um número
   if (isNaN(jogada)) {
	
		alert("Por favor insira um número.");
		
	//condição 'if' que faz com que a resposta dada pelo utilizador esteja entre parâmetros, neste caso entre 1 e 7, ou seja, que o valor dado esteja dentro da matriz do jogo
   } else if (jogada < 1 || jogada > 7) {

      alert("Jogada inválida. Tenta de novo!"); //Se o numero inserido não estiver entre os valores pedidos, apenas uma caixa a dizer que tal jogada é inválida. */

   } else {

      totalJogadas = totalJogadas + 1; //Caso o jogador insira essa jogada inválida, esta contará para a soma de Jogadas feitas. */

      if (jogada == posicao1 || jogada == posicao2 || jogada == posicao3) { //Condiçao para a jogada estar certa, ou seja, concidir com a posiçao 1, 2 ou 3. */

         alert("Acertaste em mais uma parte!"); //Caso a condiçao if seja verdadeira, aparece uma caixa informando o jogador que este acertou na jogada. */

         atingidas = atingidas +1; //É adiconada a jogada feita à variável atingidas. */

         if (atingidas == 3) { //Se a variável atingidas seja igual a 3 */

            foiAfundado = true; //A variável foiAfundado passa a ser verdadeira, e o ciclo termina. */

            alert("Navio totalmente afundado!"); /*Informação disponibilizada ao jogador que o acertou na totalidade do navio. */

         }

      } else {

         alert("Falhaste..."); /* Caso contrário o jogador é informado que falhou*/

      }

   }

}

/*A variável estatística é definida por apresentar o número de Jogadas, numero esse que é definido pela variável totalJogadas, bem como a pontaria do jogador, a dita estatística */
var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " + 
                          "o que quer dizer que a tua pontaria foi de " + (3/totalJogadas);

alert(estatistica); /* O jogador é alertado da variável estatística */