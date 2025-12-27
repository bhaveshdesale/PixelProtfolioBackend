import express from "express";
import cors from "cors";
import visitorRoutes from "./routes/visitor.routes";

const app = express();

app.use(cors({ origin: "http://localhost:5000" })); // Vite frontend
app.use(express.json());

app.use("/api/visitors", visitorRoutes);

export default app;
