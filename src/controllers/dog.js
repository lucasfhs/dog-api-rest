const ServiceDog = require("../services/dog");

const service = new ServiceDog();

class ControllerDog {
  async getAll(req, res) {
    try {
      const names = await service.getAll();
      if (!names) {
        throw new Error("Empty database.");
      }
      res.status(200).json({ names });
    } catch (error) {
      let statusCode = 500;
      if (error.message === "Empty database") {
        statusCode = 404;
      }
      res.status(statusCode).json({ error: error.message });
    }
  }
  async getOne(req, res) {
    try {
      const id = req.params.id;
      const name = await service.getOne(Number(id));
      if (!name) {
        throw new Error("Dog not found.");
      }
      res.status(200).json({ name });
    } catch (error) {
      let statusCode = 500;
      if (error.message === "Dog not found.") {
        statusCode = 404;
      }
      res.status(statusCode).json({ error: error.message });
    }
  }
  async add(req, res) {
    try {
      const { race, height, weight, description } = req.body;
      await service.add(race, height, weight, description);
      res.status(201).json({ message: "Process completed successfully." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async update(req, res) {
    try {
      const id = req.params.id;
      const { race, height, weight, description } = req.body;

      await service.update(id, race, height, weight, description);
      res.status(200).json({ mensage: "Process completed successfully." });
    } catch (error) {
      let statusCode = 500;
      if (error.mensage === "Dog not found to update.") {
        statusCode = 404;
      }
      res.status(statusCode).json({ error: error.message });
    }
  }
  async delete(req, res) {
    try {
      const index = req.params.id;
      await service.delete(req.params.id);
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
