algoritmo "Teste_condicional_Composta_Calculo_IMC"
var
   M, A, IMC: Real
inicio
      Escreva ("Massa (kg): ")
      Leia (M)
      
      Escreva ("Altura (m): ")
      Leia (A)
      
      IMC <- M / (A ^ 2)

      Escreval ("IMC: ",IMC: 5 : 2)
      
      se (IMC >= 18.5) e (IMC < 25) entao
         Escreva (" parabens!, Vo�� esta no seu peso ideial")
      senao
           Escreva ("Vo�� n�o esta na faixa de peso ideal")
      fimse
      
fimalgoritmo