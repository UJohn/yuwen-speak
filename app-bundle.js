/* 一年级上册 · 语文 · 第 12 周
   内容依据《现代汉语通用字笔顺规范》与人教一上会写字表。 */

window.PY = {
  "一": "yī", "二": "èr", "十": "shí", "山": "shān", "大": "dà", "手": "shǒu",
  "人": "rén", "天": "tiān", "木": "mù", "八": "bā", "火": "huǒ", "小": "xiǎo",
  "六": "liù", "下": "xià", "少": "shǎo", "点": "diǎn", "口": "kǒu", "日": "rì",
  "中": "zhōng", "目": "mù", "四": "sì", "三": "sān", "王": "wáng", "土": "tǔ",
  "正": "zhèng", "上": "shàng", "田": "tián", "禾": "hé", "本": "běn", "水": "shuǐ"
};

/* 每个字的笔画名称，顺序与笔顺一致 */
window.STROKE_NAMES = {
  "一": ["横"],
  "二": ["横", "横"],
  "十": ["横", "竖"],
  "人": ["撇", "捺"],
  "大": ["横", "撇", "捺"],
  "天": ["横", "横", "撇", "捺"],
  "小": ["竖钩", "撇", "点"],
  "六": ["点", "横", "撇", "点"],
  "下": ["横", "竖", "点"],
  "口": ["竖", "横折", "横"],
  "日": ["竖", "横折", "横", "横"],
  "中": ["竖", "横折", "横", "竖"],
  "三": ["横", "横", "横"],
  "王": ["横", "横", "竖", "横"],
  "土": ["横", "竖", "横"],
  "田": ["竖", "横折", "横", "竖", "横"],
  "目": ["竖", "横折", "横", "横", "横"],
  "四": ["竖", "横折", "撇", "竖弯", "横"],
  "木": ["横", "竖", "撇", "捺"],
  "禾": ["撇", "横", "竖", "撇", "捺"],
  "手": ["撇", "横", "横", "竖钩"],
  "山": ["竖", "竖折", "竖"],
  "八": ["撇", "捺"],
  "火": ["点", "撇", "撇", "捺"],
  "少": ["竖", "撇", "点", "撇"],
  "水": ["竖钩", "横撇", "撇", "捺"]
};

window.CONTENT = {
  weekLabel: "第 12 周",
  weekRange: "11月16日 — 11月22日",
  focus: "基本笔画与独体字笔顺",
  days: [
    {
      no: 1,
      unit: "写字起步",
      title: "认识田字格 · 横和竖",
      pinyin: [
        ["yī", "一"], ["èr", "二"], ["shí", "十"],
        ["shān", "山"], ["dà", "大"], ["shǒu", "手"]
      ],
      write: ["一", "二", "十"],
      writeTip: "「一」写在横中线上；「十」的竖压在竖中线上。",
      strokeTip: "横要平，稍微向右上斜一点；竖要直，像小树干。",
      read: [
        { q: "上面一横短，下面一横长。", ans: "二", opts: ["二", "三"], why: "两横是「二」，三横才是「三」。" },
        { q: "一横一竖，交叉在一起。", ans: "十", opts: ["十", "土"], why: "「十」只有一横一竖；「土」下面还多一横。" },
        { q: "三横一竖，竖在正中间。", ans: "王", opts: ["王", "土"], why: "三横一竖是「王」，两横一竖是「土」。" }
      ]
    },
    {
      no: 2,
      unit: "写字起步",
      title: "撇和捺 · 舒展才好看",
      pinyin: [
        ["rén", "人"], ["dà", "大"], ["tiān", "天"],
        ["mù", "木"], ["bā", "八"], ["huǒ", "火"]
      ],
      write: ["人", "大", "天"],
      writeTip: "「人」的撇捺像两条腿，左右分开站稳；「大」的横要短，撇捺要长。",
      strokeTip: "撇像小滑梯，从右上滑到左下；捺最后轻轻顿一下再抬起来，出个小脚。",
      read: [
        { q: "上面一横，下面一个「人」。", ans: "大", opts: ["大", "天"], why: "一横加「人」就是「大」。「天」头上是两横。" },
        { q: "「大」字头上多一横。", ans: "天", opts: ["天", "大"], why: "「大」加一横，变成「天」。" },
        { q: "两撇一捺，像树枝分开。", ans: "木", opts: ["木", "禾"], why: "「木」是横、竖、撇、捺；「禾」头上多一撇。" }
      ]
    },
    {
      no: 3,
      unit: "写字起步",
      title: "点和提 · 小笔画大作用",
      pinyin: [
        ["xiǎo", "小"], ["liù", "六"], ["xià", "下"],
        ["shǎo", "少"], ["diǎn", "点"], ["shuǐ", "水"]
      ],
      write: ["小", "六", "下"],
      writeTip: "「小」的竖钩在竖中线上，两点左右分开；「下」的点要落在竖的右边。",
      strokeTip: "点像小雨滴，轻轻落笔往右下按；提是从左下往右上快速挑起来。",
      read: [
        { q: "一横，下面一个「八」。", ans: "六", opts: ["六", "八"], why: "「六」是点、横、撇、点，下面分开像「八」。" },
        { q: "「小」字上面少一撇。", ans: "少", opts: ["少", "小"], why: "「小」加一撇，就是「少」。" },
        { q: "一横一竖一点，点在下面。", ans: "下", opts: ["下", "上"], why: "点在竖的右边是「下」；「上」的横在下面。" }
      ]
    },
    {
      no: 4,
      unit: "写字起步",
      title: "横折和竖钩 · 转折要顿笔",
      pinyin: [
        ["kǒu", "口"], ["rì", "日"], ["zhōng", "中"],
        ["mù", "目"], ["sì", "四"], ["shān", "山"]
      ],
      write: ["口", "日", "中"],
      writeTip: "「口」上宽下窄一点点，别写成正方形；「日」比「口」窄，里面一横贴左边。",
      strokeTip: "横折的拐弯处要停一下再往下，不能画成圆圈；竖钩到底要向左上轻轻出钩。",
      read: [
        { q: "「口」里加一横。", ans: "日", opts: ["日", "目"], why: "「口」里一横是「日」，两横是「目」。" },
        { q: "「日」里再加一横。", ans: "目", opts: ["目", "日"], why: "「日」里两横，就变成「目」。" },
        { q: "「口」中间一竖穿过。", ans: "中", opts: ["中", "口"], why: "一竖从「口」中间穿过去，就是「中」。" }
      ]
    },
    {
      no: 5,
      unit: "笔顺规则",
      title: "从上到下 · 从左到右",
      pinyin: [
        ["sān", "三"], ["wáng", "王"], ["tǔ", "土"],
        ["zhèng", "正"], ["shàng", "上"], ["xià", "下"]
      ],
      write: ["三", "王", "土"],
      writeTip: "「三」三横的长短不一样：中间最短，下面最长；「王」的竖压在竖中线上。",
      strokeTip: "两条规则：从上到下、从左到右。「三」先上后下；「王」三横写完，最后写竖。",
      read: [
        { q: "「十」先写哪一笔？", ans: "先横后竖", opts: ["先横后竖", "先竖后横"], why: "「十」先横后竖，这是基本规则。" },
        { q: "「人」先写哪一笔？", ans: "先撇后捺", opts: ["先撇后捺", "先捺后撇"], why: "「人」先撇后捺，撇在左边，先写。" },
        { q: "「三」从哪边开始写？", ans: "从上到下", opts: ["从上到下", "从下到上"], why: "「三」三横，从上往下写。" }
      ]
    },
    {
      no: 6,
      unit: "笔顺规则",
      title: "先里头后封口 · 半包围",
      pinyin: [
        ["tián", "田"], ["mù", "目"], ["sì", "四"],
        ["rì", "日"], ["zhōng", "中"], ["kǒu", "口"]
      ],
      write: ["田", "目", "四"],
      writeTip: "「田」的横竖都要压在横中线和竖中线上；「四」的框要扁一些。",
      strokeTip: "先里头后封口：「日」先写外面的框，再写里面的横，最后一横封口。",
      read: [
        { q: "「田」的最后一笔是什么？", ans: "横（封口）", opts: ["横（封口）", "竖"], why: "「田」最后一横把口封上，先里头后封口。" },
        { q: "「小」先写哪一笔？", ans: "中间的竖钩", opts: ["中间的竖钩", "左边的点"], why: "「小」先中间后两边，竖钩最先写。" },
        { q: "「日」里面的一横，什么时候写？", ans: "封口之前", opts: ["封口之前", "封口之后"], why: "先写里面的横，最后才封口，不然写不进去。" }
      ]
    },
    {
      no: 7,
      unit: "综合复习",
      title: "本周总复习 · 易错集中练",
      pinyin: [
        ["mù", "木"], ["hé", "禾"], ["běn", "本"],
        ["shǒu", "手"], ["huǒ", "火"], ["shān", "山"]
      ],
      write: ["木", "禾", "手"],
      writeTip: "「木」的撇捺从横竖交叉处分开；「禾」比「木」头上多一撇；「手」的竖钩要弯一点。",
      strokeTip: "八种笔画今天都见过了。盖住名字，看笔画说名称，说不出来的翻回前几天再看看。",
      read: [
        { q: "「木」字头上多一撇。", ans: "禾", opts: ["禾", "木"], why: "「木」头上加一撇，就是「禾」。" },
        { q: "「木」字下面多一横。", ans: "本", opts: ["本", "木"], why: "「木」下面加一横，就是「本」。" },
        { q: "三横一竖钩，最后一笔是钩。", ans: "手", opts: ["手", "毛"], why: "「手」是三横加竖钩；「毛」的弯钩更长。" }
      ]
    }
  ]
};

/* 课本拓展练习池：拼音找朋友 + 认字小侦探 */
window.EXTRA_PRACTICE = {"pinyin":[["tiān","天"],["dì","地"],["rén","人"],["nǐ","你"],["wǒ","我"],["tā","他"],["shān","山"],["shuǐ","水"],["huǒ","火"],["tián","田"],["hé","禾"],["miáo","苗"],["niǎo","鸟"],["yú","鱼"],["chóng","虫"],["huā","花"],["cǎo","草"],["mù","木"],["lín","林"],["sēn","森"],["shàng","上"],["xià","下"],["zuǒ","左"],["yòu","右"],["dà","大"],["xiǎo","小"],["duō","多"],["shǎo","少"],["bà","爸"],["mā","妈"],["yé","爷"],["nǎi","奶"],["gē","哥"],["jiě","姐"],["mèi","妹"],["nán","男"],["nǚ","女"],["lǎo","老"],["zǎo","早"],["wǎn","晚"],["chūn","春"],["qiū","秋"],["dōng","冬"],["fēng","风"],["yǔ","雨"],["xuě","雪"],["yún","云"],["diàn","电"],["guāng","光"],["shēng","声"],["yīn","音"],["mén","门"],["chuāng","窗"],["zhuō","桌"],["yǐ","椅"],["shū","书"],["běn","本"],["bǐ","笔"],["chǐ","尺"],["xiàng","橡"]],"read":[{"q":"“tiān” 是下面哪个字？","ans":"天","opts":["天","我","山"],"why":"“天” 读 tiān。"},{"q":"“dì” 是下面哪个字？","ans":"地","opts":["苗","木","地"],"why":"“地” 读 dì。"},{"q":"“rén” 是下面哪个字？","ans":"人","opts":["人","爸","林"],"why":"“人” 读 rén。"},{"q":"“nǐ” 是下面哪个字？","ans":"你","opts":["小","你","晚"],"why":"“你” 读 nǐ。"},{"q":"“wǒ” 是下面哪个字？","ans":"我","opts":["苗","哥","我"],"why":"“我” 读 wǒ。"},{"q":"“tā” 是下面哪个字？","ans":"他","opts":["左","他","晚"],"why":"“他” 读 tā。"},{"q":"“shān” 是下面哪个字？","ans":"山","opts":["山","水","姐"],"why":"“山” 读 shān。"},{"q":"“shuǐ” 是下面哪个字？","ans":"水","opts":["虫","我","水"],"why":"“水” 读 shuǐ。"},{"q":"“huǒ” 是下面哪个字？","ans":"火","opts":["火","草","下"],"why":"“火” 读 huǒ。"},{"q":"“tián” 是下面哪个字？","ans":"田","opts":["爸","田","少"],"why":"“田” 读 tián。"},{"q":"“hé” 是下面哪个字？","ans":"禾","opts":["早","男","禾"],"why":"“禾” 读 hé。"},{"q":"“miáo” 是下面哪个字？","ans":"苗","opts":["田","苗","人"],"why":"“苗” 读 miáo。"},{"q":"“niǎo” 是下面哪个字？","ans":"鸟","opts":["鸟","田","下"],"why":"“鸟” 读 niǎo。"},{"q":"“yú” 是下面哪个字？","ans":"鱼","opts":["木","哥","鱼"],"why":"“鱼” 读 yú。"},{"q":"“chóng” 是下面哪个字？","ans":"虫","opts":["虫","你","大"],"why":"“虫” 读 chóng。"},{"q":"“huā” 是下面哪个字？","ans":"花","opts":["奶","花","虫"],"why":"“花” 读 huā。"},{"q":"“cǎo” 是下面哪个字？","ans":"草","opts":["多","早","草"],"why":"“草” 读 cǎo。"},{"q":"“mù” 是下面哪个字？","ans":"木","opts":["老","木","他"],"why":"“木” 读 mù。"},{"q":"“lín” 是下面哪个字？","ans":"林","opts":["林","鸟","火"],"why":"“林” 读 lín。"},{"q":"“sēn” 是下面哪个字？","ans":"森","opts":["上","上","森"],"why":"“森” 读 sēn。"},{"q":"“地” 读什么？","ans":"dì","opts":["dì","tā","nǐ"],"why":"“地” 读 dì。"},{"q":"“我” 读什么？","ans":"wǒ","opts":["huǒ","chóng","wǒ"],"why":"“我” 读 wǒ。"},{"q":"“水” 读什么？","ans":"shuǐ","opts":["shuǐ","yú","yòu"],"why":"“水” 读 shuǐ。"},{"q":"“禾” 读什么？","ans":"hé","opts":["gē","hé","lín"],"why":"“禾” 读 hé。"},{"q":"“鱼” 读什么？","ans":"yú","opts":["dì","yòu","yú"],"why":"“鱼” 读 yú。"},{"q":"“草” 读什么？","ans":"cǎo","opts":["bà","cǎo","hé"],"why":"“草” 读 cǎo。"},{"q":"“森” 读什么？","ans":"sēn","opts":["sēn","shàng","jiě"],"why":"“森” 读 sēn。"},{"q":"“左” 读什么？","ans":"zuǒ","opts":["zǎo","mā","zuǒ"],"why":"“左” 读 zuǒ。"},{"q":"“小” 读什么？","ans":"xiǎo","opts":["xiǎo","nǐ","zǎo"],"why":"“小” 读 xiǎo。"},{"q":"“爸” 读什么？","ans":"bà","opts":["shuǐ","bà","huǒ"],"why":"“爸” 读 bà。"},{"q":"“奶” 读什么？","ans":"nǎi","opts":["cǎo","yú","nǎi"],"why":"“奶” 读 nǎi。"},{"q":"“妹” 读什么？","ans":"mèi","opts":["lín","mèi","xiǎo"],"why":"“妹” 读 mèi。"},{"q":"“老” 读什么？","ans":"lǎo","opts":["lǎo","mèi","yòu"],"why":"“老” 读 lǎo。"},{"q":"“天” 读什么？","ans":"tiān","opts":["mā","tā","tiān"],"why":"“天” 读 tiān。"},{"q":"“你” 读什么？","ans":"nǐ","opts":["nǐ","mèi","chóng"],"why":"“你” 读 nǐ。"},{"q":"“山” 读什么？","ans":"shān","opts":["yòu","shān","wǎn"],"why":"“山” 读 shān。"},{"q":"“田” 读什么？","ans":"tián","opts":["gē","wǒ","tián"],"why":"“田” 读 tián。"},{"q":"“鸟” 读什么？","ans":"niǎo","opts":["tián","niǎo","dì"],"why":"“鸟” 读 niǎo。"},{"q":"“花” 读什么？","ans":"huā","opts":["huā","hé","chóng"],"why":"“花” 读 huā。"},{"q":"“林” 读什么？","ans":"lín","opts":["shàng","shàng","lín"],"why":"“林” 读 lín。"}]};

/* 朗读内容 · 一年级小书房
   语文：人教部编版一年级上册，8 个课本单元 + 拼音/词语/句子专项
   英语：广州版《英语口语》一年级第一册（广州市教育研究院编）
   说明：英语词句按课本单元主题与词汇表整理；插图为本项目原创绘制，不使用课本原图。 */

