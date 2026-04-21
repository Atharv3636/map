export const translate = async (req, res) => {
  try {
    const { text, source, target } = req.body;

    if (!text) {
      return res.status(400).json({ error: "No text provided" });
    }

    const sourceLang = source === "auto" ? "" : source;

    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${target}`
    );

    const data = await response.json();

    console.log("API:", data); // debug

    res.json({
      translatedText:
        data.responseData?.translatedText || "⚠️ No translation",
    });

  } catch (err) {
    console.error("❌ TRANSLATE ERROR:", err);
    res.status(500).json({ error: "Translation failed" });
  }
};