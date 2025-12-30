"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const visitorSchema = new mongoose_1.Schema({
    count: {
        type: Number,
        required: true,
        default: 0,
    },
});
exports.default = (0, mongoose_1.model)("Visitor", visitorSchema);
