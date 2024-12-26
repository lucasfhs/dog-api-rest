const Dog = require("../models/dog");

class RepositoryDog {
  async getAll() {
    return await Dog.findAll();
  }
  async getOne(id) {
    return await Dog.findByPk(id);
  }
  async add(race, height, weight, description) {
    return await Dog.create({ race, height, weight, description });
  }
  async update(id, race, height, weight, description) {
    const updatedFields = {};

    if (race !== null) updatedFields.race = race;
    if (height !== null) updatedFields.height = height;
    if (weight !== null) updatedFields.weight = weight;
    if (description !== null) updatedFields.description = description;

    return await Dog.update(updatedFields, {
      where: { id },
    });
  }
  async delete(id) {
    return await Dog.destroy({
      where: { id },
    });
  }
}
module.exports = RepositoryDog;
