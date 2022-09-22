function draw() {

  if(gameState == 0){
    newshuffle();
    newhand();
    gameState = 1;
  }else if(gameState == 1){
    image(table, 100, 100, 1000, 600);
    bank.showHand(430,350);
    player1.showHand(550, 675);
    player2.showHand(800, 675);
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

  if (keyCode === 51) {
    var hand1 = Hand.solve(['Ad', 'As', 'Jc', 'Th', '2d', 'Qs', 'Qh']);
    var hand2 = Hand.solve(['Ad', 'As', 'Jc', 'Th', '2d', '3s', '3h']);
    var winner = Hand.winners([hand1, hand2]);
    console.log("------------------- Start")
    console.log(winner);
    console.log(winner[0].cardPool);
    console.log("-------------------")
    console.log(hand1);
    console.log(hand1.descr);
    console.log("-------------------")
    console.log(hand2);
    console.log(hand2.descr);
    console.log("------------------- End")

    if (winner.length == 2){
      console.log("No Winner!")
    } else if (winner[0].cardPool == hand1.cardPool){
      console.log("winner:  1")
      console.log("Won by:  " + hand1.descr);
    }else if (winner[0].cardPool == hand2.cardPool){
      console.log("winner:  2")
      console.log("Won by:  " + hand2.descr);
    }
  }
}

function newshuffle(){
  deck = new Deck;
  deck.shuffleDeck();
  console.log(deck);
}

function newhand(){
  bank = new CardHand(deck.cards.splice(0,5));
  player1 = new CardHand(deck.cards.splice(0,2));
  player2 = new CardHand(deck.cards.splice(0,2));
  console.log(bank);
  console.log(player1);
  console.log(player2);
}

function addhands(){
  
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
}