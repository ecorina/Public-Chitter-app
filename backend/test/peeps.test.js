import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../index.js";
import Peep from "../models/peep.model.js";

chai.use(chaiHttp);

describe(`Testing requests on the database`, () => {
  beforeEach(async () => {
    await Peep.deleteMany();
  });

  describe(`GET - '/peeps'`, () => {
    it(`response status code 200`, async () => {
      const message1 = {
        text: "test1",
        timestamp: "2023-03-24T15:26:59.301+00:00",
        username: "test1",
      };

      const message2 = {
        text: "test2",
        timestamp: "2023-03-24T15:26:59.301+00:00",
        username: "test2",
      };

      await chai
        .request(server)
        .post(`/peeps`)
        .set("Content-Type", "application/json")
        .send(message1);

      await chai
        .request(server)
        .post(`/peeps`)
        .set("Content-Type", "application/json")
        .send(message2);

      const res = await chai.request(server).get(`/peeps`).send();
      const messages = res.body;
      expect(messages.length).to.equal(2);
    });
  });
});
