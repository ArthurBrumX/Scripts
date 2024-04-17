# Script Que Converte Uma Temperatura Digitada Em °C e Converta Em °F.

print ("=" * 40)

print ("Olá Usuário!!!")
print ("Este é Um Conversor De Temperatura!!")

print ("=" * 40)

C = float(input("Informe a Temperatura em °C:"))
F = ((9 * C) / 5) + 32

print ("A Tmperatura De {} °C Corresponde a {} °F!".format(C, F))

print ("=" * 40)