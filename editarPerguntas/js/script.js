const buttons = document.querySelectorAll('.button-container button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe 'button-active' de todos os botões
        buttons.forEach(btn => btn.classList.remove('button-active'));
        // Adiciona a classe 'button-active' ao botão clicado
        button.classList.add('button-active');
    });
});
