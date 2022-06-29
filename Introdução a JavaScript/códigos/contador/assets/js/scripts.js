const BTNINCREMENTAR = document.getElementById("btn_incrementar");
const BTNZERAR = document.getElementById("btn_zerar");
const BTNDECREMENTAR = document.getElementById("btn_decrementar");
const P = document.getElementById("contador");

var contador = 0;

P.innerHTML = contador;

BTNINCREMENTAR.addEventListener("click", function(){
    P.innerHTML = ++contador;
});
BTNZERAR.addEventListener("click", function(){
    P.innerHTML = contador = 0;
    
});

