// Cierra el modal al hacer clic en el botón de cierre
function closeRegistroExito() {
    const modalRegister = document.getElementById('modalRegister');
    modalRegister.style.display = 'none';
}

function closeLoginExito() {
    const modalLogin = document.getElementById('modalLogin');
    modalLogin.style.display = 'none';
}

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // Obtener los valores del formulario
    let nombre = document.getElementById('registerName').value;
    let apellido = document.getElementById('registerLastName').value;
    let telefono = document.getElementById('registerPhone').value;
    let dni = document.getElementById('registerDNI').value;
    let email = document.getElementById('registerEmail').value;
    let password = document.getElementById('registerPassword').value;

    let data = {
        name: nombre,
        apellido: apellido,
        telefono: telefono,
        dni: dni,
        correo: email,
        pass: password
    };

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
    };

    fetch("https://estetica-backend-5ltx.onrender.com/usuario/register", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result); // Puedes dejar esta línea para depuración si lo deseas
            // Aquí muestra el modal de registro exitoso
            document.getElementById('modalRegister').style.display = 'block';
        })
        .catch(error => console.log('error', error));
});



document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let emailLogin = document.getElementById('loginEmail').value;
    let passwordLogin = document.getElementById('loginPassword').value;

    let data = {
        correo: emailLogin,
        pass: passwordLogin
    };

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
    };

    fetch("https://estetica-backend-5ltx.onrender.com/usuario/login", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log('logueo exitoso'); // Puedes dejar esta línea para depuración si lo deseas
            // Muestra el modal de inicio de sesión exitoso
            document.getElementById('modalLogin').style.display = 'block';
        })
        .catch(error => console.log('error', error));
});
