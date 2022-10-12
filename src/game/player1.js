function gamep1(){
  if(game.Round == 1){
    popup = new Popups(W-300, H-200, 250, 150,255, "Round:"+ game.Round, '', '');
    popup.show();
    popup.timerCountDown();
    showfullbutton();

    if(p1.Bet1 > 0){
      hidebutton();
        popup = new Popups(W-300, H-200, 250, 150,255, "Player 1", "betted:"+ p1.Bet1 + "$", '');
      popup.show();
      if(p2.Bet1 > 0){
        if(p1.Bet1 == p2.Bet1){
          game.Round = 2;
        } else if (p1.Bet1 < p2.Bet1){
          showlittlebutton();
          if(p1.Bet1 == p2.Bet1){
            hidebutton();
            game.Round = 2;
          }
        }
      }
    }
  }else if(game.Round == 2){
    popup = new Popups(W-300, H-200, 250, 150,255, "Round:"+ game.Round);
    popup.show();
    showfullbutton();
    if(p1.Bet1 > 0){
      hidebutton();
        popup = new Popups(W-300, H-200, 250, 150,255, "Player 1", "betted:"+ p1.Bet2 + "$");
        popup.show();
      if(p2.Bet2 > 0){
        if(p1.Bet2 == p2.Bet2){
          game.Round = 3;
        } else if (p1.Bet2 < p2.Bet2){
          showlittlebutton();
          if(p1.Bet2 == p2.Bet2){
            hidebutton();
            game.Round = 2;
          }
        }
      }
    }
  }else if(game.Round == 3){
    popup = new Popups(W-300, H-200, 250, 150, "Round:"+ game.Round);
    popup.show();
    showfullbutton();
    if(p1.Bet3 > 0){
      hidebutton();
      popup = new Popups(W-300, H-200, 250, 150, "Player 1", "betted:"+ p1.Bet3 + "$");
      popup.show();
      if(p2.Bet3 > 0){
        if(p1.Bet3 == p2.Bet3){
          game.Round = 4;
        } else if (p1.Bet3 < p2.Bet3){
          showlittlebutton();
          if(p1.Bet3 == p2.Bet3){
            hidebutton();
            game.Round = 3;
          }
        }
      }
    }
  }else if(game.Round == 4){
    popup = new Popups(W-300, H-200, 250, 150, "Round:"+ game.Round);
    popup.show();
    showfullbutton();
    if(p1.Bet4 > 0){
      hidebutton();
      popup = new Popups(W-300, H-200, 250, 150, "Player 1", "betted:"+ p1.Bet4 + "$");
      popup.show();
      if(p2.Bet4 > 0){
        if(p1.Bet4 == p2.Bet4){
          game.Round = 5;
        } else if (p1.Bet4 < p2.Bet4){
          showlittlebutton();
          if(p1.Bet4 == p2.Bet4){
            hidebutton();
            game.Round = 5;
          }
        }
      }
    }
  }else if(game.Round == 5){
      console.log("Checking!!!")
  }
}

//Je zet geld in
//p1.bet1 = (geld input);
//if (p2.bet1 > 0){
//  if (p1.bet1 < p2.bet1){
//    buttoncall.show(); // ronde 2
//    buttonfold.show(); // game afgelopen
//  }
//}