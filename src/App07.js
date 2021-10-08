import './App.css';

    var custo_fab  = parseFloat(prompt("Digite o custo de fábrica do carro: "));
    var calc_dist = custo_fab*28/100;
    var calc_imp = custo_fab*45/100;

function calc(a,b,c){
    return a+b+c;
}

function App07(){
    return (
        <div className="App07">
            <h3><b>Enunciado:</b> O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor. </h3>
            <h4>Resolução:</h4>
            <p>O custo da fabricação do carro é de R${custo_fab}.</p>
            <p>O valor do distribuidor a 28% é de: R${calc_dist}.</p>
            <p>O valor dos impostos a 45% é de: R${calc_imp}.</p>
            <p>Logo, o custo final do carro para o consumidor será: R${calc(custo_fab,calc_dist,calc_imp)}.</p>
        </div>
    );
}
export default App07;