algoritmo "Teste_condicional_Escolha_Caso_Criança_Esperaça"
var
    D, Valor: inteiro
inicio
      Escreval ("----------------------------")
      Escreval ("     Crianca Esperança      ")
      Escreval ("----------------------------")
      
      
      Escreval ("Muito obrigadoo por ajudar ")
      Escreval (" [1] Para doar R$ 10 ")
      Escreval (" [2] Para doar R$ 25 ")
      Escreval (" [3] Para doar R$ 50 ")
      Escreval (" [4] Para doar outros valores ")
      Escreval (" [5] Para Cancelar")
      leia (D)
      
      Escolha D  //teste condicional pra ver qual opcao foi escolhida
      
              Caso 1 // caso a resposta do usuario for essa
                   Valor <- 10 // esse valor sera atribuido a variavel
                   
              Caso 2 // caso a resposta do usuario for essa
                   Valor <- 25  // esse valor sera atribuido a variavel
                   
              Caso 3 // caso a resposta do usuario for essa
                   Valor <- 50  // esse valor sera atribuido a variavel
                   
              Caso 4 // caso a resposta do usuario for essa
                   Escreva("Qual o valor da doacao? R$ ")
                   Leia (Valor) // esse valor sera atribuido a variavel
                   
              Caso 5 // caso a resposta do usuario for essa
                   Valor <- 0 // esse valor sera atribuido a variavel
                   
              fimEscolha
              Escreval ("--------------------------------------")
              Escreval ("Sua docao foi de : ", Valor)
              Escreval (" Muito obrigado! ")
              Escreval ("---------------------------------------")
              
      
fimalgoritmo