var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

spritesheet_asphalt = new Image();
spritesheet_asphalt.src = './assets/tiles/sprite_tiles_asphalt.png';

// sprite sheet should be 10 tiles wide
var draw_spritesheet_tiles = function(sprite_sheet, sprite_width, sprite_height) {

  for(var i = 0; i <= 24; i++) {
    console.log("i:" + i);
    ctx.drawImage(spritesheet_asphalt, ((track_01[0][i]%10)-1)*sprite_height, Math.floor(track_01[0][i]/10)*sprite_width, sprite_width, sprite_height, i*128, 0, sprite_width, sprite_height)
  }
};

draw_spritesheet_tiles('./assets/tiles/sprite_tiles_asphalt.png', 128, 128);

// var i = 14;
// console.log(Math.floor(track_01[0][i]/10));
// console.log(Math.round(track_01[0][i]/10));
// console.log((track_01[0][i]%10)-1);


// draw in the index position * the height of the

// works for image 1
// var i = 0;
// console.log(Math.round(track_01[0][i]/10));
// console.log((track_01[0][i]%10)-1);



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