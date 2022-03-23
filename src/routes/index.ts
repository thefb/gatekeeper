import { Router } from "express";
import AuthController from "../controllers/AuthController";
import UserController from "../controllers/UserController";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router();

router.get("/health", authMiddleware, (_req, res) => {
  return res.send("Server alive");
});

router.post("/users", UserController.store);
router.get("/user", UserController.get);
router.post("/auth", AuthController.authenticate);

export default router;
