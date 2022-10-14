//Config
  //Canvas variables
    var [WIDTH, W, HEIGHT, H, Frate] = [1200, 1200, 800, 800, 15]

  //Gamestate
    var gameState = 0;

  //Game Data + Player Data
    var myname;
    var TijdelijkeID;
    var ID;
    var game = {};
    var p1 = {};
    var p2 = {};
    let playerProfile1;
    let playerProfile2;
    let popup ;
    let popupstate ;
    var activebutton = false;
    var sec = 0;
  //HTML DATA
    var chipsholder = document.getElementById("chipsholder");
    var popupFade = 255;
    var fadeAmount = -3
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
    p1.Chips = 1000;
    p2.Chips = 1000;

    p1.Name = "Player 1";
    p2.Name = "Player 2";

    //Blind bet
    p1.Bet1 = 0;
    p2.Bet1 = 10;

    //Flush
    p1.Bet2 = 0;
    p2.Bet2 = 10;

    //Pre River
    p1.Bet3 = 0;
    p2.Bet3 = 10;

    //River
    p1.Bet4 = 0; // -1 fold
    p2.Bet4 = 10; // -1 fold

    //Total bet
    p1.Bets = 0;
    p2.Bets = 0;

  //Sounds
    var sounds = [];

function preload() {
  // Images
  table = loadImage('data/table.jpg');
  homescreen = loadImage('data/menuBackground.png')
  card = loadImage('data/card.png');
  // Sound
  bmusic = loadSound('data/sounds/background.mp3');
  sounds.push(chips1 = loadSound('data/sounds/chips1.mp3'));
  sounds.push(chips2 = loadSound('data/sounds/chips2.mp3'));
  sounds.push(chips3 = loadSound('data/sounds/chips3.mp3'));
  sounds.push(chips4 = loadSound('data/sounds/chips4.mp3'));
  chipsPush = loadSound('data/sounds/chipsPush.mp3');
  jazz1 = loadSound('data/sounds/jazz1.mp3');
  loadinggif = loadImage('data/loadingscreen.gif');
  continueimage = loadImage('data/continue.png');
  // Videos
  
}

function setup() {
  //Canvas
    var canvas = createCanvas(W, H);
    canvas.parent('holder');
  
    background(255);
    frameRate(Frate);

  //Interval
    setInterval(counter(), 1000);

  //Sound
    bmusic.setVolume(0.15);
    jazz1.setVolume(0.2);

  //Button

    //Menu
    

    //Game
    buttonFold = createButton('Fold');
    buttonFold.position(10, H-150);
    buttonFold.mousePressed(fold);
    buttonFold.parent('holder');
    buttonFold.hide();

    buttonCall = createButton('Call');
    buttonCall.position(10, H-100);
    buttonCall.mousePressed(donebetting);
    buttonCall.parent('holder');
    buttonCall.hide();

    buttonReady = createButton('Ready: ' + betchips);
    buttonReady.position(10, H-50);
    buttonReady.mousePressed(donebetting);
    buttonReady.parent('holder');
    buttonReady.hide();
  
    generateID();
  //Database
}