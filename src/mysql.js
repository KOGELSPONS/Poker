function SQL(){
  if (myname == 1){
    generateID();
    createCookie("myname", "1", "10");
    bake_cookie("p1", p1);
    bake_cookie("p2", 'null');
    bake_cookie("game", game);
    test1 = read_cookie("p1");
    test2 = read_cookie("p2");
    test3 = read_cookie("game");
    console.log(test1);
    console.log(test2);
    console.log(test3);
    //PUSH game
    //PUSH p1
    //PULL p2
  }else if (myname == 2){
    createCookie("myname", "2", "10");
    bake_cookie("p2", p2);
    test2 = read_cookie("p2");
    console.log(test2);
    //PULL game
    //PULL p1
    //PUSH p2
  }else {
    console.log("||||||||||||||||||||||||||||||||||||||||")
    console.log("||||||||||||||||||||||||||||||||||||||||")
    console.log("SQL ERROR!")
    console.log("||||||||||||||||||||||||||||||||||||||||")
    console.log("||||||||||||||||||||||||||||||||||||||||")
  }
}


function CreateSQL(){
  fetch("https://pokergame.kogelspons.repl.co//PHP/test.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  })
}

function SQLPlayer1(){
  fetch("https://pokergame.kogelspons.repl.co/PHP/player.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  })
}

function SQLPlayer2(){
  fetch("https://pokergame.kogelspons.repl.co//PHP/player2.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  })
}

function generateID(){
  //TijdelijkeID = 10;
  TijdelijkeID = Math.floor(100000 + Math.random() * 900000);
  createCookie("ID", TijdelijkeID, "10");
  setTimeout('', 2000);
  ID = read_cookie("ID");
  console.log(ID);
}

// Function to create the cookie
function createCookie(name, value, days) {
    var expires;
      
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
      
    document.cookie = escape(name) + "=" + 
        escape(value) + expires + "; path=/";
}

function bake_cookie(name, value) {
  var cookie = [name, '=', JSON.stringify(value), '; domain=.', window.location.host.toString(), '; path=/;'].join('');
  console.log(typeof cookie);
  document.cookie = cookie;
}

function read_cookie(name) {
 var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
 result && (result = JSON.parse(result[1]));
 return result;
}