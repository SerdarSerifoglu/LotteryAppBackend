const fs = require("fs");

class BaseDatabase {
  constructor(model) {
    this.model = model;
    this.filename = model.name;
  }

  save = (objects) => {
    fs.writeFileSync(`./${this.filename}.json`, JSON.stringify(objects, null, 2));
  };

  load = () => {
    const file = fs.readFileSync(`./${this.filename}.json`, "utf8");
    return JSON.parse(file);
  };

  insert = (object) => {
    const objects = this.load();
    this.save(objects.concat(object));
  };

  remove = (index) => {
    const objects = this.load();
    objects.splice(index, 1);
    this.save(objects);
  };
}

module.exports = BaseDatabase;
