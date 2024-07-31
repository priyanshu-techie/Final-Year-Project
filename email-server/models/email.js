"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var emailSchema = new mongoose_1.default.Schema({
    from: { type: String, required: true },
    to: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, required: true },
    readAt: { type: Date, default: null },
    type: { type: String, required: true },
    starred: { type: Boolean, default: false },
}, { timestamps: true });
var EmailModel = mongoose_1.default.model('emails', emailSchema);
exports.default = EmailModel;
