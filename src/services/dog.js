const RepositoryDog = require("../repository/dog");
const repository = new RepositoryDog();
class ServiceDog {
  getAll() {
    return repository.getAll();
  }
  getOne(index) {
    return repository.getOne(index);
  }
  update(id, newName) {
    return repository.update(id, newName);
  }
  add(name) {
    return repository.add(name);
  }
  getOne(index) {
    return repository.getOne(index);
  }
  delete(index) {
    return repository.delete(index);
  }
}
module.exports = ServiceDog;
