"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const visitor_routes_1 = __importDefault(require("./routes/visitor.routes"));
const contact_routes_1 = __importDefault(require("./routes/contact.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: "https://pixel-protfolio-frontend-x8sd.vercel.app/" })); // Vite frontend
app.use(express_1.default.json());
app.use("/api/visitors", visitor_routes_1.default);
app.use("/api/contact", contact_routes_1.default);
exports.default = app;
