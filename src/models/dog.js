const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const fs = require("fs");
const csvParser = require("csv-parser");

const Dog = sequelize.define("Dog", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  race: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  height: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

async function loadDogsFromCSV() {
  const dogs = [];
  const csvFilePath = "../config/dogs_data.csv"; // Substitua pelo caminho correto do arquivo CSV

  return new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csvParser())
      .on("data", (row) => {
        // Adiciona os dados ao array
        dogs.push({
          id: row.id,
          race: row.race,
          height: parseFloat(row.height),
          weight: parseFloat(row.weight),
          description: row.description,
        });
      })
      .on("end", () => resolve(dogs))
      .on("error", (error) => reject(error));
  });
}

(async () => {
  try {
    await sequelize.sync({ alter: true });

    const dogCount = await Dog.count();
    if (dogCount === 0) {
      console.log("Table 'Dog' is empty. Initializing CSV data...");
      const dogs = await loadDogsFromCSV();
      await Dog.bulkCreate(dogs);
      console.log("Table 'Dog' initialized successfully.");
    } else {
      console.log("Table 'Dog' already contains data.");
    }
  } catch (error) {
    console.error("Error checking or initializing table 'Dog':", error);
  }
})();

module.exports = Dog;
