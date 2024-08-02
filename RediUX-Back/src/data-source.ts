import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "rediux",
  synchronize: true,
  logging: true,
  entities: ["./src/modules/*/infra/typeorm/entity/*.ts"],
  subscribers: [],
  migrations: ["./src/shared/infra/typeorm/migration/*.ts"],
});
