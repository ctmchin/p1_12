document.addEventListener('DOMContentLoaded', function() {

    // --- DATABASE ---
    const database = {
        "1": {
            title: "〈論仁論孝論君子〉",
            sections: {
                "1.0": {
                    title: "課文原文",
                    content: `<h2>〈論仁論孝論君子〉原文</h2><h3>【論仁】</h3><p>子曰：「不仁者，不可以久處約，不可以長處樂。仁者安仁，知者利仁。」</p><p>子曰：「富與貴，是人之所欲也；不以其道得之，不處也。貧與賤，是人之所惡也；不以其道得之，不去也。君子去仁，惡乎成名？君子無終食之間違仁，造次必於是，顛沛必於是。」</p><p>顏淵問仁。子曰：「克己復禮為仁。一日克己復禮，天下歸仁焉。為仁由己，而由人乎哉？」顏淵曰：「請問其目。」子曰：「非禮勿視，非禮勿聽，非禮勿言，非禮勿動。」</p><p>子曰：「志士仁人，無求生以害仁，有殺身以成仁。」</p><h3>【論孝】</h3><p>孟懿子問孝。子曰：「無違。」樊遲御，子告之曰：「孟孫問孝於我，我對曰，無違。」樊遲曰：「何謂也？」子曰：「生，事之以禮；死，葬之以禮，祭之以禮。」</p><p>子游問孝。子曰：「今之孝者，是謂能養。至於犬馬，皆能有養；不敬，何以別乎！」</p><p>子曰：「事父母幾諫，見志不從，又敬不違，勞而不怨。」</p><p>子曰：「父母之年，不可不知也。一則以喜，一則以懼。」</p><h3>【論君子】</h3><p>子曰：「君子不重則不威；學則不固。主忠信。無友不如己者。過則勿憚改。」</p><p>子曰：「君子坦蕩蕩，小人長戚戚。」</p><p>司馬牛問君子。子曰：「君子不憂不懼。」曰：「不憂不懼，斯謂之君子已乎？」子曰：「內省不疚，夫何憂何懼？」</p><p>子曰：「君子成人之美，不成人之惡。小人反是。」</p><p>子曰：「君子恥其言而過其行。」</p><p>子曰：「君子義以為質，禮以行之，孫以出之，信以成之。君子哉！」</p><p>子曰：「君子病無能焉，不病人之不己知也。」</p><p>子曰：「君子求諸己，小人求諸人。」</p>`
                },
                "1.1": {
                    title: "內容分析：論仁",
                    content: `<h2>內容分析：論仁</h2>
                             <h3>仁者的心境與行為</h3>
                             <p>孔子指出，仁德的實踐並非一時之事，而是持續的狀態。他對比了三種人對「仁」的態度：</p>
                             <ul>
                                <li><b>不仁者：</b>無法長久處於貧困或安樂之中。貧困時會為非作歹，安樂時則會驕奢淫逸。</li>
                                <li><b>知者（智者）：</b>他們了解「仁」的好處，知道實行仁德對自己和社會有利，因此選擇行仁。這是一種理性的選擇。</li>
                                <li><b>仁者：</b>他們視「仁」為本性，自然而然地實踐仁德，心中安於此道。這是最高層次的境界。</li>
                             </ul>
                             <h3>仁與人生抉擇</h3>
                             <p>孔子強調，仁德是君子時刻不能離開的根本。無論在任何情況下，君子都應堅守「仁」的原則。</p>
                             <ul>
                                 <li><b>富貴與貧賤：</b>君子雖然也期望富貴，厭惡貧賤，但獲取富貴或擺脫貧賤都必須依循正「道」。若需用不義手段，君子寧可安於貧賤，也不會接受不義的富貴。</li>
                                 <li><b>生死抉擇：</b>孔子認為「仁」的價值超越生命。「志士仁人」在生死關頭，絕不會為了求生而損害仁義，反而會為了成全仁德而犧牲生命，即「殺身以成仁」。</li>
                             </ul>
                             <h3>實踐仁的方法</h3>
                             <p>顏淵向孔子請教如何達至「仁」，孔子給出了具體的實踐綱領：</p>
                             <ul>
                                <li><b>總綱：「克己復禮為仁」。</b>意思是约束自己的私慾，使言行舉止都符合「禮」的規範，這就是「仁」。</li>
                                <li><b>要目：「非禮勿視，非禮勿聽，非禮勿言，非禮勿動」。</b>這是「克己復禮」的具體條目，從視覺、聽覺、語言、行動四方面杜絕一切不合禮的行為。</li>
                                <li><b>關鍵：「為仁由己，而由人乎哉？」。</b>孔子強調，實踐仁德完全是出於自己的主動意願，而非受他人左右。</li>
                             </ul>`
                },
                "1.2": {
                    title: "內容分析：論孝",
                    content: `<h2>內容分析：論孝</h2>
                             <p>孔子對於「孝」的闡述，強調「孝」不僅是物質層面的供養，更核心的是內心的「敬」與行為上的「禮」。</p>
                             <h3>孝的核心：敬與禮</h3>
                             <ul>
                                <li><b>對孟懿子：</b>孔子以「無違」作答，並進一步解釋「無違」即是不違背「禮」。無論父母在生或去世，侍奉、安葬、祭祀都應依禮而行。這確立了「禮」作為孝行的最高準則。</li>
                                <li><b>對子游：</b>孔子批評當時普遍認為「能養」（能供養父母）就是孝的觀念。他以「至於犬馬，皆能有養」作比，指出如果只供養而沒有發自內心的恭敬，「不敬，何以別乎！」，這就與飼養動物沒有分別。</li>
                             </ul>
                              <h3>孝的具體行為</h3>
                             <ul>
                                <li><b>幾諫：</b>當父母有過錯時，子女應委婉地勸諫。如果父母不聽從，仍要對他們保持恭敬，不能冒犯，並要為他們憂心，但不可埋怨。</li>
                                <li><b>知父母之年：</b>必須緊記父母的年齡。一方面為他們的長壽而歡喜，另一方面也為他們年事已高而憂懼，從而更懂得珍惜和及時行孝。</li>
                             </ul>`
                },
                "1.3": {
                    title: "內容分析：論君子",
                    content: `<h2>內容分析：論君子</h2>
                             <p>「君子」是儒家思想中的理想人格。孔子從個人修養、心境胸懷、待人接物等多個角度，描繪了君子的形象，並常與「小人」作對比，使之更為鮮明。</p>
                             <h3>個人修為</h3>
                             <ul>
                                <li><b>莊重威儀：</b>「君子不重則不威；學則不固。」君子要莊重，才有威儀，所學的知識才會鞏固。</li>
                                <li><b>躬行實踐：</b>「君子恥其言而過其行。」君子以說得多、做得少為恥，強調言行一致，行動應超越言辭。</li>
                                <li><b>勇於改過：</b>「過則勿憚改。」有了過錯，不要害怕改正。</li>
                                <li><b>內省求己：</b>「君子求諸己，小人求諸人。」君子嚴格要求自己，小人則苛求他人。「內省不疚，夫何憂何懼？」君子經常自我反省，因為問心無愧，所以心中坦蕩，無憂無懼。</li>
                             </ul>
                             <h3>心境胸懷</h3>
                             <ul>
                                <li><b>坦蕩與憂戚：</b>「君子坦蕩蕩，小人長戚戚。」君子心胸寬廣舒泰，小人則經常憂愁不安。</li>
                                <li><b>憂慮的焦點：</b>「君子病無能焉，不病人之不己知也。」君子只擔憂自己沒有能力，而不擔心別人不了解自己，體現了專注自我提升的價值觀。</li>
                             </ul>
                              <h3>待人處事</h3>
                             <ul>
                                <li><b>交友原則：</b>「主忠信。無友不如己者。」君子以忠信為主要原則，不與品德不如自己的人交朋友。</li>
                                <li><b>成人之美：</b>「君子成人之美，不成人之惡。小人反是。」君子成全別人的好事，不促成別人的壞事，小人則相反。</li>
                                <li><b>行事準則：</b>「君子義以為質，禮以行之，孫以出之，信以成之。」君子以「義」為根本，用「禮」來實行，用謙遜的言辭說出，用誠實的態度完成。</li>
                             </ul>`
                },
                "1.4": {
                    title: "仁、孝、君子的關係",
                    content: `<h2>仁、孝、君子的關係</h2>
                             <p>「仁」、「孝」、「君子」是《論語》中三個緊密相連的核心概念，構成一個完整的道德體系。</p>
                             <ul>
                                <li><b>「孝」是「仁」的根本：</b>儒家認為「孝悌也者，其為仁之本與！」孝順父母、尊敬兄長是仁德的基礎。一個人如果能處理好家庭內部的人倫關係，才能將這份愛推己及人，擴展至社會，達至「仁」的境界。</li>
                                <li><b>「仁」是「君子」的最高追求：</b>「君子」是儒家的理想人格，而「仁」則是君子必須具備的最高道德品質。「君子去仁，惡乎成名？」君子一旦離開了「仁」，就不能稱其為君子。因此，君子的所有修為，最終都是為了達致「仁」的境界。</li>
                                <li><b>「君子」是「仁」的實踐者：</b>君子的言行標準，如「克己復禮」、「求諸己」、「成人之美」等，本身就是實踐「仁」的具體表現。「殺身成仁」更是將君子實踐仁德推向了極致。</li>
                             </ul>
                             <p>總結而言，<b>孝 → 仁 → 君子</b> 是一個由內而外、由己及人、由基礎到昇華的道德實踐過程。由孝出發，培養仁愛之心，最終成為一個在各方面都符合道德規範的君子。</p>
                            `
                },
                "1.5": {
                    title: "修辭手法與句式",
                     content: `<h2>修辭手法與句式</h2>
                             <h3>修辭手法</h3>
                             <ul>
                                <li><b>對比：</b>多處運用君子與小人的對比，如「君子坦蕩蕩，小人長戚戚」、「君子求諸己，小人求諸人」，鮮明地突顯了君子的高尚品格。</li>
                                <li><b>排比：</b>「非禮勿視，非禮勿聽，非禮勿言，非禮勿動」和「生，事之以禮；死，葬之以禮，祭之以禮」，句式整齊，語勢強勁，使論說層次分明，極具說服力。</li>
                                <li><b>反問：</b>「不敬，何以別乎？」、「君子去仁，惡乎成名？」等反問句，加強了語氣，使論點不言而喻。</li>
                                <li><b>比喻：</b>以「犬馬」比喻只供養而無敬意的孝行，生動形象，發人深省。</li>
                             </ul>
                             <h3>句式</h3>
                             <ul>
                                 <li><b>判斷句：</b>多用「...者，...也」或直接用「也」作結。例如：「不仁者，不可以久處約...」、「富與貴，是人之所欲也。」</li>
                                 <li><b>倒裝句：</b>例如「君子義以為質，禮以行之...」中的「義以為質」是「以義為質」的賓語前置。</li>
                             </ul>`
                },
                "1.6": {
                    title: "互動答題挑戰",
                    type: "quiz"
                }
            }
        },
        "2": {
            title: "〈魚我所欲也〉",
            sections: { "2.0": { title: "課文原文", content: `<h2>〈魚我所欲也〉原文</h2><p>孟子曰：「魚，我所欲也；熊掌，亦我所欲也。二者不可得兼，舍魚而取熊掌者也。生，亦我所欲也；義，亦我所欲也。二者不可得兼，舍生而取義者也。</p><p>生亦我所欲，所欲有甚於生者，故不為苟得也；死亦我所惡，所惡有甚於死者，故患有所不辟也。如使人之所欲莫甚於生，則凡可以得生者，何不用也？使人之所惡莫甚於死者，則凡可以辟患者，何不為也？由是則生而有不用也，由是則可以辟患而有不為也。是故所欲有甚於生者，所惡有甚於死者。非獨賢者有是心也，人皆有之，賢者能勿喪耳。</p><p>一簞食，一豆羹，得之則生，弗得則死。嘑爾而與之，行道之人弗受；蹴爾而與之，乞人不屑也。萬鍾則不辯禮義而受之。萬鍾於我何加焉？為宮室之美、妻妾之奉、所識窮乏者得我與？鄉為身死而不受，今為宮室之美為之；鄉為身死而不受，今為妻妾之奉為之；鄉為身死而不受，今為所識窮乏者得我而為之。是亦不可以已乎？此之謂失其本心。」</p>` } }
        },
        "3": {
            title: "〈逍遙遊〉",
            sections: { "3.0": { title: "課文原文", content: `<h2>〈逍遙遊〉(節錄)原文</h2><p>惠子謂莊子曰：「魏王貽我大瓠之種，我樹之成而實五石；以盛水漿，其堅不能自舉也；剖之以為瓢，則瓠落無所容。非不呺然大也，吾為其無用而掊之。」</p><p>莊子曰：「夫子固拙於用大矣。宋人有善為不龜手之藥者，世世以洴澼絖為事。客聞之，請買其方百金。聚族而謀曰：『我世世為洴澼絖，不過數金；今一朝而鬻技百金，請與之。』客得之，以說吳王。越有難，吳王使之將，冬與越人水戰，大敗越人，裂地而封之。能不龜手，一也；或以封，或不免於洴澼絖，則所用之異也。今子有五石之瓠，何不慮以為大樽而浮乎江湖，而憂其瓠落無所容？則夫子猶有蓬之心也夫！」</p><p>惠子謂莊子曰：「吾有大樹，人謂之樗。其大本擁腫而不中繩墨，其小枝卷曲而不中規矩，立之塗，匠者不顧。今子之言，大而無用，眾所同去也。」</p><p>莊子曰：「子獨不見狸狌乎？卑身而伏，以候敖者；東西跳梁，不辟高下，中於機辟，死於罔罟。今夫斄牛，其大若垂天之雲；此能為大矣，而不能執鼠。今子有大樹，患其無用，何不樹之於無何有之鄉，廣莫之野，彷徨乎無為其側，逍遙乎寢卧其下；不夭斤斧，物無害者。無所可用，安所困苦哉？」</p>` } }
        },
        "4": {
            title: "〈勸學〉",
            sections: { "4.0": { title: "課文原文", content: `<h2>〈勸學〉(節錄) 原文</h2><p>君子曰：學不可以已。</p><p>青，取之於藍，而青於藍；冰，水為之，而寒於水。木直中繩，輮以為輪，其曲中規。雖有槁暴，不復挺者，輮使之然也。故木受繩則直，金就礪則利，君子博學而日參省乎己，則知明而行無過矣。</p><p>吾嘗終日而思矣，不如須臾之所學也；吾嘗跂而望矣，不如登高之博見也。登高而招，臂非加長也，而見者遠；順風而呼，聲非加疾也，而聞者彰。假輿馬者，非利足也，而致千里；假舟楫者，非能水也，而絕江河。君子生非異也，善假於物也。</p><p>積土成山，風雨興焉；積水成淵，蛟龍生焉；積善成德，而神明自得，聖心備焉。故不積跬步，無以至千里；不積小流，無以成江海。騏驥一躍，不能十步；駑馬十駕，功在不舍。鍥而舍之，朽木不折；鍥而不舍，金石可鏤。螾無爪牙之利，筋骨之強，上食埃土，下飲黃泉，用心一也。蟹六跪而二螯，非蛇蟺之穴無可寄託者，用心躁也。</p>` } }
        },
        "5": {
            title: "〈廉頗藺相如列傳〉",
            sections: { "5.0": { title: "課文原文", content: `<h2>〈廉頗藺相如列傳〉(節錄) 原文</h2><p>廉頗者，趙之良將也。趙惠文王十六年，廉頗為趙將，伐齊，大破之，取陽晉，拜為上卿，以勇氣聞於諸侯。藺相如者，趙人也，為趙宦者令繆賢舍人。</p><p>既罷，歸國，以相如功大，拜為上大夫。於是趙王乃齋戒五日，使臣奉璧，拜送書於庭。廉頗聞之，肉袒負荊，因賓客至藺相如門謝罪，曰：「鄙賤之人，不知將軍寬之至此也！」卒相與驩，為刎頸之交。</p><p>（註：以上為考評局指定的背誦部分。以下為理解部分，有助完整了解故事。）</p><p>趙王遂許齋五日，使臣奉璧，拜送書於庭。相如持其璧睨柱，欲以擊柱。秦王恐其破璧，乃辭謝固請，召有司案圖，指从此以往十五都予趙。相如度秦王特以詐詳為予趙城，實不可得，乃謂秦王曰：「和氏璧，天下所共傳寶也。趙王恐，不敢不献。趙王送璧時，齋戒五日。今大王亦宜齋戒五日，設九賓於廷，臣乃敢上璧。」秦王度之，終不可強奪，遂許齋五日，舍相如廣成傳。</p><p>相如度秦王雖齋，決負約不償城，乃使其從者衣褐，懷其璧，從徑道亡，歸璧于趙。</p><p>既罷，歸國，以相如功大，拜為上大夫。廉頗聞之，曰：「我為趙將，有攻城野戰之大功，而藺相如徒以口舌為勞，而位居我上。且相如素賤人，吾羞，不忍為之下！」宣言曰：「我見相如，必辱之。」相如聞，不肯與會。相如每朝時，常稱病，不欲與廉頗爭列。已而相如出，望見廉頗，相如引車避匿。於是舍人相與諫曰：「臣所以去親戚而事君者，徒慕君之高義也。今君與廉頗同列，廉君宣惡言，而君畏匿之，恐懼殊甚。且庸人尚羞之，況於將相乎！臣等不肖，請辭去。」藺相如固止之，曰：「公之視廉將軍孰與秦王？」曰：「不若也。」相如曰：「夫以秦王之威，而相如廷叱之，辱其群臣。相如雖駑，獨畏廉將軍哉？顧吾念之，強秦之所以不敢加兵於趙者，徒以吾兩人存也。今兩虎共鬥，其勢不俱生。吾所以為此者，以先國家之急而後私讎也。」</p><p>廉頗聞之，肉袒負荊，因賓客至藺相如門謝罪，曰：「鄙賤之人，不知將軍寬之至此也！」卒相與驩，為刎頸之交。</p>` } }
        },
        "6": {
            title: "〈出師表〉",
            sections: { "6.0": { title: "課文原文", content: `<h2>〈出師表〉原文</h2><p>臣亮言：先帝創業未半，而中道崩殂；今天下三分，益州疲弊，此誠危急存亡之秋也。然侍衞之臣，不懈於內；忠志之士，忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。誠宜開張聖聽，以光先帝遺德，恢弘志士之氣；不宜妄自菲薄，引喻失義，以塞忠諫之路也。</p><p>宮中府中，俱為一體；陟罰臧否，不宜異同。若有作姦犯科，及為忠善者，宜付有司，論其刑賞，以昭陛下平明之治；不宜偏私，使內外異法也。</p><p>侍中、侍郎郭攸之、費禕、董允等，此皆良實，志慮忠純，是以先帝簡拔以遺陛下。愚以為宮中之事，事無大小，悉以咨之，然後施行，必能裨補闕漏，有所廣益。</p><p>將軍向寵，性行淑均，曉暢軍事，試用於昔日，先帝稱之曰「能」，是以眾議舉寵為督。愚以為營中之事，悉以咨之，必能使行陣和睦，優劣得所。</p><p>親賢臣，遠小人，此先漢所以興隆也；親小人，遠賢臣，此後漢所以傾頹也。先帝在時，每與臣論此事，未嘗不歎息痛恨於桓、靈也。侍中、尚書、長史、參軍，此悉貞良死節之臣，願陛下親之信之，則漢室之隆，可計日而待也。</p><p>臣本布衣，躬耕於南陽，苟全性命於亂世，不求聞達於諸侯。先帝不以臣卑鄙，猥自枉屈，三顧臣於草廬之中，諮臣以當世之事，由是感激，遂許先帝以驅馳。後值傾覆，受任於敗軍之際，奉命於危難之間，爾來二十有一年矣。</p><p>先帝知臣謹慎，故臨崩寄臣以大事也。受命以來，夙夜憂歎，恐託付不效，以傷先帝之明；故五月渡瀘，深入不毛。今南方已定，兵甲已足，當獎率三軍，北定中原，庶竭駑鈍，攘除姦凶，興復漢室，還於舊都。此臣所以報先帝而忠陛下之職分也。至於斟酌損益，進盡忠言，則攸之、禕、允之任也。</p><p>願陛下託臣以討賊興復之效，不效則治臣之罪，以告先帝之靈。若無興德之言，則責攸之、禕、允等之慢，以彰其咎。陛下亦宜自謀，以諮諏善道，察納雅言，深追先帝遺詔。臣不勝受恩感激。</p><p>今當遠離，臨表涕零，不知所言。</p>` } }
        },
        "7": {
            title: "〈師說〉",
            sections: { "7.0": { title: "課文原文", content: `<h2>〈師說〉原文</h2><p>古之學者必有師。師者，所以傳道、受業、解惑也。人非生而知之者，孰能無惑？惑而不從師，其為惑也，終不解矣。生乎吾前，其聞道也，固先乎吾，吾從而師之；生乎吾後，其聞道也，亦先乎吾，吾從而師之。吾師道也，夫庸知其年之先後生於吾乎？是故無貴無賤，無長無少，道之所存，師之所存也。</p><p>嗟乎！師道之不傳也久矣！欲人之無惑也難矣！古之聖人，其出人也遠矣，猶且從師而問焉；今之眾人，其下聖人也亦遠矣，而恥學於師。是故聖益聖，愚益愚。聖人之所以為聖，愚人之所以為愚，其皆出於此乎？</p><p>愛其子，擇師而教之，於其身也，則恥師焉，惑矣！彼童子之師，授之書而習其句讀者也，非吾所謂傳其道、解其惑者也。句讀之不知，惑之不解，或師焉，或不焉，小學而大遺，吾未見其明也。</p><p>巫、醫、樂師、百工之人，不恥相師。士大夫之族，曰師、曰弟子云者，則群聚而笑之。問之，則曰：「彼與彼年相若也，道相似也。」位卑則足羞，官盛則近諛。嗚呼！師道之不復，可知矣。巫、醫、樂師、百工之人，君子不齒，今其智乃反不能及，其可怪也歟！</p><p>聖人無常師。孔子師郯子、萇弘、師襄、老聃。郯子之徒，其賢不及孔子。孔子曰：「三人行，則必有我師。」是故弟子不必不如師，師不必賢於弟子。聞道有先後，術業有專攻，如是而已。</p><p>李氏子蟠，年十七，好古文，六藝經傳，皆通習之。不拘於時，請學於余。余嘉其能行古道，作《師說》以貽之。</p>` } }
        },
        "8": {
            title: "〈始得西山宴遊記〉",
            sections: { "8.0": { title: "課文原文", content: `<h2>〈始得西山宴遊記〉原文</h2><p>自余為僇人，居是州，恆惴慄。其隙也，則施施而行，漫漫而遊。日與其徒上高山，入深林，窮迴溪，幽泉怪石，無遠不到。到則披草而坐，傾壺而醉。醉則更相枕以臥，臥而夢。意有所極，夢亦同趣。覺而起，起而歸。以為凡是州之山水有異態者，皆我有也，而未始知西山之怪特。</p><p>今年九月二十八日，因坐法華西亭，望西山，始指異之。遂命僕人過湘江，緣染溪，斫榛莽，焚茅茷，窮山之高而止。</p><p>攀援而登，箕踞而遨，則凡數州之土壤，皆在衽席之下。其高下之勢，岈然窪然，若垤若穴，尺寸千里，攢蹙累積，莫得遯隱。縈青繚白，外與天際，四望如一。然後知是山之特出，不與培塿為類，悠悠乎與顥氣俱，而莫得其涯；洋洋乎與造物者遊，而不知其所窮。</p><p>引觴滿酌，頹然就醉，不知日之入。蒼然暮色，自遠而至，至無所見，而猶不欲歸。心凝形釋，與萬化冥合。然後知吾嚮之未始遊，遊於是乎始，故為之文以志。是歲，元和四年也。</p>` } }
        },
        "9": {
            title: "〈岳陽樓記〉",
            sections: { "9.0": { title: "課文原文", content: `<h2>〈岳陽樓記〉原文</h2><p>慶曆四年春，滕子京謫守巴陵郡。越明年，政通人和，百廢具興。乃重修岳陽樓，增其舊制，刻唐賢今人詩賦於其上。屬予作文以記之。</p><p>予觀夫巴陵勝狀，在洞庭一湖。銜遠山，吞長江，浩浩湯湯，橫無際涯；朝暉夕陰，氣象萬千。此則岳陽樓之大觀也，前人之述備矣。然則北通巫峽，南極瀟湘，遷客騷人，多會于此，覽物之情，得無異乎？</p><p>若夫霪雨霏霏，連月不開，陰風怒號，濁浪排空；日星隱曜，山嶽潛形；商旅不行，檣傾楫摧；薄暮冥冥，虎嘯猿啼。登斯樓也，則有去國懷鄉，憂讒畏譏，滿目蕭然，感極而悲者矣。</p><p>至若春和景明，波瀾不驚，上下天光，一碧萬頃；沙鷗翔集，錦鱗游泳；岸芷汀蘭，郁郁青青。而或長煙一空，皓月千里，浮光躍金，靜影沉璧，漁歌互答，此樂何極！登斯樓也，則有心曠神怡，寵辱偕忘，把酒臨風，其喜洋洋者矣。</p><p>嗟夫！予嘗求古仁人之心，或異二者之為，何哉？不以物喜，不以己悲。居廟堂之高，則憂其民；處江湖之遠，則憂其君。是進亦憂，退亦憂；然則何時而樂耶？其必曰「先天下之憂而憂，後天下之樂而樂」乎！噫！微斯人，吾誰與歸？</p><p>時六年九月十五日。</p>` } }
        },
        "10": {
            title: "〈六國論〉",
            sections: { "10.0": { title: "課文原文", content: `<h2>〈六國論〉原文</h2><p>六國破滅，非兵不利，戰不善，弊在賂秦。賂秦而力虧，破滅之道也。或曰：「六國互喪，率賂秦耶？」曰：「不賂者以賂者喪。蓋失強援，不能獨完。故曰，弊在賂秦也。」</p><p>秦以攻取之外，小則獲邑，大則得城，較秦之所得，與戰勝而得者，其實百倍；諸侯之所亡，與戰敗而亡者，其實亦百倍。則秦之所大欲，諸侯之所大患，固不在戰矣。思厥先祖父，暴霜露，斬荊棘，以有尺寸之地。子孫視之不甚惜，舉以予人，如棄草芥。今日割五城，明日割十城，然後得一夕安寢。起視四境，而秦兵又至矣。然則諸侯之地有限，暴秦之欲無厭，奉之彌繁，侵之愈急。故不戰而強弱勝負已判矣。至於顛覆，理固宜然。古人云：「以地事秦，猶抱薪救火，薪不盡，火不滅。」此言得之。</p><p>齊人未嘗賂秦，終繼五國遷滅，何哉？與嬴而不助五國也。五國既喪，齊亦不免矣。燕、趙之君，始有遠略，能守其土，義不賂秦。是故燕雖小國而後亡，斯用兵之效也。至丹以荊卿為計，始速禍焉。趙嘗五戰于秦，二敗而三勝。後秦擊趙者再，李牧連卻之。洎牧以讒誅，邯郸為郡，惜其用武而不終也。且燕、趙處秦革滅殆盡之際，可謂智力孤危，戰敗而亡，誠不得已。向使三國各愛其地，齊人勿附於秦，刺客不行，良將猶在，則勝負之數，存亡之理，當與秦相較，或未易量。</p><p>嗚呼！以賂秦之地，封天下之謀臣；以事秦之心，禮天下之奇才；并力西嚮，則吾恐秦人食之不得下咽也。悲夫！有如此之勢，而為秦人積威之所劫，日削月割，以趨於亡。為國者無使為積威之所劫哉！</p><p>夫六國與秦皆諸侯，其勢弱於秦，而猶有可以不賂而勝之之勢；茍以天下之大，而從六國破亡之故事，是又在六國下矣！</p>` } }
        },
        "11": {
            title: "詩三首",
            sections: { "11.0": { title: "課文原文", content: `<h2>詩三首 原文</h2><h3>山居秋暝 (王維)</h3><p>空山新雨後，天氣晚來秋。</p><p>明月松間照，清泉石上流。</p><p>竹喧歸浣女，蓮動下漁舟。</p><p>隨意春芳歇，王孫自可留。</p><h3>月下獨酌 (其一) (李白)</h3><p>花間一壺酒，獨酌無相親。</p><p>舉杯邀明月，對影成三人。</p><p>月既不解飲，影徒隨我身。</p><p>暫伴月將影，行樂須及春。</p><p>我歌月徘徊，我舞影零亂。</p><p>醒時同交歡，醉後各分散。</p><p>永結無情遊，相期邈雲漢。</p><h3>登樓 (杜甫)</h3><p>花近高樓傷客心，萬方多難此登臨。</p><p>錦江春色來天地，玉壘浮雲變古今。</p><p>北極朝廷終不改，西山寇盜莫相侵。</p><p>可憐後主還祠廟，日暮聊為梁甫吟。</p>` } }
        },
        "12": {
            title: "詞三首",
            sections: { "12.0": { title: "課文原文", content: `<h2>詞三首 原文</h2><h3>念奴嬌·赤壁懷古 (蘇軾)</h3><p>大江東去，浪淘盡，千古風流人物。</p><p>故壘西邊，人道是，三國周郎赤壁。</p><p>亂石穿空，驚濤拍岸，捲起千堆雪。</p><p>江山如畫，一時多少豪傑。</p><p>遙想公瑾當年，小喬初嫁了，雄姿英發。</p><p>羽扇綸巾，談笑間，檣櫓灰飛煙滅。</p><p>故國神遊，多情應笑我，早生華髮。</p><p>人生如夢，一尊還酹江月。</p><h3>聲聲慢·秋情 (李清照)</h3><p>尋尋覓覓，冷冷清清，淒淒慘慘戚戚。</p><p>乍暖還寒時候，最難將息。</p><p>三杯兩盞淡酒，怎敵他、晚來風急？</p><p>雁過也，正傷心，卻是舊時相識。</p><p>滿地黃花堆積。憔悴損，如今有誰堪摘？</p><p>守著窗兒，獨自怎生得黑？</p><p>梧桐更兼細雨，到黃昏、點點滴滴。</p><p>這次第，怎一個愁字了得！</p><h3>青玉案·元夕 (辛棄疾)</h3><p>東風夜放花千樹。更吹落、星如雨。</p><p>寶馬雕車香滿路。</p><p>鳳簫聲動，玉壺光轉，一夜魚龍舞。</p><p>蛾兒雪柳黃金縷。笑語盈盈暗香去。</p><p>眾裡尋他千百度。驀然回首，那人卻在，燈火闌珊處。</p>` } }
        }
    };
    
    // --- COMPLETE QUIZ POOLS ---
    const quizPools = {
        "part1": {
            title: "基礎篇：字詞辨識",
            questions: [
                { q: "不可以久處**約**", w: "約", a: "窮困", o: ["儉省", "約定", "大概"] },
                { q: "知者**利**仁", w: "利", a: "利用", o: ["好處", "鋒利", "利益"] },
                { q: "不以其**道**得之", w: "道", a: "方法", o: ["道理", "道路", "說"] },
                { q: "不**處**也", w: "處", a: "接受", o: ["居住", "處罰", "交往"] },
                { q: "**去**仁", w: "去", a: "拋棄", o: ["前往", "距離", "除去"] },
                { q: "**惡**乎成名", w: "惡", a: "怎麼", o: ["厭惡", "邪惡", "醜"] },
                { q: "無終食之間**違**仁", w: "違", a: "離開", o: ["違反", "違背", "思念"] },
                { q: "**造次**必於是", w: "造次", a: "倉卒", o: ["創造", "次序", "魯莽"] },
                { q: "**克**己復禮為仁", w: "克", a: "克制", o: ["克服", "能夠", "攻下"] },
                { q: "為仁由**己**", w: "己", a: "自己", o: ["停止", "他人", "已經"] },
                { q: "請問其**目**", w: "目", a: "要目", o: ["眼睛", "看待", "目錄"] },
                { q: "請**事**斯語矣", w: "事", a: "實踐", o: ["事情", "侍奉", "從事"] },
                { q: "無求生以**害**仁", w: "害", a: "損害", o: ["害怕", "禍害", "殺害"] },
                { q: "有殺身以**成**仁", w: "成", a: "成全", o: ["成為", "完成", "成功"] },
                { q: "樊遲**御**", w: "御", a: "駕駛車馬", o: ["抵禦", "管理", "侍奉"] },
                { q: "無**違**", w: "違", a: "違背", o: ["離開", "不是", "諂媚"] },
                { q: "生，**事**之以禮", w: "事", a: "侍奉", o: ["事情", "實踐", "從事"] },
                { q: "是謂能**養**", w: "養", a: "供養", o: ["飼養", "培養", "養育"] },
                { q: "皆能有**養**", w: "養", a: "飼養", o: ["供養", "培養", "養育"] },
                { q: "事父母**幾**諫", w: "幾", a: "婉轉地", o: ["幾個", "將近", "希望"] },
                { q: "又敬不**違**", w: "違", a: "冒犯", o: ["違背", "離開", "不是"] },
                { q: "**勞**而不怨", w: "勞", a: "憂愁", o: ["勞動", "疲勞", "功勞"] },
                { q: "父母之**年**", w: "年", a: "年齡", o: ["年度", "年歲", "豐年"] },
                { q: "君子不**重**則不威", w: "重", a: "莊重", o: ["重要", "沉重", "重複"] },
                { q: "學則不**固**", w: "固", a: "鞏固", o: ["堅固", "固執", "本來"] },
                { q: "無友不**如**己者", w: "如", a: "及得上", o: ["如果", "像", "依照"] },
                { q: "**過**則勿憚改", w: "過", a: "過錯", o: ["經過", "過分", "超越"] },
                { q: "過則勿**憚**改", w: "憚", a: "害怕", o: ["但是", "肆意", "單獨"] },
                { q: "小人長**戚戚**", w: "戚戚", a: "憂愁的樣子", o: ["親戚", "悲傷", "恭敬"] },
                { q: "**斯**謂之君子矣乎", w: "斯", a: "這", o: ["於是", "劈開", "乃"] },
                { q: "君子**成**人之美", w: "成", a: "成全", o: ["成為", "完成", "成功"] },
                { q: "小人**反**是", w: "反", a: "相反", o: ["反對", "返回", "造反"] },
                { q: "君子義以為**質**", w: "質", a: "本質", o: ["品質", "質問", "抵押"] },
                { q: "禮以**行**之", w: "行", a: "實行", o: ["行走", "品行", "可以"] },
                { q: "**孫**以出之", w: "孫", a: "謙遜", o: ["孫子", "逃走", "減少"] },
                { q: "孫以**出**之", w: "出", a: "說出", o: ["出現", "外出", "產生"] },
                { q: "**信**以成之", w: "信", a: "誠信", o: ["相信", "書信", "隨意"] },
                { q: "信以**成**之", w: "成", a: "完成", o: ["成為", "成全", "成功"] },
                { q: "君子**病**無能焉", w: "病", a: "擔憂", o: ["生病", "缺點", "疲勞"] },
                { q: "君子求**諸**己", w: "諸", a: "於", o: ["各位", "許多", "那些"] },
                { q: "君子求**諸**己", w: "諸", a: "「之於」的合音", o: ["各位", "許多", "那些"] },
                { q: "內省不**疚**", w: "疚", a: "愧疚", o: ["疾病", "長久", "追究"] },
                { q: "君子恥其**言**而過其行", w: "言", a: "言論", o: ["說話", "文字", "誓言"] }
            ].map(item => {
                const options = shuffleArray([...item.o, item.a]);
                return {
                    question: `在「${item.q}」一句中，「${item.w}」的意思是：`,
                    options: options,
                    correctAnswer: options.indexOf(item.a),
                    explanation: `正確答案是「${item.a}」。`
                };
            })
        },
        "part2": {
            title: "進階篇：多項選擇",
            questions: [
                { question: "對於孔子所言「仁者」與「知者」的境界，以下哪項描述最為精確？", options: ["「知者」因明白仁德的益處而行仁，「仁者」則視行仁為心安理得的本性。", "「知者」與「仁者」沒有高下之分，都能實踐仁德。", "「知者」比「仁者」更聰明，所以選擇行仁。", "「仁者」只在安樂時行仁，「知者」則在任何情況下都行仁。"], correctAnswer: 0, explanation: "根據「仁者安仁，知者利仁」，「安仁」是發乎自然、心安理得，境界更高；「利仁」是知道行仁的好處才去做，是功利性的考量。" },
                { question: "孔子認為，面對富貴與貧賤時，君子應有的態度是什麼？", options: ["不擇手段地追求富貴，擺脫貧賤。", "若無法依循正道，寧可安於貧賤也不妄取富貴。", "完全不把富貴貧賤放在心上。", "認為追求富貴是人之常情，任何方法都可以接受。"], correctAnswer: 1, explanation: "根據「富與貴，是人之所欲也；不以其道得之，不處也」，君子必須以合乎「道」的方式來獲取富貴，否則寧可不要。" },
                { question: "顏淵問仁，孔子回答「克己復禮為仁」，這句話的精髓是什麼？", options: ["仁德是完全由他人來評價的。", "只要克制自己，不必在乎禮節。", "約束個人私慾，使言行回歸禮的規範，便是仁。", "每天重複禮儀，就能達到仁。"], correctAnswer: 2, explanation: "「克己」是內在的自我約束，「復禮」是外在的行為標準，內外兼修，才是通往「仁」的途徑。" },
                { question: "「殺身以成仁」這句話，體現了儒家何種價值觀？", options: ["生命至上，應不惜一切保全性命。", "為成全仁德，個人生命可以被犧牲。", "只有犧牲才能證明自己是仁者。", "君子不應輕易涉險。"], correctAnswer: 1, explanation: "這句話表明在儒家思想中，「仁」的道德價值高於個體生命，在兩者不可兼得時，志士仁人會選擇犧牲生命來成全「仁」。" },
                { question: "孟懿子問孝，孔子只回答「無違」，後來又對樊遲解釋。這反映了孔子怎樣的教學風格？", options: ["說話言簡意賅，不喜多言。", "對不同學生有偏見。", "善於啟發，等待學生追問才深入闡釋。", "答案詳略視乎孔子當時的心情。"], correctAnswer: 2, explanation: "孔子先給出一個核心概念「無違」，引發樊遲的好奇與追問，然後才具體解釋「生，事之以禮；死，葬之以禮，祭之以禮」，這是一種啟發式教學。" },
                { question: "子游問孝，孔子以「犬馬皆能有養」來比喻，其主要目的是為了強調孝道的哪個面向？", options: ["物質供養的重要性。", "對父母的尊敬之心，是孝與飼養的根本區別。", "古代犬馬的地位很高。", "子女的供養能力。"], correctAnswer: 1, explanation: "孔子的核心論點是「不敬，何以別乎！」，他用犬馬作類比，是為了點明如果只有物質供養而無恭敬之心，那這種「孝」就降格為動物飼養的層次。" },
                { question: "關於「事父母幾諫」，當父母不聽從勸告時，子女應如何自處？", options: ["強硬地要求父母改正。", "放棄勸告，任由父母犯錯。", "內心憂愁，但表面依然恭敬，不冒犯父母。", "與父母斷絕關係。"], correctAnswer: 2, explanation: "根據「見志不從，又敬不違，勞而不怨」，子女的態度應是內心擔憂（勞），但行為上仍要恭敬（敬），不可頂撞（不違），更不能心生怨恨（不怨）。" },
                { question: "孔子說「父母之年，不可不知也」，為何知道後會「一則以喜，一則以懼」？", options: ["喜的是父母依然健在，懼的是自己將要變老。", "喜的是可以為父母慶祝，懼的是自己可能忘記。", "喜的是父母長壽，懼的是來日無多，行孝時日漸減。", "喜的是得到父母的關愛，懼的是要承擔贍養責任。"], correctAnswer: 2, explanation: "「喜」是為父母的高壽而高興；「懼」是意識到父母年歲已高，生命有限，從而產生一種時不我待、要及時行孝的緊迫感。" },
                { question: "「君子不重則不威；學則不固」這句話，揭示了「莊重」與「學習」之間怎樣的關係？", options: ["莊重和學習沒有關係。", "學習使人變得不莊重。", "莊重的儀態有助於建立威信，並且能使學問更加鞏固。", "只要學習，就自然會莊重。"], correctAnswer: 2, explanation: "「重」即莊重。孔子認為，莊重是威嚴的來源，也是穩固學問的基礎。一個不莊重、輕浮的人，學問也會根基不穩。" },
                { question: "「無友不如己者」這句關於交友的建議，應如何理解最為恰當？", options: ["絕對不和任何方面比自己差的人交朋友。", "應結交在品德上比自己好或與自己相當的朋友，以便互相砥礪。", "鄙視那些不如自己的人。", "只和比自己富有的 人交朋友。"], correctAnswer: 1, explanation: "這句話的重點在於道德修養，意在強調交友的選擇應有助於自身的德性提升，應親近良師益友，而不是一種勢利的比較。" },
                { question: "「君子坦蕩蕩，小人長戚戚」主要對比了君子與小人在哪個層面的差異？", options: ["社會地位", "財富多寡", "內心胸襟與精神狀態", "外表容貌"], correctAnswer: 2, explanation: "「坦蕩蕩」形容心胸開闊、舒泰安然；「長戚戚」形容經常憂愁、局促不安。這直接揭示了君子與小人因道德修養不同而導致的內心境界的巨大差異。" },
                { question: "司馬牛問君子，孔子說「君子不憂不懼」。其能夠「不憂不懼」的根本原因是什麼？", options: ["因為他財大勢大，無所畏懼。", "因為他能時常自我反省，做到問心無愧。", "因為他對生死毫不在乎。", "因為他從不犯錯。"], correctAnswer: 1, explanation: "孔子緊接著解釋：「內省不疚，夫何憂何懼？」君子之所以能坦然無懼，是因為他經常反省自己的言行，確保合乎道義，內心沒有愧疚。" },
                { question: "「君子成人之美，不成人之惡」反映了君子在待人處事上抱持何種原則？", options: ["只幫助自己喜歡的人。", "在任何情況下都與人為善。", "會主動成全別人的善行，但不會助長別人的惡行。", "對別人的事情漠不關心。"], correctAnswer: 2, explanation: "這句話體現了君子在人際交往中的道德立場，即樂於幫助他人完成好事，但堅決不參與、不促成壞事，有明確的是非觀。" },
                { question: "「君子恥其言而過其行」的含義是？", options: ["君子說話時會感到羞恥。", "君子以言辭誇大、超越實際行動為恥。", "君子的言行總是有過錯。", "君子從不多言。"], correctAnswer: 1, explanation: "這句話強調了言行一致的重要性。君子認為，說的比做的多（言過其行）是一件可恥的事，強調務實、踐行。" },
                { question: "在「君子義以為質，禮以行之，孫以出之，信以成之」中，哪一項是君子立身行事的根本？", options: ["義 (道義)", "禮 (禮節)", "孫 (謙遜)", "信 (誠信)"], correctAnswer: 0, explanation: "「義以為質」的「質」是根本、本質的意思。孔子認為，君子的一切行為，都應以「義」作為最核心的基礎。" }
            ].sort(() => Math.random() - 0.5) // Shuffle question order
        },
        "part3": {
            title: "挑戰篇：長問答",
            questions: [
                {
                    q: '在《論仁、論孝、論君子》中，「今之孝者，是謂能養。至於犬馬，皆能有養；不敬，何以別乎？」這段話運用了何種修辭手法？此手法如何幫助作者強化其論點？',
                    a: '這段話運用了類比（或比喻）論證。作者將「只供養父母而不尊敬」的行為，與「飼養犬馬」的行為作類比。兩者雖然都有「養」的動作，但作者藉此點明，如果對父母缺乏「敬」，那麼這種供養就和飼養動物沒有本質區別。這種類比使得抽象的「敬」的重要性變得具體、生動而深刻，有力地批判了當時僅停留在物質供應層面的膚淺孝道觀，強化了「孝必須發自內心恭敬」的中心論點。',
                    k: ['類比', '比喻', '犬馬', '不敬', '何以別', '尊敬', '供養']
                },
                {
                    q: '《論語》作為一部語錄體裁的經典，其形式上有何特色？這種體裁對於表達思想有何優勢？',
                    a: '《論語》的體裁是語錄體。其特色主要有：1. 形式上，篇幅短小，語言簡潔精煉，多為孔子與弟子或時人的對話、語錄的直接記錄。2. 內容上，記事、寫人都為闡述道理服務，寓理於言行之中。這種體裁的優勢在於，它通過具體的場景和對話來呈現道理，而非平鋪直敘地空談理論，這使得思想的表達更為生動、親切，也更容易讓讀者理解和記憶。同時，問答的形式本身也體現了思想的啟發和碰撞過程。',
                    k: ['語錄體', '短小', '簡潔', '對話', '生動', '親切', '易於理解']
                },
                {
                    q: '根據《論仁》一節，孔子如何看待「仁」與個人生命價值的關係？他認為在極端情況下應如何抉擇？',
                    a: '孔子認為「仁」的價值是超越個人生命的。他明確指出「志士仁人，無求生以害仁，有殺身以成仁。」這表明，在儒家的價值體系中，道德理想（仁）的重要性高於個體的生死。在面臨生死考驗的極端情況下，如果求生就必須損害「仁」的原則，那麼一個有志之士和仁人，應當選擇犧牲自己的生命來保全和成全「仁」的圓滿。',
                    k: ['超越生命', '價值高於生命', '志士仁人', '無求生以害仁', '有殺身以成仁', '犧牲']
                },
                {
                    q: '在《論君子》中，孔子說「君子不憂不懼」。他能夠達到這種心境的根本原因是什麼？請加以闡釋。',
                    a: '君子能夠「不憂不懼」的根本原因在於「內省不疚」。這意味著君子能夠時常地、嚴格地自我反省，檢視自己的思想、言論和行為是否合乎道義。因為他堅持這樣的道德自律，確保自己問心無愧，心中沒有愧疚和虧欠，所以自然而然地，他的內心就充滿了坦然和安定，不會被外在的得失或他人的評價所困擾，從而達到了無憂無懼的崇高精神境界。',
                    k: ['內省不疚', '自我反省', '檢討', '問心無愧', '坦然', '安定']
                },
                {
                    q: '孔子對其弟子子游說：「今之孝者，是謂能養。」這句話反映了當時社會對「孝」存在何種普遍的誤解？孔子對此提出了怎樣的修正？',
                    a: '這句話反映了當時社會普遍存在一種誤解，即認為「孝」僅僅等同於在物質上供養父母，只要能讓父母溫飽，就是盡了孝道。孔子對此提出了深刻的修正，他緊接著用「至於犬馬，皆能有養；不敬，何以別乎！」來反詰，指出如果缺乏發自內心的「敬」，那麼供養父母和飼養動物就沒有區別了。因此，孔子強調，「敬」才是孝的本質，是區分人倫之孝與動物飼養的關鍵。',
                    k: ['誤解', '能養', '物質', '供養', '修正', '敬', '犬馬', '區別']
                },
                {
                    q: '《論君子》中提到「君子求諸己，小人求諸人」。請解釋這句話的含義，並說明它如何體現了君子的人格特質。',
                    a: '這句話的含義是：君子在遇到問題或出現過錯時，會首先從自身尋找原因，嚴格要求自己；而小人則總是向外推卸責任，苛求他人。這句話深刻地體現了君子勇於擔當、嚴於律己的崇高人格特質。君子將完善自身道德、提升個人能力視為根本，專注於自我修養，體現了一種內向的、自省的、負責任的人生態度。',
                    k: ['求諸己', '求諸人', '自身找原因', '要求自己', '推卸責任', '苛求他人', '擔當', '律己', '自省']
                },
                {
                    q: '根據《論仁》的內容，分析「仁者」與「知者」在實踐仁德時，其動機有何層次上的高下之別？',
                    a: '「仁者」與「知者」的層次高下，主要體現在他們實踐仁德的內在動機上。「知者」行仁，是因為他們通過理智分析，明白了實踐仁德對自己、對社會都有好處（「利仁」），這是一種帶有功利性考量的理性選擇。而「仁者」行仁，則是因為仁德已經與他們的本性融為一體，他們行仁時感到心安理得，是一種自然而然的流露（「安仁」）。因此，「仁者」的境界更高，因為他們行仁是出於本心，而非出於外在的利害計算。',
                    k: ['動機', '層次', '知者', '利仁', '利益', '功利', '仁者', '安仁', '心安理得', '本性']
                },
                {
                    q: '孔子教導孝道時，為何既強調「無違」於「禮」，又強調內心的「敬」？這兩者之間是怎樣的關係？',
                    a: '孔子同時強調「禮」和「敬」，是因為他認為真正的孝道必須是內外兼修、知行合一的。「禮」是外在的行為規範（如生事、死葬、祭祀的儀式），它為孝行提供了具體的、合宜的表達方式，防止行為失當。而「敬」則是發自內心的、對父母的真誠尊敬與愛戴，是孝行的精神內核。兩者是表裏關係：「敬」是「禮」的靈魂，若無「敬」，「禮」就成了空洞的形式；「禮」是「敬」的載體，若無「禮」，「敬」就無從得體地表達。因此，只有將內心的「敬」通過外在的「禮」表現出來，才是完滿的孝。',
                    k: ['內外兼修', '禮', '外在', '規範', '儀式', '敬', '內心', '精神', '表裏關係', '靈魂', '載體']
                }
            ].sort(() => Math.random() - 0.5) // Shuffle question order
        }
    };
    
    // --- DOM Elements ---
    const mainMenuContainer = document.getElementById('main-menu-container');
    const subMenuContainer = document.getElementById('sub-menu-container');
    const contentContainer = document.getElementById('content-container');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    let activeMainButton = null;
    let activeSubButton = null;
    let currentQuizPart = null;
    let currentQuizPool = null;
    let currentQuiz = null;
    let currentQuestionIndex = 0;
    let score = 0;

    // --- Utility Functions ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    // --- Menu and Content Functions ---
    function handleMainClick(event) {
        const mainId = event.target.dataset.mainId;
        if (activeMainButton) activeMainButton.classList.remove('active');
        activeMainButton = event.target;
        activeMainButton.classList.add('active');
        generateSubMenu(mainId);
        subMenuContainer.style.display = 'flex';
        const firstSubId = Object.keys(database[mainId].sections)[0];
        displayContent(mainId, firstSubId, true);
    }
    
    function generateSubMenu(mainId) {
        subMenuContainer.innerHTML = '';
        const article = database[mainId];
        for (const subId in article.sections) {
            const button = document.createElement('button');
            button.textContent = article.sections[subId].title;
            button.dataset.mainId = mainId;
            button.dataset.subId = subId;
            button.addEventListener('click', handleSubClick);
            subMenuContainer.appendChild(button);
        }
    }

    function handleSubClick(event) {
        const mainId = event.target.dataset.mainId;
        const subId = event.target.dataset.subId;
        displayContent(mainId, subId, true);
    }

    function displayContent(mainId, subId, updateActiveButton = false) {
        if (updateActiveButton) {
            if (activeSubButton) activeSubButton.classList.remove('active');
            activeSubButton = subMenuContainer.querySelector(`[data-sub-id='${subId}']`);
            if (activeSubButton) activeSubButton.classList.add('active');
        }
        const section = database[mainId].sections[subId];
        if (section.type === 'quiz') {
            displayQuizPartSelection();
        } else {
            contentContainer.innerHTML = section.content;
        }
    }
    
    // --- Search Functions ---
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) return;
        const results = [];
        const tempDiv = document.createElement('div');
        for (const mainId in database) {
            for (const subId in database[mainId].sections) {
                const section = database[mainId].sections[subId];
                if (section.type === 'quiz') continue;
                tempDiv.innerHTML = section.content;
                const contentText = tempDiv.textContent || tempDiv.innerText || "";
                if (contentText.toLowerCase().includes(query)) {
                    const index = contentText.toLowerCase().indexOf(query);
                    const start = Math.max(0, index - 30);
                    const end = Math.min(contentText.length, index + query.length + 30);
                    let snippet = contentText.substring(start, end);
                    const regex = new RegExp(query, 'gi');
                    snippet = snippet.replace(regex, (match) => `<strong>${match}</strong>`);
                    results.push({
                        mainId, subId,
                        title: `${database[mainId].title} - ${section.title}`,
                        snippet: `...${snippet}...`
                    });
                }
            }
        }
        displaySearchResults(results, query);
    }

    function displaySearchResults(results, query) {
        if (activeMainButton) activeMainButton.classList.remove('active');
        if (activeSubButton) activeSubButton.classList.remove('active');
        subMenuContainer.style.display = 'none';
        let html = `<h2>搜尋 "${query}" 的結果</h2>`;
        if (results.length === 0) {
            html += '<p>找不到相關內容，請嘗試其他關鍵字。</p>';
        } else {
            html += `<p>找到 ${results.length} 條相關結果：</p><ul id="search-results-list">`;
            results.forEach(result => {
                html += `<li data-main-id="${result.mainId}" data-sub-id="${result.subId}">
                            <div class="result-title">${result.title}</div>
                            <div class="result-snippet">${result.snippet}</div>
                         </li>`;
            });
            html += '</ul>';
        }
        contentContainer.innerHTML = html;
        document.querySelectorAll('#search-results-list li').forEach(item => {
            item.addEventListener('click', function() {
                const mainId = this.dataset.mainId;
                const subId = this.dataset.subId;
                const targetMainButton = mainMenuContainer.querySelector(`[data-main-id='${mainId}']`);
                if (targetMainButton) {
                    targetMainButton.click();
                    setTimeout(() => {
                        const targetSubButton = subMenuContainer.querySelector(`[data-sub-id='${subId}']`);
                        if (targetSubButton) targetSubButton.click();
                    }, 50);
                }
            });
        });
    }

    // --- Quiz Functions ---
    function displayQuizPartSelection() {
        contentContainer.innerHTML = `
            <div class="quiz-container">
                <h2>互動答題挑戰</h2>
                <div id="quiz-part-selection">
                    <button data-part="part1">基礎篇：字詞辨識</button>
                    <button data-part="part2">進階篇：多項選擇</button>
                    <button data-part="part3">挑戰篇：長問答</button>
                </div>
                <div id="quiz-selection-screen">
                     <h3 id="quiz-part-title"></h3>
                     <div id="quiz-part-content"></div>
                </div>
                 <div id="quiz-game-screen">
                    <div id="quiz-question"></div>
                    <div id="quiz-options"></div>
                    <div id="quiz-feedback"></div>
                    <div id="quiz-results"></div>
                    <button id="next-question-btn">下一題</button>
                    <button id="restart-quiz-btn">返回挑戰主頁</button>
                </div>
            </div>`;

        document.querySelectorAll('#quiz-part-selection button').forEach(button => {
            button.addEventListener('click', (e) => {
                currentQuizPart = e.target.dataset.part;
                displayQuizQuestionSelection(currentQuizPart);
            });
        });
        
        document.getElementById('restart-quiz-btn').addEventListener('click', displayQuizPartSelection);
    }
    
    function displayQuizQuestionSelection(part) {
        const pool = quizPools[part];
        currentQuizPool = pool.questions;
        document.getElementById('quiz-part-selection').style.display = 'none';
        const selectionScreen = document.getElementById('quiz-selection-screen');
        selectionScreen.style.display = 'block';
        
        const titleEl = selectionScreen.querySelector('#quiz-part-title');
        const contentEl = selectionScreen.querySelector('#quiz-part-content');
        titleEl.textContent = pool.title;

        let optionsHtml = '';
        const len = currentQuizPool.length;
        const steps = [5, 10, 15, 20, 25, 30, 35, 40, 43, 50, 55];
        steps.forEach(step => {
            if (len >= step) optionsHtml += `<option value="${step}">${step} 題</option>`;
        });
        if (!steps.includes(len)) {
             optionsHtml += `<option value="${len}">全部 (${len} 題)</option>`;
        }

        contentEl.innerHTML = `
            <label for="question-count">請選擇題目數量：</label>
            <select id="question-count">${optionsHtml}</select>
            <button id="start-quiz-btn">開始挑戰</button>
        `;
        document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
    }
    
    function startQuiz() {
        document.getElementById('quiz-selection-screen').style.display = 'none';
        document.getElementById('quiz-game-screen').style.display = 'block';

        const countSelect = document.getElementById('question-count');
        let questionCount = parseInt(countSelect.value, 10);
        
        const shuffledQuestions = shuffleArray([...currentQuizPool]);
        currentQuiz = shuffledQuestions.slice(0, questionCount);
        
        currentQuestionIndex = 0;
        score = 0;
        
        document.getElementById('next-question-btn').addEventListener('click', displayQuestion);
        displayQuestion();
    }

    function displayQuestion() {
        document.getElementById('next-question-btn').style.display = 'none';
        document.getElementById('quiz-feedback').style.display = 'none';
        document.getElementById('quiz-results').innerHTML = '';


        if (currentQuestionIndex >= currentQuiz.length) {
            showFinalResults();
            return;
        }

        const questionData = currentQuiz[currentQuestionIndex];
        const questionEl = document.getElementById('quiz-question');
        const optionsEl = document.getElementById('quiz-options');
        optionsEl.innerHTML = '';
        
        questionEl.innerHTML = `${currentQuestionIndex + 1}. ${questionData.q || questionData.question}`;

        if (currentQuizPart === 'part3') {
            optionsEl.innerHTML = `
                <textarea id="long-answer-input" placeholder="在此輸入你的答案..."></textarea>
                <button id="submit-long-answer-btn">提交答案</button>
            `;
            document.getElementById('submit-long-answer-btn').addEventListener('click', checkLongAnswer);
        } else {
            questionData.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.textContent = option;
                button.dataset.index = index;
                button.addEventListener('click', checkMCQAnswer);
                optionsEl.appendChild(button);
            });
        }
    }

    function checkMCQAnswer(event) {
        const selectedButton = event.target;
        const selectedIndex = parseInt(selectedButton.dataset.index, 10);
        const questionData = currentQuiz[currentQuestionIndex];
        const correctIndex = questionData.correctAnswer;
        const options = document.getElementById('quiz-options').children;
        const feedbackEl = document.getElementById('quiz-feedback');

        Array.from(options).forEach(btn => btn.disabled = true);
        
        selectedButton.classList.add('selected');

        if (selectedIndex === correctIndex) {
            score++;
            selectedButton.classList.add('correct');
            feedbackEl.innerHTML = '✅ 答對了！';
            feedbackEl.className = 'quiz-feedback correct-feedback';
        } else {
            selectedButton.classList.add('incorrect');
            if (options[correctIndex]) options[correctIndex].classList.add('correct');
            feedbackEl.innerHTML = `❌ 答錯了！<br><br><b>【解說】</b>${questionData.explanation}`;
            feedbackEl.className = 'quiz-feedback incorrect-feedback';
        }

        feedbackEl.style.display = 'block';
        currentQuestionIndex++;
        document.getElementById('next-question-btn').style.display = 'inline-block';
    }

    function checkLongAnswer() {
        const userAnswer = document.getElementById('long-answer-input').value;
        const questionData = currentQuiz[currentQuestionIndex];
        const feedbackEl = document.getElementById('quiz-feedback');
        
        let awardedPoints = 0;
        let matchedKeywords = [];
        questionData.k.forEach(keyword => {
            if (userAnswer.includes(keyword)) {
                awardedPoints++;
                matchedKeywords.push(keyword);
            }
        });

        // Simple scoring: 1 point per keyword, max points is num of keywords
        const maxPoints = questionData.k.length;
        const finalScore = Math.min(awardedPoints, maxPoints);
        score += finalScore;

        feedbackEl.innerHTML = `
            <h4>你的得分: ${finalScore} / ${maxPoints}</h4>
            <p>你答中了以下關鍵詞：${matchedKeywords.join('、') || '無'}</p>
            <div class="user-answer-display">
                <h4>你的答案：</h4>
                <p>${userAnswer || '(未作答)'}</p>
            </div>
            <div class="model-answer-display">
                <h4>參考答案及準則：</h4>
                <p>${questionData.a}</p>
            </div>
        `;
        
        feedbackEl.style.display = 'block';
        document.getElementById('submit-long-answer-btn').style.display = 'none';
        currentQuestionIndex++;
        document.getElementById('next-question-btn').style.display = 'inline-block';
    }

    function showFinalResults() {
        document.getElementById('quiz-question').textContent = '挑戰完成！';
        document.getElementById('quiz-options').innerHTML = '';
        document.getElementById('quiz-feedback').style.display = 'none';
        document.getElementById('next-question-btn').style.display = 'none';
        document.getElementById('restart-quiz-btn').style.display = 'inline-block';
        
        const resultsEl = document.getElementById('quiz-results');
        let totalPossibleScore = 0;
        if (currentQuizPart === 'part3') {
            currentQuiz.forEach(q => totalPossibleScore += q.k.length);
        } else {
            totalPossibleScore = currentQuiz.length;
        }

        const percentage = totalPossibleScore > 0 ? Math.round((score / totalPossibleScore) * 100) : 0;
        resultsEl.innerHTML = `你的總成績： ${score} / ${totalPossibleScore} (答對率：${percentage}%)`;
    }
    
    // --- Initialization ---
    function init() {
        // Generate main menu
        for (const mainId in database) {
            const button = document.createElement('button');
            button.textContent = database[mainId].title;
            button.dataset.mainId = mainId;
            button.addEventListener('click', handleMainClick);
            mainMenuContainer.appendChild(button);
        }
        // Bind search events
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') performSearch();
        });
    }

    init();
});
