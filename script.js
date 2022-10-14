//DRAW!!!
function draw() {
  if (gameState == -1){
    hidebutton(); 
    generateID();
    gamestate = 0;
  }else if(gameState == 0){
    image(homescreen, 0, 0, 1200, 800);
  }else if(gameState == 10){
    image(loadinggif, 0, 0, 1200, 800);
    SQL();
    if(myname == 1){
      if(p2 != null){
        gameState = 1;
        bmusic.loop();
        jazz1.loop();
        showfullbutton();
      }
    } else if(myname == 2){
      if (p1 != null){
        newshuffle();
        bmusic.loop();
        jazz1.loop();
        gameState = 1;
      }
    }
  }else if(gameState == 1){
    setInterval(sec += 1, 1000);
    if (sec == 5){
      game.Round = 1;
      gameState = 2;
    }else if (sec == 10){
      sec = 0;
    }
  }else if(gameState == 2){
    setInterval(sec += 1, 1000);
    pokergame();
    updatevisual();
    gamep1();
    if (sec == 10){
      sec = 0;
    }
  }
}

function pokergame(){
  //Checking if a player folded
  if (p1.Bet4 == -1){
    playerwin();
  } else if (p2.Bet4 == -1){
    playerwin();
  }
  //You start the game if nobody folded 
  else{
    //Checking if you are player 1 or 20
    if (myname == 1){
      //SQL();
      gamep1();
    } else if (myname == 2){
      //SQL();
      gamep2();
    }
  }
}

function updatevisual(){
  image(table, 0, 0, 1200, 800);
  playerProfile1 = new PlayerProfile(100,100,200,200, p1.Name, p1.Chips);
  playerProfile2 = new PlayerProfile(100,410,200,200, p2.Name, p2.Chips);

  playerProfile1.show();
  playerProfile2.show();
  //popup.show();
  game.Hand.showHand(430,250);
  game.p1Hand.showHand(100,200);
  game.p2Hand.showHand(100,510);
  if (activebutton) {
    buttonReady.html('Ready: ' + betchips);
  }
}

//SOMETHING PRESSED!

function keyPressed(){
  if (keyCode === ENTER) {
    if (bmusic.isPlaying()){
      bmusic.stop();
    } else{
      bmusic.loop();
    }if (jazz1.isPlaying()){
      jazz1.stop();
    } else{
      jazz1.loop();
    }
  }
  if (keyCode === 49) { // 1
    newhand();
  }
  if (keyCode === 50) { // 2
    newshuffle();
    newhand();
  }

  if (keyCode === 51) { // 3
    
    var hand1 = Hand.solve([game.p1Hand.cards[0].shortName, game.p1Hand.cards[1].shortName, game.Hand.cards[0].shortName, game.Hand.cards[1].shortName, game.Hand.cards[2].shortName, game.Hand.cards[3].shortName, 'Qh',]);
    var hand2 = Hand.solve([game.p2Hand.cards[0].shortName, game.p2Hand.cards[1].shortName, 'Jc', 'Th', '2d', '3s', '3h']);
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
  
  if (keyCode === 52) { // 4
    console.log(p1);
    console.log(p2);
    console.log(game);
  }
  if (keyCode === 53) { // 5
    game.Hand = new CardHand(game.Hand.cards);
    game.p1Hand = new CardHand(game.p1Hand.cards);
    game.p2Hand = new CardHand(game.p2Hand.cards);
    console.log(game.Hand);
    console.log(game.p1Hand);
    console.log(game.p2Hand);
  }
}

function mouseClicked() {
  //Console log click position
  console.log(mouseX + " " + mouseY);
  if (gameState == 0) {
    if (mouseY > 120 && mouseY < 680) {
      if (mouseX > 65 && mouseX < 400) {
        console.log("HOST");
        newshuffle();
        newhand();
        //p2 = null;
        myname = 1;
        createCookie("myname", myname);
        gameState = 10;
        //CreateSQL();
      } if (mouseX > 800 && mouseX < 1130) {
        console.log("JOIN");
        p1 = null;
        myname = 2;
        createCookie("myname", myname);
        gameState = 10;
      }
    }
  }
  
}

//Winning /Losing

function playerwin(){
  gameState = -1;
}

//CARDS!!

function newshuffle(){
  deck = new Deck;
  deck.shuffleDeck();
  console.log(deck);
  if (myname == 2){
    game.Hand = new CardHand(game.Hand.cards);
    game.p1Hand = new CardHand(game.p1Hand.cards);
    game.p2Hand = new CardHand(game.p2Hand.cards);
  }
}

function newhand(){
  game.Hand = new CardHand(deck.cards.splice(0,5));
  game.p1Hand = new CardHand(deck.cards.splice(0,2));
  game.p2Hand = new CardHand(deck.cards.splice(0,2));
  console.log(game.Hand);
  console.log(game.p1Hand);
  console.log(game.p2Hand);
}

//CHIPS!!

function fold(){
  if (myname == 1){
    p1.Bet4 = -1;
  } else if (myname == 2){
    p2.Bet4 = -1;
  }
}

function showfullbutton(){
  buttonFold.show();
  buttonCall.show();
  buttonReady.show();
  chipsholder = document.getElementById("chipsholder");
  chipsholder.style.display = "block";
  activebutton = true;
}

function showlittlebutton(){
  buttonFold.show();
  buttonCall.show();
}

function hidebutton(){
  activebutton = false;
  buttonFold.hide();
  buttonCall.hide();
  buttonReady.hide();
  chipsholder = document.getElementById("chipsholder");
  chipsholder.style.display = "none";
}
  
function addChips1(){
  console.log(1);
  addChips(1);
	random(sounds).play();
}

function addChips5(){
  console.log(5);
  addChips(5);
	random(sounds).play();
}

function addChips10(){
  console.log(10);
  addChips(10);
	random(sounds).play();
}

function addChips25(){
  console.log(25);
  addChips(25);
	random(sounds).play();
}

function addChips100(){
  console.log(100);
  addChips(100);
	random(sounds).play();
}

function addChips(addedchips){
  betchips += addedchips;
}

function donebetting(){
  chipsPush.play();
  if (myname == 1){
    p1.Chips = p1.Chips - betchips;
  } else if (myname ==2){
     p2.Chips = p2.Chips - betchips;
  }
  if (myname == 1){
    if (game.Round == 1){
      p1.Bet1 = betchips;
    } else if (game.Round == 2){
      p1.Bet2 = betchips;
    } else if (game.Round == 3){
      p1.Bet3 = betchips;
    } else if (game.Round == 4){
      p1.Bet4 = betchips;
    }
  }else if (myname == 2){
    if (game.Round == 1){
      p2.Bet1 = betchips;
    } else if (game.Round == 2){
      p2.Bet2 = betchips;
    } else if (game.Round == 3){
      p2.Bet3 = betchips;
    } else if (game.Round == 4){
      p2.Bet4 = betchips;
    }
  }
  betchips = 0;
}