window.SPEAK_SUBJECTS = [
  {
    "id": "zh",
    "name": "语文",
    "mark": "语",
    "en": "CHINESE",
    "sub": "识字 · 拼音 · 8 个课本单元",
    "color": "mint"
  },
  {
    "id": "en",
    "name": "英语",
    "mark": "EN",
    "en": "ENGLISH",
    "sub": "广州版口语 · 6 单元 · 读课文 · 单词句子",
    "color": "lilac"
  }
];

window.SPEAK_DECKS = [
  {
    id: "pinyin",
    subject: "zh",
    tag: "PINYIN",
    title: "拼音音节",
    sub: "看拼音，把字读出来",
    lang: "zh-CN",
    color: "mint",
    items: [
      { "text": "一", "py": "yī", "tip": "一声，读得又平又长" },
      { "text": "二", "py": "èr", "tip": "四声，干脆往下落" },
      { "text": "三", "py": "sān", "tip": "平舌音 s，舌尖靠前" },
      { "text": "十", "py": "shí", "tip": "翘舌音 sh，舌头往后卷" },
      { "text": "人", "py": "rén", "tip": "r 是翘舌音，不要读成 l" },
      { "text": "大", "py": "dà", "tip": "四声，读得短一点" },
      { "text": "天", "py": "tiān", "tip": "三拼音节 t-i-an，中间的 i 要快" },
      { "text": "山", "py": "shān", "tip": "翘舌音 sh，加前鼻音 an" },
      { "text": "手", "py": "shǒu", "tip": "三声，先降后升" },
      { "text": "口", "py": "kǒu", "tip": "三声，读满再收" },
      { "text": "日", "py": "rì", "tip": "翘舌音 r，四声" },
      { "text": "目", "py": "mù", "tip": "四声，嘴巴收圆" },
      { "text": "中", "py": "zhōng", "tip": "翘舌音 zh，后鼻音 ong" },
      { "text": "田", "py": "tián", "tip": "前鼻音 an，舌尖抵上牙床" },
      { "text": "水", "py": "shuǐ", "tip": "翘舌音 sh，三声" },
      { "text": "火", "py": "huǒ", "tip": "三声，先降后升" },
      { "text": "小", "py": "xiǎo", "tip": "三声，读满" },
      { "text": "上", "py": "shàng", "tip": "翘舌音 sh，后鼻音 ang" },
      { "text": "下", "py": "xià", "tip": "四声，短而干脆" },
      { "text": "王", "py": "wáng", "tip": "后鼻音 ang，声音送到鼻腔" }
    ]
  },
  {
    id: "words",
    subject: "zh",
    tag: "CIYU",
    title: "词语连读",
    sub: "两个字的词，读连贯",
    lang: "zh-CN",
    color: "butter",
    items: [
      { "text": "大人", "py": "dà rén" },
      { "text": "天上", "py": "tiān shàng" },
      { "text": "口水", "py": "kǒu shuǐ" },
      { "text": "木耳", "py": "mù ěr" },
      { "text": "小手", "py": "xiǎo shǒu" },
      { "text": "火山", "py": "huǒ shān" },
      { "text": "日子", "py": "rì zi" },
      { "text": "中午", "py": "zhōng wǔ" },
      { "text": "田地", "py": "tián dì" },
      { "text": "上山", "py": "shàng shān" },
      { "text": "下山", "py": "xià shān" },
      { "text": "大小", "py": "dà xiǎo" },
      { "text": "多少", "py": "duō shǎo" },
      { "text": "半天", "py": "bàn tiān" },
      { "text": "禾苗", "py": "hé miáo" }
    ]
  },
  {
    id: "sentences",
    subject: "zh",
    tag: "JUZI",
    title: "句子朗读",
    sub: "读完一句，意思就懂了",
    lang: "zh-CN",
    color: "pink",
    items: [
      { "text": "我是小学生。", "py": "wǒ shì xiǎo xué shēng" },
      { "text": "天上有太阳。", "py": "tiān shàng yǒu tài yáng" },
      { "text": "小马在草地上跑。", "py": "xiǎo mǎ zài cǎo dì shàng pǎo" },
      { "text": "妈妈给我买了一本新书。", "py": "mā ma gěi wǒ mǎi le yì běn xīn shū" },
      { "text": "我们一起去上学。", "py": "wǒ men yì qǐ qù shàng xué" },
      { "text": "我爱我的家。", "py": "wǒ ài wǒ de jiā" },
      { "text": "秋天到了，树叶黄了。", "py": "qiū tiān dào le shù yè huáng le" },
      { "text": "早上好，老师！", "py": "zǎo shang hǎo lǎo shī" }
    ]
  },
  {
    id: "zh-book",
    subject: "zh",
    tag: "KEBEN",
    title: "课本单元",
    sub: "人教部编版一年级上册 · 按单元练",
    lang: "zh-CN",
    color: "mint",
    units: [
      {
        id: "zh-u1",
        badge: "一",
        unit: "第一单元",
        title: "识字（一）",
        zh: "识字入门 · 天地人",
        lang: "zh-CN",
        lessons: ["1 天地人","2 金木水火土","3 口耳目手足","4 日月山川","语文园地一"],
        items: [
      { "text": "一", "py": "yī" },
      { "text": "二", "py": "èr" },
      { "text": "三", "py": "sān" },
      { "text": "上", "py": "shàng" },
      { "text": "口", "py": "kǒu" },
      { "text": "耳", "py": "ěr" },
      { "text": "目", "py": "mù" },
      { "text": "手", "py": "shǒu" },
      { "text": "日", "py": "rì" },
      { "text": "火", "py": "huǒ" },
      { "text": "田", "py": "tián" },
      { "text": "禾", "py": "hé" },
      { "text": "六", "py": "liù" },
      { "text": "七", "py": "qī" },
      { "text": "八", "py": "bā" },
      { "text": "十", "py": "shí" },
      { "text": "天地", "py": "tiān dì" },
      { "text": "人口", "py": "rén kǒu" },
      { "text": "手足", "py": "shǒu zú" },
      { "text": "日月", "py": "rì yuè" },
      { "text": "山川", "py": "shān chuān" },
      { "text": "水火", "py": "shuǐ huǒ" },
      { "text": "上下", "py": "shàng xià" }
        ]
      },
      {
        id: "zh-u2",
        badge: "二",
        unit: "第二单元",
        title: "拼音（一）",
        zh: "单韵母与声母",
        lang: "zh-CN",
        lessons: ["1 a o e","2 i u ü","3 b p m f","4 d t n l","语文园地二"],
        items: [
      { "text": "九", "py": "jiǔ" },
      { "text": "王", "py": "wáng" },
      { "text": "爸爸", "py": "bà ba" },
      { "text": "妈妈", "py": "mā ma" },
      { "text": "大米", "py": "dà mǐ" },
      { "text": "土地", "py": "tǔ dì" },
      { "text": "女孩", "py": "nǚ hái" },
      { "text": "马路", "py": "mǎ lù" },
      { "text": "弟弟", "py": "dì di" },
      { "text": "兔子", "py": "tù zi" }
        ]
      },
      {
        id: "zh-u3",
        badge: "三",
        unit: "第三单元",
        title: "拼音（二）",
        zh: "声母与整体认读",
        lang: "zh-CN",
        lessons: ["5 g k h","6 j q x","7 z c s","8 zh ch sh r","9 y w","语文园地三"],
        items: [
      { "text": "午", "py": "wǔ" },
      { "text": "下", "py": "xià" },
      { "text": "哥哥", "py": "gē ge" },
      { "text": "画画", "py": "huà huà" },
      { "text": "小鸡", "py": "xiǎo jī" },
      { "text": "气球", "py": "qì qiú" },
      { "text": "西瓜", "py": "xī guā" },
      { "text": "紫色", "py": "zǐ sè" },
      { "text": "蜘蛛", "py": "zhī zhū" },
      { "text": "尺子", "py": "chǐ zi" },
      { "text": "狮子", "py": "shī zi" },
      { "text": "衣服", "py": "yī fu" },
      { "text": "乌鸦", "py": "wū yā" }
        ]
      },
      {
        id: "zh-u4",
        badge: "四",
        unit: "第四单元",
        title: "拼音（三）",
        zh: "复韵母与鼻韵母",
        lang: "zh-CN",
        lessons: ["10 ai ei ui","11 ao ou iu","12 ie üe er","13 an en in un ün","14 ang eng ing ong","语文园地四"],
        items: [
      { "text": "个", "py": "gè" },
      { "text": "去", "py": "qù" },
      { "text": "白菜", "py": "bái cài" },
      { "text": "乌龟", "py": "wū guī" },
      { "text": "排队", "py": "pái duì" },
      { "text": "跑步", "py": "pǎo bù" },
      { "text": "小桥", "py": "xiǎo qiáo" },
      { "text": "牛", "py": "niú" },
      { "text": "耳朵", "py": "ěr duo" },
      { "text": "月亮", "py": "yuè liang" },
      { "text": "白云", "py": "bái yún" },
      { "text": "台灯", "py": "tái dēng" },
      { "text": "老鹰", "py": "lǎo yīng" }
        ]
      },
      {
        id: "zh-u5",
        badge: "五",
        unit: "第五单元",
        title: "阅读（一）",
        zh: "秋天 · 江南 · 四季",
        lang: "zh-CN",
        lessons: ["1 秋天","2 江南","3 雪地里的小画家","4 四季","语文园地五"],
        items: [
      { "text": "了", "py": "le" },
      { "text": "子", "py": "zǐ" },
      { "text": "大", "py": "dà" },
      { "text": "人", "py": "rén" },
      { "text": "可", "py": "kě" },
      { "text": "叶", "py": "yè" },
      { "text": "东", "py": "dōng" },
      { "text": "西", "py": "xī" },
      { "text": "竹", "py": "zhú" },
      { "text": "马", "py": "mǎ" },
      { "text": "牙", "py": "yá" },
      { "text": "用", "py": "yòng" },
      { "text": "几", "py": "jǐ" },
      { "text": "四", "py": "sì" },
      { "text": "小", "py": "xiǎo" },
      { "text": "鸟", "py": "niǎo" },
      { "text": "是", "py": "shì" },
      { "text": "天", "py": "tiān" },
      { "text": "女", "py": "nǚ" },
      { "text": "开", "py": "kāi" },
      { "text": "关", "py": "guān" },
      { "text": "先", "py": "xiān" },
      { "text": "秋天", "py": "qiū tiān" },
      { "text": "江南", "py": "jiāng nán" },
      { "text": "雪地", "py": "xuě dì" },
      { "text": "四季", "py": "sì jì" }
        ]
      },
      {
        id: "zh-u6",
        badge: "六",
        unit: "第六单元",
        title: "识字（二）",
        zh: "对韵歌 · 小书包",
        lang: "zh-CN",
        lessons: ["5 对韵歌","6 日月明","7 小书包","8 升国旗","语文园地六"],
        items: [
      { "text": "云", "py": "yún" },
      { "text": "雨", "py": "yǔ" },
      { "text": "虫", "py": "chóng" },
      { "text": "山", "py": "shān" },
      { "text": "水", "py": "shuǐ" },
      { "text": "力", "py": "lì" },
      { "text": "男", "py": "nán" },
      { "text": "土", "py": "tǔ" },
      { "text": "木", "py": "mù" },
      { "text": "心", "py": "xīn" },
      { "text": "尺", "py": "chǐ" },
      { "text": "本", "py": "běn" },
      { "text": "刀", "py": "dāo" },
      { "text": "不", "py": "bù" },
      { "text": "少", "py": "shǎo" },
      { "text": "中", "py": "zhōng" },
      { "text": "五", "py": "wǔ" },
      { "text": "风", "py": "fēng" },
      { "text": "立", "py": "lì" },
      { "text": "正", "py": "zhèng" },
      { "text": "工", "py": "gōng" },
      { "text": "厂", "py": "chǎng" },
      { "text": "门", "py": "mén" },
      { "text": "卫", "py": "wèi" },
      { "text": "书包", "py": "shū bāo" },
      { "text": "国旗", "py": "guó qí" }
        ]
      },
      {
        id: "zh-u7",
        badge: "七",
        unit: "第七单元",
        title: "阅读（二）",
        zh: "小小的船 · 影子",
        lang: "zh-CN",
        lessons: ["5 小小的船","6 影子","7 两件宝","语文园地七"],
        items: [
      { "text": "月", "py": "yuè" },
      { "text": "儿", "py": "ér" },
      { "text": "头", "py": "tóu" },
      { "text": "里", "py": "lǐ" },
      { "text": "见", "py": "jiàn" },
      { "text": "在", "py": "zài" },
      { "text": "找", "py": "zhǎo" },
      { "text": "我", "py": "wǒ" },
      { "text": "左", "py": "zuǒ" },
      { "text": "右", "py": "yòu" },
      { "text": "和", "py": "hé" },
      { "text": "也", "py": "yě" },
      { "text": "又", "py": "yòu" },
      { "text": "才", "py": "cái" },
      { "text": "爸", "py": "bà" },
      { "text": "妈", "py": "mā" },
      { "text": "小船", "py": "xiǎo chuán" },
      { "text": "影子", "py": "yǐng zi" },
      { "text": "两件宝", "py": "liǎng jiàn bǎo" }
        ]
      },
      {
        id: "zh-u8",
        badge: "八",
        unit: "第八单元",
        title: "阅读（三）",
        zh: "比尾巴 · 乌鸦喝水",
        lang: "zh-CN",
        lessons: ["8 比尾巴","9 乌鸦喝水","10 雨点儿","语文园地八"],
        items: [
      { "text": "比", "py": "bǐ" },
      { "text": "巴", "py": "bā" },
      { "text": "长", "py": "cháng", "audioText": "常" },
      { "text": "公", "py": "gōng" },
      { "text": "只", "py": "zhī", "audioText": "知" },
      { "text": "多", "py": "duō" },
      { "text": "办", "py": "bàn" },
      { "text": "石", "py": "shí" },
      { "text": "出", "py": "chū" },
      { "text": "来", "py": "lái" },
      { "text": "半", "py": "bàn" },
      { "text": "你", "py": "nǐ" },
      { "text": "有", "py": "yǒu" },
      { "text": "牛", "py": "niú" },
      { "text": "羊", "py": "yáng" },
      { "text": "爪", "py": "zhuǎ" },
      { "text": "白", "py": "bái" },
      { "text": "尾巴", "py": "wěi ba" },
      { "text": "乌鸦", "py": "wū yā" },
      { "text": "雨点儿", "py": "yǔ diǎnr" }
        ]
      }
    ]
  },
  {
    id: "english",
    subject: "en",
    tag: "ENGLISH",
    title: "英语口语",
    sub: "广州版一年级第一册 · Success with English",
    lang: "en-US",
    color: "lilac",
    units: [
      {
        id: "en-u1",
        badge: "U1",
        unit: "Unit 1",
        title: "Hello, I'm Andy",
        zh: "问候与自我介绍",
        lang: "en-US",
        lessons: ["Hello!","I’m Andy.","Good morning!","What’s your name?"],
        items: [
      { "text": "Hello!", "zh": "你好！" },
      { "text": "Hi!", "zh": "嗨！" },
      { "text": "Good morning!", "zh": "早上好！" },
      { "text": "Goodbye!", "zh": "再见！" },
      { "text": "I'm Andy.", "zh": "我是安迪。" },
      { "text": "I'm Amy.", "zh": "我是艾米。" },
      { "text": "I'm Koto.", "zh": "我是科托。" },
      { "text": "I'm Bobby.", "zh": "我是波比。" },
      { "text": "I'm Mr Leo.", "zh": "我是里奥老师。" },
      { "text": "What's your name?", "zh": "你叫什么名字？" },
      { "text": "My name is Amy.", "zh": "我叫艾米。" },
      { "text": "Nice to meet you!", "zh": "很高兴见到你！" }
        ]
      },
      {
        id: "en-u2",
        badge: "U2",
        unit: "Unit 2",
        title: "I have a new bag",
        zh: "学习用品",
        lang: "en-US",
        lessons: ["pencil","book","bag","pencil-case","ruler","eraser"],
        items: [
      { "text": "new", "zh": "新的" },
      { "text": "pencil", "zh": "铅笔", "img": "assets/img/en/pencil.webp" },
      { "text": "book", "zh": "书", "img": "assets/img/en/book.webp" },
      { "text": "bag", "zh": "包；书包", "img": "assets/img/en/bag.webp" },
      { "text": "pencil-case", "zh": "铅笔盒", "img": "assets/img/en/pencilcase.webp" },
      { "text": "ruler", "zh": "直尺", "img": "assets/img/en/ruler.webp" },
      { "text": "eraser", "zh": "橡皮", "img": "assets/img/en/eraser.webp" },
      { "text": "tooth", "zh": "牙齿", "img": "assets/img/en/tooth.webp" },
      { "text": "I have a new bag.", "zh": "我有一个新书包。" },
      { "text": "What's in your bag?", "zh": "你的书包里有什么？" },
      { "text": "A pencil, a book and a ruler.", "zh": "一支铅笔、一本书和一把尺子。" },
      { "text": "I have a new pencil-case.", "zh": "我有一个新铅笔盒。" },
      { "text": "Open your book, please.", "zh": "请打开你的书。" }
        ]
      },
      {
        id: "en-u3",
        badge: "U3",
        unit: "Unit 3",
        title: "Count from one to ten",
        zh: "数字与玩具",
        lang: "en-US",
        lessons: ["one—ten","dog","teddy bear","cat","doll"],
        items: [
      { "text": "one", "zh": "一" },
      { "text": "two", "zh": "二" },
      { "text": "three", "zh": "三" },
      { "text": "four", "zh": "四" },
      { "text": "five", "zh": "五" },
      { "text": "six", "zh": "六" },
      { "text": "seven", "zh": "七" },
      { "text": "eight", "zh": "八" },
      { "text": "nine", "zh": "九" },
      { "text": "ten", "zh": "十" },
      { "text": "dog", "zh": "狗", "img": "assets/img/en/dog.webp" },
      { "text": "teddy bear", "zh": "泰迪熊", "img": "assets/img/en/teddy.webp" },
      { "text": "cat", "zh": "猫", "img": "assets/img/en/cat.webp" },
      { "text": "doll", "zh": "玩具娃娃", "img": "assets/img/en/doll.webp" },
      { "text": "Count from one to ten.", "zh": "从一数到十。" },
      { "text": "How many?", "zh": "有多少个？" },
      { "text": "How many cats?", "zh": "有几只猫？" },
      { "text": "Three cats.", "zh": "三只猫。" },
      { "text": "I have two dolls.", "zh": "我有两个娃娃。" }
        ]
      },
      {
        id: "en-r1",
        badge: "R1",
        unit: "Revision I",
        title: "Review 1–3",
        zh: "复习 Unit 1–3",
        lang: "en-US",
        lessons: ["Hello","My bag","Numbers"],
        items: [
      { "text": "Hello, I'm Andy.", "zh": "你好，我是安迪。" },
      { "text": "What's your name?", "zh": "你叫什么名字？" },
      { "text": "Good morning!", "zh": "早上好！" },
      { "text": "I have a new bag.", "zh": "我有一个新书包。" },
      { "text": "A pencil and a ruler.", "zh": "一支铅笔和一把尺子。" },
      { "text": "Count from one to ten.", "zh": "从一数到十。" },
      { "text": "How many dolls?", "zh": "有几个娃娃？" },
      { "text": "I have three books.", "zh": "我有三本书。" }
        ]
      },
      {
        id: "en-u4",
        badge: "U4",
        unit: "Unit 4",
        title: "I like green",
        zh: "颜色",
        lang: "en-US",
        lessons: ["purple","blue","green","yellow","orange","red","pink","black"],
        items: [
      { "text": "purple", "zh": "紫色", "color": "#B39DDB" },
      { "text": "blue", "zh": "蓝色", "color": "#7FB6E8" },
      { "text": "green", "zh": "绿色", "color": "#8FD3A8" },
      { "text": "yellow", "zh": "黄色", "color": "#FFD86B" },
      { "text": "orange", "zh": "橙色", "color": "#FFB067" },
      { "text": "red", "zh": "红色", "color": "#F58A8A" },
      { "text": "pink", "zh": "粉色", "color": "#F7A8C4" },
      { "text": "black", "zh": "黑色", "color": "#5A443C" },
      { "text": "I like green.", "zh": "我喜欢绿色。" },
      { "text": "What colour is it?", "zh": "它是什么颜色？" },
      { "text": "It's red.", "zh": "它是红色的。" },
      { "text": "I like blue and yellow.", "zh": "我喜欢蓝色和黄色。" },
      { "text": "My bag is pink.", "zh": "我的书包是粉色的。" }
        ]
      },
      {
        id: "en-u5",
        badge: "U5",
        unit: "Unit 5",
        title: "Here's my scooter",
        zh: "玩具与出行",
        lang: "en-US",
        lessons: ["plane","car","puzzle","train","scooter","skipping rope","cap","watch"],
        items: [
      { "text": "plane", "zh": "飞机", "img": "assets/img/en/plane.webp" },
      { "text": "car", "zh": "汽车", "img": "assets/img/en/car.webp" },
      { "text": "puzzle", "zh": "拼图", "img": "assets/img/en/puzzle.webp" },
      { "text": "train", "zh": "火车", "img": "assets/img/en/train.webp" },
      { "text": "scooter", "zh": "滑板车", "img": "assets/img/en/scooter.webp" },
      { "text": "skipping rope", "zh": "跳绳", "img": "assets/img/en/rope.webp" },
      { "text": "cap", "zh": "帽子", "img": "assets/img/en/cap.webp" },
      { "text": "watch", "zh": "手表", "img": "assets/img/en/watch.webp" },
      { "text": "Here's my scooter.", "zh": "这是我的滑板车。" },
      { "text": "Wow, it's nice.", "zh": "哇，真好看。" },
      { "text": "I have a new car.", "zh": "我有一辆新汽车。" },
      { "text": "This is my plane.", "zh": "这是我的飞机。" },
      { "text": "Let's play with the puzzle.", "zh": "我们一起玩拼图吧。" }
        ]
      },
      {
        id: "en-u6",
        badge: "U6",
        unit: "Unit 6",
        title: "I can jump",
        zh: "动物与动作",
        lang: "en-US",
        lessons: ["lion","monkey","rabbit","elephant","kangaroo","jump","swim"],
        items: [
      { "text": "lion", "zh": "狮子", "img": "assets/img/en/lion.webp" },
      { "text": "monkey", "zh": "猴子", "img": "assets/img/en/monkey.webp" },
      { "text": "rabbit", "zh": "兔子", "img": "assets/img/en/rabbit.webp" },
      { "text": "elephant", "zh": "大象", "img": "assets/img/en/elephant.webp" },
      { "text": "kangaroo", "zh": "袋鼠", "img": "assets/img/en/kangaroo.webp" },
      { "text": "swing", "zh": "摆动；荡秋千" },
      { "text": "run", "zh": "跑" },
      { "text": "walk", "zh": "走" },
      { "text": "jump", "zh": "跳" },
      { "text": "swim", "zh": "游泳" },
      { "text": "fly", "zh": "飞" },
      { "text": "fish", "zh": "鱼", "img": "assets/img/en/fish.webp" },
      { "text": "bird", "zh": "鸟", "img": "assets/img/en/bird.webp" },
      { "text": "I can jump.", "zh": "我会跳。" },
      { "text": "Can you swim?", "zh": "你会游泳吗？" },
      { "text": "Yes, I can.", "zh": "是的，我会。" },
      { "text": "No, I can't.", "zh": "不，我不会。" },
      { "text": "The bird can fly.", "zh": "鸟会飞。" }
        ]
      },
      {
        id: "en-r2",
        badge: "R2",
        unit: "Revision II",
        title: "Review 4–6",
        zh: "复习 Unit 4–6",
        lang: "en-US",
        lessons: ["Colours","Toys","Actions"],
        items: [
      { "text": "I like green.", "zh": "我喜欢绿色。" },
      { "text": "What colour is it?", "zh": "它是什么颜色？" },
      { "text": "It's orange.", "zh": "它是橙色的。" },
      { "text": "Here's my scooter.", "zh": "这是我的滑板车。" },
      { "text": "I have a new cap.", "zh": "我有一顶新帽子。" },
      { "text": "I can jump.", "zh": "我会跳。" },
      { "text": "Can you swim?", "zh": "你会游泳吗？" },
      { "text": "The elephant can walk.", "zh": "大象会走。" }
        ]
      },
      {
        id: "en-names",
        badge: "ABC",
        unit: "Names",
        title: "English names",
        zh: "英文名字",
        lang: "en-US",
        lessons: ["Andy","Amy","Bobby","Leo","Emma"],
        items: [
      { "text": "Andy", "zh": "安迪" },
      { "text": "Amy", "zh": "艾米" },
      { "text": "Bobby", "zh": "波比" },
      { "text": "Leo", "zh": "里奥" },
      { "text": "Tom", "zh": "汤姆" },
      { "text": "Emma", "zh": "艾玛" },
      { "text": "Jack", "zh": "杰克" },
      { "text": "Lily", "zh": "莉莉" },
      { "text": "Lucy", "zh": "露西" },
      { "text": "Sam", "zh": "山姆" },
      { "text": "Ben", "zh": "本" },
      { "text": "Sue", "zh": "苏" },
      { "text": "Jim", "zh": "吉姆" },
      { "text": "Chen Jiamin", "zh": "陈家敏" },
      { "text": "Julia", "zh": "朱莉娅" }
        ]
      }
    ]
  },
  {
    id: "zh-tones",
    subject: "zh",
    tag: "TONE",
    title: "声调",
    sub: "四声读准，字音才好听",
    lang: "zh-CN",
    color: "pink",
    extra: true,
    pickable: true,
    items: [
      { "text": "ā", "zh": "啊", "audioText": "ā", "tip": "第一声，高平，读得又平又长" },
      { "text": "á", "zh": "啊", "audioText": "á", "tip": "第二声，往上扬，像在问「啊？」" },
      { "text": "ǎ", "zh": "啊", "audioText": "ǎ", "tip": "第三声，先降后升，读满" },
      { "text": "à", "zh": "啊", "audioText": "à", "tip": "第四声，干脆往下落" },
      { "text": "ō", "zh": "噢", "audioText": "ō", "tip": "第一声，高平，嘴巴圆圆" },
      { "text": "ó", "zh": "哦", "audioText": "ó", "tip": "第二声，往上扬" },
      { "text": "ǒ", "zh": "嚄", "audioText": "ǒ", "tip": "第三声，先降后升" },
      { "text": "ò", "zh": "哦", "audioText": "ò", "tip": "第四声，短而干脆" }
    ]
  },
  {
    id: "zh-initials",
    subject: "zh",
    tag: "SHENG",
    title: "声母",
    sub: "23 个声母，听呼读音",
    lang: "zh-CN",
    color: "mint",
    extra: true,
    pickable: true,
    items: [
      { "text": "b", "py": "bō", "zh": "玻", "audioText": "bō", "tip": "声母 b，第一声呼读音，双唇一碰再放开" },
      { "text": "p", "py": "pō", "zh": "坡", "audioText": "pō", "tip": "声母 p，第一声呼读音，送气" },
      { "text": "m", "py": "mō", "zh": "摸", "audioText": "mō", "tip": "声母 m，第一声呼读音，双唇闭住" },
      { "text": "f", "py": "fō", "zh": "", "audioText": "fō", "tip": "声母 f，第一声呼读音，上牙轻碰下唇" },
      { "text": "d", "py": "dē", "zh": "", "audioText": "dē", "tip": "声母 d，第一声呼读音，舌尖抵住上牙床" },
      { "text": "t", "py": "tē", "zh": "", "audioText": "tē", "tip": "声母 t，第一声呼读音，送气" },
      { "text": "n", "py": "nē", "zh": "", "audioText": "nē", "tip": "声母 n，第一声呼读音，鼻子出气" },
      { "text": "l", "py": "lē", "zh": "", "audioText": "lē", "tip": "声母 l，第一声呼读音，舌头两边出气" },
      { "text": "g", "py": "gē", "zh": "哥", "audioText": "gē", "tip": "声母 g，第一声呼读音，舌根抵住软腭" },
      { "text": "k", "py": "kē", "zh": "科", "audioText": "kē", "tip": "声母 k，第一声呼读音，送气" },
      { "text": "h", "py": "hē", "zh": "喝", "audioText": "hē", "tip": "声母 h，第一声呼读音，气流摩擦" },
      { "text": "j", "py": "jī", "zh": "鸡", "audioText": "jī", "tip": "声母 j，第一声呼读音，舌面抵住硬腭" },
      { "text": "q", "py": "qī", "zh": "七", "audioText": "qī", "tip": "声母 q，第一声呼读音，送气" },
      { "text": "x", "py": "xī", "zh": "西", "audioText": "xī", "tip": "声母 x，第一声呼读音，气流摩擦" },
      { "text": "zh", "py": "zhī", "zh": "知", "audioText": "zhī", "tip": "翘舌音 zh，第一声呼读音，舌尖往后卷", "raw": true },
      { "text": "ch", "py": "chī", "zh": "吃", "audioText": "chī", "tip": "翘舌音 ch，第一声呼读音，送气", "raw": true },
      { "text": "sh", "py": "shī", "zh": "诗", "audioText": "shī", "tip": "翘舌音 sh，第一声呼读音，舌尖往后卷", "raw": true },
      { "text": "r", "py": "rī", "zh": "", "audioText": "rī", "tip": "翘舌音 r，第一声呼读音，舌尖往后卷", "raw": true },
      { "text": "z", "py": "zī", "zh": "资", "audioText": "zī", "tip": "平舌音 z，第一声呼读音，舌尖靠前" },
      { "text": "c", "py": "cī", "zh": "呲", "audioText": "cī", "tip": "平舌音 c，第一声呼读音，送气" },
      { "text": "s", "py": "sī", "zh": "思", "audioText": "sī", "tip": "平舌音 s，第一声呼读音，舌尖靠前" },
      { "text": "y", "py": "yī", "zh": "衣", "audioText": "yī", "tip": "声母 y，第一声呼读音，像「衣」" },
      { "text": "w", "py": "wū", "zh": "乌", "audioText": "wū", "tip": "声母 w，第一声呼读音，像「乌」" }
    ]
  },
  {
    id: "zh-finals",
    subject: "zh",
    tag: "YUN",
    title: "韵母",
    sub: "单韵母、复韵母、鼻韵母",
    lang: "zh-CN",
    color: "butter",
    extra: true,
    pickable: true,
    items: [
      { "text": "a", "py": "ā", "zh": "啊", "audioText": "ā", "tip": "单韵母 a，第一声，嘴巴张大", "raw": true },
      { "text": "o", "py": "ō", "zh": "噢", "audioText": "ō", "tip": "单韵母 o，第一声，嘴巴圆圆", "raw": true },
      { "text": "e", "py": "ē", "zh": "鹅", "audioText": "ē", "tip": "单韵母 e，第一声，嘴巴扁扁的", "raw": true },
      { "text": "i", "py": "ī", "zh": "衣", "audioText": "衣", "tip": "单韵母 i，第一声，牙齿对齐", "raw": true },
      { "text": "u", "py": "ū", "zh": "乌", "audioText": "乌", "tip": "单韵母 u，第一声，嘴巴拢圆", "raw": true },
      { "text": "ü", "py": "ǖ", "zh": "迂", "audioText": "迂", "tip": "单韵母 ü，第一声，嘴巴拢圆", "raw": true },
      { "text": "ai", "py": "āi", "zh": "哀", "audioText": "āi", "tip": "复韵母 ai，第一声，从 a 滑到 i", "raw": true },
      { "text": "ei", "py": "ēi", "zh": "诶", "audioText": "ēi", "tip": "复韵母 ei，第一声，从 e 滑到 i", "raw": true },
      { "text": "ui", "py": "uī", "zh": "威", "audioText": "uī", "tip": "复韵母 ui，第一声，从 u 滑到 i", "raw": true },
      { "text": "ao", "py": "āo", "zh": "凹", "audioText": "āo", "tip": "复韵母 ao，第一声，从 a 滑到 o", "raw": true },
      { "text": "ou", "py": "ōu", "zh": "欧", "audioText": "ōu", "tip": "复韵母 ou，第一声，从 o 滑到 u", "raw": true },
      { "text": "iu", "py": "iū", "zh": "优", "audioText": "iū", "tip": "复韵母 iu，第一声，从 i 滑到 u", "raw": true },
      { "text": "ie", "py": "iē", "zh": "耶", "audioText": "iē", "tip": "复韵母 ie，第一声，从 i 滑到 e", "raw": true },
      { "text": "üe", "py": "üē", "zh": "约", "audioText": "üē", "tip": "复韵母 üe，第一声，从 ü 滑到 e", "raw": true },
      { "text": "er", "py": "ēr", "zh": "儿", "audioText": "ēr", "tip": "特殊韵母 er，第一声，舌头卷起来", "raw": true },
      { "text": "an", "py": "ān", "zh": "安", "audioText": "ān", "tip": "前鼻韵母 an，第一声，舌尖抵上牙床", "raw": true },
      { "text": "en", "py": "ēn", "zh": "恩", "audioText": "ēn", "tip": "前鼻韵母 en，第一声，舌尖抵上牙床", "raw": true },
      { "text": "in", "py": "īn", "zh": "因", "audioText": "īn", "tip": "前鼻韵母 in，第一声，舌尖抵上牙床", "raw": true },
      { "text": "un", "py": "ūn", "zh": "温", "audioText": "ūn", "tip": "前鼻韵母 un，第一声，舌尖抵上牙床", "raw": true },
      { "text": "ün", "py": "ǖn", "zh": "晕", "audioText": "ǖn", "tip": "前鼻韵母 ün，第一声，舌尖抵上牙床", "raw": true },
      { "text": "ang", "py": "āng", "zh": "昂", "audioText": "āng", "tip": "后鼻韵母 ang，第一声，声音送到鼻腔", "raw": true },
      { "text": "eng", "py": "ēng", "zh": "鞥", "audioText": "ēng", "tip": "后鼻韵母 eng，第一声，声音送到鼻腔", "raw": true },
      { "text": "ing", "py": "īng", "zh": "英", "audioText": "īng", "tip": "后鼻韵母 ing，第一声，声音送到鼻腔", "raw": true },
      { "text": "ong", "py": "ōng", "zh": "翁", "audioText": "ōng", "tip": "后鼻韵母 ong，第一声，声音送到鼻腔", "raw": true }
    ]
  },
  {
    id: "zh-whole",
    subject: "zh",
    tag: "ZHENG",
    title: "整体认读",
    sub: "16 个整体认读音节",
    lang: "zh-CN",
    color: "lilac",
    extra: true,
    pickable: true,
    items: [
      { "text": "zhi", "py": "zhī", "zh": "知", "audioText": "知", "tip": "整体认读 zhi，不用拼", "raw": true },
      { "text": "chi", "py": "chī", "zh": "吃", "audioText": "吃", "tip": "整体认读 chi，不用拼", "raw": true },
      { "text": "shi", "py": "shī", "zh": "诗", "audioText": "诗", "tip": "整体认读 shi，不用拼", "raw": true },
      { "text": "ri", "py": "rì", "zh": "日", "audioText": "日", "tip": "整体认读 ri，不用拼", "raw": true },
      { "text": "zi", "py": "zī", "zh": "资", "audioText": "资", "tip": "整体认读 zi，不用拼", "raw": true },
      { "text": "ci", "py": "cí", "zh": "雌", "audioText": "雌", "tip": "整体认读 ci，不用拼", "raw": true },
      { "text": "si", "py": "sī", "zh": "思", "audioText": "思", "tip": "整体认读 si，不用拼", "raw": true },
      { "text": "yi", "py": "yī", "zh": "衣", "audioText": "衣", "tip": "整体认读 yi，不用拼", "raw": true },
      { "text": "wu", "py": "wū", "zh": "乌", "audioText": "乌", "tip": "整体认读 wu，不用拼", "raw": true },
      { "text": "yu", "py": "yú", "zh": "鱼", "audioText": "鱼", "tip": "整体认读 yu，不用拼", "raw": true },
      { "text": "ye", "py": "yē", "zh": "耶", "audioText": "耶", "tip": "整体认读 ye，不用拼", "raw": true },
      { "text": "yue", "py": "yuē", "zh": "约", "audioText": "约", "tip": "整体认读 yue，不用拼", "raw": true },
      { "text": "yuan", "py": "yuán", "zh": "元", "audioText": "元", "tip": "整体认读 yuan，不用拼", "raw": true },
      { "text": "yin", "py": "yīn", "zh": "因", "audioText": "因", "tip": "整体认读 yin，不用拼", "raw": true },
      { "text": "yun", "py": "yūn", "zh": "晕", "audioText": "晕", "tip": "整体认读 yun，不用拼", "raw": true },
      { "text": "ying", "py": "yīng", "zh": "英", "audioText": "英", "tip": "整体认读 ying，不用拼", "raw": true }
    ]
  }
];

