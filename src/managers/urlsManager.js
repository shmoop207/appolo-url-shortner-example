"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlsManager = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const mongo_1 = require("@appolo/mongo");
const url_1 = require("../models/url");
const shortId = require("nanoid");
let UrlsManager = class UrlsManager {
    async getAll() {
        let items = await this.shortUrlModel.find({});
        return items;
    }
    async getOne(shortid) {
        let doc = await this.shortUrlModel.findOne({ short: shortid });
        return doc;
    }
    async getOneAndIncCounter(guid) {
        let doc = await this.getOne(guid);
        if (doc) {
            doc.clicks++;
            await doc.save();
        }
        return doc;
    }
    async create(url) {
        const doc = new this.shortUrlModel({
            full: url,
            short: shortId.nanoid(5)
        });
        await doc.save();
    }
};
tslib_1.__decorate([
    mongo_1.model(url_1.ShortUrl),
    tslib_1.__metadata("design:type", Object)
], UrlsManager.prototype, "shortUrlModel", void 0);
UrlsManager = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], UrlsManager);
exports.UrlsManager = UrlsManager;
//# sourceMappingURL=urlsManager.js.map