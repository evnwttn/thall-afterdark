import { Request, Response } from "express";

export async function postHandler(req: Request, res: Response) {
  res.send("Hello World");
}
