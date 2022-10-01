"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postHandler = void 0;
const services_1 = require("../services");
let now = Date.now();
let date_ob = new Date(now);
const timeObject = {
    year: date_ob.getFullYear(),
    month: date_ob.getMonth() + 1,
    day: date_ob.getDate(),
    hour: date_ob.getHours(),
    minute: date_ob.getMinutes(),
    second: date_ob.getSeconds(),
};
function postHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const db = new services_1.FileDatabase();
            const log = yield db.logTime(timeObject);
            res.status(200).send(JSON.stringify(timeObject));
        }
        catch (error) {
            res.sendStatus(500);
        }
    });
}
exports.postHandler = postHandler;
//# sourceMappingURL=postHandler.js.map