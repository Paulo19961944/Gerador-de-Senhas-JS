// Captura os elementos do HTML
const inputValue = document.getElementById("char"); // Input do HTML
const button = document.getElementById("btn"); // Botão para gerar senha
const resultElement = document.getElementById("result"); // Elemento que insere o resultado

// Adiciona evento ao botão
button.addEventListener("click", (event)  => {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*-+/^~{}[]"; // Conjunto de Caracteres Válidos
    const length = parseInt(inputValue.value); // Quantidade de Caracteres

    // Se for um número
    if (!isNaN(length)) {
        let result = ''; //  Variavel que vai armazenar a senha
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length)); // Enquanto for menor que o numero de caracteres desejados, então adicionar um caracter
        }
        resultElement.textContent = `A Senha gerada é:  ${result}`; // Exibe a Senha gerda no HTML
    } else {
        alert("Por favor, insira um número válido de caracteres."); // Caso naõ seja um número, exibir um alerta para o usuário
    }
});
