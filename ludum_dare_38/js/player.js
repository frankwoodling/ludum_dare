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
    max_turn_angle = 10; // probably needs to change based on speed

/*document.addEventListener( "keydown", doKeyDown, true);
document.addEventListener( "keyup", doKeyUp, true);

function doKeyDown(e) {
  console.log(e.keyCode);
  if(e.keyCode == 87) {
    key_pressed_w = true;
  }

  if(e.keyCode == 83) {
    key_pressed_s = true;
  }

  if(e.keyCode == 65) {
    key_pressed_a = true;
  }

  if(e.keyCode == 68) {
    key_pressed_d = true;
  }
}

function doKeyUp(e) {
  if(e.keyCode == 87) {
    key_pressed_w = false;
  }

  if(e.keyCode == 83) {
    key_pressed_s =  false
  }

  if(e.keyCode == 65) {
    key_pressed_a = false;
  }

  if(e.keyCode == 68) {
    key_pressed_d = false;
  }
}*/
// old event listener code
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

window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000/60);
    };
})();

// http://stackoverflow.com/a/16546061/6716639
function render_image(img, x, y, width, height, degrees) {

  //Convert degrees to radian
  var rad = degrees * Math.PI / 180;

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
  if(key_pressed_w) {
    player_x += player_speed * Math.cos(player_angle * Math.PI / 180);
    player_y += player_speed * Math.sin(player_angle * Math.PI / 180);
  }
  if(key_pressed_s) {
    player_x -= (player_speed * 0.5) * Math.cos(player_angle * Math.PI / 180);
    player_y -= (player_speed * 0.5) * Math.sin(player_angle * Math.PI / 180);
  }
  if(key_pressed_a) {
    player_angle -= max_turn_angle;
  }
  if(key_pressed_d) {
    player_angle += max_turn_angle;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  render_image(car_image, player_x, player_y, car_image.width, car_image.height, player_angle);

  requestAnimFrame(function() {
    updateGame();
  });
}

updateGame();



