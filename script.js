// Alternar tema claro/escuro (ícone da lua)
const botaoTema = document.getElementById("tema");
if (localStorage.getItem("tema") === "claro") document.body.classList.add("claro");
botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("claro");
  localStorage.setItem("tema", document.body.classList.contains("claro") ? "claro" : "escuro");
});

// Marca o link do menu conforme a seção visível
const links = document.querySelectorAll(".menu a");
const secoes = [...links].map(a => document.querySelector(a.getAttribute("href")));
const observador = new IntersectionObserver(entradas => {
  entradas.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(a => a.classList.toggle("ativo", a.getAttribute("href") === "#" + e.target.id));
    }
  });
}, { rootMargin: "-40% 0px -50% 0px" });
secoes.forEach(s => s && observador.observe(s));