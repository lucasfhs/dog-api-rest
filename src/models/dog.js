const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

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

async function addDogs() {
  try {
    const dogsData = [
      {
        race: "Labrador Retriever",
        height: 60.5,
        weight: 25.3,
        description: "Friendly and energetic.",
      },
      {
        race: "Beagle",
        height: 40.2,
        weight: 10.5,
        description: "Curious and affectionate.",
      },
      {
        race: "Poodle",
        height: 35.0,
        weight: 8.0,
        description: "Intelligent and active.",
      },
      {
        race: "Bulldog",
        height: 31.0,
        weight: 23.0,
        description: "Calm and loving.",
      },
      {
        race: "Golden Retriever",
        height: 56.7,
        weight: 30.0,
        description: "Confident and friendly.",
      },
      {
        race: "German Shepherd",
        height: 65.0,
        weight: 34.0,
        description: "Loyal and courageous.",
      },
      {
        race: "Boxer",
        height: 57.0,
        weight: 30.0,
        description: "Playful and patient.",
      },
      {
        race: "Chihuahua",
        height: 20.0,
        weight: 2.5,
        description: "Alert and lively.",
      },
      {
        race: "Dachshund",
        height: 23.0,
        weight: 7.5,
        description: "Brave and curious.",
      },
      {
        race: "Shih Tzu",
        height: 26.0,
        weight: 6.0,
        description: "Affectionate and outgoing.",
      },
      {
        race: "Siberian Husky",
        height: 58.0,
        weight: 23.0,
        description: "Friendly and energetic.",
      },
      {
        race: "Rottweiler",
        height: 63.0,
        weight: 50.0,
        description: "Confident and fearless.",
      },
      {
        race: "Great Dane",
        height: 81.0,
        weight: 54.0,
        description: "Gentle and friendly giant.",
      },
      {
        race: "Pug",
        height: 30.0,
        weight: 7.0,
        description: "Charming and sociable.",
      },
      {
        race: "Cocker Spaniel",
        height: 38.0,
        weight: 13.0,
        description: "Gentle and affectionate.",
      },
      {
        race: "Border Collie",
        height: 53.0,
        weight: 20.0,
        description: "Smart and energetic.",
      },
      {
        race: "Maltese",
        height: 25.0,
        weight: 3.5,
        description: "Gentle and playful.",
      },
      {
        race: "Doberman",
        height: 70.0,
        weight: 40.0,
        description: "Alert and fearless.",
      },
      {
        race: "Australian Shepherd",
        height: 58.0,
        weight: 25.0,
        description: "Smart and work-oriented.",
      },
      {
        race: "Chow Chow",
        height: 51.0,
        weight: 26.0,
        description: "Dignified and loyal.",
      },
      {
        race: "Dalmatian",
        height: 58.0,
        weight: 25.0,
        description: "Outgoing and friendly.",
      },
      {
        race: "French Bulldog",
        height: 30.0,
        weight: 11.0,
        description: "Adaptable and playful.",
      },
      {
        race: "Pomeranian",
        height: 22.0,
        weight: 3.0,
        description: "Lively and friendly.",
      },
      {
        race: "Boston Terrier",
        height: 43.0,
        weight: 10.0,
        description: "Charming and intelligent.",
      },
      {
        race: "Weimaraner",
        height: 63.0,
        weight: 34.0,
        description: "Energetic and loyal.",
      },
    ];

    // Verifica se a tabela já possui dados
    const dogCount = await Dog.count();
    if (dogCount === 0) {
      console.log("Table 'Dogs' is empty. Inserting initial data...");
      await Dog.bulkCreate(dogsData);
      console.log("Data inserted successfully into the 'Dogs' table.");
    } else {
      console.log("Table 'Dogs' already contains data.");
    }
  } catch (error) {
    console.error("Error while inserting data into the 'Dogs' table:", error);
  }
}



(async () => {
  try {

    await sequelize.sync({ alter: true });

    console.log("Tabela 'Dog' sincronizada com sucesso.");
    addDogs();
  } catch (error) {
    console.error("Erro ao sincronizar a tabela 'Dog':", error);
  }
})();

module.exports = Dog;
