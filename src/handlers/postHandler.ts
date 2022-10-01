import { Request, Response } from "express";
import { FileDatabase } from "../services";
import { TimeObject } from "../types";

export async function postHandler(req: Request, res: Response) {
  let now = Date.now();
  let date_ob = new Date(now);
  const timeObject: TimeObject = {
    year: date_ob.getFullYear(),
    month: date_ob.getMonth() + 1,
    day: date_ob.getDate(),
    hour: date_ob.getHours(),
    minute: date_ob.getMinutes(),
    second: date_ob.getSeconds(),
  };

  try {
    const db = new FileDatabase();
    const log = await db.logTime(timeObject as TimeObject);
    res.status(200).send(JSON.stringify(timeObject));
  } catch (error) {
    res.sendStatus(500);
  }
}
