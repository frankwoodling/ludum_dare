var canvas_01 = document.getElementById("canvas_layer_01_grass");
ctx_01 = canvas_01.getContext("2d");

var canvas_02 = document.getElementById("canvas_layer_02_track");
ctx_02 = canvas_02.getContext("2d");

var canvas_03 = document.getElementById("canvas_layer_03_player");
ctx_03 = canvas_03.getContext("2d");

var canvas_04 = document.getElementById("canvas_layer_04_objects");
ctx_04 = canvas_04.getContext("2d");

canvas_01.style.width = '900px';
canvas_01.style.height = '600px';

canvas_02.style.width = '900px';
canvas_02.style.height = '600px';

canvas_03.style.width = '900px';
canvas_03.style.height = '600px';

canvas_04.style.width = '900px';
canvas_04.style.height = '600px';

spritesheet_asphalt = new Image();
spritesheet_asphalt.src = './assets/tiles/sprite_tiles_asphalt.png';

// sprite sheet must be horizontal
var draw_spritesheet_tiles = function(canvas_context_name, sprite_sheet_image, sprite_width, sprite_height) {

  for(var i = 0; i < 24; i++) {
    for (var j = 0; j < 16; j++) {
      // context.drawImage(image_source, source_x, source_y, source_width, source_height, destination_x, destination_y, destination_width, destination_height)
      canvas_context_name.drawImage(spritesheet_asphalt, track_01[j][i] * sprite_width - sprite_width, 0, sprite_width, sprite_height, i*sprite_width, j*sprite_height, sprite_width, sprite_height)
    }
  }
};



draw_spritesheet_tiles(ctx_02, spritesheet_asphalt, 128, 128);


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