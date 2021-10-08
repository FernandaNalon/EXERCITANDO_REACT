import './App.css';

   var total_eleitores = parseInt(prompt("Digite o total de eleitores: "));
   var votos_brancos = parseInt(prompt("Digite o total de votos brancos: "));
   var votos_nulos = parseInt(prompt("Digite o total de votos nulos: "));
   var votos_validos = parseInt(prompt("Digite o total de votos válidos: "));

function calc_votos(a,b) {
   return (a * 100 / b);
}

function App05() {
   return (
      <div className="App05">
         <h3><b>Enunciado:</b> Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.</h3>
         <h4>Resolução:</h4>
         <p>Total de eleitores: {total_eleitores}</p>
         <p>Votos brancos: {votos_brancos} | O prencentual é de: {calc_votos(votos_brancos,total_eleitores).toFixed(2,2)}%</p>
         <p>Votos nulos: {votos_nulos} | O prencentual é de: {calc_votos(votos_nulos,total_eleitores).toFixed(2,2)}%</p>
         <p>Votos validos: {votos_validos} | O prencentual é de: {calc_votos(votos_validos,total_eleitores).toFixed(2,2)}%</p>
      </div>
   );
}
export default App05;
