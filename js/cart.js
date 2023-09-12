let openShopping = document.querySelector('.shopping')
let closeShopping = document.querySelector('.closeShopping')
let list = document.querySelector('.list')
let listCard = document.querySelector('.listCard') //cuidado con COMILLAS COMPUESTAS. EL VIDEO USA COMILLAS SIMPLEEEEEEEEEEEEES
let body = document.querySelector('body')
let total = document.querySelector('.total')
let quantity = document.querySelector('.quantity')

openShopping.addEventListener('click', ()=>{
    body.classList.add('active')
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active')
})

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
        image: '../img/jlawOrangeBlazer.webp',
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
        image: '../img/bg1.png',
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
        image: '../img/bg4.png',
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
        image: '../img/bg5.png',
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
                <div class="count">${value.quantity}</div>
                <button class="buttonCard" onClick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>
            `
            listCard.appendChild(newDiv)
        }
    })
    total.innerText = `US$${totalPrice.toLocaleString()}`
    quantity.innerText = count
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key]
    }else{
        listCards[key].quantity = quantity
        listCards[key].price = quantity * products[key].price
    }
    reloadCard()
}