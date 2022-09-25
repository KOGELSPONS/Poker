function setup() {
  //Canvas
    canvas = createCanvas(W, H);
    background(255);
    frameRate(Frate);

  //Deck
    deck = new Deck;
    console.log(deck);

  //Sound
    bmusic.setVolume(0.1);

  //Button
    button10 = createButton('10');
    button10.position(0, 0);
    button10.mousePressed(addChips10);

    button100 = createButton('100');
    button100.position(50, 0);
    button100.mousePressed(addChips100);

    button500 = createButton('500');
    button500.position(100, 0);
    button500.mousePressed(addChips500);

    buttonReady = createButton('Ready: ' + betchips);
    buttonReady.position(150, 0);
    buttonReady.mousePressed(donebetting);

  //Database
}