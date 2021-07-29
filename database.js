const fs = require("fs");

const save = (filename, objects) => {
  fs.writeFileSync(`./${filename}.json`, JSON.stringify(objects, null, 2));
};

const load = (filename) => {
  const file = fs.readFileSync(`./${filename}.json`, "utf8");
  return JSON.parse(file);
};

const insert = (filename, object) => {
  const objects = load(filename);
  save(filename, objects.concat(object));
};

const remove = (filename, index) => {
  const objects = load(filename);
  objects.splice(index, 1);
  save(filename, objects);
};

const findByName = (filename, name) => {
  const objects = load(filename);
  return objects.filter((o) => o.name.indexOf(name) != -1);
};

module.exports = { save, load, insert, remove, findByName };
