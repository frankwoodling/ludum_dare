var key_pressed_a = false,
    key_pressed_d = false,
    key_pressed_w = false,
    key_pressed_s = false;

var player_x = 50,
    player_y = 50;
    player_speed = 10;


document.addEventListener("keydown", function(e){
  console.log(e.keyCode);
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
      key_pressed_s =false;
      break;

    case 65:
      key_pressed_a = false;
      break;

    case 68:
      key_pressed_d =false;
      break;

  }
}, false);

window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000/60);
    };
})();

car_image = new Image();
car_image.src = './assets/cars/car_red_1.png';

var render_car = function(car_name, x, y, angle) {
  ctx.drawImage(car_image, x, y);
  console.log('rendered')
};




function updateGame() {

  // player_speed = 0;

  if(key_pressed_w) {
    player_y -= player_speed
  }
  else if(key_pressed_s) {
    player_y += player_speed
  }
  else if(key_pressed_a) {
    player_x -= player_speed
  }
  else if(key_pressed_d) {
    player_x += player_speed
  }

  // player_x += player_speed;
  // player_y += player_speed;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  render_car('a', player_x, player_y, 0);

  requestAnimFrame(function() {
    updateGame();
  });
}

updateGame();
