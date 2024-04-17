# Script Que lê Dois Números e Retorne a Soma Entre Eles.

print ("===================================================")

print ("Somando Dois Números!!")

print ("===================================================")

print ("Olá usuário!!")
print ("Por Gentileza, Digite Dois Numeros!!")

print ("===================================================")

numero_1 = float (input("Primeiro Número: "))
    # solicita Ao Usuário o Primeiro Número.

print ("===================================================")

numero_2 = float (input("Segundo Número: "))
    # Solicita Ao Usuário o Segundo Número.

soma = numero_1 + numero_2
    # A Variável (soma) Vai Receber o Valor Da Soma Entre As Variaveis (n1) e (n2).

print ("===================================================")

print ("A Soma Entre Os Dois Números Digitados é:",soma) # Exemplo ultilizando o print
    # Mostrando Na Tela Uma Mensagem, Junto Com a Resposta Da Soma.

print ("===================================================")

print ("A Soma Entre",numero_1, "e" ,numero_2,"é Igual a:",soma) 
    # Exemplo De Impressão Ultilizando o Print.

print ("====================================================")

print ("A Soma Entre {0} e {1} é Igual a: {2}".format(numero_1, numero_2, soma)) 
    # Exemplo De Impressão Ultilizando o Print.

print ("===================================================")