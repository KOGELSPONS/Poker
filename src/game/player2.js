function gamep2(){
  if(game.Round == 1){
    showfullbutton();
    if(p1.Bet1 > 0){
      hidebutton();
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
    showfullbutton();
    if(p1.Bet2 > 0){
      hidebutton();
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
    showfullbutton();
    if(p1.Bet3 > 0){
      hidebutton();
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
    showfullbutton();
    if(p1.Bet4 > 0){
      hidebutton();
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