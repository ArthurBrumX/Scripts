algoritmo "Oque_�_Algoritmo"
var
    // Variaveis
    // Var
       //Identificadot: Tipo primitivo
       // EX: Bola: Brinquedo
inicio
      // O que � um algoritmo

         //Manzano - Algoritmos s�o conjuntos de passos finitos e organizados que
         //Quando executados, resolvem um determinado problema.

      //-----------------------------------------------------------------------------

      // Diferen�a entre algoritmo e algoritmos computacionais!

         // Algoritmo - Todo tipo de rotina (inclusive do dia a dia)

         // Algoritmos Computacionais - S�o passos a serem seguidos
            // Por um m�dulo processador e seus respectivos usu�rios que
            // Quando executados na ordem correta, conseguem realizar
            // Determinada tarefa

         // Algoritmos computacionais - s�o rotinas executadas por algum processador

      //-----------------------------------------------------------------------------

         //M�dulo processador - � tudo aquilo que pode efetuar processamento.

         // Usu�rios - Pessoas que ultilizam o meu software.

         // Realizar Tarefa - Resolver um problema que o usuario esteja tendo.

      //-----------------------------------------------------------------------------

         // Como Criar Algoritmos computacionais

            // Logica de programacao - � desenvolvida primeiramente na cabe�a De um Dev

            // Escrever a l�gica em uma linguagem de programa��o - Depois �
               //Desenvolvida em uma linguagem

            // Sistema completo - ultilizando os 2 de cima � possivel a criacao
               // De um sistema completo.

     //--------------------------------------------------------------------------------


           // Sistemas usados para Representar um algoritmo

              //Fluxograma - Representa a logica atraves de um fluxo de informacoes seguindo de um ponto a outro

              // Diagrama de Nassis Shneiderman (Chapam) - Representar a l�gica atrav�s de blocos

              // Pseudocodigo (Portugol) - � a l�gica do programa escrito em sua linguagem nativa (Portugues)


     //--------------------------------------------------------------------------------

           // Comandos De Saida (VisualG)

              // Escreva - Escreva na tela
              // Escreval - Escreva na tela e salte uma linha

    //---------------------------------------------------------------------------------

          // Oque � Variavis

              // Variaveis sao pequenos espa�os na memoria do computador
              // Cada Variavel simples pode possuir apena um valor

              // Var
                 //Identificadot: Tipo primitivo
                 // EX: Bola: Brinquedo

    //---------------------------------------------------------------------------------


          // Iddentificadores

             //Regras

             // 1. Deve come�ar com uma letra
             // 2. Os proximos podem ser letras ou n�meros
             // 3. N�o pode ultilizar nenhum simbolo, exeto _
             // 4. N�o pode conter espa�os em branco
             // 5. N�o pode conter letras com acentos
             // 6. N�o pode ser uma palavra reservada
                // Ex: Var, inicio, algoritmo, fimalgoritmo...

   //---------------------------------------------------------------------------------

        // Tipos primitivos

           // Inteiro - Armazena apenas valor inteiro
              // Ex: 1, 3, -5, 198, 0

           // Real - Armazena valores inteiros e fracionarios
              // Ex: 1, 0, 0.5, 5.0, 9.8, -77.3, 3.1415

           // Caractere - Armazena valores de caracteres, tudo oque � colocado entre asp�s - ("")
              // Ex: "Gustavo" "Algoritmo" "123"

           // L�gico - Armazena valores logicos
              // Ex: Verdadeiro, Falso

    //---------------------------------------------------------------------------------

          // Atribuicao

             // Para realizar a atribuicao de valor na variavel no VisualG, tem que ser usado o simbolo de atribuicao ( <- )

    //---------------------------------------------------------------------------------

         // Comando de entrada (VisualG)
         
            //Para poder criar interatividade com com usuario o comando leia ser� ultilizado

     //---------------------------------------------------------------------------------
     
           // Operadores Aritmeticos          (A <- 5)
           //                                 (B <- 2)
           
             // + (Adi��o) - A + B = 7
             // - (Subtra��o) - A - B = 3
             // * (multiplica��o) A * B = 10
             // / (divis�o) A / B = 2.5
             // \ (Divisao Inteira) A \ B = 2
             // ^ (Exponecia��o) A ^ B = 25
             // % (M�dulo) A % B = 1
           
     //---------------------------------------------------------------------------------
     
           // Ordem de preced�ncia (Ordem que os caracter vao ser executados)
           
              // ()  [Par�nteses]
              // ^  [Exponencia��o]
              // * / [Multiplica��o / Divis�o]
              // +  [Adi��o / Subtra��o]
              
     //---------------------------------------------------------------------------------
           
           // Fun��es Aritmeticas
           
                // Abs - [Valor Absoluto] - Abs(-10) = 10
                // Exp - [Exponecia��o] - Exp(3,2) = 9
                // Int - [Valor Inteiro] - Int(3.9) = 3
                // RaizQ [Raiz Quadrada] - Raizq(25) = 5
                // PI [Retorna PI] - PI = 3.1415
                // Sen [Seno (rad)] - Sen(0.523) = 0.5
                // Cos [Cosseno (rad)] - Cos(0.523) = 0.86
                // Tan [Tangente (rad)] - Tan(0.523) = 0.57
                // GraupRad [Graus Para Radianos] - GraupRad(30) = 0.52
                
     //---------------------------------------------------------------------------------
                
            // Operadores Relacionais
            
               //Vao criar a relacao entre as variaveis e expre�oes e gerar um valor logico (verdadeira, falso)
               // operadores logicos, sempre vao retornar um valor logico

               // > (Maior que)
               // > (Menor que)
               // >= (Maior ou igual a)
               // <= (Menor ou igual a)
               // = (igual a)
               // <> (diferente de)
               
              // Os operadores relacionais, vao testar a rela��o entre variaveis, valores ou expre��es.
               

     //---------------------------------------------------------------------------------------------------------

               // Operadores L�gicos

                  // operadores logicos, sempre vao retornar um valor logico
                  
                  //--------------------------------------------------------------------------------------------
                  //                                  |
                  //                                  |
                  //  P    |   Q    |   p E q         |         Paula    |   Quesia     |   paula E quesia
                  //       |        |                 |                  |              |
                  //  V    |   V    |     V           |         Feliz    |   Feliz      |     Feliz
                  //       |        |                 |                  |              |
                  //  V    |   F    |     F           |         Feliz    |   Triste     |     Triste
                  //       |        |                 |                  |              |
                  //  F    |   V    |     F           |         Triste   |   Feliz      |     Triste
                  //       |        |                 |                  |              |
                  //  F    |   F    |     F           |         Triste   |   Triste     |     Triste
                  //                                  |
                  //                                  |
                  //                                  |
                  //--------------------------------------------------------------------------------------------
                  //                                  |
                  //                                  |
                  //  P   |    Q    | p OU q          |         Paula   |    Quesia    | paula OU quesia
                  //                                  |                 |              |
                  //  V   |    V    |    V            |         Feliz   |    Feliz     |    Feliz
                  //                                  |                 |              |
                  //  V   |    F    |    V            |         Feliz   |    Triste    |    Feliz
                  //                                  |                 |              |
                  //  F   |    V    |    V            |         Triste  |    Feliz     |    Feliz
                  //                                  |                 |              |
                  //  F   |    F    |    F            |         Triste  |    Triste    |    Triste
                  //                                  |
                  //                                  |
                  //--------------------------------------------------------------------------------------------
                  //                                  |
                  //                                  |
                  //  P   |    N�O P                  |         Paula   |    N�O Paula
                  //      |                           |
                  //  V   |     F                     |         Feliz   |     Triste
                  //      |                           |
                  //  F   |     V                     |         Triste  |     Feliz
                  
                  
       //------------------------------------------------------------------------------------------------------


                 // Ordem de procedencia de todos os operador4es relacionais
                 
                 
                    // Aritmeticos
                       // ()
                       // ^
                       // * /
                       // + -
                       
                       
                    //Relacionais
                    

                        //Todos
                        

                    //L�gicos
                     

                        // E
                        // OU
                        // N�O

         //------------------------------------------------------------------------------------------------------





























fimalgoritmo