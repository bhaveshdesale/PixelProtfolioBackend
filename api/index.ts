import dotenv from "dotenv";
dotenv.config();

import app from "../src/app";
import { connectDB } from "../src/config/db";

const PORT = process.env.PORT || 5000;

connectDB();
// export default app;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
