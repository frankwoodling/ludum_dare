var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

spritesheet_asphalt = new Image();
spritesheet_asphalt.src = './assets/tiles/sprite_tiles_asphalt.png';

// sprite sheet must be horizontal
var draw_spritesheet_tiles = function(sprite_sheet, sprite_width, sprite_height) {

  for(var i = 0; i < 24; i++) {
    for (var j = 0; j < 16; j++) {
      ctx.drawImage(spritesheet_asphalt, track_01[j][i] * sprite_width - sprite_width, 0, sprite_width, sprite_height, i*sprite_width, j*sprite_height, sprite_width, sprite_height)
    }
  }
};

draw_spritesheet_tiles('./assets/tiles/sprite_tiles_asphalt.png', 128, 128);

// Ideas for physics and traction:
// Keep a running array of the last few angles and where the car was facing
// if you try to corner too fast it will use a point in between where you would be with the previous angle and current one making it harder to turn

/////////////////////////////////////////
///// animation function
/////////////////////////////////////////

// var width = 100,
//   height = 100,
//   frames = 4,
//
//   currentFrame = 0;

// image = new Image();
// image.src = './img/sprite.png';
//
// var draw = function(){
//   ctx.clearRect(0, 0, width, height);
//   ctx.drawImage(image, 0, height * currentFrame, width, height, 0, 0, width, height);
//
//   if (currentFrame == frames) {
//     currentFrame = 0;
//   } else {
//     currentFrame++;
//   }
// };

// setInterval(draw, 100);