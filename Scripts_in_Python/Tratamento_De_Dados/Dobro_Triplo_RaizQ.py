# Script que lê um Número e mostre o seu dobro, triplo e raiz quadrada.

print ("=" * 50)

print ("Olá Usuário!!")
print ("Para Saber QUal é o Dobro, Triplo e a Raiz Quadrada; ")

print ("=" * 50)

n1 = float(input("Digite Um Número: "))

print ("=" * 50)

dobro = n1 * 2
    # Calculo Pra Saber o Dobro De Um Número.

triplo = n1 * 3
    # Calculo Pra Saber o Triplo De Um Número.

raizQ = n1 ** 0.5
    # Calculo Pra Saber o Dobro De Um Número.

print("O Dobro De ",n1," é Igual a: {}".format(dobro))
    # Imprimindo Na tela o Resultado Junto Com Uma Mensagem.

print("O Triplo De ",n1," é Igual a: {}".format(triplo))
    # Imprimindo Na tela o Resultado Junto Com Uma Mensagem.

print ("A Raiz Quadradada De ",n1," é Igual a: {:.2f}".format(raizQ))
    # Imprimindo Na tela o Resultado Junto Com Uma Mensagem.

print ("=" * 50)

