print ("=" *45)

print("Cardápio")

print ("=" * 45)

print("(1) = Bife Acebolado - R$15,00")
print("(2) = Lasanha - R$25,00")
print("(3) = Macarronada - R$ 30,00")
print("(4) = Frango Amilanesa - R$20,00")
print("(5) = Baiao De Três - R$15,00")

print ("-" * 45)

conta = 0
Pedido = int(input("Digite O numero do prato Desejado: "))

if Pedido == 1:
    print ("Voce Escolheu Bife Acebolado")
    gorjeta = input("Deseja Pagar a Gorjeta do Garçom: [S/N]")
    if gorjeta == "S":
        valor_conta = 15 + ((10 * 15) / 100)
        print("o valor da conta ficou: R${}".format(valor_conta))
    else:
        print("O valor da Conta ficou: R$15,00")
elif Pedido == 2:
    print ("Voce Escolheu Lasanha")
    gorjeta = input("Deseja Pagar a Gorjeta do Garçom [S/N]: ")
    if gorjeta == "S":
        valor_conta = 25 + ((10 * 25) / 100)
        print("o valor da conta ficou: R${}".format(valor_conta))
    else:
        print("O valor da Conta ficou: R$25,00")
elif Pedido == 3:
    print ("Voce Escolheu Macarronada")
    gorjeta = input("Deseja Pagar a Gorjeta do Garçom: [S/N]")
    if gorjeta == "S":
        valor_conta = 30 + ((10 * 30) / 100)
        print("o valor da conta ficou: R${}".format(valor_conta))
    else:
        print("O valor da Conta ficou: R$30,00")
elif Pedido == 4:
    print ("Voce Escolheu Frango Amilanesa")
    gorjeta = input("Deseja Pagar a Gorjeta do Garçom: [S/N]")
    if gorjeta == "S":
        valor_conta = 20 + ((10 * 20) / 100)
        print("o valor da conta ficou: R${}".format(valor_conta))
    else:
        print("O valor da Conta ficou: R$20,00")
elif Pedido == 5:
    print ("Voce Escolheu Baiao De Três")
    gorjeta = input("Deseja Pagar a Gorjeta do Garçom: [S/N]")
    if gorjeta == "S":
        valor_conta = 15 + ((10 * 15) / 100)
        print("o valor da conta ficou: R${}".format(valor_conta))
    else:
        print("O valor da Conta ficou: R$15,00")
