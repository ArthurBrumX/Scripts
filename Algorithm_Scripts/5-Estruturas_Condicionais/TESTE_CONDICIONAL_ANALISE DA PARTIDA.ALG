algoritmo "ANALISE DA PARTIDA"
// Fun��o : Analise da diferenca de GOLS entre Bangu x Madureira
// Autor :  Arthur Brum
// Data : 11/12/2022
// Se��o de Declara��es : Ao inv�s de dif, Utilizei Abs (Valor Absoluto) para obter a diferenca de Gols
var
     GOLB, GOLM, M: Inteiro
     Resultado: Caracter
inicio
// Se��o de Comandos
         Escreval ("--------------------")
         Escreval ("| ANALISE DA PARTIDA |")
         Escreval ("| BANGU X MADUREIRA  |")
         Escreval ("--------------------")
         Escreval ("Quantos gol(s) marcado(s) pelo Bangu? ")
         Leia (GOLB)
         Escreval ("Quantos gol(s) marcado(s) pelo Madureira? ")
         Leia (GOLM)

         M <- Abs(GOLB - GOLM)

         Escolha (M)
                 Caso 0
                           Resultado <- (" PARTIDA EMPATADA ")
                 Caso 1,2,3
                           Resultado <- (" PARTIDA NORMAL ")
                 OutroCaso
                           Resultado <- (" GOLEADA ")
         fimEscolha
                   Escreval ("===========================")
                   Escreval ("  DIFEREN�A DE GOLS:  ", M)
                   Escreval ("  STATUS: ", Resultado)
                   Escreval ("===========================")
fimalgoritmo