let smallImages = document.querySelectorAll(".small-img");
let images = document.querySelectorAll(".img");
let fond = document.querySelector(".fond");
let close = document.querySelector(".close");

for (let image of smallImages) {

    image.addEventListener("click", () => {

        fond.style.display = "block";

        image.classList.add("show");

        close.style.display = "initial";

    });

    fond.addEventListener("click", () => {

        fond.style.display = "none";

        image.classList.remove("show");

        close.style.display = "none";
    });
    
    close.addEventListener("click", () => {

        fond.style.display = "none";
    
        image.classList.remove("show");
    
        close.style.display = "none";
        
    });
    
    for(img of images){

        img.addEventListener("click", () => {
    
            fond.style.display = "none";
    
            image.classList.remove("show");
    
            close.style.display = "none";
        });
    }
}