export function manejadorAcordion() {
  const acordiones = document.querySelectorAll("summary");

  for (let acordion of acordiones) {
    acordion.addEventListener("click", (e) => {
    for (let acordion2 of acordiones) {
      if (acordion2 != e.target) {
        acordion2.parentNode.removeAttribute("open");
      }
    }
    });
  }
}
