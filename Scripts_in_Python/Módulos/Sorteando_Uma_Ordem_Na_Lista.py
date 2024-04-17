# Script Que Armazene o Nome De Pessoas e De Forma Aleatoria Escreva Esses Nomes Na Tela!.

import random
    # random = aleatorio
        # O Modulo random Usa Elementos De Aleatoriedade!.

pessoa_1 = input("Digite o Nome Da Primeira Pessoa: ")

pessoa_2 = input("Digite o Nome Da Segunda Pessoa: ")

pessoa_3 = input("Digite o Nome Da Terceira Pessoa: ")

pessoa_4 = input("Digite o Nome Da Quarta Pessoa: ")

lista = [pessoa_1, pessoa_2, pessoa_3, pessoa_4]

random.shuffle (lista)
    # Shuffle = Embaralhar

print(" A Ordem De Escolhidos é a Seginte: ")
print (lista)