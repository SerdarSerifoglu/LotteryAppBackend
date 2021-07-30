const { v4: uuidv4 } = require("uuid");

class Lottery {
  constructor(id = uuidv4(), name, participants = []) {
    this.id = id;
    this.name = name;
    this.participants = participants;
    this.winner = "";
    this.createDate = Date.now();
  }

  runLottery() {
    //test amaçlı yazıldı
    return this;
  }

  static create({ id, name }) {
    return new Lottery(id, name);
  }
}

module.exports = Lottery;
