pontos_Acumulados_Prim = 0
pontos_Acumulados_Seg = 0

quant_Livros_Prim = int(input("Quantos Livros Voçê Comprou No Primeiro Semestre: "))

if quant_Livros_Prim == 0:
    pontos_Acumulados_Prim = 0
elif quant_Livros_Prim == 1:
    pontos_Acumulados_Prim = 5
elif quant_Livros_Prim == 2:
    pontos_Acumulados_Prim = 15
elif quant_Livros_Prim == 3:
    pontos_Acumulados_Prim = 30
elif quant_Livros_Prim >= 4:
    pontos_Acumulados_Prim = 60


quant_Livros_Seg = int(input("Quantos Livros Voçê comprou no Segundo Semestre: "))

if quant_Livros_Seg == 0:
    pontos_Acumulados_Seg = 0
elif quant_Livros_Seg == 1:
    pontos_Acumulados_Seg = 5
elif quant_Livros_Seg == 2:
    pontos_Acumulados_Seg = 15
elif quant_Livros_Seg == 3:
    pontos_Acumulados_Seg = 30
elif quant_Livros_Seg >= 4:
    pontos_Acumulados_Seg = 60

pontos_Acumulados = pontos_Acumulados_Prim + pontos_Acumulados_Seg

print(f"O total de postos acumulados sao {pontos_Acumulados}")

if pontos_Acumulados == 0:
    print("Voce nao tem nenhum ponto Acumulado! (Sorry!)")
elif pontos_Acumulados >= 20 or pontos_Acumulados <= 30:
    print("Voce pode Escolher uma Ecoa Ou Uma Caneta personalizada!")
elif pontos_Acumulados >= 35 or pontos_Acumulados >= 60:
    print("Voce pode Escolher Um livro de até R$30,00 Ou Luminaria De Cabeceira")
elif pontos_Acumulados > 65:
    print("Voce Pode escolher Dois Livros De Até R$100,00 Ou Uma Bateria Portartil")


