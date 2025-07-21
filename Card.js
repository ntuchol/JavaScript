class Card {
  constructor(suit, rank, value) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
  }

  show() {
    console.log(`${this.rank} of ${this.suit} (Value: ${this.value})`);
  }
}

const aceOfSpades = new Card("Spades", "Ace", 11);
aceOfSpades.show(); // Output: Ace of Spades (Value: 11)
