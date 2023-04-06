import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import cors from "cors";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
import { login } from "./routes/login.js";
import { register } from "./routes/register.js";
import { peeps } from "./routes/peeps.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(`/login`, login);
app.use(`/register`, register);
app.use(`/peeps`, peeps);

const port = process.env.PORT;
const host = process.env.HOST;

const main = async () => {
  const uri = process.env.DB_URI.replace("<password>", process.env.DB_PW);
  await mongoose.connect(uri);
};

main()
  .then(() => console.log(`Connected to DB`))
  .catch((err) => console.log(err));

const server = app.listen(port, host, () => {
  const SERVERHOST = server.address().address;
  const SERVERPORT = server.address().port;
  console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`);
});

export default server;
