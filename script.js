//DRAW!!!

function draw() {
  if (gameState == -1){
    //generateID();
    setTimeout('', 2000);
    gameState = 0;
  }else if(gameState == 0){
    image(homescreen, 0, 0, 1200, 800)
  }else if(gameState == 1){
    newshuffle();
    newhand();
    gameState = 2;
    playerGameProfile();
  }else if(gameState == 2){
    image(table, 0, 0, 1200, 800);
    playerGameProfile();
    updatehand();
    updatetext();
    updatebutton();
  }
    playerProfile1 = new PlayerProfile(100,100,200,200, "Player 1", p1money);
  playerProfile2 = new PlayerProfile(100,410,200,200, "Player 2", p2money);
  playerProfile3 = new PlayerProfile(900,100,200,200, "Player 3", p3money);
  playerProfile4 = new PlayerProfile(900,410,200,200, "Player 4", p4money);
}

function updatehand(){
  game.Hand.showHand(430,250);
  game.p1Hand.showHand(100,200);
  game.p2Hand.showHand(100,510);
  game.p3Hand.showHand(900,200);
  game.p4Hand.showHand(900,510);
}

function updatetext(){
  
}

function updatebutton(){
  buttonReady.html('Ready: ' + betchips);
}

//SOMETHING PRESSED!

function keyPressed(){
  if (keyCode === ENTER) {
    if (bmusic.isPlaying()){
      bmusic.stop();
    }
    else{
      bmusic.loop();
    }if (jazz1.isPlaying()){
      jazz1.stop();
    }
    else{
      jazz1.loop();
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
  
  if (keyCode === 52) {
    console.log(p1);
    console.log(p2);
    console.log(game);
    PHPtest();
  }
}

function mouseClicked() {
  //Console log click position
  console.log(mouseX + " " + mouseY);
  if (gameState == 0) {
    if (mouseY > 120 && mouseY < 680) {
      if (mouseX > 65 && mouseX < 400) {
        console.log("HOST");
        myname = 1;
        gameState = 1;
        bmusic.loop();
        jazz1.loop();
        buttonshow();
      } if (mouseX > 800 && mouseX < 1130) {
        console.log("JOIN");
        myname = 2;
        gameState = 1;
        bmusic.loop();
        jazz1.loop();
        buttonshow();
      }
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
  game.Hand = new CardHand(deck.cards.splice(0,5));
  game.p1Hand = new CardHand(deck.cards.splice(0,2));
  game.p2Hand = new CardHand(deck.cards.splice(0,2));
  game.p3Hand = new CardHand(deck.cards.splice(0,2));
  game.p4Hand = new CardHand(deck.cards.splice(0,2));
  console.log(game.Hand);
  console.log(game.p1Hand);
  console.log(game.p2Hand);
}

//CHIPS!!

function buttonshow(){
  buttonFold.show();
  buttonCall.show();
  buttonReady.show();
  chipsholder = document.getElementById("chipsholder");
  chipsholder.style.display = "block";
}

function playerGameProfile(){
  playerProfile1.show();
  playerProfile2.show();
  playerProfile3.show();
  playerProfile4.show();
}
  
function addChips1(){
  console.log(1);
  addChips(1);
	random(sounds).play();
  p1money = p1money -1;
}

function addChips5(){
  console.log(5);
  addChips(5);
	random(sounds).play();
  p1money = p1money -5;
}

function addChips10(){
  console.log(10);
  addChips(10);
	random(sounds).play();
  p1money = p1money -10;
}

function addChips25(){
  console.log(25);
  addChips(25);
	random(sounds).play();
  p1money = p1money -25;
}

function addChips100(){
  console.log(100);
  addChips(100);
	random(sounds).play();
  p1money = p1money -100;
}

function addChips(addedchips){
  console.log("addedchips: " + addedchips)
  betchips += addedchips;
  console.log("betchips: " + betchips);
}

function donebetting(){
  chipsPush.play();
  console.log("donebetting: " + betchips);
  potupdate();
  minimumbet = betchips;
  console.log("minimumbet: " + minimumbet);
  betchips = 0;
}

function potupdate(){
  //grab from sql
  p1Pot = betchips;
  p2Pot = betchips;
  //End
  //Import to SQL
  totalpot = p1Pot + p2Pot;
  console.log("totalpot: " + totalpot);
  //End
}