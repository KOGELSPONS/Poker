//DRAW!!!

function draw() {

  if(gameState == 0){
    newshuffle();
    newhand();
    gameState = 1;
  }else if(gameState == 1){
    image(table, 0, 0, 1200, 800);
    bank.showHand(430,350);
    player1.showHand(550, 675);
    player2.showHand(800, 675);
    updatetext();
  }
}


function updatetext(){
  
}



//KEYPRESSED!!

function keyPressed(){
  if (keyCode === 32) {

  }

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

//CARDS!!

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

//CHIPS!!

function addChips10(){
  console.log(10);
  addChips(10);
	random(sounds).play();
}

function addChips100(){
  console.log(100);
  addChips(100);
	random(sounds).play();
}

function addChips500(){
  console.log(500);
  addChips(500);
	random(sounds).play();
}

function addChips(addedchips){
  console.log("addedchips: " + addedchips)
  betchips += addedchips;
  console.log("betchips: " + betchips);
  buttonReady = createButton('Ready: ' + betchips);
  buttonReady.position(150, 0);
  buttonReady.mousePressed(donebetting);
}

function donebetting(){
  console.log("donebetting: " + betchips);
  potupdate();
  minimumbet = betchips;
  console.log("minimumbet: " + minimumbet);
  betchips = 0;
  chipsPush.play();
}

function potupdate(){
  //grab from sql
  p1Pot = betchips;
  p2Pot = 100;
  p3Pot = 100;
  p3Pot = 100;
  //End
  //Import to SQL
  totalpot = p1Pot + p2Pot + p3Pot + p4Pot
  console.log("totalpot: " + totalpot)
  //End
}