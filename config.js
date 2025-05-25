const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "",
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍",
    CAPTION: process.env.CAPTION || "*ᴀᴋɪɴᴅᴜ-ᴍᴅ*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTHOR: (process.env.PACK_INFO?.split(';') || [])[0] || 'ᴀᴋɪɴᴅᴜ-ᴍᴅ',
    PACKNAME: (process.env.PACK_INFO?.split(';') || [])[1] || '94764703165',
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/wqp3y9.jpg",
    ANTI_LINK: process.env.ANTI_LINK || "false",
    ANTI_BAD: process.env.ANTI_BAD || "false",
    PREFIX: process.env.PREFIX || "/",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "*ᴀᴋɪɴᴅᴜ-ᴍᴅ*",
    ANTI_VV: process.env.ANTI_VV || "true",
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", // change it to 'same' if you want to resend deleted message in same chat
    OWNER_NAME: process.env.OWNER_NAME || "ᴀᴋɪɴᴅᴜ", //replace with your name 
    OWNER_NUMBER: process.env.OWNER_NUMBER || "94764703165",// add your bot owner number
    DEV: process.env.DEV || "94764703165", //replace with your whatsapp number
    AUTOLIKESTATUS: process.env.AUTOLIKESTATUS || "true",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`ꜱᴛᴀᴛᴜꜱ ꜱᴇᴇɴ ʙʏ ᴀᴋɪɴᴅᴜ-ᴍᴅ ʙᴏᴛ`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
    };
    