/* 读课文 · 广州版英语口语一年级上册 Unit 1–6
   内容根据用户提供的课本电子版整理为可点读文本。
   页面插图为本项目原创绘制，不上传、不裁切课本扫描图。 */

window.TEXTBOOK_UNITS = [
  {
    id: "en-u1",
    badge: "U1",
    title: "Hello, I'm Andy",
    zh: "问候与自我介绍",
    art: "greet",
    pages: [
      {
        id: "u1-sing",
        section: "Let's Sing",
        sub: "听一听，唱一唱",
        art: "greet",
        lines: [
          { en: "Hi, hello.", zh: "嗨，你好。" },
          { en: "What's your name?", zh: "你叫什么名字？" },
          { en: "What's your name?", zh: "你叫什么名字？" },
          { en: "What's your name?", zh: "你叫什么名字？" },
          { en: "Hi, hello.", zh: "嗨，你好。" },
          { en: "What's your name?", zh: "你叫什么名字？" },
          { en: "My name is Andy.", zh: "我叫安迪。" }
        ],
        words: [
          { w: "hi", zh: "嗨", ipa: "/haɪ/" },
          { w: "hello", zh: "你好", ipa: "/həˈləʊ/" },
          { w: "name", zh: "名字", ipa: "/neɪm/" },
          { w: "my", zh: "我的", ipa: "/maɪ/" }
        ]
      },
      {
        id: "u1-chant",
        section: "Let's Chant",
        sub: "听一听，说一说",
        art: "greet",
        lines: [
          { en: "Hello, Ben.", zh: "你好，本。" },
          { en: "Hello, Sue.", zh: "你好，苏。" },
          { en: "Hello, Jim.", zh: "你好，吉姆。" },
          { en: "How are you?", zh: "你好吗？" },
          { en: "Good!", zh: "很好！" },
          { en: "OK!", zh: "不错！" },
          { en: "Great!", zh: "很棒！" },
          { en: "Superb!", zh: "太棒了！" }
        ],
        words: [
          { w: "how", zh: "怎样", ipa: "/haʊ/" },
          { w: "you", zh: "你", ipa: "/juː/" },
          { w: "good", zh: "好的", ipa: "/ɡʊd/" },
          { w: "great", zh: "很棒", ipa: "/ɡreɪt/" },
          { w: "superb", zh: "太棒了", ipa: "/suːˈpɜːb/" }
        ]
      },
      {
        id: "u1-try",
        section: "Let's Try",
        sub: "听一听，说一说",
        art: "greet",
        lines: [
          { en: "Hi, my name is Chen Jiamin.", zh: "嗨，我叫陈家敏。" },
          { en: "Hello, my name is Julia.", zh: "你好，我叫朱莉娅。" }
        ],
        words: [
          { w: "my", zh: "我的", ipa: "/maɪ/" },
          { w: "name", zh: "名字", ipa: "/neɪm/" }
        ]
      },
      {
        id: "u1-story",
        section: "Story Time",
        sub: "看图听故事",
        art: "greet",
        lines: [
          { en: "Hi, my name is Andy.", zh: "嗨，我叫安迪。" },
          { en: "What's your name?", zh: "你叫什么名字？" },
          { en: "I'm Koto.", zh: "我是科托。" },
          { en: "I'm Bobby.", zh: "我是波比。" },
          { en: "My name is Amy.", zh: "我叫艾米。" },
          { en: "Good morning.", zh: "早上好。" },
          { en: "I'm Mr Leo.", zh: "我是里奥老师。" },
          { en: "Good morning, Mr Leo.", zh: "早上好，里奥老师。" },
          { en: "Welcome.", zh: "欢迎。" }
        ],
        words: [
          { w: "morning", zh: "早上", ipa: "/ˈmɔːnɪŋ/" },
          { w: "welcome", zh: "欢迎", ipa: "/ˈwelkəm/" },
          { w: "Mr", zh: "先生", ipa: "/ˈmɪstə/" }
        ]
      }
    ]
  },
  {
    id: "en-u2",
    badge: "U2",
    title: "I Have a New Bag",
    zh: "学习用品",
    art: "bag",
    pages: [
      {
        id: "u2-sing",
        section: "Let's Sing",
        sub: "听一听，唱一唱",
        art: "bag",
        lines: [
          { en: "I have a pencil.", zh: "我有一支铅笔。" },
          { en: "I have a pencil.", zh: "我有一支铅笔。" },
          { en: "It is new. It is new.", zh: "它是新的。它是新的。" },
          { en: "Here is my pencil.", zh: "这是我的铅笔。" },
          { en: "Here is my pencil.", zh: "这是我的铅笔。" },
          { en: "It is new. It is new.", zh: "它是新的。它是新的。" }
        ],
        words: [
          { w: "have", zh: "有", ipa: "/hæv/" },
          { w: "pencil", zh: "铅笔", ipa: "/ˈpensl/" },
          { w: "new", zh: "新的", ipa: "/njuː/" },
          { w: "here", zh: "这里", ipa: "/hɪə/" }
        ]
      },
      {
        id: "u2-chant",
        section: "Let's Chant",
        sub: "听一听，说一说",
        art: "bag",
        lines: [
          { en: "Who took the book from Andy's bag?", zh: "谁从安迪的书包里拿走了书？" },
          { en: "Amy took the book from Andy's bag.", zh: "艾米从安迪的书包里拿走了书。" },
          { en: "Who? Me? Can't be!", zh: "谁？我？不可能！" },
          { en: "Koto took the book from Andy's bag.", zh: "科托从安迪的书包里拿走了书。" }
        ],
        words: [
          { w: "who", zh: "谁", ipa: "/huː/" },
          { w: "took", zh: "拿走（过去式）", ipa: "/tʊk/" },
          { w: "book", zh: "书", ipa: "/bʊk/" },
          { w: "pencil", zh: "铅笔", ipa: "/ˈpensl/" },
          { w: "bag", zh: "书包", ipa: "/bæɡ/" },
          { w: "ruler", zh: "尺子", ipa: "/ˈruːlə/" },
          { w: "from", zh: "从", ipa: "/frɒm/" }
        ]
      },
      {
        id: "u2-move",
        section: "Let's Move",
        sub: "听一听，做动作",
        art: "bag",
        lines: [
          { en: "Show me your pencil-case.", zh: "给我看看你的铅笔盒。" },
          { en: "Show me your ruler.", zh: "给我看看你的尺子。" },
          { en: "Show me your eraser.", zh: "给我看看你的橡皮。" },
          { en: "Open your book.", zh: "打开你的书。" },
          { en: "Close your book.", zh: "合上你的书。" }
        ],
        words: [
          { w: "show", zh: "展示", ipa: "/ʃəʊ/" },
          { w: "pencil-case", zh: "铅笔盒", ipa: "/ˈpensl keɪs/" },
          { w: "ruler", zh: "尺子", ipa: "/ˈruːlə/" },
          { w: "eraser", zh: "橡皮", ipa: "/ɪˈreɪzə/" },
          { w: "open", zh: "打开", ipa: "/ˈəʊpən/" },
          { w: "close", zh: "合上", ipa: "/kləʊz/" }
        ]
      },
      {
        id: "u2-story",
        section: "Story Time",
        sub: "看图听故事",
        art: "bag",
        lines: [
          { en: "Show me something new.", zh: "给我看看新东西。" },
          { en: "I have a new pencil.", zh: "我有一支新铅笔。" },
          { en: "I have a new bag.", zh: "我有一个新书包。" },
          { en: "I have a new pencil-case.", zh: "我有一个新铅笔盒。" },
          { en: "Er... I have...", zh: "呃……我有……" },
          { en: "I have a new tooth!", zh: "我有一颗新牙齿！" },
          { en: "Me too!", zh: "我也是！" }
        ],
        words: [
          { w: "something", zh: "某样东西", ipa: "/ˈsʌmθɪŋ/" },
          { w: "tooth", zh: "牙齿", ipa: "/tuːθ/" },
          { w: "too", zh: "也", ipa: "/tuː/" }
        ]
      }
    ]
  },
  {
    id: "en-u3",
    badge: "U3",
    title: "Count from One to Ten",
    zh: "数字与玩具",
    art: "numbers",
    pages: [
      {
        id: "u3-sing",
        section: "Let's Sing",
        sub: "听一听，唱一唱",
        art: "numbers",
        lines: [
          { en: "One little, two little, three little black cats.", zh: "一只、两只、三只小黑猫。" },
          { en: "Four little, five little, six little black cats.", zh: "四只、五只、六只小黑猫。" },
          { en: "Seven little, eight little, nine little black cats.", zh: "七只、八只、九只小黑猫。" },
          { en: "Ten little cats in a row!", zh: "十只小猫排成一排！" }
        ],
        words: [
          { w: "one", zh: "一", ipa: "/wʌn/" },
          { w: "two", zh: "二", ipa: "/tuː/" },
          { w: "three", zh: "三", ipa: "/θriː/" },
          { w: "four", zh: "四", ipa: "/fɔː/" },
          { w: "five", zh: "五", ipa: "/faɪv/" },
          { w: "little", zh: "小的", ipa: "/ˈlɪtl/" },
          { w: "black", zh: "黑色", ipa: "/blæk/" },
          { w: "cats", zh: "猫（复数）", ipa: "/kæts/" },
          { w: "row", zh: "一排", ipa: "/rəʊ/" }
        ]
      },
      {
        id: "u3-count",
        section: "Let's Count",
        sub: "听一听，说一说",
        art: "numbers",
        lines: [
          { en: "Three, four. Close the door.", zh: "三、四。关上门。" },
          { en: "One, two. Tie your shoe.", zh: "一、二。系好鞋带。" },
          { en: "Five, six. Pick up the sticks.", zh: "五、六。捡起小棍。" },
          { en: "Seven, eight. Don't be late.", zh: "七、八。别迟到。" },
          { en: "Nine, ten. Start again.", zh: "九、十。重新开始。" }
        ],
        words: [
          { w: "six", zh: "六", ipa: "/sɪks/" },
          { w: "seven", zh: "七", ipa: "/ˈsevn/" },
          { w: "eight", zh: "八", ipa: "/eɪt/" },
          { w: "nine", zh: "九", ipa: "/naɪn/" },
          { w: "ten", zh: "十", ipa: "/ten/" },
          { w: "door", zh: "门", ipa: "/dɔː/" },
          { w: "tie", zh: "系", ipa: "/taɪ/" },
          { w: "shoe", zh: "鞋", ipa: "/ʃuː/" },
          { w: "sticks", zh: "小棍", ipa: "/stɪks/" },
          { w: "late", zh: "迟到", ipa: "/leɪt/" },
          { w: "again", zh: "再一次", ipa: "/əˈɡen/" }
        ]
      },
      {
        id: "u3-play",
        section: "Let's Play",
        sub: "问一问，数一数",
        art: "numbers",
        lines: [
          { en: "How many dogs do you have?", zh: "你有几只狗？" },
          { en: "I have three dogs.", zh: "我有三只狗。" }
        ],
        words: [
          { w: "how many", zh: "多少", ipa: "/haʊ ˈmeni/" },
          { w: "dogs", zh: "狗（复数）", ipa: "/dɒɡz/" },
          { w: "dog", zh: "狗", ipa: "/dɒɡ/" },
          { w: "teddy bear", zh: "泰迪熊", ipa: "/ˈtedi beə/" },
          { w: "cat", zh: "猫", ipa: "/kæt/" },
          { w: "doll", zh: "娃娃", ipa: "/dɒl/" }
        ]
      },
      {
        id: "u3-story",
        section: "Story Time",
        sub: "看图听故事",
        art: "numbers",
        lines: [
          { en: "Look, a pencil!", zh: "看，一支铅笔！" },
          { en: "It's my pencil.", zh: "这是我的铅笔。" },
          { en: "It's new.", zh: "它是新的。" },
          { en: "I have two new pencils.", zh: "我有两支新铅笔。" },
          { en: "I have three new pencils.", zh: "我有三支新铅笔。" },
          { en: "One, two, three, four, five, six.", zh: "一、二、三、四、五、六。" },
          { en: "I have six new pencils.", zh: "我有六支新铅笔。" },
          { en: "My pencil!", zh: "我的铅笔！" },
          { en: "My pencils!", zh: "我的铅笔（复数）！" }
        ],
        words: [
          { w: "look", zh: "看", ipa: "/lʊk/" },
          { w: "two", zh: "二", ipa: "/tuː/" },
          { w: "three", zh: "三", ipa: "/θriː/" },
          { w: "six", zh: "六", ipa: "/sɪks/" },
          { w: "pencils", zh: "铅笔（复数）", ipa: "/ˈpenslz/" }
        ]
      }
    ]
  },
  {
    id: "en-u4",
    badge: "U4",
    title: "I Like Green",
    zh: "颜色",
    art: "rainbow",
    pages: [
      {
        id: "u4-sing",
        section: "Let's Sing",
        sub: "听一听，唱一唱",
        art: "rainbow",
        lines: [
          { en: "Rainbow purple, rainbow blue,", zh: "彩虹紫，彩虹蓝，" },
          { en: "Rainbow green and yellow too.", zh: "彩虹还有绿和黄。" },
          { en: "Rainbow orange, rainbow red,", zh: "彩虹橙，彩虹红，" },
          { en: "Rainbow smiling overhead.", zh: "彩虹在头顶微笑。" }
        ],
        words: [
          { w: "rainbow", zh: "彩虹", ipa: "/ˈreɪnbəʊ/" },
          { w: "purple", zh: "紫色", ipa: "/ˈpɜːpl/" },
          { w: "blue", zh: "蓝色", ipa: "/bluː/" },
          { w: "green", zh: "绿色", ipa: "/ɡriːn/" },
          { w: "yellow", zh: "黄色", ipa: "/ˈjeləʊ/" },
          { w: "orange", zh: "橙色", ipa: "/ˈɒrɪndʒ/" },
          { w: "red", zh: "红色", ipa: "/red/" },
          { w: "smiling", zh: "微笑", ipa: "/ˈsmaɪlɪŋ/" }
        ]
      },
      {
        id: "u4-chant",
        section: "Let's Chant",
        sub: "听一听，说一说",
        art: "rainbow",
        lines: [
          { en: "I like pink.", zh: "我喜欢粉色。" },
          { en: "I like blue.", zh: "我喜欢蓝色。" },
          { en: "I like black.", zh: "我喜欢黑色。" },
          { en: "It's cool.", zh: "它很酷。" }
        ],
        words: [
          { w: "like", zh: "喜欢", ipa: "/laɪk/" },
          { w: "pink", zh: "粉色", ipa: "/pɪŋk/" },
          { w: "black", zh: "黑色", ipa: "/blæk/" },
          { w: "cool", zh: "酷", ipa: "/kuːl/" }
        ]
      },
      {
        id: "u4-move",
        section: "Let's Move",
        sub: "听一听，做动作",
        art: "rainbow",
        lines: [
          { en: "Red up!", zh: "红色举起来！" },
          { en: "Yellow up!", zh: "黄色举起来！" },
          { en: "Red down!", zh: "红色放下来！" },
          { en: "Blue and yellow up!", zh: "蓝色和黄色举起来！" }
        ],
        words: [
          { w: "up", zh: "向上", ipa: "/ʌp/" },
          { w: "down", zh: "向下", ipa: "/daʊn/" }
        ]
      },
      {
        id: "u4-story",
        section: "Story Time",
        sub: "看图听故事",
        art: "rainbow",
        lines: [
          { en: "Balloons!", zh: "气球！" },
          { en: "I like the balloons!", zh: "我喜欢这些气球！" },
          { en: "I like the green one.", zh: "我喜欢绿色的那个。" },
          { en: "I like the pink one.", zh: "我喜欢粉色的那个。" },
          { en: "I like the purple one.", zh: "我喜欢紫色的那个。" },
          { en: "I like the yellow one.", zh: "我喜欢黄色的那个。" },
          { en: "I like the yellow one too.", zh: "我也喜欢黄色的那个。" },
          { en: "Give it to me.", zh: "把它给我。" },
          { en: "Help!", zh: "救命！" },
          { en: "Oh no!", zh: "哦不！" },
          { en: "Are you OK?", zh: "你还好吗？" },
          { en: "I'm OK.", zh: "我没事。" },
          { en: "Sorry, Bobby.", zh: "对不起，波比。" }
        ],
        words: [
          { w: "balloons", zh: "气球", ipa: "/bəˈluːnz/" },
          { w: "one", zh: "一个", ipa: "/wʌn/" },
          { w: "give", zh: "给", ipa: "/ɡɪv/" },
          { w: "sorry", zh: "对不起", ipa: "/ˈsɒri/" },
          { w: "help", zh: "救命", ipa: "/help/" }
        ]
      }
    ]
  },
  {
    id: "en-u5",
    badge: "U5",
    title: "Here's My Scooter",
    zh: "玩具与出行",
    art: "toys",
    pages: [
      {
        id: "u5-sing",
        section: "Let's Sing",
        sub: "听一听，唱一唱",
        art: "toys",
        lines: [
          { en: "Do you have a little plane, little plane, little plane?", zh: "你有一架小飞机、小飞机、小飞机吗？" },
          { en: "Do you have a little plane? Yes, I do.", zh: "你有一架小飞机吗？是的，我有。" },
          { en: "Do you have a little car, little car, little car?", zh: "你有一辆小汽车、小汽车、小汽车吗？" },
          { en: "Do you have a little car? No, I don't.", zh: "你有一辆小汽车吗？不，我没有。" }
        ],
        words: [
          { w: "plane", zh: "飞机", ipa: "/pleɪn/" },
          { w: "car", zh: "汽车", ipa: "/kɑː/" },
          { w: "yes", zh: "是的", ipa: "/jes/" },
          { w: "no", zh: "不", ipa: "/nəʊ/" }
        ]
      },
      {
        id: "u5-chant",
        section: "Let's Chant",
        sub: "听一听，说一说",
        art: "toys",
        lines: [
          { en: "Here's my puzzle.", zh: "这是我的拼图。" },
          { en: "Here's my plane.", zh: "这是我的飞机。" },
          { en: "Here's my doll.", zh: "这是我的娃娃。" },
          { en: "Here's my train.", zh: "这是我的火车。" },
          { en: "Here's my scooter, in the rain.", zh: "这是我的滑板车，在雨中。" }
        ],
        words: [
          { w: "puzzle", zh: "拼图", ipa: "/ˈpʌzl/" },
          { w: "doll", zh: "娃娃", ipa: "/dɒl/" },
          { w: "train", zh: "火车", ipa: "/treɪn/" },
          { w: "scooter", zh: "滑板车", ipa: "/ˈskuːtə/" },
          { w: "rain", zh: "雨", ipa: "/reɪn/" }
        ]
      },
      {
        id: "u5-play",
        section: "Let's Play",
        sub: "说一说，秀一秀",
        art: "toys",
        lines: [
          { en: "I have a train. It's red and green. It's new. I like my train.", zh: "我有一列火车。它是红绿相间的。它是新的。我喜欢我的火车。" },
          { en: "I have a skipping rope. It's red. It's new. I like my skipping rope.", zh: "我有一根跳绳。它是红色的。它是新的。我喜欢我的跳绳。" }
        ],
        words: [
          { w: "skipping rope", zh: "跳绳", ipa: "/ˈskɪpɪŋ rəʊp/" }
        ]
      },
      {
        id: "u5-story",
        section: "Story Time",
        sub: "看图听故事",
        art: "toys",
        lines: [
          { en: "I have a bag. Do you have a bag? Yes, I do.", zh: "我有一个书包。你有书包吗？是的，我有。" },
          { en: "I have a cap. Do you have a cap? Yes, I do.", zh: "我有一顶帽子。你有帽子吗？是的，我有。" },
          { en: "I have a scooter. Do you have a scooter? Yes, I do.", zh: "我有一辆滑板车。你有滑板车吗？是的，我有。" },
          { en: "I have a watch. Do you have a watch? Yes, I do.", zh: "我有一块手表。你有手表吗？是的，我有。" },
          { en: "Er... I have a tail!", zh: "呃……我有一条尾巴！" },
          { en: "Do you have a tail? No, I don't.", zh: "你有尾巴吗？不，我没有。" },
          { en: "Ha ha!", zh: "哈哈！" }
        ],
        words: [
          { w: "cap", zh: "帽子", ipa: "/kæp/" },
          { w: "watch", zh: "手表", ipa: "/wɒtʃ/" },
          { w: "tail", zh: "尾巴", ipa: "/teɪl/" }
        ]
      }
    ]
  },
  {
    id: "en-u6",
    badge: "U6",
    title: "I Can Jump",
    zh: "动物与动作",
    art: "animals",
    pages: [
      {
        id: "u6-chant",
        section: "Let's Chant",
        sub: "听一听，说一说",
        art: "animals",
        lines: [
          { en: "Lion! Lion! Go! Go! Go!", zh: "狮子！狮子！冲！冲！冲！" },
          { en: "Monkey! Monkey! Go! Go! Go!", zh: "猴子！猴子！冲！冲！冲！" },
          { en: "Rabbit! Rabbit! Go! Go! Go!", zh: "兔子！兔子！冲！冲！冲！" },
          { en: "Elephant! Elephant! Go! Go! Go!", zh: "大象！大象！冲！冲！冲！" },
          { en: "Kangaroo! Kangaroo! Go! Go! Go!", zh: "袋鼠！袋鼠！冲！冲！冲！" }
        ],
        words: [
          { w: "lion", zh: "狮子", ipa: "/ˈlaɪən/" },
          { w: "monkey", zh: "猴子", ipa: "/ˈmʌŋki/" },
          { w: "rabbit", zh: "兔子", ipa: "/ˈræbɪt/" },
          { w: "elephant", zh: "大象", ipa: "/ˈelɪfənt/" },
          { w: "kangaroo", zh: "袋鼠", ipa: "/ˌkæŋɡəˈruː/" }
        ]
      },
      {
        id: "u6-sing",
        section: "Let's Sing",
        sub: "听一听，唱一唱",
        art: "animals",
        lines: [
          { en: "Andy is a monkey. Andy can swing.", zh: "安迪是一只猴子。安迪会荡秋千。" },
          { en: "Amy is a rabbit. Amy can run.", zh: "艾米是一只兔子。艾米会跑。" },
          { en: "Bobby is an elephant. Bobby can walk.", zh: "波比是一只大象。波比会走。" },
          { en: "Koto the kangaroo can jump far.", zh: "袋鼠科托能跳得很远。" }
        ],
        words: [
          { w: "swing", zh: "荡秋千", ipa: "/swɪŋ/" },
          { w: "run", zh: "跑", ipa: "/rʌn/" },
          { w: "walk", zh: "走", ipa: "/wɔːk/" },
          { w: "jump", zh: "跳", ipa: "/dʒʌmp/" },
          { w: "far", zh: "远", ipa: "/fɑː/" }
        ]
      },
      {
        id: "u6-play",
        section: "Let's Play",
        sub: "听一听，做动作",
        art: "animals",
        lines: [
          { en: "Swim like a fish.", zh: "像鱼一样游泳。" },
          { en: "Fly like a bird.", zh: "像鸟一样飞。" },
          { en: "Jump like a kangaroo.", zh: "像袋鼠一样跳。" },
          { en: "Walk like an elephant.", zh: "像大象一样走。" },
          { en: "Hop like a rabbit.", zh: "像兔子一样蹦。" },
          { en: "Swing like a monkey.", zh: "像猴子一样荡。" }
        ],
        words: [
          { w: "swim", zh: "游泳", ipa: "/swɪm/" },
          { w: "fish", zh: "鱼", ipa: "/fɪʃ/" },
          { w: "fly", zh: "飞", ipa: "/flaɪ/" },
          { w: "bird", zh: "鸟", ipa: "/bɜːd/" },
          { w: "hop", zh: "蹦", ipa: "/hɒp/" }
        ]
      },
      {
        id: "u6-story",
        section: "Story Time",
        sub: "看图听故事",
        art: "animals",
        lines: [
          { en: "A river!", zh: "一条河！" },
          { en: "I can fly over the river.", zh: "我能飞过这条河。" },
          { en: "I can swing over the river.", zh: "我能荡过这条河。" },
          { en: "I can swim across the river.", zh: "我能游过这条河。" },
          { en: "I can walk across the river.", zh: "我能走过这条河。" },
          { en: "What can I do?", zh: "我能做什么呢？" },
          { en: "Let me help you, Rabbit.", zh: "让我来帮你，兔子。" },
          { en: "Thank you, Elephant.", zh: "谢谢你，大象。" }
        ],
        words: [
          { w: "river", zh: "河流", ipa: "/ˈrɪvə/" },
          { w: "over", zh: "越过", ipa: "/ˈəʊvə/" },
          { w: "across", zh: "穿过", ipa: "/əˈkrɒs/" },
          { w: "help", zh: "帮助", ipa: "/help/" }
        ]
      }
    ]
  }
];


