import express from "express";
import { extractText } from "../controllers/ocrController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/extract", upload.single("image"), extractText);

export default router;