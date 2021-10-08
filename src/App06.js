import './App.css';

var salario_mensal = parseFloat(prompt("Sigite o salário mensal do funcionário: "));
var reajuste = parseFloat(prompt("Digite o percentual de reajuste do salário do funcionário: "));
var p_reajuste = reajuste/100;

function calc(a,b) {
   return (a * b) + a;
}

function App06() {
   return (
      <div className="App06">
         <h3><b>Enunciado:</b> Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário. </h3>
         <h4>Resolução:</h4>
         <p>O salário do funcionário é de R${salario_mensal}.</p>
         <p>O seu percentual de reajuste é de {reajuste}%.</p>
         <p>Logo, seu salário atualizado será: R${calc(salario_mensal,p_reajuste)}.</p>
      </div>
   );
}
export default App06;
