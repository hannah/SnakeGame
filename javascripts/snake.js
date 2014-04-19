$(document).ready(function(){
  var canvas = $('#canvas')[0];
  var ctx = canvas.getContext("2d");
  var w = $('#canvas').width();
  var h = $('#canvas').height();

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
    for(var i=0;i<snake_array.length;i++)
    {
      var c = snake_array[i];
      ctx.fillStyle = "blue";
      ctx.fillRect(c.x*10,c.y*10,10,10);
      ctx.strokeStyle = "black";
      ctx.strokeRect(c.x*10,c.y*10,10,10);
    }
  }
  paint();
});


