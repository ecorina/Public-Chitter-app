import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../index.js";
import User from "../models/user.model.js";

chai.use(chaiHttp);

describe(`Testing requests on the database`, () => {
  beforeEach(async () => {
    await User.deleteMany()
      .then(() => console.log(`Database cleared`))
      .catch((error) => {
        console.log(`Error clearing user collection`);
        console.log(error);
        throw new Error();
      });
  });
  describe(`Login fail if not registered`, () => {
    it(` login error`, async () => {
      const addRes = await chai
        .request(server)
        .post(`/login`)
        .set("Content-Type", "application/json")
        .send({
          email: "test@test.com",
          password: "1234",
        });
      expect(addRes.body.message).to.equal(`Details not found`);
    });
    it(`existing user can login`, async () => {
      const register = await chai
        .request(server)
        .post(`/register`)
        .set("Content-Type", "application/json")
        .send({
          name: "test",
          email: "test@test.com",
          password: "1234",
        });
      const addRes = await chai
        .request(server)
        .post(`/login`)
        .set("Content-Type", "application/json")
        .send({
          email: "test@test.com",
          password: "1234",
        });
      expect(addRes.body.message).to.equal(`Login successful`);
    });
  });
});
