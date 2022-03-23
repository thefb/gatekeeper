import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

class UserController {
  async store(req: Request, res: Response) {
    const repository = AppDataSource.getRepository(User);
    const { username, password } = req.body;
    if (await repository.findOneBy({ username })) {
      return res.status(409).json({
        error: "User already exist",
      });
    }
    const user = repository.create({ username, password });
    await repository.save(user);
    return res.sendStatus(201);
  }

  async get(req: Request, res: Response) {
    const repository = AppDataSource.getRepository(User);
    const result = await repository.findOneBy({ username: req.body.username });
    return res.status(200).json(result);
  }
}

export default new UserController();
