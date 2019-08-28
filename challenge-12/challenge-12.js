{
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
    let person = {
        name: 'Diego',
        lastName: 'Martins',
        age: 29
    }
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
    let books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    books.push({name: 'O Senhor dos anéis', pages: 350});
    books.push({name: 'Harry Potter e o segredo de Garrincha', pages: 900});
    books.push({name: 'Game of thrones', pages: 3400});
    /*
    Mostre no console todos os livros.
    */
    console.log(books);
 
    /*
    Remova o último livro, e mostre-o no console.
    */
    books.pop();
   
    /*
    Mostre no console os livros restantes.
    */
    console.log(books);

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    books = JSON.stringify(books);
    
    /*
    Mostre os livros nesse formato no console:
    */
    console.log(books);

    /*
    Converta os livros novamente para objeto.
    */
    books = JSON.parse(books);

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    for(let i = 0; i < books.length; i++) {
        for(let prop in books[i]){
            console.log(`${prop}: ${books[i][prop]}`);
        }
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    let myName = ['D', 'i', 'e', 'g', 'o'];

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(myName.join(''));
    
    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    myName.reverse();
    myName.join('');
    console.log(myName);


    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    myName.reverse();
    myName.sort();
    
}
