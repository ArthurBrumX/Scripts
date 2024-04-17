# Aprendizado!.
# Alguns Comandos Para Formatação De Textos!.

print ("=" * 40) 
    # Imprime Na Tela 40x a Mensagem "="

print ("Oi" * 5) 
    # Imprime Na Tela 5x a Mensagem "Oi"

print ("Oi" + "Olá") 
    # Concatenação.

# Formatação De Número.

nome = (input("Qual é o Seu Nome? "))
print ("Prazer Em Te Conhecer {}!".format(nome)) 
    # Com o Comando (.format) É Possivel Alocar Uma Variável Dentro Do Espaço -> {    }.
        # Neste Caso Será Substituido o Espaço Aqui Dentro -> {  } Pelo Conteudo Da Variável (nome).

algo = (input("Digite Algo: "))
print ("Voçê Digitou {:>20}!".format(algo))
    # ("Eu Quero Que Escreva o Conteúdo Da Variável Em 20 Espacos!").
        # Realiza Um Aninhamento De 20 Espaços a Direita.

algo = (input("Digite Algo: "))
print ("Voçê Digitou {:<20}!".format(algo))
    # ("Eu Quero Que Escreva o Conteúdo Da Variável Em 20 Espacos!").
        # Realiza Um Aninhamento De 20 Espaços a Esquerda.

"""
    Aninhamentos;

        Dentro De -> { }; 

            É Possivel Fazer Aninhamento Colocando o Número De Espaços Desejado e Os Sibolos Para Aninhar:

                ( :> ) = Aninhamento a Direita;

                ( :< ) = Aninhamento a Esquerda;

                ( :^ ) = Aninhamento Centralizado;

                ( :=^ ) = Aninhamento Centralizado Com (=) Nos Espaços Em Branco;

"""

n1 = int(input("Digite Um Número: ")) 
    # Solicita Um Número e Armazena Na Variável.

n2 = int(input("Digite Outro Número: ")) 
    # Solicita Outro Número e Armazena Na Outra Variável.

print ("A Soma Vale: {}".format(n1 + n2))
    # É Possivel Realizar a Soma Dentro De (.format). 
        # Apenas Se o Valor Da Variavel Não For Usada mais Ultilizada, Pois Ela Não Fica Armazenada.

print ("=" * 40)






