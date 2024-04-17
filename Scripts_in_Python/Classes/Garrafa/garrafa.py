# from 'Nome da pasta' import 'Nome da classe'
from classesGarrafa import garrafas

garrafaCocaCola = garrafas("10cm","Vermelha","Coca Cola","Refrigerante","2,50", True) # Objeto-1
garrafaPeps = garrafas("15cm","Preta","Peps","Refrigerante","3,50", True) # Objeto-2
garrafaFanta = garrafas("20cm","Laranja","Fanta","Refrigerante","4,50", True) # Objeto-3


pergunta_1 = input("Deseja tampar ou destapar: ")

if pergunta_1 == "tampar":

    pergunta_2 = input("qual Garrafa Deseja Fechar: ")

    if pergunta_2 == "Coca Cola":
        if garrafaCocaCola.tampada == True:
            print ("A garrafa Já Esta Tampada!")
        else:
            garrafaCocaCola.Tampar()

    elif pergunta_2 == "Peps":
        if garrafaPeps.tampada == True:
            print ("A Garrafa Já Esta Tampada!")
        else:
            garrafaPeps.Tampartampar()

    elif pergunta_2 == "Fanta":
        if garrafaFanta.tampada == True:
            print("A Garrafa Já Está Tampada!")
        else:
            garrafaFanta.Tampar()


elif pergunta_1 == "destampar":

    pergunta_2 = input("Qual Garrafa Deseja Abrir: ")

    if pergunta_2 == "Coca Cola":
        if garrafaCocaCola.tampada == False:
            print ("A Garrafa Já Está Destampada!")
        else:
            garrafaCocaCola.Destampar()

    elif pergunta_2 == "Peps":
        if garrafaPeps.Tampar == False:
            print("A Garrafa Já Está Destapada!")
        else:
            garrafaPeps.Destampar()

    elif pergunta_2 == "Fanta":
        if garrafaFanta.tampada == False:
            print("A Garrafa Já Está Destapada!")
        else:
            garrafaFanta.Destampar()






