function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = 'block';

    (function fade() {
        var val = parseFloat(element.style.opacity);
        if (!((val += 0.1) > 1)) {
            element.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}

function fadeOut(element) {
    element.style.opacity = 1;

    (function fade() {
        if ((element.style.opacity -= 0.1) < 0) {
            element.style.display = 'none';
        } else {
            requestAnimationFrame(fade);
        }
    })();
}
function toggleIntegrantes() {
    var container = document.getElementsByClassName("integrantes")[0];
    var toggleButton = document.getElementById("toggleButton");

    if (container.style.display === "none" || container.style.display === "") {
        fadeIn(container);
        toggleButton.textContent = "Ver menos";
    } else {
        fadeOut(container);
        toggleButton.textContent = "Ver más";
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    let slider = document.querySelector('.slider-contenedor');
    let sliderItems = document.querySelectorAll('.slider-test');
    let contador = 1;
    let tamW = sliderItems[0].clientWidth;
    let intervalo = 5000;

    // Duplica los elementos para un deslizamiento continuo
    let sliderLength = sliderItems.length;
    for (let i = 0; i < sliderLength; i++) {
        let clone = sliderItems[i].cloneNode(true);
        slider.appendChild(clone);
    }

    function slides() {
        slider.style.transform = `translateX(${-tamW * contador}px)`;
        slider.style.transition = 'transform 0.5s ease-in-out';

        contador++;

        if (contador === sliderItems.length + 1) {
            setTimeout(() => {
                slider.style.transition = 'none';
                slider.style.transform = `translateX(0px)`;
                contador = 1;
            }, 500); // Ajusta el tiempo para que coincida con la duración de la transición
        }
    }

    setInterval(slides, intervalo);
});


