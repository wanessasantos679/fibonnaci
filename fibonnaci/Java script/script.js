// Função para calcular a série de Fibonacci
function calcularFibonacci(n) {
    const fibonacci = [0, 1];  // Começo da série de Fibonacci

    // Calcular os próximos números da série até o número desejado
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    return fibonacci;
}

// Função para exibir o resultado
function exibirResultado() {
    const numElements = document.getElementById('numElements').value;  // Pegar o valor da entrada do usuário
    const fibonacciSeries = document.getElementById('fibonacciSeries');  // Elemento onde exibiremos a série

    // Verificar se a entrada é válida
    if (numElements < 1 || isNaN(numElements)) {
        fibonacciSeries.textContent = "Por favor, insira um número válido maior que 0!";
        return;
    }

    // Calcular e exibir a série de Fibonacci
    const resultado = calcularFibonacci(numElements);
    fibonacciSeries.textContent = resultado.join(', ');  // Exibir como uma lista separada por vírgulas
}

// Adicionar evento ao botão
document.getElementById('calculateBtn').addEventListener('click', exibirResultado);
