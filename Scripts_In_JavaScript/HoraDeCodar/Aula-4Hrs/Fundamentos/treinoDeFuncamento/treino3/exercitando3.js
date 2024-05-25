var minhaVariavel = "Olá,Mundo!";
console.log(minhaVariavel);

//-----------------------------------------------------------------------------------------------
console.log("Variaveis e Tipos de dados!");

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
console.log("Operadores Aritmeticos!");

console.log(x + y);
console.log(x * y);
console.log(x / y);
console.log(x - y);


//-----------------------------------------------------------------------------------------------

console.log("Operadores de comparacao");

console.log(x = y);
console.log(x == y);
console.log(x === y);
console.log(x !== y);

//-----------------------------------------------------------------------------------------------

console.log("Operadores Logicos");

console.log("&& - E Lógico!");
console.log(10 > 5 && 20 > 5);
console.log(10 < 5 && 20 < 5);
console.log(10 > 5 && 20 < 5);
console.log(10 < 5 && 20 > 5);

console.log("|| - OU Lógico!");
console.log(10 > 5 || 20 > 5);
console.log(10 > 5 || 20 < 5);
console.log(10 < 5 || 20 > 5);
console.log(10 < 5 || 20 < 5);

//-----------------------------------------------------------------------------------------------
console.log("Conversao de tipos de dados!");

const meuNumeroString = "123";
console.log(meuNumeroString);
console.log(typeof(meuNumeroString))

const meuNumeroStringConvertido = Number(meuNumeroString);
console.log(meuNumeroStringConvertido);
console.log(typeof(meuNumeroStringConvertido));

//-----------------------------------------------------------------------------------------------

console.log("Estrutura Condicional!");

const idade = 20;

if(idade < 13){
    console.log("Crianca!");
}else if(idade < 20){
    console.log("Adolecente!");
}else{
    console.log("Adulto");
}

//-----------------------------------------------------------------------------------------------

console.log("Switch Case");

const fruta = "Melao";

switch(fruta){
    case "morango":
        console.log("A fruta é Morango!");
        break;
    
    case "banana":
        console.log("A fruta é Banana!");
        break;
    
    case "Melao":
        console.log("A fruta é melao");
        break

    default:
        console.log("Fruta nao Encontrada em nenhum dos casos!");
        break;
}

//-----------------------------------------------------------------------------------------------

console.log("Estrutura de repeticao!");

// For

for(let i = 0; i < 10; i = i + 1){
    console.log(`O valor de i é: ${i}`);
}

//  while

let s = 0;
while(s < 5){
    console.log(`O valor de s é: ${s}`);
    s++;
}

// do while
let j = 0
do{
    console.log(`O valor de j é de: ${j}`);
    j++
}while(j < 5);

//-----------------------------------------------------------------------------------------------

console.log("funcoes");

function comprimentar(){
    console.log("Ola Bom dia!");
}

comprimentar();

//-----------------------------------------------------------------------------------------------

console.log("Escopo de variaveis!");

let cor = "Azul";

function mostrarCor(){
    let cor = "Verde";
    console.log(cor);
}

console.log(cor);
mostrarCor();

//-----------------------------------------------------------------------------------------------

console.log("Hoisting - Içamento!");

testeHosinsting();

function testeHosinsting(){
    console.log("Essa funcao foi criada depois de ser chamada!")
}

//-----------------------------------------------------------------------------------------------
console.log("Arrow funcition");

const testeArrow = () => console.log("Isso tambem é uma funcao");
testeArrow();



console.log("Truthy e Falsy");

// se a variavel estiver vazia é considerada falsa
// se a variavel estiver com pelo menos um valor dentro dela, é considerada verdadeira

const minhaVariavel1 = '' // falsy
const minhaVariavel2 = 'Alguma Coisa!' // Truthy

if(minhaVariavel1){
    console.log("Essa Variavel é Verdadeira!");
}else{
    console.log("Essa Variavel é Falsa!");
}

if(minhaVariavel2){
    console.log("Essa Variavel é Verdadeira!");
}else{
    console.log("Essa Variavel é Falsa!");
}

//------------------------------------------------------------------------------------------

console.log("Arrays (Listas)")

const arrays = ['elemento1','elemento2','elemento3','elemento4'];
const listaDeNumeros = [1,2,3,4,5,6,7,8,9,10];

console.log(listaDeNumeros);

console.log(listaDeNumeros[0]);// para pegar um item especifico da lista
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
console.log("Contatenação De String!");

const minhaString = "Olá, Mundo!"
const minhaStringConcatenada = minhaString + " Como Voce está!"; // Concatenacao

console.log(minhaStringConcatenada);

//------------------------------------------------------------------------------------------

console.log("Interpolacao (Mesma Coisa De Concatenacao");

const minhaStringInterpolada = `${minhaString} como voce Esta? `;
console.log(minhaStringInterpolada);

//------------------------------------------------------------------------------------------
console.log("Lenght (contar quantos caracteres tem dentro de uma variavel");

console.log(minhaStringInterpolada.length)
console.log(minhaStringInterpolada[5]) // para olhar um caracter expecifico dentro de uma variavel

//------------------------------------------------------------------------------------------
console.log("ToUpperCase && ToLowerCase!");

let frase = "O Rato Comeu a Roupa";

console.log("A frase normal!");
console.log(frase);

console.log("toUpperCase (Deixa as letras em todas maiusculas!");
console.log(frase.toUpperCase());

console.log("toLowerCase (Deixa as letras em todas maiusculas!");
console.log(frase.toLowerCase());

//------------------------------------------------------------------------------------------
console.log("Data e Hora!");

const agora = Date();
console.log(agora);

const natal = new Date(2023,11,25);
console.log(natal);

//------------------------------------------------------------------------------------------
console.log("math (para operacoes matematicas)")

console.log(Math.PI); // Arredonda o numero pra cimaa
console.log(Math.round(3.6)); // Arredonda o numero pra cima
console.log(Math.sqrt(16));// Raiz Quadrada
console.log(Math.pow(2,3)); // Pontencia




































