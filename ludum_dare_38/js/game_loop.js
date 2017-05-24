function updateGame() {
  player_speed = Math.round(player_speed*100)/100;

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
  ctx_05.clearRect(0, 0, canvas_05.width, canvas_05.height);
  ctx_06.clearRect(0, 0, canvas_06.width, canvas_06.height);

  render_image(car_image, ctx_03, player_x, player_y, car_image.width, car_image.height, player_angle);
  // print_hex_at_top_left_of_car(player_x, player_y);
  // draw_collision_box();
  rotate_collision_points(player_x+car_image.width/2, player_y+car_image.height/2, player_x, player_y, player_angle, 5);
  rotate_collision_points(player_x+car_image.width/2, player_y+car_image.height/2, player_x+car_image.width, player_y, player_angle, 5);
  rotate_collision_points(player_x+car_image.width/2, player_y+car_image.height/2, player_x, player_y+car_image.height, player_angle, 5);
  rotate_collision_points(player_x+car_image.width/2, player_y+car_image.height/2, player_x+car_image.width, player_y+car_image.height, player_angle, 5);

  requestAnimFrame(function() {
    updateGame();
  });
}

window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000/20);
    };
})();


// Begin main game loop
requestAnimFrame(function() {
  render_object_tiles();
  updateGame();
});