const openModalBtn = document.querySelector("#open-modal");
const closeModalBtn = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = ()=>{
    //o atributo toggle faz a troca da class, se tiver a classe hider ele tira, se não tiver a classe hider ele adiciona
    //Fazendo assim o efeito de abrir e fechar o tanto o modal quanto o fade
    [modal, fade].forEach((el)=> el.classList.toggle("hider"));
};

//Array com os principais elemento usado para abri e fechar o modal
//Para abrir vamos utilizar o openModalBtn, que fica desativado assim que modal aparece devido o z-index;
//A utilização do closeModalBtn e fade é para fechar o modal tanto clicando no botão fechar quanto clincando em qualquer lugar do fade
[openModalBtn, closeModalBtn, fade].forEach((el)=>{
    el.addEventListener("click", ()=> toggleModal())
});