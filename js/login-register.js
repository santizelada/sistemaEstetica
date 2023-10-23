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
        .then(result => console.log(result))
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
        .then(result => console.log('logueo exitoso'))
        .catch(error => console.log('error', error));
});

