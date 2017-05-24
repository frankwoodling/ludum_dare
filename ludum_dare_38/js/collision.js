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

  return [Math.round(collision_point_x), Math.round(collision_point_y)]
}

// Takes an array with x and y coordinates and compares it to a point on the collision map on ctx_05 to find out if
// there is a collision.  Function will use hex codes to determine what type of collision occurred.
// TODO: list hexcode colors used
// TODO: is it faster to use hexcode or rbg values?
function check_for_collision(collision_point) {
  var pixel_rbg = ctx_05.getImageData(collision_point[0], collision_point[1], 1, 1).data;
  // console.log(rgbToHex(pixel_rbg))
  var b = rgbToHex(pixel_rbg[0], pixel_rbg[1], pixel_rbg[2]);
  console.log(b);
}

function rgbToHex(r, g, b){
  if (r > 255 || g > 255 || b > 255)
    throw "Invalid color component";
  return ((r << 16) | (g << 8) | b).toString(16);
}

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
