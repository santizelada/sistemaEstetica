// let openShopping = document.querySelector('.shopping')
// let closeShopping = document.querySelector('.closeShopping')
// let list = document.querySelector('.list')
// let list2 = document.querySelector('.list2')
// let listCard = document.querySelector('.listCard') 
// let body = document.querySelector('body')
// let total = document.querySelector('.total')
// let quantity = document.querySelector('.quantity')
// const video = document.querySelector('video');
// const playButton = document.getElementById('playButton');
// const volUpButton = document.getElementById('volUpButton');

function openNav(){
    document.getElementById("mobile-menu").style.width="100%"
}

function closeNav(){
    document.getElementById("mobile-menu").style.width="0%"
}

// window.addEventListener('scroll', () => {
//     var navbar = document.getElementById("navbar");
//     var section2 = document.querySelector(".section2");

//     // Altura desde la parte superior de la página hasta la parte superior de .section2
//     var section2Top = section2.offsetTop;

//     if (window.scrollY > section2Top) {
//         // Cuando el usuario se desplaza más allá de .section2, eliminamos la clase transparent-navbar
//         navbar.classList.remove('transparent-navbar');
//     } else {
//         // Cuando el usuario está por encima de .section2, agregamos la clase transparent-navbar
//         navbar.classList.add('transparent-navbar');
//     }
// });

// openShopping.addEventListener('click', ()=>{
//     body.classList.add('active')
// })
// closeShopping.addEventListener('click', ()=>{
//     body.classList.remove('active')
// })

// playButton.addEventListener('click', () => {
//     if (video.paused) {
//         video.play(); // Reproducir el video si está pausado
//     } else {
//         video.pause(); // Pausar el video si está reproduciendo
//     }
// });

// volUpButton.addEventListener('click', () => {
//     if (video.volume === 0) {
//         video.volume = 1; // Establecer el volumen al máximo si está silenciado
//     } else {
//         video.volume = 0; // Silenciar el video si no está silenciado
//     }
// });


async function fetchServicios() {
    const url = 'https://estetica-backend-5ltx.onrender.com/servicio/mostrar';

    try {
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error('No se pudo obtener los datos de la API');
        }

        const data = await respuesta.json();

        var container = document.getElementById('servicios-container');

        if (Array.isArray(data.data)) {
            // Array de imágenes
            const imagenes = [
                '../img/0903.png',
                '../img/aDabg1.png',
                '../img/aDabg2.png',
            ];

            data.data.forEach((service, index) => {
                var cardProducto = document.createElement('div');
                cardProducto.className = 'cardProducto';

                var image = document.createElement('img');
                // Asigna la imagen correspondiente según la posición en el array
                image.src = imagenes[index];

                var name = document.createElement('h3');
                name.textContent = service.name;
                name.className = 'title'; // Agrega la clase "title"

                var description = document.createElement('p');
                description.textContent = service.descripcion;
                description.className = 'description'; // Agrega la clase "description"

                var price = document.createElement('span');
                price.textContent = '$ ' + service.precio;
                price.className = 'price'; // Agrega la clase "price"

                var addButton = document.createElement('button');
                addButton.textContent = 'Agregar';
                addButton.className = 'itemBtn'; // Agrega la clase "itemBtn"
                // addButton.setAttribute('onClick', `addToCard(${index})`); // Agrega el evento onClick

                // Append elements to the card
                card.appendChild(image);
                card.appendChild(name);
                card.appendChild(description);
                card.appendChild(price);
                card.appendChild(addButton);

                // Append the card to the container
                container.appendChild(cardProducto);
            });
        } else {
            console.error('La respuesta de la API no contiene un array de servicios.');
        }
    } catch (error) {
        console.error('Hubo un error al obtener los datos de la API:', error);
    }
}

fetchServicios();




// function addToCard(key){
//     if(listCard[key] == null){
//         listCard[key] = products[key]
//         listCard[key].quantity = 1
//     }
//     reloadCard()

// }

// function reloadCard() {
//     listCard.innerHTML= ''
//     let count = 0
//     let totalPrice = 0
//     listCard.forEach((value, key) => {
//         totalPrice = totalPrice + value.price
//         count = count + value.quantity

//         if(value != null){
//             let newDiv = document.createElement('li')
//             newDiv.innerHTML = `
//             <div> <img src="${value.image}"> </div>
//             <div>${value.name}</div>
//             <div>US$${value.price.toLocaleString()}</div>
//             <div>${value.quantity}</div>
//             <div>
//                 <button class="buttonCard" onClick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//                 <button class="buttonCard" onClick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
//             </div>
//             `
//             listCard.appendChild(newDiv)
//         }
//     })
//     total.innerText = `$${totalPrice.toLocaleString()}`
//     quantity.innerText = count
// }


// function changeQuantity(key, quantity) {
//     if (quantity === 0) {
//         delete listCards[key];
//     } else {
//         listCards[key].quantity = quantity;
//     }

//     // Recalcular el precio total
//     let totalPrice = 0;
//     Object.values(listCards).forEach((item) => {
//         totalPrice += item.price * item.quantity;
//     });

//     // Actualizar el elemento 'total' con el nuevo precio total
//     total.innerText = `$${totalPrice.toLocaleString()}`;

//     // Actualizar el elemento del botón de checkout con el nuevo precio total
//     updateCheckoutButton(totalPrice);

//     // Llamar a reloadCard() después de actualizar el precio total
//     reloadCard();
// }

// // Función para actualizar el elemento del botón de checkout
// function updateCheckoutButton(totalPrice) {
//     // Supongamos que el botón de checkout tiene una clase "checkout-button"
//     const checkoutButton = document.querySelector('.checkout-button');

//     if (checkoutButton) {
//         checkoutButton.innerText = `Checkout - $${totalPrice.toLocaleString()}`;
//     }
    

// }

//     updateCheckoutButton()


// Wrap every letter in a span
// var textWrapper = document.querySelector('.ml12');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml12 .letter',
//     translateX: [40,0],
//     translateZ: 0,
//     opacity: [0,1],
//     easing: "easeOutExpo",
//     duration: 1200,
//     delay: (el, i) => 500 + 30 * i
//   }).add({
//     targets: '.ml12 .letter',
//     translateX: [0,-30],
//     opacity: [1,0],
//     easing: "easeInExpo",
//     duration: 1100,
//     delay: (el, i) => 100 + 30 * i
//   });