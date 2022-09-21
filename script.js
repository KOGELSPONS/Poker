function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(255);
  deck = new Deck;
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
    player1.showHand(550, 675);
    //player2.showHand(800, 675);
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
  if (keyCode === 49) {
    newhand();
  }
  if (keyCode === 50) {
    newshuffle();
    newhand();
  }
}

function newshuffle(){
  deck = new Deck;
  deck.shuffleDeck();
  console.log(deck);
  
}

function newhand(){
  bank = new Hand(deck.cards.splice(0,5));
  player1 = new Hand(deck.cards.splice(0,2));
  //player2 = new Hand(deck.cards.splice(0,2));
  console.log(bank);
  console.log(player1);
}