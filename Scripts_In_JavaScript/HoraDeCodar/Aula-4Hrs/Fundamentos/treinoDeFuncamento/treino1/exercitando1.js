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

console.log("Estrutura Condicional"); // If, Else, Else If

// Estrutura Condicional!


//Exemplo 1
const idade = 20; // Variavel declarada com um valor!

// A estrutura condicional só sera atendida se o valor de comparacao ou a expressao for VERDADEIRA
// Caso o contrario ele passa pro proximo
// Se caso nao houver nenhum verdadeiro o script ignora a expressao

if (idade < 13){ // SE (if) o valor da Variavel Idade For MENOR que 13
    console.log("Crianca!"); // Se a Condicao de cima for atendida -> Imprima

//Se caso a alternativa de cima nao seja verdadeira ele vai testar a proxima
// Até ser verdadeira
} else if(idade < 20){ // SE NÃO SE (else if) o valor da variavel Idade For MENOR que 20
    console.log("Adolecente!"); // Se a condicao de cima for atendida -> Imprima

// Se nenhuma das condicoes anteriores funcionou, faça isso
}else{ // SeNão (else)
    // Essa condicao só vai ser executada se nenhuma outra condicao acima for atendida
    console.log("Adulto!");
}

// ----------------

//Exemplo 2

if(true){
    console.log("Isso será Exibido!");
}else{
    console.log("Isso não será Exibido");
}

// ----------------

//Exemplo 3

if(false){
    console.log("Isso nao será Exibido!");
}else{
    console.log("Porem, Isso será Exibido");
}

// ----------------

//Exemplo 4

let numero1 = 55;
let numero2 = 27;
let expressaoCondicional = numero1 * numero2;

console.log(expressaoCondicional);
if(expressaoCondicional >= 1000){
    console.log("Verdadeiro");
}else{
    console.log("False");
}
//-----------------------------------------------------------------------------------------------

console.log("Switch case");

// Vai avaliar a variavel e caso ela for verdade em um dos blocos
// será executado

// só vai executar o bloso CASO(case) um dos blocos seje verdadeiro de acordo com o teste ou parametro colocado no switch

//Exemplo 1
const fruta = "Abacate";
switch(fruta){
    case "Banana":
        console.log("Banana é a fruta");
        break // cada case tem que ter um break se nao ele executa os demais tambem
    
    case "Maçã":
        console.log("Maçã é a fruta");
        break
    
    default: // esse é o ultimo bloco, caso nenhum bloco sejem executados
        console.log("Não encontrei a fruta em nenhum dos casos!");
}

// Exemplo 2
const nome = "Arthur";
switch(nome){
    case "Vitor":
        console.log("O seu nome é Vitor!");
        break;
    case "Miguel":
        console.log("Seu nome é Miguel!");
        break;
    case "Igor":
        console.log("Seu nome é Igor");
        break;
    case "Arthur":
        console.log("Seu nome é Arthur!");
        break;
    default:
        console.log("Nenhum dos nomes encontrado nos casos");
        break;
}

// Exemplo 3
const carro = "Mercedes";
switch(carro){
    case "Gol":
        console.log("A marca do carro é Gol!");
        break;
    case "Fiat":
        console.log("A marca do carro é Fiat!");
        break;
    case "Ferrari":
        console.log("A marca do carro é ferrari!");
        break;
    case "Bentley":
        console.log("A marca do carro é um Bentley!");
        break;
    case "Mercedes":
        console.log("A marca do carro é mercedes!");
        break;
    default:
        console.log("Marca de carro nao registrada!")
        break;
}

//-----------------------------------------------------------------------------------------------

console.log("estrutura de repeticao - Lacoes de repeticao") //(while, for)

// Vai ser executados quantas vezes forem necessarias de acordo com a condicao imposta
// 1,2,3,4,5,6,7,8.... => dependendo de uma condicao

/*
for(contador, condicao de limite, incremento){
    console.log("alguma coisa")
}

*/

// for = (Para)
// contador, condicao de limite, incremento
for(let i = 0; /*atribuicao de variavel*/ i < 5;/*Teste Logico*/ i = i + 1/*Vai adicionar mais um toda vez que a condicao nao for atendida*/){
    console.log(`O valor de I é ${i}`);
}

let s = 0;
while(s < 5){
    console.log(`O valor de s é: ${s}`);
    s++       
}

// do while

let j = 0

// do = fazer
// while = enquanto
// Do while = fazer enquanto...

do{
    console.log(`O valor de j é de: ${j}`);
    j++;
}while(j < 5);

//-----------------------------------------------------------------------------------------------

