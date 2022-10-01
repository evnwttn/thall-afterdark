import { Request, Response } from "express";
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

  res.send(JSON.stringify(timeObject));
}
