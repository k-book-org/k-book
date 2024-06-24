
//nav
alert("hols")
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector('.nav');

  
    function handleScroll() {
        const scrollDistance = window.scrollY;

        if (scrollDistance > 0) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');

        }
    }

    window.addEventListener('scroll', handleScroll);

    const links = document.querySelectorAll('a[href^="#"]');

    for (const link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const href = this.getAttribute("href");
            const offsetTop = document.querySelector(href).offsetTop;

            scroll({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    }

    handleScroll(); // Ensure nav is styled correctly on load
});

  
  


