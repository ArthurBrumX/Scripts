class garrafas():
    def __init__(self,tamanho,cor,marca,tipoBebida,valor,tampada):
        self.tamanho = tamanho
        self.cor = cor
        self.marca = marca
        self.tipoBebida = tipoBebida
        self.valor = valor
        self.tampada = tampada

    def Tampar(self):
        print("A Garrafa Está Tampada!!")

    def Destampar(self):
        print("A Garrafa Está Destampada!!")
