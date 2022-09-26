function SQL(){
  if (myname == 1){
    createCookie("myname", "1", "10");
    //PUSH game
    //PUSH p1
    //PULL p2
  }else if (myname == 2){
    createCookie("myname", "2", "10");
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

function generateID(){
  TijdelijkeID = 10;
  //TijdelijkeID = Math.floor(100000 + Math.random() * 900000);
  createCookie("ID", TijdelijkeID, "10");
  setTimeout('', 2000);
  if (read_cookie("ID") == 0){
    console.log("FAIL");
    generateID();
  } else{
    ID = generateID;
  }
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
  document.cookie = cookie;
}

function read_cookie(name) {
 var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
 result && (result = JSON.parse(result[1]));
 return result;
}