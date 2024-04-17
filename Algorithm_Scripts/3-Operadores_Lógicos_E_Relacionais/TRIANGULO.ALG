algoritmo "Triangulo"
var

    L1, L2, L3: Real
    EQ, Es, tri: logico
    
inicio

       Escreva (" Digite o primeiro lado: ")
       leia (L1)
       
       Escreva(" Digite o segundo lado: ")
       Leia (L2)
       
       Escreva (" Digite o terceiro lado: ")
       Leia (L3)
       
       tri <- (L1 < l2 + L3) e (L2 < L1 + L3) e (L3 < L1 + L2)
       
       EQ <- ( L1 = L2) e ( L2 = L3)
       
       ES <- ( L1 <> L2) e (L2 <> L3) e (L1 <> l3)
       
       Escreval ("Pode formar um trisngulo? ", tri)
       
       Escreval ("O triangulo é Equilatero? ", EQ)
       
       Escreval ("O triangulo é Escaleno? ", ES)
       
fimalgoritmo