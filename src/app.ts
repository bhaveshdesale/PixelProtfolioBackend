// import express from "express";
// import cors from "cors";
// import visitorRoutes from "./routes/visitor.routes";
// import contactRoutes from "./routes/contact.routes";

// const app = express();

// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://pixel-protfolio-frontend-x8sd.vercel.app"
//     ],
//     methods: ["GET", "POST", "OPTIONS"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

// // IMPORTANT
// app.options("*", cors());

// app.use(express.json());

// app.use("/api/visitors", visitorRoutes);
// app.use("/api/contact", contactRoutes);

// export default app;
import express from "express";
import cors from "cors";
import visitorRoutes from "./routes/visitor.routes";
import contactRoutes from "./routes/contact.routes";

const app = express();

// Configure CORS
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://pixel-protfolio-frontend-x8sd.vercel.app"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: false,
  optionsSuccessStatus: 200
};

// Use CORS middleware
app.use(cors(corsOptions));

// REMOVE THIS LINE: app.options("*", cors()); // ← This causes the error

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/visitors", visitorRoutes);
app.use("/api/contact", contactRoutes);

// Add a root endpoint
app.get("/", (req, res) => {
  res.json({ 
    message: "Backend API is running",
    endpoints: {
      visitors: "/api/visitors",
      contact: "/api/contact"
    }
  });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ 
    status: "ok", 
    timestamp: new Date().toISOString(),
    service: "portfolio-backend"
  });
});

export default app;