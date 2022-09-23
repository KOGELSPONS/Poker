let timer = null; // <-- This will hold a reference to the timer

var counter = 5;

timer = setInterval(function(){
  if(counter === 0){
    clearTimeout(timer);  // Stop the timer
    console.log("Times up!");
  } else {
    counter--);
  }
}, 1000);