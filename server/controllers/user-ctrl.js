// import the model of the user, so we have exact definitions of all fields / parameters
const User = require("../models/user-model");
const { json } = require("body-parser");

// create user
createUser = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a user",
    });
  }

  const user = new User(body);

  if (!user) {
    return res.status(400).json({
      success: false,
      error: err,
    });
  }

  user
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: user._id,
        message: "User created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "User not created!",
      });
    });
};

// delete user
deleteUser = async (req, res) => {
  await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!user) {
      return res.status(404).json({ success: false, error: `User not found ` });
    }

    return res.status(200).json({ success: true, data: user });
  }).catch((err) => console.log(err));
};

// get one user
getUserById = async (req, res) => {
  await User.findOne({ _id: req.params.id }, (err, user) => {
    console.log("finding user");
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!user) {
      return res.status(404);
      json({ success: false, error: `User not found ` });
    }

    return res.status(200).json({ success: true, data: user });
  }).catch((err) => console.log(err));
};

// get all users
getUsers = async (req, res) => {
  await User.find({}, (err, users) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!users.length) {
      return res.status(404).json({ success: false, error: `User not found` });
    }
    return res.status(200).json({ success: true, data: users });
  }).catch((err) => console.log(err));
};

module.exports = {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
};
