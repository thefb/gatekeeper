import express from "express";
import "reflect-metadata";
import router from "./routes";

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
