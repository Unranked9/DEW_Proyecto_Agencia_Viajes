document.addEventListener('DOMContentLoaded', () => {

      // Slider de banners con dots//
const dots = document.querySelectorAll('.dot');
const slidesContainer = document.querySelector('.slidess');
let currentIndex = 0;

function goToSlide(index) {
currentIndex = index;
const slideWidth = document.querySelector('.slider-container').clientWidth;
slidesContainer.style.transform = `translateX(-${slideWidth * index}px)`;
dots.forEach(dot => dot.classList.remove('active'));
dots[index].classList.add('active');
}

window.goToSlide = goToSlide; 

      // Carrusel de "Lo más destacado"//
const slides = document.querySelectorAll('.slide');
const slidesPorPagina = 4;
const totalPaginas = Math.ceil(slides.length / slidesPorPagina);
let paginaActual = 1;

const track = document.getElementById('sliderTrack');

function cambiarPagina(pagina) {
if (pagina === 'prev') {
if (paginaActual > 1) paginaActual--;} 
else if (pagina === 'next') {
if (paginaActual < totalPaginas) paginaActual++;} 
else {paginaActual = pagina;}

const slideAncho = slides[0].offsetWidth;
const offset = (paginaActual - 1) * slideAncho * slidesPorPagina;
track.style.transform = `translateX(-${offset}px)`;

for (let i = 1; i <= totalPaginas; i++) 
{const btn = document.getElementById('btn' + i);
if (btn) {btn.classList.toggle('active', i === paginaActual);}}
}

window.cambiarPagina = cambiarPagina; 
cambiarPagina(1);

     // Slider responsivo (botones flechas izquierda/derecha)//
const totalSlides = slides.length;
function mover(direccion) {
const slidesVisible = window.innerWidth < 480 ? 1 : window.innerWidth < 768 ? 2 : 4;
const maxIndex = totalSlides - slidesVisible;
currentIndex += direccion;

if (currentIndex < 0) currentIndex = 0;
if (currentIndex > maxIndex) currentIndex = maxIndex;
const slideWidth = track.querySelector('.slide').offsetWidth;
track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

       // Leer más / Leer menos en recomendaciones//
const botonesLeerMas = document.querySelectorAll('.leer-mas');
botonesLeerMas.forEach(boton => {
boton.addEventListener('click', () => {
const tarjeta = boton.closest('.reco-card');
const corto = tarjeta.querySelector('.texto-corto');
const completo = tarjeta.querySelector('.texto-completo');

const estaVisible = completo.style.display === "inline";
completo.style.display = estaVisible ? "none" : "inline";
corto.style.display = estaVisible ? "inline" : "none";
boton.textContent = estaVisible ? "Leer más" : "Leer menos";
});
});

        // Recomendaciones scroll horizontal//
const slider = document.getElementById("slider");

window.scrollIzquierda = () => {
slider.scrollBy({ left: -300, behavior: "smooth" });
}

window.scrollDerecha = () => {
slider.scrollBy({ left: 300, behavior: "smooth" });
}
});

