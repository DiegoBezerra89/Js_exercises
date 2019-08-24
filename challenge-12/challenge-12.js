(function(){

        /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    var person = {
        name: 'Diego',
        lastName: 'Martins',
        age: 29
    }
    console.log( 'Propriedades de "person":' );
    console.log(Object.keys( person ));
    // console.log(Object.getOwnPropertyNames(person));
    //  for(var prop in person){
    //      console.log(prop);
    //  }
    
    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log(Object.keys(person));

    /*
    Crie um array vazio chamado `books`.
    */
    var books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    books.push({name: 'O senhor dos anéis', pages: 1200});
    books.push({name: 'Harry Pobre', pages: 23});
    books.push({name: 'Game of trones', pages: 20800});
    console.log( '\nLista de livros:' );
    console.log(books);
    /*
    Mostre no console todos os livros.
    */

    console.log( '\nLivro que está sendo removido:' );
    /*
    Remova o último livro, e mostre-o no console.
    */
    books.pop();

    console.log( '\nAgora sobraram somente os livros:' );
    /*
    Mostre no console os livros restantes.
    */
   console.log(books);

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    // ?
    console.log( '\nLivros em formato string:' );
    books = JSON.stringify(books);
    /*
    Mostre os livros nesse formato no console:
    */
    // ?

    /*
    Converta os livros novamente para objeto.
    */
    books = JSON.parse(books);
    console.log( '\nAgora os livros são objetos novamente:' );

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    for(var i = 0; i < books.length; i++) { //books é um array, logo tem length.
        for(var prop in books[i]) {
            console.log(prop + ': ' + books[i][prop]);
        } 
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = ['D','i','e','g','o'];
    console.log( '\nMeu nome é:' );
    myName.join('');
    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */

    console.log( '\nMeu nome invertido é:' );
    myName.reverse();
    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    myName.join('');

    console.log( '\nAgora em ordem alfabética:' );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    myName.reverse();
    myName.sort();
})();
