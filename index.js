const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");
context.fillStyle = "black";
context.drawRect = (0, 0, canvas.width, canvas.height)
context.fillRect(100, 200, 50, 75);

