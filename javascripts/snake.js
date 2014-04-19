$(document).ready(function(){
  var canvas = $('#canvas')[0];
  var ctx = canvas.getContext("2d");
  var w = $('#canvas').width();
  var h = $('#canvas').height();

  var cw = 10;

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = 'black';
  ctx.strokeRect( 0, 0, w, h);

  var snake_array;

  create_snake();
  function create_snake(){
    var length = 5;
    snake_array = [];
    for(var i = length-1;i>=0;i--){
      snake_array.push({x:i,y:0});
    }
  }

  function paint(){
    var nx = snake_array[0].x;
    var ny = snake_array[0].y;
    nx++;


    var tail = snake_array.pop();
    tail.x = nx;  //modify what this grabs later
    snake_array.unshift(tail);


    for(var i=0;i<snake_array.length;i++)
    {
      var c = snake_array[i];
      ctx.fillStyle = "green";
      ctx.fillRect(c.x*cw,c.y*cw,cw,cw);
      ctx.strokeStyle = "black";
      ctx.strokeRect(c.x*cw,c.y*cw, cw, cw);
    }
  }
  game_loop = setInterval(paint, 60);
});


