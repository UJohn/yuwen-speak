(function () {
  /* The audio dictionaries are loaded on first playback, not with the first screen. */
  window.TENCENT_VOICE_AVAILABLE = true;

  "use strict";

  window.addEventListener("error", function (ev) {
    if (ev && ev.error) showFatal(ev.error);
  });
  window.addEventListener("unhandledrejection", function (ev) {
    if (ev && ev.reason) showFatal(ev.reason);
  });

  var C = window.CONTENT;
  var DAYS = C.days;
  var SAVE_KEY = "yuwen-bookroom-v1";
  var GAME_ORDER = ["pinyin", "read"];
  var GAME_META = {
    pinyin: { name: "拼音找朋友", tag: "PINYIN", sub: "读一读，把字和音连起来" },
    read: { name: "认字小侦探", tag: "RENZI", sub: "看清字形再动笔" }
  };
  var EXTRA_GAMES = [
    { kind: "pinyinQuiz", name: "听音选拼音", tag: "TINGYIN", sub: "听整音节，也听拼读" },
    { kind: "toneQuiz", name: "声调小侦探", tag: "SHENGDIAO", sub: "听读音，判断第几声" }
  ];

  function hasYoudaoVoice() {
    return !!(window.VOICE_MAPS && window.VOICE_MAPS.youdao &&
      Object.keys(window.VOICE_MAPS.youdao).length);
  }

  var TENCENT_VOICES = ["tencent-403006", "tencent-402001", "tencent-403011", "tencent-403014"];
  function hasTencentVoice() {
    if (window.TENCENT_VOICE_AVAILABLE === true) return true;
    return !!(window.VOICE_MAPS && window.VOICE_MAPS["tencent-403006"] &&
      Object.keys(window.VOICE_MAPS["tencent-403006"]).length);
  }

  function isEnglishVoice(value) {
    return ["sonia", "libby", "maisie"].indexOf(value) >= 0 ||
      (value === "youdao" && hasYoudaoVoice()) ||
      (TENCENT_VOICES.indexOf(value) >= 0 && hasTencentVoice());
  }

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ------------------------------------------------------------ state */

  function blankState() {
    return {
      schema: 2, stars: 0, sound: true, speak: true, volume: 1, slowRate: 0.72,
      enVoice: hasTencentVoice() ? "tencent-403006" : "sonia",
      zhVoice: "xiaoxiao", pyVoice: "pinyin-yoyo", tbImages: true,
      days: {}, chars: {}, read: {}, today: { date: "", count: 0 }
    };
  }

  var state = loadState();
  var currentDay = firstOpenDay();
  var flowQueue = null;
  var homeTab = "zh";
  var pinyinProLoading = false;
  var pinyinProFailed = false;
  var pinyinProCallbacks = [];
  var BLENDS = window.PINYIN_BLENDS || [];
  var EN_ALPHABET = window.ENGLISH_ALPHABET || [];

  function loadState() {
    try {
      var raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return blankState();
      var data = JSON.parse(raw);
      if (hasTencentVoice() && ["sonia", "libby", "maisie"].indexOf(data.enVoice) >= 0) {
        data.enVoice = "tencent-403006";
      }
      var base = blankState();
      return {
        schema: 2,
        stars: typeof data.stars === "number" ? data.stars : 0,
        sound: data.sound !== false,
        speak: data.speak !== false,
        volume: typeof data.volume === "number" ? Math.min(1, Math.max(0, data.volume)) : 1,
        slowRate: [0.6, 0.72, 0.85].indexOf(data.slowRate) >= 0 ? data.slowRate : 0.72,
        enVoice: isEnglishVoice(data.enVoice) ? data.enVoice : "sonia",
        zhVoice: ["xiaoxiao", "xiaoyi"].indexOf(data.zhVoice) >= 0 ? data.zhVoice : "xiaoxiao",
        pyVoice: ["pinyin-yoyo", "xiaoxiao", "xiaoyi"].indexOf(data.pyVoice) >= 0 ? data.pyVoice : "pinyin-yoyo",
        tbImages: data.schema === 2 ? data.tbImages !== false : true,
        days: data.days && typeof data.days === "object" ? data.days : {},
        chars: data.chars && typeof data.chars === "object" ? data.chars : {},
        read: data.read && typeof data.read === "object" ? data.read : {},
        today: data.today && typeof data.today === "object" ? data.today : { date: "", count: 0 }
      };
    } catch (err) {
      return blankState();
    }
  }

  function save() {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); } catch (err) {}
  }

  function dayState(no) {
    if (!state.days[no]) state.days[no] = {};
    return state.days[no];
  }

  function firstOpenDay() {
    for (var i = 0; i < DAYS.length; i++) {
      var ds = state.days[DAYS[i].no] || {};
      if (GAME_ORDER.some(function (k) { return !ds[k]; })) return DAYS[i].no;
    }
    return 1;
  }

  /* ------------------------------------------------------------ sound */

  var audioCtx = null;

  function tone(freq, start, dur, type, vol) {
    if (!state.sound) return;
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!audioCtx) audioCtx = new AC();
      var t0 = audioCtx.currentTime + start;
      var osc = audioCtx.createOscillator();
      var gain = audioCtx.createGain();
      osc.type = type || "sine";
      osc.frequency.setValueAtTime(freq, t0);
      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.linearRampToValueAtTime(vol || 0.12, t0 + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(t0);
      osc.stop(t0 + dur + 0.03);
    } catch (err) {}
  }

  function sfx(kind) {
    if (kind === "tap") { tone(520, 0, 0.09, "sine", 0.05); return; }
    if (kind === "correct") { tone(784, 0, 0.12, "sine", 0.11); tone(1046, 0.09, 0.16, "sine", 0.09); return; }
    if (kind === "wrong") { tone(300, 0, 0.11, "triangle", 0.07); tone(232, 0.09, 0.16, "triangle", 0.06); return; }
    if (kind === "win") {
      [523, 659, 784, 1046].forEach(function (f, i) {
        tone(f, i * 0.1, 0.24, "sine", 0.1);
      });
    }
  }

  /* 只播放预生成的 Edge 女声 MP3，不使用系统语音 */
  var audioEl = null;
  var tbSeqAudio = null;
  var tbSeqToken = 0;
  var wordSeqAudio = null;
  var wordSeqToken = 0;
  var speakAutoTimer = null;
  var AUDIO_VERSION = "20261118-16";

  function isEnglishAudioKey(key) {
    return key.indexOf("en") === 0 || key.indexOf("tb:") === 0 || key.indexOf("tbw:") === 0 ||
      key.indexOf("tbt:") === 0 || key.indexOf("w:") === 0;
  }

  function resolveAudioSrc(key) {
    var src = window.AUDIO_MAP && window.AUDIO_MAP[key];
    if (isEnglishAudioKey(key) && state.enVoice !== "sonia" &&
        window.VOICE_MAPS && window.VOICE_MAPS[state.enVoice]) {
      src = window.VOICE_MAPS[state.enVoice][key] || src;
    }
    var isPinyinKey = key.indexOf("dr:") === 0;
    var zhVoice = isPinyinKey ? (state.pyVoice || "pinyin-yoyo") : state.zhVoice;
    if (!isEnglishAudioKey(key) && zhVoice !== "xiaoxiao" && zhVoice !== "pinyin-yoyo" &&
        window.ZH_VOICE_MAPS && window.ZH_VOICE_MAPS[zhVoice]) {
      src = window.ZH_VOICE_MAPS[zhVoice][key] || src;
    }
    if (!src) return src;
    return src + (src.indexOf("?") >= 0 ? "&" : "?") + "v=" + AUDIO_VERSION;
  }

  function say(key, text, lang, slow) {
    if (!state.speak) return;
    if (!window.AUDIO_PACK_READY && !audioPackFailed) {
      ensureAudioPack(function () { say(key, text, lang, slow); });
      return;
    }
    stopTextbookSequence();
    var src = resolveAudioSrc(key);
    if (src) {
      try {
        if (!audioEl) audioEl = new Audio();
        audioEl.volume = state.volume;
        try { $("#myVoice").pause(); } catch (e) {}
        audioEl.pause();
        audioEl.src = src;
        audioEl.currentTime = 0;
        audioEl.playbackRate = slow === 2 ? 0.5 : (slow ? (state.slowRate || 0.72) : 1);
        try { audioEl.preservesPitch = true; audioEl.webkitPreservesPitch = true; } catch (e) {}
        var pr = audioEl.play();
        if (pr && pr.catch) pr.catch(function () {});
        return;
      } catch (err) {}
    }
  }

  function feedbackSay(ok, subject) {
    if (!state.speak) return;
    if (subject === "en") {
      say(ok ? "en-feedback:right" : "en-feedback:wrong",
        ok ? "That's right!" : "Try again.", "en-GB");
      return;
    }
    say(ok ? "quiz:right" : "quiz:wrong",
      ok ? "答对啦！" : "再听一听。", "zh-CN");
  }

  function feedbackKey(ok, subject) {
    if (subject === "en") return ok ? "en-feedback:right" : "en-feedback:wrong";
    return ok ? "quiz:right" : "quiz:wrong";
  }

  function playFeedbackSequence(keys) {
    if (!state.speak) return;
    playSequence(keys.filter(Boolean), null);
  }

  function stopTextbookSequence() {
    tbSeqToken++;
    if (tbSeqAudio) {
      try { tbSeqAudio.pause(); } catch (err) {}
      tbSeqAudio = null;
    }
  }

  function playSequence(keys, onDone) {
    if (!window.AUDIO_PACK_READY && !audioPackFailed) {
      ensureAudioPack(function () { playSequence(keys, onDone); });
      return;
    }
    stopTextbookSequence();
    if (audioEl) {
      try { audioEl.pause(); } catch (err) {}
    }
    var token = tbSeqToken;
    var i = 0;
    function next() {
      if (token !== tbSeqToken || i >= keys.length) {
        if (token === tbSeqToken && onDone) onDone();
        return;
      }
      var src = resolveAudioSrc(keys[i++]);
      if (!src) { next(); return; }
      var a = new Audio(src);
      a.volume = state.volume;
      a.playbackRate = 1;
      try { a.preservesPitch = true; a.webkitPreservesPitch = true; } catch (err) {}
      tbSeqAudio = a;
      a.onended = next;
      a.onerror = next;
      var p = a.play();
      if (p && p.catch) p.catch(next);
    }
    next();
  }

  function stopWordSequence() {
    wordSeqToken++;
    if (wordSeqAudio) {
      try { wordSeqAudio.pause(); } catch (err) {}
      wordSeqAudio = null;
    }
    $$("#speakText .w-token").forEach(function (el) { el.classList.remove("on"); });
  }

  function playWordByWord() {
    if (!speakState) return;
    if (!window.AUDIO_PACK_READY && !audioPackFailed) {
      ensureAudioPack(function () { playWordByWord(); });
      return;
    }
    clearTimeout(speakAutoTimer);
    var item = speakState.entries[speakState.idx].item;
    var text = String(item.text || "").replace(/[’‘]/g, "'");
    if (!/[A-Za-z]/.test(text) || !state.speak) return;
    stopTextbookSequence();
    stopWordSequence();
    stopTbWordSequence();
    pausePlayback();
    var token = ++wordSeqToken;
    var parts = text.match(/[A-Za-z']+|[^A-Za-z']+/g) || [];
    var words = [];
    var html = "";
    parts.forEach(function (part) {
      if (/^[A-Za-z']+$/.test(part)) {
        var idx = words.length;
        words.push(part);
        html += '<span class="w-token" data-w="' + idx + '">' + escapeHTML(part) + "</span>";
      } else {
        html += escapeHTML(part);
      }
    });
    $("#speakText").innerHTML = html;
    var spans = $$("#speakText .w-token");
    var i = 0;
    function next() {
      if (token !== wordSeqToken) return;
      spans.forEach(function (el) { el.classList.remove("on"); });
      if (i >= words.length) return;
      var span = spans[i];
      if (span) span.classList.add("on");
      var word = words[i++];
      var src = resolveAudioSrc(spokenWordKey(word));
      if (!src) {
        setTimeout(next, tbGapMs());
        return;
      }
      var a = new Audio(src);
      a.volume = state.volume;
      a.playbackRate = 1;
      try { a.preservesPitch = true; a.webkitPreservesPitch = true; } catch (err) {}
      wordSeqAudio = a;
      a.onended = function () { if (token === wordSeqToken) setTimeout(next, tbGapMs()); };
      a.onerror = function () { if (token === wordSeqToken) setTimeout(next, tbGapMs()); };
      var p = a.play();
      if (p && p.catch) p.catch(function () { if (token === wordSeqToken) setTimeout(next, tbGapMs()); });
    }
    next();
  }

  /* ------------------------------------------------------------ helpers */

  function shuffle(list) {
    var arr = list.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  function showFatal(err) {
    try {
      var box = document.getElementById("fatalBox");
      if (!box) {
        box = document.createElement("div");
        box.id = "fatalBox";
        box.style.cssText = "position:fixed;z-index:99999;left:12px;right:12px;top:12px;background:#fff;color:#5a443c;border:2px solid #f26d8d;border-radius:16px;padding:14px 16px;box-shadow:0 10px 30px rgba(0,0,0,.18);font:13px/1.6 -apple-system,BlinkMacSystemFont,sans-serif";
        box.innerHTML = '<b>页面加载出错</b> <button type="button" style="margin-left:8px;padding:6px 12px;border:0;border-radius:999px;background:#f26d8d;color:#fff;font:inherit" onclick="location.reload()">刷新页面</button><pre style="white-space:pre-wrap;max-height:140px;overflow:auto;margin:8px 0 0;font-size:11px"></pre>';
        document.body.appendChild(box);
      }
      box.hidden = false;
      box.querySelector("pre").textContent = String((err && (err.stack || err.message)) || err || "未知错误");
    } catch (e) {}
  }

  function dayByNo(no) {
    return DAYS.filter(function (d) { return d.no === no; })[0] || DAYS[0];
  }

  function totalDone(no) {
    var ds = state.days[no] || {};
    return GAME_ORDER.filter(function (k) { return ds[k]; }).length;
  }

  function addStars(n) {
    state.stars += n;
    syncStarChip();
    save();
  }

  function syncStarChip() {
    $("#starCount").textContent = state.stars;
    $("#starChip").setAttribute("aria-label", "我的星星，共 " + state.stars + " 颗");
  }

  function openStarModal() {
    $("#starModalCount").textContent = state.stars;
    $("#starModal").hidden = false;
  }

  function closeStarModal() {
    $("#starModal").hidden = true;
  }

  function flashToast(el, text) {
    if (!el) return;
    el.textContent = text;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(function () { el.classList.remove("show"); }, 2200);
  }

  function rubyHTML(text) {
    if (!window.pinyinPro || !window.pinyinPro.pinyin) return escapeHTML(text);
    var chars = Array.from(text);
    var pys = [];
    try {
      pys = window.pinyinPro.pinyin(text, { type: "array", toneType: "symbol" });
    } catch (err) {
      pys = [];
    }
    var aligned = pys.length === chars.length;
    return chars.map(function (ch, i) {
      if (!/[\u4e00-\u9fa5]/.test(ch)) return escapeHTML(ch);
      var py = aligned ? pys[i] : "";
      if (!py) {
        try { py = window.pinyinPro.pinyin(ch, { toneType: "symbol" }); } catch (err) { py = ""; }
      }
      return py ? "<ruby>" + ch + "<rt>" + escapeHTML(py) + "</rt></ruby>" : ch;
    }).join("");
  }

  /* pinyin-pro is only needed once a Chinese reading/game screen is opened. */
  function ensurePinyinPro(cb) {
    if (window.pinyinPro || pinyinProFailed) {
      if (cb) cb();
      return;
    }
    if (cb) pinyinProCallbacks.push(cb);
    if (pinyinProLoading) return;
    pinyinProLoading = true;
    var s = document.createElement("script");
    s.src = "assets/pinyin-pro.js?v=20261117-18";
    s.onload = function () {
      pinyinProLoading = false;
      var list = pinyinProCallbacks.splice(0);
      list.forEach(function (fn) { fn(); });
    };
    s.onerror = function () {
      pinyinProLoading = false;
      pinyinProFailed = true;
      var list = pinyinProCallbacks.splice(0);
      list.forEach(function (fn) { fn(); });
    };
    document.head.appendChild(s);
  }

  var audioPackLoading = false;
  var audioPackFailed = false;
  var audioPackCallbacks = [];
  var audioMapBeforePack = null;

  function ensureAudioPack(cb) {
    if (window.AUDIO_PACK_READY) {
      if (cb) cb();
      return;
    }
    if (audioPackFailed) {
      if (cb) cb();
      return;
    }
    if (cb) audioPackCallbacks.push(cb);
    if (audioPackLoading) return;
    audioPackLoading = true;
    if (!audioMapBeforePack) audioMapBeforePack = window.AUDIO_MAP || {};
    var s = document.createElement("script");
    s.src = "audio-bundle.js?v=20261118-22";
    s.onload = function () {
      audioPackLoading = false;
      window.AUDIO_PACK_READY = true;
      window.AUDIO_MAP = Object.assign({}, window.AUDIO_MAP || {}, audioMapBeforePack);
      var list = audioPackCallbacks.splice(0);
      list.forEach(function (fn) { fn(); });
    };
    s.onerror = function () {
      audioPackLoading = false;
      audioPackFailed = true;
      var list = audioPackCallbacks.splice(0);
      list.forEach(function (fn) { fn(); });
    };
    document.head.appendChild(s);
  }

  function warmResources() {
    ensureAudioPack();
  }

  function speakRubyHTML(text, py) {
    var chars = Array.from(text);
    var toks = String(py || "").trim().split(/\s+/).filter(Boolean);
    var slots = [];
    chars.forEach(function (ch, i) {
      if (/[\u4e00-\u9fa5]/.test(ch)) slots.push(i);
    });
    var map = {};
    if (toks.length === slots.length) {
      slots.forEach(function (ci, k) { map[ci] = toks[k]; });
    } else if (toks.length === slots.length - 1 && text.indexOf("儿") >= 0) {
      var ti = 0;
      slots.forEach(function (ci) {
        if (chars[ci] === "儿" && ti > 0 && /r$/i.test(toks[ti - 1] || "")) {
          map[ci] = "";
        } else {
          map[ci] = toks[ti] || "";
          ti++;
        }
      });
    } else {
      slots.forEach(function (ci) {
        var one = "";
        try {
          if (window.pinyinPro && window.pinyinPro.pinyin) {
            one = window.pinyinPro.pinyin(chars[ci], { toneType: "symbol" });
          }
        } catch (err) {}
        map[ci] = one;
      });
    }
    var groups = [];
    chars.forEach(function (ch, i) {
      if (/[\u4e00-\u9fa5]/.test(ch)) {
        groups.push({ p: map[i] || "", c: ch });
      } else if (groups.length) {
        groups[groups.length - 1].c += ch;
      } else {
        groups.push({ p: "", c: ch });
      }
    });
    return '<span class="ruby-line">' + groups.map(function (g) {
      return '<span class="rb' + (g.p ? "" : " no-py") + '"><i>' +
        escapeHTML(g.p) + "</i><b>" + escapeHTML(g.c) + "</b></span>";
    }).join("") + "</span>";
  }

  function escapeHTML(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c];
    });
  }

  function starTag(rating) {
    var out = "";
    for (var i = 0; i < 3; i++) {
      out += '<img src="assets/img/star.webp" alt=""' + (i < rating ? "" : ' class="off"') + ">";
    }
    return out;
  }

  /* ------------------------------------------------------------ home */

  function renderHome() {
    syncStarChip();
    syncSoundIcon();
    syncSettingsUI();
    applyVolume();
  }

  function applyHomeTab() {
    var isPractice = homeTab === "practice";
    $("#reading").hidden = isPractice;
    $("#englishTools").hidden = homeTab !== "en";
    $("#practiceSection").hidden = !isPractice;
    $(".today-line").hidden = isPractice;
    $("#readingTitle").textContent = homeTab === "en" ? "英语阅读" : "语文阅读";
    $("#readingSub").textContent = homeTab === "en" ? "课本、单词、句子" : "课本、拼音、词语、句子";
    $$("#homeTabs button").forEach(function (b) {
      var on = b.dataset.homeTab === homeTab;
      b.classList.toggle("on", on);
      b.setAttribute("aria-selected", String(on));
    });
  }

  function renderEnglishTools() {
    var grid = $("#englishToolGrid");
    if (!grid) return;
    grid.innerHTML = "";
    [
      { id: "alphabet", mark: "A", title: "英语字母表", sub: "26 个字母 · 听音选字母", art: "A a  ·  B b  ·  C c" }
    ].forEach(function (tool) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "tool-card";
      b.innerHTML =
        '<span class="tool-mark">' + tool.mark + "</span>" +
        '<span class="tool-copy"><b>' + tool.title + "</b><span>" + tool.sub + "</span><em>" + tool.art + "</em></span>" +
        '<span class="tool-go"><i class="icon icon-chevron"></i></span>';
      b.addEventListener("click", function () {
        sfx("tap");
        openAlphabet();
      });
      grid.appendChild(b);
    });
  }

  function renderDayStrip() {
    var strip = $("#dayStrip");
    strip.innerHTML = "";
    DAYS.forEach(function (d) {
      var ds = state.days[d.no] || {};
      var done = GAME_ORDER.filter(function (k) { return ds[k]; }).length;
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "day-chip" + (d.no === currentDay ? " active" : "");
      btn.innerHTML =
        '<span class="d-no">' + d.no + '<span>天</span></span>' +
        '<span class="d-title">' + escapeHTML(d.title.split(" · ").slice(-1)[0]) + "</span>" +
        '<span class="d-dots">' +
        GAME_ORDER.map(function (k) { return '<i class="' + (ds[k] ? "on" : "") + '"></i>'; }).join("") +
        "</span>";
      btn.addEventListener("click", function () {
        currentDay = d.no;
        sfx("tap");
        renderHome();
      });
      strip.appendChild(btn);
    });
  }

  function gameArt(kind) {
    return '<div class="g-art">' + cardArt(kind) + "</div>";
  }

  function cardArt(kind) {
    if (kind === "pinyin") {
      return '<span class="g-pill">shǒu</span><span class="g-char">手</span>';
    }
    if (kind === "stroke") {
      return '<div class="g-mini-tian"><span>木</span></div>' +
        '<span class="g-pill">1 2 3 4</span>';
    }
    if (kind === "trace") {
      return '<div class="g-mini-tian"><span>日</span></div>';
    }
    if (kind === "pinyinQuiz") {
      return '<span class="g-pill">b</span><span class="g-char">?</span><span class="g-pill">p</span>';
    }
    if (kind === "toneQuiz") {
      return '<span class="g-pill">mǎ</span><span class="g-char">3</span>';
    }
    if (kind === "blendQuiz") {
      return '<span class="g-pill">b</span><span class="g-char">—</span><span class="g-pill">a</span><span class="g-char">?</span>';
    }
    return '<span class="g-char">日</span><span class="g-pill">还是</span><span class="g-char">目</span>';
  }

  var ART_THEMES = {
    "zh-u1": "sky", "zh-u2": "pinyin1", "zh-u3": "pinyin2", "zh-u4": "pinyin3",
    "zh-u5": "autumn", "zh-u6": "school", "zh-u7": "moon", "zh-u8": "crow",
    "en-u1": "hello", "en-u2": "bag", "en-u3": "count", "en-u4": "rainbow",
    "en-u5": "scooter", "en-u6": "animals",
    "en-r1": "review", "en-r2": "review", "en-names": "names",
    "pinyin": "pinyin", "words": "words", "sentences": "sentences",
    "en-words": "words", "en-sentences": "sentences", "en-wordbook": "wordbook",
    "alphabet": "alphabet"
  };

  function themeArt(theme, cls) {
    var body = {
      sky: '<circle cx="18" cy="13" r="6.5" fill="#FFD48A"/><path d="M6 27c2-4 5-6 9-6s7 2 9 6" stroke="#8FD3BE" stroke-width="2.4" fill="none" stroke-linecap="round"/><circle cx="11" cy="17" r="1.4" fill="#F26D8D"/>',
      pinyin: '<text x="6" y="23" font-size="15" font-family="Andika, sans-serif" fill="#8E6FB4">a</text><text x="18" y="26" font-size="12" font-family="Andika, sans-serif" fill="#4FAF92">o</text><text x="25" y="18" font-size="10" font-family="Andika, sans-serif" fill="#F26D8D">e</text>',
      pinyin1: '<text x="4" y="24" font-size="14" font-family="Andika, sans-serif" fill="#8E6FB4">a</text><text x="14" y="24" font-size="14" font-family="Andika, sans-serif" fill="#4FAF92">o</text><text x="24" y="24" font-size="14" font-family="Andika, sans-serif" fill="#F26D8D">e</text>',
      pinyin2: '<text x="4" y="24" font-size="14" font-family="Andika, sans-serif" fill="#7FB6E8">b</text><text x="13" y="24" font-size="14" font-family="Andika, sans-serif" fill="#8E6FB4">p</text><text x="22" y="24" font-size="14" font-family="Andika, sans-serif" fill="#4FAF92">m</text>',
      pinyin3: '<text x="5" y="23" font-size="12" font-family="Andika, sans-serif" fill="#FFB067">ai</text><text x="19" y="23" font-size="12" font-family="Andika, sans-serif" fill="#8E6FB4">ei</text><text x="12" y="31" font-size="9" font-family="Andika, sans-serif" fill="#4FAF92">ang</text>',
      "pinyin-hub": '<circle cx="18" cy="18" r="11" fill="none" stroke="#C5B2E2" stroke-width="2.2"/><text x="10" y="23" font-size="12" font-family="Andika, sans-serif" fill="#8E6FB4">ā</text><path d="M23 12v12" stroke="#FFB067" stroke-width="2.2" stroke-linecap="round"/>',
      autumn: '<path d="M24 8c-6 1-10 6-11 13" stroke="#B4586E" stroke-width="2" fill="none" stroke-linecap="round"/><ellipse cx="14" cy="22" rx="6" ry="3.4" fill="#FFB067" transform="rotate(-24 14 22)"/><circle cx="26" cy="25" r="2.4" fill="#FFD48A"/>',
      school: '<rect x="8" y="13" width="20" height="16" rx="4" fill="#FF93A8"/><rect x="12" y="17" width="12" height="8" rx="2" fill="#FFE6EB"/><path d="M14 13v-3a4 4 0 0 1 8 0v3" stroke="#B4586E" stroke-width="2" fill="none"/>',
      moon: '<path d="M22 8a9 9 0 1 0 6 16 10 10 0 0 1-6-16z" fill="#FFD48A"/><circle cx="10" cy="10" r="1.6" fill="#C5B2E2"/><circle cx="12" cy="26" r="1.3" fill="#8FD3BE"/>',
      crow: '<ellipse cx="17" cy="20" rx="7.5" ry="6" fill="#6E5194"/><circle cx="23" cy="15" r="3.2" fill="#6E5194"/><path d="M26 15l5 1.6-5 1.6z" fill="#FFB067"/><circle cx="23.6" cy="14.2" r="0.9" fill="#FFFDF8"/>',
      hello: '<circle cx="14" cy="17" r="6" fill="#FFE3CF"/><path d="M8 15c1-4 3.6-6 6-6s5 2 6 6" stroke="#6B4A3A" stroke-width="2.4" fill="none"/><path d="M23 21c4 0 6 2 6 5" stroke="#F26D8D" stroke-width="2.4" fill="none" stroke-linecap="round"/>',
      bag: '<rect x="7" y="14" width="22" height="15" rx="5" fill="#8FD3BE"/><path d="M12 14v-2a6 6 0 0 1 12 0v2" stroke="#4FAF92" stroke-width="2.2" fill="none"/><rect x="14" y="19" width="8" height="5" rx="2" fill="#FFFDF8"/>',
      count: '<text x="5" y="25" font-size="13" font-family="Andika, sans-serif" fill="#7FB6E8">1</text><text x="14" y="25" font-size="13" font-family="Andika, sans-serif" fill="#8FD3BE">2</text><text x="23" y="25" font-size="13" font-family="Andika, sans-serif" fill="#FFB067">3</text>',
      rainbow: '<path d="M5 26c0-9 6-16 14-16s14 7 14 16" stroke="#FF93A8" stroke-width="3" fill="none"/><path d="M9 26c0-7 4.6-12 10-12s10 5 10 12" stroke="#FFD86B" stroke-width="3" fill="none"/><path d="M13 26c0-5 3-8 6-8s6 3 6 8" stroke="#8FD3BE" stroke-width="3" fill="none"/>',
      scooter: '<circle cx="11" cy="26" r="4" fill="#5A443C"/><circle cx="26" cy="26" r="4" fill="#5A443C"/><path d="M13 25h9l4-11" stroke="#F26D8D" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M24 14h5" stroke="#8D746A" stroke-width="2.6" stroke-linecap="round"/>',
      animals: '<circle cx="13" cy="19" r="5.4" fill="#B79A86"/><circle cx="26" cy="22" r="4.4" fill="#FFFDF8"/><path d="M24 18l-1-4 4 2zM29 18l1-4-4 2z" fill="#FFFDF8"/><circle cx="11.6" cy="18.4" r="0.9" fill="#5A443C"/><circle cx="14.6" cy="18.4" r="0.9" fill="#5A443C"/>',
      review: '<path d="M24 10a9 9 0 1 0 3 7" stroke="#4FAF92" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M24 6v5h5" stroke="#4FAF92" stroke-width="2.6" fill="none" stroke-linecap="round"/>',
      names: '<text x="5" y="24" font-size="14" font-family="Andika, sans-serif" fill="#8E6FB4">A</text><text x="15" y="24" font-size="14" font-family="Andika, sans-serif" fill="#F26D8D">B</text><text x="25" y="24" font-size="14" font-family="Andika, sans-serif" fill="#4FAF92">C</text>',
      words: '<rect x="7" y="12" width="22" height="17" rx="3.5" fill="#FFFDF8" stroke="#FFD48A" stroke-width="2"/><path d="M11 18h14M11 22h9" stroke="#E0C7A8" stroke-width="1.8" stroke-linecap="round"/>',
      sentences: '<rect x="6" y="11" width="24" height="9" rx="4.5" fill="#FFFDF8" stroke="#C5B2E2" stroke-width="2"/><path d="M10 15.5h12" stroke="#C5B2E2" stroke-width="1.8" stroke-linecap="round"/><path d="M20 20v6" stroke="#C5B2E2" stroke-width="2" stroke-linecap="round"/>',
      wordbook: '<rect x="8" y="10" width="19" height="21" rx="3" fill="#FF93A8"/><rect x="11" y="10" width="16" height="21" rx="3" fill="#FFFDF8" stroke="#FFB067" stroke-width="1.8"/><path d="M16 17h6M16 21h6" stroke="#FFB067" stroke-width="1.8" stroke-linecap="round"/>',
      alphabet: '<text x="4" y="26" font-size="20" font-family="Andika, sans-serif" fill="#3D8F80">A</text><text x="20" y="26" font-size="14" font-family="Andika, sans-serif" fill="#8E6FB4">b</text>'
    }[theme];
    if (!body) return "";
    return '<span class="card-art ' + (cls || "") + '" aria-hidden="true">' +
      '<svg viewBox="0 0 36 36">' + body + "</svg></span>";
  }

  function gameCount(kind, day) {
    if (kind === "pinyin") return "8 组";
    if (kind === "stroke" || kind === "trace") return day.write.length + " 个字";
    if (kind === "pinyinQuiz" || kind === "blendQuiz") return "10 题";
    if (kind === "toneQuiz") return "20 题";
    return "10 题";
  }

  function makeGameCard(kind, meta, day, ds, extra) {
    var card = document.createElement("button");
    card.type = "button";
    card.className = "game-card" + (extra ? " extra-game" : "");
    card.dataset.game = kind;
    card.innerHTML =
      (ds[kind]
        ? '<span class="g-done">今天已练</span>'
        : '<span class="g-count">' + (extra ? "10 题" : gameCount(kind, day)) + "</span>") +
      '<span class="g-tag">' + meta.tag + "</span>" +
      "<h4>" + meta.name + "</h4>" +
      '<p class="g-sub">' + meta.sub + "</p>" +
      gameArt(kind);
    card.addEventListener("click", function () {
      flowQueue = null;
      openGame(kind, currentDay);
    });
    return card;
  }

  function renderGameGrid() {
    var grid = $("#gameGrid");
    if (!grid) return;
    var day = dayByNo(currentDay);
    var ds = state.days[currentDay] || {};
    grid.innerHTML = "";
    GAME_ORDER.forEach(function (kind) {
      grid.appendChild(makeGameCard(kind, GAME_META[kind], day, ds, false));
    });
    EXTRA_GAMES.forEach(function (meta) {
      if (meta.kind === "blendQuiz") return;
      grid.appendChild(makeGameCard(meta.kind, meta, day, ds, true));
    });
  }

  function renderHeroProgress() {
    var entries = allReadingEntries();
    var done = entries.filter(function (e) { return state.read[e.id]; }).length;
    var today = state.today.date === todayStr() ? state.today.count : 0;
    var dots = "";
    for (var i = 0; i < 5; i++) dots += '<i class="' + (i < today ? "on" : "") + '"></i>';
    $("#heroProgress").innerHTML =
      '<span class="hero-dots">' + dots + "</span>" +
      "<span>今天读了 " + today + " 次 · 已读 " + done + " / " + entries.length + " 个</span>";
  }

  function renderMascotLine() {
    var today = state.today.date === todayStr() ? state.today.count : 0;
    var line = "我先读，你跟着我读～";
    if (today >= 5) line = "今天读够啦，去玩一会儿吧！";
    else if (today > 0) line = "已经读了 " + today + " 次，声音越来越亮啦";
    $("#mascotLine").textContent = line;
  }

  function renderStamps() {
    var chars = [];
    DAYS.forEach(function (d) {
      d.write.forEach(function (ch) { if (chars.indexOf(ch) < 0) chars.push(ch); });
    });
    var grid = $("#stampGrid");
    grid.innerHTML = "";
    var owned = 0;
    chars.forEach(function (ch) {
      var rating = state.chars[ch] || 0;
      if (rating > 0) owned++;
      var el = document.createElement("button");
      el.type = "button";
      el.className = "stamp" + (rating > 0 ? " on" : " locked");
      el.innerHTML = rating > 0
        ? escapeHTML(ch) + '<span class="s-py">' + (window.PY[ch] || "") + "</span>" +
          '<span class="s-stars">' + starTag(rating) + "</span>"
        : "?";
      el.addEventListener("click", function () {
        if (rating > 0) {
          say("char:" + ch, ch, "zh-CN");
          sfx("tap");
          flashToast($("#pinyinToast"), "「" + ch + "」" + (window.PY[ch] || "") + " · " +
            (window.STROKE_NAMES[ch] || []).length + " 画");
        } else {
          flashToast($("#pinyinToast"), "写到这个字，就能收集它啦");
        }
        $("#collection").scrollIntoView({ behavior: "smooth", block: "center" });
      });
      grid.appendChild(el);
    });
    $("#collectionCount").textContent = "已经收集 " + owned + " 个字";
  }

  function syncSoundIcon() {
    var btn = $("#soundBtn");
    var icon = $(".icon-volume", btn);
    if (icon) icon.classList.toggle("off", !state.sound);
    $("#soundSwitch").setAttribute("aria-checked", String(state.sound));
    $("#speakSwitch").setAttribute("aria-checked", String(state.speak));
  }

  function syncSettingsUI() {
    var pct = Math.round((state.volume || 1) * 100);
    var range = $("#volumeRange");
    if (range) range.value = pct;
    var value = $("#volumeValue");
    if (value) value.textContent = pct + "%";
    $$("#slowSeg button").forEach(function (b) {
      b.classList.toggle("on", Math.abs(parseFloat(b.dataset.rate) - state.slowRate) < 0.01);
    });
    $$("#voiceSeg button").forEach(function (b) {
      b.classList.toggle("on", b.dataset.voice === state.enVoice);
      if (b.classList.contains("tencent-voice")) b.hidden = !hasTencentVoice();
      if (b.classList.contains("legacy-voice")) b.hidden = hasTencentVoice();
    });
    var youdaoBtn = $("#voiceYoudao");
    if (youdaoBtn) youdaoBtn.hidden = !hasYoudaoVoice() || hasTencentVoice();
    $$("#zhVoiceSeg button").forEach(function (b) {
      b.classList.toggle("on", b.dataset.zhVoice === state.zhVoice);
    });
    syncVoiceFloat();
  }

  /* ------------------------------------------------------------ screens */

  var openScreenId = null;
  var subjectScroll = { zh: 0, en: 0 };

  function showScreen(id) {
    if (id !== "s-textbook") closeTbSheet();
    $$(".screen").forEach(function (el) { el.hidden = true; });
    var el = $("#" + id);
    el.hidden = false;
    el.scrollTop = 0;
    openScreenId = id;
    syncVoiceFloat();
    document.body.style.overflow = "hidden";
    cancelSpeech();
    pausePlayback();
    stopTextbookSequence();
    stopWordSequence();
    stopTbWordSequence();
  }

  function rememberSubjectScroll() {
    if (openScreenId !== "s-units") return;
    var screen = $("#s-units");
    if (!screen) return;
    var id = screen.classList.contains("theme-en") ? "en" : "zh";
    subjectScroll[id] = screen.scrollTop;
  }

  function goHome() {
    $$(".screen").forEach(function (el) { el.hidden = true; });
    $("#s-pinyin").hidden = true;
    openScreenId = null;
    syncVoiceFloat();
    document.body.style.overflow = "";
    flowQueue = null;
    speakReturn = { screen: "home" };
    cancelSpeech();
    resetListen();
    pausePlayback();
    stopTextbookSequence();
    stopWordSequence();
    clearInterval(pqTimerId);
    pqTimerId = null;
    pqState = null;
    tqState = null;
    eqState = null;
    resetBlendRead();
    bqState = null;
    renderHome();
  }

  function goBackFromSpeak() {
    resetListen();
    if (speakReturn.screen === "s-units") {
      openSubject(speakReturn.subject || "zh");
      return;
    }
    if (speakReturn.screen === "s-pick" && speakReturn.deck) {
      openPicker(speakReturn.deck);
      return;
    }
    goHome();
  }

  function goBackScreen(id) {
    if (!id) goHome();
    else if (id === "s-speak") goBackFromSpeak();
    else if (id === "s-textbook") openSubject("en");
    else if (id === "s-pinyin-drill") openSubject("zh");
    else if (id === "s-pick") openSubject((pickDeck && pickDeck.subject) || "en");
    else if (id === "s-alphabet") openSubject("en");
    else if (id === "s-en-quiz") {
      if (eqReturn === "s-alphabet") openAlphabet();
      else openSubject("en");
    } else if (["s-pinyin", "s-read", "s-pinyin-quiz", "s-tone-quiz", "s-blend-quiz", "s-stroke", "s-trace"].indexOf(id) >= 0) {
      openSubject("zh");
    } else {
      goHome();
    }
  }

  function cancelSpeech() {
    try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch (err) {}
  }

  function openGame(kind, dayNo) {
    rememberGameReturn();
    rememberSubjectScroll();
    ensureAudioPack();
    currentDay = dayNo || currentDay;
    if (kind === "pinyin") startPinyin();
    else if (kind === "pinyinQuiz") startPinyinQuiz();
    else if (kind === "toneQuiz") startToneQuiz();
    else if (kind === "blendQuiz") startBlendQuiz();
    else if (kind === "stroke") startStroke();
    else if (kind === "trace") startTrace();
    else startRead();
  }

  function openNext() {
    if (flowQueue && flowQueue.length) {
      var next = flowQueue.shift();
      openGame(next, currentDay);
    } else {
      goHome();
    }
  }

  /* ------------------------------------------------------------ complete */

  var celebrateAction = "next";
  var celebrateBack = null;
  var gameReturn = { screen: "home" };

  function rememberGameReturn() {
    var screen = $("#s-units");
    var subject = screen && screen.classList.contains("theme-en") ? "en" : "zh";
    gameReturn = { screen: "s-units", subject: subject };
  }

  function returnFromGame() {
    if (celebrateBack && celebrateBack.screen === "s-units") {
      openSubject(celebrateBack.subject || "zh");
    } else if (gameReturn.screen === "s-units") {
      openSubject(gameReturn.subject || "zh");
    } else {
      goHome();
    }
  }

  function completeActivity(kind, gained, text) {
    var ds = dayState(currentDay);
    ds[kind] = 1;
    if (gained) addStars(gained);
    save();
    currentDay = (currentDay % DAYS.length) + 1;
    sfx("win");
    var praise = pickPraise();
    say("praise:" + praise, praise, "zh-CN");
    var nextKind = flowQueue && flowQueue.length ? flowQueue[0] : null;
    var backToList = gameReturn.screen === "s-units";
    showCelebrate({
      title: gained ? "太棒啦！" : "又练了一遍！",
      text: text,
      stars: gained,
      nextLabel: nextKind ? "下一关" : (backToList ? "回小课堂" : "回小书房"),
      action: nextKind ? "next" : (backToList ? "back" : "next"),
      backTo: gameReturn
    });
  }

  function pickPraise() {
    var list = ["真棒！", "写得很认真！", "又进步啦！", "这一关通过啦！"];
    return list[Math.floor(Math.random() * list.length)];
  }

  function showCelebrate(opt) {
    $("#celebrateTitle").textContent = opt.title;
    $("#celebrateText").textContent = opt.text;
    $("#celebrateStars").textContent = "+ " + opt.stars + " 颗星星";
    $("#celebrateStars").hidden = !(opt.stars > 0);
    $("#celebrateNext").textContent = opt.nextLabel || "下一关";
    celebrateAction = opt.action || "next";
    celebrateBack = opt.backTo || null;
    $("#celebrateHome").hidden = /^回/.test(opt.nextLabel || "") && celebrateAction !== "replay";
    var box = $("#celebrate");
    box.hidden = false;
    confetti();
  }

  function hideCelebrate() {
    $("#celebrate").hidden = true;
  }

  /* ------------------------------------------------------------ confetti */

  function confetti() {
    var canvas = $("#confetti");
    var rect = canvas.getBoundingClientRect();
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    var ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    var colors = ["#FF93A8", "#FFD48A", "#8FD3BE", "#C5B2E2", "#FFF1D6"];
    var pieces = [];
    for (var i = 0; i < 90; i++) {
      pieces.push({
        x: Math.random() * rect.width,
        y: -20 - Math.random() * rect.height * 0.5,
        w: 5 + Math.random() * 7,
        h: 8 + Math.random() * 9,
        vy: 1.6 + Math.random() * 2.8,
        vx: -0.6 + Math.random() * 1.2,
        r: Math.random() * Math.PI,
        vr: -0.08 + Math.random() * 0.16,
        c: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    var start = performance.now();
    var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    function frame(now) {
      var t = now - start;
      ctx.clearRect(0, 0, rect.width, rect.height);
      pieces.forEach(function (p) {
        p.x += p.vx;
        p.y += p.vy;
        p.r += p.vr;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.r);
        ctx.fillStyle = p.c;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      if (t < 2600) requestAnimationFrame(frame);
      else ctx.clearRect(0, 0, rect.width, rect.height);
    }
    requestAnimationFrame(frame);
  }

  /* ------------------------------------------------------------ pinyin */

  var pyState = null;

  function extraPinyinForDay(day) {
    var pool = (window.EXTRA_PRACTICE && window.EXTRA_PRACTICE.pinyin) || [];
    var start = ((day.no - 1) * 8) % Math.max(1, pool.length);
    var out = [], usedPy = {}, usedCh = {};
    day.pinyin.forEach(function (p) { usedPy[p[0]] = 1; usedCh[p[1]] = 1; });
    for (var i = 0; i < pool.length && out.length < 8; i++) {
      var p = pool[(start + i) % pool.length];
      if (usedPy[p[0]] || usedCh[p[1]]) continue;
      usedPy[p[0]] = 1; usedCh[p[1]] = 1;
      out.push(p);
    }
    return out;
  }

  function allPinyinPairs() {
    var out = [];
    var seen = {};
    function add(pair) {
      var key = pair[0] + "|" + pair[1];
      if (seen[key]) return;
      seen[key] = 1;
      out.push(pair);
    }
    DAYS.forEach(function (day) {
      (day.pinyin || []).forEach(add);
    });
    ((window.EXTRA_PRACTICE && window.EXTRA_PRACTICE.pinyin) || []).forEach(add);
    return out;
  }

  function startPinyin() {
    var day = dayByNo(currentDay);
    showScreen("s-pinyin");
    var pairs = shuffle(allPinyinPairs()).slice(0, 8);
    pyState = { day: day, pairs: pairs, selected: null, left: pairs.length, total: pairs.length };
    var tray = $("#pinyinTray");
    var grid = $("#charGrid");
    tray.innerHTML = "";
    grid.innerHTML = "";

    shuffle(pairs).forEach(function (pair, i) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "py-chip";
      chip.dataset.py = pair[0];
      chip.textContent = pair[0];
      chip.setAttribute("aria-label", "拼音 " + pair[0]);
      chip.addEventListener("click", function () {
        if (!chip.classList.contains("done")) selectPinyin(chip);
        say("py:" + pair[0], pair[0], "zh-CN");
      });
      tray.appendChild(chip);
    });

    shuffle(pairs).forEach(function (pair) {
      var tile = document.createElement("button");
      tile.type = "button";
      tile.className = "char-tile";
      tile.dataset.ch = pair[1];
      tile.dataset.py = pair[0];
      tile.innerHTML = '<span class="ct-char">' + pair[1] + '</span><span class="ct-py">' + pair[0] + "</span>";
      tile.addEventListener("click", function () { tryMatch(tile); });
      grid.appendChild(tile);
    });

    renderPinyinDots();
    flashToast($("#pinyinToast"), "先点上面的拼音，再点下面的字");
  }

  function renderPinyinDots() {
    var dots = $("#pinyinDots");
    dots.innerHTML = "";
    for (var i = 0; i < pyState.total; i++) {
      var i2 = document.createElement("i");
      if (i < pyState.total - pyState.left) i2.className = "on";
      dots.appendChild(i2);
    }
  }

  function selectPinyin(chip) {
    if (chip.classList.contains("done")) return;
    $$(".py-chip").forEach(function (c) { c.classList.remove("sel"); });
    chip.classList.add("sel");
    pyState.selected = chip;
    sfx("tap");
  }

  function tryMatch(tile) {
    if (tile.classList.contains("done")) return;
    if (!pyState.selected) {
      flashToast($("#pinyinToast"), "先点上面的拼音，再来找它的好朋友");
      return;
    }
    var chip = pyState.selected;
    if (chip.dataset.py === tile.dataset.py) {
      chip.classList.add("done");
      chip.classList.remove("sel");
      tile.classList.add("done", "pop");
      pyState.selected = null;
      pyState.left--;
      sfx("correct");
      say("char:" + tile.dataset.ch, tile.dataset.ch, "zh-CN");
      renderPinyinDots();
      if (pyState.left === 0) {
        setTimeout(function () {
          completeActivity("pinyin", 3, pyState.total + " 组拼音和汉字都找到朋友啦，读得又准又快。");
        }, 620);
      }
    } else {
      tile.classList.add("wrong");
      sfx("wrong");
      setTimeout(function () { tile.classList.remove("wrong"); }, 420);
      flashToast($("#pinyinToast"), "再读一读这个音，换一个字试试");
    }
  }

  /* ------------------------------------------------------------ stroke */

  var strokeState = null;

  function startStroke() {
    var day = dayByNo(currentDay);
    showScreen("s-stroke");
    strokeState = { day: day, idx: 0, writer: null, done: {} };
    renderStrokeSwitch();
    loadStrokeChar(0);
    $("#strokeTip").textContent = day.strokeTip;
  }

  function renderStrokeSwitch() {
    var wrap = $("#strokeSwitch");
    wrap.innerHTML = "";
    strokeState.day.write.forEach(function (ch, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = i === strokeState.idx ? "on" : "";
      b.innerHTML = ch + '<span class="cs-stars">' +
        (strokeState.done[ch] ? '<img src="assets/img/star.webp" alt="">' : "") + "</span>";
      b.addEventListener("click", function () { loadStrokeChar(i); });
      wrap.appendChild(b);
    });
  }

  function loadStrokeChar(idx) {
    if (strokeState.writer) {
      try { strokeState.writer.cancelQuiz(); } catch (err) {}
    }
    strokeState.idx = idx;
    var ch = strokeState.day.write[idx];
    $("#strokeChar").textContent = ch;
    $("#strokePinyin").textContent = window.PY[ch] || "";
    $("#strokeCount").textContent = (window.STROKE_NAMES[ch] || []).length + " 画";
    $("#strokeHint").textContent = "先看小老师怎么写，再自己试一次。";

    var list = $("#strokeList");
    list.innerHTML = "";
    (window.STROKE_NAMES[ch] || []).forEach(function (name, i) {
      var li = document.createElement("li");
      li.innerHTML = '<span class="n">' + (i + 1) + "</span><b>" + name + "</b>";
      list.appendChild(li);
    });

    var box = $("#strokeTarget");
    box.innerHTML = "";
    var boxSize = Math.max(220, Math.round(box.getBoundingClientRect().width || 320));
    strokeState.writer = HanziWriter.create(box, ch, {
      width: boxSize,
      height: boxSize,
      padding: 8,
      strokeColor: "#5A443C",
      radicalColor: "#F26D8D",
      outlineColor: "#F0D8CC",
      showOutline: true,
      strokeAnimationSpeed: 0.9,
      delayBetweenStrokes: 360,
      charDataLoader: function (c, onLoad) { onLoad(window.HANZI_DATA[c]); }
    });
    strokeState.writer.animateCharacter();
    renderStrokeSwitch();
  }

  function playStrokeQuiz() {
    var ch = strokeState.day.write[strokeState.idx];
    var writer = strokeState.writer;
    if (!writer) return;
    $("#strokeHint").textContent = "沿着红色的提示，一笔一笔写。";
    try { writer.cancelQuiz(); } catch (err) {}
    writer.quiz({
      leniency: 1.35,
      showHintAfterMisses: 2,
      highlightOnComplete: true,
      onCorrectStroke: function (data) {
        var items = $$("#strokeList li");
        items.forEach(function (li, i) { li.classList.toggle("now", i === data.strokeNum); });
        sfx("tap");
      },
      onMistake: function () { sfx("wrong"); },
      onComplete: function (summary) {
        strokeState.done[ch] = true;
        sfx("correct");
        say("char:" + ch, ch, "zh-CN");
        renderStrokeSwitch();
        var items = $$("#strokeList li");
        items.forEach(function (li) { li.classList.remove("now"); });
        $("#strokeHint").textContent = summary.totalMistakes === 0
          ? "一笔都没错，真稳！"
          : "写完啦，再写一遍会更顺。";
        if (Object.keys(strokeState.done).length === strokeState.day.write.length) {
          setTimeout(function () {
            completeActivity("stroke", 3, "三个字的笔顺都写对啦，横平竖直，很稳。");
          }, 780);
        } else {
          setTimeout(nextStrokeChar, 1000);
        }
      }
    });
  }

  function nextStrokeChar() {
    var next = -1;
    strokeState.day.write.forEach(function (ch, i) {
      if (next < 0 && !strokeState.done[ch]) next = i;
    });
    if (next >= 0) loadStrokeChar(next);
  }

  /* ------------------------------------------------------------ trace */

  var traceState = null;
  var TW = 720;

  function startTrace() {
    var day = dayByNo(currentDay);
    showScreen("s-trace");
    traceState = { day: day, idx: 0, drawn: false, done: {} };
    renderTraceSwitch();
    loadTraceChar(0);
    $("#traceTip").textContent = day.writeTip;
    bindTraceCanvas();
  }

  function renderTraceSwitch() {
    var wrap = $("#traceSwitch");
    wrap.innerHTML = "";
    traceState.day.write.forEach(function (ch, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = i === traceState.idx ? "on" : "";
      b.innerHTML = ch + '<span class="cs-stars">' +
        (state.chars[ch] ? '<img src="assets/img/star.webp" alt="">'.repeat(state.chars[ch]) : "") + "</span>";
      b.addEventListener("click", function () { loadTraceChar(i); });
      wrap.appendChild(b);
    });
  }

  function drawGuide(ch) {
    var guide = $("#traceGuide");
    var gctx = guide.getContext("2d");
    gctx.clearRect(0, 0, TW, TW);
    gctx.save();
    gctx.textAlign = "center";
    gctx.textBaseline = "middle";
    gctx.font = '600 ' + Math.round(TW * 0.74) + 'px Kai, "Kaiti SC", serif';
    gctx.fillStyle = "rgba(90,68,60,0.15)";
    gctx.fillText(ch, TW / 2, TW / 2 + TW * 0.03);
    gctx.restore();
  }

  function loadTraceChar(idx) {
    traceState.idx = idx;
    var ch = traceState.day.write[idx];
    $("#traceChar").textContent = ch;
    $("#tracePinyin").textContent = window.PY[ch] || "";
    $("#traceCount").textContent = (window.STROKE_NAMES[ch] || []).length + " 画";
    $("#traceScore").hidden = true;
    $("#traceHint").textContent = "沿着淡淡的笔画，慢慢描一遍。";
    traceState.drawn = false;
    clearInk();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { drawGuide(ch); });
    } else {
      drawGuide(ch);
    }
    renderTraceSwitch();
  }

  function clearInk() {
    var ink = $("#traceCanvas");
    var ctx = ink.getContext("2d");
    ctx.clearRect(0, 0, TW, TW);
    traceState.drawn = false;
  }

  var traceDrawing = false;

  function bindTraceCanvas() {
    var canvas = $("#traceCanvas");
    if (canvas._bound) return;
    canvas._bound = true;
    var ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#F2698A";
    ctx.lineWidth = 22;
    ctx.globalAlpha = 0.82;

    function pos(ev) {
      var r = canvas.getBoundingClientRect();
      return {
        x: (ev.clientX - r.left) * (TW / r.width),
        y: (ev.clientY - r.top) * (TW / r.height)
      };
    }

    canvas.addEventListener("pointerdown", function (ev) {
      ev.preventDefault();
      traceDrawing = true;
      traceState.drawn = true;
      try { canvas.setPointerCapture(ev.pointerId); } catch (err) {}
      var p = pos(ev);
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + 0.6, p.y + 0.6);
      ctx.stroke();
      $("#traceScore").hidden = true;
    });

    canvas.addEventListener("pointermove", function (ev) {
      if (!traceDrawing) return;
      ev.preventDefault();
      var p = pos(ev);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    });

    function stop(ev) {
      if (!traceDrawing) return;
      traceDrawing = false;
      try { canvas.releasePointerCapture(ev.pointerId); } catch (err) {}
    }
    canvas.addEventListener("pointerup", stop);
    canvas.addEventListener("pointercancel", stop);
    canvas.addEventListener("pointerleave", function () { traceDrawing = false; });
  }

  function scoreTrace() {
    var ink = $("#traceCanvas");
    var inkData = ink.getContext("2d").getImageData(0, 0, TW, TW).data;
    var inkCount = 0;
    for (var i = 3; i < inkData.length; i += 4) if (inkData[i] > 30) inkCount++;
    if (inkCount < 240) return null;

    var mask = document.createElement("canvas");
    mask.width = TW; mask.height = TW;
    var mctx = mask.getContext("2d");
    mctx.textAlign = "center";
    mctx.textBaseline = "middle";
    mctx.font = '600 ' + Math.round(TW * 0.74) + 'px Kai, "Kaiti SC", serif';
    mctx.fillStyle = "#000";
    mctx.fillText(traceState.day.write[traceState.idx], TW / 2, TW / 2 + TW * 0.03);
    var maskData = mctx.getImageData(0, 0, TW, TW).data;

    var dil = document.createElement("canvas");
    dil.width = TW; dil.height = TW;
    var dctx = dil.getContext("2d");
    dctx.filter = "blur(7px)";
    dctx.drawImage(ink, 0, 0);
    var dilData = dctx.getImageData(0, 0, TW, TW).data;

    var maskCount = 0, covered = 0;
    for (var p = 3; p < maskData.length; p += 4) {
      if (maskData[p] > 60) {
        maskCount++;
        if (dilData[p] > 26) covered++;
      }
    }
    if (!maskCount) return null;
    var ratio = covered / maskCount;

    var insideInk = 0;
    for (var q = 3; q < inkData.length; q += 4) {
      if (inkData[q] > 30 && dilData[q] > 26) insideInk++;
    }
    var spill = (inkCount - insideInk) / Math.max(1, inkCount);

    var stars;
    if (ratio > 0.46 && spill < 0.3) stars = 3;
    else if (ratio > 0.26 && spill < 0.55) stars = 2;
    else stars = 1;
    return { ratio: ratio, spill: spill, stars: stars };
  }

  function finishTrace() {
    if (!traceState.drawn) {
      $("#traceHint").textContent = "还没开始描呢，先沿淡淡的字描一遍。";
      return;
    }
    var result = scoreTrace();
    if (!result) {
      $("#traceHint").textContent = "再描满一点，压着淡淡的笔画走。";
      return;
    }
    var ch = traceState.day.write[traceState.idx];
    state.chars[ch] = Math.max(state.chars[ch] || 0, result.stars);
    save();
    $("#traceScore").hidden = false;
    $("#traceStars").innerHTML = starTag(result.stars);
    $("#traceScoreText").textContent = result.spill > 0.5
      ? "描到外面去啦。再描一遍，只走淡淡的笔画。"
      : result.stars === 3
        ? "描得很准，像印上去的一样！"
        : result.stars === 2
          ? "不错，再压着线走一遍会更稳。"
          : "描到啦。慢一点，沿着淡淡的笔画走。";
    $("#traceHint").textContent = "描完红，再在纸上自己写一遍。";
    traceState.done[ch] = Math.max(traceState.done[ch] || 0, result.stars);
    sfx(result.stars >= 2 ? "correct" : "tap");
    say("char:" + ch, ch, "zh-CN");
    renderTraceSwitch();

    if (Object.keys(traceState.done).length === traceState.day.write.length) {
      var bonus = result.stars >= 2 ? 1 : 0;
      $("#traceNext").textContent = "全部写完，领星星";
      setTimeout(function () {
        completeActivity("trace", 3 + bonus, "三个字都描好了。现在合上屏幕，在纸上自己写一遍。");
      }, 1100);
    } else {
      $("#traceNext").textContent = "写下一个字";
    }
  }

  /* ------------------------------------------------------------ read */

  var readState = null;

  function extraReadForDay(day) {
    var pool = (window.EXTRA_PRACTICE && window.EXTRA_PRACTICE.read) || [];
    var start = ((day.no - 1) * 5) % Math.max(1, pool.length);
    var out = [], used = {};
    day.read.forEach(function (q) { used[q.q] = 1; });
    for (var i = 0; i < pool.length && out.length < 5; i++) {
      var q = pool[(start + i) % pool.length];
      if (used[q.q]) continue;
      used[q.q] = 1;
      out.push(q);
    }
    return out;
  }

  function allReadQuestions() {
    var out = [];
    var seen = {};
    function add(q) {
      if (!q || seen[q.q]) return;
      seen[q.q] = 1;
      out.push(q);
    }
    DAYS.forEach(function (day) {
      (day.read || []).forEach(add);
    });
    ((window.EXTRA_PRACTICE && window.EXTRA_PRACTICE.read) || []).forEach(add);
    return out;
  }

  function startRead() {
    var day = dayByNo(currentDay);
    showScreen("s-read");
    readState = { day: day, items: shuffle(allReadQuestions()).slice(0, 10), idx: 0, locked: false, done: 0 };
    renderReadDots();
    loadQuestion(0);
    ensurePinyinPro(function () {
      if (openScreenId === "s-read" && readState) loadQuestion(readState.idx);
    });
  }

  function renderReadDots() {
    var dots = $("#readDots");
    dots.innerHTML = "";
    for (var i = 0; i < readState.items.length; i++) {
      var d = document.createElement("i");
      if (i < readState.done) d.className = "on";
      dots.appendChild(d);
    }
  }

  function loadQuestion(idx) {
    readState.idx = idx;
    readState.locked = false;
    var item = readState.items[idx];
    $("#questionText").innerHTML = rubyHTML(item.q);
    $("#readWhy").textContent = "";
    var grid = $("#optionGrid");
    grid.innerHTML = "";
    item.opts.forEach(function (opt) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "option";
      b.dataset.opt = opt;
      b.innerHTML = escapeHTML(opt);
      b.addEventListener("click", function () { answerRead(b); });
      grid.appendChild(b);
    });
    say("q:" + item.q, item.q, "zh-CN");
  }

  function answerRead(btn) {
    if (readState.locked) return;
    var item = readState.items[readState.idx];
    if (btn.dataset.opt === item.ans) {
      readState.locked = true;
      btn.classList.add("right");
      sfx("correct");
      $("#readWhy").textContent = item.why;
      readState.done++;
      renderReadDots();
      playFeedbackSequence([feedbackKey(true, "zh"), "ans:" + item.ans]);
      if (readState.done === readState.items.length) {
        setTimeout(function () {
          completeActivity("read", 3, readState.items.length + " 题都看准了。看清字形再动笔，字就不会写错。");
        }, 1200);
      } else {
        setTimeout(function () { loadQuestion(readState.idx + 1); }, 1700);
      }
    } else {
      btn.classList.add("wrong");
      sfx("wrong");
      feedbackSay(false, "zh");
      setTimeout(function () { btn.classList.remove("wrong"); }, 420);
      $("#readWhy").textContent = "再仔细看看它的样子。";
    }
  }

  /* ------------------------------------------------------------ quiz games */

  var pqState = null;
  var pqTimerId = null;
  var tqState = null;

  function pinyinQuizPool() {
    var out = [];
    ["zh-initials", "zh-finals", "zh-whole"].forEach(function (id) {
      var deck = DECKS.filter(function (d) { return d.id === id; })[0];
      if (!deck) return;
      var kind = id === "zh-initials" ? "initials" : (id === "zh-finals" ? "finals" : "whole");
      deck.items.forEach(function (it, i) {
        out.push({
          label: it.text,
          key: "dr:" + kind + ":" + i + ":1",
          type: id,
          py: it.py || it.text
        });
      });
    });
    return out;
  }

  function startPinyinQuiz() {
    var items = shuffle(pinyinQuizPool()).slice(0, 10);
    pqState = { items: items, idx: 0, correct: 0, locked: true, timeLeft: 8 };
    showScreen("s-pinyin-quiz");
    $("#pqCard").hidden = false;
    $("#pqResult").hidden = true;
    renderPinyinQuiz();
  }

  function renderPinyinQuiz() {
    clearInterval(pqTimerId);
    pqTimerId = null;
    var st = pqState;
    if (!st) return;
    var item = st.items[st.idx];
    st.locked = false;
    $("#pqCounter").textContent = (st.idx + 1) + " / " + st.items.length;
    $("#pqTimer").textContent = "不限时";
    $("#pqTimer").classList.remove("low");
    $("#pqFeedback").hidden = true;
    $("#pqNext").hidden = true;
    var same = shuffle(pinyinQuizPool().filter(function (x) {
      return x.type === item.type && x.label !== item.label;
    })).slice(0, 3);
    var opts = shuffle([item].concat(same));
    $("#pqOptions").innerHTML = opts.map(function (o) {
      return '<button class="quiz-opt" type="button" data-pq-opt="' + escapeHTML(o.label) + '">' +
        escapeHTML(o.label) + "</button>";
    }).join("");
    setTimeout(function () {
      if (pqState === st && !st.locked) say(item.key, item.py || item.label, "zh-CN");
    }, 350);
  }

  function answerPinyinQuiz(btn) {
    if (!pqState || pqState.locked) return;
    pqState.locked = true;
    clearInterval(pqTimerId);
    var item = pqState.items[pqState.idx];
    var picked = btn ? btn.dataset.pqOpt : "";
    var ok = picked === item.label;
    if (ok) pqState.correct++;
    $$("#pqOptions .quiz-opt").forEach(function (b) {
      b.disabled = true;
      if (b.dataset.pqOpt === item.label) b.classList.add("right");
      else if (b === btn) b.classList.add("wrong");
    });
    var fb = $("#pqFeedback");
    fb.hidden = false;
    fb.className = "quiz-feedback " + (ok ? "right" : "wrong");
    fb.textContent = ok ? "答对啦！" : "再听一听，正确答案是「" + item.label + "」。";
    playFeedbackSequence([feedbackKey(ok, "zh"), item.key]);
    $("#pqNext").hidden = false;
    $("#pqNext").textContent = pqState.idx + 1 >= pqState.items.length ? "看成绩" : "下一个";
  }

  function nextPinyinQuiz() {
    if (!pqState) return;
    if (pqState.idx + 1 >= pqState.items.length) {
      finishPinyinQuiz();
      return;
    }
    pqState.idx++;
    renderPinyinQuiz();
  }

  function finishPinyinQuiz() {
    clearInterval(pqTimerId);
    var n = pqState.correct;
    var stars = n >= 9 ? 3 : (n >= 7 ? 2 : (n >= 5 ? 1 : 0));
    $("#pqCard").hidden = true;
    var box = $("#pqResult");
    box.hidden = false;
    box.innerHTML =
      '<div class="result-stars">' + starTag(stars) + "</div>" +
      "<h3>答对 " + n + " / " + pqState.items.length + "</h3>" +
      "<p>" + (n >= 9 ? "听得准，选得快！" : n >= 7 ? "很不错，再练一次就更稳。" : "再听几遍，声母和韵母会越来越熟。") + "</p>" +
      '<div class="quiz-result-actions">' +
        '<button class="btn btn-primary" type="button" data-quiz-again="pq">再来一次</button>' +
        '<button class="btn btn-ghost" type="button" data-quiz-home="1">回小书房</button>' +
      "</div>";
    if (n >= 7) say("praise:真棒！", "真棒！", "zh-CN");
  }

  function toneOf(py) {
    var s = String(py || "");
    if (/[āēīōūǖ]/.test(s)) return 1;
    if (/[áéíóúǘ]/.test(s)) return 2;
    if (/[ǎěǐǒǔǚ]/.test(s)) return 3;
    if (/[àèìòùǜ]/.test(s)) return 4;
    return 0;
  }

  var TONE_TIPS = {
    1: "第一声，高平，读得又平又长",
    2: "第二声，往上扬，像问「啊？」",
    3: "第三声，先降后升，读满",
    4: "第四声，干脆往下落"
  };

  function toneQuizPool() {
    var pairs = (window.EXTRA_PRACTICE && window.EXTRA_PRACTICE.pinyin) || [];
    return pairs.map(function (p) {
      return { py: p[0], ch: p[1], tone: toneOf(p[0]), key: "py:" + p[0] };
    }).filter(function (x) { return x.tone > 0; });
  }

  function startToneQuiz() {
    var items = shuffle(toneQuizPool()).slice(0, 20);
    tqState = { items: items, idx: 0, correct: 0, locked: true };
    showScreen("s-tone-quiz");
    $("#tqCard").hidden = false;
    $("#tqResult").hidden = true;
    renderToneQuiz();
  }

  function renderToneQuiz() {
    var st = tqState;
    if (!st) return;
    var item = st.items[st.idx];
    st.locked = false;
    $("#tqCounter").textContent = (st.idx + 1) + " / " + st.items.length;
    $("#tqPinyin").textContent = "?";
    $("#tqFeedback").hidden = true;
    $("#tqPlay").hidden = false;
    $("#tqNext").hidden = true;
    $("#tqOptions").innerHTML = [1, 2, 3, 4].map(function (t) {
      var mark = { 1: "ˉ", 2: "ˊ", 3: "ˇ", 4: "ˋ" }[t];
      return '<button class="quiz-opt" type="button" data-tq-tone="' + t + '">' +
        '<span class="tone-symbol">' + mark + "</span><span>第 " + t + " 声</span></button>";
    }).join("");
    setTimeout(function () {
      if (tqState === st && !st.locked) say(item.key, item.ch, "zh-CN");
    }, 350);
  }

  function answerToneQuiz(btn) {
    if (!tqState || tqState.locked) return;
    tqState.locked = true;
    var item = tqState.items[tqState.idx];
    var picked = parseInt(btn.dataset.tqTone, 10);
    var ok = picked === item.tone;
    if (ok) tqState.correct++;
    $$("#tqOptions .quiz-opt").forEach(function (b) {
      b.disabled = true;
      if (parseInt(b.dataset.tqTone, 10) === item.tone) b.classList.add("right");
      else if (b === btn) b.classList.add("wrong");
    });
    var fb = $("#tqFeedback");
    fb.hidden = false;
    fb.className = "quiz-feedback " + (ok ? "right" : "wrong");
    fb.textContent = (ok ? "答对啦！" : "再看看声调：") + "「" + item.py + "」是" + TONE_TIPS[item.tone] + "。";
    $("#tqPinyin").textContent = item.py;
    $("#tqPlay").hidden = false;
    $("#tqNext").hidden = false;
    $("#tqNext").textContent = tqState.idx + 1 >= tqState.items.length ? "看成绩" : "下一个";
    playFeedbackSequence([feedbackKey(ok, "zh"), item.key, "fb:tone-" + item.tone]);
  }

  function playToneQuizItem() {
    if (!tqState) return;
    var item = tqState.items[tqState.idx];
    say(item.key, item.ch, "zh-CN");
  }

  function nextToneQuiz() {
    if (!tqState) return;
    if (tqState.idx + 1 >= tqState.items.length) {
      finishToneQuiz();
      return;
    }
    tqState.idx++;
    renderToneQuiz();
  }

  function finishToneQuiz() {
    var n = tqState.correct;
    var stars = n >= 17 ? 3 : (n >= 13 ? 2 : (n >= 9 ? 1 : 0));
    $("#tqCard").hidden = true;
    var box = $("#tqResult");
    box.hidden = false;
    box.innerHTML =
      '<div class="result-stars">' + starTag(stars) + "</div>" +
      "<h3>答对 " + n + " / " + tqState.items.length + "</h3>" +
      "<p>" + (n >= 17 ? "四声都听得很准！" : n >= 13 ? "已经很不错，再练一次更稳。" : "二声和三声最容易混，再听几遍。") + "</p>" +
      '<div class="quiz-result-actions">' +
        '<button class="btn btn-primary" type="button" data-quiz-again="tq">再来一次</button>' +
        '<button class="btn btn-ghost" type="button" data-quiz-home="1">回小书房</button>' +
      "</div>";
    if (n >= 7) say("praise:真棒！", "真棒！", "zh-CN");
  }

  /* ------------------------------------------------------------ blend quiz */

  var bqState = null;
  var bqReadRec = null;
  var bqReadActive = false;
  var bqReadSettled = true;
  var bqReadTimer = null;
  var bqRecording = false;
  var bqRecUrl = null;

  function startBlendQuiz() {
    if (!BLENDS.length) return;
    var items = shuffle(BLENDS).slice(0, 10);
    bqState = { items: items, idx: 0, correct: 0, locked: false };
    showScreen("s-blend-quiz");
    $("#bqCard").hidden = false;
    $("#bqResult").hidden = true;
    renderBlendQuiz();
  }

  function renderBlendQuiz() {
    var st = bqState;
    if (!st) return;
    var item = st.items[st.idx];
    st.locked = false;
    $("#bqCounter").textContent = (st.idx + 1) + " / " + st.items.length;
    $("#bqFeedback").hidden = true;
    $("#bqNext").hidden = true;
    resetBlendRead();
    $("#bqReadBox").hidden = true;
    $("#bqReadResult").hidden = true;
    $("#bqPlayMine").hidden = true;
    var others = shuffle(BLENDS.filter(function (x) { return x.id !== item.id; })).slice(0, 3);
    var opts = shuffle([item].concat(others));
    $("#bqOptions").innerHTML = opts.map(function (o) {
      return '<button class="quiz-opt" type="button" data-bq-opt="' + escapeHTML(o.py) + '">' +
        escapeHTML(o.py) + "</button>";
    }).join("");
    setTimeout(function () {
      if (bqState === st && !st.locked) say(item.key, item.py, "zh-CN");
    }, 350);
  }

  function answerBlendQuiz(btn) {
    if (!bqState || bqState.locked) return;
    bqState.locked = true;
    var item = bqState.items[bqState.idx];
    var picked = btn ? btn.dataset.bqOpt : "";
    var ok = picked === item.py;
    if (ok) bqState.correct++;
    $$("#bqOptions .quiz-opt").forEach(function (b) {
      b.disabled = true;
      if (b.dataset.bqOpt === item.py) b.classList.add("right");
      else if (b === btn) b.classList.add("wrong");
    });
    var fb = $("#bqFeedback");
    fb.hidden = false;
    fb.className = "quiz-feedback " + (ok ? "right" : "wrong");
    fb.textContent = ok
      ? "答对啦！" + item.parts.join(" — ")
      : (picked ? "再听一听，完整音节是「" + item.py + "」。" : "正确答案是「" + item.py + "」。");
    $("#bqReadTarget").textContent = item.parts.join(" — ");
    $("#bqReadBox").hidden = false;
    $("#bqReadResult").hidden = true;
    $("#bqPlayMine").hidden = true;
    $("#bqReadStatus").textContent = "";
    playFeedbackSequence([feedbackKey(ok, "zh"), item.key]);
    $("#bqNext").hidden = false;
    $("#bqNext").textContent = bqState.idx + 1 >= bqState.items.length ? "看成绩" : "下一个";
  }

  function nextBlendQuiz() {
    if (!bqState) return;
    if (bqState.idx + 1 >= bqState.items.length) {
      finishBlendQuiz();
      return;
    }
    bqState.idx++;
    renderBlendQuiz();
  }

  function finishBlendQuiz() {
    var n = bqState.correct;
    var stars = n >= 9 ? 3 : (n >= 7 ? 2 : (n >= 5 ? 1 : 0));
    $("#bqCard").hidden = true;
    var box = $("#bqResult");
    box.hidden = false;
    box.innerHTML =
      '<div class="result-stars">' + starTag(stars) + "</div>" +
      "<h3>答对 " + n + " / " + bqState.items.length + "</h3>" +
      "<p>" + (n >= 9 ? "拼读听得又快又准！" : n >= 7 ? "很不错，再练一次更稳。" : "先听声母、再听韵母，最后合起来。") + "</p>" +
      '<div class="quiz-result-actions">' +
        '<button class="btn btn-primary" type="button" data-quiz-again="bq">再来一次</button>' +
        '<button class="btn btn-ghost" type="button" data-quiz-home="1">回小书房</button>' +
      "</div>";
    if (n >= 7) say("praise:真棒！", "真棒！", "zh-CN");
  }

  function resetBlendRead() {
    if (bqReadTimer) {
      clearTimeout(bqReadTimer);
      bqReadTimer = null;
    }
    if (bqReadRec) {
      try { bqReadRec.abort(); } catch (err) {}
      bqReadRec = null;
    }
    if (bqRecording) {
      bqRecording = false;
      try { stopCapture(); } catch (err) {}
    }
    bqRecUrl = null;
    bqReadActive = false;
    bqReadSettled = true;
    var status = $("#bqReadStatus");
    if (status) status.textContent = "";
    var btn = $("#bqReadBtn");
    if (btn) btn.innerHTML = '<i class="icon icon-mic"></i>跟读并评分';
  }

  function startBlendRead() {
    if (!bqState) return;
    if (bqReadActive) {
      stopBlendRead(true);
      return;
    }
    if (!SR) {
      $("#bqReadStatus").textContent = "这个浏览器不能评分，请用 Edge 或 Safari";
      return;
    }
    if (location.protocol === "file:") {
      $("#bqReadStatus").textContent = "请用 localhost 或 HTTPS 网址打开";
      return;
    }
    resetBlendRead();
    var item = bqState.items[bqState.idx];
    var rec = new SR();
    bqReadRec = rec;
    bqReadActive = true;
    bqReadSettled = false;
    $("#bqReadResult").hidden = true;
    $("#bqReadStatus").textContent = "正在听…读完点一下结束";
    $("#bqReadBtn").innerHTML = '<i class="icon icon-mic"></i>结束并评分';
    rec.lang = "zh-CN";
    rec.interimResults = true;
    rec.continuous = false;
    rec.maxAlternatives = 5;
    rec.onresult = function (ev) {
      var best = [];
      var interim = "";
      for (var i = ev.resultIndex; i < ev.results.length; i++) {
        var r = ev.results[i];
        if (r.isFinal) {
          for (var j = 0; j < r.length; j++) best.push(r[j].transcript);
        } else {
          interim += r[0].transcript;
        }
      }
      if (interim) $("#bqReadStatus").textContent = "听到：" + interim;
      if (best.length) finishBlendRead(best, false);
    };
    rec.onerror = function () {
      finishBlendRead([], true);
    };
    rec.onend = function () {
      if (bqReadActive && !bqReadSettled) finishBlendRead([], false);
    };
    startCapture().then(function (ok) {
      if (!ok) return;
      if (bqReadSettled) {
        stopCapture();
      } else {
        bqRecording = true;
      }
    });
    try {
      rec.start();
      bqReadTimer = setTimeout(function () { stopBlendRead(false); }, 6500);
    } catch (err) {
      finishBlendRead([], true);
    }
  }

  function stopBlendRead(manual) {
    if (!bqReadActive || bqReadSettled) return;
    bqReadActive = false;
    if (bqReadTimer) {
      clearTimeout(bqReadTimer);
      bqReadTimer = null;
    }
    $("#bqReadStatus").textContent = manual ? "正在结算…" : "时间到，正在结算…";
    try { if (bqReadRec) bqReadRec.stop(); } catch (err) {}
    setTimeout(function () {
      if (!bqReadSettled) finishBlendRead([], false);
    }, 800);
  }

  function finishBlendRead(alts, failed) {
    if (!bqState || bqReadSettled) return;
    bqReadSettled = true;
    bqReadActive = false;
    if (bqReadTimer) {
      clearTimeout(bqReadTimer);
      bqReadTimer = null;
    }
    $("#bqReadBtn").innerHTML = '<i class="icon icon-mic"></i>再跟读一次';
    $("#bqReadStatus").textContent = "";
    var item = bqState.items[bqState.idx];
    var targets = [item.py, item.parts.join(""), item.parts.join(" ")];
    var heard = "";
    var best = { ratio: -1, stars: 0, text: "" };
    (alts || []).forEach(function (alt) {
      targets.forEach(function (target) {
        var s = scoreSay(target, alt, "zh-CN");
        if (s.ratio > best.ratio) best = { ratio: s.ratio, stars: s.stars, text: alt };
      });
      if (alt && !heard) heard = alt;
    });
    var box = $("#bqReadResult");
    box.hidden = false;
    var finalizeRecording = function () {
      if (!bqRecording) return;
      bqRecording = false;
      stopCapture().then(function (url) {
        if (!url) return;
        bqRecUrl = url;
        $("#bqPlayMine").hidden = false;
      });
    };
    finalizeRecording();
    if (failed || !alts || !alts.length) {
      box.innerHTML = "没有听到清楚的声音，再点话筒试一次。";
      sfx("wrong");
      return;
    }
    var title = best.stars === 3 ? "读得真准！" : best.stars === 2 ? "很接近了，再清楚一点" : best.stars === 1 ? "再听一遍，跟着读" : "再试一次，慢一点读";
    box.innerHTML = '<b>' + title + "</b><br>我听到的是：「" + escapeHTML(heard) + "」" +
      (best.stars ? " " + starTag(best.stars) : "");
    if (best.stars >= 2) {
      sfx("correct");
      say("praise:真棒！", "真棒！", "zh-CN");
    } else {
      sfx("wrong");
    }
  }

  /* ------------------------------------------------------------ english tools */

  function openAlphabet() {
    rememberSubjectScroll();
    showScreen("s-alphabet");
    renderAlphabet();
  }

  function renderAlphabet() {
    var grid = $("#alphabetGrid");
    if (!grid) return;
    grid.innerHTML = "";
    EN_ALPHABET.forEach(function (item) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "alpha-card";
      b.dataset.alphaKey = item.key;
      b.innerHTML = "<b>" + escapeHTML(item.letter) + "</b><span>" + escapeHTML(item.lower) + "</span>";
      b.addEventListener("click", function () {
        sfx("tap");
        say(item.key, item.lower, "en-GB");
      });
      grid.appendChild(b);
    });
  }

  var eqState = null;
  var eqReturn = "en";

  function enQuizPool(mode) {
    return EN_ALPHABET;
  }

  function enQuizLabel(item) {
    return item.letter || item.ipa;
  }

  function enQuizSpeak(item) {
    say(item.key, item.letter ? item.lower : item.word, "en-GB");
  }

  function startEnglishQuiz(mode, returnTo) {
    var pool = enQuizPool(mode);
    if (!pool.length) return;
    if (returnTo) eqReturn = returnTo;
    var items = shuffle(pool).slice(0, 10);
    eqState = { mode: mode, items: items, idx: 0, correct: 0, locked: false };
    showScreen("s-en-quiz");
    $("#eqTitle").textContent = mode === "alphabet" ? "听音选字母" : "听例词选音标";
    $("#eqSub").textContent = mode === "alphabet" ? "听字母名，选出正确字母" : "听例词，选出正确音标";
    $("#eqCard").hidden = false;
    $("#eqResult").hidden = true;
    renderEnglishQuiz();
  }

  function renderEnglishQuiz() {
    var st = eqState;
    if (!st) return;
    var item = st.items[st.idx];
    st.locked = false;
    $("#eqCounter").textContent = (st.idx + 1) + " / " + st.items.length;
    $("#eqPrompt").textContent = st.mode === "alphabet" ? "听一听，它是哪个字母？" : "听一听，它是哪个音标？";
    $("#eqFeedback").hidden = true;
    $("#eqNext").hidden = true;
    var pool = enQuizPool(st.mode);
    var target = enQuizLabel(item);
    var others = shuffle(pool.filter(function (x) { return enQuizLabel(x) !== target; })).slice(0, 3);
    var opts = shuffle([item].concat(others));
    $("#eqOptions").innerHTML = opts.map(function (x) {
      return '<button class="quiz-opt" type="button" data-eq-opt="' + escapeHTML(enQuizLabel(x)) + '">' +
        escapeHTML(enQuizLabel(x)) + "</button>";
    }).join("");
    setTimeout(function () {
      if (eqState === st && !st.locked) enQuizSpeak(item);
    }, 350);
  }

  function answerEnglishQuiz(btn) {
    if (!eqState || eqState.locked) return;
    eqState.locked = true;
    var item = eqState.items[eqState.idx];
    var picked = btn ? btn.dataset.eqOpt : "";
    var ok = picked === enQuizLabel(item);
    if (ok) eqState.correct++;
    $$("#eqOptions .quiz-opt").forEach(function (b) {
      b.disabled = true;
      if (b.dataset.eqOpt === enQuizLabel(item)) b.classList.add("right");
      else if (b === btn) b.classList.add("wrong");
    });
    var fb = $("#eqFeedback");
    fb.hidden = false;
    fb.className = "quiz-feedback " + (ok ? "right" : "wrong");
    fb.textContent = ok
      ? "答对啦！" + (item.letter ? item.letter + " " + item.lower : item.ipa + " · " + item.word + " " + item.zh)
      : "再听一听，正确答案是「" + enQuizLabel(item) + "」" + (item.letter ? "" : " · " + item.word);
    playFeedbackSequence([feedbackKey(ok, "en"), item.key]);
    $("#eqNext").hidden = false;
    $("#eqNext").textContent = eqState.idx + 1 >= eqState.items.length ? "看成绩" : "下一个";
  }

  function nextEnglishQuiz() {
    if (!eqState) return;
    if (eqState.idx + 1 >= eqState.items.length) {
      finishEnglishQuiz();
      return;
    }
    eqState.idx++;
    renderEnglishQuiz();
  }

  function finishEnglishQuiz() {
    var n = eqState.correct;
    var stars = n >= 9 ? 3 : (n >= 7 ? 2 : (n >= 5 ? 1 : 0));
    $("#eqCard").hidden = true;
    var box = $("#eqResult");
    box.hidden = false;
    box.innerHTML =
      '<div class="result-stars">' + starTag(stars) + "</div>" +
      "<h3>答对 " + n + " / " + eqState.items.length + "</h3>" +
      "<p>" + (n >= 9 ? "听得准，记得牢！" : n >= 7 ? "很不错，再练一次更稳。" : "先听例词，再记音标。") + "</p>" +
      '<div class="quiz-result-actions">' +
        '<button class="btn btn-primary" type="button" data-quiz-again="eq">再来一次</button>' +
        '<button class="btn btn-ghost" type="button" data-quiz-home="1">回小书房</button>' +
      "</div>";
  }

  /* ------------------------------------------------------------ pinyin drill */

  var drillTone = 1;
  var drillTab = "read";
  var drillLastKey = null;
  var drillLastText = "";
  var TONE_GROUPS = {
    "ā": "āáǎà", "ō": "ōóǒò", "ē": "ēéěè",
    "ī": "īíǐì", "ū": "ūúǔù", "ǖ": "ǖǘǚǜ"
  };
  var TONE_ALL = "āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜ";

  function applyTone(py, tone) {
    return String(py || "").replace(new RegExp("[" + TONE_ALL + "]", "g"), function (ch) {
      for (var k in TONE_GROUPS) {
        if (TONE_GROUPS[k].indexOf(ch) >= 0) return TONE_GROUPS[k].charAt(tone - 1);
      }
      return ch;
    });
  }

  function drillDeck(id) {
    return DECKS.filter(function (d) { return d.id === id; })[0];
  }

  function pinyinDrillCard() {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "unit-card tile-card deck-card pinyin-drill-card";
    b.innerHTML =
      '<span class="tile-top"><span class="tile-tag">拼音</span>' +
        '<span class="tile-count">63</span></span>' +
      "<h4>拼音综合认读</h4>" +
      '<p class="tile-sub">点读 + 拼读工坊</p>' +
      '<span class="tile-art">' + themeArt("pinyin-hub", "is-tile") + "</span>";
    b.addEventListener("click", function () {
      sfx("tap");
      openPinyinDrill();
    });
    return b;
  }

  var spellState = { initial: "b", final: "a", tone: 1 };
  var spellInitialItems = [];
  var spellFinalItems = [];
  var spellLoading = false;
  var spellCallbacks = [];

  function ensureSpellData(cb) {
    if (window.SPELL_DATA) {
      if (cb) cb();
      return;
    }
    if (cb) spellCallbacks.push(cb);
    if (spellLoading) return;
    spellLoading = true;
    var s = document.createElement("script");
    s.src = "assets/spell-data.js?v=20261119-40";
    s.onload = function () {
      spellLoading = false;
      var list = spellCallbacks.splice(0);
      list.forEach(function (fn) { fn(); });
    };
    s.onerror = function () {
      spellLoading = false;
      var list = spellCallbacks.splice(0);
      list.forEach(function (fn) { fn(); });
    };
    document.head.appendChild(s);
  }

  function spellDisplayFinal(initial, finalText) {
    if (["j", "q", "x", "y"].indexOf(initial) >= 0) {
      return finalText.replace(/ü/g, "u");
    }
    return finalText;
  }

  function spellInitialIndex(text) {
    for (var i = 0; i < spellInitialItems.length; i++) {
      if (spellInitialItems[i].text === text) return i;
    }
    return 0;
  }

  function spellFinalIndex(text) {
    for (var i = 0; i < spellFinalItems.length; i++) {
      if (spellFinalItems[i].text === text) return i;
    }
    return 0;
  }

  function spellKey() {
    return spellState.initial + ":" + spellState.final + ":" + spellState.tone;
  }

  function initSpellSelectors() {
    var initials = drillDeck("zh-initials");
    var finals = drillDeck("zh-finals");
    spellInitialItems = (initials && initials.items) || [];
    spellFinalItems = (finals && finals.items) || [];
    var si = $("#spellInitial");
    var sf = $("#spellFinal");
    if (!si || !sf) return;
    si.innerHTML = spellInitialItems.map(function (it) {
      return '<option value="' + escapeHTML(it.text) + '">' + escapeHTML(it.text) + "</option>";
    }).join("");
    sf.innerHTML = spellFinalItems.map(function (it) {
      return '<option value="' + escapeHTML(it.text) + '">' + escapeHTML(it.text) + "</option>";
    }).join("");
    si.value = spellState.initial;
    sf.value = spellState.final;
  }

  function spellToneFinal(entry) {
    var py = entry && entry.py ? entry.py : "";
    if (py && py.indexOf(spellState.initial) === 0) return py.slice(spellState.initial.length);
    return spellState.final;
  }

  function updateSpell() {
    var entry = spellData()[spellKey()];
    var si = $("#spellInitial");
    var sf = $("#spellFinal");
    if (si) si.value = spellState.initial;
    if (sf) sf.value = spellState.final;
    $$("#spellTonebar button").forEach(function (b) {
      b.classList.toggle("on", parseInt(b.dataset.spellTone, 10) === spellState.tone);
    });
    $("#spellInitialView").textContent = spellState.initial;
    var finalText = spellToneFinal(entry);
    $("#spellFinalView").textContent = spellDisplayFinal(spellState.initial, finalText);
    $("#spellResult").textContent = entry
      ? entry.py
      : spellState.initial + spellDisplayFinal(spellState.initial, spellState.final);
    $("#spellHint").textContent = entry
      ? "先听声母、韵母，再听完整音节。"
      : "这个组合不是普通话常用音节，换一个试试。";
    $("#spellPlay").disabled = !entry;
  }

  function openSpell() {
    rememberSubjectScroll();
    drillTone = drillTone || 1;
    showScreen("s-pinyin-drill");
    setDrillTab("spell");
    renderPinyinDrill();
  }

  function setDrillTab(tab) {
    drillTab = tab === "spell" ? "spell" : "read";
    $$("#drillTabs button").forEach(function (b) {
      b.classList.toggle("on", b.dataset.drillTab === drillTab);
    });
    var isSpell = drillTab === "spell";
    $("#drillTonebar").hidden = isSpell;
    $("#drillGroups").hidden = isSpell;
    var legend = $("#s-pinyin-drill .drill-legend");
    if (legend) legend.hidden = isSpell;
    $("#spellWrap").hidden = !isSpell;
    if (isSpell) {
      initSpellSelectors();
      updateSpell();
      ensureSpellData(updateSpell);
    }
  }

  function playSpell() {
    var entry = spellData()[spellKey()];
    if (!entry) return;
    ensureAudioPack(function () {
      var ii = spellInitialIndex(spellState.initial);
      var fi = spellFinalIndex(spellState.final);
      var keys = ["dr:initials:" + ii + ":1", "dr:finals:" + fi + ":" + spellState.tone];
      playSequence(keys, function () {
        var a = new Audio(entry.audio + "?v=20261119-40");
        a.volume = state.volume;
        a.playbackRate = 1;
        try { a.preservesPitch = true; a.webkitPreservesPitch = true; } catch (err) {}
        var p = a.play();
        if (p && p.catch) p.catch(function () {});
      });
    });
  }

  function randomSpell() {
    var keys = Object.keys(spellData());
    if (!keys.length) return;
    var key = keys[Math.floor(Math.random() * keys.length)];
    var parts = key.split(":");
    spellState.initial = parts[0];
    spellState.final = parts[1];
    spellState.tone = parseInt(parts[2], 10);
    updateSpell();
  }

  function openPinyinDrill() {
    rememberSubjectScroll();
    drillTone = 1;
    showScreen("s-pinyin-drill");
    setDrillTab("read");
    renderPinyinDrill();
  }

  function renderPinyinDrill() {
    $$("#drillTonebar button").forEach(function (b) {
      b.classList.toggle("on", parseInt(b.dataset.drillTone, 10) === drillTone);
    });
    var groups = [
      { id: "zh-initials", type: "initials", title: "声母", desc: "23 个声母，统一用第一声呼读音 bō、pō、mō、fō…" },
      { id: "zh-finals", type: "finals", title: "韵母", desc: "单韵母、复韵母、前鼻韵母、后鼻韵母；按上面选中的声调读。" },
      { id: "zh-whole", type: "whole", title: "整体认读音节", desc: "16 个整体认读音节，不用拼，直接读。" }
    ];
    var html = groups.map(function (g) {
      var deck = drillDeck(g.id);
      if (!deck) return "";
      var chips = deck.items.map(function (it, i) {
        var initial = g.type === "initials";
        var big = initial ? it.text : applyTone(it.py || it.text, drillTone);
        var sayList = (DRILL_SAY[g.type] || {})[it.text];
        var example = sayList && sayList[drillTone - 1] ? sayList[drillTone - 1] : it.zh;
        var small = initial ? (it.py + (it.zh ? " · " + it.zh : " · 第一声")) : (it.text + " · " + example);
        var key = "dr:" + g.type + ":" + i + ":" + (initial ? 1 : drillTone);
        return '<button class="drill-chip" type="button" data-drill-key="' + key +
          '" data-drill-text="' + escapeHTML(big) + '">' +
          "<b>" + escapeHTML(big) + "</b><span>" + escapeHTML(small) + "</span></button>";
      }).join("");
      return '<section class="drill-group"><h3>' + g.title + "</h3><p>" + g.desc + "</p>" +
        '<div class="drill-chips">' + chips + "</div></section>";
    }).join("");
    $("#drillGroups").innerHTML = html;
  }

  /* ------------------------------------------------------------ reading */

  var DECKS = window.SPEAK_DECKS || [];
  var SUBJECTS = window.SPEAK_SUBJECTS || [
    { id: "zh", name: "语文", mark: "语", en: "CHINESE", sub: "识字 · 拼音 · 课本单元", color: "mint" },
    { id: "en", name: "英语", mark: "EN", en: "ENGLISH", sub: "英语口语", color: "lilac" }
  ];
  var TB = window.TEXTBOOK_UNITS || [];
  var TB_IMG = window.TEXTBOOK_IMAGES || {};
  var TB_TEXT = window.TEXTBOOK_TEXT || {};
  var DRILL_SAY = window.DRILL_SAY || {};
  function spellData() {
    return window.SPELL_DATA || {};
  }
  var SPECIAL_TB_WORDS = {
    "piggy bank": { w: "Piggy Bank", zh: "单词银行", ipa: "/ˈpɪɡi bæŋk/" }
  };

  function isEnglishSentence(text) {
    var t = String(text || "").trim();
    return /[.!?]$/.test(t) || t.split(/\s+/).length >= 4;
  }

  function tbLineKey(page, i) {
    return "tb:" + page.id + ":" + i;
  }

  function tbLineZhKey(page, i) {
    return "tbzh:" + page.id + ":" + i;
  }

  function tbWordKey(word) {
    return "tbw:" + String(word || "").toLowerCase();
  }

  function spokenWordKey(word) {
    var low = String(word || "").toLowerCase();
    return low === "a" ? "w:a-article" : "w:" + low;
  }

  function spokenTextKey(word) {
    return String(word || "").toLowerCase() === "piggy bank" ? "w:piggy-bank" : tbWordKey(word);
  }

  function tbWordZhKey(word) {
    return "tbwzh:" + String(word || "").toLowerCase();
  }

  function buildEnglishExtras() {
    var english = DECKS.filter(function (d) { return d.id === "english"; })[0];
    if (!english || english._extrasBuilt) return;
    var words = [], sentences = [];
    var seenWord = {}, seenSentence = {}, unitWord = {};
    english.units.forEach(function (u) {
      u.items.forEach(function (it, i) {
        var copy = Object.assign({ srcId: u.id + ":" + i, unitLabel: u.unit }, it);
        var key = String(it.text || "").toLowerCase().trim();
        if (isEnglishSentence(it.text)) {
          if (!seenSentence[key]) { seenSentence[key] = 1; sentences.push(copy); }
        } else {
          unitWord[key] = 1;
          if (!seenWord[key]) { seenWord[key] = 1; words.push(copy); }
        }
      });
    });
    TB.forEach(function (u) {
      u.pages.forEach(function (p) {
        p.lines.forEach(function (line, i) {
          var key = String(line.en || "").toLowerCase().trim();
          if (!seenSentence[key]) {
            seenSentence[key] = 1;
            sentences.push({
              text: line.en, zh: line.zh, srcId: tbLineKey(p, i),
              unitLabel: u.unit + " · " + p.section
            });
          }
        });
        p.words.forEach(function (w) {
          var key = String(w.w || "").toLowerCase().trim();
          if (!seenWord[key]) {
            seenWord[key] = 1;
            words.push({
              text: w.w, zh: w.zh, ipa: w.ipa, srcId: tbWordKey(w.w),
              unitLabel: u.unit + " · " + p.section
            });
          }
        });
      });
    });
    var newWords = [];
    var seenNew = {};
    TB.forEach(function (u) {
      u.pages.forEach(function (p) {
        p.words.forEach(function (w) {
          var key = String(w.w || "").toLowerCase().trim();
          if (unitWord[key] || seenNew[key]) return;
          seenNew[key] = 1;
          newWords.push({
            text: w.w, zh: w.zh, ipa: w.ipa, srcId: tbWordKey(w.w),
            unitLabel: u.unit
          });
        });
      });
    });
    DECKS.push({
      id: "en-words", subject: "en", extra: true, tag: "WORDS",
      title: "英语单词", sub: "6 个单元 + 课文里的单词", lang: "en-GB", color: "lilac",
      items: words
    });
    DECKS.push({
      id: "en-sentences", subject: "en", extra: true, tag: "SENT",
      title: "英语句子", sub: "从课文里挑句子跟读", lang: "en-GB", color: "lilac",
      items: sentences
    });
    if (newWords.length) {
      DECKS.push({
        id: "en-wordbook", subject: "en", extra: true, tag: "NEW",
        title: "陌生单词本", sub: "课文里还没练过的词", lang: "en-GB", color: "butter",
        items: newWords
      });
    }
    english._extrasBuilt = true;
  }

  buildEnglishExtras();
  DECKS.forEach(function (d) {
    if (d.id === "pinyin" || d.id === "words" || d.id === "sentences") d.pickable = true;
  });
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  var speakState = null;
  var speakReturn = { screen: "home" };
  var recog = null;
  var lastHeard = "";
  var capture = null;
  var captureSeq = 0;
  var lastRecUrl = null;
  var listenActive = false;
  var listenSettled = false;
  var listenTimer = null;
  var listenTick = null;
  var listenDeadline = 0;
  var listenSeq = 0;
  var lastInterim = "";

  function canRecord() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  }

  function startCapture() {
    if (!canRecord()) return Promise.resolve(false);
    var seq = ++captureSeq;
    return navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      if (seq !== captureSeq) {
        try { stream.getTracks().forEach(function (t) { t.stop(); }); } catch (e) {}
        return false;
      }
      var types = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"];
      var mime = types.filter(function (t) {
        try { return MediaRecorder.isTypeSupported(t); } catch (e) { return false; }
      })[0];
      var rec = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
      var chunks = [];
      capture = { seq: seq, stream: stream, rec: rec, chunks: chunks };
      rec.ondataavailable = function (ev) {
        if (ev.data && ev.data.size) chunks.push(ev.data);
      };
      rec.start();
      return true;
    }).catch(function () { return false; });
  }

  function stopCapture() {
    var current = capture;
    if (!current) return Promise.resolve(null);
    capture = null;
    return new Promise(function (resolve) {
      function cleanup() {
        try { current.stream.getTracks().forEach(function (t) { t.stop(); }); } catch (e) {}
      }
      if (!current.rec || current.rec.state === "inactive") { cleanup(); resolve(null); return; }
      current.rec.onstop = function () {
        cleanup();
        var type = current.chunks[0] ? current.chunks[0].type : "audio/webm";
        var blob = new Blob(current.chunks, { type: type });
        if (blob.size < 800) { resolve(null); return; }
        if (current.seq !== captureSeq) { resolve(null); return; }
        if (lastRecUrl) { try { URL.revokeObjectURL(lastRecUrl); } catch (e) {} }
        lastRecUrl = URL.createObjectURL(blob);
        $("#myVoice").src = lastRecUrl;
        resolve(lastRecUrl);
      };
      try { current.rec.stop(); } catch (e) { cleanup(); resolve(null); }
    });
  }

  function clearRecording() {
    if (lastRecUrl) {
      try { URL.revokeObjectURL(lastRecUrl); } catch (e) {}
      lastRecUrl = null;
    }
    try {
      var el = $("#myVoice");
      el.pause();
      el.removeAttribute("src");
      el.load();
    } catch (e) {}
  }

  function pausePlayback() {
    try {
      var el = $("#myVoice");
      if (el) el.pause();
      var btn = $("#playMine");
      if (btn) btn.classList.remove("playing");
    } catch (e) {}
    try { if (audioEl) audioEl.pause(); } catch (e) {}
  }

  function applyVolume() {
    var v = typeof state.volume === "number" ? state.volume : 1;
    try { if (audioEl) audioEl.volume = v; } catch (e) {}
    try { $("#myVoice").volume = v; } catch (e) {}
  }

  function playMine() {
    var el = $("#myVoice");
    if (!el.src) return;
    try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch (e) {}
    if (audioEl) { try { audioEl.pause(); } catch (e) {} }
    el.volume = state.volume;
    el.currentTime = 0;
    var p = el.play();
    if (p && p.catch) p.catch(function () {});
    $("#playMine").classList.add("playing");
    el.onended = function () { $("#playMine").classList.remove("playing"); };
  }

  function deckEntries(deck) {
    if (deck.units) {
      var out = [];
      deck.units.forEach(function (u) {
        u.items.forEach(function (it, i) {
          out.push({ item: it, id: u.id + ":" + i, unit: u });
        });
      });
      return out;
    }
    return deck.items.map(function (it, i) {
      return { item: it, id: it.srcId || (deck.id + ":" + i), unit: null };
    });
  }

  function allReadingEntries() {
    var out = [];
    DECKS.forEach(function (d) {
      if (d.extra) return;
      deckEntries(d).forEach(function (e) { e.deck = d; out.push(e); });
    });
    return out;
  }

  function readDone(entry) {
    return state.read[entry.id] || 0;
  }

  function todayStr() {
    var d = new Date();
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  }

  function renderReading() {
    var grid = $("#readGrid");
    if (!grid) return;
    grid.innerHTML = "";
    SUBJECTS.filter(function (subject) { return subject.id === homeTab; }).forEach(function (subject) {
      var decks = subjectDecks(subject.id).filter(function (d) { return !d.extra; });
      var entries = [];
      decks.forEach(function (deck) {
        deckEntries(deck).forEach(function (e) { e.deck = deck; entries.push(e); });
      });
      var done = entries.filter(function (e) { return readDone(e) > 0; }).length;
      var units = 0;
      decks.forEach(function (deck) { if (deck.units) units += deck.units.length; });
      var pct = Math.round(done / Math.max(1, entries.length) * 100);
      var card = document.createElement("button");
      card.type = "button";
      card.className = "read-card subject-card";
      card.dataset.deck = subject.id;
      card.innerHTML =
        '<span class="r-tag">' + subject.en + "</span>" +
        '<div class="subj-top"><span class="subj-mark">' + subject.mark + "</span>" +
        '<div><h4>' + subject.name + "</h4><p class=\"r-sub\">" + subject.sub + "</p></div></div>" +
        '<div class="r-art">' + subjectArt(subject.id) + "</div>" +
        '<div class="r-foot"><div class="r-meta"><span>' +
        (units ? units + " 个单元 · " : "") + "已读 " + done + " / " + entries.length +
        '</span><span>' + pct + "%</span></div>" +
        '<span class="r-bar"><i style="width:' + pct + '%"></i></span></div>';
      card.addEventListener("click", function () {
        sfx("tap");
        openSubject(subject.id);
      });
      grid.appendChild(card);
    });
    renderReadStats();
  }

  function subjectDecks(id) {
    return DECKS.filter(function (d) { return (d.subject || "zh") === id; });
  }

  function subjectById(id) {
    return SUBJECTS.filter(function (s) { return s.id === id; })[0] || SUBJECTS[0];
  }

  var todayCursor = null;

  function practiceUnits() {
    var out = [];
    DECKS.forEach(function (d) {
      if (d.extra) return;
      if (d.units) {
        d.units.forEach(function (u) { out.push({ kind: "unit", unit: u, deck: d }); });
      } else {
        out.push({ kind: "deck", deck: d });
      }
    });
    return out;
  }

  function renderToday() {
    var box = $("#todayLine");
    if (!box) return;
    var list = practiceUnits();
    if (!list.length) { box.innerHTML = ""; return; }
    if (todayCursor === null) {
      var now = new Date();
      todayCursor = (now.getFullYear() * 372 + (now.getMonth() + 1) * 31 + now.getDate()) % list.length;
    }
    var index = ((todayCursor % list.length) + list.length) % list.length;
    var pick = list[index];
    var title, sub, count;
    if (pick.kind === "unit") {
      title = pick.unit.unit + " · " + pick.unit.title;
      sub = pick.unit.zh;
      count = pick.unit.items.length + (pick.unit.lang === "en-US" ? " 个单词和句子" : " 个字词");
    } else {
      title = pick.deck.title;
      sub = pick.deck.sub;
      count = pick.deck.items.length + " 个";
    }
    box.innerHTML =
      '<span class="t-tag">今天读这个</span>' +
      '<div class="t-info"><b></b><span></span></div>' +
      '<div class="t-actions"><button class="t-shuffle" type="button">换一个</button>' +
      '<button class="btn btn-primary" type="button" id="todayStart">开始</button></div>';
    $(".t-info b", box).textContent = title;
    $(".t-info span", box).textContent = sub + " · " + count;
    $("#todayStart", box).addEventListener("click", function () {
      sfx("tap");
      if (pick.kind === "unit") {
        startUnit(pick.unit);
      } else {
        startDeck(pick.deck, 0);
      }
    });
    $(".t-shuffle", box).addEventListener("click", function () {
      todayCursor++;
      sfx("tap");
      renderToday();
    });
  }

  function subjectArt(id) {
    if (id === "zh") return '<span class="r-big" style="font-size:46px">天地人</span><span class="r-pill">8 个单元</span>';
    return '<span class="r-en">Hello!<br>I like green.</span>';
  }

  function renderReadStats() {
    var box = $("#readStats");
    if (!box) return;
    var entries = allReadingEntries();
    var done = entries.filter(function (e) { return readDone(e) > 0; });
    var totalStars = 0;
    done.forEach(function (e) { totalStars += readDone(e); });
    if (state.today.date !== todayStr()) {
      state.today = { date: todayStr(), count: 0 };
      save();
    }
    var avgPill = done.length
      ? '<span class="stat-pill"><img src="assets/img/star.webp" alt="">平均 <b>' +
        (totalStars / done.length).toFixed(1) + "</b> 星</span>"
      : '<span class="stat-pill">读完就有评分</span>';
    box.innerHTML =
      '<span class="stat-pill">已读 <b>' + done.length + "</b> / " + entries.length + " 个</span>" +
      avgPill +
      '<span class="stat-pill">今天读了 <b>' + state.today.count + "</b> 次</span>";
  }

  function openSubject(id) {
    ensureAudioPack();
    var subject = subjectById(id);
    var decks = subjectDecks(subject.id);
    if (!decks.length) return;
    showScreen("s-units");
    var isEn = subject.id === "en";
    var screen = $("#s-units");
    screen.classList.toggle("theme-zh", !isEn);
    screen.classList.toggle("theme-en", isEn);
    $("#unitsTitle").textContent = isEn ? "英语小课堂" : "语文小课堂";
    $("#unitsSubTitle").textContent = isEn
      ? "课本、字母、单词、句子和跟读"
      : "课本、拼音、识字、阅读和闯关练习";
    var entries = allReadingEntries().filter(function (e) {
      return (e.deck && e.deck.subject) === subject.id;
    });
    var done = entries.filter(function (e) { return readDone(e) > 0; }).length;
    var hero = $("#subjectHero");
    if (hero) {
      hero.innerHTML =
        '<div class="subject-hero ' + (isEn ? "is-en" : "is-zh") + '">' +
          '<div class="subject-hero-copy">' +
            '<span class="subject-kicker">' + (isEn ? "ENGLISH · 英语" : "CHINESE · 语文") + "</span>" +
            "<h2>" + (isEn ? "先听懂，再勇敢开口" : "把课本读熟，字词就会了") + "</h2>" +
            "<p>" + (isEn
              ? "从课本单元开始，也可以直接读课文、练单词和句子。"
              : "从课本单元开始，拼音、识字、阅读和小游戏都在下面。") + "</p>" +
          "</div>" +
          '<div class="subject-hero-side">' +
            '<div class="subject-mascot-wrap">' +
              '<img class="subject-mascot" src="assets/img/mascot-girl.webp" alt="">' +
              '<span class="subject-big-mark">' + (isEn ? "A" : "语") + "</span>" +
            "</div>" +
            '<span class="subject-progress">已读 <b>' + done + "</b> / " + entries.length + " 个</span>" +
          "</div>" +
        "</div>";
    }
    var list = $("#unitList");
    list.innerHTML = "";
    function addSection(title, note, className) {
      var section = document.createElement("section");
      section.className = "subject-section " + (className || "");
      section.innerHTML =
        '<div class="subject-section-head"><h3>' + escapeHTML(title) + "</h3>" +
        "<p>" + escapeHTML(note) + "</p></div>" +
        '<div class="subject-card-grid"></div>';
      list.appendChild(section);
      return section.querySelector(".subject-card-grid");
    }
    var unitGrid = addSection(
      isEn ? "课本单元" : "按课本单元",
      isEn ? "6 个单元 · 2 个复习 · 英文名 · 读课文" : "8 个单元，点开就能读",
      "subject-units"
    );
    decks.forEach(function (deck) {
      if (!deck.units) return;
      deck.units.forEach(function (u) { unitGrid.appendChild(unitCard(u, subject.id)); });
    });
    if (isEn && TB.length) unitGrid.appendChild(textbookEntryCard());

    var drillIds = { "zh-tones": 1, "zh-initials": 1, "zh-finals": 1, "zh-whole": 1 };
    var extras = decks.filter(function (d) { return !d.units && !drillIds[d.id]; });
    if (extras.length || isEn) {
      var practiceGrid = addSection(
        isEn ? "专项练习" : "拼音与字词",
        isEn ? "单词 · 句子 · 陌生单词本 · 字母表" : "拼音认读、拼读工坊、词语和句子，随时加练",
        "subject-practice"
      );
      if (!isEn) practiceGrid.appendChild(pinyinDrillCard());
      extras.forEach(function (d) { practiceGrid.appendChild(deckCard(d)); });
      if (isEn) practiceGrid.appendChild(alphabetEntryCard());
    }
    if (!isEn) {
      var gameGrid = addSection("闯关小游戏", "拼音找朋友、认字小侦探和听音小游戏", "subject-games");
      var gameDay = dayByNo(currentDay);
      var gameDone = state.days[currentDay] || {};
      GAME_ORDER.forEach(function (kind) {
        gameGrid.appendChild(makeGameCard(kind, GAME_META[kind], gameDay, gameDone, false));
      });
      EXTRA_GAMES.forEach(function (meta) {
        if (meta.kind === "blendQuiz") return;
        gameGrid.appendChild(makeGameCard(meta.kind, meta, gameDay, gameDone, true));
      });
    }
    if (subjectScroll[subject.id]) {
      requestAnimationFrame(function () {
        var units = $("#s-units");
        if (units && openScreenId === "s-units") units.scrollTop = subjectScroll[subject.id];
      });
    }
  }

  function textbookPages() {
    var out = [];
    TB.forEach(function (u) {
      u.pages.forEach(function (p) { out.push({ unit: u, page: p }); });
    });
    return out;
  }

  function textbookEntryCard() {
    var pages = textbookPages();
    var done = pages.filter(function (x) { return state.read["tb-page:" + x.page.id]; }).length;
    var pct = Math.round(done / Math.max(1, pages.length) * 100);
    var b = document.createElement("button");
    b.type = "button";
    b.className = "tb-entry";
    b.innerHTML =
      '<span class="tb-entry-art">' + textbookArt("animals", "small") + "</span>" +
      '<span class="tb-entry-copy"><em>READ ALONG</em><b>读课文</b>' +
      "<span>点句子听英语，点小喇叭听中文 · 已读 " + done + " / " + pages.length + " 页</span>" +
      '<i class="tb-entry-bar"><u style="width:' + pct + '%"></u></i></span>' +
      '<span class="tb-entry-go"><i class="icon icon-chevron"></i></span>';
    b.addEventListener("click", function () {
      sfx("tap");
      openTextbook("en-u1");
    });
    return b;
  }

  function alphabetEntryCard() {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "unit-card tile-card deck-card alphabet-entry";
    b.innerHTML =
      '<span class="tile-top"><span class="tile-tag">ABC</span>' +
        '<span class="tile-count">26</span></span>' +
      "<h4>英语字母表</h4>" +
      '<p class="tile-sub">听音选字母</p>' +
      '<span class="tile-art">' + themeArt("alphabet", "is-tile") + "</span>";
    b.addEventListener("click", function () {
      sfx("tap");
      openAlphabet();
    });
    return b;
  }

  function addUnitGroup(list, title, note) {
    var group = document.createElement("div");
    group.className = "unit-group";
    group.innerHTML = "<b>" + escapeHTML(title) + "</b><span>" + escapeHTML(note) + "</span>";
    list.appendChild(group);
  }

  function unitCard(u, subjectId) {
    var done = u.items.filter(function (_, i) { return state.read[u.id + ":" + i]; }).length;
    var b = document.createElement("button");
    b.type = "button";
    b.className = "unit-card tile-card" + (u.lang === "en-US" ? " is-en" : "");
    b.innerHTML =
      '<span class="tile-top"><span class="tile-tag">' +
        escapeHTML(u.badge || u.unit.replace("Unit ", "U")) + "</span>" +
        '<span class="tile-count">' + done + "/" + u.items.length + "</span></span>" +
      "<h4>" + escapeHTML(u.title) + "</h4>" +
      '<p class="tile-sub">' + escapeHTML(u.zh) + "</p>" +
      '<span class="tile-art">' +
        (themeArt(ART_THEMES[u.id], "is-tile") ||
          '<span class="unit-no">' + escapeHTML(u.badge || "·") + "</span>") +
      "</span>";
    b.addEventListener("click", function () {
      sfx("tap");
      startUnit(u, { screen: "s-units", subject: subjectId });
    });
    return b;
  }

  function deckCard(deck) {
    var entries = deckEntries(deck);
    var done = entries.filter(function (e) { return state.read[e.id]; }).length;
    var marks = {
      pinyin: "读", words: "词", sentences: "句",
      "en-words": "词", "en-sentences": "句", "en-wordbook": "新",
      "zh-tones": "调", "zh-initials": "母", "zh-finals": "韵", "zh-whole": "整"
    };
    var b = document.createElement("button");
    b.type = "button";
    b.className = "unit-card tile-card deck-card";
    b.innerHTML =
      '<span class="tile-top"><span class="tile-tag">' +
        escapeHTML(marks[deck.id] || deck.tag.slice(0, 2)) + "</span>" +
        '<span class="tile-count">' + done + "/" + entries.length + "</span></span>" +
      "<h4>" + escapeHTML(deck.title) + "</h4>" +
      '<p class="tile-sub">' + escapeHTML(deck.sub) + "</p>" +
      '<span class="tile-art">' +
        (themeArt(ART_THEMES[deck.id], "is-tile") ||
          '<span class="unit-no">' + (marks[deck.id] || "·") + "</span>") +
      "</span>";
    b.addEventListener("click", function () {
      sfx("tap");
      if (deck.extra || deck.pickable) openPicker(deck);
      else startDeck(deck, 0, { screen: "s-units", subject: deck.subject || "zh" });
    });
    return b;
  }

  var pickDeck = null;

  function openPicker(deck) {
    rememberSubjectScroll();
    pickDeck = deck;
    showScreen("s-pick");
    $("#pickTitle").textContent = deck.title;
    $("#pickSub").textContent = deck.sub + " · 共 " + deck.items.length + " 个 · 点一个开始";
    var grid = $("#pickGrid");
    grid.innerHTML = "";
    deck.items.forEach(function (it, i) {
      var itemId = it.srcId || (deck.id + ":" + i);
      var b = document.createElement("button");
      b.type = "button";
      b.className = "pick-item" + (deck.id === "en-sentences" ? " long" : "");
      var stars = state.read[itemId] || 0;
      var subline = it.py
        ? (it.py + (it.zh && it.zh !== it.text ? " · " + it.zh : ""))
        : (it.zh || "");
      b.innerHTML =
        (it.unitLabel ? '<em>' + escapeHTML(it.unitLabel) + "</em>" : "") +
        "<b>" + escapeHTML(it.text) + "</b>" +
        (subline ? "<span>" + escapeHTML(subline) + "</span>" : "") +
        (stars ? '<span class="pick-stars">' + starTag(stars) + "</span>" : "");
      b.addEventListener("click", function () {
        sfx("tap");
        startDeck(deck, i, { screen: "s-pick", deck: deck });
      });
      grid.appendChild(b);
    });
  }

  function startUnit(u, returnTo) {
    startDeck({
      id: u.id,
      title: u.title,
      sub: u.zh,
      lang: u.lang || "en-US",
      items: u.items,
      unitLabel: u.unit,
      subject: u.subject
    }, 0, returnTo);
  }

  function startDeck(deck, startIdx, returnTo) {
    rememberSubjectScroll();
    speakReturn = returnTo || { screen: "home" };
    var entries = deck.items.map(function (it, i) {
      return {
        item: it,
        id: it.srcId || (deck.id + ":" + i),
        unit: deck.unitLabel ? { unit: deck.unitLabel } : null
      };
    });
    var lang = deck.lang || "zh-CN";
    if (lang.indexOf("en") === 0) lang = "en-GB";
    speakState = { deck: deck, entries: entries, idx: startIdx || 0, lang: lang };
    showScreen("s-speak");
    $("#speakTitle").textContent = deck.title;
    $("#speakTitle").classList.toggle("is-en", (deck.lang || "").indexOf("en") === 0);
    $("#speakSubTitle").textContent = (deck.lang || "").indexOf("en") === 0
      ? "英语口语 · 听清楚再读"
      : "听一遍，再跟着读";
    renderSpeakDots();
    loadSpeakItem(speakState.idx);
    setTimeout(function () {
      if (openScreenId === "s-speak") ensureAudioPack();
    }, 80);
  }

  /* ------------------------------------------------------------ textbook */

  var tbUnitId = null;
  var tbPageIdx = 0;
  var tbLastLine = 0;
  var tbSheetLine = -1;
  var tbSheetMode = "line";
  var tbSheetWord = null;
  var tbImagesReady = false;

  function probeTextbookImages() {
    /* Avoid downloading a textbook page just to test image availability. */
    tbImagesReady = !!(TB_IMG && Object.keys(TB_IMG).length);
    syncTbImageToggle();
  }

  function tbUnit() {
    return TB.filter(function (u) { return u.id === tbUnitId; })[0] || TB[0];
  }

  function openTextbook(unitId) {
    if (!TB.length) return;
    rememberSubjectScroll();
    tbUnitId = unitId || (tbUnit() && tbUnit().id) || TB[0].id;
    tbPageIdx = 0;
    showScreen("s-textbook");
    renderTbTabs();
    renderTbPage();
  }

  function renderTbTabs() {
    var tabs = $("#tbTabs");
    if (!tabs) return;
    var shortTitle = {
      "en-u1": "Hello",
      "en-u2": "My Bag",
      "en-u3": "Count",
      "en-u4": "Colors",
      "en-u5": "Scooter",
      "en-u6": "Jump"
    };
    tabs.innerHTML = "";
    TB.forEach(function (u) {
      var b = document.createElement("button");
      b.type = "button";
      b.dataset.tbUnit = u.id;
      b.className = u.id === tbUnitId ? "on" : "";
      b.title = u.title;
      b.setAttribute("aria-label", u.badge + " " + u.title);
      b.innerHTML = '<b>' + escapeHTML(u.badge) + "</b><span>" +
        escapeHTML(shortTitle[u.id] || u.title) + "</span>";
      b.addEventListener("click", function () {
        if (u.id === tbUnitId) return;
        sfx("tap");
        tbUnitId = u.id;
        tbPageIdx = 0;
        renderTbTabs();
        renderTbPage();
      });
      tabs.appendChild(b);
    });
  }

  function renderTbPage() {
    var u = tbUnit();
    if (!u) return;
    var page = u.pages[tbPageIdx];
    if (!page) return;
    tbLastLine = 0;
    tbSheetLine = -1;
    closeTbSheet();
    stopTextbookSequence();
    stopTbWordSequence();
    var idx = tbPageIdx;
    var unitIdx = TB.indexOf(u);
    var hasPrevUnit = unitIdx > 0;
    var hasNextUnit = unitIdx >= 0 && unitIdx < TB.length - 1;
    var atVeryStart = idx === 0 && !hasPrevUnit;
    var atVeryEnd = idx >= u.pages.length - 1 && !hasNextUnit;
    var prevLabel = idx === 0 && hasPrevUnit ? "← 上一单元" : "← 上一页";
    var nextLabel = idx >= u.pages.length - 1 && hasNextUnit ? "下一单元 →" : "下一页 →";
    var hasBook = !!(state.tbImages && TB_IMG[page.id]);
    var done = !!state.read["tb-page:" + page.id];
    var words = page.words.map(function (w) {
      return '<span class="tb-word">' +
        '<button class="tb-word-main" type="button" data-tb-word="' + escapeHTML(w.w) + '">' +
        '<b>' + escapeHTML(w.w) + "</b>" +
        '<em>' + escapeHTML(w.zh) + "</em></button>" +
        '<button class="tb-word-zh" type="button" data-tb-word-zh="' + escapeHTML(w.w) + '" aria-label="听中文">' +
        '<i class="icon icon-volume"></i></button></span>';
    }).join("");
    var dots = u.pages.map(function (p, i) {
      return '<button type="button" class="tb-dot' + (i === idx ? " on" : "") +
        (state.read["tb-page:" + p.id] ? " done" : "") + '" data-tb-page="' + i +
        '" aria-label="第 ' + (i + 1) + ' 页"></button>';
    }).join("");
    var firstLine = page.lines[0] || { en: "", zh: "" };
    $("#tbPage").innerHTML =
      '<div class="tb-reader-shell">' +
        '<section class="tb-stage" id="tbStage" aria-label="课本图">' +
          '<div class="tb-stage-head">' +
            '<div><div class="tb-crumb">' + escapeHTML(u.unit || u.title) + " · " +
              escapeHTML(String(page.section).toUpperCase()) + "</div>" +
              '<h3>' + escapeHTML(page.sub) + "</h3></div>" +
            '<span class="tb-stage-chip">第 ' + (idx + 1) + " / " + u.pages.length + " 页</span>" +
          "</div>" +
          '<div class="tb-book-wrap">' +
            '<button type="button" class="tb-page-btn is-prev" data-tb-nav="prev" aria-label="' +
              escapeHTML(prevLabel.replace(/[←→\s]/g, "")) + '"' + (atVeryStart ? " disabled" : "") + ">‹</button>" +
            '<div class="tb-visual tb-reader-book' + (hasBook ? " is-book" : "") + '">' +
              tbVisualHTML(page, u) +
              '<span class="tb-unit-tag">' + escapeHTML(u.badge) + " · " + escapeHTML(u.zh) + "</span>" +
            "</div>" +
            '<button type="button" class="tb-page-btn is-next" data-tb-nav="next" aria-label="' +
              escapeHTML(nextLabel.replace(/[←→\s]/g, "")) + '"' + (atVeryEnd ? " disabled" : "") + ">›</button>" +
          "</div>" +
          '<div class="tb-stage-foot">' +
            '<div class="tb-page-info">' +
              '<span class="tb-dots">' + dots + "</span>" +
              '<span class="tb-page-pos">第 ' + (idx + 1) + " / " + u.pages.length +
                ' 页<span class="tb-swipe-hint"> · 左右滑动翻页</span></span>' +
            "</div>" +
          "</div>" +
        "</section>" +
        '<aside class="tb-rail" aria-label="当前页句子和动作">' +
          '<div class="tb-rail-head">' +
            '<span class="tb-rail-kicker">READ ALONG</span>' +
            '<p>点图上的句子开始朗读，也可以用上方的上一句、下一句切换。</p>' +
          "</div>" +
          '<div class="tb-focus" id="tbFocus" aria-live="polite">' +
            '<div class="tb-sheet-top">' +
              '<span class="tb-sheet-chip" id="tbFocusChip">句子 1 / ' + page.lines.length + "</span>" +
              '<div class="tb-sheet-nav">' +
                '<button type="button" data-tb-sheet-nav="prev" aria-label="上一句">‹</button>' +
                '<button type="button" data-tb-sheet-nav="next" aria-label="下一句">›</button>' +
              "</div>" +
            "</div>" +
            '<p class="tb-focus-en" id="tbFocusEn">' + escapeHTML(firstLine.en) + "</p>" +
            '<p class="tb-focus-ipa" id="tbFocusIpa" hidden></p>' +
            '<div class="tb-focus-zhrow"><span id="tbFocusZh">' + escapeHTML(firstLine.zh) + "</span>" +
              '<button type="button" data-tb-sheet-zh aria-label="听中文解释"><i class="icon icon-volume"></i></button>' +
            "</div>" +
            '<div class="tb-focus-actions">' +
              '<button type="button" data-tb-sheet-listen><i class="icon icon-volume"></i>听一遍</button>' +
              '<button type="button" data-tb-sheet-slow><i class="icon icon-volume"></i>慢速</button>' +
              '<button type="button" data-tb-sheet-slow2><i class="icon icon-volume"></i>慢速×2</button>' +
              '<button type="button" data-tb-sheet-word id="tbFocusWordBtn"><i class="icon icon-volume"></i>逐词</button>' +
            "</div>" +
          "</div>" +
          '<div class="tb-rail-scroll">' +
            '<div class="tb-word-head"><b>PIGGY BANK</b><span>点单词听英语</span></div>' +
            '<div class="tb-words">' + words + "</div>" +
          "</div>" +
          '<div class="tb-rail-actions">' +
            '<button class="btn btn-primary" type="button" data-tb-playall="1"><i class="icon icon-play"></i>整页听一遍</button>' +
            '<button class="btn ' + (done ? "btn-ghost" : "btn-primary") + '" type="button" data-tb-done="1">' +
              (done ? "再读一遍" : "我读完了 +1 ★") + "</button>" +
          "</div>" +
        "</aside>" +
      "</div>";
    var bookImg = $("#tbPage .tb-book-img");
    if (bookImg) {
      bookImg.addEventListener("error", function () {
        state.tbImages = false;
        save();
        syncTbImageToggle();
        flashToast($("#tbToast"), "课本图只保存在本地版，线上版先用原创插图");
        renderTbPage();
      });
    }
    syncTbFocusLine(page, 0);
    syncTbImageToggle();
    bindTbSwipe();
    fitTbBook();
    requestAnimationFrame(fitTbBook);
    try { $("#s-textbook").scrollTop = 0; } catch (err) {}
  }

  function tbVisualHTML(page, u) {
    var meta = state.tbImages && TB_IMG[page.id];
    if (!meta) return textbookArt(page.art || u.art, "page");
    var hots = "";
    function overlap(a, b) {
      var x = Math.max(a[0], b[0]);
      var y = Math.max(a[1], b[1]);
      var r = Math.min(a[0] + a[2], b[0] + b[2]);
      var t = Math.min(a[1] + a[3], b[1] + b[3]);
      if (r <= x || t <= y) return 0;
      return (r - x) * (t - y) / Math.max(0.0001, b[2] * b[3]);
    }
    meta.boxes.forEach(function (b, i) {
      if (!b) return;
      hots += '<button class="tb-hot" type="button" data-tb-line="' + i + '" aria-label="读第 ' + (i + 1) + ' 句" style="left:' +
        (b[0] * 100).toFixed(2) + "%;top:" + (b[1] * 100).toFixed(2) +
        "%;width:" + (b[2] * 100).toFixed(2) + "%;height:" + (b[3] * 100).toFixed(2) + '%"></button>';
    });
    Object.keys(meta.wordBoxes || {}).forEach(function (word) {
      var raw = meta.wordBoxes[word];
      if (!raw) return;
      var list = Array.isArray(raw[0]) ? raw : [raw];
      list.forEach(function (b) {
        if (!b) return;
        if (meta.boxes.some(function (line) { return line && overlap(line, b) > 0.35; })) return;
        hots += '<button class="tb-hot is-word" type="button" data-tb-word="' + escapeHTML(word) + '" aria-label="读单词 ' + escapeHTML(word) + '" style="left:' +
          (b[0] * 100).toFixed(2) + "%;top:" + (b[1] * 100).toFixed(2) +
          "%;width:" + (b[2] * 100).toFixed(2) + "%;height:" + (b[3] * 100).toFixed(2) + '%"></button>';
      });
    });
    return '<div class="tb-book"><img class="tb-book-img" src="' + escapeHTML(meta.img) + '" alt="' +
      escapeHTML(u.unit + " " + page.section + " 课本页") + '">' +
      '<div class="tb-book-hots">' + hots + "</div>" +
      '<span class="tb-book-badge">课本图 · 点句子读</span></div>';
  }

  function syncTbImageToggle() {
    var b = $("#tbImageToggle");
    if (!b) return;
    b.hidden = !tbImagesReady;
    b.classList.toggle("on", !!state.tbImages);
    b.setAttribute("aria-pressed", String(!!state.tbImages));
    b.textContent = state.tbImages ? "用插图" : "课本图";
  }

  function closeTbSheet() {
    var sheet = $("#tbSheet");
    if (sheet) sheet.hidden = true;
    tbSheetLine = -1;
    tbSheetMode = "line";
    tbSheetWord = null;
    var screen = $("#s-textbook");
    if (screen) screen.classList.remove("sheet-open");
  }

  function syncTbFocusLine(page, i) {
    var line = page && page.lines ? page.lines[i] : null;
    var focus = $("#tbFocus");
    if (!line || !focus) return;
    focus.classList.remove("is-word");
    $("#tbFocusChip").textContent = "句子 " + (i + 1) + " / " + page.lines.length;
    $("#tbFocusEn").textContent = line.en;
    $("#tbFocusIpa").hidden = true;
    $("#tbFocusZh").textContent = line.zh || "";
    $("#tbFocusWordBtn").hidden = false;
    $$("#tbFocus [data-tb-sheet-nav]").forEach(function (b) { b.hidden = false; });
  }

  function syncTbFocusWord(word) {
    var focus = $("#tbFocus");
    if (!word || !focus) return;
    focus.classList.add("is-word");
    $("#tbFocusChip").textContent = "单词";
    $("#tbFocusEn").textContent = word.w;
    $("#tbFocusIpa").textContent = "";
    $("#tbFocusIpa").hidden = true;
    $("#tbFocusZh").textContent = word.zh || "";
    $("#tbFocusWordBtn").hidden = !/[\s-]/.test(word.w);
    $$("#tbFocus [data-tb-sheet-nav]").forEach(function (b) { b.hidden = true; });
  }

  function openTbSheet(page, i) {
    var line = page && page.lines ? page.lines[i] : null;
    var sheet = $("#tbSheet");
    if (!line || !sheet) return;
    tbSheetLine = i;
    tbSheetMode = "line";
    tbSheetWord = null;
    $("#tbSheetChip").textContent = (i + 1) + " / " + page.lines.length;
    $("#tbSheetEn").textContent = line.en;
    $("#tbSheetIpa").hidden = true;
    $("#tbSheetWordBtn").hidden = false;
    $$("#tbSheet [data-tb-sheet-nav]").forEach(function (b) { b.hidden = false; });
    $("#tbSheetZh").textContent = line.zh || "";
    syncTbFocusLine(page, i);
    $("#tbSheet").hidden = false;
    var screen = $("#s-textbook");
    if (screen) screen.classList.add("sheet-open");
    syncVoiceFloat();
    var hot = $("#tbPage .tb-hot[data-tb-line='" + i + "']");
    if (hot) {
      setTimeout(function () {
        try { hot.scrollIntoView({ block: "center", inline: "nearest", behavior: "smooth" }); } catch (err) {}
      }, 60);
    }
  }

  function openTbWordSheet(word) {
    var sheet = $("#tbSheet");
    if (!word || !sheet) return;
    tbSheetMode = "word";
    tbSheetWord = word;
    tbSheetLine = -1;
    $("#tbSheetChip").textContent = "单词";
    $("#tbSheetEn").textContent = word.w;
    $("#tbSheetIpa").textContent = "";
    $("#tbSheetIpa").hidden = true;
    $("#tbSheetZh").textContent = word.zh || "";
    $("#tbSheetWordBtn").hidden = !/[\s-]/.test(word.w);
    syncTbFocusWord(word);
    $$("#tbSheet [data-tb-sheet-nav]").forEach(function (b) { b.hidden = true; });
    $("#tbSheet").hidden = false;
    var screen = $("#s-textbook");
    if (screen) screen.classList.add("sheet-open");
    syncVoiceFloat();
    var hots = $$("#tbPage .tb-hot.is-word");
    var hot = null;
    for (var i = 0; i < hots.length; i++) {
      if (hots[i].dataset.tbWord === word.w) { hot = hots[i]; break; }
    }
    if (hot) {
      setTimeout(function () {
        try { hot.scrollIntoView({ block: "center", inline: "nearest", behavior: "smooth" }); } catch (err) {}
      }, 60);
    }
  }

  function syncVoiceFloat() {
    var f = $("#voiceFloat");
    if (!f) return;
    var pinyinScreens = ["s-pinyin-quiz", "s-tone-quiz", "s-blend-quiz", "s-pinyin-drill"];
    var chineseScreens = ["s-pinyin", "s-read", "s-stroke", "s-trace"];
    var isEn = openScreenId === "s-textbook" || openScreenId === "s-alphabet" ||
      openScreenId === "s-en-quiz" ||
      (openScreenId === "s-speak" && speakState && String(speakState.lang || "").indexOf("en") === 0);
    var isPinyin = pinyinScreens.indexOf(openScreenId) >= 0;
    var show = isEn || isPinyin || chineseScreens.indexOf(openScreenId) >= 0 ||
      openScreenId === "s-speak";
    f.hidden = !show;
    f.classList.toggle("on-drill", isPinyin);
    f.classList.toggle("on-textbook", openScreenId === "s-textbook");
    f.classList.toggle("on-speak", openScreenId === "s-speak");
    f.classList.toggle("on-quiz", openScreenId === "s-pinyin-quiz" ||
      openScreenId === "s-tone-quiz" || openScreenId === "s-blend-quiz" ||
      openScreenId === "s-alphabet" || openScreenId === "s-en-quiz");
    if (!show) return;
    var box = $("#voiceFloatBtns");
    if (!box) return;
    var opts;
    if (isEn) {
      opts = hasTencentVoice()
        ? [
            ["tencent-403006", "YunMia", "vf"],
            ["tencent-402001", "云小团", "vf"],
            ["tencent-403011", "云嘉瑜", "vf"],
            ["tencent-403014", "云佳洁", "vf"]
          ]
        : [["sonia", "Sonia", "vf"], ["libby", "Libby", "vf"], ["maisie", "Maisie", "vf"]];
      if (!hasTencentVoice() && hasYoudaoVoice()) opts.push(["youdao", "有道", "vf"]);
    } else if (isPinyin) {
      opts = [["pinyin-yoyo", "拼音 Yoyo", "pyvf"], ["xiaoxiao", "晓晓", "zhvf"], ["xiaoyi", "晓伊", "zhvf"]];
    } else {
      opts = [["xiaoxiao", "晓晓", "zhvf"], ["xiaoyi", "晓伊", "zhvf"]];
    }
    var current = isEn ? state.enVoice : (isPinyin ? (state.pyVoice || "pinyin-yoyo") : state.zhVoice);
    box.innerHTML = opts.map(function (o) {
      return '<button type="button" data-' + o[2] + '="' + o[0] + '"' +
        (o[0] === current ? ' class="on"' : "") + ">" + o[1] + "</button>";
    }).join("");
  }

  function playLine(page, i, quiet, slow) {
    var line = page.lines[i];
    if (!line) return;
    tbLastLine = i;
    openTbSheet(page, i);
    if (!quiet) sfx("tap");
    say(tbLineKey(page, i), line.en, "en-GB", slow);
    state.read["tb-line:" + page.id + ":" + i] = 1;
    save();
    flashTbLine(i);
  }

  function flashTbLine(i) {
    var hot = $("#tbPage .tb-hot[data-tb-line='" + i + "']");
    if (!hot) return;
    hot.classList.add("on");
    setTimeout(function () { hot.classList.remove("on"); }, 900);
  }

  function playTextbookWord(word, text, zh, isZh) {
    if (isZh) say(tbWordZhKey(word), zh, "zh-CN");
    else say(spokenTextKey(word), text, "en-GB");
  }

  var tbWordAudio = null;
  var tbWordToken = 0;
  var tbWordEl = null;
  var tbWordPlain = "";

  function tbGapMs() {
    return 0;
  }

  function stopTbWordSequence() {
    tbWordToken++;
    if (tbWordAudio) {
      try { tbWordAudio.pause(); } catch (err) {}
      tbWordAudio = null;
    }
    if (tbWordEl) {
      tbWordEl.textContent = tbWordPlain;
      tbWordEl = null;
    }
  }

  function playTbWordByWord(page, lineIndex, gapMs) {
    var line = page.lines[lineIndex];
    if (!line || !state.speak) return;
    if (!window.AUDIO_PACK_READY && !audioPackFailed) {
      ensureAudioPack(function () { playTbWordByWord(page, lineIndex, gapMs); });
      return;
    }
    stopTextbookSequence();
    stopTbWordSequence();
    pausePlayback();
    var sheetOpen = tbSheetLine === lineIndex;
    var focusEl = $("#tbFocusEn");
    var focusVisible = focusEl && focusEl.offsetParent !== null;
    var enEl = focusVisible ? focusEl : (sheetOpen ? $("#tbSheetEn") : null);
    if (!enEl) return;
    var text = String(line.en || "").replace(/[’‘]/g, "'");
    var parts = text.match(/[A-Za-z']+|[^A-Za-z']+/g) || [];
    var words = [];
    var html = "";
    parts.forEach(function (part) {
      if (/^[A-Za-z']+$/.test(part)) {
        words.push(part);
        html += '<span class="w-token" data-w="' + (words.length - 1) + '">' + escapeHTML(part) + "</span>";
      } else {
        html += escapeHTML(part);
      }
    });
    tbWordEl = enEl;
    tbWordPlain = enEl.textContent;
    enEl.innerHTML = html;
    var spans = $$(".w-token", enEl);
    var token = ++tbWordToken;
    var i = 0;
    function next() {
      if (token !== tbWordToken) return;
      spans.forEach(function (el) { el.classList.remove("on"); });
      if (i >= words.length) {
        if (tbWordEl) tbWordEl.textContent = tbWordPlain;
        tbWordEl = null;
        return;
      }
      var span = spans[i];
      if (span) span.classList.add("on");
      var word = words[i++];
      var src = resolveAudioSrc(spokenWordKey(word));
      if (!src) {
        setTimeout(next, tbGapMs());
        return;
      }
      var a = new Audio(src);
      a.volume = state.volume;
      a.playbackRate = 1;
      try { a.preservesPitch = true; a.webkitPreservesPitch = true; } catch (err) {}
      tbWordAudio = a;
      a.onended = function () { if (token === tbWordToken) setTimeout(next, tbGapMs()); };
      a.onerror = function () { if (token === tbWordToken) setTimeout(next, tbGapMs()); };
      var p = a.play();
      if (p && p.catch) p.catch(function () { if (token === tbWordToken) setTimeout(next, tbGapMs()); });
    }
    next();
  }

  function playTbSheetWord(slow) {
    if (tbSheetMode !== "word" || !tbSheetWord) return;
    say(spokenTextKey(tbSheetWord.w), tbSheetWord.w, "en-GB", slow);
  }

  function playTbSheetWordByWord(gapMs) {
    if (tbSheetMode !== "word" || !tbSheetWord || !state.speak) return;
    if (!window.AUDIO_PACK_READY && !audioPackFailed) {
      ensureAudioPack(function () { playTbSheetWordByWord(gapMs); });
      return;
    }
    stopTextbookSequence();
    stopTbWordSequence();
    pausePlayback();
    var text = String(tbSheetWord.w || "").replace(/[’‘]/g, "'");
    var parts = text.match(/[A-Za-z']+|[^A-Za-z']+/g) || [];
    var words = [];
    var html = "";
    parts.forEach(function (part) {
      if (/^[A-Za-z']+$/.test(part)) {
        words.push(part);
        html += '<span class="w-token" data-w="' + (words.length - 1) + '">' + escapeHTML(part) + "</span>";
      } else {
        html += escapeHTML(part);
      }
    });
    var focusEl = $("#tbFocusEn");
    var enEl = focusEl && focusEl.offsetParent !== null ? focusEl : $("#tbSheetEn");
    tbWordEl = enEl;
    tbWordPlain = enEl.textContent;
    enEl.innerHTML = html;
    var spans = $$(".w-token", enEl);
    var token = ++tbWordToken;
    var i = 0;
    function next() {
      if (token !== tbWordToken) return;
      spans.forEach(function (el) { el.classList.remove("on"); });
      if (i >= words.length) {
        if (tbWordEl) tbWordEl.textContent = tbWordPlain;
        tbWordEl = null;
        return;
      }
      var span = spans[i];
      if (span) span.classList.add("on");
      var word = words[i++];
      var src = resolveAudioSrc(spokenWordKey(word));
      if (!src) { setTimeout(next, gapMs); return; }
      var a = new Audio(src);
      a.volume = state.volume;
      try { a.preservesPitch = true; a.webkitPreservesPitch = true; } catch (err) {}
      tbWordAudio = a;
      a.onended = function () { if (token === tbWordToken) setTimeout(next, gapMs); };
      a.onerror = function () { if (token === tbWordToken) setTimeout(next, gapMs); };
      var p = a.play();
      if (p && p.catch) p.catch(function () { if (token === tbWordToken) setTimeout(next, gapMs); });
    }
    next();
  }

  function markTbPageDone(page) {
    var key = "tb-page:" + page.id;
    if (state.read[key]) {
      flashToast($("#tbToast"), "这一页已经读过啦，再读一遍会更顺");
      sfx("tap");
      return;
    }
    state.read[key] = 1;
    addStars(1);
    save();
    sfx("correct");
    flashToast($("#tbToast"), "读完这一页，收下 1 颗星星");
    renderTbPage();
  }

  function tbNav(delta) {
    var u = tbUnit();
    if (!u) return;
    var next = tbPageIdx + delta;
    var unitIdx = TB.indexOf(u);
    if (next < 0) {
      if (unitIdx <= 0) return;
      tbUnitId = TB[unitIdx - 1].id;
      tbPageIdx = TB[unitIdx - 1].pages.length - 1;
      renderTbTabs();
      renderTbPage();
      sfx("tap");
      return;
    }
    if (next >= u.pages.length) {
      if (unitIdx < 0 || unitIdx >= TB.length - 1) return;
      tbUnitId = TB[unitIdx + 1].id;
      tbPageIdx = 0;
      renderTbTabs();
      renderTbPage();
      sfx("tap");
      return;
    }
    tbPageIdx = next;
    renderTbPage();
    sfx("tap");
  }

  function lockZoom() {
    function resetScale() {
      var vv = window.visualViewport;
      if (!vv) return;
      if (Math.abs((vv.scale || 1) - 1) > 0.01) {
        document.documentElement.style.zoom = "";
        document.body.style.zoom = "";
        window.scrollTo(0, window.scrollY);
      }
    }
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", resetScale);
      window.visualViewport.addEventListener("scroll", resetScale);
    }

    document.addEventListener("gesturestart", function (ev) {
      ev.preventDefault();
    }, { passive: false });
    document.addEventListener("gesturechange", function (ev) {
      ev.preventDefault();
    }, { passive: false });
    document.addEventListener("gestureend", function (ev) {
      ev.preventDefault();
    }, { passive: false });

    var lastTouchEnd = 0;
    document.addEventListener("touchend", function (ev) {
      if (ev.touches && ev.touches.length > 0) return;
      var now = Date.now();
      if (now - lastTouchEnd <= 300) ev.preventDefault();
      lastTouchEnd = now;
    }, { passive: false });

    document.addEventListener("touchmove", function (ev) {
      if (ev.touches && ev.touches.length > 1) ev.preventDefault();
    }, { passive: false });

    document.addEventListener("dblclick", function (ev) {
      ev.preventDefault();
    }, { passive: false });

    document.addEventListener("dragstart", function (ev) {
      ev.preventDefault();
    }, { passive: false });

    document.addEventListener("selectstart", function (ev) {
      if (ev.target && ev.target.closest && ev.target.closest("input,textarea")) return;
      ev.preventDefault();
    }, { passive: false });

    window.addEventListener("wheel", function (ev) {
      if (ev.ctrlKey) ev.preventDefault();
    }, { passive: false });
  }

  function bindTbSwipe() {
    var page = $("#tbPage");
    if (!page || page.dataset.swipeBound) return;
    page.dataset.swipeBound = "1";
    var startX = 0, startY = 0, tracking = false;
    page.addEventListener("touchstart", function (ev) {
      if (!ev.touches || ev.touches.length !== 1) { tracking = false; return; }
      if (!ev.target.closest || !ev.target.closest("#tbStage")) { tracking = false; return; }
      startX = ev.touches[0].clientX;
      startY = ev.touches[0].clientY;
      tracking = true;
    }, { passive: true });
    page.addEventListener("touchend", function (ev) {
      if (!tracking) return;
      tracking = false;
      var t = (ev.changedTouches && ev.changedTouches[0]) || null;
      if (!t) return;
      var dx = t.clientX - startX;
      var dy = t.clientY - startY;
      if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.6) return;
      tbNav(dx < 0 ? 1 : -1);
    }, { passive: true });
  }

  function fitTbBook() {
    var wrap = $("#tbPage .tb-book-wrap");
    var book = $("#tbPage .tb-reader-book");
    if (!wrap || !book) return;
    var box = wrap.getBoundingClientRect();
    var w = box.width - (window.innerWidth <= 520 ? 118 : 104);
    var h = box.height - 4;
    if (w <= 0 || h <= 0) return;
    var ratio = 900 / 1264;
    var width = Math.min(w, h * ratio);
    var height = width / ratio;
    book.style.width = Math.floor(width) + "px";
    book.style.height = Math.floor(height) + "px";
  }

  function textbookArt(kind, size) {
    var cls = "tb-svg " + (size === "small" ? "is-small" : "is-page");
    if (kind === "bag") {
      return '<svg class="' + cls + '" viewBox="0 0 320 220" role="img" aria-label="书包和文具">' +
        '<defs><linearGradient id="tbBagBg" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#FFF1D6"/><stop offset="1" stop-color="#FFE3D6"/></linearGradient></defs>' +
        '<rect width="320" height="220" rx="26" fill="url(#tbBagBg)"/>' +
        '<circle cx="258" cy="48" r="22" fill="#FFD48A" opacity=".8"/>' +
        '<ellipse cx="160" cy="196" rx="92" ry="12" fill="#D9B9A6" opacity=".28"/>' +
        '<rect x="94" y="66" width="132" height="118" rx="34" fill="#FF93A8"/>' +
        '<rect x="108" y="82" width="104" height="88" rx="24" fill="#FFE6EB"/>' +
        '<path d="M124 68c0-22 18-38 36-38s36 16 36 38" fill="none" stroke="#F26D8D" stroke-width="9" stroke-linecap="round"/>' +
        '<rect x="130" y="118" width="60" height="38" rx="14" fill="#FFD48A"/>' +
        '<rect x="138" y="128" width="44" height="8" rx="4" fill="#FFFDF8" opacity=".75"/>' +
        '<g transform="rotate(-14 88 92)"><rect x="78" y="52" width="14" height="62" rx="6" fill="#8FD3BE"/><path d="M78 52l7-14 7 14z" fill="#5A443C"/></g>' +
        '<rect x="226" y="74" width="12" height="58" rx="5" fill="#FFD48A" transform="rotate(12 232 103)"/>' +
        '<rect x="244" y="84" width="30" height="20" rx="7" fill="#C5B2E2" transform="rotate(12 259 94)"/>' +
        '<text x="40" y="48" font-size="20" font-family="Andika, sans-serif" fill="#B4586E">new!</text>' +
        "</svg>";
    }
    if (kind === "numbers") {
      return '<svg class="' + cls + '" viewBox="0 0 320 220" role="img" aria-label="小猫和数字">' +
        '<defs><linearGradient id="tbNumBg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#E6F6F0"/><stop offset="1" stop-color="#FFF6E6"/></linearGradient></defs>' +
        '<rect width="320" height="220" rx="26" fill="url(#tbNumBg)"/>' +
        '<circle cx="52" cy="44" r="18" fill="#FFD48A"/>' +
        '<path d="M0 190c42-26 78-26 116 0s74 26 116 0 66-24 88-8v38H0z" fill="#8FD3BE" opacity=".38"/>' +
        '<g transform="translate(54 78)"><path d="M14 8L4 0l2 26zM50 8L60 0l-2 26z" fill="#5A443C"/><circle cx="32" cy="38" r="32" fill="#5A443C"/><circle cx="22" cy="34" r="4" fill="#FFFDF8"/><circle cx="42" cy="34" r="4" fill="#FFFDF8"/><path d="M27 46c3 3 7 3 10 0" stroke="#FFFDF8" stroke-width="3" fill="none" stroke-linecap="round"/><text x="8" y="96" font-size="24" font-family="Andika, sans-serif" fill="#4FAF92">1</text></g>' +
        '<g transform="translate(134 70)"><path d="M14 8L4 0l2 26zM50 8L60 0l-2 26z" fill="#8D746A"/><circle cx="32" cy="38" r="32" fill="#B79A86"/><circle cx="22" cy="34" r="4" fill="#FFFDF8"/><circle cx="42" cy="34" r="4" fill="#FFFDF8"/><path d="M27 46c3 3 7 3 10 0" stroke="#FFFDF8" stroke-width="3" fill="none" stroke-linecap="round"/><text x="8" y="96" font-size="24" font-family="Andika, sans-serif" fill="#9A6B1F">2</text></g>' +
        '<g transform="translate(214 78)"><path d="M14 8L4 0l2 26zM50 8L60 0l-2 26z" fill="#5A443C"/><circle cx="32" cy="38" r="32" fill="#5A443C"/><circle cx="22" cy="34" r="4" fill="#FFFDF8"/><circle cx="42" cy="34" r="4" fill="#FFFDF8"/><path d="M27 46c3 3 7 3 10 0" stroke="#FFFDF8" stroke-width="3" fill="none" stroke-linecap="round"/><text x="8" y="96" font-size="24" font-family="Andika, sans-serif" fill="#B4586E">3</text></g>' +
        '<text x="196" y="40" font-size="18" font-family="Andika, sans-serif" fill="#8D746A">meow!</text>' +
        "</svg>";
    }
    if (kind === "rainbow") {
      return '<svg class="' + cls + '" viewBox="0 0 320 220" role="img" aria-label="彩虹和气球">' +
        '<defs><linearGradient id="tbSky" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#EAF6FF"/><stop offset="1" stop-color="#FFF6E6"/></linearGradient></defs>' +
        '<rect width="320" height="220" rx="26" fill="url(#tbSky)"/>' +
        '<g fill="none" stroke-width="12" stroke-linecap="round">' +
          '<path d="M46 178c0-74 44-128 114-128s114 54 114 128" stroke="#C5B2E2"/>' +
          '<path d="M62 178c0-64 38-112 98-112s98 48 98 112" stroke="#7FB6E8"/>' +
          '<path d="M78 178c0-54 32-96 82-96s82 42 82 96" stroke="#8FD3BE"/>' +
          '<path d="M94 178c0-44 26-80 66-80s66 36 66 80" stroke="#FFD86B"/>' +
          '<path d="M110 178c0-34 20-64 50-64s50 30 50 64" stroke="#FFB067"/>' +
        "</g>" +
        '<g fill="#FFFDF8"><ellipse cx="52" cy="168" rx="30" ry="18"/><ellipse cx="80" cy="176" rx="24" ry="14"/><ellipse cx="268" cy="168" rx="30" ry="18"/><ellipse cx="240" cy="176" rx="24" ry="14"/></g>' +
        '<g transform="translate(238 88)"><ellipse cx="0" cy="0" rx="16" ry="20" fill="#FF93A8"/><path d="M0 20c-2 18 10 26 18 36" stroke="#B4586E" stroke-width="2" fill="none"/><ellipse cx="18" cy="56" rx="10" ry="14" fill="#FFD48A"/></g>' +
        '<g transform="translate(58 92)"><ellipse cx="0" cy="0" rx="14" ry="18" fill="#8FD3BE"/><path d="M0 18c-2 16 8 24 14 32" stroke="#4FAF92" stroke-width="2" fill="none"/><ellipse cx="14" cy="50" rx="9" ry="12" fill="#C5B2E2"/></g>' +
        "</svg>";
    }
    if (kind === "toys") {
      return '<svg class="' + cls + '" viewBox="0 0 320 220" role="img" aria-label="滑板车、飞机和玩具">' +
        '<defs><linearGradient id="tbToyBg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#F1EBFA"/><stop offset="1" stop-color="#FFF6E6"/></linearGradient></defs>' +
        '<rect width="320" height="220" rx="26" fill="url(#tbToyBg)"/>' +
        '<circle cx="272" cy="42" r="20" fill="#FFD48A" opacity=".8"/>' +
        '<g transform="translate(34 118)"><circle cx="18" cy="62" r="14" fill="#5A443C"/><circle cx="106" cy="62" r="14" fill="#5A443C"/><rect x="26" y="54" width="82" height="10" rx="5" fill="#FF93A8"/><path d="M100 58L112 8" stroke="#8D746A" stroke-width="7" stroke-linecap="round"/><path d="M96 8h34" stroke="#8D746A" stroke-width="7" stroke-linecap="round"/><rect x="0" y="30" width="28" height="20" rx="8" fill="#8FD3BE"/></g>' +
        '<g transform="translate(172 42) rotate(-8)"><path d="M0 34l44-16 30 16-30 16z" fill="#FFFDF8"/><path d="M74 34l34-10v20l-34 6z" fill="#FFD48A"/><path d="M44 18l14-12 16 28-30 0z" fill="#C5B2E2"/><circle cx="34" cy="34" r="5" fill="#7FB6E8"/></g>' +
        '<g transform="translate(198 128)"><rect x="0" y="18" width="76" height="38" rx="12" fill="#8FD3BE"/><rect x="10" y="0" width="26" height="20" rx="6" fill="#FFD48A"/><circle cx="18" cy="62" r="9" fill="#5A443C"/><circle cx="58" cy="62" r="9" fill="#5A443C"/><path d="M0 36h76" stroke="#FFFDF8" stroke-width="3" opacity=".6"/></g>' +
        '<g transform="translate(40 32)"><rect width="28" height="28" rx="6" fill="#FFB067"/><circle cx="28" cy="0" r="14" fill="#FFB067"/><rect x="34" y="6" width="22" height="22" rx="5" fill="#FF93A8"/></g>' +
        "</svg>";
    }
    if (kind === "animals") {
      return '<svg class="' + cls + '" viewBox="0 0 320 220" role="img" aria-label="猴子、兔子和大象">' +
        '<defs><linearGradient id="tbAniBg" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#E6F6F0"/><stop offset="1" stop-color="#FFF1D6"/></linearGradient></defs>' +
        '<rect width="320" height="220" rx="26" fill="url(#tbAniBg)"/>' +
        '<path d="M0 196c38-24 76-24 112 0s76 24 112 0 60-24 96-6v30H0z" fill="#8FD3BE" opacity=".36"/>' +
        '<path d="M14 40h110" stroke="#8D746A" stroke-width="9" stroke-linecap="round"/>' +
        '<g transform="translate(72 42)"><path d="M0 0c-4 18 4 30 18 34" stroke="#8D746A" stroke-width="5" fill="none"/><circle cx="22" cy="48" r="24" fill="#B79A86"/><circle cx="14" cy="44" r="3.5" fill="#5A443C"/><circle cx="30" cy="44" r="3.5" fill="#5A443C"/><path d="M17 56c3 3 7 3 10 0" stroke="#5A443C" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="2" cy="42" r="8" fill="#B79A86"/><circle cx="42" cy="42" r="8" fill="#B79A86"/></g>' +
        '<g transform="translate(158 120)"><ellipse cx="22" cy="46" rx="26" ry="22" fill="#FFFDF8"/><circle cx="22" cy="22" r="18" fill="#FFFDF8"/><path d="M12 8L8 0l10 5zM32 8L36 0l-10 5z" fill="#FFFDF8"/><circle cx="16" cy="20" r="2.5" fill="#5A443C"/><circle cx="28" cy="20" r="2.5" fill="#5A443C"/><path d="M20 28c2 2 4 2 6 0" stroke="#B4586E" stroke-width="2" fill="none"/></g>' +
        '<g transform="translate(230 96)"><ellipse cx="30" cy="52" rx="34" ry="30" fill="#B9C7D6"/><circle cx="30" cy="26" r="24" fill="#B9C7D6"/><ellipse cx="6" cy="28" rx="12" ry="18" fill="#B9C7D6"/><ellipse cx="54" cy="28" rx="12" ry="18" fill="#B9C7D6"/><path d="M30 38c-6 10 0 16 6 16" stroke="#7E92A6" stroke-width="7" fill="none" stroke-linecap="round"/><circle cx="22" cy="22" r="3" fill="#5A443C"/><circle cx="38" cy="22" r="3" fill="#5A443C"/></g>' +
        '<text x="24" y="204" font-size="17" font-family="Andika, sans-serif" fill="#8D746A">jump! swing! run!</text>' +
        "</svg>";
    }
    return '<svg class="' + cls + '" viewBox="0 0 320 220" role="img" aria-label="小朋友打招呼">' +
      '<defs><linearGradient id="tbGreetBg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#FFE6EB"/><stop offset="1" stop-color="#FFF6E6"/></linearGradient></defs>' +
      '<rect width="320" height="220" rx="26" fill="url(#tbGreetBg)"/>' +
      '<circle cx="270" cy="42" r="20" fill="#FFD48A" opacity=".85"/>' +
      '<path d="M0 188c44-30 82-30 124 0s82 30 124 0 52-20 72-6v38H0z" fill="#8FD3BE" opacity=".32"/>' +
      '<g transform="translate(74 72)"><circle cx="30" cy="28" r="26" fill="#FFE3CF"/><path d="M4 26c0-18 12-28 26-28s26 10 26 28c-8-10-16-14-26-14s-18 4-26 14z" fill="#6B4A3A"/><circle cx="21" cy="30" r="3" fill="#5A443C"/><circle cx="39" cy="30" r="3" fill="#5A443C"/><path d="M24 40c4 4 8 4 12 0" stroke="#B4586E" stroke-width="2.5" fill="none" stroke-linecap="round"/><rect x="8" y="56" width="44" height="58" rx="20" fill="#FF93A8"/><path d="M14 64c-14 8-20 20-18 36" stroke="#FF93A8" stroke-width="10" stroke-linecap="round" fill="none"/><path d="M46 64c14 8 20 20 18 36" stroke="#FF93A8" stroke-width="10" stroke-linecap="round" fill="none"/></g>' +
      '<g transform="translate(196 84)"><circle cx="28" cy="26" r="24" fill="#FFE3CF"/><path d="M4 24c0-16 10-26 24-26s24 10 24 26c-7-9-15-13-24-13s-17 4-24 13z" fill="#4A362E"/><circle cx="20" cy="28" r="3" fill="#5A443C"/><circle cx="36" cy="28" r="3" fill="#5A443C"/><path d="M22 37c4 3 8 3 12 0" stroke="#B4586E" stroke-width="2.5" fill="none" stroke-linecap="round"/><rect x="7" y="52" width="42" height="54" rx="18" fill="#8FD3BE"/><path d="M12 60c-12 8-16 18-15 32" stroke="#8FD3BE" stroke-width="9" stroke-linecap="round" fill="none"/></g>' +
      '<g transform="translate(152 30)"><rect width="120" height="42" rx="18" fill="#FFFDF8"/><path d="M24 42l-8 14 20-12z" fill="#FFFDF8"/><text x="15" y="27" font-size="17" font-family="Andika, sans-serif" fill="#B4586E">Hello!</text></g>' +
      '<text x="26" y="204" font-size="17" font-family="Andika, sans-serif" fill="#8D746A">What\'s your name?</text>' +
      "</svg>";
  }

  function renderSpeakDots() {
    var dots = $("#speakDots");
    dots.innerHTML = "";
    if (speakState.entries.length > 24) {
      var bar = document.createElement("span");
      bar.className = "dots-bar";
      var pct = ((speakState.idx + 1) / speakState.entries.length) * 100;
      bar.innerHTML = '<i style="width:' + pct + '%"></i>';
      dots.appendChild(bar);
      return;
    }
    speakState.entries.forEach(function (e, i) {
      var d = document.createElement("i");
      if (i < speakState.idx) d.className = "on";
      else if (i === speakState.idx) d.className = "on";
      dots.appendChild(d);
    });
  }

  function loadSpeakItem(idx) {
    if (!speakState) return;
    stopWordSequence();
    speakState.idx = idx;
    var entry = speakState.entries[idx];
    var item = entry.item;
    var isEn = speakState.lang.indexOf("en") === 0;
    $("#speakCard").classList.toggle("is-en", isEn);
    var wimg = $("#speakImg");
    if (item.img) {
      wimg.src = item.img;
      wimg.alt = item.text;
      wimg.hidden = false;
    } else {
      wimg.hidden = true;
      wimg.removeAttribute("src");
    }
    var chip = $("#speakColor");
    if (chip) {
      if (item.color) {
        chip.style.background = item.color;
        chip.hidden = false;
      } else {
        chip.hidden = true;
        chip.style.background = "";
      }
    }
    var tlen = Array.from(item.text).length;
    var raw = !!item.raw;
    var useRuby = !isEn && tlen > 1 && !raw;
    var pyText = !isEn ? String(item.py || "").trim() : "";
    var single = !isEn && (tlen === 1 || raw) && !!pyText;
    $("#speakText").innerHTML = useRuby ? speakRubyHTML(item.text, item.py) : escapeHTML(item.text);
    $("#speakCard").classList.toggle("ruby-mode", useRuby);
    $("#speakText").classList.toggle("len-m", !isEn && tlen >= 5 && tlen < 8);
    $("#speakText").classList.toggle("len-l", !isEn && tlen >= 8 && tlen < 12);
    $("#speakText").classList.toggle("len-xl", !isEn && tlen >= 12);
    var words = isEn ? item.text.trim().split(/\s+/).length : 0;
    $("#wordBtn").hidden = !(isEn && words >= 2);
    $("#slow2Btn").hidden = !isEn;
    $("#speakText").classList.toggle("len-en-m", isEn && words >= 4);
    $("#speakText").classList.toggle("len-en-l", isEn && words >= 7);
    $("#speakPyRow").hidden = !single;
    $("#speakPy").textContent = single ? pyText : "";
    var showZh = isEn && !!item.zh;
    $("#speakZhRow").hidden = !showZh;
    $("#speakSub").hidden = !showZh;
    $("#speakSub").textContent = showZh ? item.zh : "";
    $("#speakIpa").textContent = "";
    $("#speakIpa").hidden = true;
    $("#tipRow").hidden = !(!isEn && item.tip);
    $("#speakTip").textContent = (!isEn && item.tip) ? item.tip : "";
    $("#cardPrev").disabled = idx === 0;
    $("#cardNext").disabled = false;
    $("#speakChip").textContent = (entry.unit ? entry.unit.unit + " · " : "") + (idx + 1) + " / " + speakState.entries.length;
    $("#resultPanel").hidden = true;
    $("#playbackBox").hidden = true;
    $("#scoreReveal").hidden = true;
    $("#micZone").hidden = false;
    resetListen();
    $("#playMine").classList.remove("playing");
    pausePlayback();
    var soundItem = !isEn && (/^[a-zü]+$/i.test(item.text) || item.raw);
    $("#micHint").textContent = isEn ? "点话筒，读这个单词或句子"
      : (soundItem ? "点话筒，读这个音" : "点话筒，把这个字读出来");
    $("#micSub").textContent = "读完点一下话筒结束，超时会自动停";
    renderSpeakDots();
    syncVoiceFloat();
    clearTimeout(speakAutoTimer);
    speakAutoTimer = setTimeout(function () { if (speakState) playCurrent(); }, 260);
  }

  function playCurrent(slow) {
    if (!speakState) return;
    clearTimeout(speakAutoTimer);
    stopWordSequence();
    var item = speakState.entries[speakState.idx].item;
    say(speakState.entries[speakState.idx].id, item.text, speakState.lang, slow);
    var btn = slow === 2 ? $("#slow2Btn") : (slow ? $("#slowBtn") : $("#listenBtn"));
    btn.classList.add("playing");
    setTimeout(function () { btn.classList.remove("playing"); }, 1200);
  }

  function currentItem() {
    if (!speakState || !speakState.entries[speakState.idx]) return null;
    return speakState.entries[speakState.idx].item;
  }

  function clearListenTimers() {
    clearTimeout(listenTimer);
    clearInterval(listenTick);
    listenTimer = null;
    listenTick = null;
  }

  function resetListen() {
    clearListenTimers();
    captureSeq++;
    clearRecording();
    listenActive = false;
    listenSettled = true;
    lastInterim = "";
    try { if (recog) recog.abort(); } catch (err) {}
    try { stopCapture(); } catch (err) {}
    var btn = $("#micBtn");
    if (btn) btn.classList.remove("listening");
    var sub = $("#micSub");
    if (sub) sub.classList.remove("counting");
  }

  function listenDuration(text, lang) {
    if (lang.indexOf("en") === 0) {
      var words = text.trim().split(/\s+/).length;
      return words >= 7 ? 14 : (words >= 4 ? 10 : 6);
    }
    var chars = Array.from(text.replace(/[\s，。！？、；：,.!?;:"'“”‘’（）()]/g, "")).length;
    return chars >= 12 ? 14 : (chars >= 8 ? 12 : (chars >= 5 ? 9 : 7));
  }

  function startListenClock(seconds) {
    clearListenTimers();
    listenDeadline = Date.now() + seconds * 1000;
    $("#micSub").classList.add("counting");
    var tick = function () {
      var left = Math.max(0, Math.ceil((listenDeadline - Date.now()) / 1000));
      if (!listenActive) return;
      $("#micSub").textContent = left > 0
        ? "还剩 " + left + " 秒 · 读完点一下话筒结束"
        : "时间到，正在结算…";
    };
    tick();
    listenTick = setInterval(tick, 250);
    listenTimer = setTimeout(function () { stopListen(false); }, seconds * 1000 + 80);
  }

  function stopListen(manual) {
    if (!listenActive || listenSettled) return;
    listenActive = false;
    clearListenTimers();
    $("#micBtn").classList.remove("listening");
    $("#micSub").classList.remove("counting");
    $("#micHint").textContent = manual ? "好，正在结算…" : "时间到，正在结算…";
    var pending = lastHeard || lastInterim;
    var seq = listenSeq;
    try { if (recog) recog.stop(); } catch (err) {}
    setTimeout(function () {
      if (seq === listenSeq && !listenSettled) finishListen(pending ? [pending] : []);
    }, 900);
  }

  async function startListen() {
    if (!speakState) return;
    if (listenActive) { stopListen(true); return; }
    listenSeq++;
    var session = listenSeq;
    if (!SR) {
      $("#micHint").textContent = "这个浏览器不能打分";
      $("#micSub").textContent = /iPad|iPhone|iPod/.test(navigator.userAgent)
        ? "请在 iPad 设置 → 键盘 里打开“启用听写”，再用 Safari 试一次"
        : "请用 Chrome 打开，就能跟读打分";
      return;
    }
    if (location.protocol === "file:") {
      $("#micHint").textContent = "需要用启动脚本打开";
      $("#micSub").textContent = "本地文件不能录音，请用 localhost 或 https 网址打开";
      return;
    }
    resetListen();
    listenActive = true;
    listenSettled = false;
    lastHeard = "";
    lastInterim = "";
    $("#resultPanel").hidden = true;
    $("#micHint").textContent = "准备话筒…";
    $("#micSub").textContent = "第一次会弹出麦克风授权";
    await startCapture();
    if (!listenActive || !speakState) { stopCapture(); return; }
    var rec = new SR();
    recog = rec;
    rec.lang = speakState.lang;
    rec.interimResults = true;
    rec.continuous = false;
    rec.maxAlternatives = 5;

    rec.onstart = function () {
      if (session !== listenSeq || !listenActive) return;
      $("#micBtn").classList.add("listening");
      $("#micHint").textContent = "正在听…读完点话筒结束";
    };

    rec.onresult = function (ev) {
      if (session !== listenSeq || listenSettled) return;
      var interim = "";
      var alts = [];
      for (var i = ev.resultIndex; i < ev.results.length; i++) {
        var result = ev.results[i];
        if (result.isFinal) {
          for (var j = 0; j < result.length; j++) {
            alts.push(result[j].transcript);
          }
        } else {
          interim += result[0].transcript;
        }
      }
      if (interim) {
        lastInterim = interim;
        if (listenActive) $("#micHint").textContent = "听到：" + interim;
      }
      if (alts.length) {
        lastHeard = alts.join(" ");
        finishListen(alts);
      }
    };

    rec.onerror = function (ev) {
      if (session !== listenSeq || listenSettled) return;
      listenSettled = true;
      listenActive = false;
      clearListenTimers();
      $("#micBtn").classList.remove("listening");
      $("#micSub").classList.remove("counting");
      stopCapture();
      if (ev.error === "not-allowed" || ev.error === "service-not-allowed") {
        $("#micHint").textContent = "没有拿到话筒权限";
        $("#micSub").textContent = "点地址栏左边的小锁，把麦克风改成“允许”，再试一次";
      } else if (ev.error === "no-speech") {
        $("#micHint").textContent = "没听到声音";
        $("#micSub").textContent = "靠近一点，大声读出来";
      } else if (ev.error === "network") {
        $("#micHint").textContent = "识别需要联网";
        $("#micSub").textContent = "检查一下网络，或者先用「听一遍」";
      } else if (ev.error === "audio-capture") {
        $("#micHint").textContent = "没找到麦克风";
        $("#micSub").textContent = "检查系统声音设置里的输入设备";
      } else {
        $("#micHint").textContent = "这次没听清";
        $("#micSub").textContent = "再点一下话筒，重新读一遍";
      }
    };

    rec.onend = function () {
      if (session !== listenSeq || listenSettled) return;
      if (lastHeard || lastInterim) finishListen([lastHeard || lastInterim]);
      else stopListen(false);
    };

    try {
      rec.start();
      startListenClock(listenDuration(speakState.entries[speakState.idx].item.text, speakState.lang));
    } catch (err) {
      listenActive = false;
      listenSettled = true;
      clearListenTimers();
      $("#micHint").textContent = "话筒启动失败";
      $("#micSub").textContent = "刷新页面再试一次";
    }
  }

  function normalizeSay(text, lang) {
    if (lang.indexOf("en") === 0) {
      return text.toLowerCase().replace(/[^a-z0-9' ]/g, " ").replace(/'/g, "").replace(/\s+/g, " ").trim();
    }
    return text.replace(/[\s，。！？、；：,.!?;:"'“”‘’（）()]/g, "");
  }

  function scoreSay(target, heard, lang) {
    var isEn = lang.indexOf("en") === 0;
    var a = normalizeSay(target, lang);
    var b = normalizeSay(heard, lang);
    if (!b) return { ratio: 0, stars: 0 };
    var A = isEn ? a.split(" ") : Array.from(a);
    var B = isEn ? b.split(" ") : Array.from(b);
    var dp = [];
    for (var i = 0; i <= A.length; i++) { dp.push(new Array(B.length + 1).fill(0)); }
    for (var x = 1; x <= A.length; x++) {
      for (var y = 1; y <= B.length; y++) {
        dp[x][y] = A[x - 1] === B[y - 1] ? dp[x - 1][y - 1] + 1 : Math.max(dp[x - 1][y], dp[x][y - 1]);
      }
    }
    var lcs = dp[A.length][B.length];
    var recall = lcs / Math.max(1, A.length);
    var precision = lcs / Math.max(1, B.length);
    var ratio = recall * (precision > 0.45 ? 1 : 0.75);
    var stars = ratio >= 0.97 ? 3 : (ratio >= 0.62 ? 2 : (ratio >= 0.25 ? 1 : 0));
    return { ratio: ratio, stars: stars };
  }

  async function finishListen(alts) {
    if (!speakState || listenSettled) return;
    listenSettled = true;
    listenActive = false;
    clearListenTimers();
    $("#micSub").classList.remove("counting");
    var target = speakState.entries[speakState.idx].item.text;
    var best = { ratio: -1, stars: 0, text: alts[0] || "" };
    alts.forEach(function (alt) {
      var s = scoreSay(target, alt, speakState.lang);
      if (s.ratio > best.ratio) best = { ratio: s.ratio, stars: s.stars, text: alt };
    });
    await stopCapture();
    $("#micBtn").classList.remove("listening");
    $("#micZone").hidden = true;
    $("#resultPanel").hidden = false;
    $("#playbackBox").hidden = !lastRecUrl;
    $("#scoreBtn").hidden = true;
    $("#resultStars").innerHTML = best.stars > 0 ? starTag(best.stars) : starTag(0);
    var resultTitle = best.stars === 3 ? "读得真准！"
      : best.stars === 2 ? "很接近了，再清楚一点"
      : best.stars === 1 ? "再听一遍，跟着读"
      : (best.text ? "读得不一样，再听一遍" : "这次没听清");
    $("#resultTitle").textContent = resultTitle;
    setTimeout(function () {
      if (speakState.lang.indexOf("en") === 0) feedbackSay(best.stars >= 2, "en");
      else say("fb:" + resultTitle, resultTitle, "zh-CN");
    }, 220);
    $("#resultHeard").textContent = best.text ? "我听到的是：「" + best.text + "」" : "";
    if (best.stars > 0) {
      var id = speakState.entries[speakState.idx].id;
      var prev = state.read[id] || 0;
      if (best.stars > prev) state.read[id] = best.stars;
      if (!prev) {
        addStars(1);
        if (state.today.date !== todayStr()) state.today = { date: todayStr(), count: 0 };
        state.today.count++;
        sfx("correct");
      } else {
        sfx(best.stars >= 2 ? "correct" : "tap");
      }
      save();
      renderReadStats();
    } else {
      sfx("wrong");
    }
    if (lastRecUrl) {
      $("#scoreReveal").hidden = true;
      setTimeout(playMine, 1650);
      setTimeout(function () {
        $("#scoreReveal").hidden = false;
        $("#playHint").textContent = "再听一遍，点「标准音」对比一下";
      }, 2400);
    } else {
      $("#scoreReveal").hidden = false;
      $("#playHint").textContent = "这台设备没有录到声音";
    }
  }

  function nextSpeakItem() {
    if (!speakState) return;
    if (speakState.idx + 1 < speakState.entries.length) {
      loadSpeakItem(speakState.idx + 1);
    } else {
      var deck = speakState.deck;
      showCelebrate({
        title: "读完这一组啦！",
        text: "「" + deck.title + "」全部读完。可以再读一遍，或者回小书房看看星星。",
        stars: 0,
        nextLabel: "再读一遍",
        action: "replay"
      });
    }
  }

  /* ------------------------------------------------------------ print */

  function printBlankSheet() {
    var cells = "";
    for (var i = 0; i < 80; i++) cells += '<div class="ps-cell"></div>';
    $("#printSheet").innerHTML =
      '<div class="ps-head"><h1>田字格练习</h1>' +
      "<p>在格子里写今天在课本里读到的字。先看字形，再慢慢写；写字不求快，求笔顺对。</p></div>" +
      '<div class="ps-grid">' + cells + "</div>" +
      '<div class="ps-foot"><span>姓名：____________</span><span>日期：____________</span><span>家长签字：____________</span></div>';
    sfx("tap");
    setTimeout(function () { window.print(); }, 120);
  }

  /* ------------------------------------------------------------ wiring */

  function init() {
    document.addEventListener("click", function (ev) {
      var b = ev.target.closest ? ev.target.closest("[data-back]") : null;
      if (!b) return;
      sfx("tap");
      var screen = b.closest(".screen");
      goBackScreen(screen ? screen.id : openScreenId);
    });

    document.addEventListener("click", function (ev) {
      var t = ev.target;
      if (!t.closest || $("#s-textbook").hidden) return;
      var u = tbUnit();
      if (!u) return;
      var page = u.pages[tbPageIdx];
      if (!page) return;
      var activeLine = tbSheetLine >= 0 ? tbSheetLine : (tbLastLine || 0);
      var sheetClose = t.closest("[data-tb-sheet-close]");
      if (sheetClose) { sfx("tap"); closeTbSheet(); return; }
      var sheetNav = t.closest("[data-tb-sheet-nav]");
      if (sheetNav) {
        var delta = sheetNav.dataset.tbSheetNav === "next" ? 1 : -1;
        var nextLine = activeLine + delta;
        if (nextLine >= 0 && nextLine < page.lines.length) playLine(page, nextLine);
        else sfx("tap");
        return;
      }
      var sheetListen = t.closest("[data-tb-sheet-listen]");
      if (sheetListen) {
        if (tbSheetMode === "word") playTbSheetWord(false);
        else playLine(page, activeLine);
        return;
      }
      var sheetSlow = t.closest("[data-tb-sheet-slow]");
      if (sheetSlow) {
        if (tbSheetMode === "word") playTbSheetWord(true);
        else playLine(page, activeLine, false, true);
        return;
      }
      var sheetSlow2 = t.closest("[data-tb-sheet-slow2]");
      if (sheetSlow2) {
        if (tbSheetMode === "word") playTbSheetWord(2);
        else playLine(page, activeLine, false, 2);
        return;
      }
      var sheetWord = t.closest("[data-tb-sheet-word]");
      if (sheetWord) {
        sfx("tap");
        if (tbSheetMode === "word") playTbSheetWordByWord(tbGapMs());
        else playTbWordByWord(page, activeLine, tbGapMs());
        return;
      }
      var sheetZh = t.closest("[data-tb-sheet-zh]");
      if (sheetZh) {
        if (tbSheetMode === "word" && tbSheetWord) {
          sfx("tap");
          say(tbWordZhKey(tbSheetWord.w), tbSheetWord.zh, "zh-CN");
        } else {
          var sl = page.lines[activeLine];
          if (sl) { sfx("tap"); say(tbLineZhKey(page, activeLine), sl.zh, "zh-CN"); }
        }
        return;
      }
      var slowBtn = t.closest("[data-tb-slow]");
      if (slowBtn) { playLine(page, activeLine, false, true); return; }
      var wordPlay = t.closest("[data-tb-wordmode]");
      if (wordPlay) { sfx("tap"); playTbWordByWord(page, activeLine, tbGapMs()); return; }
      var line = t.closest("[data-tb-line]");
      if (line) {
        playLine(page, parseInt(line.dataset.tbLine, 10));
        return;
      }
      var zh = t.closest("[data-tb-zh]");
      if (zh) {
        var zi = parseInt(zh.dataset.tbZh, 10);
        var zl = page.lines[zi];
        if (zl) { sfx("tap"); say(tbLineZhKey(page, zi), zl.zh, "zh-CN"); }
        return;
      }
      var word = t.closest("[data-tb-word]");
      if (word) {
        var w = page.words.filter(function (x) { return x.w === word.dataset.tbWord; })[0] ||
          SPECIAL_TB_WORDS[word.dataset.tbWord];
        if (w) { sfx("tap"); openTbWordSheet(w); playTextbookWord(w.w, w.w, w.zh, false); }
        return;
      }
      var wzh = t.closest("[data-tb-word-zh]");
      if (wzh) {
        var wz = page.words.filter(function (x) { return x.w === wzh.dataset.tbWordZh; })[0] ||
          SPECIAL_TB_WORDS[wzh.dataset.tbWordZh];
        if (wz) { sfx("tap"); openTbWordSheet(wz); playTextbookWord(wz.w, wz.w, wz.zh, true); }
        return;
      }
      var tbt = t.closest("[data-tb-text]");
      if (tbt) {
        var tk = tbt.dataset.tbText;
        if (TB_TEXT[tk]) { sfx("tap"); say(tk, TB_TEXT[tk], "en-GB"); }
        return;
      }
      var nav = t.closest("[data-tb-nav]");
      if (nav) { tbNav(nav.dataset.tbNav === "next" ? 1 : -1); return; }
      var dot = t.closest("[data-tb-page]");
      if (dot) {
        var pi = parseInt(dot.dataset.tbPage, 10);
        if (!isNaN(pi)) { tbPageIdx = pi; renderTbPage(); sfx("tap"); }
        return;
      }
      var playAll = t.closest("[data-tb-playall]");
      if (playAll) {
        var keys = page.lines.map(function (_, i) { return tbLineKey(page, i); });
        sfx("tap");
        playSequence(keys, function () { flashToast($("#tbToast"), "整页听完啦，跟着读一遍吧"); });
        return;
      }
      var done = t.closest("[data-tb-done]");
      if (done) { markTbPageDone(page); return; }
    });

    $("#startRead").addEventListener("click", function () {
      sfx("tap");
      var entries = allReadingEntries();
      if (homeTab === "en" || homeTab === "zh") {
        entries = entries.filter(function (e) { return e.deck.subject === homeTab; });
      }
      var next = entries.filter(function (e) { return !state.read[e.id]; })[0] || entries[0];
      if (next.unit) {
        startDeck({
          id: next.unit.id,
          title: next.unit.title,
          sub: next.unit.zh,
          lang: next.unit.lang || "en-US",
          items: next.unit.items,
          unitLabel: next.unit.unit
        }, next.unit.items.indexOf(next.item));
      } else {
        startDeck(next.deck, next.deck.items.indexOf(next.item));
      }
    });

    $$("#homeTabs button").forEach(function (b) {
      b.addEventListener("click", function () {
        homeTab = b.dataset.homeTab;
        sfx("tap");
        renderHome();
      });
    });

    $$("[data-open-subject]").forEach(function (b) {
      b.addEventListener("click", function () {
        sfx("tap");
        openSubject(b.dataset.openSubject);
      });
    });

    var gotoChinese = $("#gotoChinese");
    if (gotoChinese) gotoChinese.addEventListener("click", function () {
      sfx("tap");
      openSubject("zh");
    });

    var gotoEnglish = $("#gotoEnglish");
    if (gotoEnglish) gotoEnglish.addEventListener("click", function () {
      sfx("tap");
      openSubject("en");
    });

    $("#tbImageToggle").addEventListener("click", function () {
      state.tbImages = !state.tbImages;
      save();
      sfx("tap");
      syncTbImageToggle();
      if (openScreenId === "s-textbook") renderTbPage();
    });

    var tbFitTimer = null;
    window.addEventListener("resize", function () {
      if (openScreenId !== "s-textbook") return;
      clearTimeout(tbFitTimer);
      tbFitTimer = setTimeout(fitTbBook, 120);
    });

    $$("#subjectTabs button").forEach(function (b) {
      b.addEventListener("click", function () {
        sfx("tap");
        openSubject(b.dataset.subject);
      });
    });

    $("#listenBtn").addEventListener("click", function () {
      sfx("tap");
      playCurrent(false);
    });
    $("#wordBtn").addEventListener("click", function () {
      sfx("tap");
      playWordByWord();
    });
    $("#slowBtn").addEventListener("click", function () {
      sfx("tap");
      playCurrent(true);
    });
    $("#slow2Btn").addEventListener("click", function () {
      sfx("tap");
      playCurrent(2);
    });
    $("#tipBtn").addEventListener("click", function () {
      var item = currentItem();
      if (!item || !item.tip) return;
      sfx("tap");
      say("tip:" + item.tip, item.tip, "zh-CN");
    });
    $("#zhBtn").addEventListener("click", function () {
      var item = currentItem();
      if (!item || !item.zh) return;
      sfx("tap");
      say("zh:" + item.zh, item.zh, "zh-CN");
    });
    $("#cardPrev").addEventListener("click", function () {
      if (!speakState || speakState.idx <= 0) return;
      sfx("tap");
      loadSpeakItem(speakState.idx - 1);
    });
    $("#cardNext").addEventListener("click", function () {
      sfx("tap");
      nextSpeakItem();
    });
    $("#pickStart").addEventListener("click", function () {
      if (!pickDeck) return;
      sfx("tap");
      startDeck(pickDeck, 0, { screen: "s-pick", deck: pickDeck });
    });
    $("#speakImg").addEventListener("click", function () { playCurrent(false); });
    $("#micBtn").addEventListener("click", function () { startListen(); });
    $("#retryBtn").addEventListener("click", function () {
      $("#resultPanel").hidden = true;
      $("#micZone").hidden = false;
      $("#micHint").textContent = "再来一次，慢慢读";
      $("#micSub").textContent = "读完点一下话筒结束，超时会自动停";
      sfx("tap");
      startListen();
    });
    $("#playMine").addEventListener("click", function () { playMine(); });
    $("#playModel").addEventListener("click", function () {
      try { $("#myVoice").pause(); } catch (e) {}
      $("#playMine").classList.remove("playing");
      playCurrent();
    });
    $("#nextSpeakBtn").addEventListener("click", function () {
      sfx("tap");
      nextSpeakItem();
    });
    $("#printBtn").addEventListener("click", printBlankSheet);

    $("#soundBtn").addEventListener("click", function () {
      state.sound = !state.sound;
      if (state.sound) sfx("correct");
      save();
      syncSoundIcon();
    });

    $("#settingsBtn").addEventListener("click", function () {
      $("#settingsModal").hidden = false;
      syncSoundIcon();
    });
    $("#modalClose").addEventListener("click", function () { $("#settingsModal").hidden = true; });
    $("#settingsModal").addEventListener("click", function (ev) {
      if (ev.target === $("#settingsModal")) $("#settingsModal").hidden = true;
    });

    $("#soundSwitch").addEventListener("click", function () {
      state.sound = !state.sound;
      save();
      syncSoundIcon();
      if (state.sound) sfx("correct");
    });
    $("#speakSwitch").addEventListener("click", function () {
      state.speak = !state.speak;
      if (!state.speak) cancelSpeech();
      save();
      syncSoundIcon();
    });

    $("#volumeRange").addEventListener("input", function (ev) {
      state.volume = Math.min(1, Math.max(0.2, parseFloat(ev.target.value) / 100));
      applyVolume();
      syncSettingsUI();
      save();
    });

    $("#volumeTest").addEventListener("click", function () {
      sfx("tap");
      say("praise:真棒！", "真棒！", "zh-CN");
    });

    $$("#slowSeg button").forEach(function (b) {
      b.addEventListener("click", function () {
        state.slowRate = parseFloat(b.dataset.rate) || 0.72;
        save();
        syncSettingsUI();
        sfx("tap");
      });
    });

    $$("#voiceSeg button").forEach(function (b) {
      b.addEventListener("click", function () {
        state.enVoice = b.dataset.voice || "sonia";
        save();
        syncSettingsUI();
        sfx("tap");
      });
    });

    $$("#zhVoiceSeg button").forEach(function (b) {
      b.addEventListener("click", function () {
        state.zhVoice = b.dataset.zhVoice || "xiaoxiao";
        save();
        syncSettingsUI();
        sfx("tap");
      });
    });
    $("#zhVoiceTest").addEventListener("click", function () {
      sfx("tap");
      say("praise:真棒！", "真棒！", "zh-CN");
    });

    $("#voiceFloat").addEventListener("click", function (ev) {
      var b = ev.target.closest("button[data-vf],button[data-zhvf],button[data-pyvf]");
      if (!b) return;
      if (b.dataset.pyvf) state.pyVoice = b.dataset.pyvf;
      else if (b.dataset.zhvf) state.zhVoice = b.dataset.zhvf;
      else state.enVoice = b.dataset.vf || "sonia";
      save();
      syncSettingsUI();
      syncVoiceFloat();
      sfx("tap");
      if (openScreenId === "s-speak" && speakState) {
        playCurrent(false);
      } else if (openScreenId === "s-textbook") {
        var u = tbUnit();
        var page = u && u.pages[tbPageIdx];
        if (page) playLine(page, tbLastLine || 0, true);
      } else if (openScreenId === "s-pinyin-drill" && drillLastKey) {
        say(drillLastKey, drillLastText, "zh-CN");
      } else if (openScreenId === "s-pinyin-quiz" && pqState) {
        var pqItem = pqState.items[pqState.idx];
        if (pqItem) say(pqItem.key, pqItem.py || pqItem.label, "zh-CN");
      } else if (openScreenId === "s-tone-quiz" && tqState) {
        var tqItem = tqState.items[tqState.idx];
        if (tqItem) say(tqItem.key, tqItem.ch, "zh-CN");
      } else if (openScreenId === "s-blend-quiz" && bqState) {
        var bqItem = bqState.items[bqState.idx];
        if (bqItem) say(bqItem.key, bqItem.py, "zh-CN");
      } else if (openScreenId === "s-alphabet") {
        say("en-alphabet:a", "a", "en-GB");
      } else if (openScreenId === "s-en-quiz" && eqState) {
        var eqItem = eqState.items[eqState.idx];
        if (eqItem) enQuizSpeak(eqItem);
      }
    });

    $("#voiceTest").addEventListener("click", function () {
      sfx("tap");
      say("en-u1:0", "Hello!", "en-GB");
    });

    $("#resetBtn").addEventListener("click", function () {
      if (window.confirm("要清空所有星星和写字记录吗？清空后不能恢复。")) {
        state = blankState();
        save();
        currentDay = 1;
        $("#settingsModal").hidden = true;
        renderHome();
      }
    });

    $("#speakQuestion").addEventListener("click", function () {
      var item = readState && readState.items[readState.idx];
      if (item) say("q:" + item.q, item.q, "zh-CN");
    });

    $("#pqSpeaker").addEventListener("click", function () {
      if (!pqState) return;
      var item = pqState.items[pqState.idx];
      say(item.key, item.py || item.label, "zh-CN");
    });
    $("#pqNext").addEventListener("click", nextPinyinQuiz);
    $("#pqOptions").addEventListener("click", function (ev) {
      var b = ev.target.closest("[data-pq-opt]");
      if (b) answerPinyinQuiz(b);
    });
    $("#pqTabs").addEventListener("click", function (ev) {
      var b = ev.target.closest("[data-pq-tab]");
      if (!b || b.classList.contains("on")) return;
      sfx("tap");
      if (b.dataset.pqTab === "blend") startBlendQuiz();
      else startPinyinQuiz();
    });
    $("#bqTabs").addEventListener("click", function (ev) {
      var b = ev.target.closest("[data-pq-tab]");
      if (!b || b.classList.contains("on")) return;
      sfx("tap");
      if (b.dataset.pqTab === "syllable") startPinyinQuiz();
      else startBlendQuiz();
    });
    $("#tqOptions").addEventListener("click", function (ev) {
      var b = ev.target.closest("[data-tq-tone]");
      if (b) answerToneQuiz(b);
    });
    $("#tqPlay").addEventListener("click", playToneQuizItem);
    $("#tqNext").addEventListener("click", nextToneQuiz);
    $("#bqSpeaker").addEventListener("click", function () {
      if (!bqState) return;
      var item = bqState.items[bqState.idx];
      say(item.key, item.py, "zh-CN");
    });
    $("#bqOptions").addEventListener("click", function (ev) {
      var b = ev.target.closest("[data-bq-opt]");
      if (b) answerBlendQuiz(b);
    });
    $("#bqReadBtn").addEventListener("click", startBlendRead);
    $("#bqPlayMine").addEventListener("click", function () {
      if (!bqRecUrl) return;
      try {
        var a = new Audio(bqRecUrl);
        a.play();
      } catch (err) {}
    });
    $("#bqNext").addEventListener("click", nextBlendQuiz);
    $("#alphabetQuizStart").addEventListener("click", function () { startEnglishQuiz("alphabet", "s-alphabet"); });
    $("#eqSpeaker").addEventListener("click", function () {
      if (!eqState) return;
      enQuizSpeak(eqState.items[eqState.idx]);
    });
    $("#eqOptions").addEventListener("click", function (ev) {
      var b = ev.target.closest("[data-eq-opt]");
      if (b) answerEnglishQuiz(b);
    });
    $("#eqNext").addEventListener("click", nextEnglishQuiz);
    $("#drillTonebar").addEventListener("click", function (ev) {
      var b = ev.target.closest("[data-drill-tone]");
      if (!b) return;
      drillTone = parseInt(b.dataset.drillTone, 10) || 1;
      sfx("tap");
      renderPinyinDrill();
    });
    $("#drillTabs").addEventListener("click", function (ev) {
      var b = ev.target.closest("[data-drill-tab]");
      if (!b) return;
      sfx("tap");
      setDrillTab(b.dataset.drillTab);
    });
    $("#drillGroups").addEventListener("click", function (ev) {
      var b = ev.target.closest("[data-drill-key]");
      if (!b) return;
      sfx("tap");
      drillLastKey = b.dataset.drillKey;
      drillLastText = b.dataset.drillText;
      b.classList.add("on");
      setTimeout(function () { b.classList.remove("on"); }, 700);
      say(b.dataset.drillKey, b.dataset.drillText, "zh-CN");
    });
    $("#spellInitial").addEventListener("change", function (ev) {
      spellState.initial = ev.target.value;
      updateSpell();
    });
    $("#spellFinal").addEventListener("change", function (ev) {
      spellState.final = ev.target.value;
      updateSpell();
    });
    $("#spellTonebar").addEventListener("click", function (ev) {
      var b = ev.target.closest("[data-spell-tone]");
      if (!b) return;
      spellState.tone = parseInt(b.dataset.spellTone, 10) || 1;
      sfx("tap");
      updateSpell();
    });
    $("#spellPlay").addEventListener("click", function () {
      sfx("tap");
      playSpell();
    });
    $("#spellRandom").addEventListener("click", function () {
      sfx("tap");
      randomSpell();
    });
    document.addEventListener("click", function (ev) {
      var again = ev.target.closest("[data-quiz-again]");
      if (again) {
        if (again.dataset.quizAgain === "pq") startPinyinQuiz();
        else if (again.dataset.quizAgain === "bq") startBlendQuiz();
        else if (again.dataset.quizAgain === "eq") startEnglishQuiz(eqState ? eqState.mode : "alphabet");
        else startToneQuiz();
        return;
      }
      if (ev.target.closest("[data-quiz-home]")) goHome();
    });

    $("#celebrateNext").addEventListener("click", function () {
      var action = celebrateAction;
      var back = celebrateBack || gameReturn;
      hideCelebrate();
      if (action === "replay" && speakState && speakState.deck) {
        startDeck(speakState.deck, 0, speakReturn);
      } else if (action === "back") {
        openSubject((back && back.subject) || "zh");
      } else {
        openNext();
      }
    });
    $("#celebrateHome").addEventListener("click", function () {
      hideCelebrate();
      goHome();
    });

    $("#starChip").addEventListener("click", function () {
      sfx("tap");
      openStarModal();
    });

    $("#starModalClose").addEventListener("click", closeStarModal);
    $("#starModalOk").addEventListener("click", closeStarModal);
    $("#starModal").addEventListener("click", function (ev) {
      if (ev.target === this) closeStarModal();
    });

    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") {
        if (!$("#starModal").hidden) { closeStarModal(); return; }
        if (!$("#settingsModal").hidden) { $("#settingsModal").hidden = true; return; }
        if (!$("#celebrate").hidden) { hideCelebrate(); goHome(); return; }
        if (openScreenId) goBackScreen(openScreenId);
      }
    });

    probeTextbookImages();
    lockZoom();
    try { renderHome(); } catch (err) { showFatal(err); }
    if (window.requestIdleCallback) {
      requestIdleCallback(warmResources, { timeout: 1600 });
    } else {
      setTimeout(warmResources, 900);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
