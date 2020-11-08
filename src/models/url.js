"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortUrl = void 0;
const tslib_1 = require("tslib");
const mongo_1 = require("@appolo/mongo");
let ShortUrl = class ShortUrl extends mongo_1.Schema {
};
tslib_1.__decorate([
    mongo_1.prop({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], ShortUrl.prototype, "full", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], ShortUrl.prototype, "short", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: Number, required: true, default: 0 }),
    tslib_1.__metadata("design:type", Number)
], ShortUrl.prototype, "clicks", void 0);
ShortUrl = tslib_1.__decorate([
    mongo_1.model(),
    mongo_1.schema("ShortUrl")
], ShortUrl);
exports.ShortUrl = ShortUrl;
//# sourceMappingURL=url.js.map