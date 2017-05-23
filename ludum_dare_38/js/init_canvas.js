var canvas_01 = document.getElementById('canvas_layer_01_grass');
ctx_01 = canvas_01.getContext('2d');

var canvas_02 = document.getElementById('canvas_layer_02_track');
ctx_02 = canvas_02.getContext('2d');

var canvas_03 = document.getElementById('canvas_layer_03_player');
ctx_03 = canvas_03.getContext('2d');

var canvas_04 = document.getElementById('canvas_layer_04_objects');
ctx_04 = canvas_04.getContext('2d');

var canvas_05 = document.getElementById('canvas_layer_05_car_collision');
ctx_05 = canvas_05.getContext('2d');

var canvas_06 = document.getElementById('canvas_layer_06_track_collision');
ctx_06 = canvas_06.getContext('2d');

canvas_01.style.width = '900px';
canvas_01.style.height = '600px';

canvas_02.style.width = '900px';
canvas_02.style.height = '600px';

canvas_03.style.width = '900px';
canvas_03.style.height = '600px';

canvas_04.style.width = '900px';
canvas_04.style.height = '600px';

canvas_05.style.width = '900px';
canvas_05.style.height = '600px';

canvas_06.style.width = '900px';
canvas_06.style.height = '600px';