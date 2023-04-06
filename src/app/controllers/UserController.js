const User = require("../models/UserModel");

class UserController {
  //[GET] /dashboard/users
  getList(req, res, next) {
    User.find({})
      .sort({ createdAt: -1 })
      .then((users) => {
        res.json(users);
      })
      .catch(next);
  }
  // [GET] /dashboard/users/profile/:id
  profile(req, res, next) {
    User.findOne({ _id: req.params.id })
      .then((user) => {
        if (user) {
          const { _id, username, fullName, gender, email, avatar } = user;
          res
            .status(200)
            .json({ _id, username, fullName, gender, email, avatar });
        } else {
          res.status(400).json("Profile not found");
        }
      })
      .catch(next);
  }

  // [POST] /dashboard/users/create
  create(req, res, next) {
    const user = new User(req.body);
    User.findOne({ username: req.body.username })
      .then((userExist) => {
        if (!userExist) {
          user.save();
          res.status(200).json("Created User successfully");
        } else {
          res.status(400).json("Username already exist");
        }
      })
      .catch(next);
  }

  // [PUT] /dashboard/users/update/:id
  update(req, res, next) {
    User.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.status(200).json("Updated User successfully"))
      .catch(next);
  }

  // [DELETE] /dashboard/users/delete/:id
  delete(req, res, next) {
    User.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json("Deleted User successfully"))
      .catch(next);
  }

  //[PUT] /dashboard/users/profile/update/:id
  updateProfile(req, res, next) {
    User.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.status(200).json("Updated Profile successfully"))
      .catch(next);
  }

  //[PUT] /dashboard/users/profile/changePassword
  // changePassword(req, res, next) {
  //   User.updateOne({ _id: req.params.id }, req.body)
  //     .then(() => res.status(200).json("Change Password successfully"))
  //     .catch(next);
  // }

  //[POST] /dashboard/users/login
  login(req, res, next) {
    User.findOne({
      username: req.body.username,
      password: req.body.password,
    })
      .then((userExist) => {
        if (userExist) {
          const { _id, username, fullName, gender, email, avatar } = userExist;
          res
            .status(200)
            .json({ _id, username, fullName, gender, email, avatar });
        } else {
          res.status(400).json("Username or Password do not match");
        }
      })
      .catch(next);
  }
}

module.exports = new UserController();
