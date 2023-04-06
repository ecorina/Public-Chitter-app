import express from "express";

const router = express.Router();

import User from "../models/user.model.js";

router.route(`/`).post((req, res) => {
  const { email } = req.body;

  User.findOne({ email }).then((user) => {
    if (user) {
      res.send({ message: `User already exists` });
    } else {
      const user = new User(req.body);

      user.save().then((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: `Registered` });
        }
      });
    }
  });
});

export { router as register };
