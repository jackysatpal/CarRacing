var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var y = 140;
var x = canvas.width/3;
var distance = 0.5;
var speed = 0.5;
var angle = 25;
var rectDistance = 120;

var car = new Image();
car.src = "./images/p1.png";

function movePlayer(){


  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  // context.rect(canvas.width/2, 20, 10, 20);
  // context.rect(canvas.width/2, 70, 10, 20);
  context.rect(canvas.width/2, rectDistance, 10, 20);
  context.fillStyle = "red";
  context.fill();
  //context.closePath();

  if (rectDistance >= 20) {
    rectDistance -= 50;
  } else {
    rectDistance = 120;
  }
  // context.clearRect(0, 0, canvas.width, canvas.height);
  // setGameControls();
  // context.drawImage(car, x, y, car.width*0.4, car.height*0.13);

  // y = y - speed;

  // if (y < -35){
  //   y = 145;
  // } 

  requestAnimationFrame(movePlayer);

}

movePlayer();
//requestAnimationFrame(movePlayer)

function setGameControls() {
  document.addEventListener('keydown', function(e){
    switch(e.keyCode){
      case 37: 
        console.log('left');
        if (!(x <= 35)) {
          x-=distance;
          requestAnimationFrame(movePlayer)
        }
        console.log(x);
        break;
      case 38:
        console.log('up');
        break;
      case 39:
        console.log('right');
        if (!(x >= 235)) {
          x+=distance;
        }
        break;
      case 40:
        console.log('down');
        break;
    }
  });
}