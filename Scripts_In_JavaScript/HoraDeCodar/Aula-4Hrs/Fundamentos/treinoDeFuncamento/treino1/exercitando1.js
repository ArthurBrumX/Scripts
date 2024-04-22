// fudamentos

// var nome = "valor"

var minhaVariavel = "Olá, Mundo!"; // Declaracao de Variavel
console.log(minhaVariavel); // Imprimindo uma mensagem na area de console do navegador

/*
comentario com mais de uma linha

Isso
Tudo
é
Um 
Comentario
*/

// comentar muito o codigo significa que o codigo ta mal escrito

// ============================================================================

// Variaveis e tipos de dados

console.log("Variaveis e tipos de dados");
var meuNumero = 10; 
console.log(meuNumero); // Só imprime o numero na tela (console)
console.log(meuNumero + 5); // Soma
console.log(typeof meuNumero); // typeof = mostra o tipo do dado da variavel

var booleano = true; // O valor booleano so pode ser clarado ou retornar um valor (verdadeiro ou falso)
var meuObjeto = {}; // Um objeto é declarado e iniciado por abertura e fechamento de chaves: {}
var meuArray = []; //um array é uma lista
var meuNull = null; // O valor nulo é um valor que no presente momento do codigo ainda nao tem valor, mas em breve vai ter
var meuUndefined = undefined; // Voce nunca atribui esse valor, isso é quando voce nao da valor pra variavel e nao declara como null

console.log(booleano);
console.log(meuObjeto);
console.log(meuArray);
console.log(meuNull);
console.log(meuUndefined);

// Novas formas de declaracoes de variaveis
    // let e cost = subistitui o var!
        // let = um valor que pode ser alterado durante o programa
        // const = constante (um valor que n muda durante o programa)

let x = 10;
const y = 5; // essa variavel, não é possivel ser redefinida se nao for aqui!

console.log(typeof x);
console.log(typeof y);
console.log(x,y);

//-----------------------------------------------------------------------------------------------

// Operadores Aritmeticos

console.log("Operadores Aritmeticos");
console.log(x + y); // Operador de adicao
console.log(x * y); // Operador de multiplicacao
console.log(x / y); // Operador de divisao
console.log(x - y); // Operador de subtracao

// + -> Adicao
// - -> Subtracao
// * -> Multiplicacao
// / -> Divisao

//-----------------------------------------------------------------------------------------------
//Operadores de comparacao

console.log("Operadores de Comparacao");
console.log(x = y); // x vai receber o valor de y
console.log(x == y); // "x é igual a y?" - Retorna um valor booleano
console.log(x === y); // "x é IDENTICO a y?" - retorna um valor booleano
console.log(x !== y); // "x é IDENTICO a y?" - retorna um valor booleano]

//-----------------------------------------------------------------------------------------------
console.log("Operadores Logicos");

// AND -> && (e - Logico (Um teste **E** o outro tem que ser verdadeiro))
    // No operador logico "e" dos dois lados tem que ser verdadeiro para que o resultado seja verdadeiro

// or -> || (ou - logico (Um teste **OU** outro tem que ser Verdadeiro))
    // NO operador logico "Ou" apenas um dos dois lados tem que ser verdadeiro para que o resultado seja verdadeiro

// Os dois testes logicos tem que ser verdadeiro

// AND
// Os dois testes tem que ser verdadeiro
console.log(10 > 5 && 20 > 5); // Verdadeiro
console.log(10 < 5 && 20 < 5); // Falso
console.log(10 > 5 && 20 < 5); // Falso
console.log(10 < 5 && 20 > 5); // Falso

console.log(10 > 5 || 20 > 5); // Verdadeiro
console.log(10 > 5 || 20 < 5); // Verdadeiro
console.log(10 < 5 || 20 > 5); // Verdadeiro
console.log(10 < 5 || 20 < 5); // Falso

//-----------------------------------------------------------------------------------------------
//Conversao De Tipos
console.log("conversao De Tipos");

const meuOutroNumero = "123"; // Declarando um numero como caractere
console.log(meuOutroNumero); // Imprimindo ele na tela (console)
console.log(typeof(meuOutroNumero)); // Imprimindo o tipo dele na tela (console) = String

const meuOutroNumeroConvertido = Number(meuOutroNumero); // Criou uma nova variavel e atribuiu a outra variavel com o valor convertido!
console.log(meuOutroNumeroConvertido);
console.log(typeof(meuOutroNumeroConvertido));

const convertendo = "22001010";
console.log("A variavel Convertendo esta atualmente com o valor: ",convertendo);
console.log("Até aqui essa variavel é uma: ",typeof(convertendo));

const tentandoConverter = Number(convertendo);
console.log("Aqui ela ja esta convertida e é um: ",typeof(tentandoConverter));

// --------------------
// Exemplos

//Exemplo 1
console.log("Exemplo-1");
const minhaString1 = "1"; // Declarando como string
const stringConvertida1 = Number(minhaString1); // Convertendo a string para Numero

console.log(minhaString1,"=",typeof(minhaString1));
console.log(stringConvertida1,"=",typeof(stringConvertida1));

//Exemplo 2
console.log("Exemplo-2");
const minhaString2 = "2"; // Declarando como string
const stringConvertida2 = Number(minhaString2); // Convertendo a string para Numero

console.log(minhaString2,"=",typeof(minhaString2))
console.log(stringConvertida2,"=",typeof(stringConvertida2))

// Exemplo 3
console.log("Exemplo-3");
const minhaString3 = "3"; // Declarando como string
const stringConvertida3 = Number(minhaString3); // Convertendo a string para Numero

console.log(minhaString3,"=",typeof(minhaString3));
console.log(stringConvertida3,"=",typeof(stringConvertida3));

// Exemplo 4
console.log("Exemplo-4");
const minhaString4 = "4"; // Declarando como string
const stringConvertida4 = Number(minhaString4); // Convertendo a string para Numero

console.log(minhaString4,"=",typeof(minhaString4));
console.log(stringConvertida4,"=",typeof(stringConvertida4));

//-----------------------------------------------------------------------------------------------

console.log("Estrutura Condicional") // If, Else, Else If













