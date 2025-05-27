const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "alive",
    react: "👋",
    desc: "check bot alive",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `*ᴀᴋɪɴᴅᴜ ᴍᴅ ᴀʟɪᴠᴇ*

❒ *👋 ʜᴇʟʟᴏ ${pushname}*

❒ *ᴀᴋɪɴᴅᴜ ᴍᴅ ᴀʟɪᴠᴇ ɴᴏᴡ 😇* 

❒ *ʜᴏᴡ ᴄᴀɴ ɪ ʜᴇʟᴘ ʏᴏᴜ ᴛᴏᴀᴅʏ*

❒ *ɪꜰ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ɢᴇᴛ ʙᴏᴛ ᴍᴇɴᴜ ᴛʏᴘᴇ .ᴍᴇɴᴜ*

❒ https://whatsapp.com/channel/0029Vb5x0TSJP21B6svgXf2Z

> *ᴀᴋɪɴᴅᴜ ᴍᴅ*`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
