import './App.css';

    var graus_f = parseFloat(prompt("Digite a temperatura em graus Fahrenheit que deseja converter para Celsius: "));

function calc() {
    var graus_c = ((graus_f - 32) * 5) / 9;
    return (graus_c);
}

function App09() {
    return (
        <div className="App09">
            <h3><b>Enunciado:</b> Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius. Observação: Para testar se a sua resposta está correta saiba que 100°C = 212F. </h3>
            <h4>Resolução:</h4>
            <p>A temperatura {graus_f}° Fahrenheit, corresponde a {calc().toFixed(2)}° Celsius.</p>
        </div>
    );
}

export default App09;