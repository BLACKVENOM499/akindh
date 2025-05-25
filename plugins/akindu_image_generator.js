const { cmd } = require("../command");
const axios = require("axios");
const fs = require("fs");

cmd({
  pattern: "generate",
  alias: ["aiimage", "imagine"],
  react: "🖼️",
  desc: "Generate an image using AI.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, { q, reply }) => {
  try {
    if (!q) return reply("Please provide a prompt for the image.");

    await reply(" *ᴄʀᴇᴀᴛɪɴɢ ɪᴍᴀɢᴇ*");

    const apiUrl = `https://api.siputzx.my.id/api/ai/flux?prompt=${encodeURIComponent(q)}`;

    const response = await axios.get(apiUrl, { responseType: "arraybuffer" });

    if (!response || !response.data) {
      return reply("Error: The API did not return a valid image. Try again later.");
    }

    const imageBuffer = Buffer.from(response.data, "binary");

    await conn.sendMessage(m.chat, {
      image: imageBuffer,
      caption: `🖼️ *ɪᴍᴀɢᴇ ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴀᴋɪɴᴅᴜ ᴍᴅ*
 ❒ *ᴅᴇᴛᴀɪʟꜱ* : *${q}*`
      
    catch (error) }
    console.error("FluxAI Error:", error);
    reply(`An error occurred: ${error.response?.data?.message || error.message || "Unknown error"}`);
  }
});
