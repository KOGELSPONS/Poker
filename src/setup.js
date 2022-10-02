function setup() {
  //Canvas
    var canvas = createCanvas(W, H);
    canvas.parent('holder');
    background(255);
    frameRate(Frate);

  //Sound
    bmusic.setVolume(0.15);
    jazz1.setVolume(0.2);

  //Button
    buttonFold = createButton('Fold');
    buttonFold.position(10, H-150);
    buttonFold.mousePressed(CreateSQL);
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

  //Cookies
    createCookie("myname", "", "0.00001");
  //Database
}