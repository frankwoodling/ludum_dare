var canvas_01 = document.getElementById('canvas_layer_01_grass');
ctx_01 = canvas_01.getContext('2d');

var canvas_02 = document.getElementById('canvas_layer_02_track');
ctx_02 = canvas_02.getContext('2d');

var canvas_03 = document.getElementById('canvas_layer_03_player');
ctx_03 = canvas_03.getContext('2d');

var canvas_04 = document.getElementById('canvas_layer_04_objects');
ctx_04 = canvas_04.getContext('2d');

var canvas_05 = document.getElementById('canvas_layer_05_car_collision');
ctx_05 = canvas_05.getContext('2d');

var canvas_06 = document.getElementById('canvas_layer_06_track_collision');
ctx_06 = canvas_06.getContext('2d');

canvas_01.style.width = '900px';
canvas_01.style.height = '600px';

canvas_02.style.width = '900px';
canvas_02.style.height = '600px';

canvas_03.style.width = '900px';
canvas_03.style.height = '600px';

canvas_04.style.width = '900px';
canvas_04.style.height = '600px';

canvas_05.style.width = '900px';
canvas_05.style.height = '600px';

canvas_06.style.width = '900px';
canvas_06.style.height = '600px';

spritesheet_asphalt = new Image();
spritesheet_asphalt.src = './assets/tiles/sprite_tiles_asphalt.png';

spritesheet_grass_sand = new Image();
spritesheet_grass_sand.src = './assets/tiles/sprite_tiles_grass_sand.png';

sprite_tent_blue_large = new Image();
sprite_tent_blue_large.src = './assets/tiles/tent_blue_large.png';

sprite_tent_red_large = new Image();
sprite_tent_red_large.src = './assets/tiles/tent_red_large.png';

sprite_tree_large = new Image();
sprite_tree_large.src = './assets/tiles/tree_large.png';

sprite_tree_small = new Image();
sprite_tree_small.src = './assets/tiles/tree_small.png';

sprite_rock1 = new Image();
sprite_rock1.src = './assets/tiles/rock1.png';

sprite_rock2 = new Image();
sprite_rock2.src = './assets/tiles/rock2.png';

sprite_rock3 = new Image();
sprite_rock3.src = './assets/tiles/rock3.png';

// sprite sheet must be horizontal
var render_spritesheet_tiles = function(canvas_context_name, sprite_sheet_name, tile_file_var, sprite_width, sprite_height) {

  for(var i = 0; i < 24; i++) {
    for (var j = 0; j < 16; j++) {
      // context.drawImage(image_source, source_x, source_y, source_width, source_height, destination_x, destination_y, destination_width, destination_height)
      canvas_context_name.drawImage(sprite_sheet_name, tile_file_var[j][i] * sprite_width - sprite_width, 0, sprite_width, sprite_height, i*sprite_width, j*sprite_height, sprite_width, sprite_height)
    }
  }
};

var render_object_tiles = function() {
  sprite_tree_large.onload = function() {
    ctx_04.drawImage(sprite_tree_large, 0, 0, 214, 212, 128, 40, 214, 212);
    ctx_04.drawImage(sprite_tree_large, 0, 0, 214, 212, 25, 280, 214, 212);
    ctx_04.drawImage(sprite_tree_large, 0, 0, 214, 212, 1700, 500, 214, 212);
    ctx_04.drawImage(sprite_tree_large, 0, 0, 214, 212, 2050, 450, 214, 212);
    ctx_04.drawImage(sprite_tree_large, 0, 0, 214, 212, 1975, 600, 214, 212);
    ctx_04.drawImage(sprite_tree_large, 0, 0, 214, 212, 1300, 1800, 214, 212);
  };

  sprite_tent_blue_large.onload = function() {
    ctx_04.drawImage(sprite_tent_blue_large, 0, 0, 256, 256, 2700, 475, 214, 212);
    ctx_04.drawImage(sprite_tent_blue_large, 0, 0, 256, 256, 2700, 1275, 214, 212);
  };

  sprite_tent_red_large.onload = function() {
    ctx_04.drawImage(sprite_tent_red_large, 0, 0, 256, 256, 2700, 875, 214, 212);
  };

};
/////////////////////////////////////////
///// animation function ////////////////
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