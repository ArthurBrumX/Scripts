# Script Que Lê Um Número Real Qualquer Pelo Teclado e Mostre Na Tela Sua Porção Inteira.

import math
    # Importando a Biblioteca (math) - matematica
    # Para Ultiliza Apenas Uma Função:
        # from math import trunk
num = float(input("Digite um valor: "))

print ("o valor digitado foi{} e sua porção inteira é {}".format(num, math.trunc(num)))
    # Arredondando Ultilizando a funcao (trunc) da Biblioteca Que Arredonda o Número.

#-----------------------------------------------------------------------------------------

# Outra Forma Sem Importar Biblioteca.

#num = float(input(Digite Um numero: ))
#print ("O Valor Digitado foi {} e sua porção inteira é {}".format(num int(num)))




