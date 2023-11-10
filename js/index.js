const burger = document.getElementById("burguer-icon");
const container_link = document.getElementById("container_link")
const container_icons = document.getElementById("container-icons")
const nav_container = document.getElementById("nav-container")
const exit_btn = document.getElementById("container-icon-x")
const footer_nav = document.getElementById("footer-nav")
const archor_link = document.getElementsByClassName(".archor_link")
const buy_btn = document.getElementsByClassName("buy-btn")
const btn_hero = document.getElementById("btn-hero"
)

const icon_black = document.querySelectorAll(".icon__black")


let nav_logo = document.getElementById("img_logo_nav")
let moon_btn = document.querySelector(".bxs-moon");
let img_change = document.getElementById("img_change")
let cont_off = document.getElementById("seccion-off")

/* moon_btn.addEventListener("click", () => {
    if (moon_btn.classList.contains("bxs-sun")) {
        cont_off.style.backgroundImage = "url('/img/bg-offerts.png')";
        nav_logo.src = "./img/logo-web.png"
        moon_btn.classList.toggle("bxs-sun");
        document.documentElement.style.setProperty('--header-color', '#FAFAFA');
        document.documentElement.style.setProperty('--color-white', '#fff');
        document.documentElement.style.setProperty('--nav-font-color', '');
        document.documentElement.style.setProperty('--color-purple', '');
        document.documentElement.style.setProperty('--nav-font-color', '');
        document.documentElement.style.setProperty('--color-purple-hero', '');
        document.documentElement.style.setProperty('--nav-font-color', '');
        document.documentElement.style.setProperty('--color-black', '');
        document.documentElement.style.setProperty('--color-card-text-content', '');
        document.documentElement.style.setProperty('--color-purpleDark', '');
        document.documentElement.style.setProperty('--bg-card-color', '');
        document.documentElement.style.setProperty('--nav-scroll', '');
        document.documentElement.style.setProperty('--bg-color-footer', '');
        document.documentElement.style.setProperty('--bg-color-btn-footer', '');


    } else {
        cont_off.style.backgroundImage = "none";
        nav_logo.src = "./img/vs_icon.png"
        moon_btn.classList.toggle("bxs-sun");
        document.documentElement.style.setProperty('--header-color', 'linear-gradient(to right, #352F44, #232D3F, #232D3F,#352F44)');
        document.documentElement.style.setProperty('--color-white', '#6610f2');
        document.documentElement.style.setProperty('--nav-font-color', '#fff');
        document.documentElement.style.setProperty('--color-purple', '#6610f2');
        document.documentElement.style.setProperty('--color-purple-hero', '#8696FE');
        document.documentElement.style.setProperty('--nav-font-color', '#fff');
        document.documentElement.style.setProperty('--color-black', 'white');
        document.documentElement.style.setProperty('--color-card-text-content', '#adadad');
        document.documentElement.style.setProperty('--color-purpleDark', '#6610f2');
        document.documentElement.style.setProperty('--bg-card-color', 'lightgray');
        document.documentElement.style.setProperty('--nav-scroll', '#6610f2');
        document.documentElement.style.setProperty('--bg-color-footer', ' #21262dff');
        document.documentElement.style.setProperty('--bg-color-btn-footer', ' #202122');
    }
});
 */


const modoOscuroGuardado = localStorage.getItem('modoOscuro')

if (modoOscuroGuardado === 'activado') {
    activarModoOscuro();
}

function activarModoOscuro() {
    cont_off.style.backgroundImage = "none";
    nav_logo.src = "./img/vs_icon.png"
    moon_btn.classList.toggle("bxs-sun");
    document.documentElement.style.setProperty('--header-color', 'linear-gradient(to right, #352F44, #232D3F, #232D3F,#352F44)');
    document.documentElement.style.setProperty('--color-white', '#6610f2');
    document.documentElement.style.setProperty('--nav-font-color', '#fff');
    document.documentElement.style.setProperty('--color-purple', '#6610f2');
    document.documentElement.style.setProperty('--color-purple-hero', '#8696FE');
    document.documentElement.style.setProperty('--nav-font-color', '#fff');
    document.documentElement.style.setProperty('--color-black', 'white');
    document.documentElement.style.setProperty('--color-card-text-content', '#adadad');
    document.documentElement.style.setProperty('--color-purpleDark', '#6610f2');
    document.documentElement.style.setProperty('--bg-card-color', 'lightgray');
    document.documentElement.style.setProperty('--nav-scroll', '#6610f2');
    document.documentElement.style.setProperty('--bg-color-footer', ' #21262dff');
    document.documentElement.style.setProperty('--bg-color-btn-footer', ' #202122');
    localStorage.setItem('modoOscuro', 'activado');
}



