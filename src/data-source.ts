import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "winhost",
  port: 5432,
  username: "fabs",
  password: "POlk1230",
  database: "test",
  synchronize: true,
  entities: ["entity/*.ts"],
  migrations: ["migration/*.ts"],
});

AppDataSource.initialize()
  .then(() => console.log("connect to the database 📦"))
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
