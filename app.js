/*
Protocolo Http

Faz uma requisição Http e o servidor responde é uma resposta Http

Existem metodos Htttp 

GET - o GET normalmente deseja obter alguma coisa enviando algo, para um servidor(POST)


GET = Voce deseja obter um recurso do servidor.
POST = Voce usa para enviar dados para o servidor, como o GitHub
PUT = Utilizado quando se deseja modificar um dado do servidor
DELETE = Utiliza-se para deletar um dado
PATCH = Quando voce deseja fazer uma modificação no documento ja no servidor.

Mensagens HTTP

- O Header sempre vai ter, é a cabeça do documento
- Payloud é quando você quer receber algum dado do servidor
- URL do site é o HOST

Como seria a resposta da requisição HTTP

- O codigo 200, é quando a pagina foi carregada corretamente
- O codigo 201, é usado quando se faz alguma modificação no servidor
- Servidor Apache(nao sei oque é isso)
- O codigo 1XX, geralmente so contem informacao
- O codigo de sucesso 2XX é mensagem de sucesso
- O codigo de redirecionamento 3XX
- O codigo de erro 4XX Not found muito famoso, buscou rescurso que nao existe
- O Erro do servidor 5XX, as vezes o servidor esta em manutenção

HTTPS - É um HTTp seguro ele é novo e vem sendo usado muito  é uma nova forma de criptografia usada atualmente.


*/



// const { Console } = require("console");
// const prompt = require("readline-sync");

// let saldo = Number(prompt.question("Qual é o seu saldo?"));

// while (saldo < 0) {
//     saldo = Number (
//         prompt.question("Saldo inválido! Por favor, informe novamente: ")
//     )
// }


// console.log(saldo)




// const randomNumber = parseInt(Math.random() * 10)

// let userNumber = Number(prompt.question("Informe um numero entre 0 e 10: "))

// console.log(randomNumber);


// let contador = 0;

// while(contador < 5) {
//  console.log(contador);

//  if(contador === 2) {
//     continue
//  }
//     console.log("Depois do if...");

// }


// while (true) {
//    console.log('Ola mundo')
// }