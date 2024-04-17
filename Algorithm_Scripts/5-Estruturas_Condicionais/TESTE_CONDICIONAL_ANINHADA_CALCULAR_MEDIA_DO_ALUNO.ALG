algoritmo "TESTE_CONDICIONAL_ANINHADA_CALCULAR_MEDIA_DO_ALUNO"
var
     Primeira_nota, Segunda_nota, media: real
inicio
      Escreval ("--------------------------------")
      Escreval ("      Escola Arthur Brum        ")
      Escreval ("--------------------------------")
      
      Escreva ("Qual a primeira nota? ")
      leia (Primeira_nota)
      
      Escreva ("Qual a segunda nota? ")
      leia (Segunda_nota)
      
      media <- (Primeira_nota + Segunda_nota) / 2

      se (media = 10) ou (media >= 9) entao
         Escreval ("-------------------------")
         Escreval ("A media foi de: ", media: 2: 1)
         Escreval ("O aluno Tirou nota A!")
         Escreval ("-------------------------")
         
      senao
           se ( media = 8) ou (media >= 7) entao
              Escreval ("-------------------------")
              Escreval ("A media foi de: ", media: 2: 1)
              Escreval ("O aluno tirou nota B!")
              Escreval ("-------------------------")
              
           senao
              se (media = 6) ou (media >=5) entao
                 Escreval ("-------------------------")
                 Escreval ("A media foi de: ", media: 2: 1)
                 Escreval("O aluno tirou nota C!")
                 Escreval ("-------------------------")

              senao
                   se (media = 4) ou (media >= 3) entao
                      Escreval ("-------------------------")
                      Escreval ("A media foi de: ", media: 2: 1)
                      Escreval ("O aluno tirou nota D!")
                      Escreval ("-------------------------")
                         
                   senao
                       se (media = 2) ou (media > 1) entao
                          Escreval ("-------------------------")
                          Escreval ("A media foi de: ", media: 2: 1)
                          Escreval (" O aluno tirou nota E!")
                          Escreval ("-------------------------")
                          
                       senao
                            se (media <= 0) entao
                               Escreval ("-------------------------")
                               Escreval ("A media foi de: ", media: 2: 1)
                               Escreval ("O aluno tirou nota F")
                               Escreval ("-------------------------")
                            fimse
                       fimse
                   fimse
              fimse
           fimse
      fimse
fimalgoritmo