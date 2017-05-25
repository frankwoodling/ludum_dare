// Draws a box around car, collisions will test here each frame
// May be slightly too small (like 5px)
function draw_collision_box() {
  ctx_05.beginPath();
  ctx_05.rect(player_x, player_y - car_image.height / 2, size_of_car_collision_box, size_of_car_collision_box);
  ctx_05.fill();
  ctx_05.lineWidth = 5;
  ctx_05.strokeStyle = 'black';
  ctx_05.stroke();
}

// https://gamedev.stackexchange.com/questions/86755/how-to-calculate-corner-positions-marks-of-a-rotated-tilted-rectangle/86784#86784
// Points may be slightly unfair.  Could move inwards a few pixels.
function rotate_collision_points(cx, cy, x, y, angle) {
  // cx, cy - center of square coordinates
  // x, y - coordinates of a corner point of the square
  // theta is the angle of rotation

  var theta = calculate_radians(angle);

  // translate point to origin
  var tempX = x - cx;
  var tempY = y - cy;

  // now apply rotation
  var rotatedX = tempX*Math.cos(theta) - tempY*Math.sin(theta);
  var rotatedY = tempX*Math.sin(theta) + tempY*Math.cos(theta);

  // translate back
  var collision_point_x = rotatedX + cx;
  var collision_point_y = rotatedY + cy;

  // ctx_05.beginPath();
  // ctx_05.arc(collision_point_x, collision_point_y, 5, 0, 2 * Math.PI, false);
  // ctx_05.fillStyle = 'green';
  // ctx_05.fill();
  // ctx_05.lineWidth = 5;
  // ctx_05.strokeStyle = '#003300';
  // ctx_05.stroke();

  return [Math.round(collision_point_x), Math.round(collision_point_y)]
}

// collision_point: array with x and y coordinate
// returns the RBG color values of a single pixel
function get_pixel_data(collision_point) {
  var pixel_rbg = ctx_05.getImageData(collision_point[0], collision_point[1], 1, 1).data;

  return [pixel_rbg[0], pixel_rbg[1], pixel_rbg[2]]
}

function check_for_collision(collision_point) {
  var pix = get_pixel_data(collision_point);

  // if(pix[0] == 0 && pix[1] == 0 && pix[2] == 0) {
  //   player_x = previous_player_x;
  //   player_y = previous_player_y;
  // }
}

function project_path(point_to_project) {
  for(var i = 20; i > -20; i--) {
    var test = rotate_collision_points(bot_right_collision_point);

    var projection_player_x = point_to_project[0] + i * Math.cos(calculate_radians(player_angle));
    var projection_player_y =  point_to_project[1] + i * Math.sin(calculate_radians(player_angle));
    draw_project_path(projection_player_x, projection_player_y);
  }
}

function draw_project_path(x, y) {
  ctx_05.beginPath();
  ctx_05.arc(x, y, 5, 0, 2 * Math.PI, false);
  ctx_05.fillStyle = 'green';
  ctx_05.fill();
  ctx_05.lineWidth = 5;
  ctx_05.strokeStyle = '#003300';
  ctx_05.stroke();
}

// !!! when checking for every pixel in between keep track of the previous pixel and stop checking once the first one collides
// you can then place the car at that position and end the function
// also record and check top left position so you know where to move the car to
// should check negative positions too in case something gets missed

// ctx_06.beginPath();
// ctx_06.arc(x, y, radius, 0, 2 * Math.PI, false);
// ctx_06.fillStyle = 'green';
// ctx_06.fill();
// ctx_06.lineWidth = 5;
// ctx_06.strokeStyle = '#003300';
// ctx_06.stroke();

// // points of corners
// draw_corner_circles(player_x, player_y, 5);
// draw_corner_circles(player_x+car_image.width, player_y, 5);
// draw_corner_circles(player_x, player_y+car_image.height, 5);
// draw_corner_circles(player_x+car_image.width, player_y+car_image.height, 5);
//
// // center point
// draw_corner_circles(player_x+car_image.width/2, player_y+car_image.height/2, 5);
