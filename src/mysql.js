function SQL(){
  if (myname == 1){
    generateID();
    createCookie("myname", "1");
    bake_cookie("p1", p1);
    createCookie("p2", 'Player2 Opvuller');
    bake_cookie("game", game);
    test1 = read_cookie("p1");
    //test2 = read_cookie("p2");
    test3 = read_cookie("game");
    console.log(test1);
    //console.log(test2);
    console.log(test3);
    //PUSH game
    //PUSH p1
    //PULL p2
  }else if (myname == 2){
    createCookie("myname", "2");
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
  fetch("https://pokergetscammed.eu/PHP/test.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  })
}

function SQLPlayer1(){
  fetch("https://pokergetscammed.eu/PHP/player.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  })
}

function SQLPlayer2(){
  fetch("https://pokergetscammed.eu/PHP/player2.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  })
}

function generateID(){
  //TijdelijkeID = 10;
  TijdelijkeID = Math.floor(100000 + Math.random() * 900000);
  createCookie("ID", TijdelijkeID);
  setTimeout('', 2000);
  ID = read_cookie("ID");
  console.log(ID);
}

// Function to create the cookie
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