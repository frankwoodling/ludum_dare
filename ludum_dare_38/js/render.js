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