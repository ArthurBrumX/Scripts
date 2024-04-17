# Script Que Pergunte a Quantidade De KM Percorridos Por Um Carro Alugado e a Quantidade De Dias 
# Pelos Quais Ele Foi Alugado Sabendo Que Ele Custa R$ 60 Por Dia e R$R 0.15 Por KM Rodado.

print ("=" * 40)

print ("Pikachu Cars!")

print ("=" * 40)

print ("Olá Usuário!")
print ("Bem Vindo, a Area De Pagamento!")
    # Boas Vindas Ao Usuário!.

print ("=" * 40)

dias = int(input("Quantos Dias o Veiculo Foi Alugado: "))
km = float(input("Quantos KM o Veiculo Foi Rodado: "))

print ("=" * 40)

pagamento_dias = dias * 60

pagamento_p_km = km * 0.15

valor_total = pagamento_dias + pagamento_p_km

print ("O Valor a Ser Pago Pelos Dias Usado é: {}".format(pagamento_dias))

print ("O Valor a Ser Pago Pela Kilomentragen Rodada é: {}".format(pagamento_p_km))

print ("O Valor Total a Ser pago é De: {}".format(valor_total))

print ("=" * 40)

