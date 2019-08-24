            //##### EXEMPLO #####
// function pessoa() {
//     return {
//         idade: 1,
//         nome: 'Diego',
//         sobrenome: 'Bezerra',
//         nomeCompleto: function() {
//             return 'Olá meu nome é' + nome + ' ' + sobrenome;
//         }
//     };
// }

// var diego = pessoa();


// function nome(arg) {
//     return arg;
// }

// var carro = {
//     nome: 'Gol',
//     ano: 1989,
//     cor: 'vermelho'
// }

// nome(carro).cor;



/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = ['diego',1,true,'21',29.6];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myfunction (arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myfunction( array )[1]);


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2 (arg1,arg2) {
    return arg1[ arg2 ];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array2 = ['Diego', 21, 'Renata', true, '21', false];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction2 (array2,0);
myFunction2 (array2,1);
myFunction2 (array2,2);
myFunction2 (array2,3);
myFunction2 (array2,4);
/*

Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
var book = function( bookName ) {
    var allBooks = {
        'O senhor dos aneis': {
            quantidadePaginas: 20,
            autor: 'Tolkien',
            editora: 'Martins Fontes'
        },
        'Game of thrones': {
            quantidadePaginas: 350,
            autor: 'Martin',
            editora: 'Flecha'
        },
        'Biblia': {
            quantidadePaginas: 1900,
            autor: 'Deus',
            editora: 'jerusalem'
        }
    };
    // if (!bookName) {
    //     return allBooks;
    // }
    // return allBooks[ bookName ];
    return !bookName ? allbooks : allbooks[ bookName ];  
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('o livro O senhor dos aneis tem ' + book("O senhor dos aneis").quantidadePaginas + ' páginas');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Game of thrones é o ' + book('Game of thrones').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Biblia foi publicado pela editora ' + book('Biblia').editora + '.');
