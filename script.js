const btnIncrementar$ = document.getElementById("btn_incrementar");
const btnDecrementar$ = document.getElementById("btn_decrementar");
const btnZerar$ = document.getElementById("btn_zerar");
const p$ = document.getElementById("contador");

let contador = 0;

p$.innerHTML = contador;

btnIncrementar$.addEventListener("click", function (){
    p$.innerHTML = ++contador;
});

btnDecrementar$.addEventListener("click", function (){
    p$.innerHTML = --contador;
});

btnZerar$.addEventListener("click", function (){
    p$.innerHTML = contador = 0;
});