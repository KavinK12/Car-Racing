var back, gameState = 0, playerCount;
var form, player, game, database;
var allPlayers;

function setup() {
  createCanvas(600,600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background("red");
}