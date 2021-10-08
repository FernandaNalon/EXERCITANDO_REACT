import './App.css';

var base = parseInt(prompt("Digite o valor da base: "));
var altura = parseInt(prompt("Digite o valor da altura: "));

function calc_area() {
   var area = base*altura;
   return (area);
}

function App03() {
   return (
      <div className="App03">
         <h3>Expressando a área de um retângulo</h3>
         <p>Com os valores digitados a área será: {calc_area()} cm²</p>
      </div>
   );
}
export default App03;