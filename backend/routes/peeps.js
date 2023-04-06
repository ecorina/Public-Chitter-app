import express from "express";

const router = express.Router();

import Peep from "../models/peep.model.js";

router
  .route(`/`)
  .get(async (req, res) => {
    try {
      const peeps = await Peep.find({});
      res.json(peeps);
    } catch (error) {
      res.json(error);
    }
  })
  .post(async (req, res) => {
    try {
      // const data = req.body;
      const peep = new Peep(req.body);
      const response = await peep.save();
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  });
export { router as peeps };
