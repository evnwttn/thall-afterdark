import { Database } from "./Database";
import { TimeObject } from "../types";

export class FileDatabase extends Database {
  async logTime(timeObject: TimeObject): Promise<TimeObject> {
    return timeObject;
  }
}
