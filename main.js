canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

carroWidth = 100;
carroHeight = 90;

backgroundImage = "rua.webp";
carroImage = "Carro.jpg";

carroX = 225;
carroY = 225;

function add() {
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundImage;

    carroImgTag = new Image();
    carroImgTag.onload = uploadcarro;
    carroImgTag.src = carroImage;
}

function uploadBackground() {
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcarro() {
    ctx.drawImage(carroImgTag, carroX, carroY, carroWidth, carroHeight);
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
  keyPressed = e.keyCode;
  console.log(keyPressed);
  if(keyPressed == '38')
{
    up();
    console.log("cima");
}

if(keyPressed == '40')
{
    down();
    console.log("baixo");
}
if(keyPressed == '37')
{
    left();
    console.log("esquerda");
}
if(keyPressed == '39')
{
    right();
    console.log("direita");
}
}

function up() {
if (carroY >= 0)
{
carroY = carroY - 10;
console.log("quando direcional cima for pressionada, x = " + carroX + " | y = " + carroY);
uploadBackground();
uploadcarro();
}
}

function down() {
if (carroY <= 500)
{
carroY = carroY + 10;
console.log("quando direcional baixo for pressionada, x = " + carroX + " | y = " + carroY);
uploadBackground();
uploadcarro();
}
}

function left() {
if (carroX >= 0)
{
carroX = carroX - 10;
console.log("quando direcional esquerda for pressionada, x = " + carroX + " | y = " + carroY);
uploadBackground();
uploadcarro();
}
}

function right() {
if (carroX <= 700)
{
carroX = carroX + 10;
console.log("quando direcional direita for pressionada, x = " + carroX + " | y = " + carroY);
uploadBackground();
uploadcarro();
}
}