const botaoTema = document.getElementById("botao-tema");
const body = document.body;

const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {
    body.classList.add("modo-escuro");
    botaoTema.textContent = "☀️ Modo Claro";
}

botaoTema.addEventListener("click", function () {

    body.classList.toggle("modo-escuro");

    if (body.classList.contains("modo-escuro")) {

        botaoTema.textContent = "☀️ Modo Claro";

        localStorage.setItem("tema", "escuro");

    } else {

        botaoTema.textContent = "🌙 Modo Escuro";

        localStorage.setItem("tema", "claro");
    }

});