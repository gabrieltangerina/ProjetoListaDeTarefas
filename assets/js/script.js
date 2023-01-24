const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");


let criaLi = () =>{
    const li = document.createElement("li");
    return li;
}

let limpaInput=()=>{
    inputTarefa.value = "";
    inputTarefa.focus();
}

let criaBotaoApagar = (li) =>{
    li.innerText += ' ';
    const botaoApagar = document.createElement("button");
    botaoApagar.innerText = "Apagar";
    botaoApagar.setAttribute("class", "apagar");
    li.appendChild(botaoApagar);
}

let criaTarefa = (textoInput)=>{
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

let salvarTarefas = () =>{
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

let adicionaTarefasSalvas = ()=>{
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();

inputTarefa.addEventListener("keypress", (e)=>{
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

document.addEventListener('click', (e)=>{
    el = e.target;
    
    if(el.classList.contains("btn-tarefa")){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }

    if(el.classList.contains("apagar")){
        el.parentElement.remove();
        salvarTarefas();
    }
})

// Criar uma forma de poder adicionar tarefas antes ou depois de algum elemento selecionado.