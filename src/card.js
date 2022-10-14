const faceNames = ["Ace", "Deuce", "Three", "Four",
                   "Five", "Six", "Seven", "Eight",
                   "Nine", "Ten", "Jack", "Queen", "King"];
const colorNames = ["Clubs", "Diamonds", "Hearts", "Spades"];
const faceDisplay = ["A", "2", "3", "4", "5", "6", "7",
                     "8", "9", "10", "J", "Q", "K"];
const colorDisplay = ["♣️", "♦️", "♥️", "♠️"];
const faceShortDisplay = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];
const colorShortNames = ["c", "d", "h", "s"];

class Card {

    constructor(f, c) {
        this.face = f;
        this.suit = c;
        this.dispFace = faceDisplay[f];
        this.dispSuit = colorDisplay[c];
        this.fullName = faceNames[f] + " of " + colorNames[c];
        this.shortName = faceShortDisplay[f] + colorShortNames[c];
        if (c == 0 || c == 3) {
            this.color = [0, 0, 0];
        }
        else {
            this.color = [255, 0, 0];
        }
        if (this.face < 10) {
          //Setting BlowJob Value
            this.BJValue = f+1;
        }
        else {
          //Setting BlowJob Value
            this.BJValue = 10;
        }
    }

    show(x, y) { 
        textAlign(CENTER, CENTER);
        stroke(this.color[0],this.color[1],this.color[2]);
        strokeWeight(2);
        fill(255,255,255);
        rect(x, y, 60, 100);
        noStroke();
        fill(this.color[0],this.color[1],this.color[2]);
        textSize(16);
        text(this.dispFace, x + 16, y + 16);
        text(this.dispFace, x + 60 - 16, y + 100- 16);
        textSize(48);
        text(this.dispSuit, x + 30, y + 50);
    }

}

class Deck {

    constructor() {
        this.cards = [];
        let n = 0;
        for(let i = 0; i < 13; i++) {
            for (let j = 0; j < 4; j++) {
                this.cards[n] = new Card(i, j);
                n++;
            }
        }
        this.shuffleDeck();
    }

    shuffleDeck() {
        shuffle(this.cards, true);
    }
}

class CardHand {

    constructor(a) {
        this.cards = a;
    }

    getValue() {
        let n;
        let val = 0;
        for (n in this.cards) {
            val = val + this.cards[n].BJValue;
        }
        return val;
    }

    showHand(x, y) {
        for (let n in this.cards) {
          if (myname == 1){
            this.cards[n].show(x+(n*70), y);
          }else if (myname == 2){
            textAlign(CENTER, CENTER);
            stroke(this.cards[n].color[0],this.cards[n].color[1],this.cards[n].color[2]);
            strokeWeight(2);
            fill(255,255,255);
            rect(x, y, 60, 100);
            noStroke();
            fill(this.cards[n].color[0],this.cards[n].color[1],this.cards[n].color[2]);
            textSize(16);
            text(this.cards[n].dispFace, x + 16, y + 16);
            text(this.cards[n].dispFace, x + 60 - 16, y + 100- 16);
            textSize(48);
            text(this.cards[n].dispSuit, x + 30, y + 50);
          }
        }
    }

    shuffleHand() {
        shuffle(this.cards, true);
    }
}