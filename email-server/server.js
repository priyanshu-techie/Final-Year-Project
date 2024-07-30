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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var smtp_server_1 = require("smtp-server");
var mailparser_1 = require("mailparser");
var server = new smtp_server_1.SMTPServer({
    allowInsecureAuth: true,
    authOptional: true,
    onConnect: function (session, cb) {
        console.log('Connected with ', session.id);
        cb();
    },
    onMailFrom: function (address, session, cb) {
        console.log('Mail from ', address.address, " session id ", session.id);
        cb();
    },
    onRcptTo: function (address, session, callback) {
        console.log('Recive to ', address.address, " session id ", session.id);
        // if(address.address !== "abc@priyanshudev.tech")
        //     callback(new Error("Invalid Recipient"));
        // else
        callback();
    },
    onData: function (stream, session, callback) {
        var _this = this;
        stream.on("data", function (data) { return __awaiter(_this, void 0, void 0, function () {
            var parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("On data we are getting this data:");
                        return [4 /*yield*/, (0, mailparser_1.simpleParser)(data)];
                    case 1:
                        parsed = _a.sent();
                        console.log(JSON.stringify(parsed));
                        return [2 /*return*/];
                }
            });
        }); });
        stream.on("end", callback);
    },
});
server.listen(25, function () {
    console.log('Server is running on port 25');
});
