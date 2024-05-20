var minhaVariavel = "Olá, Mundo!";
console.log(minhaVariavel);
//-----------------------------------------------------------------------------------------------

console.log("Variaveis e tipos de dados!");

var meuNumero = 10;
console.log(meuNumero);
console.log(meuNumero + 5);
console.log(typeof(meuNumero));

var booleano = true;
var meuObjeto = {};
var meuArray = [];
var meuNull = null;
var meuUndefined = undefined;

console.log(booleano);
console.log(meuObjeto);
console.log(meuArray);
console.log(meuNull);
console.log(meuUndefined);

var x = 30;
let y = 10;
const z = 5;

console.log(typeof(x));
console.log(typeof(y));
console.log(typeof(z));

console.log(x,y);

//-----------------------------------------------------------------------------------------------

console.log("Operadores Aritmeticos");

console.log(x + y);
console.log(x * y);
console.log(x / y);
console.log(x - y);

//-----------------------------------------------------------------------------------------------

console.log("Operadores de Comparacao");

console.log(x = y);
console.log(x == y);
console.log(x === y);
console.log(x !== y);

//-----------------------------------------------------------------------------------------------

console.log("Operadores Logicos");

console.log("&& - E Logico!");
console.log(10 > 5 && 20 > 5);
console.log(10 < 5 && 20 < 5);
console.log(10 > 5 && 20 < 5);
console.log(10 < 5 && 20 > 5);

console.log("|| - Ou Logico!");
console.log(10 > 5 || 20 > 5);
console.log(10 > 5 || 20 < 5);
console.log(10 < 5 || 20 > 5);
console.log(10 < 5 || 20 < 5);

//-----------------------------------------------------------------------------------------------

console.log("Conversao De Tipos De Dados")

const meuNumeroString = "123";
console.log(meuNumeroString);
console.log(typeof meuNumeroString);

const meuNumeroStringConvertido = Number(meuNumeroString);
console.log(meuNumeroStringConvertido);
console.log(typeof(meuNumeroStringConvertido));

//-----------------------------------------------------------------------------------------------

console.log("Estrutura Condicional");

//Exemplo 1
const idade = 20;

if(idade < 13){
    console.log("Criança!");
}else if(idade < 20){
    console.log("Adolecente!");
}else{
    console.log("Adulto!");
}

//Exemplo 2
if(true){
    console.log("Isso sera exibido!");
}else{
    console.log("Isso nao será exibido");
}

//Exemplo 3
if(false){
    console.log("Isso nao será exibido!");
}else{
    console.log("Isso Sera exibido!");
}
//-----------------------------------------------------------------------------------------------

console.log("Switch Case!");

const fruta = "Abacate";
switch(fruta){
    case "Banana":
        console.log("A Fruta é banana!");
        break;
    
    case "Maça":
        console.log("A fruta é maça!");
        break;

    case "Abacate":
        console.log("A Fruta é Abacate!");
        break
    
    default:
        console.log("Não encontrei a fruta!")
        break;
}

//-----------------------------------------------------------------------------------------------
console.log("Estruturas De Repeticao");


//for
for(let i = 0; i < 5; i = i + 1){
    console.log(`O Valor de i é ${i}`)
}

//While
let s = 0
while(s < 5){
    console.log(`O valor de s é ${s}`)
    s++;
}

// Do while
let j = 0;
do{
    console.log(`O valor de j é de ${j}`);
    j++;
}while(j < 5);

//-----------------------------------------------------------------------------------------------

console.log("Funcoes");

function comprimentar(){
    console.log("Olá Bom dia!");
}

comprimentar();

//-----------------------------------------------------------------------------------------------
console.log("Escopo De Variaveis!");

let cor = "Azul";

function mostrarCor(){
    let cor = "Verde";
    console.log(cor);
}

console.log(cor);
mostrarCor();


//-----------------------------------------------------------------------------------------------

console.log("Hoisting = Içamento!");

testeHoisting();

function testeHoisting(){
    console.log("Essa funcao foi criada depois de ser chamada!");
}

//-----------------------------------------------------------------------------------------------

console.log("Arrow Function");

const testeArrow = () => console.log("Isso tambem é uma funcao!");
testeArrow();

//-----------------------------------------------------------------------------------------------

console.log("Truthy e Falsy");

const minhaVariavel1 = '';
const minhaVariavel2 = 'Alguma coisa!';

if(minhaVariavel1){
    console.log("Essa Variavel é Verdadeira!")
}else{
    console.log("Essa Variavel é Falsa!");
}

if(minhaVariavel2){
    console.log("Essa Variavel é Verdadeira!");
}else{
    console.log("Essa variavel é Falsa!");
}

//-----------------------------------------------------------------------------------------------

console.log("Arrays(Listas)!");

const arrays = ['Elemento1', 'Elemento2','Elemento3','Elemento4','Elemento5'];
const listaDeNumeros = [1,2,3,4,5,6,7,8,9,10];

console.log(listaDeNumeros);
console.log(listaDeNumeros[0]);
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

//adcionar na lista
listaDeNumeros.push(11);
console.log(listaDeNumeros);

//Remover da lista
listaDeNumeros.pop(11);
console.log(listaDeNumeros);

//-----------------------------------------------------------------------------------------------

console.log("Contatenação De String!");

const minhaString = "Olá! Mundo!";
const minhaStringConcatenada = minhaString + " Como voce está?!";

console.log(minhaStringConcatenada);

//-----------------------------------------------------------------------------------------------

console.log("Interpolação");

const minhaStringInterpolada = `${minhaString} Como Voce Está!`;
console.log(minhaStringInterpolada);

//-----------------------------------------------------------------------------------------------

console.log("Lenght!");

console.log(minhaStringInterpolada.length);
console.log(minhaStringInterpolada[5]);

//-----------------------------------------------------------------------------------------------

console.log("ToUpperCase && ToLowerCase!");

let frase = "A Rato Comeu a Roupa!";

console.log("A Frase Normal!");
console.log(frase);

console.log("ToUpperCase - Deixa as letras todas Maiuscula!");
console.log(frase.toUpperCase());

console.log("ToLowerCase - Deixa As Letras Todas em Minuscula");
console.log(frase.toLowerCase());

//-----------------------------------------------------------------------------------------------

console.log("Data e Hora!");

const agora = Date();
console.log(agora);

const natal = new Date(2024,11,25);
console.log(natal);

//-----------------------------------------------------------------------------------------------
console.log("Math");

console.log(Math.PI);
console.log(Math.round(3.6));
console.log(Math.sqrt(16));
console.log(Math.pow(2,3));











