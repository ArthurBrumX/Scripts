# Vamos Criar uma Classe para clientes da netflix

# class clientes:
#     def __init__(self,nome,email,plano):
#         self.nome = nome
#         self.email = email
#         self.plano = plano

#     def adicionar_cliente_no_bd(self):
#         pass


# clientes = clientes("Arthur","Arthur@gmail.com","Basic")
# clientes.add_to_database

# tratamento de erros


class clientes:
    def __init__(self,nome,email,plano):
        self.nome = nome
        self.email = email
        self.plano = plano
        self.listaPlanos = ["Basic","Plus","Premium"]
        if plano in self.listaPlanos: # se for outra coisa fora da lista ira dar erro
            self.plano = plano
        else:
            raise Exception("Plano Invalido")


    def adicionar_clientes_no_bd(self):
        pass

    def mudar_plano(self, novo_plano):
        if novo_plano in self.listaPlanos:
            self.plano = novo_plano
        else:
            print("Plano Invalido")

    def ver_Fime(self, filme, plano_filme):
        if self.plano == plano_filme:
            print(f"Ver filme {filme}")
        elif self.plano == "premium":
            print(f"Ver Filme {filme}")
        elif self.plano == "basic" and plano_filme == "premium":
            print("faça Upgrade para premium, para ver esse filme")
        else:
            print("plano Invalido")

clientes = clientes("Arthur","Arthur@gmail.com","Plus") # tratamento de erros
print(clientes.nome)
print(clientes.plano)

clientes.mudar_plano("premium")
print(clientes.plano)








