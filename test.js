const saudacao = require('./hello');

const resultado = saudacao("Mundo");
const esperado = "Ola, Mundo!";

if (resultado !== esperado) {
  console.error(`FALHA: esperado "${esperado}", mas recebeu "${resultado}"`);
  process.exit(1);
}
console.log("Resultado:", resultado);
console.log("Esperado:", esperado);
console.log("Todos os testes passaram!");
