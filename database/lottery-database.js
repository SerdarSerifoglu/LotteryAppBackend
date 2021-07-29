const BaseDatabase = require("./base-database");
const Lottery = require("../lottery");

class LotteryDatabase extends BaseDatabase {
  constructor() {
    super(Lottery);
  }

  findByName = (name) => {
    const objects = this.load();
    return objects.filter((o) => o.name.indexOf(name) != -1);
  };
}

module.exports = new LotteryDatabase(Lottery);
