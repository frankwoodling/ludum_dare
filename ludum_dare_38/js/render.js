// http://stackoverflow.com/a/16546061/6716639
function render_image(img, canvas_context_name, x, y, width, height, degrees) {

  // Convert degrees to radian
  var rad = calculate_radians(degrees);

  // Set the origin to the center of the image
  canvas_context_name.translate(x + width/2, y + height/2);

  // Rotate the canvas around the origin
  canvas_context_name.rotate(rad);

  // Draw the image
  canvas_context_name.drawImage(img, width/2*(-1), height/2*(-1), width, height);

  //reset the canvas
  canvas_context_name.rotate(rad*(-1));
  canvas_context_name.translate((x + width/2)*(-1), (y+height/2) * (-1));
}

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
    ctx_04.drawImage(sprite_tree_large, 0, 0, 214, 212, 127, 33, 214, 212);
    ctx_04.drawImage(sprite_tree_large, 0, 0, 214, 212, 3, 300, 214, 212);
    ctx_04.drawImage(sprite_tree_large, 0, 0, 214, 212, 1671, 430, 214, 212);
    ctx_04.drawImage(sprite_tree_large, 0, 0, 214, 212, 2052, 419, 214, 212);
    ctx_04.drawImage(sprite_tree_large, 0, 0, 214, 212, 1920, 549, 214, 212);
    ctx_04.drawImage(sprite_tree_large, 0, 0, 214, 212, 1280, 1840, 214, 212);
  };

  sprite_tree_small.onload = function() {
    ctx_04.drawImage(sprite_tree_small, 0, 0, 141, 141, 1670, 1780, 135, 141)
  }

  sprite_tent_blue_large.onload = function() {
    ctx_04.drawImage(sprite_tent_blue_large, 0, 0, 256, 256, 2688, 384, 256, 256);
    ctx_04.drawImage(sprite_tent_blue_large, 0, 0, 256, 256, 2688, 1408, 256, 256);
  };

  sprite_tent_red_large.onload = function() {
    ctx_04.drawImage(sprite_tent_red_large, 0, 0, 256, 256, 2688, 896, 256, 256);
  };
};

spritesheet_asphalt.onload = function() {
  render_spritesheet_tiles(ctx_02, spritesheet_asphalt, track_01_asphalt, 128, 128);
};

spritesheet_grass_sand.onload = function() {
  render_spritesheet_tiles(ctx_01, spritesheet_grass_sand, track_01_grass, 128, 128);
};

track_collision.onload = function() {
  ctx_05.drawImage(track_collision, 0, 0, 3072, 2048);
};
