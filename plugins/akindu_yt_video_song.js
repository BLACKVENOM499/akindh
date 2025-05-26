const {
  cmd
} = require('../command');
const {
  fetchJson
} = require("../lib/functions");
cmd({
  'pattern': "phub",
  'alias': ['ph', "porndown", "pornhub"],
  'react': '🔞',
  'desc': "Download pornhub.com porn video",
  'category': "download",
  'use': ".phub < text >",
  'filename': __filename
}, async (_0x24445d, _0x570072, _0x5d0265, {
  from: _0x28f368,
  quoted: _0x29923f,
  reply: _0x6a530,
  q: _0xe7be0b
}) => {
  try {
    if (!_0xe7be0b) {
      return await _0x6a530("Please give me few word !");
    }
    const _0x56fad1 = await fetchJson("https://www.dark-yasiya-api.site/search/phub?q=" + _0xe7be0b);
    if (_0x56fad1.result.length < 0x0) {
      return await _0x6a530("Not results found !");
    }
    const _0x135d2c = await fetchJson("https://www.dark-yasiya-api.site/download/phub?url=" + _0x56fad1.result[0x0].url);
    const _0x485b49 = " \n\n       🔥   *PORNHUB DOWNLOADER*   🔥\n\n     \n🔮 *Title* - " + _0x135d2c.result.video_title + "\n🔮 *Uploader* - " + _0x135d2c.result.video_uploader + "\n🔮 *Duration* - " + _0x135d2c.result.analyze_time + "\n";
    await _0x24445d.sendMessage(_0x28f368, {
      'image': {
        'url': _0x135d2c.result.video_cover || ''
      },
      'caption': _0x485b49
    }, {
      'quoted': _0x570072
    });
    await _0x24445d.sendMessage(_0x28f368, {
      'document': {
        'url': _0x135d2c.result.format[0x0].download_url
      },
      'mimetype': "video/mp4",
      'fileName': _0x135d2c.result.video_title,
      'caption': _0x135d2c.result.video_title
    }, {
      'quoted': _0x570072
    });
  } catch (_0x306a3c) {
    console.log(_0x306a3c);
    _0x6a530(_0x306a3c);
  }
});
cmd({
  'pattern': "apk",
  'alias': ["app", 'ps', 'playstore'],
  'react': '🔞',
  'desc': "Download App APK ",
  'category': "download",
  'use': ".apk < text >",
  'filename': __filename
}, async (_0x1db9df, _0x53eee6, _0x534e51, {
  from: _0xdfa5b0,
  quoted: _0x293dcd,
  reply: _0x5dc222,
  q: _0x2feb56
}) => {
  try {
    if (!_0x2feb56) {
      return await _0x5dc222("Please give me few word !");
    }
    const _0x5b6701 = await fetchJson("https://www.dark-yasiya-api.site/search/apk?text=" + _0x2feb56);
    if (_0x5b6701.result.data.length < 0x0) {
      return await _0x5dc222("Not results found !");
    }
    const _0x535603 = await fetchJson("https://www.dark-yasiya-api.site/download/apk?id=" + _0x5b6701.result.data[0x0].id);
    const _0x15aa49 = " \n\n       🔥   *APK DOWNLOADER*   🔥\n\n     \n🔮 *Name* - " + _0x535603.result.name + "\n🔮 *Package* - " + _0x535603.result["package"] + "\n🔮 *Size* - " + _0x535603.result.size + "\n";
    await _0x1db9df.sendMessage(_0xdfa5b0, {
      'image': {
        'url': _0x535603.result.image || ''
      },
      'caption': _0x15aa49
    }, {
      'quoted': _0x53eee6
    });
    await _0x1db9df.sendMessage(_0xdfa5b0, {
      'document': {
        'url': _0x535603.result.dl_link
      },
      'mimetype': "application/vnd.android.package-archive",
      'fileName': _0x535603.result.name,
      'caption': _0x535603.result.name
    }, {
      'quoted': _0x53eee6
    });
  } catch (_0x16816d) {
    console.log(_0x16816d);
    _0x5dc222(_0x16816d);
  }
});
cmd({
  'pattern': "facebook",
  'alias': ['fb'],
  'react': '🔞',
  'desc': "Download facebook video",
  'category': "download",
  'use': ".fb < text >",
  'filename': __filename
}, async (_0x3529e4, _0x332064, _0x4cc4aa, {
  from: _0x1a4259,
  quoted: _0x2b7bca,
  reply: _0x287032,
  q: _0x1ee5b9
}) => {
  try {
    if (!_0x1ee5b9) {
      return await _0x287032("Please give me fb link !");
    }
    const _0x59b3ac = await fetchJson("https://www.dark-yasiya-api.site/download/fbdl1?url=" + _0x1ee5b9);
    const _0x4ac07f = " \n\n       🔥   *FB DOWNLOADER*   🔥\n\n     \n🔮 *Title* - " + _0x59b3ac.result.title;
    await _0x3529e4.sendMessage(_0x1a4259, {
      'image': {
        'url': _0x59b3ac.result.image || ''
      },
      'caption': _0x4ac07f
    }, {
      'quoted': _0x332064
    });
    await _0x3529e4.sendMessage(_0x1a4259, {
      'video': {
        'url': _0x59b3ac.result.sd
      },
      'mimetype': "video/mp4",
      'fileName': _0x59b3ac.result.title,
      'caption': "SD VIDEO"
    }, {
      'quoted': _0x332064
    });
    await _0x3529e4.sendMessage(_0x1a4259, {
      'video': {
        'url': _0x59b3ac.result.hd
      },
      'mimetype': "video/mp4",
      'fileName': _0x59b3ac.result.title,
      'caption': "HD VIDEO"
    }, {
      'quoted': _0x332064
    });
  } catch (_0x1cc6f1) {
    console.log(_0x1cc6f1);
    _0x287032(_0x1cc6f1);
  }
});
cmd({
  'pattern': "song",
  'desc': "download songs.",
  'category': "download",
  'react': '🎧',
  'filename': __filename
}, async (_0x3d4ec7, _0x445418, _0x3bd229, {
  from: _0x4028ec,
  reply: _0x39c40e,
  q: _0x4fa5b7
}) => {
  try {
    if (!_0x4fa5b7) {
      return _0x39c40e("Give me song name or url !");
    }
    const _0x4aa4a3 = await fetchJson("https://dark-yasiya-api.site/search/yt?q=" + _0x4fa5b7);
    const _0x22c5f8 = _0x4aa4a3.result.data[0x0];
    const _0x232836 = await fetchJson("https://dark-shan-yt.koyeb.app/download/ytmp3?url=" + _0x22c5f8.url + "&quality=3");
    let _0x2b11d0 = "‎‎           \n 🎶 YT SONG DOWNLOADER 🎶\n\n\n 🎵 ‎Title: " + _0x22c5f8.title + "\n ⏱ Duration: " + _0x22c5f8.timestamp + "\n 🌏 Uploaded: " + _0x22c5f8.ago + "\n 🧿 Views: " + _0x22c5f8.views + "\n 🤵 Author: " + _0x22c5f8.author.name + "\n 📎 Url: " + _0x22c5f8.url;
    await _0x3d4ec7.sendMessage(_0x4028ec, {
      'image': {
        'url': _0x22c5f8.thumbnail
      },
      'caption': _0x2b11d0
    }, {
      'quoted': _0x445418
    });
    await _0x3d4ec7.sendMessage(_0x4028ec, {
      'audio': {
        'url': _0x232836.data.download
      },
      'mimetype': 'audio/mpeg'
    }, {
      'quoted': _0x445418
    });
    await _0x3d4ec7.sendMessage(_0x4028ec, {
      'document': {
        'url': _0x232836.data.download
      },
      'mimetype': "audio/mpeg",
      'fileName': _0x22c5f8.title + ".mp3",
      'caption': "> CYBER ESHU MD"
    }, {
      'quoted': _0x445418
    });
  } catch (_0xb7371f) {
    console.log(_0xb7371f);
    _0x39c40e(_0xb7371f);
  }
});
