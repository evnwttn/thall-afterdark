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
exports.firestoreHandler = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
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
const timeLog = (0, firestore_1.doc)(firestore, `timelogCollection/timelog`);
function firestoreHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, firestore_1.updateDoc)(timeLog, req.body);
            res.status(200).send(JSON.stringify(req.body));
        }
        catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    });
}
exports.firestoreHandler = firestoreHandler;
//# sourceMappingURL=firestoreHandler.js.map