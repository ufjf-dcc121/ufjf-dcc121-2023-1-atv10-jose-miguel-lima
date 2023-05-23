
        const form = document.forms.entrada;    //cria variável pro formulario
        form.addEventListener('submit', envia); //quando submit for acionado, chama a funcao envia

        function envia(evento) {
            evento.preventDefault();    //Não deixa enviar os dados para o backEnd, mantém no front
            console.log('Formulário enviado!');
        }

        