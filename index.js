const { v4: uuidv4 } = require("uuid");
const colors = require("colors/safe");
const Lottery = require("./lottery.js");
const User = require("./user.js");
const LotteryDatabase = require("./database/lottery-database.js");

const lottery1 = new Lottery(undefined, "çekiliş test", ["Ahmet", "xBoy", "Çılgın Çocuk"]);
const lottery2 = new Lottery(undefined, "çekiliş test2", ["Melis", "30_56", "Çılgın Ahmet"]);

LotteryDatabase.save([lottery1, lottery2]);

const lottery3 = new Lottery(undefined, "çekiliş 3.", ["Kayra", "87987", "CiksGirl"]);
LotteryDatabase.insert(lottery3);

LotteryDatabase.remove(2);

const findByNameResult = LotteryDatabase.findByName("çekiliş test2");
console.log(colors.yellow(findByNameResult));

const serdar = findByNameResult[0].runLottery();

// var lotteryFromFile = db.load("lottery");
// console.log(colors.yellow(lotteryFromFile));
