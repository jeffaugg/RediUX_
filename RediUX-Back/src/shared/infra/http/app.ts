import express from "express";
import { AppDataSource } from "../../../data-source";
import { routes } from "./routes";

const app = express();

AppDataSource.initialize().then(() => {
  app.use(express.json());
  app.use(routes);
});

export { app };
