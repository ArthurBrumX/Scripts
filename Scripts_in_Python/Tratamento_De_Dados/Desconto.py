# Script Que Lê o Preço De Um Produto e Mostre Seu Novo Preço, Com 5% De Desconto.

print ("=" * 40)

print ("Lojinha Da Esquina!!")
print (" " * 40)
print ("Black Friday!!")
print ("Compre Qualquer Produto e Guanhe 5% De Desconto!!!")

print ("=" * 40)

produto = (input("Qual o Nome Do Produto: "))

preco = float(input("Qual o Valor Do Produto R$"))

desconto = preco * 5 / 100
    # Atribuindo Um Resiltado Para a Aariável.
        # Calculo Para Descobrir a Porcentagem.

novo_preco = preco - desconto

print ("=" * 40)

print ("Voçê Escolheu: {}".format(produto))
print ("O desconto Será De {}R$ Reais!".format(desconto))
print ("O Novo Valor Será De {}R$ Reais!".format(novo_preco))

print ("=" * 40)