import {adicionar, getItens, remover} from "./store.js";     //importa store.js



    const form = document.forms.entrada;    //cria variável pro formulario
    form.addEventListener('submit', envia); //quando submit for acionado, chama a funcao envia
    form.remover.addEventListener('click', remove);

    atualiza(); 
    
    function remove() {
        console.log("Remove clickado!");
        remover();
        atualiza();
    }

    function envia(evento) {
        evento.preventDefault();    //Não deixa enviar os dados para o backEnd, mantém no front
        console.log('Formulário enviado!');

        const n = form.valor.value;
        adicionar(n);   //diz ele q todo array é pilha
        form.valor.value = "";
        form.valor.focus();     //voltar cursor
        

        atualiza();
        }

    function atualiza() {
        const ol = document.querySelector('ol');
        ol.innerHTML = "";
        const itens = getItens();

        for(let i = 0; i < itens.length; i++){      //um for para o tamanho do vetor de getItens()
            const li = document.createElement('li');    //cria 'li'
            li.textContent = itens[i];
            ol.appendChild(li);

        }

        itens.push('Boom!');
    
    }


        