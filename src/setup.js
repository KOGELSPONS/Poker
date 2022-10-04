function setup() {
  //Canvas
    var canvas = createCanvas(W, H);
    canvas.parent('holder');
    background(255);
    frameRate(Frate);
    playerProfile1 = new PlayerProfile(100,100,200,200, "Player 1", 500);
    playerProfile2 = new PlayerProfile(100,410,200,200, "Player 2", 500);
    playerProfile3 = new PlayerProfile(900,100,200,200, "Player 3", 500);
    playerProfile4 = new PlayerProfile(900,410,200,200, "Player 4", 500);
  //Sound
    bmusic.setVolume(0.15);
    jazz1.setVolume(0.2);

  //Button
    buttonFold = createButton('Fold');
    buttonFold.position(10, H-150);
    buttonFold.mousePressed(donebetting);
    buttonFold.parent('holder');
    buttonFold.hide();

    buttonCall = createButton('Call');
    buttonCall.position(10, H-100);
    buttonCall.mousePressed(donebetting);
    buttonCall.parent('holder');
    buttonCall.hide();

    buttonReady = createButton('Ready: ' + betchips);
    buttonReady.position(10, H-50);
    buttonReady.mousePressed(donebetting);
    buttonReady.parent('holder');
    buttonReady.hide();

  //MYSQL BUTTONS
    buttonTest1 = createButton('CreateSQL');
    buttonTest1.position(0, 0);
    buttonTest1.mousePressed(CreateSQL);
    buttonTest1.parent('holder');

    buttonTest2 = createButton('Player1');
    buttonTest2.position(0, 50);
    buttonTest2.mousePressed(SQLPlayer1);
    buttonTest2.parent('holder');

    buttonTest3 = createButton('Player2');
    buttonTest3.position(0, 100);
    buttonTest3.mousePressed(SQLPlayer2);
    buttonTest3.parent('holder');

    buttonTest3 = createButton('SQL');
    buttonTest3.position(0, 150);
    buttonTest3.mousePressed(SQL);
    buttonTest3.parent('holder');

    generateID();
  //Cookies
    createCookie("myname", "", "0.00001");
  //Database
}