function gamep2(){
  if (p1.Bet4 == -1){
    playerwin();
  } else if (p2.Bet4 == -1){
    playerlost();
  }
  p2.Bets = p2.Bet1 + p2.Bet2 + p2.Bet3 + p2.Bet4;
  popupstate = new Popups(W-300, H-200, 250, 150,255, "Round:"+ game.Round, '', '');
  popupstate.show();
  if(game.Round == 1){
    if (p1.Bet1 > 0){
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
      showfullbutton();
      popup = new Popups(W-300, H-200, 250, 150,255, "Player 1", "betted:"+ p1.Bet4 + "$", '');
      popup.show();
      if(p2.Bet4 > 0){
        hidebutton();
        popup = new Popups(W-300, H-200, 250, 150,255, "Player 2", "betted:"+ p2.Bet4 + "$", '');
        popup.show();
      }
    }
    image(card, 97, 507, 66, 106); //other player
    image(card, 167, 507, 66, 106); //other player
  }else if(game.Round == 5){
    checkwinner();
  }
}