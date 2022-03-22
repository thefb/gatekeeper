import { AppDataSource } from "../data-source";

AppDataSource.initialize().then(() =>
  console.log("connect to the database 📦")
);
