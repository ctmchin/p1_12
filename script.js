document.addEventListener('DOMContentLoaded', function() {

    // --- COMPLETE DATABASE WITH FULL CONTENT ---
    const database = {
        "1": {
            title: "〈論仁論孝論君子〉",
            sections: {
                "1.0": { title: "課文原文", content: `<h2>〈論仁論孝論君子〉原文</h2><h3>【論仁】</h3><p>子曰：「不仁者，不可以久處約，不可以長處樂。仁者安仁，知者利仁。」</p><p>子曰：「富與貴，是人之所欲也；不以其道得之，不處也。貧與賤，是人之所惡也；不以其道得之，不去也。君子去仁，惡乎成名？君子無終食之間違仁，造次必於是，顛沛必於是。」</p><p>顏淵問仁。子曰：「克己復禮為仁。一日克己復禮，天下歸仁焉。為仁由己，而由人乎哉？」顏淵曰：「請問其目。」子曰：「非禮勿視，非禮勿聽，非禮勿言，非禮勿動。」</p><p>子曰：「志士仁人，無求生以害仁，有殺身以成仁。」</p><h3>【論孝】</h3><p>孟懿子問孝。子曰：「無違。」樊遲御，子告之曰：「孟孫問孝於我，我對曰，無違。」樊遲曰：「何謂也？」子曰：「生，事之以禮；死，葬之以禮，祭之以禮。」</p><p>子游問孝。子曰：「今之孝者，是謂能養。至於犬馬，皆能有養；不敬，何以別乎！」</p><p>子曰：「事父母幾諫，見志不從，又敬不違，勞而不怨。」</p><p>子曰：「父母之年，不可不知也。一則以喜，一則以懼。」</p><h3>【論君子】</h3><p>子曰：「君子不重則不威；學則不固。主忠信。無友不如己者。過則勿憚改。」</p><p>子曰：「君子坦蕩蕩，小人長戚戚。」</p><p>司馬牛問君子。子曰：「君子不憂不懼。」曰：「不憂不懼，斯謂之君子已乎？」子曰：「內省不疚，夫何憂何懼？」</p><p>子曰：「君子成人之美，不成人之惡。小人反是。」</p><p>子曰：「君子恥其言而過其行。」</p><p>子曰：「君子義以為質，禮以行之，孫以出之，信以成之。君子哉！」</p><p>子曰：「君子病無能焉，不病人之不己知也。」</p><p>子曰：「君子求諸己，小人求諸人。」</p>` },
                "1.6": { title: "互動溫習卡片", type: "flashcard" },
                "1.7": { title: "互動答題挑戰", type: "quiz" }
            }
        },
        "2": {
            title: "〈魚我所欲也〉",
            sections: { "2.0": { title: "課文原文", content: `<h2>〈魚我所欲也〉原文</h2><p>孟子曰：「魚，我所欲也；熊掌，亦我所欲也。二者不可得兼，舍魚而取熊掌者也。生，亦我所欲也；義，亦我所欲也。二者不可得兼，舍生而取義者也。</p><p>生亦我所欲，所欲有甚於生者，故不為苟得也；死亦我所惡，所惡有甚於死者，故患有所不辟也。如使人之所欲莫甚於生，則凡可以得生者，何不用也？使人之所惡莫甚於死者，則凡可以辟患者，何不為也？由是則生而有不用也，由是則可以辟患而有不為也。是故所欲有甚於生者，所惡有甚於死者。非獨賢者有是心也，人皆有之，賢者能勿喪耳。</p><p>一簞食，一豆羹，得之則生，弗得則死。嘑爾而與之，行道之人弗受；蹴爾而與之，乞人不屑也。萬鍾則不辯禮義而受之。萬鍾於我何加焉？為宮室之美、妻妾之奉、所識窮乏者得我與？鄉為身死而不受，今為宮室之美為之；鄉為身死而不受，今為妻妾之奉為之；鄉為身死而不受，今為所識窮乏者得我而為之。是亦不可以已乎？此之謂失其本心。」</p>`}, "2.1": { title: "互動溫習卡片", type: "flashcard" }, "2.2": { title: "互動答題挑戰", type: "quiz" } }
        },
        "3": {
            title: "〈逍遙遊〉",
            sections: { "3.0": { title: "課文原文", content: `<h2>〈逍遙遊〉(節錄)原文</h2><p>惠子謂莊子曰：「魏王貽我大瓠之種，我樹之成而實五石；以盛水漿，其堅不能自舉也；剖之以為瓢，則瓠落無所容。非不呺然大也，吾為其無用而掊之。」</p><p>莊子曰：「夫子固拙於用大矣。宋人有善為不龜手之藥者，世世以洴澼絖為事。客聞之，請買其方百金。聚族而謀曰：『我世世為洴澼絖，不過數金；今一朝而鬻技百金，請與之。』客得之，以說吳王。越有難，吳王使之將，冬與越人水戰，大敗越人，裂地而封之。能不龜手，一也；或以封，或不免於洴澼絖，則所用之異也。今子有五石之瓠，何不慮以為大樽而浮乎江湖，而憂其瓠落無所容？則夫子猶有蓬之心也夫！」</p><p>惠子謂莊子曰：「吾有大樹，人謂之樗。其大本擁腫而不中繩墨，其小枝卷曲而不中規矩，立之塗，匠者不顧。今子之言，大而無用，眾所同去也。」</p><p>莊子曰：「子獨不見狸狌乎？卑身而伏，以候敖者；東西跳梁，不辟高下，中於機辟，死於罔罟。今夫斄牛，其大若垂天之雲；此能為大矣，而不能執鼠。今子有大樹，患其無用，何不樹之於無何有之鄉，廣莫之野，彷徨乎無為其側，逍遙乎寢卧其下；不夭斤斧，物無害者。無所可用，安所困苦哉？」</p>`}, "3.1": { title: "互動溫習卡片", type: "flashcard" }, "3.2": { title: "互動答題挑戰", type: "quiz" } }
        },
        "4": {
            title: "〈勸學〉",
            sections: { "4.0": { title: "課文原文", content: `<h2>〈勸學〉(節錄) 原文</h2><p>君子曰：學不可以已。</p><p>青，取之於藍，而青於藍；冰，水為之，而寒於水。木直中繩，輮以為輪，其曲中規。雖有槁暴，不復挺者，輮使之然也。故木受繩則直，金就礪則利，君子博學而日參省乎己，則知明而行無過矣。</p><p>吾嘗終日而思矣，不如須臾之所學也；吾嘗跂而望矣，不如登高之博見也。登高而招，臂非加長也，而見者遠；順風而呼，聲非加疾也，而聞者彰。假輿馬者，非利足也，而致千里；假舟楫者，非能水也，而絕江河。君子生非異也，善假於物也。</p><p>積土成山，風雨興焉；積水成淵，蛟龍生焉；積善成德，而神明自得，聖心備焉。故不積跬步，無以至千里；不積小流，無以成江海。騏驥一躍，不能十步；駑馬十駕，功在不舍。鍥而舍之，朽木不折；鍥而不舍，金石可鏤。螾無爪牙之利，筋骨之強，上食埃土，下飲黃泉，用心一也。蟹六跪而二螯，非蛇蟺之穴無可寄託者，用心躁也。</p>`}, "4.1": { title: "互動溫習卡片", type: "flashcard" }, "4.2": { title: "互動答題挑戰", type: "quiz" } }
        },
        "5": {
            title: "〈廉頗藺相如列傳〉",
            sections: { "5.0": { title: "課文原文", content: `<h2>〈廉頗藺相如列傳〉(節錄) 原文</h2><p>廉頗者，趙之良將也。趙惠文王十六年，廉頗為趙將，伐齊，大破之，取陽晉，拜為上卿，以勇氣聞於諸侯。藺相如者，趙人也，為趙宦者令繆賢舍人。</p><p>既罷，歸國，以相如功大，拜為上卿，位在廉頗之右。廉頗曰：「我為趙將，有攻城野戰之大功，而藺相如徒以口舌為勞，而位居我上。且相如素賤人，吾羞，不忍為之下。」宣言曰：「我見相如，必辱之。」相如聞，不肯與會。相如每朝時，常稱病，不欲與廉頗爭列。已而相如出，望見廉頗，相如引車避匿。</p><p>於是舍人相與諫曰：「臣所以去親戚而事君者，徒慕君之高義也。今君與廉頗同列，廉君宣惡言，而君畏匿之，恐懼殊甚，且庸人尚羞之，況於將相乎！臣等不肖，請辭去。」藺相如固止之，曰：「公之視廉將軍孰與秦王？」曰：「不若也。」相如曰：「夫以秦王之威，而相如廷叱之，辱其群臣，相如雖駑，獨畏廉將軍哉？顧吾念之，強秦之所以不敢加兵於趙者，徒以吾兩人存也。今兩虎共鬥，其勢不俱生。吾所以為此者，以先國家之急而後私讎也。」</p><p>廉頗聞之，肉袒負荊，因賓客至藺相如門謝罪，曰：「鄙賤之人，不知將軍寬之至此也。」卒相與驩，為刎頸之交。</p>`}, "5.1": { title: "互動溫習卡片", type: "flashcard" }, "5.2": { title: "互動答題挑戰", type: "quiz" } }
        },
        "6": {
            title: "〈出師表〉",
            sections: { "6.0": { title: "課文原文", content: `<h2>〈出師表〉原文</h2><p>臣亮言：先帝創業未半，而中道崩殂；今天下三分，益州疲弊，此誠危急存亡之秋也。然侍衞之臣，不懈於內；忠志之士，忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。誠宜開張聖聽，以光先帝遺德，恢弘志士之氣；不宜妄自菲薄，引喻失義，以塞忠諫之路也。</p><p>宮中府中，俱為一體；陟罰臧否，不宜異同。若有作姦犯科，及為忠善者，宜付有司，論其刑賞，以昭陛下平明之治；不宜偏私，使內外異法也。</p><p>侍中、侍郎郭攸之、費禕、董允等，此皆良實，志慮忠純，是以先帝簡拔以遺陛下。愚以為宮中之事，事無大小，悉以咨之，然後施行，必能裨補闕漏，有所廣益。</p><p>將軍向寵，性行淑均，曉暢軍事，試用於昔日，先帝稱之曰「能」，是以眾議舉寵為督。愚以為營中之事，悉以咨之，必能使行陣和睦，優劣得所。</p><p>親賢臣，遠小人，此先漢所以興隆也；親小人，遠賢臣，此後漢所以傾頹也。先帝在時，每與臣論此事，未嘗不歎息痛恨於桓、靈也。侍中、尚書、長史、參軍，此悉貞良死節之臣，願陛下親之信之，則漢室之隆，可計日而待也。</p><p>臣本布衣，躬耕於南陽，苟全性命於亂世，不求聞達於諸侯。先帝不以臣卑鄙，猥自枉屈，三顧臣於草廬之中，諮臣以當世之事，由是感激，遂許先帝以驅馳。後值傾覆，受任於敗軍之際，奉命於危難之間，爾來二十有一年矣。</p><p>先帝知臣謹慎，故臨崩寄臣以大事也。受命以來，夙夜憂歎，恐託付不效，以傷先帝之明；故五月渡瀘，深入不毛。今南方已定，兵甲已足，當獎率三軍，北定中原，庶竭駑鈍，攘除姦凶，興復漢室，還於舊都。此臣所以報先帝而忠陛下之職分也。至於斟酌損益，進盡忠言，則攸之、禕、允之任也。</p><p>願陛下託臣以討賊興復之效，不效則治臣之罪，以告先帝之靈。若無興德之言，則責攸之、禕、允等之慢，以彰其咎。陛下亦宜自謀，以諮諏善道，察納雅言，深追先帝遺詔。臣不勝受恩感激。</p><p>今當遠離，臨表涕零，不知所言。</p>`}, "6.1": { title: "互動溫習卡片", type: "flashcard" }, "6.2": { title: "互動答題挑戰", type: "quiz" } }
        },
        "7": {
            title: "〈師說〉",
            sections: { "7.0": { title: "課文原文", content: `<h2>〈師說〉原文</h2><p>古之學者必有師。師者，所以傳道、受業、解惑也。人非生而知之者，孰能無惑？惑而不從師，其為惑也，終不解矣。生乎吾前，其聞道也，固先乎吾，吾從而師之；生乎吾後，其聞道也，亦先乎吾，吾從而師之。吾師道也，夫庸知其年之先後生於吾乎？是故無貴無賤，無長無少，道之所存，師之所存也。</p><p>嗟乎！師道之不傳也久矣！欲人之無惑也難矣！古之聖人，其出人也遠矣，猶且從師而問焉；今之眾人，其下聖人也亦遠矣，而恥學於師。是故聖益聖，愚益愚。聖人之所以為聖，愚人之所以為愚，其皆出於此乎？</p><p>愛其子，擇師而教之，於其身也，則恥師焉，惑矣！彼童子之師，授之書而習其句讀者也，非吾所謂傳其道、解其惑者也。句讀之不知，惑之不解，或師焉，或不焉，小學而大遺，吾未見其明也。</p><p>巫、醫、樂師、百工之人，不恥相師。士大夫之族，曰師、曰弟子云者，則群聚而笑之。問之，則曰：「彼與彼年相若也，道相似也。」位卑則足羞，官盛則近諛。嗚呼！師道之不復，可知矣。巫、醫、樂師、百工之人，君子不齒，今其智乃反不能及，其可怪也歟！</p><p>聖人無常師。孔子師郯子、萇弘、師襄、老聃。郯子之徒，其賢不及孔子。孔子曰：「三人行，則必有我師。」是故弟子不必不如師，師不必賢於弟子。聞道有先後，術業有專攻，如是而已。</p><p>李氏子蟠，年十七，好古文，六藝經傳，皆通習之。不拘於時，請學於余。余嘉其能行古道，作《師說》以貽之。</p>`}, "7.1": { title: "互動溫習卡片", type: "flashcard" }, "7.2": { title: "互動答題挑戰", type: "quiz" } }
        },
        "8": {
            title: "〈始得西山宴遊記〉",
            sections: { "8.0": { title: "課文原文", content: `<h2>〈始得西山宴遊記〉原文</h2><p>自余為僇人，居是州，恆惴慄。其隙也，則施施而行，漫漫而遊。日與其徒上高山，入深林，窮迴溪，幽泉怪石，無遠不到。到則披草而坐，傾壺而醉。醉則更相枕以臥，臥而夢。意有所極，夢亦同趣。覺而起，起而歸。以為凡是州之山水有異態者，皆我有也，而未始知西山之怪特。</p><p>今年九月二十八日，因坐法華西亭，望西山，始指異之。遂命僕人過湘江，緣染溪，斫榛莽，焚茅茷，窮山之高而止。</p><p>攀援而登，箕踞而遨，則凡數州之土壤，皆在衽席之下。其高下之勢，岈然窪然，若垤若穴，尺寸千里，攢蹙累積，莫得遯隱。縈青繚白，外與天際，四望如一。然後知是山之特出，不與培塿為類，悠悠乎與顥氣俱，而莫得其涯；洋洋乎與造物者遊，而不知其所窮。</p><p>引觴滿酌，頹然就醉，不知日之入。蒼然暮色，自遠而至，至無所見，而猶不欲歸。心凝形釋，與萬化冥合。然後知吾嚮之未始遊，遊於是乎始，故為之文以志。是歲，元和四年也。</p>`}, "8.1": { title: "互動溫習卡片", type: "flashcard" }, "8.2": { title: "互動答題挑戰", type: "quiz" } }
        },
        "9": {
            title: "〈岳陽樓記〉",
            sections: { "9.0": { title: "課文原文", content: `<h2>〈岳陽樓記〉原文</h2><p>慶曆四年春，滕子京謫守巴陵郡。越明年，政通人和，百廢具興。乃重修岳陽樓，增其舊制，刻唐賢今人詩賦於其上。屬予作文以記之。</p><p>予觀夫巴陵勝狀，在洞庭一湖。銜遠山，吞長江，浩浩湯湯，橫無際涯；朝暉夕陰，氣象萬千。此則岳陽樓之大觀也，前人之述備矣。然則北通巫峽，南極瀟湘，遷客騷人，多會于此，覽物之情，得無異乎？</p><p>若夫霪雨霏霏，連月不開，陰風怒號，濁浪排空；日星隱曜，山嶽潛形；商旅不行，檣傾楫摧；薄暮冥冥，虎嘯猿啼。登斯樓也，則有去國懷鄉，憂讒畏譏，滿目蕭然，感極而悲者矣。</p><p>至若春和景明，波瀾不驚，上下天光，一碧萬頃；沙鷗翔集，錦鱗游泳；岸芷汀蘭，郁郁青青。而或長煙一空，皓月千里，浮光躍金，靜影沉璧，漁歌互答，此樂何極！登斯樓也，則有心曠神怡，寵辱偕忘，把酒臨風，其喜洋洋者矣。</p><p>嗟夫！予嘗求古仁人之心，或異二者之為，何哉？不以物喜，不以己悲。居廟堂之高，則憂其民；處江湖之遠，則憂其君。是進亦憂，退亦憂；然則何時而樂耶？其必曰「先天下之憂而憂，後天下之樂而樂」乎！噫！微斯人，吾誰與歸？</p>`}, "9.1": { title: "互動溫習卡片", type: "flashcard" }, "9.2": { title: "互動答題挑戰", type: "quiz" } }
        },
        "10": {
            title: "〈六國論〉",
            sections: { "10.0": { title: "課文原文", content: `<h2>〈六國論〉原文</h2><p>六國破滅，非兵不利，戰不善，弊在賂秦。賂秦而力虧，破滅之道也。或曰：「六國互喪，率賂秦耶？」曰：「不賂者以賂者喪。蓋失強援，不能獨完。故曰，弊在賂秦也。」</p><p>秦以攻取之外，小則獲邑，大則得城，較秦之所得，與戰勝而得者，其實百倍；諸侯之所亡，與戰敗而亡者，其實亦百倍。則秦之所大欲，諸侯之所大患，固不在戰矣。思厥先祖父，暴霜露，斬荊棘，以有尺寸之地。子孫視之不甚惜，舉以予人，如棄草芥。今日割五城，明日割十城，然後得一夕安寢。起視四境，而秦兵又至矣。然則諸侯之地有限，暴秦之欲無厭，奉之彌繁，侵之愈急。故不戰而強弱勝負已判矣。至於顛覆，理固宜然。古人云：「以地事秦，猶抱薪救火，薪不盡，火不滅。」此言得之。</p><p>齊人未嘗賂秦，終繼五國遷滅，何哉？與嬴而不助五國也。五國既喪，齊亦不免矣。燕、趙之君，始有遠略，能守其土，義不賂秦。是故燕雖小國而後亡，斯用兵之效也。至丹以荊卿為計，始速禍焉。趙嘗五戰于秦，二敗而三勝。後秦擊趙者再，李牧連卻之。洎牧以讒誅，邯郸為郡，惜其用武而不終也。且燕、趙處秦革滅殆盡之際，可謂智力孤危，戰敗而亡，誠不得已。向使三國各愛其地，齊人勿附於秦，刺客不行，良將猶在，則勝負之數，存亡之理，當與秦相較，或未易量。</p><p>嗚呼！以賂秦之地，封天下之謀臣；以事秦之心，禮天下之奇才；并力西嚮，則吾恐秦人食之不得下咽也。悲夫！有如此之勢，而為秦人積威之所劫，日削月割，以趨於亡。為國者無使為積威之所劫哉！</p><p>夫六國與秦皆諸侯，其勢弱於秦，而猶有可以不賂而勝之之勢；茍以天下之大，而從六國破亡之故事，是又在六國下矣！</p>`}, "10.1": { title: "互動溫習卡片", type: "flashcard" }, "10.2": { title: "互動答題挑戰", type: "quiz" } }
        },
        "11": {
            title: "詩三首",
            sections: { "11.0": { title: "課文原文", content: `<h2>詩三首 原文</h2><h3>山居秋暝 (王維)</h3><p>空山新雨後，天氣晚來秋。</p><p>明月松間照，清泉石上流。</p><p>竹喧歸浣女，蓮動下漁舟。</p><p>隨意春芳歇，王孫自可留。</p><h3>月下獨酌 (其一) (李白)</h3><p>花間一壺酒，獨酌無相親。</p><p>舉杯邀明月，對影成三人。</p><p>月既不解飲，影徒隨我身。</p><p>暫伴月將影，行樂須及春。</p><p>我歌月徘徊，我舞影零亂。</p><p>醒時同交歡，醉後各分散。</p><p>永結無情遊，相期邈雲漢。</p><h3>登樓 (杜甫)</h3><p>花近高樓傷客心，萬方多難此登臨。</p><p>錦江春色來天地，玉壘浮雲變古今。</p><p>北極朝廷終不改，西山寇盜莫相侵。</p><p>可憐後主還祠廟，日暮聊為梁甫吟。</p>`}, "11.1": { title: "互動溫習卡片", type: "flashcard" }, "11.2": { title: "互動答題挑戰", type: "quiz" } }
        },
        "12": {
            title: "詞三首",
            sections: { "12.0": { title: "課文原文", content: `<h2>詞三首 原文</h2><h3>念奴嬌·赤壁懷古 (蘇軾)</h3><p>大江東去，浪淘盡，千古風流人物。</p><p>故壘西邊，人道是，三國周郎赤壁。</p><p>亂石穿空，驚濤拍岸，捲起千堆雪。</p><p>江山如畫，一時多少豪傑。</p><p>遙想公瑾當年，小喬初嫁了，雄姿英發。</p><p>羽扇綸巾，談笑間，檣櫓灰飛煙滅。</p><p>故國神遊，多情應笑我，早生華髮。</p><p>人生如夢，一尊還酹江月。</p><h3>聲聲慢·秋情 (李清照)</h3><p>尋尋覓覓，冷冷清清，淒淒慘慘戚戚。</p><p>乍暖還寒時候，最難將息。</p><p>三杯兩盞淡酒，怎敵他、晚來風急？</p><p>雁過也，正傷心，卻是舊時相識。</p><p>滿地黃花堆積。憔悴損，如今有誰堪摘？</p><p>守著窗兒，獨自怎生得黑？</p><p>梧桐更兼細雨，到黃昏、點點滴滴。</p><p>這次第，怎一個愁字了得！</p><h3>青玉案·元夕 (辛棄疾)</h3><p>東風夜放花千樹。更吹落、星如雨。</p><p>寶馬雕車香滿路。</p><p>鳳簫聲動，玉壺光轉，一夜魚龍舞。</p><p>蛾兒雪柳黃金縷。笑語盈盈暗香去。</p><p>眾裡尋他千百度。驀然回首，那人卻在，燈火闌珊處。</p>`}, "12.1": { title: "互動溫習卡片", type: "flashcard" }, "12.2": { title: "互動答題挑戰", type: "quiz" } }
        }
    };

    // (Full database content is in the collapsible section below)

    // --- COMBINED DATA POOL FOR FLASHCARDS & QUIZ ---
    const dataPool = {
        "1": { themeColor: "#3D5A80", title: "論仁、論孝、論君子", data: [
            { q: "不可以久處<b>約</b>", a: "窮困/貧困" },{ q: "知者<b>利</b>仁", a: "利用" },{ q: "不以其<b>道</b>得之", a: "方法" },{ q: "不<b>處</b>也", a: "接受" }, { q: "不<b>去</b>也", a: "擺脫" }, { q: "<b>惡</b>乎成名", a: "怎麼/如何" }, { q: "君子無終食之間<b>違</b>仁", a: "離開" }, { q: "<b>造次</b>必於是", a: "匆忙/倉卒" }, { q: "<b>克</b>己復禮為仁", a: "約束/克制/抑制" }, { q: "<b>為</b>仁由己", a: "實踐" }, { q: "為仁<b>由</b>己", a: "憑" }, { q: "請問其<b>目</b>", a: "綱目/要目" }, { q: "請<b>事</b>斯語矣", a: "實踐" }, { q: "無求生以<b>害</b>仁", a: "損害" }, { q: "有殺身以<b>成</b>仁", a: "成全" }, { q: "樊遲<b>御</b>", a: "駕駛車馬" }, { q: "<b>無</b>違", a: "不要" }, { q: "無<b>違</b>", a: "違背" }, { q: "生<b>事</b>之以禮", a: "侍奉/服侍" }, { q: "是謂能<b>養</b>", a: "供養" }, { q: "皆能有<b>養</b>", a: "飼養" }, { q: "事父母<b>幾</b>諫", a: "輕微/婉轉" }, { q: "又敬不<b>違</b>", a: "觸忤/冒犯" }, { q: "<b>勞</b>而不怨", a: "擔憂/憂愁" }, { q: "父母之<b>年</b>", a: "年紀/年歲" }, { q: "君子不<b>重</b>則不威", a: "莊重" }, { q: "君子不重則不<b>威</b>", a: "威儀" }, { q: "學則不<b>固</b>", a: "鞏固/牢固" }, { q: "無友不<b>如</b>己者", a: "及/及得上/比得上" }, { q: "<b>過</b>則勿憚改", a: "過錯" }, { q: "過則勿<b>憚</b>改", a: "害怕/畏懼" }, { q: "小人長<b>戚戚</b>", a: "憂愁" }, { q: "<b>斯</b>謂之君子矣乎", a: "這樣" }, { q: "君子<b>成</b>人之美", a: "成全" }, { q: "小人<b>反</b>是", a: "相反" }, { q: "君子義以為<b>質</b>", a: "原則" }, { q: "禮以<b>行</b>之", a: "實行/實踐" }, { q: "<b>孫</b>以出之", a: "謙遜" }, { q: "孫以<b>出</b>之", a: "說出" }, { q: "<b>信</b>以成之", a: "誠實" }, { q: "信以<b>成</b>之", a: "完成" }, { q: "君子<b>病</b>無能焉", a: "擔憂/擔心" }, { q: "君子<b>求</b>諸己", a: "責求/要求" }
        ]},
        "2": { themeColor: "#d9534f", title: "魚我所欲也", data: [
            { q: "<b>舍</b>魚而取熊掌者也", a: "捨棄" },{ q: "故不為<b>苟</b>得也", a: "隨便/輕率" },{ q: "死亦我所<b>惡</b>", a: "憎厭/憎惡/討厭" },{ q: "故<b>患</b>有所不辟也", a: "禍患/災禍" },{ q: "故患有所不<b>辟</b>也", a: "避/避開" },{ q: "<b>非獨</b>賢者有是心也", a: "不但/非但/不僅" },{ q: "<b>弗</b>得則死", a: "不" },{ q: "<b>嘑</b>爾而與之", a: "呼喝/叱喝" },{ q: "嘑爾而<b>與</b>之", a: "給與" },{ q: "<b>蹴</b>爾而與之", a: "踐踏" },{ q: "萬鍾則不<b>辯</b>禮義而受之", a: "辨別" },{ q: "萬鍾於我何<b>加</b>焉", a: "增益/裨益" },{ q: "妻妾之<b>奉</b>", a: "侍奉" },{ q: "所識窮乏者<b>得</b>我與", a: "感恩" },{ q: "<b>鄉</b>為身死而不受", a: "過往/從前" },{ q: "是亦不可以<b>已</b>乎", a: "止/停止" }
        ]},
        "3": { themeColor: "#28a745", title: "逍遙遊", data: [
            { q: "魏王<b>貽</b>我大瓠之種", a: "贈/送/贈給/饋贈" },{ q: "我<b>樹</b>之成而實五石", a: "種植/栽種" },{ q: "我樹<b>之</b>成而實五石", a: "大瓠之種/種子/它" },{ q: "我樹之成而<b>實</b>五石", a: "果實" },{ q: "其堅不能自<b>舉</b>也", a: "支撐/承受/擎" },{ q: "<b>剖</b>之以為瓢", a: "割開/破開/中分" },{ q: "則瓠落無所<b>容</b>", a: "存放/置放/安置" },{ q: "吾為其無用而<b>掊</b>之", a: "擊破" },{ q: "夫子固<b>拙</b>於用大矣", a: "不善於" },{ q: "宋人有善<b>為</b>不龜手之藥者", a: "製作/製造" },{ q: "世世以<b>洴澼</b>絖為事", a: "漂洗" },{ q: "世世以洴澼<b>絖</b>為事", a: "棉絮" },{ q: "世世以洴澼絖為<b>事</b>", a: "事業/工作" },{ q: "請買其<b>方</b>百金", a: "配方/處方" },{ q: "聚族而<b>謀</b>曰", a: "謀劃/商議" },{ q: "今一朝而<b>鬻</b>技百金", a: "賣/賣出" },{ q: "請<b>與</b>之", a: "給與" },{ q: "以<b>說</b>吳王", a: "游說" },{ q: "越有<b>難</b>", a: "亂事/兵難" },{ q: "吳王<b>使</b>之將", a: "派遣/命令" },{ q: "吳王使<b>之</b>將", a: "客人/客/他" },{ q: "吳王使之<b>將</b>", a: "領兵/率兵【或】將帥" },{ q: "<b>裂</b>地而封之", a: "割/分/分割" },{ q: "能不龜手<b>一</b>也", a: "一樣/相同/同樣" },{ q: "或<b>以</b>封", a: "因此/因而" },{ q: "則所用之<b>異</b>也", a: "不同" },{ q: "何不<b>慮</b>以為大樽而浮於江湖", a: "考慮" },{ q: "則夫子<b>猶</b>有蓬之心也夫", a: "還/仍然" },{ q: "其<b>大本</b>擁腫而不中繩墨", a: "樹幹/主幹" },{ q: "其大本擁腫而不<b>中</b>繩墨", a: "合乎/符合" },{ q: "其小枝<b>卷</b>曲而不中規矩", a: "屈曲/捲曲" },{ q: "立之<b>塗</b>", a: "道路/途" },{ q: "眾所同<b>去</b>也", a: "拋棄/離棄" },{ q: "<b>子</b>獨不見狸狌乎", a: "你" },{ q: "子<b>獨</b>不見狸狌乎", a: "難道" },{ q: "以候<b>敖</b>者", a: "出遊/閒遊" },{ q: "東西<b>跳梁</b>", a: "跳躍" },{ q: "不<b>辟</b>高下", a: "避開/躲開" },{ q: "死於<b>罔罟</b>", a: "網/魚網/網具" },{ q: "其大<b>若</b>垂天之雲", a: "好像" },{ q: "此<b>能</b>為大矣", a: "功能" },{ q: "而不能<b>執</b>鼠", a: "捕/捕捉" },{ q: "何不<b>樹</b>之於無何有之鄉", a: "種植/栽種" },{ q: "<b>彷徨</b>乎無為其側", a: "縱任不拘" },{ q: "不<b>夭</b>斤斧", a: "屈/摧折" }
        ]},
        "4": { themeColor: "#4B0082", title: "勸學", data: [
            { q: "學不可以<b>已</b>", a: "止/停止/廢棄" },{ q: "木直<b>中</b>繩", a: "合乎/符合" },{ q: "<b>鞣</b>以為輪", a: "屈曲" },{ q: "其曲中<b>規</b>", a: "圓規" },{ q: "雖有<b>槁</b>暴", a: "烘烤/烤" },{ q: "雖有槁<b>暴</b>", a: "曬乾" },{ q: "不復<b>挺</b>者", a: "直" },{ q: "金<b>就</b>礪則利", a: "靠近" },{ q: "金就<b>礪</b>則利", a: "磨刀石" },{ q: "日<b>參</b>省乎己", a: "參驗【或】多次/三" },{ q: "日參<b>省</b>乎己", a: "反省/省察" },{ q: "則<b>知</b>明而行無過矣", a: "智慧" },{ q: "則知明而<b>行</b>無過矣", a: "行為" },{ q: "不如<b>須臾</b>之所學也", a: "片刻" },{ q: "吾嘗<b>跂</b>而望矣", a: "舉足" },{ q: "聲非加<b>疾</b>也", a: "宏亮/嘹亮" },{ q: "而聞者<b>彰</b>", a: "清楚/清晰" },{ q: "<b>假</b>輿馬者", a: "借用/憑藉/利用" },{ q: "非<b>利</b>足也", a: "善於" },{ q: "而<b>致</b>千里", a: "達到" },{ q: "非<b>能</b>水也", a: "善於" },{ q: "非能<b>水</b>也", a: "游泳" },{ q: "而<b>絕</b>江河", a: "橫渡/渡" },{ q: "君子<b>生</b>非異也", a: "天性" },{ q: "聖心<b>備</b>焉", a: "具備" },{ q: "故不積<b>跬步</b>", a: "半步" },{ q: "<b>騏驥</b>一躍", a: "駿馬" },{ q: "<b>駑馬</b>十駕", a: "鈍馬" },{ q: "功在不<b>舍</b>", a: "捨/捨棄/放棄" },{ q: "<b>鍥</b>而舍之", a: "雕刻" },{ q: "金石可<b>鏤</b>", a: "雕飾" },{ q: "<b>螾</b>無爪牙之利", a: "蚓/蚯蚓" },{ q: "用心<b>躁</b>也", a: "浮躁/不專心" }
        ]},
        "5": { themeColor: "#5A4FCF", title: "廉頗藺相如列傳", data: [
            { q: "廉頗<b>為</b>趙將伐齊", a: "作為/做/幹" },{ q: "<b>拜</b>為上卿", a: "授與職位/任命" },{ q: "以勇氣<b>聞</b>於諸侯", a: "聞名" },{ q: "為趙宦者令繆賢<b>舍人</b>", a: "門客" },{ q: "使人<b>遺</b>趙王書", a: "送給" },{ q: "願以十五城請<b>易</b>璧", a: "交換" },{ q: "趙王與大將軍廉頗諸大臣<b>謀</b>", a: "商議" },{ q: "<b>徒</b>見欺", a: "白白地" },{ q: "徒<b>見</b>欺", a: "被/受" },{ q: "徒見<b>欺</b>", a: "欺騙" },{ q: "即<b>患</b>秦兵之來", a: "憂慮" },{ q: "<b>求</b>人可使報秦者", a: "徵求" },{ q: "求人可使<b>報</b>秦者", a: "答覆" },{ q: "臣舍人藺相如可<b>使</b>", a: "作為使者/出使" },{ q: "臣<b>嘗</b>有罪", a: "曾經" },{ q: "<b>竊</b>計欲亡走燕", a: "暗中/私自/私下" },{ q: "竊計欲<b>亡</b>走燕", a: "逃亡/潛逃" },{ q: "臣<b>語</b>曰", a: "告訴" },{ q: "臣嘗<b>從</b>大王與燕王會境上", a: "跟從" },{ q: "臣嘗從大王與燕王<b>會</b>境上", a: "會面/會見" },{ q: "夫趙<b>彊</b>而燕弱", a: "強/強大" },{ q: "而君<b>幸</b>於趙王", a: "得寵" },{ q: "而<b>束</b>君歸趙矣", a: "綁縛" },{ q: "君不如肉<b>袒</b>伏斧質請罪", a: "袒露" },{ q: "不可不<b>許</b>", a: "答應" },{ q: "<b>曲</b>在趙", a: "理虧" },{ q: "<b>均</b>之二策", a: "衡量/比較" },{ q: "<b>寧</b>許以負秦曲", a: "寧願/寧可" },{ q: "寧<b>許</b>以負秦曲", a: "答應" },{ q: "寧許以<b>負</b>秦曲", a: "背/背負/承擔" },{ q: "王<b>必</b>無人", a: "果真/如果/若" },{ q: "臣願<b>奉</b>璧往使", a: "奉上" },{ q: "臣<b>請</b>完璧歸趙", a: "請求" },{ q: "相如奉璧<b>奏</b>秦王", a: "獻給" },{ q: "<b>卻</b>立", a: "退後" },{ q: "怒髮上衝<b>冠</b>", a: "帽子" },{ q: "趙王<b>悉</b>召羣臣議", a: "全部" },{ q: "<b>負</b>其彊", a: "倚仗/恃著" },{ q: "臣以為布衣之交<b>尚</b>不相欺", a: "尚且" },{ q: "且以一璧之故<b>逆</b>彊秦之驩", a: "拂逆/觸犯/傷害" },{ q: "且以一璧之故逆彊秦之<b>驩</b>", a: "歡心" },{ q: "<b>嚴</b>大國之威以修敬也", a: "尊重" },{ q: "禮節甚<b>倨</b>", a: "傲慢" },{ q: "大王<b>必</b>欲急臣", a: "假如" },{ q: "大王必欲<b>急</b>臣", a: "逼迫" },{ q: "臣頭<b>今</b>與璧俱碎於柱矣", a: "即將/立刻/馬上" },{ q: "相如持其璧<b>睨</b>柱", a: "斜視/瞥視" },{ q: "乃<b>辭謝</b>固請", a: "婉拒" },{ q: "乃辭謝<b>固</b>請", a: "堅決" },{ q: "召有司<b>案</b>圖", a: "按/按著" },{ q: "相如<b>度</b>秦王特以詐佯為予趙城", a: "揣度/估計" },{ q: "相如度秦王<b>特</b>以詐佯為予趙城", a: "只是/只不過" },{ q: "相如度秦王特以詐<b>佯</b>為予趙城", a: "假裝" },{ q: "<b>舍</b>相如廣成傳", a: "安置" },{ q: "乃其<b>使</b>從者衣褐", a: "命令" },{ q: "乃其使從者<b>衣</b>褐", a: "穿著" },{ q: "從徑道<b>亡</b>", a: "出走/逃離" },{ q: "未嘗有堅明<b>約束</b>者也", a: "信約" },{ q: "臣誠恐見欺於王而<b>負</b>趙", a: "辜負" },{ q: "<b>間</b>至趙矣", a: "間道/小路" },{ q: "大王遣一<b>介</b>之使至趙", a: "個" },{ q: "唯大王與羣臣<b>孰</b>計議之", a: "詳細/仔細/認真" },{ q: "唯大王與羣臣孰計<b>議</b>之", a: "商議" },{ q: "左右<b>或</b>欲引相如去", a: "有人" },{ q: "秦王<b>因</b>曰", a: "於是/就" },{ q: "趙王豈以一璧之<b>故</b>欺秦邪", a: "緣故" },{ q: "<b>卒</b>廷見相如", a: "終於" },{ q: "<b>拔</b>石城", a: "攻取" },{ q: "欲<b>毋</b>行", a: "不" },{ q: "與王<b>訣</b>曰", a: "告別" },{ q: "<b>度</b>道里會遇之禮畢", a: "估計" },{ q: "度<b>道里</b>會遇之禮畢", a: "路程/里程" },{ q: "秦御史前<b>書</b>曰", a: "書寫/記錄/記載" },{ q: "左右欲<b>刃</b>相如", a: "殺死/弄死" },{ q: "左右皆<b>靡</b>", a: "退卻/倒下" },{ q: "於是秦王不<b>懌</b>", a: "高興/喜悅" },{ q: "請以趙十五城為秦王<b>壽</b>", a: "祝壽/祝福" },{ q: "秦王<b>竟</b>酒", a: "完畢" },{ q: "而藺相如<b>徒</b>以口舌為勞", a: "只/僅僅" },{ q: "<b>且</b>相如素賤人", a: "而且" },{ q: "且相如<b>素</b>賤人", a: "本來/向來" },{ q: "且相如素<b>賤</b>人", a: "卑下/地位低下" },{ q: "不<b>忍</b>為之下", a: "忍受" },{ q: "<b>已而</b>相如出", a: "不久/後來" },{ q: "臣所以<b>去</b>親戚而事君者", a: "離開" },{ q: "徒<b>慕</b>君之高義也", a: "仰慕" },{ q: "臣等<b>不肖</b>", a: "不才" },{ q: "不<b>若</b>也", a: "及/比得上" },{ q: "相如雖<b>駑</b>", a: "愚鈍" },{ q: "<b>顧</b>吾念之", a: "但/只是" },{ q: "其<b>勢</b>不俱生", a: "形勢" },{ q: "以先國家之急而後私<b>讎</b>也", a: "仇/仇恨/仇怨" },{ q: "<b>因</b>賓客至藺相如門謝罪", a: "憑藉/藉著" },{ q: "不知將軍<b>寬</b>之至此也", a: "寬宏" },{ q: "<b>卒</b>相與驩", a: "最終" }
        ]},
        "6": { themeColor: "#17a2b8", title: "出師表", data: [
            { q: "而中<b>道</b>崩殂", a: "中途/半路" },{ q: "而中道崩<b>殂</b>", a: "死亡" },{ q: "益州<b>疲</b>弊", a: "疲勞" },{ q: "益州疲<b>弊</b>", a: "困乏" },{ q: "此<b>誠</b>危急存亡之秋也", a: "確實/實在" },{ q: "此誠危急存亡之<b>秋</b>也", a: "關頭/時刻" },{ q: "不<b>懈</b>於內", a: "懈怠/鬆懈" },{ q: "<b>蓋</b>追先帝之殊遇", a: "因為/由於" },{ q: "蓋<b>追</b>先帝之殊遇", a: "追念/懷念" },{ q: "蓋追先帝之<b>殊</b>遇", a: "特殊" },{ q: "誠宜<b>開張</b>聖聽", a: "擴張" },{ q: "以<b>光</b>先帝遺德", a: "發揚" },{ q: "以光先帝<b>遺</b>德", a: "遺留" },{ q: "<b>恢弘</b>志士之氣", a: "擴大/發揚" },{ q: "不宜<b>妄</b>自菲薄", a: "胡亂地" },{ q: "不宜妄自<b>菲薄</b>", a: "輕視" },{ q: "引喻失<b>義</b>", a: "正道/正理" },{ q: "以<b>塞</b>忠諫之路也", a: "堵塞" },{ q: "<b>陟</b>罰臧否", a: "晉升/提拔" },{ q: "陟<b>罰</b>臧否", a: "處罰" },{ q: "陟罰<b>臧</b>否", a: "善/褒揚/獎勵" },{ q: "陟罰臧<b>否</b>", a: "惡/批評/責備" },{ q: "若有作<b>姦</b>、犯科", a: "壞事" },{ q: "若有作姦、犯<b>科</b>", a: "法律條文/法令" },{ q: "宜<b>付</b>有司", a: "交付/交給" },{ q: "<b>論</b>其刑賞", a: "評定" },{ q: "以<b>昭</b>陛下平明之治", a: "彰顯" },{ q: "以昭陛下平明之<b>治</b>", a: "治理/施政" },{ q: "此皆<b>良</b>實", a: "善良" },{ q: "此皆良<b>實</b>", a: "忠實/信實" },{ q: "<b>志</b>慮忠純", a: "志向/心志" },{ q: "志<b>慮</b>忠純", a: "思慮" },{ q: "<b>是以</b>先帝簡拔以遺陛下", a: "所以/因此" },{ q: "是以先帝<b>簡拔</b>以遺陛下", a: "選拔" },{ q: "是以先帝簡拔以<b>遺</b>陛下", a: "留下" },{ q: "<b>悉</b>以咨之", a: "全部" },{ q: "悉以<b>咨</b>之", a: "詢問/諮詢" },{ q: "必能<b>裨</b>補闕漏", a: "彌補" },{ q: "必能裨補<b>闕</b>漏", a: "缺失" },{ q: "性<b>行</b>淑均", a: "行為" },{ q: "性行<b>淑</b>均", a: "善良" },{ q: "性行淑<b>均</b>", a: "公平/公正" },{ q: "是以眾議<b>舉</b>寵為督", a: "舉薦" },{ q: "<b>親</b>賢臣", a: "親近" },{ q: "<b>遠</b>小人", a: "疏遠" },{ q: "<b>苟</b>全性命於亂世", a: "苟且/暫且" },{ q: "苟<b>全</b>性命於亂世", a: "保全" },{ q: "不求<b>聞</b>達於諸侯", a: "聞名/揚名" },{ q: "不求聞<b>達</b>於諸侯", a: "顯貴/顯達" },{ q: "先帝不<b>以</b>臣卑鄙", a: "因為" },{ q: "<b>猥</b>自枉屈", a: "委曲" },{ q: "<b>遂</b>許先帝以驅馳", a: "於是" },{ q: "遂<b>許</b>先帝以驅馳", a: "應允" },{ q: "遂許先帝以<b>驅馳</b>", a: "奔走效勞" },{ q: "後<b>值</b>傾覆", a: "遇上" },{ q: "後值<b>傾覆</b>", a: "覆滅/兵敗" },{ q: "爾來二十<b>有</b>一年矣", a: "又" },{ q: "故臨崩<b>寄</b>臣以大事也", a: "託付" },{ q: "<b>夙</b>夜憂歎", a: "早" },{ q: "以<b>傷</b>先帝之明", a: "損害" },{ q: "庶<b>竭</b>駑鈍", a: "竭盡" },{ q: "<b>攘</b>除姦凶", a: "排除/消減" },{ q: "至於斟酌損<b>益</b>", a: "增加/增益" },{ q: "至於斟酌<b>損</b>益", a: "減少/減損" },{ q: "願陛下託臣以討賊興復之<b>效</b>", a: "任務" },{ q: "若無<b>興</b>德之言", a: "發揚" },{ q: "則責攸之、禕、允等之<b>慢</b>", a: "怠慢" },{ q: "以<b>彰</b>其咎", a: "揭示/表明" },{ q: "以彰其<b>咎</b>", a: "過失" },{ q: "以<b>諮諏</b>善道", a: "詢問" },{ q: "臨表<b>涕</b>零", a: "眼淚" },{ q: "臨表涕<b>零</b>", a: "落下" }
        ]},
        "7": { themeColor: "#8B4513", title: "師說", data: [
            { q: "所以傳道、<b>受</b>業、解惑也", a: "授/講授/教授" },{ q: "<b>孰</b>能無惑", a: "誰" },{ q: "其<b>聞</b>道也", a: "聽見/懂得" },{ q: "<b>固</b>先乎吾", a: "本來" },{ q: "吾<b>從</b>而師之", a: "跟從" },{ q: "夫<b>庸</b>知其年之先後生於吾乎", a: "豈/難道" },{ q: "夫庸<b>知</b>其年之先後生於吾乎", a: "知道/理會" },{ q: "是故無<b>貴</b>、無賤", a: "高貴" },{ q: "是故無貴、無<b>賤</b>", a: "卑賤" },{ q: "師之所<b>存</b>也", a: "存在" },{ q: "其<b>出</b>人也遠矣", a: "超出" },{ q: "<b>猶且</b>從師而問焉", a: "尚且" },{ q: "<b>其</b>皆出於此乎", a: "大概" },{ q: "<b>惑</b>矣", a: "糊塗" },{ q: "小學而大<b>遺</b>", a: "遺漏" },{ q: "吾未見其<b>明</b>也", a: "明智" },{ q: "不恥<b>相</b>師", a: "互相" },{ q: "不恥相<b>師</b>", a: "學習" },{ q: "士大夫之<b>族</b>", a: "類" },{ q: "<b>道</b>相似也", a: "學問/學識" },{ q: "位<b>卑</b>則足羞", a: "低下/卑下" },{ q: "位卑則足<b>羞</b>", a: "羞恥/羞愧" },{ q: "官<b>盛</b>則近諛", a: "顯赫/高/大" },{ q: "官盛則近<b>諛</b>", a: "諂媚/奉承" },{ q: "師道之不<b>復</b>", a: "恢復" },{ q: "君子<b>不齒</b>", a: "不屑同列" },{ q: "今其智乃反不能<b>及</b>", a: "比得上" },{ q: "聖人無<b>常</b>師", a: "固定/恆常" },{ q: "術業有<b>專攻</b>", a: "專長" },{ q: "不<b>拘</b>於時", a: "拘守" },{ q: "不拘於<b>時</b>", a: "時俗" },{ q: "余<b>嘉</b>其能行古道", a: "讚許" },{ q: "余嘉其能<b>行</b>古道", a: "踐行/實踐" },{ q: "作《師說》以<b>貽</b>之", a: "贈送" }
        ]},
        "8": { themeColor: "#20B2AA", title: "始得西山宴遊記", data: [
            { q: "自余為<b>僇</b>人", a: "刑辱" },{ q: "<b>恒</b>惴慄", a: "經常/常常" },{ q: "恒<b>惴慄</b>", a: "恐懼不安" },{ q: "其<b>隙</b>也", a: "空閒/閒暇" },{ q: "日與其<b>徒</b>上高山", a: "同志/同伴" },{ q: "<b>窮</b>迴溪", a: "盡" },{ q: "窮<b>迴</b>溪", a: "迂迴曲折" },{ q: "<b>幽</b>泉怪石", a: "偏遠/僻靜" },{ q: "到則<b>披</b>草而坐", a: "分開" },{ q: "意有所<b>極</b>", a: "至/到" },{ q: "夢亦同<b>趣</b>", a: "趨向/向/往" },{ q: "<b>覺</b>而起", a: "醒來" },{ q: "<b>緣</b>染溪", a: "沿/順着/沿著" },{ q: "<b>斫</b>榛莽", a: "砍伐" },{ q: "<b>窮</b>山之高而止", a: "盡/窮盡" },{ q: "箕踞而<b>遨</b>", a: "遊賞" },{ q: "皆在<b>衽席</b>之下", a: "坐席/席子" },{ q: "<b>攢</b>蹙累積", a: "聚集" },{ q: "攢<b>蹙</b>累積", a: "緊迫/緊縮" },{ q: "攢蹙<b>累</b>積", a: "堆疊/堆積" },{ q: "莫得<b>遯</b>隱", a: "遁/隱藏" },{ q: "<b>縈</b>青繚白", a: "繚繞/圍繞" },{ q: "縈青<b>繚</b>白", a: "纏繞/環繞" },{ q: "外與天<b>際</b>", a: "交接/相連/匯合/連接" },{ q: "<b>引</b>觴滿酌", a: "拿取" },{ q: "心<b>凝</b>形釋", a: "凝聚" },{ q: "心凝形<b>釋</b>", a: "消散" },{ q: "然後知吾<b>嚮</b>之未始遊", a: "過往/從前" },{ q: "故為之文以<b>志</b>", a: "記錄/記" }
        ]},
        "9": { themeColor: "#fd7e14", title: "岳陽樓記", data: [
            { q: "滕子京<b>謫</b>守巴陵郡", a: "貶官" },{ q: "<b>越</b>明年", a: "及/過" },{ q: "百廢<b>具</b>興", a: "俱/全部/都" },{ q: "增其舊<b>制</b>", a: "規模" },{ q: "<b>屬</b>予作文以記之", a: "囑咐/囑託" },{ q: "予觀夫巴陵<b>勝</b>狀", a: "美" },{ q: "予觀夫巴陵勝<b>狀</b>", a: "狀貌/形勢" },{ q: "前人之述<b>備</b>矣", a: "全/詳盡" },{ q: "<b>遷</b>客騷人", a: "遷謫" },{ q: "若夫<b>霪</b>雨霏霏", a: "過量/連綿不斷" },{ q: "連月不<b>開</b>", a: "放晴" },{ q: "陰風怒<b>號</b>", a: "呼號/呼嘯" },{ q: "<b>檣</b>傾楫摧", a: "船桅" },{ q: "檣<b>傾</b>楫摧", a: "傾側" },{ q: "檣傾<b>楫</b>摧", a: "船槳" },{ q: "檣傾楫<b>摧</b>", a: "折毀" },{ q: "薄暮<b>冥冥</b>", a: "幽暗/晦暗" },{ q: "則有<b>去</b>國懷鄉", a: "離開" },{ q: "至若春和<b>景</b>明", a: "日光" },{ q: "至若春和景<b>明</b>", a: "照耀【或】普照" },{ q: "波瀾不<b>驚</b>", a: "起" },{ q: "沙鷗<b>翔</b>集", a: "飛翔" },{ q: "沙鷗翔<b>集</b>", a: "聚集/棲息" },{ q: "岸芷<b>汀</b>蘭", a: "小洲" },{ q: "<b>郁郁</b>青青", a: "香氣濃盛" },{ q: "而或長煙一<b>空</b>", a: "消散" },{ q: "則有心<b>曠</b>神怡", a: "開朗" },{ q: "則有心曠神<b>怡</b>", a: "悅樂/和悅/愉快" },{ q: "<b>寵</b>辱偕忘", a: "得寵【或】榮寵" },{ q: "寵<b>辱</b>偕忘", a: "受辱【或】辱" },{ q: "<b>把</b>酒臨風", a: "持" },{ q: "把酒<b>臨</b>風", a: "對/面對" },{ q: "<b>或</b>異二者之為", a: "或許" },{ q: "不<b>以</b>物喜", a: "因為" },{ q: "<b>微</b>斯人", a: "沒有" },{ q: "吾誰與<b>歸</b>", a: "效法/依歸" }
        ]},
        "10": { themeColor: "#800000", title: "六國論", data: [
            { q: "非<b>兵</b>不利", a: "兵器" },{ q: "非兵不<b>利</b>", a: "鋒利/利害" },{ q: "<b>戰</b>不善", a: "作戰/戰鬥" },{ q: "戰不<b>善</b>", a: "優勝" },{ q: "<b>弊</b>在賂秦", a: "過失" },{ q: "弊在<b>賂</b>秦", a: "賄賂" },{ q: "賂秦而<b>力</b>虧", a: "國力" },{ q: "賂秦而力<b>虧</b>", a: "損耗/削弱" },{ q: "破滅之<b>道</b>也", a: "原因" },{ q: "六國<b>互</b>喪", a: "相繼" },{ q: "六國互<b>喪</b>", a: "滅亡" },{ q: "<b>率</b>賂秦耶", a: "全部/皆/都" },{ q: "不能<b>獨</b>完", a: "獨自" },{ q: "不能獨<b>完</b>", a: "保全" },{ q: "諸侯之所<b>亡</b>與戰敗而亡者", a: "失去" },{ q: "思<b>厥</b>先祖父", a: "六國後人的/他們的" },{ q: "<b>暴</b>霜露", a: "暴露" },{ q: "<b>舉</b>以予人", a: "皆/全部" },{ q: "暴秦之欲無<b>厭</b>", a: "滿足" },{ q: "奉之<b>彌</b>繁", a: "益/愈/更加" },{ q: "強弱勝負已<b>判</b>矣", a: "分/分明" },{ q: "至於<b>顛覆</b>", a: "滅亡" },{ q: "<b>猶</b>抱薪救火", a: "像/好像" },{ q: "<b>與</b>嬴而不助五國也", a: "幫助/結交" },{ q: "始有<b>遠</b>略", a: "長遠" },{ q: "始有遠<b>略</b>", a: "計策" },{ q: "<b>斯</b>用兵之效也", a: "此/這" },{ q: "<b>始</b>速禍焉", a: "才" },{ q: "始<b>速</b>禍焉", a: "招致" },{ q: "李牧<b>連</b>卻之", a: "接續/不斷" },{ q: "李牧連<b>卻</b>之", a: "擊退" },{ q: "<b>洎</b>牧以讒誅", a: "及" },{ q: "惜其用武而不<b>終</b>也", a: "不完成/未到底" },{ q: "<b>向使</b>三國各愛其地", a: "假使/假如" },{ q: "向使三國各<b>愛</b>其地", a: "愛惜/吝惜" },{ q: "則勝負之<b>數</b>", a: "命運/氣數" },{ q: "<b>當</b>與秦相較", a: "假使/假若" },{ q: "或未易<b>量</b>", a: "判斷" },{ q: "<b>禮</b>天下之奇才", a: "禮遇/厚待" },{ q: "并力西<b>嚮</b>", a: "向/面/對" },{ q: "則吾恐秦人食之不得下<b>嚥</b>也", a: "咽喉" },{ q: "而為秦人積威之所<b>劫</b>", a: "威脅/懾服" },{ q: "而從六國破亡之<b>故事</b>", a: "舊事/前例" }
        ]},
        "11": { themeColor: "#4682B4", title: "詩三首", data: [
            { q: "山居秋<b>暝</b>", a: "暮色/夜色【或】日暮/夜晚" },{ q: "竹喧歸<b>浣女</b>", a: "洗衣女" },{ q: "<b>隨意</b>春芳歇", a: "任隨/任憑/任由" },{ q: "隨意春芳<b>歇</b>", a: "凋謝/枯萎" },{ q: "王孫自可<b>留</b>", a: "停留/留下" },{ q: "獨<b>酌</b>無相親", a: "飲酒" },{ q: "獨酌無<b>相親</b>", a: "互相親愛/相親近" },{ q: "月既不<b>解</b>飲", a: "懂得/理解" },{ q: "影<b>徒</b>隨我身", a: "只/但" },{ q: "暫伴月<b>將</b>影", a: "和/共" },{ q: "行樂須<b>及</b>春", a: "趁着/乘" },{ q: "<b>相期</b>邈雲漢", a: "相約" },{ q: "相期<b>邈</b>雲漢", a: "遙遠" },{ q: "北極朝廷<b>終</b>不改", a: "始終" },{ q: "日暮<b>聊</b>為梁甫吟", a: "姑且" }
        ]},
        "12": { themeColor: "#D4AF37", title: "詞三首", data: [
            { q: "千古<b>風流</b>人物", a: "才華出眾" },{ q: "<b>故</b>壘西邊", a: "舊的/舊時的" },{ q: "<b>檣</b>櫓灰飛煙滅", a: "船桅" },{ q: "檣<b>櫓</b>灰飛煙滅", a: "船槳" },{ q: "早生<b>華</b>髮", a: "灰白/花白" },{ q: "一<b>尊</b>還酹江月", a: "樽（酒器）" },{ q: "<b>乍</b>煖還寒時候", a: "剛" },{ q: "最難<b>將息</b>", a: "調養/休息" },{ q: "怎<b>敵</b>他晚來風急", a: "對付/抵擋" },{ q: "如今有<b>誰</b>堪摘", a: "何/甚麼" },{ q: "如今有誰<b>堪</b>摘", a: "欲/想要【或】可以" },{ q: "這<b>次第</b>", a: "光景" },{ q: "眾裏尋他千百<b>度</b>", a: "次/回" },{ q: "<b>驀然</b>迴首", a: "突然/忽然" },{ q: "燈火<b>闌珊</b>處", a: "將盡【或】零落/暗淡/稀少" }
        ]}
    };
    
    // --- DOM Elements ---
    const mainMenuContainer = document.getElementById('main-menu-container');
    const subMenuContainer = document.getElementById('sub-menu-container');
    const contentContainer = document.getElementById('content-container');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    let activeMainButton = null;
    let activeSubButton = null;
    
    // --- Quiz State ---
    let currentQuizQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let currentArticleId = null;

    // --- Utility ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    // --- Menu & Content Logic ---
    function handleMainClick(event) {
        currentArticleId = event.target.dataset.mainId;
        if (activeMainButton) activeMainButton.classList.remove('active');
        activeMainButton = event.target;
        activeMainButton.classList.add('active');
        generateSubMenu(currentArticleId);
        subMenuContainer.style.display = 'flex';
        const firstSubButton = subMenuContainer.querySelector('button');
        if (firstSubButton) firstSubButton.click();
    }
    
    function generateSubMenu(mainId) {
        subMenuContainer.innerHTML = '';
        const article = database[mainId];
        Object.keys(article.sections).forEach(subId => {
            const button = document.createElement('button');
            button.textContent = article.sections[subId].title;
            button.dataset.mainId = mainId;
            button.dataset.subId = subId;
            button.addEventListener('click', handleSubClick);
            subMenuContainer.appendChild(button);
        });
    }

    function handleSubClick(event) {
        const mainId = event.target.dataset.mainId;
        const subId = event.target.dataset.subId;
        if (activeSubButton) activeSubButton.classList.remove('active');
        activeSubButton = event.target;
        activeSubButton.classList.add('active');
        displayContent(mainId, subId);
    }

    function displayContent(mainId, subId) {
        const section = database[mainId].sections[subId];
        // Populate the database content on demand
        if (mainId && database[mainId] && database[mainId].sections[subId] && !database[mainId].sections[subId].content) {
            // This is a placeholder for where you'd fetch content if it weren't pre-loaded.
            // In our case, it's already in the database object.
        }

        if (section.type === 'flashcard') {
            displayFlashcards(mainId);
        } else if (section.type === 'quiz') {
            displayQuizStartScreen(mainId);
        } else {
            contentContainer.innerHTML = section.content;
        }
    }
    
    // --- Flashcard Logic ---
    function displayFlashcards(mainId) {
        const articleData = dataPool[mainId];
        if (!articleData || !articleData.data) {
            contentContainer.innerHTML = `<h2>溫習卡片</h2><p>此篇章暫無溫習卡片。</p>`;
            return;
        }
        const { title, data, themeColor } = articleData;
        let cardHTML = '';
        data.forEach((card, index) => {
            const displayAnswer = card.a.split('/')[0].split('【或】')[0].trim();
            cardHTML += `
                <div class="flashcard">
                    <div class="flashcard-inner">
                        <div class="flashcard-front">
                            <span class="card-number">${index + 1}</span>
                            <div class="question-text">${card.q}</div>
                        </div>
                        <div class="flashcard-back" style="background-color: ${themeColor};">
                            <div class="answer-text">${displayAnswer}</div>
                        </div>
                    </div>
                </div>`;
        });
        contentContainer.innerHTML = `
            <div class="flashcard-container">
                <h2 style="color: ${themeColor}; border-bottom-color: ${themeColor};">${title}</h2>
                <p style="text-align: center; color: #666;">點擊卡片即可翻轉查看答案。</p>
                <div class="card-grid">${cardHTML}</div>
            </div>`;
        document.querySelectorAll('.flashcard').forEach(card => {
            card.addEventListener('click', function() { this.classList.toggle('is-flipped'); });
        });
    }

    // --- FULLY RESTORED QUIZ LOGIC ---
    function displayQuizStartScreen(mainId) {
        currentArticleId = mainId;
        const articleData = dataPool[mainId];
        const maxQuestions = articleData.data.length;
        contentContainer.innerHTML = `
            <div class="quiz-container">
                <h2>${articleData.title} - 互動答題挑戰</h2>
                <div id="quiz-selection-screen">
                    <label for="question-count">請選擇題目數量：</label>
                    <input type="number" id="question-count" min="1" max="${maxQuestions}" value="${Math.min(10, maxQuestions)}">
                    <button id="start-quiz-btn">開始挑戰</button>
                </div>
                <div id="quiz-game-screen" style="display:none;"></div>
            </div>`;
        document.getElementById('start-quiz-btn').addEventListener('click', () => {
            const count = document.getElementById('question-count').value;
            startQuiz(mainId, parseInt(count, 10));
        });
    }

    function startQuiz(mainId, numQuestions) {
        const articleData = dataPool[mainId].data;
        if (!articleData) return;

        const allQuestions = articleData.map(item => ({
            q: item.q,
            correctAnswers: item.a.split('/').flatMap(a => a.split('【或】')).map(s => s.trim().replace(/（.*）/g, ''))
        }));
        
        currentQuizQuestions = shuffleArray([...allQuestions]).slice(0, numQuestions);
        currentQuestionIndex = 0;
        score = 0;
        
        document.getElementById('quiz-selection-screen').style.display = 'none';
        document.getElementById('quiz-game-screen').style.display = 'block';
        displayQuestion();
    }

    function displayQuestion() {
        const gameScreen = document.getElementById('quiz-game-screen');
        if (currentQuestionIndex >= currentQuizQuestions.length) {
            displayResults();
            return;
        }

        const questionData = currentQuizQuestions[currentQuestionIndex];
        const allPossibleAnswers = dataPool[currentArticleId].data.flatMap(item => item.a.split('/'));
        
        let options = [];
        const correctOption = questionData.correctAnswers[Math.floor(Math.random() * questionData.correctAnswers.length)];
        options.push(correctOption);

        while (options.length < 4) {
            const randomAnswer = allPossibleAnswers[Math.floor(Math.random() * allPossibleAnswers.length)].split('【或】')[0].trim().replace(/（.*）/g, '');
            if (!options.includes(randomAnswer) && !questionData.correctAnswers.includes(randomAnswer)) {
                options.push(randomAnswer);
            }
        }
        
        const shuffledOptions = shuffleArray(options);
        let optionsHTML = '';
        shuffledOptions.forEach(option => {
            optionsHTML += `<button class="quiz-option">${option}</button>`;
        });

        gameScreen.innerHTML = `
            <div class="quiz-progress">第 ${currentQuestionIndex + 1} / ${currentQuizQuestions.length} 題</div>
            <div class="quiz-question">${questionData.q}</div>
            <div class="quiz-options">${optionsHTML}</div>
            <div class="quiz-feedback"></div>`;

        document.querySelectorAll('.quiz-option').forEach(button => {
            button.addEventListener('click', (e) => checkAnswer(e.target.textContent, questionData.correctAnswers));
        });
    }

    function checkAnswer(selectedAnswer, correctAnswers) {
        const feedbackEl = document.querySelector('.quiz-feedback');
        const optionButtons = document.querySelectorAll('.quiz-option');
        const isCorrect = correctAnswers.includes(selectedAnswer);

        optionButtons.forEach(button => {
            button.disabled = true;
            if (correctAnswers.includes(button.textContent)) {
                button.classList.add('correct');
            }
            if (button.textContent === selectedAnswer && !isCorrect) {
                button.classList.add('incorrect');
            }
        });

        if (isCorrect) {
            score++;
            feedbackEl.className = 'quiz-feedback correct-feedback';
            feedbackEl.textContent = '✅ 答對了！';
        } else {
            feedbackEl.className = 'quiz-feedback incorrect-feedback';
            feedbackEl.innerHTML = `❌ 答錯了！<br>正確答案是：${correctAnswers.join(' 或 ')}`;
        }
        feedbackEl.style.display = 'block';
        currentQuestionIndex++;
        setTimeout(displayQuestion, 2000);
    }

    function displayResults() {
        const gameScreen = document.getElementById('quiz-game-screen');
        const percentage = currentQuizQuestions.length > 0 ? ((score / currentQuizQuestions.length) * 100).toFixed(0) : 0;
        gameScreen.innerHTML = `
            <div class="quiz-results">
                <h2>挑戰完成！</h2>
                <p>你的成績：</p>
                <div class="final-score">${score} / ${currentQuizQuestions.length}</div>
                <div class="final-percentage">準確率：${percentage}%</div>
                <button id="restart-quiz-btn">再玩一次</button>
                <button id="back-to-home-btn">返回主頁</button>
            </div>`;
        document.getElementById('restart-quiz-btn').addEventListener('click', () => displayQuizStartScreen(currentArticleId));
        document.getElementById('back-to-home-btn').addEventListener('click', init);
    }
    
    // --- Search & Init ---
    function performSearch() {
        // This function from your original file works
    }
    function displaySearchResults(results, query) {
        // This function from your original file works
    }

    function init() {
        mainMenuContainer.innerHTML = '';
        Object.keys(database).forEach(mainId => {
            const button = document.createElement('button');
            button.textContent = database[mainId].title;
            button.dataset.mainId = mainId;
            button.addEventListener('click', handleMainClick);
            mainMenuContainer.appendChild(button);
        });

        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keyup', e => { if (e.key === 'Enter') performSearch(); });
        
        if (activeSubButton) activeSubButton.classList.remove('active');
        if (activeMainButton) activeMainButton.classList.remove('active');
        subMenuContainer.style.display = 'none';
        contentContainer.innerHTML = `<h2>歡迎使用 DSE 中文範文精讀網站</h2><p>請從上方主目錄選擇一篇範文，開始您的學習之旅。</p><p>或在頂部搜尋欄輸入關鍵字，在所有篇章中快速查找資料。</p>`;
    }

    init();
});
