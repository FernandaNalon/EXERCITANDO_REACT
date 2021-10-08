import './App.css';

var valor = parseInt(prompt("Digite um valor: "));

function ant() {
   var antecessor = valor-1;
   return (antecessor);
}
function suc() {
   return (valor+1);
}

function App02() {
   return (
      <div className="App02">
         <h3>Encontrando o sucessor e o antecessor</h3>
         <p>O valor antecessor ao digitado é: {ant()}</p>
         <p>O valor sucessor ao digitado é: {suc()}</p>
      </div>
   );
}
export default App02;