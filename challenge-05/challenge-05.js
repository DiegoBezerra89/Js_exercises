/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let arr = [1, 'Diego' , {a: 'x'}, null, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArr(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
//let newArray = retornaArr(arr);
console.log(retornaArr(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaArr2(arr, index) {
    return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let arr2 = [4, 'Renata' , {b: 'y'}, NaN, Infinity];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(`${retornaArr2(arr2,0)}, ${retornaArr2(arr2,1)}, ${retornaArr2(arr2,2)}, ${retornaArr2(arr2,3)}, ${retornaArr2(arr2,4)};  `);



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
function book(bookName) {
    let allBooks = {
        'O senhor dos Aneis': {
            quantidadePaginas: 245,
            autor: 'Tolkien',
            editora: 'Martins'
        },
        'Game of thrones': {
            quantidadePaginas: 14567,
            autor: 'Martin',
            editora: 'saraiva'
        },
        'Harry Potter': {
            quantidadePaginas: 350,
            autor: 'Howling',
            editora: 'Arqueiro'
        }
    }
    return bookName ? allBooks[bookName] : allBooks; 
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book('');

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro "O Senhor dos aneis" tem ${book('O senhor dos Aneis').quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`A autora do livro "Harry Potter" é a ${book('Harry Potter').autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro "Game of thrones" foi publicado pela editora ${book('Game of thrones').editora}.`);
