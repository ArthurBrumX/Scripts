try:
    placa_final = int(input("Digite o ultimo numero da placa do seu veiculo"))

    if placa_final == 1 or placa_final == 2:
        dia = "Segunda-Feira"
    elif placa_final == 3 or placa_final == 4:
        dia = "terça-Feira"
    elif placa_final == 5 or placa_final == 6:
        dia = "Quarta-feira"
    elif placa_final == 7 or placa_final == 8:
        dia = "Quinta-Feira"
    elif placa_final == 9 or placa_final == 0:
        dia = "Sexta-Feira"
    else:
        print ("Numero Placa Invalido")

    print (f"Não é permitido circular com placa terminado em (final_placa) nas (dias)s.")

except ValueError:
    print("Entrada Invalida")