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
    if (sec == 5){
      SQL();
    }
    if(myname == 1){
      if(p2 != null){
        gameState = 1;
        showfullbutton();
      }
    } else if(myname == 2){
      if (p1 != null){
        newshuffle();
        gameState = 1;
      }
    }
  }else if(gameState == 1){
      bmusic.loop();
      jazz1.loop();
      game.Round = 1;
      gameState = 2;
  }else if(gameState == 2){
    if (sec == 5){
      SQL();
    }
    updatevisual();
  }else if(gameState == 5){
    image(continueimage, 0, 0, 1200, 800);
  }
}

function updatevisual(){
  image(table, 0, 0, 1200, 800);
  playerProfile1 = new PlayerProfile(100,100,200,200, p1.Name, p1.Chips - p1.Bets);
  playerProfile2 = new PlayerProfile(100,410,200,200, p2.Name, p2.Chips - p2.Bets);
  playerProfile1.show();
  playerProfile2.show();
    GameProfile = new Popups(430,400,300,150,255, "Pot: " + game.Pot, "P1 Bet: " + p1.Bets, "P2 Bet: " + p2.Bets);
  GameProfile.show();
  //popup.show();
  if (myname == 1){
    game.Hand.showHand(430,250);
    game.p1Hand.showHand(100,200);
    game.p2Hand.showHand(100,510);
    gamep1();
  } else if (myname == 2){
    showpgamecards(430,250);
    showp1cards(100,200);
    showp2cards(100,510);
    gamep2();
  }
  if (activebutton) {
    buttonReady.html('Ready: ' + betchips);
  }
}

function counter(){
  if (sec == 10){
    sec = 0;
  }
  sec ++;
}

//SOMETHING PRESSED!

function keyPressed(){
  if (keyCode === ENTER) {
    if (gameState == 5){
      gameState = 1;
    } else {
      if (bmusic.isPlaying()){
        bmusic.stop();
      } else{
        bmusic.loop();
      }
      if (jazz1.isPlaying()){
        jazz1.stop();
      } else{
        jazz1.loop();
      }
    }
  }
}

