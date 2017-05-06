car_image = new Image();
car_image.src = './assets/cars/car_red_3.png';

var key_pressed_a = false,
    key_pressed_d = false,
    key_pressed_w = false,
    key_pressed_s = false;

var player_x = 50,
    player_y = 50,
    player_speed = 10,
    player_angle = 0,
    max_turn_angle = 5, // probably needs to change based on speed

    acceleration_rate_stage_1 = .4,
    acceleration_rate_stage_2 = .2,
    acceleration_rate_stage_3 = .1,

    speed_max_stage_1 = 15,
    speed_max_stage_2 = 20,
    speed_max_stage_3 = 25;

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

function calculate_position(player_x, player_y) {

}

function calculate_radians(angle) {
  return angle*(Math.PI / 180);
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

function braking(player_speed) {

}

function coasting(player_speed) {

}

window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000/30);
    };
})();

// http://stackoverflow.com/a/16546061/6716639
function render_image(img, x, y, width, height, degrees) {

  //Convert degrees to radian
  var rad = calculate_radians(degrees);

  //Set the origin to the center of the image
  ctx.translate(x + width / 2, y + height / 2);

  //Rotate the canvas around the origin
  ctx.rotate(rad);

  //draw the image
  ctx.drawImage(img,width / 2 * (-1),height / 2 * (-1),width,height);


  //reset the canvas
  ctx.rotate(rad * ( -1 ) );
  ctx.translate((x + width / 2) * (-1), (y + height / 2) * (-1));
}

function updateGame() {
  console.log(player_speed);
  if(key_pressed_w) {
    acceleration(player_speed);
    player_x += player_speed * Math.cos(calculate_radians(player_angle));
    player_y += player_speed * Math.sin(calculate_radians(player_angle));
  }
  if(key_pressed_s) {
    player_x -= Math.round((player_speed * 0.5) * Math.cos(calculate_radians(player_angle)));
    player_y -= Math.round((player_speed * 0.5) * Math.sin(calculate_radians(player_angle)));
  }
  if(key_pressed_a) {
    player_angle -= max_turn_angle;
  }
  if(key_pressed_d) {
    player_angle += max_turn_angle;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  render_image(car_image, player_x, player_y, car_image.width, car_image.height, player_angle);
  // console.log('x: ' + player_x);
  // console.log('y: ' + player_y);
  // console.log('##############');
  requestAnimFrame(function() {
    updateGame();
  });
}

updateGame();



