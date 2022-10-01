import { TimeObject } from "../types";

export abstract class Database {
  constructor() {}

  abstract logTime(timeObject: TimeObject): Promise<TimeObject>;
}
