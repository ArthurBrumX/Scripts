#Script Que lê o Salário Atual De Um Funcionário e Mostre Seu Salário Com % de Aumento.

print ("=" * 40)

print ("Empresa Wakanda Forever!")
print ("Olá RH!")
print ("Bem Vindo, a Area De Reajuste Salarial!")
    # Boas Vindas Ao Usuário!.

print ("=" * 40)

print ("Porfavor, Insira Os Dados Do Colaborador!")

print ("=" * 40)

nome = (input("Qual o Nome Do Colaborador: "))
    # Solicitando Dados Ao Usuário.

matricula = float (input("Qual a Matricula Do Colaborador: "))
    # Solicitando Dados Ao Usuário.

salario = float(input("Qual é o Salario Atual do colaborador(a) {} R$: ".format(nome)))
    # Solicitando Dados Ao Usuário.

porcentagem_ajuste = float (input("Qual a Porcentagem Do Aumento Que {} terá: ".format(nome)))
    # Solicitando Dados Ao Usuário.

print ("=" * 40)

reajuste = salario * porcentagem_ajuste / 100
    # Realizando o Calculo De Porcentagem e Atribuindo a Uma Variável.

novo_salario = salario + reajuste

print ("O salario de {} Era De R${}!".format(nome, salario))
    # Imprimindo Na tela o Salario Antigo Do Colaborador.

print ("O Ajuste Solicitado Pelo RH Foi De {}% !".format(porcentagem_ajuste))
    # Imprimindo Na tela o Valor do Reajuste Solicitado Para o Colaborador.

print ("O reajuste Total De {} Será De R${}".format(nome, reajuste))
    # Imprimindo Na tela o Valor Solicitado Para o Colaborador.

print ("Seu Novo Salario Passará a Ser De: R${}".format(novo_salario))
    # Imprimindo o Novo Salario Do Funcionairo.

print ("=" * 40)


