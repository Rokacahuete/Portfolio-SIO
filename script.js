document.addEventListener("mousemove", (e) => {
  const PUPILS = document.querySelectorAll(".pupil");
  PUPILS.forEach(pupil => {
    const MAX_DISTANCE = 10;
    const ANGLE = 100;

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