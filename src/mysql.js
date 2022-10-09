function SQL(){
  if (myname == 1){
    bake_cookie("p1", p1);
    bake_cookie("game", game);
    SQLPlayer1();

    //Read Cookie
    p2 = read_cookie("p2");

    //Dev
    console.log(p1);
    console.log(p2);
    console.log(game);
    
  }else if (myname == 2){
    bake_cookie("p2", p2);
    SQLPlayer2();

    //Read Cookie
    p1 = read_cookie("p1");
    game = read_cookie("game");

    //Dev
    console.log(p1);
    console.log(p2);
    console.log(game);
    
  }else {
    console.log("||||||||||||||||||||||||||||||||||||||||")
    console.log("||||||||||||||||||||||||||||||||||||||||")
    console.log("SQL ERROR!")
    console.log("||||||||||||||||||||||||||||||||||||||||")
    console.log("||||||||||||||||||||||||||||||||||||||||")
  }
}


function CreateSQL(){
  fetch("https://pokergetscammed.eu/PHP/database.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",},
  })
}

function SQLPlayer1(){
  fetch("https://pokergetscammed.eu/PHP/player.php", {
    method: "POST",
    headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",},
  })
}

function SQLPlayer2(){
  fetch("https://pokergetscammed.eu/PHP/player2.php", {
    method: "POST",
    headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",},
  })
}

function generateID(){
  ID = 10;
  //ID = Math.floor(100000 + Math.random() * 900000);
  createCookie("ID", ID);
}

function createCookie(name, value) {
  var ccookie = [name, '=', value, '; domain=.', window.location.host.toString(), '; path=/;'].join('');
  document.cookie = ccookie;
}

function bake_cookie(name, value) {
  var value1 = JSON.stringify(value);
  var value2 = JSON.stringify(value1);
  var value3 = value2.replaceAll('"', "'");
  var cookie = [name, '=', value3, '; domain=.', window.location.host.toString(), '; path=/;'].join('');
  document.cookie = cookie;
}

function read_cookie(name) {
  var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
  result && (result = (result[1]).replaceAll("'", '"'));
  var result2 = JSON.parse(result);
  var result3 = JSON.parse(result2);
  return result3;
}
