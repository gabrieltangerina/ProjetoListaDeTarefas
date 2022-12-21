const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");


let criaLi = () =>{
    const li = document.createElement("li");
    return li;
}

inputTarefa.addEventListener("keypress", (e)=>{
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

let criaTarefa = (textoInput)=>{
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
}

document.addEventListener('click', (e)=>{
    el = e.target;
    
    if(el.classList.contains("btn-tarefa")){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})