function setup() {
  //Canvas
    createCanvas(W, H);
    background(255);
    frameRate(Frate);

  //Deck
    deck = new Deck;
    console.log(deck);

  //Sound
    bmusic.setVolume(0.1);

  //Slider
    slider = createSlider(0, 360, 60, 40);
    slider.position(10, 10);
    slider.style('width', '80px');
}