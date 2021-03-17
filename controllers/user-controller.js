const Users = require("../models/UserModel");

const UserController = {
  register: async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new Users({
      name,
      password,
      email,
    });
    await newUser.save();
  },
};

module.exports = UserController;
