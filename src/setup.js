function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(255);
  deck = new Deck;
  console.log(deck);
  bmusic.setVolume(0.1);
  let inp = createInput('');
  inp.position(200, canvasHeight);
  inp.size(100);
  inp.input(myInputEvent);
}