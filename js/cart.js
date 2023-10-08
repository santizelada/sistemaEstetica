let openShopping = document.querySelector('.shopping')
let closeShopping = document.querySelector('.closeShopping')
let list = document.querySelector('.list')
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
        name: 'PRODUCT NAME 1',
        image: '../img/bg1.png',
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: '../img/aDabg1.png',
        price: 75100
    }, 
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: '../img/jlByThePool2.png',
        price: 8900
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: '../img/jlByThePool3.png',
        price: 8900
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: '../img/jlawWindow.jpg',
        price: 8900
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '../img/bg4.png',
        price: 8900
    },
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: '../img/aDabg2.png',
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: '../img/bg3.png',
        price: 75100
    }, 
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: '../img/aDabg3.png',
        price: 8900
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: '../img/bg2.png',
        price: 8900
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: '../img/aDabg4.png',
        price: 8900
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '../img/bg6.png',
        price: 8900
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
        <div class="price">US$${value.price.toLocaleString()}</div>
        <button onClick="addToCard(${key})">Add to Cart</button>

        `
        list.appendChild(newDiv)
    })
}

initApp()

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