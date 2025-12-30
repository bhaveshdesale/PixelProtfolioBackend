"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const visitor_controller_1 = require("../controllers/visitor.controller");
const router = (0, express_1.Router)();
// called when site loads
router.get("/", visitor_controller_1.getAndIncrementVisitor);
// optional: just read count
router.get("/count", visitor_controller_1.getVisitorCount);
exports.default = router;
