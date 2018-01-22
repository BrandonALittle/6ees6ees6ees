class HoneyMakerBee extends Bee{
  constructor (food, eat, color) {
    super(food, eat, color);
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot++;
  }

  giveHoney() {
    this.honeyPot--;
  }
};
