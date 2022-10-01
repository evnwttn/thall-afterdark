"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const middleware_1 = require("./middleware");
const handlers_1 = require("./handlers");
const app = (0, express_1.default)();
const port = 4000;
const firebaseApp = (0, app_1.initializeApp)({
    apiKey: "AIzaSyD_LB7UtRh32wQ6mPZv6Wnp8q7EK-HIDYg",
    authDomain: "thall-30b94.firebaseapp.com",
    projectId: "thall-30b94",
    storageBucket: "thall-30b94.appspot.com",
    messagingSenderId: "549197004508",
    appId: "1:549197004508:web:e14d810d640d9225e67e19",
    measurementId: "G-ELKEZCLQVZ",
});
const firestore = (0, firestore_1.getFirestore)();
app.use(middleware_1.cors);
app.post("/", handlers_1.postHandler);
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
//# sourceMappingURL=app.js.map