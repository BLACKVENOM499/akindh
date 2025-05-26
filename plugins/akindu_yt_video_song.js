const {
  cmd,
  commands
} = require("../command");
const yts = require("yt-search");
const {
  fetchJson
} = require("../lib/functions");
const axios = require("axios");
async function ytmp4(_0x3980bd, _0x4211c2) {
  try {
    if (!_0x3980bd || !_0x4211c2) {
      throw new Error("url and format parameters are required.");
    }
    const _0x16eb8d = parseInt(_0x4211c2.replace('p', ''), 0xa);
    const _0xc27ef2 = {
      'button': 0x1,
      'start': 0x1,
      'end': 0x1,
      'format': _0x16eb8d,
      'url': _0x3980bd
    };
    const _0x2cd7d7 = {
      'Accept': '*/*',
      'Accept-Encoding': "gzip, deflate, br",
      'Accept-Language': "en-GB,en-US;q=0.9,en;q=0.8",
      'Origin': "https://loader.to",
      'Referer': "https://loader.to",
      'Sec-Ch-Ua': "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
      'Sec-Ch-Ua-Mobile': '?1',
      'Sec-Ch-Ua-Platform': "\"Android\"",
      'Sec-Fetch-Dest': "empty",
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'cross-site',
      'User-Agent': "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36"
    };
    const _0x12280e = await axios.get("https://ab.cococococ.com/ajax/download.php", {
      'params': _0xc27ef2,
      'headers': _0x2cd7d7
    });
    const _0x5b8de8 = _0x12280e.data.id;
    const _0x516474 = async () => {
      const _0x23d43d = {
        'id': _0x5b8de8
      };
      try {
        const _0x336b9c = await axios.get('https://p.oceansaver.in/ajax/progress.php', {
          'params': _0x23d43d,
          'headers': _0x2cd7d7
        });
        const {
          progress: _0x4d40f8,
          download_url: _0x38b33a,
          text: _0x18cba7
        } = _0x336b9c.data;
        return _0x18cba7 === 'Finished' ? _0x38b33a : (await new Promise(_0x23ae03 => setTimeout(_0x23ae03, 0x3e8)), _0x516474());
      } catch (_0x5bfafc) {
        throw new Error("Error in progress check: " + _0x5bfafc.message);
      }
    };
    return await _0x516474();
  } catch (_0x2a0e7e) {
    console.error("Error:", _0x2a0e7e);
    return {
      'error': _0x2a0e7e.message
    };
  }
}
module.exports = {
  'ytmp4': ytmp4
};
function extractYouTubeId(_0x1b9638) {
  const _0x594fc7 = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const _0x2087a0 = _0x1b9638.match(_0x594fc7);
  return _0x2087a0 ? _0x2087a0[0x1] : null;
}
function convertYouTubeLink(_0x3e1474) {
  const _0xefb47c = extractYouTubeId(_0x3e1474);
  if (_0xefb47c) {
    return "https://www.youtube.com/watch?v=" + _0xefb47c;
  }
  return _0x3e1474;
}
cmd({
  'pattern': "song",
  'alias': 'play',
  'desc': "To download songs.",
  'react': '🎵',
  'category': "download",
  'filename': __filename
}, async (_0x43bccf, _0xc36936, _0x2221ed, {
  from: _0x4bb6a0,
  quoted: _0x11c3ad,
  body: _0x81afff,
  isCmd: _0x575e5b,
  command: _0x2fd985,
  args: _0x1cc9c2,
  q: _0x3767c3,
  isGroup: _0x1c9e96,
  sender: _0x4f43f6,
  senderNumber: _0x10ed07,
  botNumber2: _0x297b1f,
  botNumber: _0x4e9065,
  pushname: _0x347247,
  isMe: _0x3356fa,
  isOwner: _0x1d038a,
  groupMetadata: _0x38c4ea,
  groupName: _0x4dc96,
  participants: _0x288046,
  groupAdmins: _0x259687,
  isBotAdmins: _0x55e247,
  isAdmins: _0x1c9ab4,
  reply: _0x4080f2
}) => {
  try {
    if (!_0x3767c3) {
      return _0x4080f2("Please give me a URL or title.");
    }
    _0x3767c3 = convertYouTubeLink(_0x3767c3);
    const _0x1a6653 = await yts(_0x3767c3);
    const _0x46d3ed = _0x1a6653.videos[0x0];
    const _0x1a0ef5 = _0x46d3ed.url;
    let _0x3778c9 = "\n*ʟᴏʀᴅ-xᴍᴅ*\n*╭─┈┄┄┉┉┉┅┅┅┅──┅┅┅┅┅┅◊*\n*🤹‍♂️𝚂𝙾𝙽𝙶 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁🤹‍♀️*\n*╰─┈┄┄┉┉┉┅┅┅┅──┅┅┅┅┅┅◊*\n*╭─┈┄┄┉┉┉┅┅┅┅──┅┅┅┅┅┅◊*\n*➥ᴛɪᴛʟᴇ* : " + _0x46d3ed.title + "\n*➥ᴅᴜʀᴀᴛɪᴏɴ* :* " + _0x46d3ed.timestamp + "\n*➥ᴠɪᴇᴡs* :* " + _0x46d3ed.views + "\n*➥ᴜᴘʟᴏᴀᴅᴇᴅ*  : " + _0x46d3ed.ago + "\n*╰─┈┄┄┉┉┉┅┅┅┅──┅┅┅┅┅┅◊*\n\n\n🔢 *ʀᴇᴘʟʏ ɴᴜᴍᴅᴇʀ ᴏᴘᴛɪᴏɴ*\n\n*𝘼𝙐𝘿𝙄𝙊 𝙁𝙄𝙇𝙀 🎧*\n\n*1*       *ᴀᴜᴅɪᴏ*\n\n*𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝗗𝗢𝗖𝗨𝗠𝗡𝗘𝗧 📁*\n\n*2*       *ᴅᴏᴄᴜᴍᴇɴᴛ*\n\n> *ʟᴏʀᴅ-xᴍᴅ-ʙᴏᴛ*\n";
    const _0x313c23 = await _0x43bccf.sendMessage(_0x4bb6a0, {
      'image': {
        'url': _0x46d3ed.thumbnail
      },
      'caption': _0x3778c9
    }, {
      'quoted': _0xc36936
    });
    const _0x4b638e = _0x313c23.key.id;
    _0x43bccf.ev.on("messages.upsert", async _0x54e280 => {
      const _0x522e57 = _0x54e280.messages[0x0];
      if (!_0x522e57.message) {
        return;
      }
      const _0x1cf2df = _0x522e57.message.conversation || _0x522e57.message.extendedTextMessage?.["text"];
      const _0x24b64e = _0x522e57.key.remoteJid;
      const _0x2fe982 = _0x522e57.message.extendedTextMessage && _0x522e57.message.extendedTextMessage.contextInfo.stanzaId === _0x4b638e;
      if (_0x2fe982) {
        await _0x43bccf.sendMessage(_0x24b64e, {
          'react': {
            'text': '⬇️',
            'key': _0x522e57.key
          }
        });
        const _0xd1a4c5 = await fetchJson("https://www.dark-yasiya-api.site/download/ytmp3?url=" + _0x1a0ef5);
        const _0x41a400 = _0xd1a4c5.result.dl_link;
        await _0x43bccf.sendMessage;
        await _0x43bccf.sendMessage(_0x24b64e, {
          'react': {
            'text': '⬆️',
            'key': _0x522e57.key
          }
        });
        if (_0x1cf2df === '1') {
          await _0x43bccf.sendMessage(_0x24b64e, {
            'audio': {
              'url': _0x41a400
            },
            'mimetype': "audio/mpeg",
            'contextInfo': {
              'externalAdReply': {
                'title': _0x46d3ed.title,
                'body': _0x46d3ed.videoId,
                'mediaType': 0x1,
                'sourceUrl': _0x46d3ed.url,
                'thumbnailUrl': _0x46d3ed.thumbnail,
                'renderLargerThumbnail': true,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x522e57
          });
          await _0x43bccf.sendMessage(_0x24b64e, {
            'react': {
              'text': '✅',
              'key': _0x522e57.key
            }
          });
        } else if (_0x1cf2df === '2') {
          await _0x43bccf.sendMessage(_0x24b64e, {
            'document': {
              'url': _0x41a400
            },
            'mimetype': "audio/mp3",
            'fileName': _0x46d3ed.title + ".mp3",
            'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ* · · \n "
          }, {
            'quoted': _0x522e57
          });
          await _0x43bccf.sendMessage(_0x24b64e, {
            'react': {
              'text': '✅',
              'key': _0x522e57.key
            }
          });
        }
      }
    });
  } catch (_0x38ef6b) {
    console.log(_0x38ef6b);
    _0x4080f2('' + _0x38ef6b);
  }
});
cmd({
  'pattern': "video",
  'desc': "To download videos.",
  'react': '🎥',
  'category': 'download',
  'filename': __filename
}, async (_0x450ace, _0x222b3f, _0x61c7dc, {
  from: _0x25ec4a,
  quoted: _0x1244b7,
  body: _0x38beba,
  isCmd: _0x13a42e,
  command: _0x35fc0b,
  args: _0x15f038,
  q: _0x5211d6,
  isGroup: _0x48fd6e,
  sender: _0x4fd336,
  senderNumber: _0x1b369c,
  botNumber2: _0x1e3d0a,
  botNumber: _0x2cddaf,
  pushname: _0x40e314,
  isMe: _0x2e1004,
  isOwner: _0x31ec6e,
  groupMetadata: _0x2e24ef,
  groupName: _0x52841c,
  participants: _0x12e097,
  groupAdmins: _0x3961a0,
  isBotAdmins: _0xf424ad,
  isAdmins: _0x21b72e,
  reply: _0x27c1ab
}) => {
  try {
    if (!_0x5211d6) {
      return _0x27c1ab("Please give me a URL or title.");
    }
    _0x5211d6 = convertYouTubeLink(_0x5211d6);
    const _0x4fb3ea = await yts(_0x5211d6);
    const _0x42fb3d = _0x4fb3ea.videos[0x0];
    const _0x29b6f3 = _0x42fb3d.url;
    let _0x57470e = "\n*ʟᴏʀᴅ-xᴍᴅ*\n\n*╭─┈┄┄┉┉┉┅┅┅┅──┅┅┅┅┅┅◊*\n┃*🤹‍♂️𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁🤹‍♂️ *\n*╰─┈┄┄┉┉┉┅┅┅┅──┅┅┅┅┅┅◊*\n*╭─┈┄┄┉┉┉┅┅┅┅──┅┅┅┅┅┅◊*\n*➥ᴛɪᴛʟᴇ* :* " + _0x42fb3d.title + "\n*➥ᴅᴜʀᴀᴛɪᴏɴ* : " + _0x42fb3d.timestamp + "\n*➥ᴠɪᴇᴡs:*  " + _0x42fb3d.views + "\n*➥ᴜᴘʟᴏᴀᴅᴇᴅ*  : " + _0x42fb3d.ago + "\n*╰─┈┄┄┉┉┉┅┅┅┅──┅┅┅┅┅┅◊*\n\n\n🔢 *ʀᴇᴘʟʏ ɴᴜᴍʙᴇʀ ᴏᴘᴛɪᴏɴ*\n\n*𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 VIDEO 🎬*\n\n*1.1*       *360ᴘ*\n\n\n*𝗗𝗢𝗖𝗨𝗠𝗡𝗘𝗧 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 📁*\n\n*2.1*       *360ᴘ*\n\n\n> *ʟᴏʀᴅ-xᴍᴅ-ᴡᴀʙᴏᴛ* \n";
    const _0x3aa194 = await _0x450ace.sendMessage(_0x25ec4a, {
      'image': {
        'url': _0x42fb3d.thumbnail
      },
      'caption': _0x57470e
    }, {
      'quoted': _0x222b3f
    });
    ;
    const _0x56ad08 = _0x3aa194.key.id;
    _0x450ace.ev.on("messages.upsert", async _0x538cf9 => {
      const _0x28682c = _0x538cf9.messages[0x0];
      if (!_0x28682c.message) {
        return;
      }
      const _0x7941bd = _0x28682c.message.conversation || _0x28682c.message.extendedTextMessage?.["text"];
      const _0x558ccc = _0x28682c.key.remoteJid;
      const _0x16facb = _0x28682c.message.extendedTextMessage && _0x28682c.message.extendedTextMessage.contextInfo.stanzaId === _0x56ad08;
      if (_0x16facb) {
        await _0x450ace.sendMessage(_0x558ccc, {
          'react': {
            'text': '⬇️',
            'key': _0x28682c.key
          }
        });
        if (_0x7941bd === "1.1") {
          const _0x5248f3 = await ytmp4('' + _0x29b6f3, '360p');
          await _0x450ace.sendMessage;
          await _0x450ace.sendMessage(_0x558ccc, {
            'react': {
              'text': '⬆️',
              'key': _0x28682c.key
            }
          });
          await _0x450ace.sendMessage(_0x558ccc, {
            'video': {
              'url': _0x5248f3
            },
            'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ* · · \n"
          }, {
            'quoted': _0x28682c
          });
          await _0x450ace.sendMessage(_0x558ccc, {
            'react': {
              'text': '✅',
              'key': _0x28682c.key
            }
          });
        } else {
          if (_0x7941bd === "1.2") {
            const _0x558ebb = await ytmp4('' + _0x29b6f3, "480");
            await _0x450ace.sendMessage(_0x558ccc, {
              'delete': _0x3aa194.key
            });
            await _0x450ace.sendMessage(_0x558ccc, {
              'react': {
                'text': '⬆️',
                'key': _0x28682c.key
              }
            });
            await _0x450ace.sendMessage(_0x558ccc, {
              'video': {
                'url': _0x558ebb
              },
              'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ* · · \n"
            }, {
              'quoted': _0x28682c
            });
            await _0x450ace.sendMessage(_0x558ccc, {
              'react': {
                'text': '✅',
                'key': _0x28682c.key
              }
            });
          } else {
            if (_0x7941bd === "1.3") {
              const _0x523325 = await ytmp4('' + _0x29b6f3, "720");
              await _0x450ace.sendMessage;
              await _0x450ace.sendMessage(_0x558ccc, {
                'react': {
                  'text': '⬆️',
                  'key': _0x28682c.key
                }
              });
              await _0x450ace.sendMessage(_0x558ccc, {
                'video': {
                  'url': _0x523325
                },
                'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ* · · \n"
              }, {
                'quoted': _0x28682c
              });
              await _0x450ace.sendMessage(_0x558ccc, {
                'react': {
                  'text': '✅',
                  'key': _0x28682c.key
                }
              });
            } else {
              if (_0x7941bd === "1.4") {
                const _0x324d03 = await ytmp4('' + _0x29b6f3, "1080");
                await _0x450ace.sendMessage;
                await _0x450ace.sendMessage(_0x558ccc, {
                  'react': {
                    'text': '⬆️',
                    'key': _0x28682c.key
                  }
                });
                await _0x450ace.sendMessage(_0x558ccc, {
                  'video': {
                    'url': _0x324d03
                  },
                  'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ* · · \n"
                }, {
                  'quoted': _0x28682c
                });
                await _0x450ace.sendMessage(_0x558ccc, {
                  'react': {
                    'text': '✅',
                    'key': _0x28682c.key
                  }
                });
              } else {
                if (_0x7941bd === "2.1") {
                  const _0x291d0a = await ytmp4('' + _0x29b6f3, "360");
                  await _0x450ace.sendMessage(_0x558ccc, {
                    'delete': _0x3aa194.key
                  });
                  await _0x450ace.sendMessage(_0x558ccc, {
                    'react': {
                      'text': '⬆️',
                      'key': _0x28682c.key
                    }
                  });
                  await _0x450ace.sendMessage(_0x558ccc, {
                    'document': {
                      'url': _0x291d0a
                    },
                    'mimetype': 'video/mp4',
                    'fileName': _0x42fb3d.title + ".mp4",
                    'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ* · · \n"
                  }, {
                    'quoted': _0x28682c
                  });
                  await _0x450ace.sendMessage(_0x558ccc, {
                    'react': {
                      'text': '✅',
                      'key': _0x28682c.key
                    }
                  });
                } else {
                  if (_0x7941bd === "2.2") {
                    const _0xf955da = await ytmp4('' + _0x29b6f3, '480');
                    await _0x450ace.sendMessage;
                    await _0x450ace.sendMessage(_0x558ccc, {
                      'react': {
                        'text': '⬆️',
                        'key': _0x28682c.key
                      }
                    });
                    await _0x450ace.sendMessage(_0x558ccc, {
                      'document': {
                        'url': _0xf955da
                      },
                      'mimetype': 'video/mp4',
                      'fileName': _0x42fb3d.title + '.mp4',
                      'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ* · · \n"
                    }, {
                      'quoted': _0x28682c
                    });
                    await _0x450ace.sendMessage(_0x558ccc, {
                      'react': {
                        'text': '✅',
                        'key': _0x28682c.key
                      }
                    });
                  } else {
                    if (_0x7941bd === "2.3") {
                      const _0x30ae53 = await ytmp4('' + _0x29b6f3, "720");
                      await _0x450ace.sendMessage;
                      await _0x450ace.sendMessage(_0x558ccc, {
                        'react': {
                          'text': '⬆️',
                          'key': _0x28682c.key
                        }
                      });
                      await _0x450ace.sendMessage(_0x558ccc, {
                        'document': {
                          'url': _0x30ae53
                        },
                        'mimetype': "video/mp4",
                        'fileName': _0x42fb3d.title + ".mp4",
                        'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ* · · \n"
                      }, {
                        'quoted': _0x28682c
                      });
                      await _0x450ace.sendMessage(_0x558ccc, {
                        'react': {
                          'text': '✅',
                          'key': _0x28682c.key
                        }
                      });
                    } else {
                      if (_0x7941bd === '2.4') {
                        const _0x58ff1b = await ytmp4('' + _0x29b6f3, "1080");
                        await _0x450ace.sendMessage;
                        await _0x450ace.sendMessage(_0x558ccc, {
                          'react': {
                            'text': '⬆️',
                            'key': _0x28682c.key
                          }
                        });
                        await _0x450ace.sendMessage(_0x558ccc, {
                          'document': {
                            'url': _0x58ff1b
                          },
                          'mimetype': 'video/mp4',
                          'fileName': _0x42fb3d.title + ".mp4",
                          'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ* · · \n"
                        }, {
                          'quoted': _0x28682c
                        });
                        await _0x450ace.sendMessage(_0x558ccc, {
                          'react': {
                            'text': '✅',
                            'key': _0x28682c.key
                          }
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  } catch (_0x45c27a) {
    console.log(_0x45c27a);
    _0x27c1ab('' + _0x45c27a);
  }
});
cmd({
  'pattern': "yta",
  'alias': "ytmp3",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x108a5b, _0x4bb37e, _0x22e7aa, {
  from: _0x13d495,
  q: _0x543cc4,
  reply: _0x11443e
}) => {
  try {
    if (!_0x543cc4) {
      return await _0x11443e("*Need a YouTube URL!*");
    }
    const _0x5f2011 = await fetchJson("https://www.dark-yasiya-api.site/download/ytmp3?url=" + _0x543cc4);
    const _0x475684 = _0x5f2011.result.dl_link;
    await _0x108a5b.sendMessage(_0x13d495, {
      'audio': {
        'url': _0x475684
      },
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0x4bb37e
    });
  } catch (_0x3024e5) {
    console.log("First attempt failed:", _0x3024e5);
    try {
      const _0x2a20f5 = await dlyta(_0x543cc4);
      await _0x108a5b.sendMessage(_0x13d495, {
        'audio': {
          'url': _0x2a20f5.dl_link
        },
        'mimetype': "audio/mpeg"
      }, {
        'quoted': _0x4bb37e
      });
    } catch (_0x1605c5) {
      console.log("Second attempt failed:", _0x1605c5);
      await _0x11443e("*Failed to process the request. Please try again later!*");
    }
  }
});
