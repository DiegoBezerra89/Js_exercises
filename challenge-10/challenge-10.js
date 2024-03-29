{
    /*
    Crie uma IIFE que envolva todo esse arquivo (inclusive esse comentário),
    e faça a indentação correta.
    */

    /*
    Sem alterar os códigos nos `console.log` abaixo, faça com que o retorno
    deles seja "true", usando os Wrapper Objects como "conversores" nos valores
    das variáveis. Analise o que está sendo impresso no console para saber como
    resolver o problema corretamente.
    */
    
    /*
    Voltando ao exemplo da calculadora, vamos utilizar mais uma abordagem
    funcional, mas dessa vez, separando algumas responsabilidades.
    - Primeiro, crie um objeto chamado `operation` que terá as propriedades:
    '+', '-', '*', '/' e '%'.
    - Cada propriedade vai receber uma função (logo, elas serão métodos), e essa
    função receberá dois parâmetros e retornará a operação referente à sua
    propriedade, usando os valores passados por parâmetro.
    */
   let operation = {
       '+': function(num1, num2) {
            return num1 + num2;
       },
       '-': function(num1, num2) {
           return num1 - num2;
       },
       '*': function(num1, num2) {
           return num1 * num2;
        },
        '/': function(num1, num2) {
            return num1 / num2;
        }
   }
    

    /*
    Crie uma função chamada `isOperatorValid`, que receberá um operador por
    parâmetro.
    - Essa função será responsável por verificar se o operador passado por
    parâmetro a ela é válido, ou seja, se ele é igual a '+', '-', '*', '/' ou
    '%'.
    - Se for igual a qualquer um desses, ela deverá retornar "true".
    Caso contrário, "false".
    - O desafio é fazer o retorno sem usar "if" ou "switch".
    */
    function isOperatorValid( operator ) {
       return !!operation[ operator ]; //retornará o valor booleano desta expressão, como operator existe no operation, é true.
    }

    /*
    Agora vamos criar a calculadora.
    - Crie uma função chamada `calculator`, que receberá como parâmetro um
    operador;
    - Se o operador não for válido, a função deve retornar "false";
    - Se o operador for válido, retornar uma segunda função que receberá dois
    parâmetros;
    - Se algum dos parâmetros não for um número, retornar "false";
    - Senão, retornar o método do objeto "operation" criado acima, baseado no
    operador passado para a função "calculator", e passando para esse método
    os dois parâmetros da função de retorno de "calculator".
    */
    function calculator(operator) {
        if(isOperatorValid(operator)) {
            return function(num1, num2) {
                if(typeof num1 !== 'number' || typeof num2 !== 'number'){
                    return false
                } return operation[operator](num1, num2);
            }
        } else {
            return false;
        }     
    }
    let soma = calculator('+');
    console.log(soma(3,5));
        
    // if (isOperatorValid(operator)) {
    
    //     function numbersTest ( n1 , n2) {
        //         return n1 !== number || n2 !== number ? false : true;
        //     }
        //     if (numbersTest){
        //         switch(operator) {
        //             case '+': operation.sum(n1,n2);
        //                 break;
        //             case '-': operation.subtraction(n1,n2);
        //                 break;
        //             case '*': operation.multiplication(n1,n2);
        //                 break;
        //             case '/': operation.division(n1,n2);
        //                 break;
        //             case '%': operation.mod(n1,n2);
        //                 break;
        //         }
                
        //     }
        // }
        // return false;


    /*
    Crie uma função chamada "showOperationMessage" que recebe três parâmetros:
    - o operador, o primeiro número e o segundo número. O retorno da função
    deve ser a frase:
    'A operação [NUMBER1] [OPERATOR] [NUMBER2] =';
    Essa função mostrará a mensagem da operação que criaremos mais abaixo.
    */
    function showOperationMessage(operator, num1, num2) {
        return `A operação ${num1} ${operator} ${num2} = `;
    }


    /*
    Crie uma função chamada "showErrorMessage" que recebe um parâmetro: o
    operador da operação, quando a operação não for válida.
    Essa função deverá retornar a frase:
    'Operação "[OPERATOR]" não permitida!'
    */
    function showErrorMessage(operator) {
        console.log(`Operação "${operator}" não é válida.`);
    }


    function doCalculator(operation) {
        if(operation) {
            number1 = 10;
            number2 = 30;
            console.log(showOperationMessage(operationSignal, number1, number2), operation(number1, number2));
        } else {
            showErrorMessage(operationSignal);
        }   
    }


    /*
    Nossa calculadora está pronta! Agora vamos testá-la:
    PASSO 1:
    - Declare 3 variáveis: "number1" e "number2", iniciando com valor zero, e
    "operationSignal", sem valor por enquanto.
    */
    let number1, number2, operationSignal;
    number1 = 0;
    number2 = 0;


    /*
    PASSO 2:
    Atribua à variável operationSignal o operador de soma, e declare uma
    variável chamada "sum", que receba a função "calculator", passando por
    parâmetro a variável que recebeu o sinal da operação.
    */
    operationSignal = '+';
    var sum = calculator(operationSignal);

    /*
    PASSO 3:
    "sum" agora é uma função, e, se o sinal correto não foi passado para a
    função "calculator", "sum" será false. Certifique-se de que "sum" não é
    "false", e então atribua às variáveis "number1" e "number2", dois números
    que serão os operandos da operação de soma.
    Após isso, mostre no console o resultado da operação, passando dois
    parâmetros para o método "log" de "console":
    - O primeiro será a mensagem da operação (usando a função criada acima);
    - O segundo, a função de soma, passando os dois operandos.
    - Se "sum" for "false", mostrar no console a mensagem de erro.
    */
   
   if(sum) {
        number1 = 10;
        number2 = 30;
        console.log(showOperationMessage(operationSignal, number1, number2), sum(number1, number2));
    } else {
        showErrorMessage(operationSignal);
    }   
    /*
    Repita desde o "PASSO 2" com as operações de subtração, multiplicação,
    divisão e resto. Crie variáveis com os nomes "subtraction",
    "multiplication", "division" e "mod".
    */
    var subtraction, multiplication, division;
   
    operationSignal = '$';
    subtraction = calculator(operationSignal); 
    doCalculator(subtraction);
    // if(subtraction) {
    //     number1 = 10;
    //     number2 = 30;
    //     console.log(showOperationMessage(operationSignal, number1, number2), subtraction(number1, number2));
    // } else {
    //     showErrorMessage(operationSignal);
    // }
    
    operationSignal = '*';
    multiplication = calculator(operationSignal);
    doCalculator(multiplication);
    
    
    operationSignal = '#';
    division = calculator(operationSignal);
    doCalculator(division);
    /*

    Repita o PASSO 2 novamente, mas passando um operador inválido, para ver se
    a mensagem de erro será mostrada no console.
    */
   operationSignal = '%';
   division = calculator(operationSignal);
   doCalculator(division);

   
}
