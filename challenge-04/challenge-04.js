
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
let isTruthy = (value) => {
    console.log (value ? true : false);
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(false);
isTruthy(0);
isTruthy('');
isTruthy(null);
isTruthy(undefined);
isTruthy(NaN);
/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(true);
isTruthy(1);
isTruthy('.');
isTruthy(-1);
isTruthy({});
isTruthy(new Date());
isTruthy('foo');
isTruthy([]);
isTruthy(3.12);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
function Carro(marca, modelo, placa, ano, cor, quantasPortas, assentos = 5, quantidadePessoas = 0) {
    this.marca = marca;
    this.modelo = modelo;
    this.placa = placa;
    this.ano = ano;
    this.cor = cor;
    this.quantasPortas = quantasPortas;
    this.assentos = assentos;
    this.quantidadePessoas = quantidadePessoas;
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
Carro.prototype.mudarCor = function(cor) {
    this.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
Carro.prototype.obterCor = function() {
    return this.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
Carro.prototype.obterModelo = function() {
    return this.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
Carro.prototype.obterMarca = function() {
    return this.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
Carro.prototype.obterMarcaModelo = function() {
    return `Esse carro é um ${this.marca} ${this.modelo}.`;
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
Carro.prototype.addPessoas = function(numPessoas) {
    let pessoas = 'pessoas';
    if(this.assentos - this.quantidadePessoas === 1){
        pessoas = 'pessoa';
    }
    if(this.quantidadePessoas === this.assentos && numPessoas < 0){ //se o carro estiver lotado e for inserido um valor negativo
        this.quantidadePessoas += numPessoas;
        return `Agora temos ${this.quantidadePessoas} pessoas no carro!`
    }else if(this.quantidadePessoas === this.assentos && numPessoas > 0) {
        return 'O carro já está lotado!';
    } else if(this.quantidadePessoas < this.assentos && this.quantidadePessoas + numPessoas > this.assentos) {
        return `Só cabem mais ${this.assentos - this.quantidadePessoas} ${pessoas} no carro.`;
    }
    this.quantidadePessoas += numPessoas;
    return `Já temos ${this.quantidadePessoas} pessoas no carro!`;
}

let golf = new Carro('Volks', 'Golf', 'mwd-4877', 1998, 'Verde', 5);
console.log(golf);

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(golf.obterCor());

// Mude a cor do carro para vermelho.
golf.mudarCor('Vermelho');

// E agora, qual a cor do carro?
console.log(golf.obterCor());

// Mude a cor do carro para verde musgo.
golf.mudarCor('Marrom');

// E agora, qual a cor do carro?
console.log(golf.obterCor());

// Qual a marca e modelo do carro?
console.log(golf.obterMarcaModelo());

// Adicione 2 pessoas no carro.
golf.addPessoas(2);

// Adicione mais 4 pessoas no carro.
golf.addPessoas(4);

// Faça o carro encher.
golf.addPessoas(3);

// Tire 4 pessoas do carro.
golf.addPessoas(-4);

// Adicione 10 pessoas no carro.
golf.addPessoas(10);

// Quantas pessoas temos no carro?
console.log(golf.quantidadePessoas);

