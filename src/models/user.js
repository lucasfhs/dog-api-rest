const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Verifica se a tabela já existe e cria a tabela se necessário
(async () => {
  try {
    await sequelize.sync({ force: false, alter: true }); // force: false para não apagar dados existentes, alter: true para sincronizar mudanças nos modelos
    console.log("Tabela 'User' verificada/criada com sucesso!");
  } catch (error) {
    console.error("Erro ao verificar ou criar a tabela 'User':", error);
  }
})();

module.exports = User;
