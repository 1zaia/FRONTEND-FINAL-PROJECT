// Validação do formulário de cadastro
function validarFormulario() {
    var nome = document.getElementById('Nome').value.trim();
    var telefone = document.getElementById('Telefone').value.trim();
    var email = document.getElementById('Email').value.trim();
    var cpf = document.getElementById('CPF').value.trim();
    var senha = document.getElementById('Senha').value.trim();
    var confirmarSenha = document.getElementById('ConfirmarSenha').value.trim();

    var camposValidos = true;

    if (nome === '') {
        document.getElementById('Nome').classList.add('error');
        camposValidos = false;
    } else {
        document.getElementById('Nome').classList.remove('error');
    }

    var telefoneRegex = /^([0-9]{2}) [0-9]{5}-[0-9]{4}$/;
    if (!telefoneRegex.test(telefone)) {
        document.getElementById('Telefone').classList.add('error');
        camposValidos = false;
    } else {
        document.getElementById('Telefone').classList.remove('error');
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('Email').classList.add('error');
        camposValidos = false;
    } else {
        document.getElementById('Email').classList.remove('error');
    }

    var cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf)) {
        document.getElementById('CPF').classList.add('error');
        camposValidos = false;
    } else {
        document.getElementById('CPF').classList.remove('error');
    }

    if (senha === '' || senha !== confirmarSenha) {
        document.getElementById('Senha').classList.add('error');
        document.getElementById('ConfirmarSenha').classList.add('error');
        camposValidos = false;
    } else {
        document.getElementById('Senha').classList.remove('error');
        document.getElementById('ConfirmarSenha').classList.remove('error');
    }

    if (camposValidos) {
        alert('Formulário enviado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

// Formatação do CPF
document.getElementById('CPF').addEventListener('input', function () {
    var cpfInput = this;
    var cpf = cpfInput.value.replace(/\D/g, '');
    var formattedCPF = '';

    for (var i = 0; i < cpf.length; i++) {
        if (i === 3 || i === 6) {
            formattedCPF += '.';
        } else if (i === 9) {
            formattedCPF += '-';
        }
        formattedCPF += cpf[i];
    }

    cpfInput.value = formattedCPF;

    var cpfRegex = /^\d{11}$/;
    if (!cpfRegex.test(cpf)) {
        cpfInput.classList.add('error');
    } else {
        cpfInput.classList.remove('error');
    }
});

// Validação do endereço
function validarEndereco() {
    var street = document.getElementById('street').value.trim();
    var bairro = document.getElementById('bairro').value.trim();
    var number = document.getElementById('number').value.trim();
    var city = document.getElementById('city').value.trim();
    var state = document.getElementById('state').value.trim();
    var cep = document.getElementById('CEP').value.trim();

    var camposValidos = true;

    if (street === '') {
        document.getElementById('street').classList.add('error');
        camposValidos = false;
    } else {
        document.getElementById('street').classList.remove('error');
    }

    if (bairro === '') {
        document.getElementById('bairro').classList.add('error');
        camposValidos = false;
    } else {
        document.getElementById('bairro').classList.remove('error');
    }

    if (number === '') {
        document.getElementById('number').classList.add('error');
        camposValidos = false;
    } else {
        document.getElementById('number').classList.remove('error');
    }

    if (city === '') {
        document.getElementById('city').classList.add('error');
        camposValidos = false;
    } else {
        document.getElementById('city').classList.remove('error');
    }

    if (state === '') {
        document.getElementById('state').classList.add('error');
        camposValidos = false;
    } else {
        document.getElementById('state').classList.remove('error');
    }

    var cepRegex = /^\d{8}$/;
    if (!cepRegex.test(cep)) {
        document.getElementById('CEP').classList.add('error');
        camposValidos = false;
    } else {
        document.getElementById('CEP').classList.remove('error');
    }

    var resultadoElemento = document.getElementById('result');
    if (camposValidos) {
        resultadoElemento.textContent = 'Endereço cadastrado com sucesso!';
        resultadoElemento.style.color = 'green';
    } else {
        resultadoElemento.textContent = 'Por favor, preencha todos os campos corretamente.';
        resultadoElemento.style.color = 'red';
    }
}

// Validação de seleção de ingredientes
function CadastroFuncionario(event) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var ingredientChecked = false;

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            ingredientChecked = true;
        }
    });

    if (!ingredientChecked) {
        event.preventDefault();
        alert('Selecione pelo menos um ingrediente!');
    }
}

// Validação do pedido
function validarPedido() {
    var tamanho = document.querySelector('input[name="tamanho"]:checked');
    var sabor1 = document.getElementById('sabor1').value.trim();
    var sabor2 = document.getElementById('sabor2').value.trim();
    var bebida = document.getElementById('bebida').value.trim();
    var pagamento = document.getElementById('pagamento').value.trim();

    var camposValidos = true;

    if (!tamanho) {
        alert('Por favor, selecione o tamanho da pizza.');
        camposValidos = false;
    }

    if (sabor1 === '') {
        document.getElementById('sabor1').classList.add('error');
        camposValidos = false;
    } else {
        document.getElementById('sabor1').classList.remove('error');
    }

    if (sabor1 !== 'Manter sabor 1' && sabor2 === 'Manter sabor 1') {
        alert('Por favor, selecione um segundo sabor.');
        camposValidos = false;
    }

    if (bebida === '') {
        document.getElementById('bebida').classList.add('error');
        camposValidos = false;
    } else {
        document.getElementById('bebida').classList.remove('error');
    }

    if (pagamento === '') {
        document.getElementById('pagamento').classList.add('error');
        camposValidos = false;
    } else {
        document.getElementById('pagamento').classList.remove('error');
    }

    if (camposValidos) {
        alert('Pedido cadastrado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}
