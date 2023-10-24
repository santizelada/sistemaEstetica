let openShopping = document.querySelector('.shopping')
let closeShopping = document.querySelector('.closeShopping')
let list = document.querySelector('.list')
let listPanel = document.querySelector('.listPanel')
let body = document.querySelector('body')
let total = document.querySelector('.total')
let quantity = document.querySelector('.quantity')

// ------------- CARD DESPLEGLABLE DE DERECHA A IZQUIERDA DONDE SE APILAN LOS PRODUCTOS SELECCIONADOS PARA LA
openShopping.addEventListener('click', () => {
    body.classList.add('active')
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active')
})

let data;

// ------- CARDS CARRITO ------
async function fetchServicios() {
    const url = 'https://estetica-backend-5ltx.onrender.com/servicio/mostrar';

    try {
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error('No se pudo obtener los datos de la API');
        }

        data = await respuesta.json();

        var container = document.getElementById('servicios-container');

        if (Array.isArray(data.data)) {
            // Array de imágenes
            const imagenes = [
                '../img/aDabg1.png',
                '../img/aDabg2.png',
                '../img/aDabg3.png',
                '../img/aDabg4.png',
                '../img/aDabg1.png',
                '../img/aDabg2.png',
                '../img/aDabg3.png',
                '../img/aDabg4.png',
                '../img/aDabg3.png',
                '../img/aDabg4.png',
                // Agrega más URLs de imágenes según sea necesario
            ];

            data.data.forEach((service, index) => {
                var card = document.createElement('div');
                card.className = 'containerCard'; // Agrega la clase para css

                var image = document.createElement('img');
                // Asigna la imagen correspondiente según la posición en el array
                image.src = imagenes[index];

                var name = document.createElement('h3');
                name.textContent = service.name;
                name.className = 'titleCard'; // Agrega la clase para css

                var description = document.createElement('p');
                description.textContent = service.descripcion;
                description.className = 'descriptionCard'; // Agrega la clase para css

                var price = document.createElement('span');
                price.textContent = '$ ' + service.precio;
                price.className = 'priceCard'; // Agrega la clase para css

                var addButton = document.createElement('button');
                addButton.textContent = 'Agregar';
                addButton.className = 'btnCard'; // Agrega la clase para css
                addButton.setAttribute('onClick', `addToCart(${index})`); // Agrega el evento onClick

                // Append elements to the card
                card.appendChild(image);
                card.appendChild(name);
                card.appendChild(description);
                card.appendChild(price);
                card.appendChild(addButton);

                // Append the card to the container
                container.appendChild(card);
            });
        } else {
            console.error('La respuesta de la API no contiene un array de servicios.');
        }
    } catch (error) {
        console.error('Hubo un error al obtener los datos de la API:', error);
    }
}
fetchServicios();


// ------Menu Hamburguesa   ------
function openNav() {
    document.getElementById("mobile-menu").style.width = "100%"
}
function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%"
}



// --------MENU AGREGA SERVICIOS AL CARRITO ------
// Obtén referencias a los elementos de carrito
const totalPanel = document.querySelector('.totalPanel');
const shoppingquantity = document.querySelector('.shoppingquantity');

// Agregar productos al carrito al hacer clic en los botones generados dinámicamente
const buttons = document.querySelectorAll('.btnCard');
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        addToCart(index); // Llamar a la función para agregar el producto
    });
});

function addToCart(productIndex) {
    // Obtener los detalles del producto (nombre, precio, etc.) usando productIndex
    const product = {
        name: data.data[productIndex].name,
        price: data.data[productIndex].precio,
        // Agrega otros detalles del producto según tus necesidades
    };

    // Crear elementos HTML para mostrar el producto en el carrito
    const productItem = document.createElement('li');
    productItem.innerHTML = `
        <div>${product.name}</div>
        <div>$${product.price.toLocaleString()}</div>
        <div>
            <button class="reservar-button" onClick="openModal('${data.data[productIndex]._id}', '${product.name}')">Reservar Fecha</button>
        </div>
    `;

    // Agregar el producto al carrito (listPanel)
    listPanel.appendChild(productItem);

    // Calcular el precio total y actualizar otros elementos
    let totalPrice = 0;
    const productItems = listPanel.querySelectorAll('li');
    productItems.forEach((item) => {
        const itemPrice = parseFloat(item.textContent.split('$')[1]);
        totalPrice += itemPrice;
    });

    // Actualizar el precio total
    totalPanel.textContent = `$${totalPrice.toFixed(3)}`;

    // Actualizar la cantidad de productos en el carrito
    shoppingquantity.textContent = productItems.length;

    // Cerrar el carrito si lo deseas
    body.classList.remove('active');
}

