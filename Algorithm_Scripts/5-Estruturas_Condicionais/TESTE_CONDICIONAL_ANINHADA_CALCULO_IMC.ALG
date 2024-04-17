algoritmo "Teste_condicional_Aninhada_Calculo_IMC"
var
   M, A, IMC: Real
inicio
      Escreva ("Massa (kg): ")
      Leia (M)

      Escreva ("Altura (m): ")
      Leia (A)

      IMC <- M / (A ^ 2)

      Escreval ("IMC: ",IMC: 5 : 2)
      
      se (IMC < 17) entao
         Escreval ("Muito abaixo do peso")
         
      senao
           Se (IMC >= 17) e (IMC <= 18.5) entao
              Escreval ("Abaixo do peso")
           senao
                se (IMC >= 18.5) e (IMC < 25) entao
                   Escreval ("Peso Ideal")
                senao
                     Se (IMC >= 25) e (IMC < 30) entao
                        Escreval ("Sobrepeso")
                     senao
                          se (IMC >= 30) e (IMC < 35) entao
                             Escreval ("Obesidade")
                          Senao
                               se (IMC >= 35) e (IMC < 40) entao
                                  Escreval ("Obesidade severa")
                               senao
                                    Escreval ("obesidade Morbida")
                               fimse
                          fimse
                     fimse
                fimse
           fimse
      fimse
fimalgoritmo