let deck;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(255);
  var a = new Deck;
  deck = a;
  console.log(a);
  deck.shuffleDeck();
}

function draw() {
  image(table, 100, 100, 1000, 600);
  let bank = new Hand(deck.cards.splice(0,5));
  let player = new Hand(deck.cards.splice(0,2));
  console.log(bank);
  console.log(player);
  bank.showHand(430,350);
  player.showHand(550, 675);
  noLoop();

}