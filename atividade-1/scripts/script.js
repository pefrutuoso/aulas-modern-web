const relogio = document.querySelector("#relogio");
const data = document.querySelector("#data");
const botaoTema = document.querySelector("#botao-tema");
const html = document.querySelector("html");

function atualizarRelogio() {
  const agora = new Date();

  const horas = String(agora.getHours()).padStart(2, "0");
  const minutos = String(agora.getMinutes()).padStart(2, "0");
  const segundos = String(agora.getSeconds()).padStart(2, "0");

  relogio.textContent = `${horas}:${minutos}:${segundos}`;
}

function atualizarData() {
  const agora = new Date();

  const opcoes = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };

  data.textContent = agora.toLocaleDateString("pt-BR", opcoes);
}
// função para alterar o tema entre claro e escuro
function alternarTema() {
  const estaNoModoEscuro = html.classList.contains("modo-escuro");

  if (estaNoModoEscuro) {
    html.classList.remove("modo-escuro");
    html.classList.add("modo-claro");

    botaoTema.textContent = "🌙 Modo escuro";
  } else {
    html.classList.remove("modo-claro");
    html.classList.add("modo-escuro");

    botaoTema.textContent = "☀️ Modo claro";
  }
}

atualizarRelogio();
atualizarData();

setInterval(atualizarRelogio, 1000);

botaoTema.addEventListener("click", alternarTema);