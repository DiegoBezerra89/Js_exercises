
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x,y) {
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let soma1 = soma(4, 5);


// Qual o valor atualizado dessa variável?
console.log(soma1);

// Declare uma nova variável, sem valor.
let variable;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function valor(variavel, valor1) {
    variavel = valor1;
    console.log(`O valor da variavel agora é ${variavel}.`);
}

// Invoque a função criada acima.
valor(variable, 10);

// Qual o retorno da função? (Use comentários de bloco).
/*10*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiply(a,b,c) {
    if(a === undefined || b === undefined || c === undefined){
        return 'Preencha todos os valores corretamente!';
    } return a * b * c;
}

// Invoque a função criada acima, passando só dois números como argumento.
multiply(2,3);


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiply(2,3,4);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//24

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function multiply2(arg1, arg2, arg3) {
    if(arg1 !== undefined && arg2 === undefined) {
        return arg1;
    } else if(arg1 !== undefined && arg2 !== undefined && arg3 === undefined) {
        return arg1 + arg2;
    } else if (arg1 !== undefined && arg2 !== undefined && arg3 !== undefined) {
        return (arg1 + arg2) / arg3;
    } else if (arg1 === undefined) {
        return false;
    } return null;
}


// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
multiply2(1);
