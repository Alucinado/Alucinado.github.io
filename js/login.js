$('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

iniciar.addEventListener("click", function () {
    iniciar.classList.add("btn-login");

    setTimeout(function () {
        iniciar.classList.remove("btn-login");
    }, 300)

    if (nombre.value === "" || contraseña.value === "") {
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
            title: 'Ha iniciado sesión!',
            showConfirmButton: false,
            timer: 1800
        })

    }

})

crear.addEventListener("click", function () {
    crear.classList.add("btn-crear");

    setTimeout(function () {
        crear.classList.remove("btn-crear");
    }, 300)

    if (nombrecompleto.value === "" || numero.value === "" || correo.value === "" || contraseña2.value === "") {
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
            title: 'Se ha registrado con éxito!',
            showConfirmButton: false,
            timer: 1800
        })
    }

})

