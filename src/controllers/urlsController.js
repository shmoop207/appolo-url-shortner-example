"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlsController = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const route_1 = require("@appolo/route");
const view_1 = require("@appolo/view");
const validator_1 = require("@appolo/validator");
const urlsManager_1 = require("../managers/urlsManager");
let UrlsController = class UrlsController extends route_1.Controller {
    async getAll() {
        const allData = await this.urlsManager.getAll();
        return { shortUrls: allData };
    }
    async create(body, res) {
        await this.urlsManager.create(body.fullUrl);
        res.redirect('/');
    }
    async get(params, res) {
        let doc = await this.urlsManager.getOneAndIncCounter(params.shortid);
        if (!doc) {
            throw new route_1.NotFoundError(`${params.shortid} not found`);
        }
        res.redirect(doc.full);
    }
};
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", urlsManager_1.UrlsManager)
], UrlsController.prototype, "urlsManager", void 0);
tslib_1.__decorate([
    route_1.get("/"),
    view_1.view("index.ejs"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UrlsController.prototype, "getAll", null);
tslib_1.__decorate([
    route_1.post("/short"),
    validator_1.validate({ fullUrl: validator_1.string().required() }),
    tslib_1.__param(0, route_1.body()), tslib_1.__param(1, route_1.res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UrlsController.prototype, "create", null);
tslib_1.__decorate([
    route_1.get("/:shortid"),
    validator_1.validate({ shortid: validator_1.string().required() }),
    tslib_1.__param(0, route_1.params()), tslib_1.__param(1, route_1.res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UrlsController.prototype, "get", null);
UrlsController = tslib_1.__decorate([
    route_1.controller()
], UrlsController);
exports.UrlsController = UrlsController;
//# sourceMappingURL=urlsController.js.map