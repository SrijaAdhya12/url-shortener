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
exports.deleteUrl = exports.getUrl = exports.getAllUrl = exports.createUrl = void 0;
const shorturl_1 = require("../model/shorturl");
const createUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("The fullUrl is", req.body.fullUrl);
        const { fullUrl } = req.body;
        const urlFound = yield shorturl_1.urlModel.find({ fullUrl });
        if (urlFound.length > 0) {
            res.status(409).send(urlFound);
        }
        else {
            const shortURL = yield shorturl_1.urlModel.create({ fullUrl });
            res.status(200).send(shortURL);
        }
    }
    catch (error) {
        res.status(500).send({ message: "Short Urls not found" });
    }
});
exports.createUrl = createUrl;
const getAllUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shortUrls = yield shorturl_1.urlModel.find();
        if (shortUrls.length < 0) {
            res.status(404).send({ message: "Short Urls not found" });
        }
        else {
            res.status(200).send(shortUrls);
        }
    }
    catch (error) {
        res.status(500).send({ message: "Short Urls not found" });
    }
});
exports.getAllUrl = getAllUrl;
const getUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shortUrl = yield shorturl_1.urlModel.findOne({ shortUrl: req.params.id });
        if (!shortUrl) {
            res.status(404).send({ "message": "Full Url not found" });
        }
        else {
            shortUrl.clicks++;
            shortUrl.save();
            res.redirect(`${shortUrl.fullUrl}`);
        }
    }
    catch (error) {
        res.status(500).send({ message: "Short Urls not found" });
    }
});
exports.getUrl = getUrl;
const deleteUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shortUrl = yield shorturl_1.urlModel.findByIdAndDelete({ _id: req.params.id });
        if (shortUrl) {
            res.status(200).send({ "message": "Requested URL succesfully deleted" });
        }
    }
    catch (error) {
        res.status(500).send({ message: "Short Urls not found" });
    }
});
exports.deleteUrl = deleteUrl;
