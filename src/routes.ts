import { Router, Request, Response } from "express";
const {
  deleteUser,
  getUsers,
  getUser,
  updateUser,
  userCreate,
} = require("./controllers/user.controller");
const { login } = require("./controllers/login.controller");

const route = Router();

route.get("/", (_req: Request, res: Response) =>
  res.status(200).json({ app: "Cada centavo" })
);

// User CRUD
route.post("/user", userCreate);

route.get("/user", getUsers);

route.get("/user/:id", getUser);

route.put("/user/:id", updateUser);

route.delete("/user/:id", deleteUser);

// Login
route.post("/login", login);

module.exports = route;
