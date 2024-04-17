# Script Que Lê o Nome Completo De Uma Pesssoa e Mostre:

    # O Nome Com Todas As Letras Maiusculas.

    # O Nome Com Todas As Letras Minusculas.

    # Quanstas Letras Ao Todo (Sem Considerar Espaços).

    # Quantas Letras Tem o Primeiro Nome.

nome = str(input("Qual é o Seu Nome Completo: ")).strip()

    # .strip Significa que o dado que o usuario informar ja irá ser cortada.

print ("Seu Nome Em Maiusculo é {}".format(nome.upper()))

    # (Nome Da Variável).upper Deixa todo o conteudo da variavel em maiusculo

print ("Seu Nome Em Minusculo é {}".format(nome.lower()))

    # (Nome Da Variável).lower Deixa todo o conteudo da variavel em minusculo.

print ("Seu Nome tem {} letras".format(len(nome) - nome.count(' ')))

    # Resumindo: Vai contar quantas letras tem e vai subtrair pela quatidade de espacos que o .count contou

        # Vai conta Quantas letras tem - len

        # Vai Retirar - (-) Todos Os Espacos Em Branco (count)

    # Sem Contar Espaços.

# print ("Seu primeiro nome tem {} letras".format(nome.find(' ')))

separa = nome.split()

    # Split vai separar os nome inteiros e numera-los a partir do 0

    # Ex: nome = maria de lurdes.
        # maria(0), de(1), Lurdes(2).

print ("Seu primeiro nome é {} e ele tem {} letras".format(separa[0], len(separa[0])))

    # .len vai contar apenas a parte separada pelo split, nesse caso, apenas o primeiro nome.

