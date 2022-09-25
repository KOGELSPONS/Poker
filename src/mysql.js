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