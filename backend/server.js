import express from "express";
import cors from "cors";
import ocrRoutes from "./routes/ocrRoutes.js";
import translateRoutes from "./routes/translateRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/ocr", ocrRoutes);
app.use("/api/translate", translateRoutes);
app.listen(5000, () => {
  console.log("🔥 Server running on http://localhost:5000");
});