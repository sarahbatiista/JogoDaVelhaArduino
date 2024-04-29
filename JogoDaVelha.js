function main() {
    // Criar o tabuleiro e jogadores, zerar as variáveis.
    // 
    // 0: Posição vazia
    // 1: Jogada na posição do jogador 1
    // 2: Jogada na posição do jogador 2
    var velha;
    var linha;
    var coluna;
    var haVencedor;

    haVencedor = 0;
    var tabuleiro = Array(9);

    // Limpar/zerar o tabuleiro
    var i;

    for (i = 0; i <= 8; i++) {
        tabuleiro[i] = 0;
    }
    var jogada;

    // Iniciar o jogo, definir quem joga primeiro
    var jogadorDaVez;

    jogadorDaVez = 1;

    // Registrar a jogada do primeiro jogador
    velha = 1;
    do {
        console.log(tabuleiro[0].toString() + tabuleiro[1] + tabuleiro[2]);
        console.log(tabuleiro[3].toString() + tabuleiro[4] + tabuleiro[5]);
        console.log(tabuleiro[6].toString() + tabuleiro[7] + tabuleiro[8]);
        jogada = "";
        console.log("Digite a posição da sua peça, Jogador" + jogadorDaVez);
        jogada = window.prompt('Enter a value for jogada');
        if (posicaoValida(jogada)) {
            linha = parseInt(jogada.charAt(0));
            coluna = parseInt(jogada.charAt(2));
            console.log("Linha: " + linha + ";Coluna:" + coluna);
            if (tabuleiro[3 * linha + coluna] == 0) {
                tabuleiro[3 * linha + coluna] = jogadorDaVez;
                haVencedor = verificacao(tabuleiro, jogadorDaVez);
                if (jogadorDaVez == 1) {
                    jogadorDaVez = 2;
                } else {
                    jogadorDaVez = 1;
                }
            } else {
                console.log("Posição ocupada");
            }
        } else {
            console.log("Jogada inválida");
        }
    } while (haVencedor == 0 && velha <= 9);
    if (jogadorDaVez == 1) {
        jogadorDaVez = 2;
    } else {
        jogadorDaVez = 1;
    }
    if (haVencedor != 0) {
        console.log("Parabéns pela vitória, jogador " + jogadorDaVez);
    } else {
        console.log("Deu velha!!!");
    }
}

function posicaoValida(entrada) {
    var entradaValida;

    entradaValida = false;
    console.log(entrada.length());
    if (entrada.length() == 3) {
        if (entrada.charAt(0) == "0" || entrada.charAt(0) == "1" || entrada.charAt(0) == "2") {
            if (entrada.charAt(2) == "0" || entrada.charAt(2) == "1" || entrada.charAt(2) == "2") {
                entradaValida = true;
            }
        }
    }
    
    return entradaValida;
}

function verificacao(tabuleiro, jogadorDaVez) {
    var vencedor;

    vencedor = 0;
    if (tabuleiro[0] == jogadorDaVez && tabuleiro[1] == jogadorDaVez && tabuleiro[2] == jogadorDaVez || tabuleiro[3] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[5] == jogadorDaVez || tabuleiro[6] == jogadorDaVez && tabuleiro[7] == jogadorDaVez && tabuleiro[8] == jogadorDaVez) {
        vencedor = 2;
    } else {
        if (tabuleiro[0] == jogadorDaVez && tabuleiro[3] == jogadorDaVez && tabuleiro[6] == jogadorDaVez || tabuleiro[1] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[7] == jogadorDaVez || tabuleiro[2] == jogadorDaVez && tabuleiro[5] == jogadorDaVez && tabuleiro[8] == jogadorDaVez) {
            vencedor = 2;
        } else {
            if (tabuleiro[0] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[8] == jogadorDaVez || tabuleiro[2] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[6] == jogadorDaVez) {
                vencedor = 2;
            }
        }
    }
    
    return vencedor;
}
