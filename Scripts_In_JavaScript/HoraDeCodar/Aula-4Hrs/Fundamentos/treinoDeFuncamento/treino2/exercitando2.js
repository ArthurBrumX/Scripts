// Fundamentos

var minhaVariavel = "Olá Mundo!";
console.log(minhaVariavel);
//-----------------------------------------------------------------------------------------------
// Variaveis e Tipos De Dados

console.log("Variaveis e Tipos de dados!");
var meuNumero = 10;

console.log(meuNumero);
console.log(meuNumero + 5);
console.log(typeof meuNumero);

console.log("Tipos De Dados")
var booleano = true;
var meuObjeto = {};
var meuArray = [];
var meuNull = null;
var meuUndefined = undefined;

console.log("Isso é Um:",booleano);
console.log("Isso é Um:",meuObjeto);
console.log("Isso é Um:",meuArray);
console.log("Isso é Um:",meuNull);
console.log("Isso é Um:",meuUndefined);

//-----------------------------------------------------------------------------------------------
// Novas formas de declaracao de variaveis

var x = 30;
let y = 10;
const z = 5;

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(x,y,z);

//----------------------------------------------------------------------------------------------
console.log("Operadores Aritmeticos!");

console.log(x + y);
console.log(x * y);
console.log(x / y);
console.log(x - y);

// + -> Adicao;
// - -> Subtracao;
// * -> Multiplicacao;
// / -> Divisao;

//----------------------------------------------------------------------------------------------
console.log("Operadores de Comparacao!");

console.log(x = y,"Atribuicao");
console.log(x == y,"comparacao");
console.log(x === y,"Identico");
console.log(x !== y,"Diferenciacao");

//----------------------------------------------------------------------------------------------
console.log("Operadores Logicos!");

console.log("&& - e Logico!");
console.log(10 > 5 && 20 > 5);
console.log(10 < 5 && 20 < 5);
console.log(10 > 5 && 20 < 5);
console.log(10 < 5 && 20 > 5);

console.log("|| Ou Logico!");
console.log(10 > 5 || 20 > 5);
console.log(10 > 5 || 20 < 5);
console.log(10 < 5 || 20 > 5);
console.log(10 < 5 || 20 < 5);

//----------------------------------------------------------------------------------------------
console.log("Conversao De Tipos!");

const meuOutroNumero = "123";
console.log(meuOutroNumero);
console.log(typeof(meuOutroNumero));

const meuNumeroConvertido = Number(meuOutroNumero);
console.log(meuNumeroConvertido);
console.log(typeof(meuNumeroConvertido));

//----------------------------------------------------------------------------------------------
console.log("Estruturas Condicionais!");

const idade = 20;

if(idade < 13){
    console.log("Criança!");
}else if(idade < 20){
    console.log("Adolecente!");
}else{
    console.log("Adulto!");
}

if(true){
    console.log("Isso será Exibido!");
}else{
    console.log("Isso nao sera exebido!");
}

if(false){
    console.log("Isso nao sera exibido!");
}else{
    console.log("Isso será exibido!");
}

//----------------------------------------------------------------------------------------------
console.log("Switch case!");

const fruta = "Abacate"
switch(fruta){
    case "Banana":
        console.log("Banana é a fruta!");
        break;
    
    case "Maçã":
        console.log("A fruta é  Maçã!");
        break;
    
    case "Abacate":
        console.log("A fruta é Abacate!");
        break;
    
    default:
        console.log("Não Encontrei a Fruta em Nenhum caso!");
        break;
}

//----------------------------------------------------------------------------------------------
console.log("Estruturas De Repetição - Laços de Repetição!");

//for
for(let i = 0; i < 5; i = i + 1){
    console.log(`O valor de I é ${i}`);
}

//While
let s = 0;
while(s < 5){
    console.log(`O valor de s é: ${s}`);
    s++;     
}

// Do While
let j = 0
do{
    console.log(`O valor de j é de: ${j}`);
    j++
}while(j < 5);

//----------------------------------------------------------------------------------------------
console.log("Funcoes");

