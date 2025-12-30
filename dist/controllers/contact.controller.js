"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitContactForm = void 0;
const Message_1 = __importDefault(require("../models/Message"));
const sendEmail_1 = require("../utils/sendEmail");
const submitContactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ message: "All fields are required" });
        }
        // 1️⃣ Save to DB
        const newMessage = await Message_1.default.create({
            name,
            email,
            message,
        });
        // 2️⃣ Send Email
        await (0, sendEmail_1.sendContactEmail)(name, email, message);
        res.status(201).json({
            success: true,
            message: "Message sent successfully",
            data: newMessage,
        });
    }
    catch (error) {
        console.error("Contact error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to send message",
        });
    }
};
exports.submitContactForm = submitContactForm;
