"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("./middleware");
const handlers_1 = require("./handlers");
const app = (0, express_1.default)();
const port = 4000;
app.use(middleware_1.cors);
app.post("/", handlers_1.firestoreHandler);
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
//# sourceMappingURL=app.js.map