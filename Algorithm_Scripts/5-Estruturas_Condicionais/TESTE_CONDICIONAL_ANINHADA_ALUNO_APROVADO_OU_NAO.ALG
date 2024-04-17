algoritmo "Teste_condicional_Aninhada_Aluno_Aprovado_ou_nao"
var
     Primeira_nota, Segunda_nota, Media: Real
inicio

      Escreva("Digite a primeira nota:")
      leia (Primeira_nota)
      
      Escreva("Digite a segunda nota: ")
      leia (Segunda_nota)
      
      Media <- (Primeira_nota + Segunda_nota) / 2
      
      Escreval ("A media do aluno foi ", Media: 4 : 2)
      
      se (Media >= 7) entao
         Escreval ("Aluno aprovado!")
         
         senao
         
              Se (Media >= 5) e (Media < 7) entao
                 Escreval ("Aluno em Recuperacao")
                 
              senao
                   Escreval ("Aluno em Reprovado")
              fimse
      fimse


fimalgoritmo