# Scripts Que lê Um Ângulo Qualquer e Mostre Na Tela o Valor Do Seno, Cosseno e Tangente Desse Angulo.

print ("=" * 40)

print ("Seno, Cosseno eTangente!")
print ("Olá Usuário!")
print ("Bem Vindo, Vamos Um Teste! \n Para Saber Se o Valor é Do Tipo Seno, Cosseno ou Tangente! ")
    # Boas Vindas Ao Usuário!.

print ("=" * 40)

import math
    # Importando a biblioteca math (matematica).
        # ou (from math import sin (seno), cos (Cosseno), tan (tangente), Radians (Radianos)).
        # from math import sin, cos, tan, radians

angulo = float(input("Digite o Ângulo Que Você Deseja: "))
    # Vartiavel = angulo
        # Mensagem = Digite o Angulo Que Voce Deseja:

seno = math.sin(math.radians(angulo))
    # Variavel = seno
        # Solicitando Que o Módulo math chame a Bilioteca sin convertida em radians

print ("O dÂngulo de {} Tem o SENO de {}".format(angulo, seno))
    # Imprimindo o Resultado Da Conversão.

cosseno = math.cos(math.radians(angulo))
    # Variavel = cosseno
        # Solicitando Que o Módulo math chame a Bilioteca cos convertida em radians

print ("O ângulo De {} tem o COSSENO de {}".format(angulo, cosseno))
    # Imprimindo o Resultado Da Conversão.

tangente = math.tan(math.radians(angulo))
    # Variavel = tangente
        # Solicitando Que o Módulo math chame a Bilioteca tan convertida em radians

print ("O angulo de {} tem a Tangente de {}".format(angulo, tangente))
    # Imprimindo o Resultado Da Conversão.

print ("=" * 40)
