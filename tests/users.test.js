const frisby = require("frisby");
require("dotenv").config();

// const db = require("./db.js");

const { PORT, HOST } = process.env;

const URL_Deploy =
  process.env.DEVELOPMENT === "true"
    ? `http://${HOST}:${PORT}`
    : "https://node-challenge-backend.herokuapp.com/";

describe("Users tests.", () => {
  // beforeAll(async () => await db.connect());

  // afterAll(async () => db.close());

  // afterEach(async () => db.clear());

  it("It must be possible to enter a user.", async () => {
    await frisby
      .post(`${URL_Deploy}/user`, {
        name: "Aluno",
        email: "aluno@gmail.com",
        password: "alunopassword",
      })
      .expect("status", 201);
  });
});
