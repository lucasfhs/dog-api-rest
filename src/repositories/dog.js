const bankMysql = ["John", "Chris", "Ada", "Leon", "Will", "Justin"];

class RepositoryPeople {
  getAll() {
    return bankMysql;
  }
  getOne(index) {
    return bankMysql[index];
  }
  add(name) {
    const index = bankMysql.findIndex((value) => value === name);
    if (index === -1) {
      bankMysql.push(name);
    } else {
      throw new Error("The user is already registered.");
    }
  }
  update(oldName, newName) {
    const index = bankMysql.findIndex((value) => value === oldName);
    if (index !== -1) {
      bankMysql[index] = newName;
    } else {
      throw new Error("Non-existent name.");
    }
  }
  delete(index) {
    bankMysql.splice(index, 1);
  }
}
module.exports = RepositoryPeople;
