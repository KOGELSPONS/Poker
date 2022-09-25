//Config
  //Canvas variables
    var [WIDTH, W, HEIGHT, H, Frate] = [1200, 1200, 800, 800, 15]

  //Gamestate
    var gameState = 0;

  //Game Data + Player Data
    var myname;
    var game = {};
    var p1 = {};
    var p2 = {};

  //Deck
    var deck;
    game.Hand = null;
    game.p1Hand = null;
    game.p2Hand = null;

  //Chip
    var betchips = 0;

  //LocalStorage
    game.Pot = 0;
    game.Round = 0;
    game.Minbet = 0;
    

  //Database
    p1.Chips = 10000;
    p2.Chips = 10000;

    p1.Name = "Not Given";
    p2.Name = "Not Given";

    p1.Bet1 = 0;
    p2.Bet1 = 0;

    p1.Bet2 = 0;
    p2.Bet2 = 0;

    p1.Bet3 = 0;
    p2.Bet3 = 0;

    p1.Bet4 = 0;
    p2.Bet4 = 0;

  //Sounds
    var sounds = [];

function preload() {
  // Images
  table = loadImage('data/table.jpg');
  homescreen = loadImage('data/homescreen.png')

  // Sound
  bmusic = loadSound('data/background.mp3');
  sounds.push(chips1 = loadSound('data/sounds/chips1.mp3'));
  sounds.push(chips2 = loadSound('data/sounds/chips2.mp3'));
  sounds.push(chips3 = loadSound('data/sounds/chips3.mp3'));
  sounds.push(chips4 = loadSound('data/sounds/chips4.mp3'));
  chipsPush = loadSound('data/sounds/chipsPush.mp3');
  jazz1 = loadSound('data/sounds/jazz1.mp3');
  // Videos
  
}