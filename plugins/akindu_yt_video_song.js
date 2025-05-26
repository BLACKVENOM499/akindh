const {
  cmd,
  commands
} = require("../command");
const fg = require("api-dylux");
const yts = require("yt-search");
cmd({
  'pattern': 'play2',
  'desc': "To download songs.",
  'react': '🎵',
  'category': "download",
  'filename': __filename
}, async (_0x923bac, _0x5c33b5, _0x100373, {
  from: _0x1cd72b,
  quoted: _0x24e09b,
  body: _0x5bc220,
  isCmd: _0x1f0ff8,
  command: _0x56a0dd,
  args: _0x5d3fcb,
  q: _0x3769d1,
  isGroup: _0x5f05ca,
  sender: _0x39e67a,
  senderNumber: _0x48a81c,
  botNumber2: _0x5df01b,
  botNumber: _0x17ffae,
  pushname: _0x35fe4b,
  isMe: _0x14e579,
  isOwner: _0x49c769,
  groupMetadata: _0x21b879,
  groupName: _0x1bcd8c,
  participants: _0x1494bb,
  groupAdmins: _0xcb1475,
  isBotAdmins: _0x475e8b,
  isAdmins: _0x590432,
  reply: _0x39f257
}) => {
  try {
    if (!_0x3769d1) {
      return _0x39f257("Please give me a url or title");
    }
    const _0x125771 = await yts(_0x3769d1);
    const _0x11abfe = _0x125771.videos[0x0];
    const _0x463ca = _0x11abfe.url;
    let _0x4b2ea0 = "\n*🎶ESHU-MD MUSIC DOWNLOADING [⬇️]\n\n🎵 *MUSIC FOUND!* \n\n➥ *Title:* " + _0x11abfe.title + " \n➥ *Duration:* " + _0x11abfe.timestamp + " \n➥ *Views:* " + _0x11abfe.views + " \n➥ *Uploaded On:* " + _0x11abfe.ago + " \n➥ *Link:* " + _0x11abfe.url + " \n\n🎧 *ENJOY THE MUSIC BROUGHT TO YOU!*\n\n> *QUEEN ESHU-MD WHATSAPP BOT* \n\n> *© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴇꜱʜᴀɴ👨‍💻* \n";
    await _0x923bac.sendMessage(_0x1cd72b, {
      'image': {
        'url': _0x11abfe.thumbnail
      },
      'caption': _0x4b2ea0
    }, {
      'quoted': _0x5c33b5
    });
    let _0x32b5d = await fg.yta(_0x463ca);
    let _0x4a30c7 = _0x32b5d.dl_url;
    await _0x923bac.sendMessage(_0x1cd72b, {
      'audio': {
        'url': _0x4a30c7
      },
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0x5c33b5
    });
    await _0x923bac.sendMessage(_0x1cd72b, {
      'document': {
        'url': _0x4a30c7
      },
      'mimetype': "audio/mpeg",
      'fileName': _0x11abfe.title + ".mp3",
      'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴏʙɪᴀ ʙᴜᴛᴛ*"
    }, {
      'quoted': _0x5c33b5
    });
  } catch (_0x46cdf2) {
    console.log(_0x46cdf2);
    _0x39f257("${e}");
  }
});
cmd({
  'pattern': "darama",
  'alias': ["video2"],
  'desc': "To download videos.",
  'react': '🎥',
  'category': "download",
  'filename': __filename
}, async (_0x1f5c9a, _0x2094e0, _0x524ff2, {
  from: _0x38acf5,
  quoted: _0x64e324,
  body: _0x577285,
  isCmd: _0x163ad6,
  command: _0x46335a,
  args: _0x593190,
  q: _0x2951c1,
  isGroup: _0x167ba5,
  sender: _0x38e529,
  senderNumber: _0x3a22ce,
  botNumber2: _0x2c2035,
  botNumber: _0x53c233,
  pushname: _0x3608c6,
  isMe: _0x160c6a,
  isOwner: _0x215d5d,
  groupMetadata: _0x1eef06,
  groupName: _0xa0332f,
  participants: _0x5f43ea,
  groupAdmins: _0x2834c2,
  isBotAdmins: _0x448524,
  isAdmins: _0xc9ea26,
  reply: _0x3b9700
}) => {
  try {
    if (!_0x2951c1) {
      return _0x3b9700("Please give me a url or title");
    }
    const _0x2ca393 = await yts(_0x2951c1);
    const _0x123500 = _0x2ca393.videos[0x0];
    const _0x2d7d99 = _0x123500.url;
    let _0x33b53b = "\n*📽️ESHU-MD VIDEO DOWNLOADING [⬇️]\n\n🎥 *VIDEO FOUND!* \n\n➥ *Title:* " + _0x123500.title + " \n➥ *Duration:* " + _0x123500.timestamp + " \n➥ *Views:* " + _0x123500.views + " \n➥ *Uploaded On:* " + _0x123500.ago + " \n➥ *Link:* " + _0x123500.url + " \n\n🎬 *ENJOY THE VIDEO BROUGHT TO YOU!*\n\n> *QUEEN ESHU-MD WHATSAPP BOT* \n\n> *© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴇꜱʜᴀɴ👨‍💻*\n";
    await _0x1f5c9a.sendMessage(_0x38acf5, {
      'image': {
        'url': _0x123500.thumbnail
      },
      'caption': _0x33b53b
    }, {
      'quoted': _0x2094e0
    });
    let _0xcecb3 = await fg.ytv(_0x2d7d99);
    let _0x48a8a8 = _0xcecb3.dl_url;
    await _0x1f5c9a.sendMessage(_0x38acf5, {
      'video': {
        'url': _0x48a8a8
      },
      'mimetype': "video/mp4"
    }, {
      'quoted': _0x2094e0
    });
    await _0x1f5c9a.sendMessage(_0x38acf5, {
      'document': {
        'url': _0x48a8a8
      },
      'mimetype': "video/mp4",
      'fileName': _0x123500.title + ".mp4",
      'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴏʙɪᴀ ʙᴜᴛᴛ*"
    }, {
      'quoted': _0x2094e0
    });
  } catch (_0x59881b) {
    console.log(_0x59881b);
    _0x3b9700("${e}");
  }
});
