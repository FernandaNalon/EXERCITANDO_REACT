import './App.css';

var a = parseInt(prompt("Digite um valor: "));
var b = parseInt(prompt("Digite outro valor: "));

function soma() {
   return (a+b);
}
function sub() {
   return (a-b);
}
function div() {
   return (a/b);
}
function mult() {
   return (a*b);
}

function App01() {
   return (
      <div className="App01">
         <p>A soma dos dois valores é: {soma()}</p>
         <p>A subtração dos dois valores é: {sub()}</p>
         <p>A divisão dos dois valores é: {div().toFixed(2)}</p>
         <p>A multiplicação dos dois valores é: {mult()}</p>
      </div>
   );
}
export default App01;