console.log("Funcoes")
// fucnoes (salvar um trecho de codigo ára ser usado varias vezes)
    // function nome (argumento1, argumento2){corpo}
    // uma funcao só é executada se ela for chamada em alguma parte do codigo

function comprimentar(){
    console.log("Olá! Bom dia!")
}

// invocacao = nome()

comprimentar()

//------------------------------------------------------------------------------------------

console.log("Escopo de Variaveis")

/*
Quando um variavel estiver dentro de um escopo (Estrutura de: repeticao, condicional etc...)
é uma variavel local, mas quando é executada fora do escopo ela se forna uma variavel global
 */

let cor = "Azul"; // <- Variavel global

function mostrar_Cor(){
    let cor = "verde"; // <- Variavel local!
} // pude declarar ela duas vezes porque ela esta localmente
//------------------------------------------------------------------------------------------

console.log("Hoisting = Içamento!")
// Eu consigo chamar a funcao antes dela ser criada!

testeHoisting() // <-- Aqui eu estou chamando a funcao e logo a baixo estou criando ela

function testeHoisting(){
    console.log("Essa funcao foi criada depois de ser chamada!")
}

//------------------------------------------------------------------------------------------

console.log("Arrow Function!")
// Funciona como uma funcao mais resumida!

const testeArrow = (/*Parametros*/) => console.log("Isso tambem é uma funcao!")
testeArrow()
//------------------------------------------------------------------------------------------

console.log("Truthy e Falsy");

// se a variavel estiver vazia é considerada falsa
// se a variavel estiver com pelo menos um valor dentro dela, é considerada verdadeira

const minhaVariavel1 = '' // falsy
const minhaVariavel2 = 'Alguma Coisa!' // Truthy

if(minhaVariavel1){
    console.log("É Verdadeiro!");
}else{
    console.log("É Falso!");
}

if(minhaVariavel2){
    console.log("É Verdadeira!");
}else{
    console.log("É Falso!");
}

//------------------------------------------------------------------------------------------

console.log("Arrays (Listas)")

const arrays = ['elemento1','elemento2','elemento3','elemento4'];
const listaDeNumeros = [1,2,3,4,5,6,7,8,9,10];

console.log(listaDeNumeros);

console.log(listaDeNumeros[0])// para pegar um item especifico da lista
// lembrando que o js conta os numeros apartir de 0

console.log(listaDeNumeros[1]);
console.log(listaDeNumeros[2]);
console.log(listaDeNumeros[3]);
console.log(listaDeNumeros[4]);
console.log(listaDeNumeros[5]);
console.log(listaDeNumeros[6]);
console.log(listaDeNumeros[7]);
console.log(listaDeNumeros[8]);
console.log(listaDeNumeros[9]);
console.log(listaDeNumeros[10]);

// foi mostrado na tela um elemento de cada vez desse forma

// para adcionar um elemento na lista
    // NomeDaLista.push(elemento que eu quero adcionar)

// ex:

listaDeNumeros.push(11); // Para colocar um numero
console.log(listaDeNumeros);

// para tirar um elemento da lista
    // nomeDaLista.pop(elemento que eu quero remover)

// Ex:

listaDeNumeros.pop(11);
console.log(listaDeNumeros);

//------------------------------------------------------------------------------------------
// String

// concatenacao
const minhaStringNova5 = "Olá, Mundo!"
const minhaStringNova6 = minhaStringNova5 + " Como Voce está!"; // Concatenacao

console.log(minhaStringNova6)

//------------------------------------------------------------------------------------------

// Interpolacao (Mesma Coisa De Concatenacao)

const minhaStringNova7 = `${minhaStringNova5} como voce Esta? `;
console.log(minhaStringNova7)

//------------------------------------------------------------------------------------------
// lenght (contar quantos caracteres tem dentro de uma variavel)

console.log(minhaStringNova7.length)
console.log(minhaStringNova7[5]) // para olhar um caracter expecifico dentro de uma variavel

//------------------------------------------------------------------------------------------
console.log("toUpperCase (Deixa as letras em todas maiusculas!")
console.log(minhaStringNova6.toUpperCase())

//------------------------------------------------------------------------------------------

console.log("toLowerCase (Deixa as letras em todas maiusculas!")
console.log(minhaStringNova7.toLowerCase())

//------------------------------------------------------------------------------------------
console.log("Data e Hora!")

const agora = Date()
console.log(agora)

const natal = new Date(2023,11,25);
console.log(natal)

//------------------------------------------------------------------------------------------
// math (para operacoes matematicas)

console.log(Math.PI) // Arredonda o numero pra cimaa
console.log(Math.round(3.6)) // Arredonda o numero pra cima
console.log(Math.sqrt(16)) // Raiz Quadrada
console.log(Math.pow(2,3)) // Pontencia























































