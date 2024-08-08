using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloWord
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Declaracoes de variaveis com tipos Expecificos
            int anoSegundaGuerra = 1942;
            string CorFavorita = "Branco";
            float velocidadeF1 = 294.48f; //tem q ter um f no fim!
            bool segundaGuerraAconteceu = true;

            Console.WriteLine(anoSegundaGuerra);
            Console.WriteLine(CorFavorita);
            Console.WriteLine(velocidadeF1);
            Console.WriteLine(segundaGuerraAconteceu);

            Console.WriteLine("Hello Word!");
            Console.WriteLine("Meu Nome é Arthur");

            // para redefinir o valor de uma variavel

            CorFavorita = "Verde"; //Redefinida
            Console.WriteLine(CorFavorita);


            // variavel dinamica
            // é quando vc cria uma variavel q pode ser de qualquer tipo apenas redefinindo
            dynamic segundaCorFavorita = "Vermelho";
            Console.WriteLine(segundaCorFavorita);

            segundaCorFavorita = "220912";
            Console.WriteLine(segundaCorFavorita);

            segundaCorFavorita = true;
            Console.WriteLine(segundaCorFavorita);

            // variaveis de const n podem ser alteradas;
            const float PI = 3.1415f;
            Console.WriteLine(PI);

            // PI = 12;


            // Input
            Console.WriteLine("Escreva Seu Nome: ");

            string nome = Console.ReadLine();
            Console.WriteLine("seu nome é: ",nome);

            // operadores aritmeticos

            int numeroQualquer = 20 + 20;
            Console.WriteLine(numeroQualquer);

            Console.ReadLine();
        }
    }
}
