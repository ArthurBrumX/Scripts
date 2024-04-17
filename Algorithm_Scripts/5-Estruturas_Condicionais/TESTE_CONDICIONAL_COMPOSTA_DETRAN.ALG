algoritmo "Teste_condicional_Composta_Detran"
var
   ano_atual, ano_nasc, idade: inteiro
inicio

    Escreval ("-------------------------")
    Escreval ("Departamento de Transito")
    Escreval ("-------------------------")
    Escreva ("Em que ano nós estamos? ")
    leia (ano_atual)
    
    Escreva ("Em que ano voce nasceu? ")
    leia (ano_nasc)
    
    idade <- ano_atual - ano_nasc
    
    se ( idade >= 18) entao
    
       Escreval (" -----------Status---------------")
       Escreval (" idade: ", idade)
       Escreval (" Apto a tirar carteira")
       Escreval (" ------------------------")
       
    senao
         Escreval ("------------Status-----------------")
         Escreval ("Idade: ", idade)
         Escreval ("Voçê ainda não esta apto a tirar carteira")
         Escreval (" --------------------------")
         
    fimse
    
    //algoritmo desenvolvido para saber se uma pessoas esta apta ou nao a tirar a carteira de motorista.
    
fimalgoritmo