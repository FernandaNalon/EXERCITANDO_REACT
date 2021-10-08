import './App.css';

    var carros_vendidos = parseInt(prompt("Digite quantos carros o funcionário vendeu: "));
    var tot_vendas = parseFloat(prompt("Digite o valor total de suas vendas: R$"));
    var salario_fixo = parseFloat(prompt("Digite o salário fixo do funcionário: R$ "));
    var valor_por_carro = parseFloat(prompt("Digite o valor que o funcionário ganha por carro vendido: R$"));
    var comicao_carro = valor_por_carro*carros_vendidos;
    var comicao_vendas = tot_vendas*5/100;

function calc(a,b,c){
    return a+b+c;
}

function App08(){
    return (
        <div className="App08">
            <h3><b>Enunciado:</b> Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.</h3>
            <h4>Resolução:</h4>
            <p>O salário fixo do funcionário é de R${salario_fixo}.</p>
            <p>Sua comissão por ter vendido {carros_vendidos} carros é de R${comicao_carro} (tendo como valor: R${valor_por_carro} por carro).</p>
            <p>Tendo vendido R${tot_vendas}, o funcionário ganha 5%, sendo assim R${comicao_vendas}.</p>
            <p>Então, ao final do mês o funcionário ganhará R${calc(salario_fixo,comicao_vendas,comicao_carro)}.</p>
        </div>
    );
}
export default App08;