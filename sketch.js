var allPlayers;
var canvas,bgIMG;
var database,playerCount;
var gameState=0;
var form,player,game;
var car1,car2,car3,car4,cars;

function setup(){
    createCanvas(displayWidth-10,displayHeight-100);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();

   
}

function draw(){
  if(playerCount===4){
      game.update(1);
  }
  if(gameState===1){
      clear();
      game.play();
  }
}

