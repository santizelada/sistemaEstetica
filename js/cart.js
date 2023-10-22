let openShopping = document.querySelector('.shopping')
let closeShopping = document.querySelector('.closeShopping')
let list = document.querySelector('.list')
let list2 = document.querySelector('.list2')
let listCard = document.querySelector('.listCard') //cuidado con COMILLAS COMPUESTAS. EL VIDEO USA COMILLAS SIMPLEEEEEEEEEEEEES
let body = document.querySelector('body')
let total = document.querySelector('.total')
let quantity = document.querySelector('.quantity')

const video = document.querySelector('video');
const playButton = document.getElementById('playButton');
const volUpButton = document.getElementById('volUpButton');




















/* --------------------------------------- Scroll Event Detection System -------------------------*/

// const navbar = document.querySelector('header')

// document.addEventListener('scroll', () => {
//     if (window.scrollY = 0){
//         navbar.classList.add('transparent-navbar')

//     } else if (window.scrollY > 0){
//         navbar.classList.remove('transparent-navbar')
//     }
//     else {
//         navbar.classList.remove('transparent-navbar')

//     }
// })

window.addEventListener('scroll', () => {
    var navbar = document.getElementById("navbar");
    var section2 = document.querySelector(".section2");

    // Altura desde la parte superior de la página hasta la parte superior de .section2
    var section2Top = section2.offsetTop;

    if (window.scrollY > section2Top) {
        // Cuando el usuario se desplaza más allá de .section2, eliminamos la clase transparent-navbar
        navbar.classList.remove('transparent-navbar');
    } else {
        // Cuando el usuario está por encima de .section2, agregamos la clase transparent-navbar
        navbar.classList.add('transparent-navbar');
    }
});















openShopping.addEventListener('click', ()=>{
    body.classList.add('active')
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active')
})



playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play(); // Reproducir el video si está pausado
    } else {
        video.pause(); // Pausar el video si está reproduciendo
    }
});

volUpButton.addEventListener('click', () => {
    if (video.volume === 0) {
        video.volume = 1; // Establecer el volumen al máximo si está silenciado
    } else {
        video.volume = 0; // Silenciar el video si no está silenciado
    }
});




let products = [
    {
        id: 1,
        name: 'Rostro',
        image: '../img/bg1.png',
        price: 1200
    },
    {
        id: 2,
        name: 'Bozo',
        image: '../img/aDabg1.png',
        price: 500
    }, 
    {
        id: 3,
        name: 'Pierna Completa',
        image: '../img/jlByThePool2.png',
        price: 2500
    },
    {
        id: 4,
        name: 'Cuerpo completo',
        image: '../img/jlByThePool3.png',
        price: 6000
    },
    {
        id: 5,
        name: 'Barba',
        image: '../img/jlawWindow.jpg',
        price: 1000
    },
    {
        id: 6,
        name: 'Barba y bozo',
        image: '../img/jlawWindow.jpg',
        price: 1300
    },
    {
        id: 7,
        name: 'Hombros',
        image: '../img/jlawWindow.jpg',
        price: 134156416500
    },
    {
        id: 8,
        name: 'Axilas',
        image: '../img/bg4.png',
        price: 1200
    },
    {
        id: 9,
        name: 'Brazo completo',
        image: '../img/jlawOnCouch2.png',
        price: 1800
    },
    {
        id: 10,
        name: 'Abdomen y pecho',
        image: '../img/jlawOnCouch2.png',
        price: 2000
    },
    {
        id: 11,
        name: 'Espalda',
        image: '../img/jlawOnCouch2.png',
        price: 1800
    },
    {
        id: 12,
        name: 'Pelvis',
        image: '../img/jlawOnCouch2.png',
        price: 1500
    },
    {
        id: 13,
        name: 'Tira de cola',
        image: '../img/jlawOnCouch2.png',
        price: 700
    },
    {
        id: 14,
        name: 'Cavado completo ',
        image: '../img/jlawOnCouch2.png',
        price: 2000,
    },

]

let combos = [
    {
        id: 15,
        name: 'Rostro',
        image: '../img/bg1.png',
        price: 1200
    },
    {
        id: 16,
        name: 'Bozo',
        image: '../img/aDabg1.png',
        price: 500
    }, 
    {
        id: 17,
        name: 'Pierna Completa',
        image: '../img/jlByThePool2.png',
        price: 2500
    },
    {
        id: 18,
        name: 'Cuerpo completo',
        image: '../img/jlByThePool3.png',
        price: 6000
    },
    {
        id: 19,
        name: 'Barba',
        image: '../img/jlawWindow.jpg',
        price: 1000
    },

]

let listCards = []
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div')
        newDiv.classList.add('item')
        newDiv.innerHTML = `
        <img src="${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">$${value.price.toLocaleString()}</div>
        <button class="itemBtn" onClick="addToCard(${key})">Agregar</button>

        `
        list.appendChild(newDiv)
    })

    // combos.forEach((value, key)=>{
    //     let newDiv = document.createElement('div')
    //     newDiv.classList.add('item')
    //     newDiv.innerHTML = `
    //     <img src="${value.image}"/>
    //     <div class="title">${value.name}</div>
    //     <div class="price">$${value.price.toLocaleString()}</div>
    //     <button class="itemBtn" onClick="addToCard(${key})">Agregar</button>

    //     `
    //     list2.appendChild(newDiv)
    // })



}

initApp()

const items = document.querySelectorAll('.list .item');

// Recorre cada elemento .item y agrega el evento mouseenter
items.forEach((item) => {
  item.addEventListener('mouseenter', function() {
    // Cambia el color de fondo del item
    item.style.backgroundColor = '#b96f36'; // Color de fondo en hover

    // Cambia el color de fondo del botón dentro del item
    const button = item.querySelector('button');
    button.style.backgroundColor = 'rgb(214, 213, 215) '; // Color de fondo del botón en hover
    button.style.color = '#cf691b'
});

  item.addEventListener('mouseleave', function() {
    // Restaura el color de fondo original del item
    item.style.backgroundColor = 'var(--colorWhite)'; // Color de fondo original

    // Restaura el color de fondo original del botón dentro del item
    const button = item.querySelector('button');
    button.style.backgroundColor = '#cf691b'; // Color de fondo original del botón
    button.style.color = 'var(--colorWhite)'
  });
});








function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key]
        listCards[key].quantity = 1
    }
    reloadCard()

}

function reloadCard() {
    listCard.innerHTML= ''
    let count = 0
    let totalPrice = 0
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price
        count = count + value.quantity

        if(value != null){
            let newDiv = document.createElement('li')
            newDiv.innerHTML = `
            <div> <img src="${value.image}"> </div>
            <div>${value.name}</div>
            <div>US$${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
                <button class="buttonCard" onClick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <button class="buttonCard" onClick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>
            `
            listCard.appendChild(newDiv)
        }
    })
    total.innerText = `US$${totalPrice.toLocaleString()}`
    quantity.innerText = count
}



//<div class="count">${value.quantity}</div> this may have to be included between the two buttons "+" & "-"









function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key]
    }else{
        listCards[key].quantity = quantity
        listCards[key].price = quantity * products[key].price
    }
    reloadCard()
}


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });