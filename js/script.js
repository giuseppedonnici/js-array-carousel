// **Consegna:**
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// **MILESTONE 1**
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: 
// avremo così la struttura base e gli stili pronti per poterci poi 
// concentrare solamente sull'aspetto logico.
// **MILESTONE 2**
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array 
// fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito 
// dinamicamente attraverso JavaScript.
// **MILESTONE 3**
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata 
// al posto della precedente.
// **BONUS 1:**
// Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la 
// freccia per andare all’immagine precedente, dovrà comparire 
// l’ultima immagine dell’array e viceversa.
// **BONUS 2:**
// Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. 
// Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, 
// che invece avrà un bordo colorato.
// Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.


// Creo l'array delle immagini
const imagesArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

const itemsContainer = document.querySelector(".slider-items");


for (let i = 0; i < imagesArray.length; i++) {
    const currentImage = imagesArray[i];

    const sliderItem = `
        <div class="item">
        <img src="${currentImage}" alt="">
        <div class="thumb-container">
                        <div class="thumb">
                            <img src="img/01.jpg" alt="">
                        </div>
                        <div class="thumb">
                            <img src="img/02.jpg" alt="">
                        </div>
                        <div class="thumb">
                            <img src="img/03.jpg" alt="">
                        </div>
                        <div class="thumb">
                            <img src="img/04.jpg" alt="">
                        </div>
                        <div class="thumb">
                            <img src="img/05.jpg" alt="">
                        </div>
                    </div>

        </div>`;
    itemsContainer.innerHTML += sliderItem;

}

// Ora ho tutti gli items inseriti nella pagina tramite JS ma in display none
// Metto tutti gli items all'interno di un array e al primo assegno la classe active

const itemsArray = document.getElementsByClassName("item");
console.log(itemsArray);
const thumbsArray = document.getElementsByClassName("thumb");
console.log(thumbsArray);

let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active");
let activeThumbIndex = 0;
thumbsArray[activeThumbIndex].classList.add("active");

// A questo punto è visibile solo il primo itemsArray, devo andare a gestire la classe active
// spostando l'indice

// Prelevo i due bottoni
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
console.log(nextBtn, prevBtn);

// Cosa succede quando clicco sul bottone next?
nextBtn.addEventListener("click", function () {

    // togli la classe hidden al bottone prev
    // prevBtn.classList.remove("hidden"); (***PARTE DEL MILESTONE 3***)

    if (activeItemIndex === itemsArray.length - 1) {
        itemsArray[activeItemIndex].classList.remove("active");
        thumbsArray[activeThumbIndex].classList.remove("active");
        activeItemIndex = 0;
        activeThumbIndex = 0;
        itemsArray[activeItemIndex].classList.add("active");
        thumbsArray[activeThumbIndex].classList.add("active");
    } else if (activeItemIndex < (itemsArray.length - 1)) {
        // Se l'indice dell'item attuale è minore della lunghezza dell'array 
        // rimuovi la classe active
        itemsArray[activeItemIndex].classList.remove("active");
        thumbsArray[activeThumbIndex].classList.remove("active");
        // incrementa di 1 l'indice attuale
        activeItemIndex++;
        activeThumbIndex = activeThumbIndex + 6;
        // aggiungi la classe active al nuovo item
        itemsArray[activeItemIndex].classList.add("active");
        thumbsArray[activeThumbIndex].classList.add("active");
        console.log(activeThumbIndex)

        // Se sei arrivato all'ultimo item (***PARTE DEL MILESTONE 3***)
        // if (activeItemIndex === itemsArray.length - 1) {
        //     // aggiungi la classe hidden al bottone next
        //     nextBtn.classList.add("hidden");
        // }
    }
});

// Cosa succede quando clicco sul bottone prev?
prevBtn.addEventListener("click", function () {

    // Se ti trovi alla prima immagine
    if (activeItemIndex === 0) {
        // togli la classe active dall'item corrente
        itemsArray[activeItemIndex].classList.remove("active");
        thumbsArray[activeThumbIndex].classList.remove("active");
        // assegna l'indico dell'ultimo elemento dell'array
        activeItemIndex = itemsArray.length - 1;
        activeThumbIndex = thumbsArray.length - 1;
        // aggiungi la classe active
        itemsArray[activeItemIndex].classList.add("active");
        thumbsArray[activeThumbIndex].classList.add("active");
    } else {
        // togli la classe hidden dal bottone next
        // nextBtn.classList.remove("hidden"); (***PARTE DEL MILESTONE 3***)
        // togli la classe active dall'item corrente
        itemsArray[activeItemIndex].classList.remove("active");
        thumbsArray[activeThumbIndex].classList.remove("active");
        // decrementa l'indice di 1
        activeItemIndex--;
        activeThumbIndex = activeThumbIndex -6;
        // aggiungi la classe active all'item corrente
        itemsArray[activeItemIndex].classList.add("active");
        thumbsArray[activeThumbIndex].classList.add("active");

        // Se sei arrivato al primo item (***PARTE DEL MILESTONE 3***)
        // if (activeItemIndex === 0) {
        //     prevBtn.classList.add("hidden");
        // }
    }
})