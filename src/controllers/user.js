const UserRepository = require("../repositories/user");
const repository = new UserRepository();
class ControllerUser {
  async register(req, res) {
    try {
      const { name, email, password } = req.body;
      const user = await repository.register({ name, email, password });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error creating user", error });
    }
  }
  async get(req, res) {
    try {
      const id = req.params.id;
      const user = await repository.get(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "User not exists." });
    }
  }
}

module.exports = ControllerUser;
