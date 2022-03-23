import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
const secret = process.env.SECRET || "ZpQIF5Zd28";

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  if (!authorization) return res.sendStatus(401);
  const token = authorization.replace("JWT", "").trim();
  try {
    const data = jwt.verify(token, secret);
    console.log(data);
    next();
  } catch {
    return res.sendStatus(401);
  }
}
