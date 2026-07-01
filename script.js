const botao = document.getElementById("botaoTema");

botao.addEventListener("click", function () {

    document.body.classList.toggle("temaEscuro");

    if(document.body.classList.contains("temaEscuro")){
        botao.innerHTML = "Tema Claro";
    }else{
        botao.innerHTML = "Tema Escuro";
    }

});
