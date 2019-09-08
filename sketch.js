var whale;
var clouds = [];
var drops =[];
var score =0;
let state;
const STATE_GAME_OVER_PLAY_AGAIN = 1;
let animationFrame;
// var tally=0;

function preload(){
  font = loadFont('fonts/press-start-2p/PressStart2P.ttf');
  docker = loadImage('docker.png');
  img2 = loadImage('img2.jpg');
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  textFont(font);
  whale = new Whale();
  for(var i=0;i<4;i++){
    clouds[i] = new Cloud(i*40,80,0,true);
  }
}
function draw(){
  background(15,15,15);
  whale.show();
  whale.move();

  textSize(10);
  fill(255);
  text('Score: '+ score , 40,40);

  for(var i=0;i<drops.length;i++){
    drops[i].show();
    drops[i].move();

    for(var j=0;j<clouds.length;j++){
      if(drops[i].hits(clouds[j])){
        score +=2;
        clouds[j].grow();
        drops[i].evaporate(); 
      }
    }
  }
  var edge = false;
  for(var i=0;i<clouds.length;i++){
    clouds[i].show();
    clouds[i].move();
    if(clouds[i].y > height-70){
      state = STATE_GAME_OVER_PLAY_AGAIN;
      animationFrame = 0;
    }
    if(clouds[i].x>width || clouds[i].x<0){
      edge = true;
    }
    if(edge){
      for(var i=0;i<clouds.length;i++){
        clouds[i].shiftDown();
    }
  }
  
}
    // for(var i = 0; i<clouds.length;i++){
    //   if(clouds[i].burst == false){
    //     tally++;
    //     console.log(tally);
    //   }
    // }
    

  for(var i=drops.length-1; i>= 0;i--){
    if(drops[i].toDelete) {
      drops.splice(i,1);
    } 
  }

  if (state === STATE_GAME_OVER_PLAY_AGAIN){
    background(0);
    fill(255);
    textSize(15);
    text('GAME OVER', windowWidth/2 - 60,windowHeight/2 - 200);
    text('SCORE: ' + score, windowWidth/2 - 60,windowHeight/2 - 170);
    // if(tally == clouds.length){
    //   text('YOU GOT EM ALL!!!', windowWidth/2 - 160,windowHeight/2 - 120);
    // }

  }
  if (animationFrame == 0) {
      text('PLAY AGAIN', windowWidth/2 - 70,windowHeight/2 - 130);
      image(img2,windowWidth/2 - 90,windowHeight/2 - 50,170,170);
  }
}

function keyReleased(){
  if(key != ' ')
    whale.setDir(0);
}
function keyPressed(){
  if(key === ' '){
    var drop = new Drop(whale.x,height-122);
    drops.push(drop);
  }
  if(keyCode === RIGHT_ARROW){
    whale.setDir(1);
  }else if (keyCode === LEFT_ARROW){
    whale.setDir(-1);
  }
}
