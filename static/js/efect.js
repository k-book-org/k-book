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
