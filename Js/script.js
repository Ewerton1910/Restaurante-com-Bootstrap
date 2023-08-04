$(document).ready(function(){
    
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },

        messages:{
            nome: 'Insira um nome !',
            email: 'Insira um email !',
            mensagem: 'Por favor, insira uma mensagem !'
        }
    })

});

