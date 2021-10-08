import './App.css';

var idade_anos = parseInt(prompt("Digite quantos anos você tem: "));
var idade_meses = parseInt(prompt("Digite quandos meses tem desde seu aniversário: "));
var idade_dias = parseInt(prompt("Digite quantos dias tem desde o dia de seu aniversário: "));

function calc_dias() {
   var calc_anos = (idade_anos * 365);
   var calc_meses = (idade_meses * 30);
   var idade = calc_anos + calc_meses + idade_dias;
   return (idade);
   
}

function App04() {
   return (
      <div className="App04">
         <h3><b>Enunciado:</b> Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.</h3>
         <h4>Resolução:</h4>
         <p>A sua idade expressa apenas em dias é igual a: {calc_dias()}</p>
      </div>
   );
}
export default App04;