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
  ctx_05.clearRect(0, 0, canvas_05.width, canvas_05.height);
  ctx_06.clearRect(0, 0, canvas_06.width, canvas_06.height);

  render_image(car_image, ctx_03, player_x, player_y, car_image.width, car_image.height, player_angle);
  render_image(car_collision, ctx_05, player_x, player_y, car_collision.width, car_collision.height, player_angle);

  // test for center of car
  // player_x and player_y are top left of car
  // delete when done
  var radius = 10;
  ctx_06.beginPath();
  ctx_06.arc(player_x + car_image.width/2, player_y + car_image.height/2, radius, 0, 2 * Math.PI, false);
  ctx_06.fillStyle = 'black';
  ctx_06.fill();
  ctx_06.lineWidth = 5;
  ctx_06.strokeStyle = '#003300';
  ctx_06.stroke();
  ///////////

  requestAnimFrame(function() {
    updateGame();
  });
}