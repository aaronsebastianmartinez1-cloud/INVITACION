const targetDate = new Date("June 30, 2026 21:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);



const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            element.classList.add("active");
        }

    });

});



const button = document.getElementById("confirmar");

button.addEventListener("click", () => {

    button.innerHTML = "🎉 Asistencia Confirmada";

    launchConfetti();

});



function launchConfetti(){

    for(let i = 0; i < 150; i++){

        const confeti = document.createElement("div");

        confeti.classList.add("confeti");

        document.body.appendChild(confeti);

        confeti.style.left = Math.random() * 100 + "vw";

        confeti.style.backgroundColor = randomColor();

        confeti.style.animationDuration =
        (Math.random() * 3 + 2) + "s";

        confeti.style.opacity = Math.random();

        setTimeout(() => {
            confeti.remove();
        }, 5000);

    }

}



function randomColor(){

    const colors = [
        "#ff2d75",
        "#7b2cff",
        "#4cc9f0",
        "#ffffff",
        "#ffd60a"
    ];

    return colors[
        Math.floor(Math.random() * colors.length)
    ];

}
// MODAL SORPRESA

const modal = document.getElementById("modal");

const openModal =
document.getElementById("openModal");

const closeModal =
document.querySelector(".close");

openModal.addEventListener("click", () => {

    modal.classList.add("active");

});

closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

});

window.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.classList.remove("active");

    }

});