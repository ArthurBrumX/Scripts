#Script Para Sortear Um Nome Digitado Pelo Usuario 

print ("=" * 40)

print ("Sorteio!")
print ("Olá Usuário!")
print ("Bem Vindo, Vamos Realizar Um Sorteio De Nomes! ")
    # Boas Vindas Ao Usuário!.

print ("=" * 40)

import random
    # Solicitando a Biblioteca (random).
        # Ou ( From random import choice )

pessoa_1 = input("Digite O Primero Nome:")
    # Solicitando Um Dado Ao Usuário!

pessoa_2 = input("Digite o Segundo Nome: ")
    # Solicitando Um Dado Ao Usuário!

pessoa_3 = input("Digite o Terceiro Nome: ")
    # Solicitando Um Dado Ao Usuário!

pessoa_4 = input ("Digite o Quarto Nome: ")
    # Solicitando Um Dado Ao Usuário!

sorteio = [pessoa_1, pessoa_2, pessoa_3, pessoa_4]
    # Variável = Sorteio
        # pessoas Que Irao Participar Do Sorteio.
            # Uma Lista Em Python Fica Dentro De [] "colchetes"

escolhindo = random.choice(sorteio)
    # Solicitando a Funcao (Choice) Da Biblioteca (Random).
        # Se for Declarar Que só irá usar a Função (Choice)
            # Basta Apenas Adcionar (escolhido = choice(sorteio))
                # Choice -> Uma Escolha Dentro Da Lista

print ("Parabéns {}! voçê Foi o Sorteado!".format(escolhindo))
    # Imprimindo Na Tela!

print ("=" * 40)