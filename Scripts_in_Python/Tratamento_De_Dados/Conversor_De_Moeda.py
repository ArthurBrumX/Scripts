#Script que leia quanto dinheiro uma pessoa tem na carteir e mostre quantos dolares ela pode comprar 

print ("=" * 40)

print ("Olá Usuario!!")
print ("Este é Um Conversor De Moedas!")

print ("=" * 40)

valor = float(input("Quantos Reais Serõo Convertidos R$"))
    # A Variável Vai Receber o Dado Inserido Pelo Usuário.

print ("=" * 40)

conversor_dolar = valor / 5.31
    # Realizando Uma Atribuição
        # (Conversor_Dolar) Vai Recever (O conteudo de "Valor") Dividido Por (5.31).

Conversor_Euro = valor / 5.62
    # Realizando Uma Atribuição
        # (Conversor_Euro) Vai Recever (O conteudo de "Valor") Dividido Por (5.62).

conversor_iene = valor / 0.039
    # Realizando Uma Atribuição
        # (Conversor_Iene) Vai Recever (O conteudo de "Valor") Dividido Por (0.039)

conversor_won = valor / 0.0041
    # Realizando Uma Atribuição
        # (Conversor_won) Vai Recever (O conteudo de "Valor") Dividido Por (0.0041)

conversor_Dinar_kuwaitiano = valor / 17.27
    # Realizando Uma Atribuição
        # (Conversor_Dilar_kuwaitiano) Vai Recever (O conteudo de "Valor") Dividido Por (17.27)

print ("* ",valor,"R$ reais Convertidos em Dolar, serão {:.2f} dolares!".format(conversor_dolar))
    # Imprime na Tela o Resultado Da Conversão.

print ("_" * 30)

print ("* ",valor,"R$ reais Convertidos em Euro, serão {:.2f} Euros!".format(Conversor_Euro))
    # Imprime na Tela o Resultado Da Conversão.

print ("_" * 30)

print ("* ",valor,"R$ reais convertidos em Iene, serão {:.2f} Ienes!".format(conversor_iene))
    # Imprime na Tela o Resultado Da Conversão.

print ("_" * 30)

print ("* ",valor,"R$ reais convertidos em won, serão {:.2f} won!".format(conversor_won))
    # Imprime na Tela o Resultado Da Conversão.

print ("_" * 30)

print ("* ",valor,"R$ reais convertidos em , Dinar kuwaitiano serão {:.2f} Dinar kuwaitiano!".format(conversor_Dinar_kuwaitiano))
    # Imprime na Tela o Resultado Da Conversão.

print ("=" * 40)

