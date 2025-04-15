document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nome = document.querySelector("#firstname");
    const sobrenome = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const celular = document.querySelector("#number");
    const senha = document.querySelector("#password");
    const confirmarSenha = document.querySelector("#cpassword");
    const botao = document.querySelector(".continue-button button");
  
    // Máscara de celular
    celular.addEventListener("input", function () {
      let valor = celular.value.replace(/\D/g, "");
  
      if (valor.length > 11) valor = valor.slice(0, 11);
  
      valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
      valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
  
      celular.value = valor;
    });
  
    // Validação do formulário
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      if (
        !nome.value ||
        !sobrenome.value ||
        !email.value ||
        !celular.value ||
        !senha.value ||
        !confirmarSenha.value
      ) {
        alert("Por favor, preencha todos os campos.");
        return;
      }
  
      if (senha.value !== confirmarSenha.value) {
        alert("As senhas não coincidem.");
        return;
      }
  
      alert("Cadastro realizado com sucesso!");
      form.reset();
    });
  });
  