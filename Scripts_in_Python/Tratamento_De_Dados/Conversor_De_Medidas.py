# Script Que Lê Um Valor Em Metros e o Exibe o Resultado Convertido Em Centimetros e Milimetros.

print ("=" * 40)

print ("Olá Usuario!!")
print ("Este é Um Conversor De Metros!")

print ("=" * 40)

metros = float(input("Digite Quantos Metros Irão Ser Convertidos: "))
    # A Variável Vai Receber o Dado Inserido Pelo Usuário.

centimetros = metros * 100 
    # Realizando Uma Atribuição;
        # (Centimetros) Vai Recever (O conteudo de Metros) X 100.
    # CEN_timetros (Metros X 100).

milimetros = metros * 1000
    # Realizando Uma Atribuição;
        # (milimetros) Vai Recever (O conteudo de Metros) X 100
    # MIL_imetros (Metros X 1000).

print ("=" * 40)

print (metros, "Metros é Igual a {:.0f} Centimetros".format(centimetros))
    # Imprime na Tela o Resultado Da Conversão.

print ("-" * 40)

print (metros, "Metros é Igual a {:.0f} Milimetros!".format(milimetros))
    # Imprime Na Tela o Resultado Da Conversão.

print ("=" * 40)

