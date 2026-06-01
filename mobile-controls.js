// mobile-controls.js
function initMobileControls() {
    const btnJump = document.getElementById("btn-jump");
    const btnDuck = document.getElementById("btn-duck");
    const dino = document.getElementById("dino");

    if (btnJump && btnDuck) {
        btnJump.addEventListener("touchstart", (e) => {
            e.preventDefault();
            if (typeof jump === 'function') jump();
        }, {passive: false});

        btnDuck.addEventListener("touchstart", (e) => {
            e.preventDefault();
            if (dino && !dino.classList.contains("jump")) dino.classList.add("duck");
        }, {passive: false});

        btnDuck.addEventListener("touchend", (e) => {
            e.preventDefault();
            if (dino) dino.classList.remove("duck");
        }, {passive: false});
    }
}

// Jalankan inisialisasi setelah game dimulai
// Karena script ini dipanggil di bawah, dia akan menunggu sampai tombol tersedia
initMobileControls();