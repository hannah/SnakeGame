$(document).ready(function(){
  var canvas = $('#canvas')[0];
  var ctx = canvas.getContext("2d");
  var w = $('#canvas').width();
  var h = $('#canvas').height();

  var cw = 10;
  var d;

  var snake_array;

  function init(){
    d = "right";
    create_snake();
    if(typeof game_loop != "undefined")clearInterval(game_loop);
    game_loop = setInterval(paint, 60);
  }

  init();

  function create_snake(){
    var length = 5;
    snake_array = [];
    for(var i = length-1;i>=0;i--){
      snake_array.push({x:i,y:0});
    }
  }

  function paint(){

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'black';
    ctx.strokeRect( 0, 0, w, h);

    var nx = snake_array[0].x;
    var ny = snake_array[0].y;

    if(d == "right")nx++;
    else if(d == "left")nx--;
    else if(d == "up")ny--;
    else if(d == "down")ny++;

    if(nx == -1||nx == w/cw||ny == -1||ny == h/cw)
    {
      init();
      return;
    }

    var tail = snake_array.pop();
    tail.x = nx; tail.y = ny;  //modify what this grabs later
    snake_array.unshift(tail);


    for(var i=0;i<snake_array.length;i++)
    {
      var c = snake_array[i];
      ctx.fillStyle = "#83F52C";
      ctx.fillRect(c.x*cw,c.y*cw,cw,cw);
      ctx.strokeStyle = "black";
      ctx.strokeRect(c.x*cw,c.y*cw, cw, cw);
    }
  }

  $(document).keydown(function(e){
    var key = e.which;
    if(key == "37")d = "left";
    else if(key =="38")d = "up";
    else if(key == "39")d = "right";
    else if(key =="40")d = "down";
  });

});


