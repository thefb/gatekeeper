import express from "express";
import "./database/connect";
import router from "./routes";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`🚀 Server running on localhost:${PORT}`));
