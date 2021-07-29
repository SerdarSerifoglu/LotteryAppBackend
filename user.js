const { v4: uuidv4 } = require("uuid");

class User {
  constructor(name, password) {
    this.id = uuidv4();
    this.name = name;
    this.password = password;
  }
}

module.exports = User;
