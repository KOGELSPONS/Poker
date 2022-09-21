let deck;
function setup() {
    createCanvas(windowWidth, windowHeight);
    var a = new Deck;
    deck = a;
    console.log(a);
}

function draw() {

    deck.shuffleDeck();
    let player = new Hand(deck.cards.splice(0,2));
    let bank = new Hand(deck.cards.splice(0,2));
    player.showHand(10,10);
    bank.showHand(windowWidth-150, 10);
    noLoop();
}