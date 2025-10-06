document.addEventListener("mousemove", (e) => {
  const pupils = document.querySelectorAll(".pupil");
  pupils.forEach(pupil => {
    const eye = pupil.parentElement;
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;
    const angleX = e.clientX - eyeCenterX;
    const angleY = e.clientY - eyeCenterY;
    const distance = Math.min(10, Math.hypot(angleX, angleY) / 10);
    const maxMove = 10;
    const dx = (angleX / 50) * distance;
    const dy = (angleY / 50) * distance;
    pupil.style.transform = `translate(${dx}px, ${dy}px)`;
  });
});