car_image = new Image();
car_image.src = './assets/cars/car_red_3.png';

var key_pressed_a = false,
    key_pressed_d = false,
    key_pressed_w = false,
    key_pressed_s = false;

var player_x = 1150,
    player_y = 230,
    player_speed = 0,
    player_angle = 0,
    max_turn_angle = 3, // probably needs to change based on speed

    acceleration_rate_stage_1 = .25,
    acceleration_rate_stage_2 = .10,
    acceleration_rate_stage_3 = .02,

    deceleration_rate_stage_1 = .1,
    deceleration_rate_stage_2 = .05,

    braking_rate_stage_1 = .3,
    braking_rate_stage_2 = .15,

    speed_max_reverse = 5,

    speed_max_stage_1 = 10,
    speed_max_stage_2 = 15,
    speed_max_stage_3 = 20;

document.addEventListener("keydown", function(e){
  switch(e.keyCode){
    case 87:
      key_pressed_w = true;
      break;

    case 83:
      key_pressed_s = true;
      break;

    case 65:
      key_pressed_a = true;
      break;

    case 68:
      key_pressed_d = true;
      break;
  }
}, false);

document.addEventListener("keyup", function(e) {
  switch(e.keyCode) {
    case 87:
      key_pressed_w = false;
      break;

    case 83:
      key_pressed_s = false;
      break;

    case 65:
      key_pressed_a = false;
      break;

    case 68:
      key_pressed_d = false;
      break;
  }
}, false);


function calculate_radians(angle) {
  return angle*(Math.PI / 180);
}

function round_number(num, decimal_places) {

}

function acceleration(speed) {
  if (speed < speed_max_stage_1) {
    player_speed += acceleration_rate_stage_1;
  }
  else if (speed < speed_max_stage_2) {
    player_speed += acceleration_rate_stage_2;
  }
  else if (speed < speed_max_stage_3) {
    player_speed += acceleration_rate_stage_3;
  }
}

function braking(speed) {
  if (speed >= speed_max_stage_2) {
    player_speed -= braking_rate_stage_1;
  }
  else if (speed >= speed_max_stage_1) {
    player_speed -= braking_rate_stage_2;
  }
  else if (speed < speed_max_stage_1 && speed > 0) {
    player_speed -= braking_rate_stage_2;
  }

  // if(player_speed <= 0) {
  //   player_speed = speed_max_reverse;
  // }
}

function calculate_position(player_x, player_y) {

}

function deceleration(speed) {
  if (speed >= speed_max_stage_2) {
    player_speed -= deceleration_rate_stage_1;
  }
  else if (speed >= speed_max_stage_1) {
    player_speed -= deceleration_rate_stage_2;
  }
  else if (speed < speed_max_stage_1 && speed > 0) {
    player_speed -= deceleration_rate_stage_2;
  }

  if(player_speed < 0) {
    player_speed = 0;
  }
}

function check_speed() {

}

window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000/30);
    };
})();

// http://stackoverflow.com/a/16546061/6716639
function render_image(img, canvas_context_name, x, y, width, height, degrees) {

  //Convert degrees to radian
  var rad = calculate_radians(degrees);

  //Set the origin to the center of the image
  canvas_context_name.translate(x + width / 2, y + height / 2);

  //Rotate the canvas around the origin
  canvas_context_name.rotate(rad);

  //draw the image
  canvas_context_name.drawImage(img,width / 2 * (-1),height / 2 * (-1),width,height);


  //reset the canvas
  canvas_context_name.rotate(rad * ( -1 ) );
  canvas_context_name.translate((x + width / 2) * (-1), (y + height / 2) * (-1));
}

function updateGame() {
  player_speed = Math.round(player_speed*100)/100;
  console.log(player_speed);
  if(key_pressed_w) {
    acceleration(player_speed);
    player_x += player_speed * Math.cos(calculate_radians(player_angle));
    player_y += player_speed * Math.sin(calculate_radians(player_angle));
  }
  if(key_pressed_s) {
    braking(player_speed);
    player_x += player_speed * Math.cos(calculate_radians(player_angle));
    player_y += player_speed * Math.sin(calculate_radians(player_angle));
  }
  if(key_pressed_a) {
    player_angle -= max_turn_angle;
  }
  if(key_pressed_d) {
    player_angle += max_turn_angle;
  }
  if(!key_pressed_w && !key_pressed_s) {
    deceleration(player_speed);
    player_x += player_speed * Math.cos(calculate_radians(player_angle));
    player_y += player_speed * Math.sin(calculate_radians(player_angle));
  }

  ctx_03.clearRect(0, 0, canvas_03.width, canvas_03.height);

  render_image(car_image, ctx_03, player_x, player_y, car_image.width, car_image.height, player_angle);
  // console.log('x: ' + player_x);
  // console.log('y: ' + player_y);
  // console.log('##############');
  requestAnimFrame(function() {
    updateGame();
  });
}

requestAnimFrame(function() {
  // window.onload should work for all images, but doesn't
  // window.onload = function() {
  //   draw_spritesheet_tiles(ctx_02, spritesheet_asphalt, track_01_asphalt, 128, 128);
  //   draw_spritesheet_tiles(ctx_01, spritesheet_grass_sand, track_01_grass, 128, 128);
  // };

  spritesheet_asphalt.onload = function() {
    render_spritesheet_tiles(ctx_02, spritesheet_asphalt, track_01_asphalt, 128, 128);
  };
  spritesheet_grass_sand.onload = function() {
    render_spritesheet_tiles(ctx_01, spritesheet_grass_sand, track_01_grass, 128, 128);
  };
  render_object_tiles();
  updateGame();
});
