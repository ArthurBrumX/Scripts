# Script para Realizar Operacoes Matemáticas Ultilizando Operadores Aritmeticos!

print ("=" * 40)
    # Imprime Na Tela 40x (=).

print ("Calculos com Operadores!!")

print ("=" * 40)
    # Imprime Na Tela 40x (=).

print ("Olá Usuário!!")

print ("-" * 40)
    # Imprime Na Tela 40x (=).

n1 = int(input("Digite o Primeiro Número: "))

print (" " * 40)
    # Imprime Na Tela 40x (=).

n2 = int(input("Digite o Segundo Número: "))

soma = n1 + n2
    # Operador De Adição (+).

multiplicacao = n1 * n2
    # Operador De Multiplicação (*).

divisao = n1 / n2
    # Operador De Divisao (/).

divisao_inteira = n1 // n2
    # Operador De Divisão Inteira (\).

exponenciacao = n1 ** n2
    # Operador De Exponenciação (**).

print ("=" *40)
    # Imprime Na Tela 40x (=).

print ("Modelo Sem Formatação!")

print ("=" * 40)
    # Imprime Na Tela 40x (=).

print ("A Soma é {}! O Produto é {}!, e a Divisão é: {}! ".format(soma, multiplicacao, divisao), end ='')
    # Para Não Quebrar a Linha Entre Dois Print´s, Use o Comando (.end = '').

print ("A Divisão Inteiro é: {}!, A Potência é Igual a: {}!".format(divisao_inteira, exponenciacao))

    #Para Quebrar a Linha Use (\n).

print ("A Soma é Igual a: {}! \n O Produto é Igual a: {}! \n A Divisao é Igual a: {}! \n".format(soma, multiplicacao, divisao), end = '')

print ("A Divisao Inteira é Igual a: {}! \n A Potência é Igual a: {}".format(divisao_inteira, exponenciacao))


print ("=" * 40) 
    # Imprime Na Tela 40x (=).


print ("Modelo Com Formatação")

print ("=" * 40) 
    # Imprime Na Tela 40x (=).

print ("A Soma Entre ",n1," e ",n2," é igual a: {}!".format(soma)) 
    # Vai Realizar a Soma Entre As Variáveis.

print ("A Multiplicação Entre ",n1," e ",n2," é Igual a: {}!".format(multiplicacao)) 
    # Vai Realizar a Multiplicação Entre As Variáveis.

print ("A Divisao ente ",n1," e ",n2," é igual a: {}!".format(divisao)) 
    # Vai Ralizar a Divisao Entre As Variaveis.

print ("O Resultado Inteiro Da Divisao Entre ",n1," e ",n2," é Igual a: {}!".format(divisao_inteira)) 
    # Vai Realizar a Divisao Entre As Variáveis e Mostrar o Resultado Inteiro.

print ("O Resultado De ",n1," Elevado a ",n2," é Igual a: {}!".format(exponenciacao)) 
    # Vai Realizar a Exponenciacao Entre As Variaveis.

print ("=" * 40) 
    # Escreve Na Tela 40x (=).

print ("Fim Do Programa! :D")

print ("=" * 40) 
    # Escreve Na Tela 40x (=).