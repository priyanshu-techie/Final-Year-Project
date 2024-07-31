"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = connectToDB;
var mongoose_1 = require("mongoose");
function connectToDB() {
    mongoose_1.default.connect('mongodb+srv://Priyanshu_Agrawal:pass123456@cluster0.zj4gcnz.mongodb.net/email-server')
        .then(function () { return console.log('Connected to MongoDB'); }) // no callbacks used now, instead use promise or async await
        .catch(function (err) { return console.error('Could not connect to MongoDB', err); });
}
