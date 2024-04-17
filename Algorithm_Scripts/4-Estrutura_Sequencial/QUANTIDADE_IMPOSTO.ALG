algoritmo "Quantidade_imposto"
var
   preco, imposto: real
inicio
      Escreva ("Qual o preço do produto? U$S ")
      Leia (preco)
      Imposto <- (preco * 60) / 100
      escreva (" O imposto será de U$S", imposto: 5: 2)
fimalgoritmo