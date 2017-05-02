var leftPressed=false;
var rightPressed=false;
var upPressed=false;
var downPressed=false;

var player_x = 50;
var player_y = 50;

document.addEventListener("keydown", function(e){
  console.log(e.keyCode);
  switch(e.keyCode){
    case 65:
      leftPressed=true;
      console.log('pressed a')
      break;
    case 87:
      upPressed=true;
      break;
    case 68:
      rightPressed=true;
      break;
    case 83:
      downPressed=true;
      break;
  }
}, false);

document.addEventListener("keyup", function(e){
  switch(e.keyCode){
    case 65:
      leftPressed=false;
      console.log('released a')
      break;
    case 87:
      upPressed=false;
      break;
    case 68:
      rightPressed=false;
      break;
    case 83:
      downPressed=false;
      break;
  }
}, false);