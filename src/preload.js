//Config
  //Canvas variables
    var [WIDTH, W, HEIGHT, H, Frate] = [1200, 1200, 800, 800, 30]

  //Gamestate
    var gameState = 0;

  //Deck
    var deck;
    var bank;
    var player1;
    var player2;

  //Database
  var p1Chip = 1000;
  var p2Chip = 1000;
  var p3Chip = 1000;
  var p4Chip = 1000;
  var p1Pot = 0;
  var p2Pot = 0;
  var p3Pot = 0;
  var p4Pot = 0;
  var tChip = 0;
  var chips = 0;
  var betchips = 0;

  //Sounds
var sounds = [];

function preload() {
  // Images
  table = loadImage('data/table.png');

  // Sound
  bmusic = loadSound('data/background.mp3');
  sounds.push(chips1 = loadSound('data/sounds/chips1.mp3'));
  sounds.push(chips2 = loadSound('data/sounds/chips2.mp3'));
  sounds.push(chips3 = loadSound('data/sounds/chips3.mp3'));
  sounds.push(chips4 = loadSound('data/sounds/chips4.mp3'));
  chipsPush = loadSound('data/sounds/chipsPush.mp3');
  // Videos
  
}