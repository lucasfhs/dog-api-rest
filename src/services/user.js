const RepositoryUser = require("../repositories/user");
const repository = new RepositoryUser();
class ServiceUser {
  register(data) {
    return repository.register(data);
  }
  get(id) {
    return repository.get(id);
  }
  //   auth(index) {
  //     return repository.auth(index);
  //   }
  //   delete(id, newName) {
  //     return repository.delete(id, newName);
  //   }
  //   update(name) {
  //     return repository.update(name);
  //   }
}
module.exports = ServiceUser;