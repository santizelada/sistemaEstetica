function openNav(){
    document.getElementById("mobile-menu").style.width="100%"
}
function closeNav(){
    document.getElementById("mobile-menu").style.width="0%"
}




// document.addEventListener("scroll", function () {
//     var header = document.querySelector("header");
//     var section2 = document.querySelector(".section2");
    
//     // Obtén la posición vertical del encabezado y la .section2
//     var headerTop = header.getBoundingClientRect().top;
//     var section2Top = section2.getBoundingClientRect().top;
    
//     // Si la parte superior de la .section2 está en la parte superior de la ventana, cambia el fondo del encabezado a transparente
//     if (section2Top <= 0) {
//         header.style.backgroundColor = "rgb(214, 213, 215)";
//     } else {
//         header.style.backgroundColor = "transparent"; // Si no, mantenlo blanco
//     }
//     });


// document.addEventListener("click", function(){

// })






// Obtén una referencia al video
// const video = document.querySelector('video');

// Obtén referencias a los botones
// const volUpButton = document.getElementById('volUpButton');
// const playButton = document.getElementById('playButton');

// const volUpButton = document.getElementById('volUpButton')
// const playButton = document.getElementById('playButton')


// Agrega un manejador de eventos al botón de aumento de volumen
// volUpButton.addEventListener('click', () => {
    // Verifica el estado del volumen actual del video
    // if (video.volume === 0) {
        // Si el volumen está en silencio, ajústalo al máximo
    //     video.volume = 1;
    // } else {
        // Si el volumen no está en silencio, ponlo en silencio
//         video.volume = 0;
//     }
// });




// Agrega un manejador de eventos al botón de reproducción / pausa
// playButton.addEventListener('click', () => {
    // Verifica el estado de reproducción actual del video
    // if (video.paused) {
        // Si el video está pausado, reprodúcelo
    //     video.play();
    // } else {
        // Si el video se está reproduciendo, páusalo
//         video.pause();
//     }
// });




//este sí funcionabaaaaaaaaa
    // document.addEventListener("DOMContentLoaded", function () {
    //     const textElement = document.querySelector(".text");
    //     const rollingText = document.querySelector(".rolling-text");
        
    //     const texts = ["A whole new world of opportunities", "A whole new world for your skin", "A whole new world for you"]; // Agrega aquí los nuevos textos que deseas mostrar
    //     let currentIndex = 0;
    
    //     function changeText() {
    //         textElement.textContent = texts[currentIndex];
    //         currentIndex = (currentIndex + 1) % texts.length;
    //     }
        
    //     setInterval(changeText, 4000); // Cambiar cada 4 segundos (4000 milisegundos)
    // });
    















// document.addEventListener("DOMContentLoaded", function () {
//     const textElement = document.querySelector(".text");
//     const rollingText = document.querySelector(".rolling-text");
    
//     let currentIndex = 0;
//     const texts = ["A whole new world of oportunities", "A whole world of new lovers", "A whole new world for you"]; // Agrega aquí los textos que desees mostrar
    
//     function changeText() {
//         currentIndex = (currentIndex + 1) % texts.length;
//         textElement.textContent = texts[currentIndex];
//     }
    
//     setInterval(changeText, 3000); // Cambiar cada 5 segundos
// });




    // const video = document.querySelector(".section1 video");
    // const muteButton = document.getElementById("muteButton");
    // const pauseButton = document.getElementById("pauseButton");

    // function toggleMute() {
    //     if (video.muted) {
    //         video.muted = false;
    //         muteButton.textContent = "Mute";
    //     } else {
    //         video.muted = true;
    //         muteButton.textContent = "Unmute";
    //     }
    // }

    // function togglePause() {
    //     if (video.paused) {
    //         video.play();
    //         pauseButton.textContent = "Pause";
    //     } else {
    //         video.pause();
    //         pauseButton.textContent = "Play";
    //     }
    // }

