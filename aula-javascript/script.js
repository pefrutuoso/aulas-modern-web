mensagem = "Olá mundo!";
alert(mensagem);

// string
mensagem = "Olá mundo!";

// mumerico
numero = "007";

// array
minha_lista = ["Controle"," Mouse"," Teclado"];

// booleanos
verdadeiro = true;

// exibindo as variaveis
alert(mensagem);
alert(numero);
alert(minha_lista);
alert(verdadeiro);



// declaração das variáveis
mensagem_1 = "Olá mundo!"; //declaração direta

let mensagem_2 = "Olá mundo novamente!"; // declaração utilizando a palavra reservada let

const mensagem_3 = "Olá mundo pela terceira vez"; // declaração utilizando a palavra reservada const

var mensagem_4 = "Olá mundo pela ultima vez"; // declaração utilizando a palavra reservada var

alert(mensagem_1);
alert(mensagem_2);
alert(mensagem_3);
alert(mensagem_4);



// operações matemáticas
let a = 5;
let b = 2;

alert(a + b); //soma
alert(a - b); //subtração
alert(a * b); //multiplicação
alert(a / b); //divisão
alert(a % b); //resto da divisão ou módulo
alert(a ** b); //exponenciação

//operador de atribuição
let soma = a + b;
alert(soma);


// concatenação de strings
let texto_1 = "Hello,";
let texto_2 = " World!";
let texto_final = texto_1 + texto_2;
alert(texto_final);


// operadores relacionais
let a = "5";
let b = "2";
alert(a > b); //maior que
alert(a < b); //menor que
alert(a = b); //igual
alert(a === b); //igual ou do mesmo tipo
alert(a != b); //diferente
alert(a !== b); //diferente e de tipos diferentes
alert(a >= b); //maior ou igual
alert(a <= b); //menor ou igual


//operadores lógicos
let a = "5";
let b = "2";
alert(a > b && b > 0); //AND, as condições precisam ser verdadeiras
alert(a < b || b > 0); //OR, pelo menos uma condição precisa ser verdadeira
alert(a > b !(b > 0)); //NOT, ! nega o resultado


//console
console.log


//estruturas condicionais
let numero = 7;
if(numero % 2 == 0){
    console.log(numero + " é par");
}else if(numero% 2 ==1){
    console.log(numero + " é impar")
}else{
    console.log("Número invalido")
}

let idade = 18;
if(idade >= 18){
    console.log(" Você é maior de idade, tem " + idade + " anos de idade");
}else if(idade === 17){
    console.log(" Você está quase completando 18, tem " + idade + " anos de idade");
}else{
    console.log(" Você é menor de idade, tem " + idade + " anos de idade")
}


// switch case
let numero = 7;
let resto = numero % 2;
switch (resto) {
    case 0:
        console.log(numero + " é par");
        break;
    case 1:
        console.log(numero + " é ímpar");
        break;
    default:
        console.log("o número é invalido");
        break;
}


//estruturas repetitivas, for & while
let i = 0;
while(i < 5){
    console.log(i);
    i = i + 1;
}

for(let i =0; i<5; i++){
    console.log(i);
}



//array
lista = ["Controle"," Mouse"," Teclado"];
for(i in lista){
    console.log(i);
    console.log(lista[i]);
}

let objeto = {
    nome: "Pedro",
    idade: "26",
    profissão: "Bombeiro"
};
console.log(objeto);
console.log(objeto["nome"]);


//funções
function soma(n1, n2){
    return n1 + n2;
}
let resultado = soma(19,3);
console.log(resultado);