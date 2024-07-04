"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shorturl_1 = require("../controllers/shorturl");
const router = express_1.default.Router();
router.route("/shorturl").post(shorturl_1.createUrl).get(shorturl_1.getAllUrl);
router.route("/shorturl/:id").get(shorturl_1.getUrl).delete(shorturl_1.deleteUrl);
exports.default = router;
