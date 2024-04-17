algoritmo "Teste_condicional_Composta_Media_aluno"
var

     Primeira_nota, Segunda_nota, Media: real
     
inicio

     Escreval ("-------------------------")
     Escreval ("Escola Arthur De Andrade")
     Escreval ("-------------------------")
     
     Escreva ("Qual é a primeira nota? ")
     leia (Primeira_nota)
     
     Escreva ("Qual é a segunda nota? ")
     leia (Segunda_nota)
     
     Media <- (Primeira_nota + Segunda_nota) / 2
     
     se (Media >= 6) entao
     
        Escreval ("----------------------")
        Escreval ("media: ", Media)
        Escreval ("Aluno aprovado")
        Escreval ("----------------------")
        
     Senao
     
          Escreval ("----------------------")
          Escreval ("media: ", Media)
          Escreval ("Aluno Reprovado ;-;")
          Escreva ("-------------------------")
          
     fimse
fimalgoritmo