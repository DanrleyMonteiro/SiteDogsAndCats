// ===== 1. MENU DO CELULAR =====
// Ao clicar no botão de três linhas, adicionamos ou removemos a classe "aberto".
const menuBotao = document.getElementById("menuBotao");
const menu = document.getElementById("menu");

menuBotao.addEventListener("click", function () {
  const aberto = menu.classList.toggle("aberto");
  menuBotao.setAttribute("aria-expanded", aberto);
});

// Fecha o menu depois de clicar em um link (útil no celular)
menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("aberto");
    menuBotao.setAttribute("aria-expanded", "false");
  });
});

// ===== 2. PERGUNTAS FREQUENTES (ACORDEÃO) =====
// Clicar na pergunta mostra a resposta; clicar de novo esconde.
const perguntas = document.querySelectorAll(".faq-pergunta");

perguntas.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const item = botao.parentElement;              // caixa da pergunta
    const resposta = item.querySelector(".faq-resposta");
    const estaAberto = item.classList.toggle("aberto");

    // Define a altura da resposta (0 = escondida)
    resposta.style.maxHeight = estaAberto ? resposta.scrollHeight + "px" : "0";
    botao.setAttribute("aria-expanded", estaAberto);
  });
});

// ===== 3. ROLAGEM SUAVE =====
// A rolagem suave já está no CSS (scroll-behavior: smooth),
// então os links internos (#secao) não precisam de código extra.

// ===== 4. ESPAÇOS DE IMAGEM =====
// Se a imagem ainda não existe na pasta "images", escondemos o ícone de
// imagem quebrada e o aviso "Espaço para imagem" continua visível.
document.querySelectorAll(".espaco-imagem img, .logo-universidade img").forEach(function (img) {
  function esconder() { img.style.display = "none"; }
  img.addEventListener("error", esconder);
  if (img.complete && img.naturalWidth === 0) { esconder(); }
});
