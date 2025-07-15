const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Ball properties
let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 3;
let dy = 3;
let radius = 20;

function update() {
  // Draw background
  ctx.fillStyle = "#adb0e6ff"; // light blue
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw the ball
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();

  // Update position
  x += dx;
  y += dy;

  // Bounce off walls
  if (x + radius > canvas.width || x - radius < 0) {
    dx = -dx;
  }

  if (y + radius > canvas.height || y - radius < 0) {
    dy = -dy;
  }

  requestAnimationFrame(update);
}

update();