/* 课本图定位数据。图片来自用户提供的电子版，压缩为 WebP 后使用。 */
window.TEXTBOOK_IMAGES = {
  "u1-sing": {img:"assets/textbook/u1-sing.webp",boxes:[[0.3249,0.5194,0.1314,0.0222],[0.3252,0.5522,0.2618,0.0219],[0.3252,0.5856,0.2618,0.0206],[0.3252,0.6177,0.2618,0.0218],[0.3228,0.6489,0.1396,0.0277],[0.3252,0.6844,0.2638,0.0206],[0.5072,0.7703,0.229,0.0233]],wordBoxes:{"hi":[0.3228,0.6489,0.1396,0.0277],"hello":[0.3228,0.6489,0.1396,0.0277],"name":[0.3252,0.6844,0.2638,0.0206],"my":[0.5072,0.7703,0.229,0.0233]},textBoxes:[["tbt:u1-sing:0",0.135,0.0581,0.3415,0.0263],["tbt:u1-sing:1",0.1759,0.1483,0.3763,0.0306],["tbt:u1-sing:2",0.4741,0.1911,0.239,0.0866],["tbt:u1-sing:3",0.4964,0.2207,0.4394,0.0849]]},
  "u1-chant": {img:"assets/textbook/u1-chant.webp",boxes:[[0.1941,0.2683,0.1782,0.0244],[0.1941,0.3016,0.1742,0.0261],[0.1941,0.3336,0.1742,0.0261],[0.1942,0.3674,0.2149,0.0239],[0.2638,0.4724,0.0798,0.0189],[0.501,0.4927,0.0573,0.0174],[0.7033,0.4865,0.0822,0.0198],[0.1902,0.5552,0.1043,0.0218]],wordBoxes:{"how":[0.1942,0.3674,0.2149,0.0239],"you":[0.1942,0.3674,0.2149,0.0239],"good":[0.2638,0.4724,0.0798,0.0189],"great":[0.7033,0.4865,0.0822,0.0198],"superb":[0.1902,0.5552,0.1043,0.0218]},textBoxes:[["tbt:u1-chant:0",0.4514,0.0535,0.4264,0.0341],["tbt:u1-chant:1",0.454,0.1467,0.3824,0.0322],["tbt:u1-chant:2",0.1941,0.3016,0.1742,0.0261]]},
  "u1-try": {img:"assets/textbook/u1-try.webp",boxes:[[0.362,0.3488,0.3579,0.0234],[0.0982,0.4389,0.2986,0.025]],wordBoxes:{"my":[0.362,0.3488,0.3579,0.0234],"name":[0.362,0.3488,0.3579,0.0234]},textBoxes:[["tbt:u1-try:0",0.4966,0.0538,0.3708,0.0323],["tbt:u1-try:1",0.5493,0.1456,0.2965,0.0339]]},
  "u1-story": {img:"assets/textbook/u1-story.webp",boxes:[[0.2904,0.2367,0.2699,0.0222],[0.2942,0.261,0.2337,0.0238],[0.3843,0.3365,0.1255,0.0188],[0.7684,0.3385,0.1405,0.0222],[0.2556,0.3953,0.2147,0.0203],[0.2879,0.5972,0.1893,0.0239],[0.2859,0.6239,0.1545,0.0213],[0.6499,0.6213,0.1893,0.0225],[0.1642,0.6756,0.1344,0.0415]],wordBoxes:{"morning":[0.6499,0.6213,0.1893,0.0225],"welcome":[0.1642,0.6756,0.1344,0.0415],"Mr":[0.2859,0.6239,0.1545,0.0213]},textBoxes:[["tbt:u1-story:0",0.4519,0.0581,0.4254,0.0263],["tbt:u1-story:1",0.5112,0.1453,0.3456,0.0308],["tbt:u1-story:2",0.1642,0.303,0.1359,0.0465],["tbt:u1-story:3",0.6471,0.646,0.1087,0.023]]},
  "u2-sing": {img:"assets/textbook/u2-sing.webp",boxes:[[0.1489,0.3497,0.2178,0.0206],[0.1489,0.3829,0.2178,0.0206],[0.1489,0.4161,0.2711,0.019],[0.1511,0.4494,0.2556,0.0206],[0.1511,0.481,0.2556,0.0222],[0.1489,0.5142,0.2711,0.0206]],wordBoxes:{"pencil":[0.1244,0.8176,0.0882,0.0165],"new":[0.1267,0.8449,0.0556,0.0142]},textBoxes:[]},
  "u2-chant": {img:"assets/textbook/u2-chant.webp",boxes:[[0.1956,0.2009,0.4578,0.0222],[0.6265,0.3022,0.2385,0.0468],[0.3178,0.5222,0.2533,0.019],[0.16,0.7437,0.2422,0.0465]],wordBoxes:{"book":[[0.1533,0.432,0.0756,0.0206],[0.1729,0.8885,0.0605,0.024]],"pencil":[0.1521,0.4597,0.0939,0.022],"bag":[0.2405,0.8885,0.0454,0.024],"ruler":[[0.1533,0.4873,0.0733,0.0158],[0.2926,0.8885,0.0757,0.024]]},textBoxes:[]},
  "u2-move": {img:"assets/textbook/u2-move.webp",boxes:[[0.28,0.2832,0.3667,0.0206],[0.3175,0.3858,0.285,0.0251],[0.3086,0.5155,0.3028,0.0254],[0.3333,0.6282,0.2356,0.0253],[0.3333,0.7453,0.24,0.0206]],wordBoxes:{"pencil-case":[0.145,0.8708,0.17,0.0234],"eraser":[0.322,0.8708,0.1,0.0234]},textBoxes:[]},
  "u2-story": {img:"assets/textbook/u2-story.webp",boxes:[[0.1662,0.2504,0.361,0.0282],[0.5776,0.2957,0.2804,0.0238],[0.1107,0.5489,0.2498,0.0243],[0.7171,0.5561,0.1791,0.0468],[0.3378,0.6076,0.1711,0.019],[0.1578,0.6614,0.2733,0.019],[0.6085,0.6666,0.1252,0.0244]],wordBoxes:{"tooth":[0.6529,0.184,0.0741,0.0174]},textBoxes:[]},
  "u3-sing": {img:"assets/textbook/u3-sing.webp",boxes:[[0.1329,0.2442,0.5317,0.0219],[0.1329,0.3778,0.5133,0.0219],[0.1329,0.5233,0.5644,0.0218],[0.2984,0.6821,0.2826,0.02]],wordBoxes:{"one":[0.2044,0.894,0.045,0.019],"two":[0.254,0.894,0.04,0.019],"three":[0.3,0.894,0.07,0.019],"four":[0.377,0.894,0.056,0.019],"five":[0.44,0.894,0.056,0.019],"little":[0.2984,0.6821,0.2826,0.02],"black":[0.1329,0.2442,0.5317,0.0219],"cats":[0.2984,0.6821,0.2826,0.02],"row":[0.2984,0.6821,0.2826,0.02]},textBoxes:[]},
  "u3-count": {img:"assets/textbook/u3-count.webp",boxes:[[0.5951,0.1907,0.1472,0.0231],[0.1281,0.2462,0.1238,0.0203],[0.1346,0.4729,0.1173,0.023],[0.6992,0.5471,0.162,0.025],[0.304,0.7387,0.1218,0.0216]],wordBoxes:{"six":[0.1509,0.8907,0.045,0.0206],"seven":[0.2,0.8907,0.07,0.0206],"eight":[0.275,0.8907,0.07,0.0206],"nine":[0.35,0.8907,0.058,0.0206],"ten":[0.412,0.8907,0.045,0.0206],"door":[0.5968,0.2167,0.1867,0.0204],"tie":[0.1287,0.2711,0.1762,0.0217],"shoe":[0.1287,0.2711,0.1762,0.0217],"sticks":[0.135,0.5015,0.2249,0.0203],"late":[0.7013,0.5742,0.164,0.0196],"again":[0.3047,0.7644,0.1412,0.022]},textBoxes:[]},
  "u3-play": {img:"assets/textbook/u3-play.webp",boxes:[[0.0523,0.6254,0.3722,0.0341],[0.6432,0.6597,0.178,0.0261]],wordBoxes:{"how many":[0.0523,0.6254,0.3722,0.0341],"dogs":[0.0523,0.6254,0.3722,0.0341],"dog":[0.1467,0.9019,0.05,0.0206],"teddy bear":[0.2,0.9019,0.17,0.0206],"cat":[0.375,0.9019,0.05,0.0206],"doll":[0.43,0.9019,0.065,0.0206]},textBoxes:[]},
  "u3-story": {img:"assets/textbook/u3-story.webp",boxes:[[0.1708,0.2604,0.1897,0.0243],[0.5443,0.21,0.178,0.0231],[0.5442,0.2364,0.105,0.0193],[0.1778,0.4747,0.2956,0.0206],[0.5467,0.4747,0.3133,0.0206],[0.2376,0.732,0.1692,0.0233],[0.5867,0.7215,0.2822,0.0206],[0.5399,0.7964,0.147,0.0199],[0.6354,0.9141,0.1625,0.0231]],wordBoxes:{"two":[0.1778,0.4747,0.2956,0.0206],"three":[0.5467,0.4747,0.3133,0.0206],"six":[0.5867,0.7215,0.2822,0.0206],"pencils":[0.5867,0.7215,0.2822,0.0206]},textBoxes:[]},
  "u4-sing": {img:"assets/textbook/u4-sing.webp",boxes:[[0.3022,0.3813,0.4333,0.0237],[0.3022,0.4146,0.4356,0.0206],[0.3022,0.4478,0.4244,0.0222],[0.3019,0.4776,0.385,0.0255]],wordBoxes:{"rainbow":[0.4089,0.2136,0.22,0.0237],"purple":[0.1556,0.8972,0.0949,0.0206],"blue":[0.2663,0.8972,0.0632,0.0206],"green":[0.3453,0.8972,0.079,0.0206],"yellow":[0.4401,0.8972,0.0949,0.0206],"orange":[0.5508,0.8972,0.0949,0.0206],"red":[0.6615,0.8972,0.0474,0.0206],"smiling":[0.3019,0.6295,0.3848,0.0232]},textBoxes:[]},
  "u4-chant": {img:"assets/textbook/u4-chant.webp",boxes:[[0.1553,0.273,0.1965,0.0267],[0.155,0.3022,0.1953,0.0258],[0.1551,0.3377,0.2137,0.0239],[0.1547,0.3708,0.157,0.0251]],wordBoxes:{"like":[0.1553,0.273,0.1965,0.0267],"pink":[0.1439,0.8351,0.058,0.0207],"black":[0.203,0.8351,0.075,0.0207],"cool":[0.1547,0.3708,0.157,0.0251]},textBoxes:[]},
  "u4-move": {img:"assets/textbook/u4-move.webp",boxes:[[0.3067,0.2427,0.1022,0.0218],[0.683,0.3154,0.1431,0.0235],[0.2944,0.5348,0.1391,0.022],[0.6237,0.6394,0.2618,0.0219]],wordBoxes:{"up":[0.6237,0.6394,0.2618,0.0219],"down":[0.2944,0.5348,0.1391,0.022]},textBoxes:[]},
  "u4-story": {img:"assets/textbook/u4-story.webp",boxes:[[0.1622,0.1946,0.105,0.019],[0.1622,0.2199,0.235,0.019],[0.5377,0.1991,0.145,0.052],[0.7689,0.1962,0.13,0.048],[0.0509,0.4638,0.14,0.047],[0.3711,0.462,0.15,0.046],[0.6067,0.4383,0.31,0.0206],[0.6108,0.4637,0.17,0.019],[0.29,0.738,0.12,0.045],[0.13,0.738,0.13,0.045],[0.493,0.6815,0.185,0.0234],[0.7087,0.6798,0.156,0.0234],[0.7576,0.7051,0.1692,0.0264]],wordBoxes:{"balloons":[0.1622,0.2199,0.12,0.019]},textBoxes:[]},
  "u5-sing": {img:"assets/textbook/u5-sing.webp",boxes:[[0.3497,0.3444,0.3395,0.025],[0.3538,0.3778,0.3763,0.0219],[0.2859,0.6342,0.3382,0.0258],[0.2862,0.7005,0.3439,0.0222]],wordBoxes:{"plane":[0.1716,0.8728,0.1374,0.0219],"car":[0.2859,0.6342,0.3382,0.0258],"yes":[0.3538,0.4111,0.1391,0.0235],"no":[0.2838,0.7326,0.1623,0.0266]},textBoxes:[["tbt:u5-sing:0",0.4803,0.0553,0.3953,0.0309],["tbt:u5-sing:1",0.1513,0.1371,0.3931,0.0399],["tbt:u5-sing:2",0.3108,0.1961,0.3599,0.0278],["tbt:u5-sing:3",0.3535,0.3096,0.3729,0.0263],["tbt:u5-sing:4",0.2822,0.67,0.272,0.0233],["tbt:u5-sing:5",0.1717,0.8398,0.1903,0.0239]]},
  "u5-chant": {img:"assets/textbook/u5-chant.webp",boxes:[[0.3432,0.383,0.2522,0.0238],[0.3451,0.4146,0.2362,0.0259],[0.3452,0.4485,0.2155,0.0248],[0.3452,0.4816,0.2257,0.0239],[0.3447,0.5124,0.2616,0.0294]],wordBoxes:{"puzzle":[0.1427,0.8446,0.2972,0.0233],"doll":[0.3452,0.4485,0.2155,0.0248],"train":[0.1427,0.8446,0.2972,0.0233],"scooter":[0.1427,0.8446,0.2972,0.0233],"rain":[0.1427,0.8446,0.2972,0.0233]},textBoxes:[["tbt:u5-chant:0",0.1326,0.0538,0.4404,0.033],["tbt:u5-chant:1",0.1861,0.1483,0.3272,0.032],["tbt:u5-chant:2",0.3434,0.5487,0.1579,0.0191],["tbt:u5-chant:3",0.1451,0.8122,0.1781,0.0253]]},
  "u5-play": {img:"assets/textbook/u5-play.webp",boxes:[[0.3782,0.3734,0.2498,0.0218],[0.2229,0.7106,0.3211,0.0206]],wordBoxes:{"skipping rope":[0.6299,0.2644,0.1902,0.0206]},textBoxes:[["tbt:u5-play:0",0.4517,0.0537,0.4218,0.0326],["tbt:u5-play:1",0.2124,0.1396,0.2439,0.0263],["tbt:u5-play:2",0.6318,0.2308,0.1883,0.0253],["tbt:u5-play:3",0.3781,0.401,0.256,0.0229],["tbt:u5-play:4",0.3804,0.43,0.2863,0.0206],["tbt:u5-play:5",0.2225,0.7365,0.236,0.0239],["tbt:u5-play:6",0.2229,0.766,0.3374,0.0218]]},
  "u5-story": {img:"assets/textbook/u5-story.webp",boxes:[[0.12,0.19,0.3,0.09],[0.48,0.18,0.4,0.075],[0.49,0.34,0.4,0.11],[0.11,0.37,0.3,0.09],[0.17,0.605,0.08,0.04],[0.48,0.595,0.37,0.095],[0.34,0.605,0.1,0.035]],wordBoxes:{"cap":[0.142,0.8887,0.08,0.0192],"watch":[0.23,0.8887,0.1,0.0192],"tail":[0.4867,0.606,0.1467,0.0158]},textBoxes:[]},
  "u6-chant": {img:"assets/textbook/u6-chant.webp",boxes:[[0.1688,0.2243,0.2558,0.0466],[0.1711,0.2848,0.2558,0.0515],[0.1689,0.3513,0.2533,0.0443],[0.1689,0.4161,0.28,0.0448],[0.1686,0.4777,0.3029,0.0479]],wordBoxes:{"lion":[[0.1688,0.2243,0.1646,0.0198],[0.1978,0.5997,0.06,0.0206]],"monkey":[[0.1711,0.2848,0.26,0.0269],[0.261,0.5997,0.092,0.0206]],"rabbit":[[0.1689,0.3513,0.22,0.0206],[0.356,0.5997,0.092,0.0206]],"elephant":[[0.1689,0.4161,0.28,0.0222],[0.1978,0.625,0.12,0.0222]],"kangaroo":[[0.1686,0.4777,0.3029,0.0262],[0.322,0.625,0.12,0.0222]]},textBoxes:[]},
  "u6-sing": {img:"assets/textbook/u6-sing.webp",boxes:[[0.3824,0.436,0.2597,0.0218],[0.3822,0.5001,0.2274,0.0237],[0.3845,0.5683,0.3027,0.0206],[0.3837,0.6302,0.2569,0.0272]],wordBoxes:{"swing":[0.1431,0.8881,0.3211,0.0203],"run":[0.1431,0.8881,0.3211,0.0203],"walk":[0.1431,0.8881,0.3211,0.0203],"jump":[0.3824,0.6672,0.1861,0.0203],"far":[0.3824,0.6672,0.1861,0.0203]},textBoxes:[["tbt:u6-sing:0",0.1326,0.0553,0.3401,0.0305],["tbt:u6-sing:1",0.1759,0.1337,0.3436,0.0307],["tbt:u6-sing:2",0.409,0.1904,0.3804,0.0235],["tbt:u6-sing:3",0.3824,0.4694,0.2352,0.0206],["tbt:u6-sing:4",0.3816,0.5344,0.1917,0.026],["tbt:u6-sing:5",0.3845,0.6017,0.2331,0.0219],["tbt:u6-sing:6",0.1451,0.8544,0.1903,0.0253]]},
  "u6-play": {img:"assets/textbook/u6-play.webp",boxes:[[0.3959,0.2316,0.2529,0.027],[0.4015,0.2637,0.2148,0.0322],[0.3564,0.4635,0.3406,0.036],[0.3848,0.4947,0.3144,0.0397],[0.3638,0.7151,0.253,0.044],[0.3662,0.7456,0.308,0.0448]],wordBoxes:{"swim":[0.5256,0.8994,0.2883,0.0206],"fish":[0.5256,0.8994,0.2883,0.0206],"fly":[0.5256,0.8994,0.2883,0.0206],"bird":[0.5256,0.8994,0.2883,0.0206],"hop":[0.3638,0.7151,0.253,0.044]},textBoxes:[["tbt:u6-play:0",0.4703,0.0567,0.3558,0.0262],["tbt:u6-play:1",0.2142,0.129,0.2571,0.0312],["tbt:u6-play:2",0.5194,0.8677,0.2065,0.0234]]},
  "u6-story": {img:"assets/textbook/u6-story.webp",boxes:[[0.3999,0.2211,0.0981,0.0183],[0.6663,0.367,0.1695,0.0478],[0.0992,0.5046,0.2101,0.0479],[0.1733,0.8307,0.2222,0.0448],null,null,null,null],wordBoxes:{"river":[[0.1751,0.8554,0.1146,0.0201],[0.6683,0.3932,0.1146,0.0186]],"over":[0.6663,0.367,0.1695,0.0478],"across":[0.1733,0.8307,0.2222,0.0448]},textBoxes:[]}
};
window.TEXTBOOK_TEXT = {"tbt:u1-sing:0":"LET'S SING","tbt:u1-sing:1":"Listen, sing and act.","tbt:u1-sing:2":"HI, HELLO. WHAT'S YOUR NAME?","tbt:u1-sing:3":"HI, HELLO. WHAT'S YOUR NAME?","tbt:u1-chant:0":"LET'S CHANT","tbt:u1-chant:1":"› Listen, say and act.","tbt:u1-chant:2":"Hello, Sue.","tbt:u1-try:0":"LET'S TRY","tbt:u1-try:1":"Listen and say.","tbt:u1-story:0":"STORY TIME","tbt:u1-story:1":"Look, listen and act.","tbt:u1-story:2":"Welcome","tbt:u1-story:3":"Mr Leo.","tbt:u2-sing:0":"LET'S SING","tbt:u2-sing:1":"Listen, sing and act.","tbt:u2-sing:2":"Piggy Bank:","tbt:u2-chant:0":"LET'S CHANT","tbt:u2-chant:1":"Listen, say and act.","tbt:u2-chant:2":"Amy took the book","tbt:u2-chant:3":"pencil","tbt:u2-chant:4":"ruler","tbt:u2-chant:5":"Piggy Bank:","tbt:u2-chant:6":"book bag ruler","tbt:u2-move:0":"LET'S MOVE","tbt:u2-move:1":"Listen and act.","tbt:u2-move:2":"Piggy Bank:","tbt:u2-story:0":"STORY TIME","tbt:u2-story:1":"Look, listen and act.","tbt:u2-story:2":"Piggy Bank: 1)","tbt:u2-story:3":"I have a new pencil.","tbt:u3-sing:0":"LET'S SING","tbt:u3-sing:1":"Listen, sing and act.","tbt:u3-sing:2":"TEN LITTLE CATS","tbt:u3-sing:3":"Meow!!","tbt:u3-sing:4":"Meow!!","tbt:u3-sing:5":"Meow!!","tbt:u3-sing:6":"Meow!!","tbt:u3-sing:7":"PRRY","tbt:u3-sing:8":"Piggy Bank:","tbt:u3-sing:9":"one two three four five","tbt:u3-count:0":"LET'S CHANT","tbt:u3-count:1":"Listen, say and act.","tbt:u3-count:2":"Piggy Bank:","tbt:u3-count:3":"six seven eight nine ten","tbt:u3-play:0":"LET'S PLAY","tbt:u3-play:1":"Ask, count and say.","tbt:u3-play:2":"Piggy Bank:","tbt:u3-play:3":"dog teddy bear cat","tbt:u3-play:4":"doll","tbt:u3-story:0":"STORY TIME","tbt:u3-story:1":"1. I00","tbt:u4-sing:0":"LET'S SING","tbt:u4-sing:1":"Listen, sing and act.","tbt:u4-sing:2":"Rainbow","tbt:u4-sing:3":", rainbow","tbt:u4-sing:4":"Rainbow","tbt:u4-sing:5":"and","tbt:u4-sing:6":"too.","tbt:u4-sing:7":"Rainbow","tbt:u4-sing:8":"P, rainbow","tbt:u4-sing:9":"Piggy Bank:","tbt:u4-chant:0":"LET'S CHANT","tbt:u4-chant:1":"Listen, say and act.","tbt:u4-chant:2":"Piggy Bank:","tbt:u4-move:0":"LET'S MOVE","tbt:u4-move:1":"Listen and act.","tbt:u4-story:0":"STORY TIME","tbt:u4-story:1":"Look, listen and act.","tbt:u4-story:2":"Balloons! I like the","tbt:u4-story:3":"I like the","tbt:u4-story:4":"I like the","tbt:u4-story:5":"pink one.","tbt:u4-story:6":"AR","tbt:u4-story:7":"PARK","tbt:u4-story:8":"yellow one.","tbt:u5-sing:0":"LET'S SING","tbt:u5-sing:1":"Listen, sing and act","tbt:u5-sing:2":"DO YOU HAVE...?","tbt:u5-sing:3":"Do you have a little plane,","tbt:u5-sing:4":"little car, little car?","tbt:u5-sing:5":"Piggy Bank:","tbt:u5-chant:0":"LET'S CHANT","tbt:u5-chant:1":"Listen, say and act.","tbt:u5-chant:2":"In the rain.","tbt:u5-chant:3":"Piggy Bank:","tbt:u5-play:0":"LET'S PLAY","tbt:u5-play:1":"Show and tell.","tbt:u5-play:2":"Piggy Bank:","tbt:u5-play:3":"red and green. It's","tbt:u5-play:4":"new. I like my train.","tbt:u5-play:5":"It's red. It's new.","tbt:u5-play:6":"I like my skipping rope.","tbt:u5-story:0":"STORY TIME","tbt:u5-story:1":"Look, listen and act.","tbt:u5-story:2":"I have a bag. Do","tbt:u5-story:3":"Yes,","tbt:u5-story:4":"I do.","tbt:u5-story:5":"I have a cap. Do","tbt:u5-story:6":"Yes, I do","tbt:u5-story:7":"you have a bag?","tbt:u5-story:8":"you have a cap?","tbt:u5-story:9":"Thave a watch. Do","tbt:u5-story:10":"Do you have a scooter?","tbt:u5-story:11":"I have a tail!","tbt:u5-story:12":"=No, I don't.","tbt:u5-story:13":"Piggy Bank:","tbt:u6-chant:0":"LET'S CHANT","tbt:u6-chant:1":"Listen, say and act.","tbt:u6-chant:2":"Go! Go! Go!","tbt:u6-chant:3":"Go! Go! Go!","tbt:u6-chant:4":"Piggy Bank:","tbt:u6-chant:5":"lion monkey rabbit","tbt:u6-sing:0":"LET'S SING","tbt:u6-sing:1":"Listen, sing and act.","tbt:u6-sing:2":"ANDY CAN SWING","tbt:u6-sing:3":"Andy can swing.","tbt:u6-sing:4":"Amy can run.","tbt:u6-sing:5":"Bobby can walk.","tbt:u6-sing:6":"Piggy Bank:","tbt:u6-play:0":"LET'S PLAY","tbt:u6-play:1":"Listen and act.","tbt:u6-play:2":"Piggy Bank:","tbt:u6-story:0":"STORY TIME","tbt:u6-story:1":"Look, listen and act."};

