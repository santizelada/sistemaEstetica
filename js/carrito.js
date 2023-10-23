let openShopping = document.querySelector('.shopping')
let closeShopping = document.querySelector('.closeShopping')
let list = document.querySelector('.list')
let listPanel = document.querySelector('.listPanel') 
let body = document.querySelector('body')
let total = document.querySelector('.total')
let quantity = document.querySelector('.quantity')

// ------------- CARD DESPLEGLABLE DE DERECHA A IZQUIERDA DONDE SE APILAN LOS PRODUCTOS SELECCIONADOS PARA LA
openShopping.addEventListener('click', ()=>{
    body.classList.add('active')
})
closeShopping.addEventListener('click', ()=>{
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



function openNav(){
    document.getElementById("mobile-menu").style.width="100%"
}
function closeNav(){
    document.getElementById("mobile-menu").style.width="0%"
}




// Obtén referencias a los elementos de carrito
const totalPanel = document.querySelector('.totalPanel');
const shoppingquantity = document.querySelector('.shoppingquantity');

// ...

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
                    <div> <img src="${product.image}"> </div>
                    <div>${product.name}</div>
                    <div>$${product.price.toLocaleString()}</div>
                    <div>
                    <button class="buttonCard" onClick="product.id(${quantity - 1})">-</button>
                    <button class="buttonCard" onClick="product.id(${quantity + 1})">+</button>
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
    totalPanel.textContent = `$${totalPrice.toFixed(2)}`;

    // Actualizar la cantidad de productos en el carrito
    shoppingquantity.textContent = productItems.length;

    // Cerrar el carrito si lo deseas
    body.classList.remove('active');
}