function mouseClicked() {
  //Console log click position
  console.log(mouseX + " " + mouseY);
  if (gameState == 0) {
    if (mouseY > 120 && mouseY < 680) {
      if (mouseX > 65 && mouseX < 400) {
        newshuffle();
        newhand();
        p2 = null;
        myname = 1;
        createCookie("myname", myname);
        gameState = 10;
        CreateSQL();
      } if (mouseX > 800 && mouseX < 1130) {
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
  popupstate = new Popups(W-300, 100, 250, 150,255, "You Won", "a Pot of:", game.Pot);
  popupstate.show();
  if (myname == 1){
    p1.Chips += game.Pot;
  } else if(myname == 2){
    p2.Chips += game.Pot;
  }
  resetgame();
}

function playerlost(){
  popupstate = new Popups(W-300, 100, 250, 150,255, "You Lost", "a Pot of:", game.Pot);
  popupstate.show();
  if (myname == 1){
    if (p1.Bet4 == -1){
      p1.Chips -= p1.Bets + 1;
    } else{
      p1.Chips -= p1.Bets;
    }
  } else if(myname == 2){
    if (p2.Bet4 == -1){
      p2.Chips -= p2.Bets + 1;
    } else{
      p2.Chips -= p2.Bets;
    }
  }
  resetgame();
}

function resetgame(){
  gameState = 5;
  game.Pot = 0;
  game.Round = 1;
  game.Minbet = 0;
  p1.Name = "Player 1";
  p2.Name = "Player 2";
  p1.Bet1 = 0;
  p2.Bet1 = 0;
  p1.Bet2 = 0;
  p2.Bet2 = 0;
  p1.Bet3 = 0;
  p2.Bet3 = 0;
  p1.Bet4 = 0;
  p2.Bet4 = 0; 
  p1.Bets = 0;
  p2.Bets = 0;
}



//CARDS!!

function checkwinner(){
  var hand1 = Hand.solve([game.p1Hand.cards[0].shortName, game.p1Hand.cards[1].shortName, game.Hand.cards[0].shortName, game.Hand.cards[1].shortName, game.Hand.cards[2].shortName, game.Hand.cards[3].shortName, game.Hand.cards[4].shortName]);
  var hand2 = Hand.solve([game.p2Hand.cards[0].shortName, game.p2Hand.cards[1].shortName, game.Hand.cards[0].shortName, game.Hand.cards[1].shortName, game.Hand.cards[2].shortName, game.Hand.cards[3].shortName, game.Hand.cards[4].shortName]);
  var winner = Hand.winners([hand1, hand2]);
  if (winner.length == 2){
    resetgame();
    console.log("No Winner!");
  } else if (winner[0].cardPool == hand1.cardPool){
    if (myname == 1){
      playerwin();
    } else if (myname == 2){
      playerlost();
    }
  }else if (winner[0].cardPool == hand2.cardPool){
    if (myname == 1){
      playerlost();
    } else if (myname == 2){
      playerwin();
    }
  }
}

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
  
function addChips(x){
  console.log(x);
  betchips += x;
	random(sounds).play();
}

function donebetting(){
  chipsPush.play();
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

//Show cards, omdat Class kut doet

function showgamecards(x, y){
  for (let n in game.Hand.cards) {
    x2 = x+(n*70);
    textAlign(CENTER, CENTER);
    stroke(game.Hand.cards[n].color[0],game.Hand.cards[n].color[1],game.Hand.cards[n].color[2]);
    strokeWeight(2);
    fill(255,255,255);
    rect(x2, y, 60, 100);
    noStroke();
    fill(game.Hand.cards[n].color[0],game.Hand.cards[n].color[1],game.Hand.cards[n].color[2]);
    textSize(16);
    text(game.Hand.cards[n].dispFace, x2 + 16, y + 16);
    text(game.Hand.cards[n].dispFace, x2 + 60 - 16, y + 100- 16);
    textSize(48);
    text(game.Hand.cards[n].dispSuit, x2 + 30, y + 50);
  }
}

function showp1cards(x ,y){
  for (let n in game.p1Hand.cards) {
    x2  = x+(n*70);
    textAlign(CENTER, CENTER);
    stroke(game.p1Hand.cards[n].color[0],game.p1Hand.cards[n].color[1],game.p1Hand.cards[n].color[2]);
    strokeWeight(2);
    fill(255,255,255);
    rect(x2 , y, 60, 100);
    noStroke();
    fill(game.p1Hand.cards[n].color[0],game.p1Hand.cards[n].color[1],game.p1Hand.cards[n].color[2]);
    textSize(16);
    text(game.p1Hand.cards[n].dispFace, x2  + 16, y + 16);
    text(game.p1Hand.cards[n].dispFace, x2  + 60 - 16, y + 100- 16);
    textSize(48);
    text(game.p1Hand.cards[n].dispSuit, x2  + 30, y + 50);
  }
}

function showp2cards(p, x ,y){
  for (let n in game.p2Hand.cards) {
    x2  = x+(n*70);
    textAlign(CENTER, CENTER);
    stroke(game.p2Hand.cards[n].color[0],game.p2Hand.cards[n].color[1],game.p2Hand.cards[n].color[2]);
    strokeWeight(2);
    fill(255,255,255);
    rect(x2, y, 60, 100);
    noStroke();
    fill(game.p2Hand.cards[n].color[0],game.p2Hand.cards[n].color[1],game.p2Hand.cards[n].color[2]);
    textSize(16);
    text(game.p2Hand.cards[n].dispFace, x2 + 16, y + 16);
    text(game.p2Hand.cards[n].dispFace, x2 + 60 - 16, y + 100- 16);
    textSize(48);
    text(game.p2Hand.cards[n].dispSuit, x2 + 30, y + 50);
  }
}