/* 拼音综合认读 · 二声/三声等声调的清晰例字
   数组顺序：第一声、第二声、第三声、第四声；空字符串表示回退到拼音本身。 */
window.DRILL_SAY = {
  finals: {
    a: ["啊", "拔", "把", "爸"],
    o: ["噢", "伯", "跛", "簸"],
    e: ["婀", "鹅", "恶", "饿"],
    i: ["衣", "姨", "椅", "意"],
    u: ["乌", "无", "五", "雾"],
    "ü": ["迂", "鱼", "雨", "玉"],
    ai: ["哀", "癌", "矮", "爱"],
    ei: ["杯", "北", "被", ""],
    ui: ["威", "回", "悔", "会"],
    ao: ["凹", "熬", "袄", "傲"],
    ou: ["欧", "谋", "偶", "沤"],
    iu: ["优", "留", "柳", "六"],
    ie: ["耶", "爷", "也", "夜"],
    "üe": ["约", "瘸", "哕", "月"],
    er: ["", "儿", "耳", "二"],
    an: ["安", "谈", "俺", "岸"],
    en: ["恩", "人", "忍", "摁"],
    in: ["因", "银", "引", "印"],
    un: ["温", "文", "稳", "问"],
    "ün": ["晕", "云", "允", "运"],
    ang: ["肮", "昂", "仰", "盎"],
    eng: ["鞥", "衡", "冷", "愣"],
    ing: ["英", "赢", "影", "硬"],
    ong: ["翁", "红", "哄", "瓮"]
  },
  whole: {
    zhi: ["知", "直", "纸", "志"],
    chi: ["吃", "迟", "尺", "翅"],
    shi: ["诗", "十", "史", "是"],
    ri: ["", "", "", "日"],
    zi: ["资", "兹", "子", "字"],
    ci: ["雌", "词", "此", "次"],
    si: ["思", "", "死", "四"],
    yi: ["衣", "姨", "椅", "意"],
    wu: ["乌", "无", "五", "雾"],
    yu: ["迂", "鱼", "雨", "玉"],
    ye: ["耶", "爷", "也", "夜"],
    yue: ["约", "瘸", "哕", "月"],
    yuan: ["冤", "元", "远", "愿"],
    yin: ["因", "银", "引", "印"],
    yun: ["晕", "云", "允", "运"],
    ying: ["英", "赢", "影", "硬"]
  }
};

