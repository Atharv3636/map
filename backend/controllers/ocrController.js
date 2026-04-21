import { runOCR } from "../services/ocrService.js";

export const extractText = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image uploaded" });
    }

    const text = await runOCR(req.file.path);

    res.json({
      success: true,
      text
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "OCR failed" });
  }
};