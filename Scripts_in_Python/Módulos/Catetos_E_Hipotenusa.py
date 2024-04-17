# Script Que Le o Comprimento Do Cateto Oposto e Do Cateto Adjacente De Um Triangulo, Calcule e Mostre O Comprimento Da Hiponenusa.

import math
    # Ou from math import hypot

co = float(input("Comprimento Do Cateto Oposto: "))
ca = float(input("Compirmento Do Catewto Adjacecnte: "))

hi = math.hypot (co, ca)
    # Realizando o calculo da Hipotenusa

print ("A Hipotenusa Vai Medir {:.2f}".format(hi))

#---------------------------------------------------------------------------------------------

# Sem Importação

# co = float(input("Comprimento Do Cateto Oposto: "))
# ca = float(input("Comprimento D Cateto Adjacente: "))

# hi = (co ** 2 + ca ** 2) ** (1/2)

# print ("A hipotenusa vai medir {:.2f}".format(hi))