function desactivarModoOscuro() {
    cont_off.style.backgroundImage = "url('/img/bg-offerts.png')";
    nav_logo.src = "./img/logo-web.png"
    moon_btn.classList.toggle("bxs-sun");
    document.documentElement.style.setProperty('--header-color', '#FAFAFA');
    document.documentElement.style.setProperty('--color-white', '#fff');
    document.documentElement.style.setProperty('--nav-font-color', '');
    document.documentElement.style.setProperty('--color-purple', '');
    document.documentElement.style.setProperty('--nav-font-color', '');
    document.documentElement.style.setProperty('--color-purple-hero', '');
    document.documentElement.style.setProperty('--nav-font-color', '');
    document.documentElement.style.setProperty('--color-black', '');
    document.documentElement.style.setProperty('--color-card-text-content', '');
    document.documentElement.style.setProperty('--color-purpleDark', '');
    document.documentElement.style.setProperty('--bg-card-color', '');
    document.documentElement.style.setProperty('--nav-scroll', '');
    document.documentElement.style.setProperty('--bg-color-footer', '');
    document.documentElement.style.setProperty('--bg-color-btn-footer', '');
    localStorage.setItem('modoOscuro', 'desactivado');
}

moon_btn.addEventListener("click", () => {
    if (moon_btn.classList.contains("bxs-sun")) {
        desactivarModoOscuro();
    } else {
        activarModoOscuro();
    }
});



window.sr = ScrollReveal();
sr.reveal('.hero-container-text', {
    duration: 1500,
    easing: "ease-out",
    origin: 'left',
    distance: "100%",
    interval: 200,
    reset: false,
    mobile: 'false'
})



sr.reveal('.container-content-text', {
    duration: 1000,
    origin: 'right',
    easing: "ease-out",
    reset: false,
    distance: '50%',
    mobile: 'false'
})



sr.reveal('.container-img-form', {
    duration: 1200,
    origin: 'left',
    easing: "ease-in-out",
    reset: false,
    distance: '250px',
    mobile: 'false'
})

sr.reveal('.container-form', {
    duration: 1200,
    origin: 'right',
    easing: "ease-in-out",
    reset: false,
    distance: '250px',
    mobile: 'false'
})


sr.reveal('.email', {
    duration: 1250,
    origin: 'left',
    easing: "ease-in-out",
    reset: true,
    distance: '250px',
    mobile: 'false'
})

sr.reveal('.number', {
    duration: 1250,
    origin: 'right',
    easing: "ease-in-out",
    reset: true,
    distance: '250px',
    mobile: 'false'
})



sr.reveal('.icon-ft-item', {
    duration: 800,
    origin: 'bottom',
    easing: "ease-out",
    reset: true,
    distance: '250px',
    interval: 200,
    mobile: 'false'
})








/* const observer = new IntersectionObserver((entrada) => {
    entrada.forEach((entra) => {
        if (entra.isIntersecting) {
            entra.target.classList.add("show")
        } else {
            entra.target.classList.remove("show")
        }
    })
});



const hidden_elements = document.querySelectorAll(".container-img")
hidden_elements.forEach((el) => observer.observe(el)) */





btn_hero.addEventListener("click", function () {
    btn_hero.classList.add("icon-scale")
    setTimeout(() => {
        btn_hero.classList.remove("icon-scale")
    }, 100);
})

const icon_down = document.getElementById("icon_down")

window.addEventListener('scroll', function () {
    const link_icon = document.querySelectorAll(".bx")

    var scrolled = window.scrollY > 50;

    if (scrolled) {
        link_icon.forEach(function (link) {
            link.style.color = 'white';
            icon_down.style.color = " white";
            if (window.innerWidth <= 900) {
                icon_black.forEach(ico_black => {
                    ico_black.style.color = "black"
                });
            } else {
                icon_black.forEach(ico_black => {
                    ico_black.style.color = "white"
                });
            }
        });
    } else {
        link_icon.forEach(function (link) {
            link.style.color = '';
            icon_down.style.color = "";
            icon_black.forEach(ico_black => {
                ico_black.style.color = ""
            });
        });
    }
});


/* let clicked = false
if (icon_down.addEventListener("click", () => {
    clicked = true
    if (clicked === true) {
        container_icons.style.top = "77px"
        container_icons.style.opacity = 1;
        container_icons.style.visibility = "visible"
    }
})) */
container_icons.style.opacity = "";
container_icons.style.visibility = ""

icon_down.addEventListener("click", () => {
    let top_actual = parseInt(window.getComputedStyle(container_icons).left)
    if (top_actual < 0) {
        container_icons.style.left = "40px";
        container_icons.style.opacity = 1;
        container_icons.style.visibility = "visible"
    } else {
        setTimeout(() => {
            container_icons.style.opacity = "";
            container_icons.style.visibility = ""
        }, 100);
        setTimeout(() => {
            container_icons.style.left = "";
        }, 100);
    }
})

window.addEventListener('scroll', function () {
    var navLinks = document.querySelectorAll('.archor_link');

    var scrolled = window.scrollY > 50;

    if (scrolled) {
        navLinks.forEach(function (link) {
            link.style.color = 'white';
        });
    } else {
        navLinks.forEach(function (link) {
            link.style.color = '';
        });
    }
});



