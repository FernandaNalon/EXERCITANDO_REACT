import './App.css';

var n1 = parseFloat(prompt("Digite a primeira nota: "));
var n2 = parseFloat(prompt("Digite a segunda nota: "));
var n3 = parseFloat(prompt("Digite a terceira nota: "));

function media() {
    var mediaof = ((n1*2)+(n2*3)+(n3*5))/10;
    return (mediaof);
}

function App10() {
    return (
        <div className="App10">
            <h3><b>Enunciado:</b> Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. <br/>
            Fórmula para o cálculo da média final é: mediafinal = n1 * 2 + n2 * 3 + n3 * 5 / 10.</h3>
            <h4>Resolução:</h4>
            <p>Primeira nota do(a) aluno(a): {n1} (com peso 2). </p>
            <p>Segunda nota do(a) aluno(a): {n2} (com peso 3). </p>
            <p>Terceira nota do(a) aluno(a): {n3} (com peso 5). </p>
            <p>A media do(a) aluno(a) é: {media()}.</p>
        </div>
    );
}
export default App10;