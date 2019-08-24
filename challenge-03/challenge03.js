
// Declarar uma variável qualquer, que receba um objeto vazio.
let qualquer = {};

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
function Pessoa(nome, sobrenome, sexo, idade, altura, peso, andando = false, caminhouQuantosMetros = 0) {
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.sexo = sexo,
    this.idade = idade,
    this.altura = altura,
    this.peso = peso,
    this.andando = andando,
    this.caminhouQuantosMetros = caminhouQuantosMetros
}


/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
Pessoa.prototype.fazerAniversario = function() {
    this.idade++;
}


/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
Pessoa.prototype.andar = function(metros) {
    this.caminhouQuantosMetros += metros;
    this.andando = true;
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
Pessoa.prototype.parar = function() {
    this.andando = false;
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
Pessoa.prototype.nomeCompleto = function() {
    return `Olá! Meu nome é ${this.nome} ${this.sobrenome}.`;
}


/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
Pessoa.prototype.mostrarIdade = function() {
    return `Olá, eu tenho ${this.idade} anos!`;
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
Pessoa.prototype.mostrarPeso = function() {
    return `Eu peso ${this.peso}Kg.`;
}


/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
Pessoa.prototype.mostrarAltura = function() {
    return `Minha altura é ${this.altura}m.`;
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
let diego = new Pessoa('Diego', 'Bezerra', 'M', 29, 1.76, 78 );


/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(diego.idade); //29

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(diego.peso);
//78

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(diego.altura);

/*
Faça a `pessoa` fazer 3 aniversários.
*/
diego.fazerAniversario();
diego.fazerAniversario();
diego.fazerAniversario();
console.log(diego.idade);

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
//29


/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
diego.andar(20);
diego.andar(30);
diego.andar(40);

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(diego.andando);

/*
Se a pessoa ainda está andando, faça-a parar.
*/
diego.parar();

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(diego.andando);

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(diego.caminhouQuantosMetros());

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"


Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
Pessoa.prototype.apresentacao = function() {
    let sexo, anos, metros;
    
    sexo = 'o';
    anos = 'anos';
    metros = 'metros';
    
    this.sexo === 'F' ? sexo = 'a': '';
    this.idade === 1 ? anos = 'ano': '';
    this.caminhouQuantosMetros === 1 ? metros = 'metro': '';


    return `Olá, eu sou ${sexo} ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${anos}, ${this.altura}, meu peso é ${this.peso} e, só hoje eu já caminhei ${this.caminhouQuantosMetros} ${metros}!`;

}


// Agora, apresente-se ;)
console.log(diego.apresentacao());

let renata = new Pessoa('Renata', 'Almeida', 'F', 1, 1.77, 88, true, 1);