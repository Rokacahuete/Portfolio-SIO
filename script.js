let hoveredBonhomme = null;
document.querySelectorAll(".bonhomme").forEach(b => {
  b.addEventListener("mouseenter", () => hoveredBonhomme = b);
  b.addEventListener("mouseleave", () => hoveredBonhomme = null);
});

document.addEventListener("mousemove", (e) => {
  const PUPILS = document.querySelectorAll(".pupil");
  PUPILS.forEach(pupil => {
    const MAX_DISTANCE = 10;
    const ANGLE = 100;
    
    let bonhomme = pupil.closest(".bonhomme");
    if (bonhomme === hoveredBonhomme) return pupil.style.transform = `translate(0px, 0px)`;

    let eye = pupil.parentElement;
    let rect = eye.getBoundingClientRect();
    let angleX = e.clientX - rect.left - 15;
    let angleY = e.clientY - rect.top;

    let distance = Math.min(MAX_DISTANCE, Math.hypot(angleX, angleY) / MAX_DISTANCE);
    let dx = Math.max(- MAX_DISTANCE, Math.min(MAX_DISTANCE, (angleX / ANGLE) * distance));
    let dy = Math.max(- MAX_DISTANCE, Math.min(MAX_DISTANCE, (angleY / ANGLE) * distance));
    pupil.style.transform = `translate(${dx}px, ${dy}px)`;
  });
});

document.querySelectorAll(".bonhomme").forEach(b => {
  b.addEventListener("mouseenter", () => {
    b.classList.remove("sleep");
    b.classList.add("awake");
  });
});

document.addEventListener("visibilitychange", () => {
  const bonshommes = document.querySelectorAll(".bonhomme");

  if (document.hidden) {
    // 💤 L'utilisateur quitte l'onglet → les bonshommes dorment
    bonshommes.forEach(b => {
      b.classList.remove("awake");
      b.classList.add("sleep");
    });
  } else {
    // 🕐 L'utilisateur revient → ils restent endormis 5s avant de se réveiller
    bonshommes.forEach(b => {
      b.classList.remove("awake");
      b.classList.add("sleep");
    });

    setTimeout(() => {
      bonshommes.forEach(b => {
        b.classList.remove("sleep");
        b.classList.add("awake");
      });
    }, 2_500);
  }
});