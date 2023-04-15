$(document).ready(function() {

    $('#telefone').mask('(00) 00000-00000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00.000-000');

    $('form').validate({
        
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true, 
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },

        messages: {
            nome: 'Por favor, insira seu nome',
            telefone: 'Por favor, insira seu número de telefone',
            cep: 'Por favor, insira seu CEP',
            cpf: 'Por favor, insira seu cpf',
            endereco: 'Por favor, insira seu endereço'   
        }

    });

});
