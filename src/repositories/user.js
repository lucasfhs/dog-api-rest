const User = require("../models/user");

class RepositoryUser {
  async register(data) {
    try {
      const newUser = await User.create(data);
      return newUser;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }
  //   async get() {
  //     try {
  //       const newUser = await User.create(data);
  //       return newUser;
  //     } catch (error) {
  //       console.error("Error creating user:", error);
  //       throw error;
  //     }
  //   }
}

module.exports = RepositoryUser;
