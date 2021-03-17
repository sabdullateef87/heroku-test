const Users = require("../models/UserModel");

const UserController = {
  register: async (req, res) => {
    res.send("POSTTTTIIINNGGGG");
    const { name, email, password } = req.body;
    res.json({ name, email, password });
    // const newUser = new Users({
    //   name,
    //   password,
    //   email,
    // });
    // await newUser.save();
  },
};

module.exports = UserController;
