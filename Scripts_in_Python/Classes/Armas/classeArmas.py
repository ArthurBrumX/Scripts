class armas():
    def __init__(self,modelo,calibre,tamanho,cor,valor,tipo):
        self.modelo = modelo
        self.calibre = calibre
        self.tamanho = tamanho
        self.cor = cor
        self.valor = valor
        self.tipo = tipo

        # "Metraladora",
        # "Pistola",
        # "Fuzio",
        # "Submetraladora",
        # "Snipers"


    # metodos

    def Atirar(self, Atirar):
        self.atirar = Atirar
        print("Voce Está Atirando!")

    def Recarregar(self,Recarregar):
        self.Recarregar = Recarregar
        print("Voce Esta Recarregando!")

    def Mirar(self,Mirar):
        self.Mirar = Mirar
        print("Voce Está Mirando!")

    def PegarArma(self,PegarArma):
        self.PegarArmar = PegarArma
        print("Voce Pegou a Arma!")

    def SoltarArma(self,SoltarArma):
        self.SoltarArma = SoltarArma
        print("Voce Soltou a Arma!")

    def Guardar(self,Guardar):
        self.Guardar = Guardar
        print("Voce Guardou a Arma!")

    def Sacar(self,Sacar):
        self.Sacar = Sacar
        print("Voce Sacou a Arma!")

    

