const db = require("./database.js");
const { v4: uuidv4 } = require("uuid");
const colors = require("colors/safe");
const Lottery = require("./lottery.js");
const User = require("./user.js");

const lottery1 = new Lottery("çekiliş test", ["Ahmet", "xBoy", "Çılgın Çocuk"]);
const lottery2 = new Lottery("çekiliş test2", ["Melis", "30_56", "Çılgın Ahmet"]);

db.save("lottery", [lottery1, lottery2]);

const lottery3 = new Lottery("çekiliş 3.", ["Kayra", "87987", "CiksGirl"]);
db.insert("lottery", lottery3);

db.remove("lottery", 2);

const findByNameResult = db.findByName("lottery", "çekiliş t");
console.log(colors.yellow(findByNameResult));

// var lotteryFromFile = db.load("lottery");
// console.log(colors.yellow(lotteryFromFile));
