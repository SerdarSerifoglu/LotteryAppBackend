const { v4: uuidv4 } = require("uuid");
const colors = require("colors/safe");
const Lottery = require("./lottery.js");
const User = require("./user.js");
const LotteryDatabase = require("./database/lottery-database.js");

const lottery1 = new Lottery("çekiliş test", ["Ahmet", "xBoy", "Çılgın Çocuk"]);
const lottery2 = new Lottery("çekiliş test2", ["Melis", "30_56", "Çılgın Ahmet"]);

LotteryDatabase.save([lottery1, lottery2]);

const lottery3 = new Lottery("çekiliş 3.", ["Kayra", "87987", "CiksGirl"]);
LotteryDatabase.insert(lottery3);

LotteryDatabase.remove(2);

const findByNameResult = LotteryDatabase.findByName("çekiliş test2");
console.log(colors.yellow(findByNameResult));

// var lotteryFromFile = db.load("lottery");
// console.log(colors.yellow(lotteryFromFile));
