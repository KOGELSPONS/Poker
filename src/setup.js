let deck;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(255);
  var a = new Deck;
  deck = a;
  console.log(a);
  deck.shuffleDeck();
  let bank = new Hand(deck.cards.splice(0,5));
  let player = new Hand(deck.cards.splice(0,2));
  bmusic.setVolume(0.1);
}

function draw() {
  image(table, 100, 100, 1000, 600);
  console.log(bank);
  console.log(player);
  //let hand1 = Hand.solve(['Ad', 'As', 'Jc', 'Th', '2d', '3c', 'Kd']);
  //let hand2 = Hand.solve(['Ad', 'As', 'Jc', 'Th', '2d', 'Qs', 'Qd']);
  //let winner = Hand.winners([hand1, hand2]);
  //console.log(hand1);
  //console.log(hand2);
  //console.log(winner);
  bank.showHand(430,350);
  player.showHand(550, 675);
}

function keyPressed(){
  if (keyCode === ENTER) {
    if bmusic.isPlaying(){
      bmusic.stop();
    }
    else{
      bmusic.loop();
    }
  }
}