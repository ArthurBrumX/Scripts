algoritmo "Teste_condicional_composta_idade"
var
   ano_atual, ano_nasc, idade: inteiro
inicio
     Escreva ("Em que ano Estamos?")
     leia (ano_atual)

     Escreva ("Em que ano eu nasci? ")
     leia (ano_nasc)

     idade <- ano_atual - ano_nasc

     Escreva ("em ", ano_atual, " voce ter�", idade," anos")

     se ( idade >= 18) entao
        Escreval (" e j� ter� atingido a maior idade")
        
     senao
          Escreval (" e Vo�e ainda n�o ter� atingido a maior idade")
     fimse






fimalgoritmo