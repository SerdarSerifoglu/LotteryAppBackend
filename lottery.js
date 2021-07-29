const { v4: uuidv4 } = require("uuid");

class Lottery {
  constructor(name, participants = []) {
    this.id = uuidv4();
    this.name = name;
    this.participants = participants;
    this.winner = "";
    this.createDate = Date.now();
  }
}

module.exports = Lottery;
