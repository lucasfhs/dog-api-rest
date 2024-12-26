const RepositoryDog = require("../repositories/dog");
const repository = new RepositoryDog();
class ServiceDog {
  getAll() {
    return repository.getAll();
  }
  getOne(id) {
    return repository.getOne(id);
  }
  update(id, race, height, weight, description) {
    return repository.update(id, race, height, weight, description);
  }
  add(race, height, weight, description) {
    return repository.add(race, height, weight, description);
  }

  delete(id) {
    return repository.delete(id);
  }
}
module.exports = ServiceDog;
