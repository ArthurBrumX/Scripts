console.log("Fundamentos");

var minhaVariavel = "Olá, Mundo!";
console.log(minhaVariavel);

//-----------------------------------------------------------------------------------------------
console.log("Variaveis e tipos de dados!");

var meuNumero = 10;
console.log(meuNumero);
console.log(meuNumero +5);
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

var x = 30;
let y = 10;
const z = 5;

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(x,y);
//-----------------------------------------------------------------------------------------------

console.log("Operadores Aritmeticos");
console.log(x + y);
console.log(x * y);
console.log(x / y);
console.log(x - y);
//-----------------------------------------------------------------------------------------------

console.log("Operadores de Comparação");
console.log(x = y);
console.log(x == y);
console.log(x === y);
console.log(x !== y);

//-----------------------------------------------------------------------------------------------

console.log("Operadores Logicos");

console.log("&& - E Lógico");
console.log(10 > 5 && 20 > 5);
console.log(10 < 5 && 10 < 5);
console.log(10 > 5 && 20 < 5);
console.log(10 < 5 && 20 > 5);

console.log("|| - OU Lógico");
console.log(10 > 5 || 20 > 5);
console.log(10 > 5 || 20 < 5);
console.log(10 < 5 || 20 > 5);
console.log(10 < 5 || 20 < 5);

//-----------------------------------------------------------------------------------------------

console.log("Conversao de tipos");

const meuOutroNumero = "123";
console.log(meuOutroNumero);
console.log(typeof meuOutroNumero);

const meuOutroNumeroConvertido = Number(meuOutroNumero);
console.log(meuOutroNumeroConvertido);
console.log(typeof meuOutroNumeroConvertido)

//-----------------------------------------------------------------------------------------------

console.log("Estrutura Condicional");

const idade = 20;
if(idade < 13){
    console.log("Criaça");
}else if(idade < 20){
    console.log("Adolecente!");
}else{
    console.log("Adulto!");
}

if(true){
    console.log("Isso Será Exibido!");
}else{
    console.log("Isso nao será Exibido");
}

if(false){
    console.log("Isso nao sera exibido!");
}else{
    console.log("Isso Será Exibido!");
}

//-----------------------------------------------------------------------------------------------
console.log("Switch Case");

const fruta = "Melao";
switch(fruta){
    case "Banana":
        console.log("A fruta é Banana!");
        break;
    
    case "Melao":
        console.log("A fruta é Melao!");
        break;
    
    default:
        console.log("Não Encontrei nenhuma fruta!");
        break
}

//-----------------------------------------------------------------------------------------------

console.log("Estrutura De Repetição");

// for
for(let i = 0; i < 5; i = i + 1){
    console.log(`O valor de I é ${i}`);
}

// While
let s = 0;
while(s < 5){
    console.log(`O valor de s é: ${s}`);
    s++;
}

//Do While
let j = 0;
do{
    console.log(`O valor de j é de: ${j}`);
    j++;
}while(j < 5);