function openModal(turnoId, serviceName) {
    const modal = document.getElementById('myModal');
    modal.dataset.turnoId = turnoId;
    modal.dataset.serviceName = serviceName;

    const reservarButton = modal.querySelector('button[data-action="reservar"]');
    reservarButton.addEventListener('click', () => {
        confirmReservation();
    });

    modal.style.display = 'block';
}

function closeModal() {
    // Obtén una referencia al modal
    const modal = document.getElementById('myModal');

    // Cierra el modal
    modal.style.display = 'none';
}

//  --------MODAL SELECCIONAR UNA FECHA DEL SERVICIO AGREGADO AL CARRITO ------
function cancelReservation() {
    // Agrega aquí la lógica para cancelar la reserva
    closeModal();
}
function closeReservaExitosaModal() {
    const modalReservaExitosa = document.getElementById('modalReservaExitosa');
    modalReservaExitosa.style.display = 'none';
}

function confirmReservation() {
    const modal = document.getElementById('myModal');
    const selectTurnos = document.getElementById('selectTurnos');
    const turnoId = selectTurnos.value;  // Obtén el valor seleccionado en el elemento select
    const serviceName = modal.dataset.serviceName;
    const clienteId = "6535bc9d8edce133ba64c5f3"; // Id del cliente temporal

    // Verifica que se haya seleccionado un turno antes de hacer la reserva
    if (!turnoId) {
        alert("Por favor, selecciona un turno antes de reservar.");
        return;
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        turnoId: turnoId,
        clienteId: clienteId,
        otrosDetalles: serviceName
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://estetica-backend-5ltx.onrender.com/reservas/crear-reserva", requestOptions)
        .then(response => {
            if (response.ok) {
                // Si la respuesta es exitosa, muestra un mensaje de éxito
                closeModal();
                const modalReservaExitosa = document.getElementById('modalReservaExitosa');
                modalReservaExitosa.style.display = 'block';
            } else {
                // Si la respuesta no es exitosa, muestra un mensaje de error
                alert("Ocurrió un problema al crear la reserva. Por favor, inténtalo de nuevo más tarde.");
            }
        })
        .catch(error => {
            console.log('error', error);
            alert("Ocurrió un problema al crear la reserva. Por favor, inténtalo de nuevo más tarde.");
        });
}




async function fetchTurnos() {
    const url = 'https://estetica-backend-5ltx.onrender.com/disponer-turno/mostrar-turnos';

    try {
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error('No se pudo obtener los datos de la API');
        }

        const data = await respuesta.json();

        const selectTurnos = document.getElementById('selectTurnos');

        if (Array.isArray(data)) {
            // Filtra los turnos disponibles
            const turnosDisponibles = data.filter((turno) => turno.disponible === true);

            // Itera a través de los datos filtrados y agrega opciones al elemento select
            turnosDisponibles.forEach((turno) => {
                const option = document.createElement('option');
                option.value = turno._id; // Asigna el valor del turno (ajusta esto según tu estructura de datos)
                option.textContent = `Fecha: ${turno.dia_disponible}/${turno.mes_disponible}, Hora: ${turno.hora_disponible}:${turno.minute_disponible}`;
                selectTurnos.appendChild(option);
            });
        } else {
            console.error('La respuesta de la API no contiene un array de turnos.');
        }
    } catch (error) {
        console.error('Hubo un error al obtener los datos de la API:', error);
    }
}

fetchTurnos();



