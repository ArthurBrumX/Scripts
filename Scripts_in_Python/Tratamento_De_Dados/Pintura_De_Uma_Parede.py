# script Que lê a Largura e a Altura de Uma Parede e Calcule;
# Sua Área e Quantidade De Tinta Necessaria Para Pinta-la;
# Sabendo Que Um Litro De Tinta Pinta Uma Área De 2m Quandrados;

print ("=" * 40)

print ("Loja De Tinta!")

print ("-" * 40)

print ("Olá Usuário!")
print ("Vai Pintar Uma Parede Mas, Não Sabe Quanto De Tinta Comprar?!")
print ("Então Vamos Descobrir!")
    # Boas vindas Ao Usuário!

print ("=" * 40)

print ("Primeiro Informe: ")

largura = float(input("Qual a Largura Da Parede: "))
    # Solicitando Dados Ao Usuário.

altura = float(input("Qual a Altura da Parede: "))
    # Solicitando Dados Ao Usuário.

area = altura * largura
    # Primeiro Achamos a Area Da Parede Realizando o Segunte Calculo.
        # Depois Atribuimos o Resultado a Uma Variável.

tinta = area / 2
    # Depois De Achar a Area
        # Dividir Por 2 (Metro Quadrado)
            # Depois Realizar Uma Atribuição a Uma Outra Variável.

print ("=" * 40)

print ("Sua Parede Tem a Dimensão De {} X {} e Sua Area é De {}m !".format(largura, altura, area))
    # Imprimindo Na tela Qual foi o Resultado Da Area Da Sua Parede.

print ("Para Pintar Essa Parede Serão Necessario {} Litros De Tinta!".format(tinta))
    # Imprimindo Na Tela Qual é a Quantidade De tinta Nescessarios Para Pintar a Parede Inteira. 

print ("=" * 40)