function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(255);
  var a = new Deck;
  deck = a;
  console.log(deck);
  bmusic.setVolume(0.1);

}

function draw() {

  if(gameState == 0){
    newshuffle();
    newhand();
    gameState = 1;
  }else if(gameState == 1){
    image(table, 100, 100, 1000, 600);
    bank.showHand(430,350);
    player.showHand(550, 675);
  }
}

function keyPressed(){
  if (keyCode === ENTER) {
    if (bmusic.isPlaying()){
      bmusic.stop();
    }
    else{
      bmusic.loop();
    }
  }
}

function newshuffle(){
  deck.shuffleDeck();
}

function newhand(){
  bank = new Hand(deck.cards.splice(0,5));
  player = new Hand(deck.cards.splice(0,2));
  console.log(bank);
  console.log(player);
}