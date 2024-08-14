import express, { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../../data-source";
import "../../container/index";
import { routes } from "./routes";
import { AppError } from "../../erros/AppError";

const app = express();

AppDataSource.initialize().then(() => {
  app.use(express.json());
  app.use(routes);
  app.use(
    // eslint-disable-next-line
    (err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          message: err.message,
        });
      }

      return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
      });
    },
  );
});

export { app };
