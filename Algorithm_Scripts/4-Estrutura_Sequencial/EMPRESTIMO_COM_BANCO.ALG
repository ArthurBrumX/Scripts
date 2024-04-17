algoritmo "Emprestimo_com_banco"
var
   quantidade, vezes, parcelas, juros: real
inicio
    Escreva("Quanto vc quer pegar de dinheiro? ")
    Leia(quantidade)

    escreva("Vai querer parcela em quantas vezes? ")
    leia(vezes)

    juros <- quantidade + (quantidade * 20 / 100)

    parcelas <- juros / vezes

    escreva (" Voçe irá devolver", juros ,"R$")
    escreva (" E irá pagar" , vezes ," X de ", parcelas: 4 : 2)


fimalgoritmo
