const ServiceDog = require("../services/dog");

const service = new ServiceDog();

class ControllerDog {
  getAll(req, res) {
    try {
      const names = service.getAll();
      res.status(200).json({ names });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  getOne(req, res) {
    try {
      const id = req.params.id;
      const name = service.getOne(Number(id));
      res.status(200).json({ name });
    } catch (error) {
      let statusCode = 500;
      if (error.mensage === "Dog not found.") {
        statusCode = 404;
      }
      res.status(statusCode).json({ error: error.message });
    }
  }
  add(req, res) {
    try {
      const body = req.body;
      res.status(201).json({ message: "Process completed successfully." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  update(req, res) {
    try {
      const oldName = req.params.id;
      const newName = req.body.newUser;
      console.log(newName);
      service.update(oldName, newName);
      res.status(200).json({ mensage: "Process completed successfully." });
    } catch (error) {
      let statusCode = 500;
      if (error.mensage === "Dog not found to update.") {
        statusCode = 404;
      }
      res.status(statusCode).json({ error: error.message });
    }
  }
  delete(req, res) {
    try {
      const index = req.params.id;
      service.delete(req.params.id);
      res.status(200).json({ mensage: "Process completed successfully." });
    } catch (error) {
      let statusCode = 500;
      if (error.mensage === "Dog not found to delete.") {
        statusCode = 404;
      }
      res.status(statusCode).json({ error: error.message });
    }
  }
}
module.exports = ControllerDog;
