import store from "./store.js";

    const form = document.forms.entrada;    //cria variável pro formulario
    form.addEventListener('submit', envia); //quando submit for acionado, chama a funcao envia

    atualiza();

    function envia(evento) {
        evento.preventDefault();    //Não deixa enviar os dados para o backEnd, mantém no front
        console.log('Formulário enviado!');

        const n = form.valor.value;
        store.estado.push(n);
        form.valor.value = "";
        form.valor.focus();

        atualiza();
        }

    function atualiza() {
        const ol = document.querySelector('ol');
        ol.innerHTML = "";

        for(let i = 0; i < store.estado.length; i++){
            const li = document.createElement('li');
            li.textContent = store.estado[i];
            ol.appendChild(li);

        }
    
    }

        