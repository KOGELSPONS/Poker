function SQL(){
  if (myname == 1){
    bake_cookie("p1", p1);
    bake_cookie("game", game);
    SQLPlayer1();

    //Read Cookie
    p2 = read_cookie("p2");
    p1 = read_cookie("p1");

    console.log(p2);
    
  }else if (myname == 2){
    bake_cookie("p2", p2);
    SQLPlayer2();

    //Read Cookie
    p1 = read_cookie("p1");
    game = read_cookie("game");
    
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
  var value2 = JSON.stringify(value);
  var value3 = encodeURIComponent(value2);
  console.log(value3);
  var cookie = [name, '=', value3, '; domain=.', window.location.host.toString(), '; path=/;'].join('');
  document.cookie = cookie;
}

function read_cookie(name) {
  var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
  result && (result = (result[1]));
  var result2 = decodeURIComponent(result);
  console.log(result2);
  var result3 = JSON.parse(result2);
  console.log(result3);
  return result3;
}

