# class Clientes: #isso é um objeto
#     pass

# class Produto:
#     pass

# Atributos são caracteristicas 
# metodo é uma funcionalidade

# class ControleRemoto:
#     def __init__(self): # Definir a funcao de iniciar (para iniciar a classe)
#         # Todas as Caracteristicas tem q ser colocadas dentro da funcao init
#         pass
        #  caracteristicas:
        #     - ControleRemoto
        #     - altura
        #     - profundidade
        #     - largura
     

    #  metodos do controle remoto:
    #     - passar de canal
    #     - mexer no volume
    #     - abrir a netflix
    #     - desligar a tv


class ControleRemoto: # criando uma classe
    # caracteristicas
    def __init__(self, cor, altura, profundidade, largura): # o Self Faz referencia a propria classe
        self.cor = cor
        self.altura = altura
        self.profundidade = profundidade
        self.largura = largura
    
    # Metodos
    def passar_canal(self, botao):
        if botao == "+":
            print("Aumentar o canal")
        elif botao == "-":
            print("Diminuir o Canal")
            

controle_remoto = ControleRemoto("preto","10cm","2cm","2cm")  # Criando um objeto
print(controle_remoto.cor)
controle_remoto.passar_canal("+") # Dentro do parenteses tem q colocar o botao q esta sendo apertado

# Para criar um objeto basta voce criar uma variavel e atribuir a claase para ela

# instacia =  é um objeto q usou a classe para ser criada 

controle_remoto2 = ControleRemoto("Cinza","10cm","2cm","2cm")
print(controle_remoto2.cor)























