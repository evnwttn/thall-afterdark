import { Database } from "./Database";
import { TimeObject } from "../types";
import * as fs from "fs/promises";
import * as os from "os";

export class FileDatabase extends Database {
  async logTime(timeObject: TimeObject): Promise<TimeObject> {
    await fs.appendFile("timelog.json", JSON.stringify(timeObject) + os.EOL);

    return timeObject;
  }
}
