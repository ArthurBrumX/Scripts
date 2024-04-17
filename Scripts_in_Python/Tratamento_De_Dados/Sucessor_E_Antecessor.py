# Sciprt que lê um número inteiro e mostre na tela o seu sucessor e seu antecessor!

print ("-" * 40)

print ("Olá Usuário!")
print ("Vamos Descobrir Qual é o Sucessor e o Antecessor De Um Número!")
    # Boas vindas Ao Usuário!

print ("=" * 40)

n1 = int(input("Digite Um Número: "))
    # Solicitando Dados Ao Usuário.

antecessor = n1 - 1
    # Realizando o Calculo e Atribuindo a Uma Variável.

sucessor = n1 + 1
    # Realizando o Calculo e Atribuindo a Uma Variável.

print ("O antecessor de ",n1," será: {}!".format(antecessor))
    # Imprimindo Na tela o Número antecessor Ao Que o Usuário Informou.

print ("O sucessor de ",n1," será: {}!".format(sucessor))
    # Imprimindo Na tela o Número antecessor Ao Que o Usuário Informou.

print ("=" * 40)