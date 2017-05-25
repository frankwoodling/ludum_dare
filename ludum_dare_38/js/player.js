var key_pressed_a = false,
    key_pressed_d = false,
    key_pressed_w = false,
    key_pressed_s = false;

var player_x = 1150,
    player_y = 230,
    player_speed = 0,
    player_angle = 0,
    max_turn_angle = 3, // may need to change based on speed

    acceleration_rate_stage_1 = .25,
    acceleration_rate_stage_2 = .10,
    acceleration_rate_stage_3 = .02,

    deceleration_rate_stage_1 = .1,
    deceleration_rate_stage_2 = .05,

    braking_rate_stage_1 = .3,
    braking_rate_stage_2 = .15,

    speed_max_stage_1 = 10,
    speed_max_stage_2 = 15,
    speed_max_stage_3 = 20,

    top_left_collision_point,
    top_right_collision_point,
    bot_left_collision_point,
    bot_right_collision_point,

    previous_player_x,
    previous_player_y;

document.addEventListener("keydown", function(e) {
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





