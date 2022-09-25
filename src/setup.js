function setup() {
  //Canvas
    var canvas = createCanvas(W, H);
    canvas.parent('holder');
    background(255);
    frameRate(Frate);

  //Deck
    deck = new Deck;
    console.log(deck);

  //Sound
    bmusic.setVolume(0.15);
    jazz1.setVolume(0.2);

  //Button
    button10 = createButton('10');
    button10.position(0, 0);
    button10.mousePressed(addChips10);
    button10.parent('holder');

    button100 = createButton('100');
    button100.position(50, 0);
    button100.mousePressed(addChips100);
    button100.parent('holder');

    button500 = createButton('500');
    button500.position(100, 0);
    button500.mousePressed(addChips500);
    button500.parent('holder');

    buttonReady = createButton('Ready: ' + betchips);
    buttonReady.position(150, 0);
    buttonReady.mousePressed(donebetting);
    buttonReady.parent('holder');

  //Cookies
  createCookie("myname", "", "10");

  //Database
}