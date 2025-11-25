document.querySelector('.login-form').addEventListener('submit', function(event) {
    // Impede o envio padrão do formulário
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Simulação de validação: verifica se os campos não estão vazios
    if (email && senha) {
        // Salva o estado de login e o email do usuário no localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loggedInUser', email);
        localStorage.setItem('loginTimestamp', new Date().getTime()); // Salva o timestamp atual

        alert('Login realizado com sucesso! Redirecionando...');
        window.location.href = 'home.html'; // Redireciona para a página inicial após o login
    }
});
