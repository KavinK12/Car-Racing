var back, gameState = 0, playerCount;
var form, player, game, database;
var allPlayers, cars;
var car1, car2, car3, car4;
var c1, c2, c3, c4, t1, g1;

function preload() {
  c1 = loadImage("images/car1.png");
  c2 = loadImage("images/car2.png");
  c3 = loadImage("images/car3.png");
  c4 = loadImage("images/car4.png");
  t1 = loadImage("images/track.jpg");
  g1 = loadImage("images/ground.png");
}


function setup() {
  createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
}