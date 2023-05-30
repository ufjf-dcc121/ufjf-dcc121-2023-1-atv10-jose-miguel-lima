    const form = document.forms.entrada;    //cria variável pro formulario
    form.addEventListener('submit', envia); //quando submit for acionado, chama a funcao envia

    let estado = 0;

    function envia(evento) {
        evento.preventDefault();    //Não deixa enviar os dados para o backEnd, mantém no front
        console.log('Formulário enviado!');
        estado++;
        atualiza();
        }

    function atualiza() {
        const ol = document.querySelector('ol');
        ol.innerHTML = `<li>${estado}</li>`;
    
    }

        