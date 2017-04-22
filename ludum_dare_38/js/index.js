var width = 100,
  height = 100,
  frames = 4,

  currentFrame = 0,

  canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");
image = new Image();
image.src = '/img/sprite.png';

var draw = function(){
  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(image, 0, height * currentFrame, width, height, 0, 0, width, height);

  if (currentFrame == frames) {
    currentFrame = 0;
  } else {
    currentFrame++;
  }
};

setInterval(draw, 100);
