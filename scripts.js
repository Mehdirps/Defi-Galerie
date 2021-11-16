// let smallImages = document.querySelectorAll(".small-img");
// let images = document.querySelectorAll(".img");
let images = document.querySelectorAll("a");
let fond = document.querySelector(".fond");
let close = document.querySelector(".close");
let modal = document.querySelector(".modal");
let modalImg = document.querySelector(".modal img");
// for (let image of smallImages) {

//     image.addEventListener("click", () => {

//         fond.style.display = "block";

//         image.classList.add("show");

//         close.style.display = "initial";

//     });

//     fond.addEventListener("click", () => {

//         fond.style.display = "none";

//         image.classList.remove("show");

//         close.style.display = "none";
//     });

//     close.addEventListener("click", () => {

//         fond.style.display = "none";

//         image.classList.remove("show");

//         close.style.display = "none";

//     });

//     for(img of images){

//         img.addEventListener("click", () => {

//             fond.style.display = "none";

//             image.classList.remove("show");

//             close.style.display = "none";
//         });
//     }
// }
for (let image of images) {

    image.addEventListener("click", (e) => {

        e.preventDefault();

        let link = image.href;

        modal.classList.add("show");

        modalImg.src = link;

        fond.style.display = "block";

        close.style.display = "initial";
        
        let figure = image.parentElement;

        let left = figure.offsetLeft;
        let top = figure.offsetTop;
        
        console.log(modal.getAnimations());
    });
    fond.addEventListener("click", () => {

        fond.style.display = "none";

        modal.classList.remove("show");

        close.style.display = "none";
    });

    close.addEventListener("click", () => {

        fond.style.display = "none";

        modal.classList.remove("show");

        close.style.display = "none";

    });

    modalImg.addEventListener("click", () => {

        fond.style.display = "none";

        modal.classList.remove("show");

        close.style.display = "none";
    });
}