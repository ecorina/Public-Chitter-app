import mongoose from "mongoose";

const peepSchema = new mongoose.Schema({
  text: String,
  timestamp: Date,
  username: String,
});

const Peep = new mongoose.model("Peep", peepSchema);

export default Peep;
