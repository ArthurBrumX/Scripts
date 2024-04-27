// Fundamentos
// var nome = "Valor";

var minhaVariavel = "Olá Mundo!";
console.log(minhaVariavel);

//-----------------------------------------------------------------------------------------------

console.log("Variaveis e tipos de dados!");

var meuNumero = 10;
console.log(meuNumero);
console.log(meuNumero + 5);
console.log(typeof meuNumero);

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

let x = 10;
const y = 5;
console.log(typeof x);
console.log(typeof y);
console.log(x,y);

//-----------------------------------------------------------------------------------------------

console.log("Operadores Aritmeticos");

console.log(x + y);
console.log(x * y);
console.log(x / y);
console.log(x - y);

//-----------------------------------------------------------------------------------------------
console.log("Operadores De Comparacao");

console.log(x = y);
console.log(x == y);
console.log(x === y);
console.log(x !== y);

//-----------------------------------------------------------------------------------------------
console.log("Operadores Logicos!");

console.log("&& - E Logico")
console.log(10 > 5 && 20 > 5);
console.log(10 < 5 && 20 < 5);
console.log(10 > 5 && 20 < 5);
console.log(10 < 5 && 20 > 5);

console.log("|| - OU Logico")
console.log(10 > 5 || 20 > 5);
console.log(10 > 5 || 20 < 5);

//-----------------------------------------------------------------------------------------------
console.log("Conversao De Tipos")

const meuOutroNumero = "123";
console.log((meuOutroNumero));
console.log(typeof(meuOutroNumero));

const meuOutroNumeroConvertido = Number(meuOutroNumero);
console.log(meuOutroNumeroConvertido);
console.log(typeof(meuOutroNumeroConvertido));

const convertendo = "22001010";
console.log("A variavel *convertendo* está atualmente com o valor: ",convertendo);
console.log("Até aqui essa variavel é uma: ",typeof(convertendo));

const tentandoConverter = Number(convertendo);
console.log("Aqui ela ja esta convertida e é um: ",typeof(tentandoConverter));

//-----------------------------------------------------------------------------------------------
console.log("Estrutura Condicional!");

// ----------------
//Exemplo 1
const idade = 20;
if(idade < 13){
    console.log("É criança!");
}else if(idade < 19){
    console.log("é Adolecente");
}else{
    console.log("É Adulto");
}

// ----------------
//Exemplo 2
if(true){
    console.log("Isso será exibido!");
}else{
    console.log("Isso nao sera exibido");
}

// ----------------
//Exemplo 3
if(false){
    console.log("Isso Não Será Exibido!");
}else{
    console.log("Isso Será Exibido");
}

// ----------------
//Exemplo 4

let numero1 = 55;
let numero2 = 27;
let expressaoCondicional = numero1 * numero2;

console.log(expressaoCondicional);
if(expressaoCondicional >= 1000){
    console.log("Verdadeiro!");
}else{
    console.log("Falso!")
}

//-----------------------------------------------------------------------------------------------
console.log("Switch Case!")

//Exemplo 1
const fruta = "Banana";
switch(fruta){
    case"Banana":
        console.log("Banana é a fruta!");
        break;
    case"Maça":
        console.log("A fruta é maça!");
        break;
    case"Abacate":
        console.log("A fruta é Abacate!");
        break
    case"Pera":
        console.log("A fruta é Pera!")
        break;
    default:
        console.log("Fruta nao Encontrada!");
        break;
}

//Exemplo 2
const nome = "Arthur";
switch(nome){
    case"Felipe":
        console.log("Seu nome é Felipe!")
        break;
    case"Miguel":
        console.log("Seu nome é Miguel!")
        break;
    case"Igor":
        console.log("Seu nome é Igor!")
        break;
    case"Arthur":
        console.log("Seu nome é Arthur!");
        break;
    default:
        console.log("Nome nao encontrado!");
        break;

}

//Exemplo 3
const carro = "Mercedes"
switch(carro){
    case"Gol":
        console.log("A marca do veiculo é Gol!");
        break;
    case"Fiat":
        console.log("A marca do veiculo é Fiat!");
        break;
    case"Tesla":
        console.log("A marca do veiculo é Tesla!");
        break;
    case"Mercedes":
        console.log("A marca do veiculo é mercedes!")
        break;
    default:
        console.log("Marca Não Encontrada!");
}
//-----------------------------------------------------------------------------------------------   
console.log("Estrutura de repeticao - Laços de repetoção");

//For
for(let i = 0; i < 5; i = i + 1){
    console.log(`O valor De I é ${i}`);
}

// While (Enquanto)
let s = 0;
while(s < 5){
    console.log(`O valor de s é ${s}`);
    s++;
}

//do While
let j = 0;
do{
    console.log(`O valor de j é de ${j}`);
    j++
}while(j < 5);

//-----------------------------------------------------------------------------------------------
console.log("Funcoes");

//Exemplo 1
function comprimentar(){
    console.log("Olá, Bom Dia!")
}

comprimentar()

//Exemplo 2
function calculoAdicao(){
    let resultado = a + b;
    console.log(resultado)
}
let a = 5;
let b = 5;
calculoAdicao();

//-----------------------------------------------------------------------------------------------













