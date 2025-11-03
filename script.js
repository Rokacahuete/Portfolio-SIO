document.addEventListener("mousemove", (e) => {
  const PUPILS = document.querySelectorAll(".pupil");
  PUPILS.forEach(pupil => {
    const MAX_DISTANCE = 10;

    let eye = pupil.parentElement;
    let rect = eye.getBoundingClientRect();
    let angleX = e.clientX - rect.left ;
    let angleY = e.clientY - rect.top + rect.height / 2;

    let distance = Math.min(MAX_DISTANCE, Math.hypot(angleX, angleY) / MAX_DISTANCE);
    let dx = Math.max(- MAX_DISTANCE, Math.min(MAX_DISTANCE, (angleX / 50) * distance));
    let dy = Math.max(- MAX_DISTANCE, Math.min(MAX_DISTANCE, (angleY / 50) * distance));
    pupil.style.transform = `translate(${dx}px, ${dy}px)`;
  });
});