window.AUDIO_MAP=window.AUDIO_MAP||{};
window.AUDIO_MAP["py:diǎn"]="assets/audio/py-dian3.mp3";
window.AUDIO_MAP["fb:tone-1"]="assets/audio/feedback/tone-1.mp3";
window.AUDIO_MAP["fb:tone-2"]="assets/audio/feedback/tone-2.mp3";
window.AUDIO_MAP["fb:tone-3"]="assets/audio/feedback/tone-3.mp3";
window.AUDIO_MAP["fb:tone-4"]="assets/audio/feedback/tone-4.mp3";
window.AUDIO_MAP["blend:ba"]="assets/audio/blend-ba.mp3";
window.AUDIO_MAP["blend:pa"]="assets/audio/blend-pa.mp3";
window.AUDIO_MAP["blend:ma"]="assets/audio/blend-ma.mp3";
window.AUDIO_MAP["blend:fa"]="assets/audio/blend-fa.mp3";
window.AUDIO_MAP["blend:bo"]="assets/audio/blend-bo.mp3";
window.AUDIO_MAP["blend:po"]="assets/audio/blend-po.mp3";
window.AUDIO_MAP["blend:mo"]="assets/audio/blend-mo.mp3";
window.AUDIO_MAP["blend:fo"]="assets/audio/blend-fo.mp3";
window.AUDIO_MAP["blend:da"]="assets/audio/blend-da.mp3";
window.AUDIO_MAP["blend:ta"]="assets/audio/blend-ta.mp3";
window.AUDIO_MAP["blend:na"]="assets/audio/blend-na.mp3";
window.AUDIO_MAP["blend:la"]="assets/audio/blend-la.mp3";
window.AUDIO_MAP["blend:ge"]="assets/audio/blend-ge.mp3";
window.AUDIO_MAP["blend:ke"]="assets/audio/blend-ke.mp3";
window.AUDIO_MAP["blend:he"]="assets/audio/blend-he.mp3";
window.AUDIO_MAP["blend:ji"]="assets/audio/blend-ji.mp3";
window.AUDIO_MAP["blend:qi"]="assets/audio/blend-qi.mp3";
window.AUDIO_MAP["blend:xi"]="assets/audio/blend-xi.mp3";
window.AUDIO_MAP["blend:zha"]="assets/audio/blend-zha.mp3";
window.AUDIO_MAP["blend:cha"]="assets/audio/blend-cha.mp3";
window.AUDIO_MAP["blend:sha"]="assets/audio/blend-sha.mp3";
window.AUDIO_MAP["blend:za"]="assets/audio/blend-za.mp3";
window.AUDIO_MAP["blend:ca"]="assets/audio/blend-ca.mp3";
window.AUDIO_MAP["blend:sa"]="assets/audio/blend-sa.mp3";
window.PINYIN_BLENDS=[{"id": "ba", "label": "ba1", "py": "ba", "parts": ["b", "a", "ba"], "key": "blend:ba"}, {"id": "pa", "label": "pa1", "py": "pa", "parts": ["p", "a", "pa"], "key": "blend:pa"}, {"id": "ma", "label": "ma1", "py": "ma", "parts": ["m", "a", "ma"], "key": "blend:ma"}, {"id": "fa", "label": "fa1", "py": "fa", "parts": ["f", "a", "fa"], "key": "blend:fa"}, {"id": "bo", "label": "bo1", "py": "bo", "parts": ["b", "o", "bo"], "key": "blend:bo"}, {"id": "po", "label": "po1", "py": "po", "parts": ["p", "o", "po"], "key": "blend:po"}, {"id": "mo", "label": "mo1", "py": "mo", "parts": ["m", "o", "mo"], "key": "blend:mo"}, {"id": "fo", "label": "fo1", "py": "fo", "parts": ["f", "o", "fo"], "key": "blend:fo"}, {"id": "da", "label": "da1", "py": "da", "parts": ["d", "a", "da"], "key": "blend:da"}, {"id": "ta", "label": "ta1", "py": "ta", "parts": ["t", "a", "ta"], "key": "blend:ta"}, {"id": "na", "label": "na1", "py": "na", "parts": ["n", "a", "na"], "key": "blend:na"}, {"id": "la", "label": "la1", "py": "la", "parts": ["l", "a", "la"], "key": "blend:la"}, {"id": "ge", "label": "ge1", "py": "ge", "parts": ["g", "e", "ge"], "key": "blend:ge"}, {"id": "ke", "label": "ke1", "py": "ke", "parts": ["k", "e", "ke"], "key": "blend:ke"}, {"id": "he", "label": "he1", "py": "he", "parts": ["h", "e", "he"], "key": "blend:he"}, {"id": "ji", "label": "ji1", "py": "ji", "parts": ["j", "i", "ji"], "key": "blend:ji"}, {"id": "qi", "label": "qi1", "py": "qi", "parts": ["q", "i", "qi"], "key": "blend:qi"}, {"id": "xi", "label": "xi1", "py": "xi", "parts": ["x", "i", "xi"], "key": "blend:xi"}, {"id": "zha", "label": "zha1", "py": "zha", "parts": ["zh", "a", "zha"], "key": "blend:zha"}, {"id": "cha", "label": "cha1", "py": "cha", "parts": ["ch", "a", "cha"], "key": "blend:cha"}, {"id": "sha", "label": "sha1", "py": "sha", "parts": ["sh", "a", "sha"], "key": "blend:sha"}, {"id": "za", "label": "za1", "py": "za", "parts": ["z", "a", "za"], "key": "blend:za"}, {"id": "ca", "label": "ca1", "py": "ca", "parts": ["c", "a", "ca"], "key": "blend:ca"}, {"id": "sa", "label": "sa1", "py": "sa", "parts": ["s", "a", "sa"], "key": "blend:sa"}];

