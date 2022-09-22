let slider
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(255);
  deck = new Deck;
  console.log(deck);
  bmusic.setVolume(0.1);
  slider = createSlider(0, 360, 60, 40);
  slider.position(10, 10);
  slider.style('width', '80px');
}