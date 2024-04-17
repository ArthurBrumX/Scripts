# Script Que Lê Duas Notas De Um Aluno, Calcule e Mostre a Media Entre Eles.

print ("=" * 40)

print ("Escola Estadual Uchiha")
print ("Olá Usuário!!")

print ("=" * 40)

nome = (input("Qual o Nome Do Aluno: "))
    # Solicitando o Nome Do Aluno Ao Usuário.

serie = int(input("Em Qual Série {} Está: ".format(nome)))
    # Solicitando Ao Usuário Que Ele Insira a Série Que o Aluno Se Encontra.

nota_1 = float(input("Qual Foi Sua Primeira Nota: "))
    # Solicitando Ao Usuário a Primeira Nota.

nota_2 = float(input("Qual Foi Sua Segunda Nota: "))
    # Solicitando Ao Usuário a Segunda Nota.

media = (nota_1 + nota_2) / 2
    # Realizando o Calculo Da Média e Atribuindo a Uma Variável.

print ("O Aluno {} Da {}° série Tirou a Nota {} Neste Bimestre!".format(nome, serie, media))
    # Imprimindo o Resultado Junto Com Uma Mensagem.

print ("=" * 40)