window.AUDIO_MAP=window.AUDIO_MAP||{};
window.AUDIO_MAP["en-feedback:right"]="assets/audio/english/feedback/right.mp3";
window.AUDIO_MAP["en-feedback:wrong"]="assets/audio/english/feedback/wrong.mp3";

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
    s.src = "audio-bundle.js?v=20261121-44";
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
    "en-words": "words", "en-sentences": "sentences"
  };

  function themeArt(theme, cls) {
    var art = {
      sky: '<circle cx="18" cy="11" r="6" fill="#FFD98A"/><path d="M5 27c3-6 8-9 13-9s10 3 13 9" fill="#BDE9DA"/><circle cx="11" cy="17" r="1.4" fill="#F47A9A"/><circle cx="25" cy="17" r="1.4" fill="#F47A9A"/><path d="M15 20c2 2 4 2 6 0" stroke="#8C6054" stroke-width="1.8" fill="none" stroke-linecap="round"/>',
      pinyin: '<ellipse cx="18" cy="19" rx="13" ry="9" fill="#FFFDF8" stroke="#D7C7EE" stroke-width="2"/><text x="10" y="24" font-size="16" font-family="Andika, sans-serif" fill="#8E6FB4">a</text><text x="18" y="16" font-size="11" font-family="Andika, sans-serif" fill="#4FAF92">o</text><text x="25" y="24" font-size="11" font-family="Andika, sans-serif" fill="#F26D8D">e</text>',
      pinyin1: '<path d="M5 25h26" stroke="#F7C98B" stroke-width="3" stroke-linecap="round"/><text x="6" y="22" font-size="14" font-family="Andika, sans-serif" fill="#8E6FB4">a</text><text x="15" y="22" font-size="14" font-family="Andika, sans-serif" fill="#4FAF92">o</text><text x="24" y="22" font-size="14" font-family="Andika, sans-serif" fill="#F26D8D">e</text>',
      pinyin2: '<rect x="5" y="9" width="26" height="18" rx="5" fill="#FFFDF8" stroke="#BCDDF8" stroke-width="2"/><text x="7" y="23" font-size="13" font-family="Andika, sans-serif" fill="#6FA8DE">b</text><text x="15" y="23" font-size="13" font-family="Andika, sans-serif" fill="#8E6FB4">p</text><text x="23" y="23" font-size="13" font-family="Andika, sans-serif" fill="#4FAF92">m</text>',
      pinyin3: '<path d="M6 24c4-7 8-7 12 0s8 7 12 0" stroke="#F2A06D" stroke-width="2.5" fill="none" stroke-linecap="round"/><text x="7" y="17" font-size="10" font-family="Andika, sans-serif" fill="#8E6FB4">ai</text><text x="16" y="14" font-size="10" font-family="Andika, sans-serif" fill="#4FAF92">ei</text><text x="25" y="17" font-size="9" font-family="Andika, sans-serif" fill="#F26D8D">ang</text>',
      "pinyin-hub": '<circle cx="18" cy="18" r="12" fill="#FFF8EE" stroke="#C7AEE7" stroke-width="2"/><text x="9" y="23" font-size="14" font-family="Andika, sans-serif" fill="#8E6FB4">ā</text><path d="M23 10l2 4 4 1-4 2-2 4-2-4-4-2 4-1z" fill="#FFB062"/>',
      autumn: '<path d="M27 7c-9 2-14 8-15 17" stroke="#9B5D50" stroke-width="2.2" fill="none" stroke-linecap="round"/><ellipse cx="14" cy="21" rx="7" ry="4" fill="#F4A261" transform="rotate(-22 14 21)"/><ellipse cx="23" cy="15" rx="6" ry="3.5" fill="#F7C95C" transform="rotate(24 23 15)"/><circle cx="9" cy="27" r="2" fill="#D987A0"/>',
      school: '<rect x="6" y="10" width="24" height="18" rx="4" fill="#FFE8A9" stroke="#E8A56B" stroke-width="2"/><path d="M6 16h24" stroke="#E8A56B" stroke-width="2"/><rect x="15" y="19" width="6" height="9" rx="1" fill="#FF93A8"/><circle cx="18" cy="23.5" r="0.8" fill="#FFF"/>',
      moon: '<path d="M22 7a10 10 0 1 0 7 17A11 11 0 0 1 22 7z" fill="#FFD77A"/><circle cx="9" cy="10" r="1.6" fill="#C6B4E8"/><circle cx="13" cy="25" r="1.2" fill="#8FD3BE"/><path d="M25 13l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="#FFF6D5"/>',
      crow: '<ellipse cx="17" cy="21" rx="8" ry="6" fill="#6F5A93"/><circle cx="23" cy="15" r="4" fill="#6F5A93"/><path d="M26 15l6 2-6 2z" fill="#F3A85C"/><circle cx="24" cy="14" r="1" fill="#FFF"/><path d="M12 27l-3 4M21 27l3 4" stroke="#6F5A93" stroke-width="2" stroke-linecap="round"/>',
      hello: '<circle cx="16" cy="16" r="7" fill="#FFE2C8"/><path d="M9 15c1-5 4-7 7-7s6 2 7 7" fill="#6E5146"/><circle cx="13" cy="16" r="1" fill="#5A443C"/><circle cx="19" cy="16" r="1" fill="#5A443C"/><path d="M13 20c2 2 4 2 6 0" stroke="#E4788D" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M25 8c2-2 4-1 4 1M8 8c-2-2-4-1-4 1" stroke="#F4A261" stroke-width="1.6" stroke-linecap="round"/>',
      bag: '<rect x="7" y="13" width="22" height="16" rx="5" fill="#8FD3BE"/><path d="M12 14v-2a6 6 0 0 1 12 0v2" stroke="#4FAF92" stroke-width="2.2" fill="none"/><rect x="14" y="19" width="8" height="5" rx="2" fill="#FFFDF8"/><circle cx="18" cy="21.5" r="1" fill="#F3A85C"/>',
      count: '<rect x="5" y="8" width="26" height="20" rx="5" fill="#FFFDF8" stroke="#BEDDF8" stroke-width="2"/><text x="8" y="23" font-size="12" font-family="Andika, sans-serif" fill="#6FA8DE">1</text><text x="16" y="23" font-size="12" font-family="Andika, sans-serif" fill="#4FAF92">2</text><text x="24" y="23" font-size="12" font-family="Andika, sans-serif" fill="#F3A85C">3</text>',
      rainbow: '<path d="M5 27c0-10 6-17 13-17s13 7 13 17" stroke="#FF93A8" stroke-width="3.2" fill="none" stroke-linecap="round"/><path d="M9 27c0-7 4-12 9-12s9 5 9 12" stroke="#FFD86B" stroke-width="3.2" fill="none" stroke-linecap="round"/><path d="M13 27c0-4 2-7 5-7s5 3 5 7" stroke="#8FD3BE" stroke-width="3.2" fill="none" stroke-linecap="round"/><circle cx="7" cy="10" r="1.4" fill="#C6B4E8"/>',
      scooter: '<circle cx="10" cy="27" r="4" fill="#5A443C"/><circle cx="27" cy="27" r="4" fill="#5A443C"/><path d="M12 26h9l5-12" stroke="#F27A9B" stroke-width="2.8" fill="none" stroke-linecap="round"/><path d="M24 14h6" stroke="#8D746A" stroke-width="2.8" stroke-linecap="round"/><circle cx="11" cy="27" r="1.2" fill="#FFF"/><circle cx="28" cy="27" r="1.2" fill="#FFF"/>',
      animals: '<ellipse cx="15" cy="20" rx="7" ry="6" fill="#B79A86"/><circle cx="25" cy="21" r="5" fill="#FFFDF8"/><path d="M22 17l-1-4 4 2zM28 17l1-4-4 2z" fill="#FFFDF8"/><circle cx="13" cy="19" r="1" fill="#5A443C"/><circle cx="17" cy="19" r="1" fill="#5A443C"/><circle cx="23" cy="20" r="0.9" fill="#5A443C"/><circle cx="27" cy="20" r="0.9" fill="#5A443C"/>',
      review: '<circle cx="18" cy="18" r="10" fill="none" stroke="#7FC9B4" stroke-width="3"/><path d="M23 11a10 10 0 0 1 4 8" stroke="#F2A06D" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M23 7v5h5" stroke="#F2A06D" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="18" cy="18" r="2.4" fill="#FFFDF8"/>',
      names: '<rect x="5" y="9" width="26" height="19" rx="5" fill="#FFFDF8" stroke="#D8C7EE" stroke-width="2"/><text x="8" y="23" font-size="13" font-family="Andika, sans-serif" fill="#8E6FB4">A</text><text x="16" y="23" font-size="13" font-family="Andika, sans-serif" fill="#F26D8D">B</text><text x="24" y="23" font-size="13" font-family="Andika, sans-serif" fill="#4FAF92">C</text>',
      words: '<rect x="7" y="8" width="22" height="20" rx="4" fill="#FFFDF8" stroke="#F3C986" stroke-width="2"/><path d="M11 14h14M11 19h11M11 24h8" stroke="#E3CBA8" stroke-width="2" stroke-linecap="round"/><circle cx="26" cy="25" r="4" fill="#F4A261"/><path d="M25 23v4M23 25h4" stroke="#FFF" stroke-width="1.5" stroke-linecap="round"/>',
      sentences: '<rect x="5" y="8" width="26" height="16" rx="6" fill="#FFFDF8" stroke="#C9B8EA" stroke-width="2"/><path d="M9 14h16M9 19h11" stroke="#C9B8EA" stroke-width="2" stroke-linecap="round"/><path d="M20 25c3 2 6 1 8-1" stroke="#F27A9B" stroke-width="2.6" fill="none" stroke-linecap="round"/><circle cx="28" cy="24" r="2" fill="#F27A9B"/>'
    }[theme];
    if (!art) return "";
    return '<span class="card-art ' + (cls || "") + '" aria-hidden="true">' +
      '<svg viewBox="0 0 36 36">' + art + "</svg></span>";
  }

  function cardBackdrop(theme) {
    return themeArt(theme || "words", "").replace('class="card-art "', 'class="tile-bg"');
  }

  function gameTheme(kind) {
    var map = {
      pinyin: "pinyin", stroke: "school", trace: "school",
      pinyinQuiz: "pinyin2", toneQuiz: "pinyin3", blendQuiz: "pinyin"
    };
    return map[kind] || "school";
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
    card.innerHTML = cardBackdrop(gameTheme(kind)) +
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
    else if (["s-pinyin", "s-read", "s-pinyin-quiz", "s-tone-quiz", "s-blend-quiz", "s-stroke", "s-trace"].indexOf(id) >= 0) {
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
    resetBlendCountdown();
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
    $("#bqReadBtn").classList.add("is-recording");
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
      startBlendCountdown(6);
      bqReadTimer = setTimeout(function () { stopBlendRead(false); }, 6500);
    } catch (err) {
      finishBlendRead([], true);
    }
  }

  var bqCountTimer = null;

  function startBlendCountdown(seconds) {
    clearInterval(bqCountTimer);
    var left = seconds;
    var el = $("#bqReadCount");
    if (!el) return;
    el.hidden = false;
    el.classList.remove("low");
    el.textContent = left + " 秒";
    bqCountTimer = setInterval(function () {
      left--;
      if (left <= 0) {
        clearInterval(bqCountTimer);
        bqCountTimer = null;
        el.textContent = "0 秒";
        return;
      }
      el.textContent = left + " 秒";
      el.classList.toggle("low", left <= 2);
    }, 1000);
  }

  function resetBlendCountdown() {
    if (bqCountTimer) {
      clearInterval(bqCountTimer);
      bqCountTimer = null;
    }
    var el = $("#bqReadCount");
    if (el) {
      el.hidden = true;
      el.classList.remove("low");
      el.textContent = "";
    }
    var btn = $("#bqReadBtn");
    if (btn) btn.classList.remove("is-recording");
  }

  function stopBlendRead(manual) {
    if (bqReadSettled) return;
    bqReadActive = false;
    resetBlendCountdown();
    if (bqReadTimer) {
      clearTimeout(bqReadTimer);
      bqReadTimer = null;
    }
    $("#bqReadStatus").textContent = manual ? "正在结算…" : "时间到，正在结算…";
    try { if (bqReadRec) bqReadRec.stop(); } catch (err) {}
    setTimeout(function () {
      if (!bqReadSettled) finishBlendRead([], false);
    }, manual ? 350 : 800);
  }

  function finishBlendRead(alts, failed) {
    if (!bqState || bqReadSettled) return;
    bqReadSettled = true;
    bqReadActive = false;
    resetBlendCountdown();
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
    b.innerHTML = cardBackdrop("pinyin-hub") +
      '<span class="tile-top"><span class="tile-tag">拼音</span>' +
        '<span class="tile-count">63</span></span>' +
      "<h4>拼音综合认读</h4>" +
      '<p class="tile-sub">点读 + 拼读工坊</p>';
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
    s.src = "assets/spell-data.js?v=20261121-44";
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
        var a = new Audio(entry.audio + "?v=20261121-44");
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

  function extraUnitMeta(u) {
    var badge = String(u.badge || u.unit || "").trim();
    var unit = String(u.unit || "").trim();
    var number = badge.match(/\d+/) || unit.match(/\d+/);
    var n = number ? Number(number[0]) : 0;
    if (/^U\d+$/i.test(badge)) {
      return { badge: badge.toUpperCase(), label: "Unit " + n, order: n };
    }
    if (/^R\d+$/i.test(badge) || /revision/i.test(unit)) {
      return {
        badge: badge.toUpperCase() || "R" + n,
        label: n === 2 ? "复习 Unit 4–6" : "复习 Unit 1–3",
        order: 100 + n
      };
    }
    if (/^ABC$/i.test(badge) || /names/i.test(unit)) {
      return { badge: "ABC", label: "英文名字", order: 110 };
    }
    return {
      badge: badge || unit.slice(0, 2),
      label: unit || badge || "其他",
      order: n || 90
    };
  }

  function buildEnglishExtras() {
    var english = DECKS.filter(function (d) { return d.id === "english"; })[0];
    if (!english || english._extrasBuilt) return;
    var words = [], sentences = [];
    var seenWord = {}, seenSentence = {};

    function addWord(text, zh, ipa, srcId, meta, order) {
      var key = String(text || "").toLowerCase().trim();
      if (!key || seenWord[key]) return;
      seenWord[key] = 1;
      words.push({
        text: text, zh: zh, ipa: ipa, srcId: srcId,
        unitLabel: meta.label, unitBadge: meta.badge,
        unitOrder: meta.order, pageOrder: order || 0
      });
    }
    function addSentence(text, zh, srcId, meta, order) {
      var key = String(text || "").toLowerCase().trim();
      if (!key || seenSentence[key]) return;
      seenSentence[key] = 1;
      sentences.push({
        text: text, zh: zh, srcId: srcId,
        unitLabel: meta.label, unitBadge: meta.badge,
        unitOrder: meta.order, pageOrder: order || 0
      });
    }

    english.units.forEach(function (u) {
      var meta = extraUnitMeta(u);
      u.items.forEach(function (it, i) {
        var text = String(it.text || "").trim();
        var key = text.toLowerCase();
        var srcId = u.id + ":" + i;
        if (isEnglishSentence(text)) addSentence(text, it.zh, srcId, meta, i);
        else {
          addWord(text, it.zh, it.ipa, srcId, meta, i);
        }
      });
    });

    TB.forEach(function (u) {
      var meta = extraUnitMeta(u);
      u.pages.forEach(function (p, pi) {
        p.lines.forEach(function (line, i) {
          addSentence(line.en, line.zh, tbLineKey(p, i), meta, pi * 100 + i);
        });
        p.words.forEach(function (w, i) {
          addWord(w.w, w.zh, w.ipa, tbWordKey(w.w), meta, pi * 100 + i);
        });
      });
    });

    function byUnit(a, b) {
      return (a.unitOrder - b.unitOrder) ||
        (a.pageOrder - b.pageOrder) ||
        String(a.text).localeCompare(String(b.text));
    }
    words.sort(byUnit);
    sentences.sort(byUnit);

    DECKS.push({
      id: "en-words", subject: "en", extra: true, tag: "WORDS",
      title: "英语单词", sub: "按课本单元整理 · 单词跟读", lang: "en-GB", color: "lilac",
      items: words, grouped: true
    });
    DECKS.push({
      id: "en-sentences", subject: "en", extra: true, tag: "SENT",
      title: "英语句子", sub: "按课本单元整理 · 课文句子跟读", lang: "en-GB", color: "lilac",
      items: sentences, grouped: true
    });
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
      ? "课本、单词、句子和跟读"
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
      isEn ? "6 个单元 · 2 个复习 · 英文名" : "8 个单元，点开就能读",
      "subject-units"
    );
    decks.forEach(function (deck) {
      if (!deck.units) return;
      deck.units.forEach(function (u) { unitGrid.appendChild(unitCard(u, subject.id)); });
    });
    var drillIds = { "zh-tones": 1, "zh-initials": 1, "zh-finals": 1, "zh-whole": 1 };
    var extras = decks.filter(function (d) { return !d.units && !drillIds[d.id]; });
    if (extras.length || isEn) {
      var practiceGrid = addSection(
        isEn ? "专项练习" : "拼音与字词",
        isEn ? "读课文 · 单词 · 句子" : "拼音认读、拼读工坊、词语和句子，随时加练",
        "subject-practice"
      );
      if (!isEn) practiceGrid.appendChild(pinyinDrillCard());
      if (isEn && TB.length) practiceGrid.appendChild(textbookEntryCard());
      extras.forEach(function (d) { practiceGrid.appendChild(deckCard(d)); });
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
    b.innerHTML = cardBackdrop("hello") +
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
    b.innerHTML = cardBackdrop(ART_THEMES[u.id] || "sky") +
      '<span class="tile-top"><span class="tile-tag">' +
        escapeHTML(u.badge || u.unit.replace("Unit ", "U")) + "</span>" +
        '<span class="tile-count">' + done + "/" + u.items.length + "</span></span>" +
      "<h4>" + escapeHTML(u.title) + "</h4>" +
      '<p class="tile-sub">' + escapeHTML(u.zh) + "</p>";
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
      "en-words": "词", "en-sentences": "句",
      "zh-tones": "调", "zh-initials": "母", "zh-finals": "韵", "zh-whole": "整"
    };
    var b = document.createElement("button");
    b.type = "button";
    b.className = "unit-card tile-card deck-card";
    b.innerHTML = cardBackdrop(ART_THEMES[deck.id] || "words") +
      '<span class="tile-top"><span class="tile-tag">' +
        escapeHTML(marks[deck.id] || deck.tag.slice(0, 2)) + "</span>" +
        '<span class="tile-count">' + done + "/" + entries.length + "</span></span>" +
      "<h4>" + escapeHTML(deck.title) + "</h4>" +
      '<p class="tile-sub">' + escapeHTML(deck.sub) + "</p>";
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
    var lastGroup = "";
    function pickerItem(it, i) {
      var itemId = it.srcId || (deck.id + ":" + i);
      var b = document.createElement("button");
      b.type = "button";
      b.className = "pick-item" + (deck.id === "en-sentences" ? " long" : "");
      var stars = state.read[itemId] || 0;
      var subline = it.py
        ? (it.py + (it.zh && it.zh !== it.text ? " · " + it.zh : ""))
        : (it.zh || "");
      b.innerHTML =
        (deck.grouped ? "" : it.unitLabel ? '<em>' + escapeHTML(it.unitLabel) + "</em>" : "") +
        "<b>" + escapeHTML(it.text) + "</b>" +
        (subline ? "<span>" + escapeHTML(subline) + "</span>" : "") +
        (stars ? '<span class="pick-stars">' + starTag(stars) + "</span>" : "");
      b.addEventListener("click", function () {
        sfx("tap");
        startDeck(deck, i, { screen: "s-pick", deck: deck });
      });
      return b;
    }
    deck.items.forEach(function (it, i) {
      if (deck.grouped) {
        var group = it.unitLabel || it.unitBadge || "其他";
        if (group !== lastGroup) {
          lastGroup = group;
          var h = document.createElement("div");
          h.className = "pick-group";
          h.innerHTML = "<b>" + escapeHTML(group) + "</b><span>" +
            deck.items.filter(function (x) {
              return (x.unitLabel || x.unitBadge || "其他") === group;
            }).length + " 个</span>";
          grid.appendChild(h);
        }
      }
      grid.appendChild(pickerItem(it, i));
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
    var isEn = openScreenId === "s-textbook" ||
      (openScreenId === "s-speak" && speakState && String(speakState.lang || "").indexOf("en") === 0);
    var isPinyin = pinyinScreens.indexOf(openScreenId) >= 0;
    var show = isEn || isPinyin || chineseScreens.indexOf(openScreenId) >= 0 ||
      openScreenId === "s-speak";
    f.hidden = !show;
    f.classList.toggle("on-drill", isPinyin);
    f.classList.toggle("on-textbook", openScreenId === "s-textbook");
    f.classList.toggle("on-speak", openScreenId === "s-speak");
    f.classList.toggle("on-quiz", openScreenId === "s-pinyin-quiz" ||
      openScreenId === "s-tone-quiz" || openScreenId === "s-blend-quiz");
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
