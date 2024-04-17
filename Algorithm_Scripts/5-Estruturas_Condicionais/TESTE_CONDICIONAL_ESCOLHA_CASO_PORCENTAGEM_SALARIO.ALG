algoritmo "TESTE_CONDICIONAL_Escolha_Caso_Porcentagem_Salario"
var
    Nome: caractere
    Salario, Novo_salario: Real
    Dependentes: Inteiro
inicio
     Escreva ("Qual o nome do funcionario: ")
     Leia (nome)
     
     Escreva ("Qual o salario de ",nome, " ? R$: ")
     Leia (Salario)
     
     Escreva ("Qual é a quantidade de depentendes que ", nome, " tem? ")
     Leia (Dependentes)
     
     Escolha Dependentes

             Caso 0
                  Novo_salario <- salario + (salario * 5 /100)
                  
             Caso 1, 2, 3
                  Novo_salario <- Salario + (salario * 10 /100)
                  
             Caso 4, 5, 6
                  Novo_salario <- Salario + (salario * 15 /100)
                  
             Outrocaso
                  Novo_salario <- Salario + (salario * 18 /100)
                  
             fimEscolha
             Escreval ("O novo salario de ", nome, " será de R$: ", Novo_salario:5 :2, " reais" )

fimalgoritmo