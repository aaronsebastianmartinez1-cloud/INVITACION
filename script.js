// ================================
// INTRO SOBRE
// ================================

let envelopeOpened = false;

document.getElementById('envelope-wrap').addEventListener('click', openEnvelope);

function openEnvelope() {
    if (envelopeOpened) return;
    envelopeOpened = true;

    document.getElementById('flap').classList.add('open');
    document.getElementById('seal').classList.add('hide');

    setTimeout(() => {
        const wrap = document.getElementById('envelope-wrap');
        wrap.style.transform = 'translateY(80px) scale(0.85)';
        wrap.style.opacity = '0.3';
        wrap.style.pointerEvents = 'none';

        document.getElementById('letter').classList.add('rise');

        setTimeout(() => {
            document.getElementById('open-btn').classList.add('show');
            spawnPetals();
        }, 800);

    }, 900);
}

document.getElementById('open-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    spawnPetals();
    const intro = document.getElementById('intro');
    intro.classList.add('hide');
    setTimeout(() => intro.remove(), 800);
});

function spawnPetals() {
    const emojis = ['🌸', '✨', '💖', '🌷', '⭐'];
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const el = document.createElement('div');
            el.className = 'petal';
            el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            el.style.left = Math.random() * 100 + 'vw';
            el.style.bottom = '0px';
            el.style.animationDuration = (2 + Math.random() * 2) + 's';
            document.body.appendChild(el);
            setTimeout(() => el.remove(), 4000);
        }, i * 80);
    }
}


// ================================
// CONTADOR
// ================================

const targetDate = new Date("June 30, 2026 21:00:00").getTime();

const pad = n => String(n).padStart(2, "0");

setInterval(() => {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.querySelector(".countdown").innerHTML = "<p style='color:#d17b49;font-size:22px;font-weight:700;'>¡La fiesta ya comenzó! 🎉</p>";
        return;
    }

    const days    = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML    = pad(days);
    document.getElementById("hours").innerHTML   = pad(hours);
    document.getElementById("minutes").innerHTML = pad(minutes);
    document.getElementById("seconds").innerHTML = pad(seconds);

}, 1000);


// ================================
// REVEAL AL HACER SCROLL
// ================================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
});


// ================================
// CONFIRMAR ASISTENCIA + CONFETTI
// ================================

function launchConfetti() {
    for (let i = 0; i < 150; i++) {
        const confeti = document.createElement("div");
        confeti.classList.add("confeti");
        document.body.appendChild(confeti);
        confeti.style.left = Math.random() * 100 + "vw";
        confeti.style.backgroundColor = randomColor();
        confeti.style.animationDuration = (Math.random() * 3 + 2) + "s";
        confeti.style.opacity = Math.random();
        setTimeout(() => confeti.remove(), 5000);
    }
}

function randomColor() {
    const colors = ["#ff2d75", "#7b2cff", "#4cc9f0", "#ffffff", "#ffd60a"];
    return colors[Math.floor(Math.random() * colors.length)];
}


// ================================
// MODAL FORMULARIO
// ================================

const modalForm = document.getElementById("modalForm");
const closeForm = document.querySelector(".close-form");

document.getElementById("confirmar").addEventListener("click", () => {
    launchConfetti();
    setTimeout(() => {
        modalForm.classList.add("active");
    }, 600);
});

closeForm.addEventListener("click", () => {
    modalForm.classList.remove("active");
});

window.addEventListener("click", (e) => {
    if (e.target === modalForm) {
        modalForm.classList.remove("active");
    }
});


// ================================
// MODAL MAPA
// ================================

const modalMap = document.getElementById("modalMap");
const openMap  = document.getElementById("openMap");
const closeMap = document.querySelector(".close-map");

openMap.addEventListener("click", () => {
    modalMap.classList.add("active");
});

closeMap.addEventListener("click", () => {
    modalMap.classList.remove("active");
});

window.addEventListener("click", (e) => {
    if (e.target === modalMap) {
        modalMap.classList.remove("active");
    }
});