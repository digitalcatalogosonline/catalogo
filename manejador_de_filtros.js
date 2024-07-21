import { productos } from "./productos.js";
import { manejadorAcordion } from "./manejador_de_modales.js";

function cargarProductos() {
  const contenedor = document.querySelector(".products-container");
  contenedor.innerHTML = "";
  productos.forEach((producto) => {
    contenedor.innerHTML += `<div class="product-cart">
      <div class="image-container">
        <img
          src="${producto.foto}"
          alt=""
        />
      </div>
      <div class="info-container">
      <p>${producto.nombre}</p>
      <hr>
        <p>${producto.Precio}</p>
            <div class="details-container"><div><a href="https://wa.me/59225043?text=Hola me interesa comprar ${producto.nombre}(${producto.Precio})">Pedir a whatsapp</a></div><details><summary>Ver características</summary>${producto.características}</details>
      </div>
    </div>`;
  });
  manejadorAcordion();
}

const filtroTodos = document
  .querySelector(".filtro-todos")
  .addEventListener("click", cargarProductos);

const filtroLavadoras = document
  .querySelector(".filtro-lavadoras")
  .addEventListener("click", () => {
    const contenedor = document.querySelector(".products-container");
    contenedor.innerHTML = "";
    productos.forEach((producto) => {
      if (producto.categoria == "lavadoras") {
        contenedor.innerHTML += `<div class="product-cart">
   <div class="image-container">
          <img
            src="${producto.foto}"
            alt=""
          />
        </div>
        <div class="info-container">
        <p>${producto.nombre}</p>
      <hr>
          <p>${producto.Precio}</p>
      <div class="details-container"><div><a href="https://wa.me/59225043?text=Hola me interesa comprar ${producto.nombre}(${producto.Precio})">Pedir a whatsapp</a></div><details><summary>Ver características</summary>${producto.características}</details>
        </div>
      </div>`;
      }
    });
    manejadorAcordion();
  });
const filtroRefrigeradores = document
  .querySelector(".filtro-refrigeradores")
  .addEventListener("click", () => {
    const contenedor = document.querySelector(".products-container");
    contenedor.innerHTML = "";
    productos.forEach((producto) => {
      if (producto.categoria == "refrigeradores") {
        contenedor.innerHTML += `<div class="product-cart">
        <div class="image-container">
          <img
            src="${producto.foto}"
            alt=""
          />
        </div>
        <div class="info-container">
        <p>${producto.nombre}</p>
      <hr>
          <p>${producto.Precio}</p>
      <div class="details-container"><div><a href="https://wa.me/59225043?text=Hola me interesa comprar ${producto.nombre}(${producto.Precio})">Pedir a whatsapp</a></div><details><summary>Ver características</summary>${producto.características}</details>
        </div>
      </div>`;
      }
    });
    manejadorAcordion();
  });
const filtroOtros = document
  .querySelector(".filtro-otros")
  .addEventListener("click", () => {
    const contenedor = document.querySelector(".products-container");
    contenedor.innerHTML = "";
    productos.forEach((producto) => {
      if (producto.categoria == "otros") {
        contenedor.innerHTML += `<div class="product-cart">
       <div class="image-container">
          <img
            src="${producto.foto}"
            alt=""
          />
        </div>
        <div class="info-container">
        <p>${producto.nombre}</p>
      <hr>
          <p>${producto.Precio}</p>
      <div class="details-container"><div><a href="https://wa.me/59225043?text=Hola me interesa comprar ${producto.nombre}(${producto.Precio})">Pedir a whatsapp</a></div><details><summary>Ver características</summary>${producto.características}</details>
        </div>
      </div>`;
      }
    });
    manejadorAcordion();
  });

cargarProductos();
