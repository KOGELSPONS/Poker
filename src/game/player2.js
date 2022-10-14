function gamep1(){
  if(game.Round == 1){
    if (p1.Bet1 > 0){
      popup = new Popups(W-300, H-200, 250, 150,255, "Round:"+ game.Round, '', '');
      popup.show();
      showfullbutton();
      popup = new Popups(W-300, H-200, 250, 150,255, "Player 1", "betted:"+ p1.Bet1 + "$", '');
      popup.show();
      if(p2.Bet1 > 0){
        hidebutton();
        popup = new Popups(W-300, H-200, 250, 150,255, "Player 2", "betted:"+ p2.Bet1 + "$", '');
        popup.show();
      }
    }
    image(card, 427, 247, 66, 106);// Deck 1
    image(card, 497, 247, 66, 106);// Deck 2
    image(card, 567, 247, 66, 106);// Deck 3
    image(card, 637, 247, 66, 106);// Deck 4
    image(card, 707, 247, 66, 106);// Deck 5
    image(card, 97, 197, 66, 106); // you
    image(card, 167, 197, 66, 106); // you
    image(card, 97, 507, 66, 106); //other player
    image(card, 167, 507, 66, 106); //other player
  }else if(game.Round == 2){
    if (p1.Bet2 > 0){
      popup = new Popups(W-300, H-200, 250, 150,255, "Round:"+ game.Round, '', '');
      popup.show();
      showfullbutton();
      popup = new Popups(W-300, H-200, 250, 150,255, "Player 1", "betted:"+ p1.Bet2 + "$", '');
      popup.show();
      if(p2.Bet2 > 0){
        hidebutton();
        popup = new Popups(W-300, H-200, 250, 150,255, "Player 2", "betted:"+ p2.Bet2 + "$", '');
        popup.show();
      }
    }
    image(card, 427, 247, 66, 106);// Deck 1
    image(card, 497, 247, 66, 106);// Deck 2
    image(card, 97, 197, 66, 106); //other player
    image(card, 167, 197, 66, 106); //other player
  }else if(game.Round == 3){
    if (p1.Bet3 > 0){
      popup = new Popups(W-300, H-200, 250, 150,255, "Round:"+ game.Round, '', '');
      popup.show();
      showfullbutton();
      popup = new Popups(W-300, H-200, 250, 150,255, "Player 1", "betted:"+ p1.Bet3 + "$", '');
      popup.show();
      if(p2.Bet3 > 0){
        hidebutton();
        popup = new Popups(W-300, H-200, 250, 150,255, "Player 2", "betted:"+ p2.Bet3 + "$", '');
        popup.show();
      }
    }
    image(card, 427, 247, 66, 106);// Deck 1
    image(card, 97, 197, 66, 106); //other player
    image(card, 167, 197, 66, 106); //other player
  }else if(game.Round == 4){
    if (p1.Bet4 > 0){
      popup = new Popups(W-300, H-200, 250, 150,255, "Round:"+ game.Round, '', '');
      popup.show();
      showfullbutton();
      popup = new Popups(W-300, H-200, 250, 150,255, "Player 1", "betted:"+ p1.Bet4 + "$", '');
      popup.show();
      if(p2.Bet4 > 0){
        hidebutton();
        popup = new Popups(W-300, H-200, 250, 150,255, "Player 2", "betted:"+ p2.Bet4 + "$", '');
        popup.show();
      }
    }
  }else if(game.Round == 5){
    console.log("Checking!!!")
  }
}