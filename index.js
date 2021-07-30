const { v4: uuidv4 } = require("uuid");
const colors = require("colors/safe");
const Lottery = require("./lottery.js");
const User = require("./user.js");
const { lotteryDatabase } = require("./database/index.js");

const lottery1 = new Lottery(undefined, "çekiliş test", ["Ahmet", "xBoy", "Çılgın Çocuk"]);
const lottery2 = new Lottery(undefined, "çekiliş test2", ["Melis", "30_56", "Çılgın Ahmet"]);

lotteryDatabase.save([lottery1, lottery2]);

const lottery3 = new Lottery(undefined, "çekiliş 3.", ["Kayra", "87987", "CiksGirl"]);
lotteryDatabase.insert(lottery3);

lotteryDatabase.remove(2);

const findByNameResult = lotteryDatabase.findByName("çekiliş test2");
console.log(colors.yellow(findByNameResult));

const serdar = findByNameResult[0].runLottery();

serdar.name = "ömer serdar";

lotteryDatabase.update(serdar);

const findByNameResult2 = lotteryDatabase.findByName("ömer");
console.log(colors.green(findByNameResult2));

// var lotteryFromFile = db.load("lottery");
// console.log(colors.yellow(lotteryFromFile));
