# Script que lê um numero de 0 a 9999 e mostre na tela cada um dos digitos separados.

numero = int(input("Digite Um Numero de 0 a 9999: "))

print ("O Numero Digitado foi: {}".format(numero))

unidade = numero // 1 % 10
    # Fatiamento de numero Ultilizando calculos.

dezena = numero // 10 % 10
    # Fatiamento de numero Ultilizando calculos.

centena = numero // 100 % 10
    # Fatiamento de numero Ultilizando calculos.

milhar = numero // 1000 % 10
    # Fatiamento de numero Ultilizando calculos.

print ("Unidade: {}".format(unidade))

print ("Dezena: {}".format(dezena))

print ("Centena: {}".format(centena))

print ("Milhar: {}".format(milhar))