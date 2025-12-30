"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVisitorCount = exports.getAndIncrementVisitor = void 0;
const Visitor_1 = __importDefault(require("../models/Visitor"));
const getAndIncrementVisitor = async (_, res) => {
    let visitor = await Visitor_1.default.findOne();
    if (!visitor) {
        visitor = await Visitor_1.default.create({ count: 1 });
    }
    else {
        visitor.count += 1;
        await visitor.save();
    }
    res.json(visitor.count);
};
exports.getAndIncrementVisitor = getAndIncrementVisitor;
const getVisitorCount = async (_, res) => {
    const visitor = await Visitor_1.default.findOne();
    res.json(visitor?.count ?? 0);
};
exports.getVisitorCount = getVisitorCount;
