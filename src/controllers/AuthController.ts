import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

const secret = process.env.SECRET || "ZpQIF5Zd28";

class AuthController {
  async authenticate(req: Request, res: Response) {
    const repository = AppDataSource.getRepository(User);
    const { username, password } = req.body;
    const user = await repository.findOneBy({ username });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ user }, secret, { expiresIn: "1d" });
      return res.status(200).json(token);
    }
    return res.sendStatus(403);
  }
}

export default new AuthController();
