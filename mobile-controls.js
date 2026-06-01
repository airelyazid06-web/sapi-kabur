// mobile-controls.js

function initMobileControls() {
    const btnJump = document.getElementById("btn-jump");
    const btnDuck = document.getElementById("btn-duck");
    const dino = document.getElementById("dino");

    if (btnJump && btnDuck) {
        // Tombol Lompat
        btnJump.addEventListener("touchstart", (e) => {
            e.preventDefault();
            if (typeof jump === 'function') jump();
        }, {passive: false});

        // Tombol Runduk
        btnDuck.addEventListener("touchstart", (e) => {
            e.preventDefault();
            if (dino && !dino.classList.contains("jump")) {
                dino.classList.add("duck");
                
                // TAMBAHKAN BLOK INI (UNTUK SUARA NUNDUK)
                try {
                    if (typeof sfxDuck !== 'undefined') {
                        sfxDuck.currentTime = 0;
                        sfxDuck.volume = 0.6;
                        sfxDuck.play().catch(() => {});
                    }
                } catch(err) { console.log("Audio nunduk gagal"); }
            }
        }, {passive: false});

        btnDuck.addEventListener("touchend", (e) => {
            e.preventDefault();
            if (dino) dino.classList.remove("duck");
        }, {passive: false});
    }
}

initMobileControls();