let isScrolled = false;

window.addEventListener('scroll', () => {
    if (window.scrollY > 0 && !isScrolled) {
        nav_container.classList.add('scrolled');
        isScrolled = true;
    } else if (window.scrollY === 0 && isScrolled) {
        nav_container.classList.remove('scrolled');
        isScrolled = false;
    }
});




const carousels = document.querySelectorAll('.container-shoes');

carousels.forEach(carousel => {
    const cardContainer = carousel.querySelector('.card-container');
    const cardItems = carousel.querySelectorAll('.card-item');
    const cardWidth = cardItems[0].offsetWidth * 3.32; // Ancho de dos tarjetas
    const itemsPerPage = 3.3; // Mostrar dos tarjetas a la vez
    let currentIndex = 0;

    function updateCardPosition() {
        cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    carousel.querySelector('.fa-arrow-right').addEventListener('click', function () {
        const totalCardItems = cardContainer.querySelectorAll('.card-item').length;
        const maxIndex = Math.floor(totalCardItems / itemsPerPage) - 1;

        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCardPosition();
        } else {
            console.log("No hay más elementos para mostrar");
        }
    });

    carousel.querySelector('.fa-arrow-left').addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCardPosition();
        } else {
            console.log("Estás en el primer conjunto de elementos");
        }
    });

    // Llama a updateCardPosition() al cargar la página para establecer la posición inicial
    updateCardPosition();
});



const cardContainer = document.getElementById("card-container")







const heartIcons = document.querySelectorAll('.heart-icon');

heartIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        if (icon.classList.contains('fa-regular')) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
            icon.classList.add("vibrar")
            icon.style.color = "red"
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: 'Añadido a Favoritos'
            })
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
            icon.classList.add("vibrar")
            icon.style.color = "black"
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'error',
                title: 'Eliminado de Favoritos'
            })
        }
        setTimeout(() => {
            icon.classList.remove("vibrar")
        }, 200);
    });
});



const typed = new Typed('.typed', {
    strings: [
        '<i class="zapatilla">Jordan 4 AIRMAX</i>',
        '<i class="zapatilla">Force 1 low OG</i>',
        '<i class="zapatilla">Jordan OREO Retro</i>',
        '<i class="zapatilla">Jordan HIGH University OG</i>'
    ],
    typeSpeed: 75,
    startDelay: 1500,
    backSpeed: 75,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
});

window.addEventListener("load", () => {
    const contenedor_loader = document.getElementById("contenedor-loader")
    contenedor_loader.style.opacity = 0
    contenedor_loader.style.visibility = "hidden"
})



burger.addEventListener("click", function () {
    burger.classList.add("icon-scale")
    burger.style.color = "#797979"
    setTimeout(() => {
        burger.classList.remove("icon-scale")
        burger.style.color = "black"
    }, 130);
})

exit_btn.addEventListener("click", function () {
    exit_btn.classList.add("icon-scale")

    setTimeout(() => {
        exit_btn.classList.remove("icon-scale")
    }, 130);
})




burger.addEventListener("click", function () {
    /*     container_link.style.visibility = "visible"
        container_link.style.opacity = 1 */
    /*     nav_container.style.position = "static" */
    container_link.style.left = 0
    setTimeout(() => {
        /*         container_icons.style.visibility = "visible"
                container_icons.style.opacity = 1 */
        footer_nav.style.opacity = 1
        footer_nav.style.visibility = "visible"
    }, 300);
})


exit_btn.addEventListener("click", function () {
    container_link.removeAttribute('style')
    container_icons.removeAttribute('style')
    footer_nav.removeAttribute('style')

    container_link.removeAttribute('style')

    container_icons.style.display("none")
    footer_nav.style.display("none")
    setTimeout(() => {
        container_icons.removeAttribute('style')
    }, 10);
})


const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const txt_area = document.getElementById("txt_area")
const enviar = document.getElementById("enviar")



function clear() {
    nombre.value = "";
    email.value = "";
    txt_area.value = "";
}

enviar.addEventListener("click", function () {
    if (nombre.value === "" || email.value === "" || txt_area.value === "") {
        Swal.fire({
            icon: 'error',
            title: 'Rellene todos los campos.',
            showConfirmButton: false,
            timer: 1800
        })
    } else {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Solicitud Enviada',
            showConfirmButton: false,
            timer: 1800
        })
    }
    clear();
})

const egg = document.getElementById("easter-egg")

egg.addEventListener("click", function () {
    Swal.fire({
        title: 'Ganaste 100$ 💸💸💸',
        text: 'Reclamalos ya, no pierdas esta oportunidad de oro',
        imageUrl: './img/alert-img.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        backdrop: `
    rgba(0,0,123,0.4)
    url("/img/PYh.gif")
    left top
    no-repeat`
    })
})