algoritmo "Calculando_a_media_Entre_Dois_Numeros"
var
  n1, n2: inteiro
  m: real
  
  // Noma da Variavel: n1, n2
  //Tipo Primitivo: Inteiro
  
  // Nome da variavel: m
  // Tipo primirtivo: Real
  
inicio

      Escreva ("Informe um numero: ") // Escreve na tela "Informe um numero"
      Leia (n1) // Armazena na variavel (n1) o resultado digitado pelo usuario
      
      Escreva ("Informe outro numero: ") // Escreve na tela "Informe outro numero"
      Leia (n2)// Armazena na variavel (n2) o resultado digitado pelo usuario
      
      m <- (n1 + n2)/2
      // m (média), vai recerber a soma de (n1) + (n2) depois a divisao por dois
      // m vai recerber o resultado da soma entre as variaveis n1 e n2 depois o resultado dividido por dois e atribuido a variavel m
      
      Escreva ("A media ", n1, " e ", n2," é igual a: ",m)
      // vai escrever na tela o resultado da média entre os dois numeros digitados pelo usuario

fimalgoritmo