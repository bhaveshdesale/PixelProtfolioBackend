import express from "express";
import cors from "cors";
import visitorRoutes from "./routes/visitor.routes";
import contactRoutes from "./routes/contact.routes";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://pixel-protfolio-frontend-x8sd.vercel.app"
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// IMPORTANT
app.options("*", cors());

app.use(express.json());

app.use("/api/visitors", visitorRoutes);
app.use("/api/contact", contactRoutes);

export default app;
