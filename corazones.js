const canvas = document.getElementById("corazones");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const corazones = [];

function crearCorazon() {
  return {
    x: Math.random() * canvas.width,
    y: canvas.height + Math.random() * 100,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 2 + 1,
    alpha: Math.random() * 0.5 + 0.5
  };
}

for (let i = 0; i < 60; i++) {
  corazones.push(crearCorazon());
}

function dibujarCorazones() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  corazones.forEach((c) => {
    ctx.globalAlpha = c.alpha;
    ctx.fillStyle = "#ff69b4";
    ctx.beginPath();
    // Dibujar corazón simple
    ctx.moveTo(c.x, c.y);
    ctx.bezierCurveTo(c.x + c.size / 2, c.y - c.size,
                      c.x + c.size * 1.5, c.y + c.size / 2,
                      c.x, c.y + c.size * 1.5);
    ctx.bezierCurveTo(c.x - c.size * 1.5, c.y + c.size / 2,
                      c.x - c.size / 2, c.y - c.size,
                      c.x, c.y);
    ctx.fill();

    // Mover hacia arriba
    c.y -= c.speed;
    if (c.y < -50) {
      c.x = Math.random() * canvas.width;
      c.y = canvas.height + Math.random() * 100;
    }
  });

  requestAnimationFrame(dibujarCorazones);
}

dibujarCorazones();
