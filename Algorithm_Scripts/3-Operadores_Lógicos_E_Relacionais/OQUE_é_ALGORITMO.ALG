algoritmo "Oque_é_Algoritmo"
var
    // Variaveis
    // Var
       //Identificadot: Tipo primitivo
       // EX: Bola: Brinquedo
inicio
      // O que é um algoritmo

         //Manzano - Algoritmos são conjuntos de passos finitos e organizados que
         //Quando executados, resolvem um determinado problema.

      //-----------------------------------------------------------------------------

      // Diferença entre algoritmo e algoritmos computacionais!

         // Algoritmo - Todo tipo de rotina (inclusive do dia a dia)

         // Algoritmos Computacionais - São passos a serem seguidos
            // Por um módulo processador e seus respectivos usuários que
            // Quando executados na ordem correta, conseguem realizar
            // Determinada tarefa

         // Algoritmos computacionais - são rotinas executadas por algum processador

      //-----------------------------------------------------------------------------

         //Módulo processador - É tudo aquilo que pode efetuar processamento.

         // Usuários - Pessoas que ultilizam o meu software.

         // Realizar Tarefa - Resolver um problema que o usuario esteja tendo.

      //-----------------------------------------------------------------------------

         // Como Criar Algoritmos computacionais

            // Logica de programacao - É desenvolvida primeiramente na cabeça De um Dev

            // Escrever a lógica em uma linguagem de programação - Depois é
               //Desenvolvida em uma linguagem

            // Sistema completo - ultilizando os 2 de cima é possivel a criacao
               // De um sistema completo.

     //--------------------------------------------------------------------------------


           // Sistemas usados para Representar um algoritmo

              //Fluxograma - Representa a logica atraves de um fluxo de informacoes seguindo de um ponto a outro

              // Diagrama de Nassis Shneiderman (Chapam) - Representar a lógica através de blocos

              // Pseudocodigo (Portugol) - É a lógica do programa escrito em sua linguagem nativa (Portugues)


     //--------------------------------------------------------------------------------

           // Comandos De Saida (VisualG)

              // Escreva - Escreva na tela
              // Escreval - Escreva na tela e salte uma linha

    //---------------------------------------------------------------------------------

          // Oque é Variavis

              // Variaveis sao pequenos espaços na memoria do computador
              // Cada Variavel simples pode possuir apena um valor

              // Var
                 //Identificadot: Tipo primitivo
                 // EX: Bola: Brinquedo

    //---------------------------------------------------------------------------------


          // Iddentificadores

             //Regras

             // 1. Deve começar com uma letra
             // 2. Os proximos podem ser letras ou números
             // 3. Não pode ultilizar nenhum simbolo, exeto _
             // 4. Não pode conter espaços em branco
             // 5. Não pode conter letras com acentos
             // 6. Não pode ser uma palavra reservada
                // Ex: Var, inicio, algoritmo, fimalgoritmo...

   //---------------------------------------------------------------------------------

        // Tipos primitivos

           // Inteiro - Armazena apenas valor inteiro
              // Ex: 1, 3, -5, 198, 0

           // Real - Armazena valores inteiros e fracionarios
              // Ex: 1, 0, 0.5, 5.0, 9.8, -77.3, 3.1415

           // Caractere - Armazena valores de caracteres, tudo oque é colocado entre aspás - ("")
              // Ex: "Gustavo" "Algoritmo" "123"

           // Lógico - Armazena valores logicos
              // Ex: Verdadeiro, Falso

    //---------------------------------------------------------------------------------

          // Atribuicao

             // Para realizar a atribuicao de valor na variavel no VisualG, tem que ser usado o simbolo de atribuicao ( <- )

    //---------------------------------------------------------------------------------

         // Comando de entrada (VisualG)
         
            //Para poder criar interatividade com com usuario o comando leia será ultilizado

     //---------------------------------------------------------------------------------
     
           // Operadores Aritmeticos          (A <- 5)
           //                                 (B <- 2)
           
             // + (Adição) - A + B = 7
             // - (Subtração) - A - B = 3
             // * (multiplicação) A * B = 10
             // / (divisão) A / B = 2.5
             // \ (Divisao Inteira) A \ B = 2
             // ^ (Exponeciação) A ^ B = 25
             // % (Módulo) A % B = 1
           
     //---------------------------------------------------------------------------------
     
           // Ordem de precedência (Ordem que os caracter vao ser executados)
           
              // ()  [Parênteses]
              // ^  [Exponenciação]
              // * / [Multiplicação / Divisão]
              // +  [Adição / Subtração]
              
     //---------------------------------------------------------------------------------
           
           // Funções Aritmeticas
           
                // Abs - [Valor Absoluto] - Abs(-10) = 10
                // Exp - [Exponeciação] - Exp(3,2) = 9
                // Int - [Valor Inteiro] - Int(3.9) = 3
                // RaizQ [Raiz Quadrada] - Raizq(25) = 5
                // PI [Retorna PI] - PI = 3.1415
                // Sen [Seno (rad)] - Sen(0.523) = 0.5
                // Cos [Cosseno (rad)] - Cos(0.523) = 0.86
                // Tan [Tangente (rad)] - Tan(0.523) = 0.57
                // GraupRad [Graus Para Radianos] - GraupRad(30) = 0.52
                
     //---------------------------------------------------------------------------------
                
            // Operadores Relacionais
            
               //Vao criar a relacao entre as variaveis e expreçoes e gerar um valor logico (verdadeira, falso)
               // operadores logicos, sempre vao retornar um valor logico

               // > (Maior que)
               // > (Menor que)
               // >= (Maior ou igual a)
               // <= (Menor ou igual a)
               // = (igual a)
               // <> (diferente de)
               
              // Os operadores relacionais, vao testar a relação entre variaveis, valores ou expreções.
               

     //---------------------------------------------------------------------------------------------------------

               // Operadores Lógicos

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
                  //  P   |    NÂO P                  |         Paula   |    NÂO Paula
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
                        

                    //Lógicos
                     

                        // E
                        // OU
                        // NÃO

         //------------------------------------------------------------------------------------------------------





























fimalgoritmo