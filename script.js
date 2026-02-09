document.addEventListener('DOMContentLoaded', function() {

    const database = {
        "1": {
            title: "〈論仁論孝論君子〉",
            sections: {
                "1.0": {
                    title: "課文原文",
                    content: `<h2>〈論仁論孝論君子〉原文</h2><h3>【論仁】</h3><p>子曰：「不仁者，不可以久處約，不可以長處樂。仁者安仁，知者利仁。」</p><p>子曰：「富與貴，是人之所欲也；不以其道得之，不處也。貧與賤，是人之所惡也；不以其道得之，不去也。君子去仁，惡乎成名？君子無終食之間違仁，造次必於是，顛沛必於是。」</p><p>顏淵問仁。子曰：「克己復禮為仁。一日克己復禮，天下歸仁焉。為仁由己，而由人乎哉？」顏淵曰：「請問其目。」子曰：「非禮勿視，非禮勿聽，非禮勿言，非禮勿動。」</p><p>子曰：「志士仁人，無求生以害仁，有殺身以成仁。」</p><h3>【論孝】</h3><p>孟懿子問孝。子曰：「無違。」樊遲御，子告之曰：「孟孫問孝於我，我對曰，無違。」樊遲曰：「何謂也？」子曰：「生，事之以禮；死，葬之以禮，祭之以禮。」</p><p>子游問孝。子曰：「今之孝者，是謂能養。至於犬馬，皆能有養；不敬，何以別乎！」</p><p>子曰：「事父母幾諫，見志不從，又敬不違，勞而不怨。」</p><p>子曰：「父母之年，不可不知也。一則以喜，一則以懼。」</p><h3>【論君子】</h3><p>子曰：「君子不重則不威；學則不固。主忠信。無友不如己者。過則勿憚改。」</p><p>子曰：「君子坦蕩蕩，小人長戚戚。」</p><p>司馬牛問君子。子曰：「君子不憂不懼。」曰：「不憂不懼，斯謂之君子已乎？」子曰：「內省不疚，夫何憂何懼？」</p><p>子曰：「君子成人之美，不成人之惡。小人反是。」</p><p>子曰：「君子恥其言而過其行。」</p><p>子曰：「君子義以為質，禮以行之，孫以出之，信以成之。君子哉！」</p><p>子曰：「君子病無能焉，不病人之不己知也。」</p><p>子曰：「君子求諸己，小人求諸人。」</p>`
                },
                "1.1": {
                    title: "主旨",
                    content: `<h2>主旨</h2><ul><li>本文節選自《論語》，旨在闡述儒家思想中三個環環相扣的核心概念：<b>「仁」</b>、<b>「孝」</b>、<b>「君子」</b>。</li><li><b>論仁</b>：探討「仁」作為儒家最高道德理想的內涵、實踐方法及其超越生命的價值。</li><li><b>論孝</b>：闡明「孝」不僅是物質供養，更重要的是發自內心的「敬」和遵循「禮」的規範。</li><li><b>論君子</b>：透過多角度的描寫和對比，勾勒出儒家「君子」這一理想人格在個人修養、心境和待人處事上的典範。</li></ul>`
                },
                "1.2": {
                    title: "結構分析",
                    content: `<h2>結構分析</h2><ul><li>本文屬於<b>語錄體</b>，結構上並非傳統的起承轉合，而是按主題劃分為<b>三個單元</b>，每個單元輯錄性質相近的語錄。</li><li><b>單元一：論仁</b><ul><li><b>境界</b>：以「仁者安仁，知者利仁」點出不同層次的追求。</li><li><b>實踐</b>：在「富貴貧賤」中堅守，甚至「無終食之間違仁」。</li><li><b>方法</b>：以「克己復禮」為綱，「四勿」為目。</li><li><b>昇華</b>：最高層次為「殺身成仁」。</li></ul></li><li><b>單元二：論孝</b><ul><li><b>總綱</b>：以「無違」點明要合乎「禮」。</li><li><b>核心</b>：以「犬馬」之喻，強調「敬」的重要性。</li><li><b>行為</b>：闡述「幾諫」的態度和「知父母之年」的關懷。</li></ul></li><li><b>單元三：論君子</b><ul><li><b>修身</b>：「不重則不威」、「主忠信」、「過則勿憚改」。</li><li><b>心境</b>：「坦蕩蕩」、「不憂不懼」。</li><li><b>處世</b>：「成人之美」、「求諸己」。</li><li><b>對比</b>：多處將「君子」與「小人」對舉，使形象更鮮明。</li></ul></li></ul>`
                },
                "1.3": {
                    title: "修辭手法",
                    content: `<h2>修辭手法</h2><ul><li><b>對比</b><ul><li><b>人物對比</b>：「君子坦蕩蕩，小人長戚戚」、「君子求諸己，小人求諸人」，透過君子與小人截然不同的心境和行為作對比，突顯君子的品格高尚。</li><li><b>觀念對比</b>：「仁者安仁，知者利仁」，對比兩種不同層次的動機。</li></ul></li><li><b>排比</b><ul><li>「非禮勿視，非禮勿聽，非禮勿言，非禮勿動」，句式整齊，語勢強勁，清晰地說明了「克己復禮」的具體要求。</li><li>「生，事之以禮；死，葬之以禮，祭之以禮」，層層鋪墊，全面闡釋了孝道應貫穿父母生前身後。</li></ul></li><li><b>反問</b><ul><li>「不敬，何以別乎！」、「君子去仁，惡乎成名？」、「為仁由己，而由人乎哉？」，這些反問句加強了語氣，使論點不言自明，不容辯駁。</li></ul></li><li><b>比喻</b><ul><li>「至於犬馬，皆能有養」，以飼養動物比喻只供養而無敬意的「孝」，形象生動。</li></ul></li></ul>`
                },
                "1.4": {
                    title: "與其他篇章的關係",
                    content: `<h2>與其他指定文言篇章的關係</h2><ul><li><b>與《魚我所欲也》</b><ul><li><b>共同點</b>：都探討了道德價值（仁/義）與生命之間的抉擇。〈論仁〉提出「殺身成仁」，與〈魚我所欲也〉的「舍生而取義」思想一致。</li><li><b>相異點</b>：「仁」是儒家道德的總綱，涵蓋更廣；「義」則更側重於在具體情境下的是非判斷和行為準則。</li></ul></li><li><b>與《勸學》</b><ul><li><b>君子形象的互補</b>：〈勸學〉中的君子是「善假於物」的學習者，強調後天努力；〈論君子〉中的君子則是已具備道德修養的實踐者，強調「內省」、「求諸己」。兩者分別代表了君子成長的「學」與「行」兩個階段。</li></ul></li><li><b>與〈廉頗藺相如列傳〉</b><ul><li><b>君子品格的體現</b>：藺相如「先國家之急而後私讎」，正是「君子求諸己」、「成人之美」的體現。廉頗「肉袒負荊」，則是「過則勿憚改」的典範。</li></ul></li></ul>`
                },
                "1.5": {
                    title: "互動答題",
                    type: "quiz",
                    questions: [
                        { question: "根據孔子所言，有智慧的人（知者）會實踐仁德，其原因是甚麼？", options: ["因為他安於實踐仁德", "因為他知道仁德對自己有利", "因為他害怕不仁的後果", "因為這是君子的責任"], correctAnswer: 1, explanation: "原文「仁者安仁，知者利仁」，「知者」即有智慧的人，他們明白實行「仁」對自己、對社會都有好處，所以會去實踐。" },
                        { question: "子游問孝，孔子以「犬馬」為例，旨在強調「孝」的哪個核心元素？", options: ["供養", "服從", "恭敬", "幾諫"], correctAnswer: 2, explanation: "孔子說「至於犬馬，皆能有養；不敬，何以別乎！」，意思是如果只供養父母而沒有恭敬之心，那和飼養犬馬就沒有分別了，藉此強調「敬」的重要性。" },
                        { question: "「君子坦蕩蕩，小人長戚戚」一句，主要對比了君子與小人在哪個方面的差異？", options: ["財富地位", "學識水平", "心境胸襟", "言行舉止"], correctAnswer: 2, explanation: "「坦蕩蕩」形容心胸寬廣、舒泰；「長戚戚」形容經常憂愁、局促不安。這句話直接對比了兩者在內心修養和精神狀態上的巨大差異。" },
                        { question: "孔子認為「君子不憂不懼」的原因是甚麼？", options: ["他擁有強大的權力", "他財富豐厚，生活無憂", "他能自我反省而內心無愧", "他對生死已置之度外"], correctAnswer: 2, explanation: "原文「內省不疚，夫何憂何懼？」，意思是君子經常自我反省，言行皆合乎道義，內心沒有愧疚，自然就不會有憂愁和恐懼。" },
                        { question: "根據「生，事之以禮；死，葬之以禮，祭之以禮」，孔子認為「孝」的最高準則是？", options: ["仁愛", "義理", "禮節", "信實"], correctAnswer: 2, explanation: "孔子在回答孟懿子時，先說「無違」，然後解釋「無違」就是不違背「禮」。無論父母生前死後，一切行為都應以「禮」為準則。" },
                        { question: "「君子去仁，惡乎成名？」一句運用了哪種修辭手法？", options: ["設問", "反問", "比喻", "誇張"], correctAnswer: 1, explanation: "這是一個反問句，答案已在問題的反面。意思是君子如果拋棄了「仁」，又怎能成就君子的名聲呢？用強烈的語氣肯定了「仁」對君子的重要性。" },
                        { question: "「君子病無能焉，不病人之不己知也。」這句話體現了君子怎樣的價值觀？", options: ["重視外在名聲", "專注自我提升", "不關心他人看法", "害怕自己沒有能力"], correctAnswer: 1, explanation: "這句話的意思是，君子只會擔憂自己沒有才能，不會擔憂別人不了解自己。這體現了君子專注於內在修為和自我提升，而非追求外界的認可。" }
                    ]
                }
            }
        },
        "2": {
            title: "〈魚我所欲也〉",
            sections: {
                "2.0": {
                    title: "課文原文",
                    content: `<h2>〈魚我所欲也〉原文</h2><p>孟子曰：「魚，我所欲也；熊掌，亦我所欲也。二者不可得兼，舍魚而取熊掌者也。生，亦我所欲也；義，亦我所欲也。二者不可得兼，舍生而取義者也。</p><p>生亦我所欲，所欲有甚於生者，故不為苟得也；死亦我所惡，所惡有甚於死者，故患有所不辟也。如使人之所欲莫甚於生，則凡可以得生者，何不用也？使人之所惡莫甚於死者，則凡可以辟患者，何不為也？由是則生而有不用也，由是則可以辟患而有不為也。是故所欲有甚於生者，所惡有甚於死者。非獨賢者有是心也，人皆有之，賢者能勿喪耳。</p><p>一簞食，一豆羹，得之則生，弗得則死。嘑爾而與之，行道之人弗受；蹴爾而與之，乞人不屑也。萬鍾則不辯禮義而受之。萬鍾於我何加焉？為宮室之美、妻妾之奉、所識窮乏者得我與？鄉為身死而不受，今為宮室之美為之；鄉為身死而不受，今為妻妾之奉為之；鄉為身死而不受，今為所識窮乏者得我而為之。是亦不可以已乎？此之謂失其本心。」</p>`
                },
                "2.1": {
                    title: "主旨",
                    content: `<h2>主旨</h2><ul><li>本文主旨有二：</li><li><b>闡明義重生於生</b>：透過「魚與熊掌」的類比，提出「舍生取義」的中心論點，強調在生命與道義之間，應選擇道義。</li><li><b>論證「本心」的存在</b>：孟子認為「舍生取義」的思想根源於人與生俱來的「本心」（即善性，包含羞惡之心）。賢者與常人的分別，只在於能否保存這份本心，不被人欲所蒙蔽。</li></ul>`
                },
                "2.2": {
                    title: "結構分析",
                    content: `<h2>結構分析</h2><ul><li><b>第一層：提出論點 (類比論證)</b><ul><li>以「魚」喻「生」，「熊掌」喻「義」，兩者皆為人所欲，但價值有高下。</li><li>當不可兼得時，人們會「舍魚而取熊掌」，由此順理成章地引出「舍生而取義」的中心論點。</li></ul></li><li><b>第二層：深入論證 (正反論證)</b><ul><li><b>正面</b>：人有比生命更重要的追求（義），所以不會苟且偷生。</li><li><b>反面 (假設)</b>：如果人只重生，就會不擇手段求生。</li><li><b>結論</b>：現實證明人有比生死更重要的價值標準，這就是「本心」，且「人皆有之」。</li></ul></li><li><b>第三層：舉例論證 (對比論證)</b><ul><li><b>正面例子</b>：「行道之人」和「乞人」寧死也不接受帶侮辱性的「嘑爾」、「蹴爾」的施捨，證明即使是小人物也保有「本心」。</li><li><b>反面例子</b>：有人為了「萬鍾」厚祿，卻「不辯禮義而受之」，是為利益而喪失「本心」的表現。</li><li><b>總結</b>：透過強烈對比，批判「失其本心」的行為，深化主旨。</li></ul></li></ul>`
                },
                "2.3": {
                    title: "修辭手法",
                    content: `<h2>修辭手法</h2><ul><li><b>比喻論證 (類比)</b><ul><li>以「魚」和「熊掌」的價值高低，來比喻「生」和「義」的價值高下，將抽象的道德抉擇變得具體易懂。</li></ul></li><li><b>對比論證</b><ul><li>將「行道之人」與「乞人」的骨氣，和為「萬鍾」而棄義的人的墮落進行鮮明對比，突出「本心」的可貴與失落的可悲。</li></ul></li><li><b>舉例論證</b><ul><li>以「一簞食，一豆羹」和「萬鍾」兩個具體例子，說明人在不同情況下對「義」的取舍。</li></ul></li><li><b>排比</b><ul><li>文末連用三個「鄉為身死而不受，今為……為之」，層層遞進，語氣強烈，有力地譴責了見利忘義的行為。</li></ul></li><li><b>反問</b><ul><li>「萬鍾於我何加焉？」、「是亦不可以已乎？」，加強語氣，表達作者的感嘆與批判。</li></ul></li></ul>`
                },
                "2.4": {
                    title: "互動答題",
                    type: "quiz",
                    questions: [
                        { question: "孟子以「魚」和「熊掌」為喻，是為了說明甚麼道理？", options: ["食物的珍貴程度", "選擇的重要性", "道義的價值高於生命", "人應該追求美好的事物"], correctAnswer: 2, explanation: "「魚」比喻生命，「熊掌」比喻道義。熊掌比魚更珍貴，所以當二者不可兼得時，應舍魚而取熊掌，以此類比，當生命與道義衝突時，應「舍生而取義」。" },
                        { question: "根據孟子，賢者和普通人的根本區別在於？", options: ["賢者天生就有本心，普通人沒有", "賢者能保存本心，普通人容易喪失", "賢者從不犯錯，普通人經常犯錯", "賢者生活富裕，普通人生活貧困"], correctAnswer: 1, explanation: "原文「非獨賢者有是心也，人皆有之，賢者能勿喪耳。」意思是，不是只有賢者才有這種本心，是人人都有，賢者只是能夠不喪失它罷了。" },
                        { question: "文中「嘑爾而與之」和「蹴爾而與之」的例子，旨在證明甚麼？", options: ["乞丐也有尊嚴", "食物的給予方式很重要", "人皆有羞惡之心，即使在生死關頭也會堅守", "當時社會貧富懸殊"], correctAnswer: 2, explanation: "即使是關乎生死的食物，一個飢餓的路人甚至乞丐，在被帶有侮辱性的方式施捨時，也不會接受。這證明了即使在極端困境下，人依然會維護尊嚴，不願捨棄禮義，這正是「本心」的表現。" },
                        { question: "孟子批評為了「萬鍾」而「不辯禮義」的人，是因為他們為了甚麼而失去了本心？", options: ["國家利益", "個人私慾和物質享受", "朋友的請求", "父母的期望"], correctAnswer: 1, explanation: "文中列舉了接受「萬鍾」的原因：「為宮室之美、妻妾之奉、所識窮乏者得我與」，這些都屬於個人的私慾和物質享受。" },
                        { question: "本文運用了多種論證方法，但不包括以下哪一種？", options: ["比喻論證", "對比論證", "引用論證", "舉例論證"], correctAnswer: 2, explanation: "文章運用了比喻（魚與熊掌）、對比（乞人與受萬鍾者）、舉例（一簞食）等論證方法，但並未直接引用古代典籍或名人名言來進行論證。" }
                    ]
                }
            }
        },
        // ...篇章 3 到 12 的完整內容和題庫...
    };

    // --- DOM 元素 ---
    const mainMenuContainer = document.getElementById('main-menu-container');
    const subMenuContainer = document.getElementById('sub-menu-container');
    const contentContainer = document.getElementById('content-container');

    let activeMainButton = null;
    let activeSubButton = null;
    let currentQuizPool = null;
    let currentQuiz = null;
    let currentQuestionIndex = 0;
    let score = 0;

    // --- 函數：洗牌算法，用於隨機抽取題目 ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // --- 函數：處理主選單點擊 ---
    function handleMainClick(event) {
        const mainId = event.target.dataset.mainId;

        if (activeMainButton) activeMainButton.classList.remove('active');
        activeMainButton = event.target;
        activeMainButton.classList.add('active');

        generateSubMenu(mainId);
        
        const firstSubId = Object.keys(database[mainId].sections)[0];
        displayContent(mainId, firstSubId);
        
        if (activeSubButton) activeSubButton.classList.remove('active');
        const firstSubButton = subMenuContainer.querySelector(`[data-sub-id='${firstSubId}']`);
        if (firstSubButton) {
            activeSubButton = firstSubButton;
            activeSubButton.classList.add('active');
        }
    }

    // --- 函數：生成次選單 ---
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

    // --- 函數：處理次選單點擊 ---
    function handleSubClick(event) {
        const mainId = event.target.dataset.mainId;
        const subId = event.target.dataset.subId;
        
        if (activeSubButton) activeSubButton.classList.remove('active');
        activeSubButton = event.target;
        activeSubButton.classList.add('active');

        displayContent(mainId, subId);
    }

    // --- 函數：顯示內容 ---
    function displayContent(mainId, subId) {
        const section = database[mainId].sections[subId];
        if (section.type === 'quiz') {
            displayQuizSelection(section.questions);
        } else {
            contentContainer.innerHTML = section.content;
        }
    }

    // --- 函數：顯示問答遊戲的題數選擇畫面 ---
    function displayQuizSelection(questionPool) {
        currentQuizPool = questionPool;
        
        let optionsHtml = `<option value="5">5 題</option>`;
        if (questionPool.length >= 10) {
            optionsHtml += `<option value="10">10 題</option>`;
        }
        if (questionPool.length >= 20) {
            optionsHtml += `<option value="20">20 題</option>`;
        }
        optionsHtml += `<option value="all">全部 (${questionPool.length} 題)</option>`;

        contentContainer.innerHTML = `
            <div class="quiz-container">
                <h2>互動答題挑戰</h2>
                <div id="quiz-selection-screen">
                    <label for="question-count">請選擇題目數量：</label>
                    <select id="question-count">
                        ${optionsHtml}
                    </select>
                    <button id="start-quiz-btn">開始挑戰</button>
                </div>
                <div id="quiz-game-screen">
                    <div id="quiz-question"></div>
                    <div id="quiz-options"></div>
                    <div id="quiz-feedback"></div>
                    <div id="quiz-results"></div>
                    <button id="next-question-btn">下一題</button>
                    <button id="restart-quiz-btn">重新挑戰</button>
                </div>
            </div>`;
        
        document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
    }

    // --- 函數：開始問答遊戲 ---
    function startQuiz() {
        document.getElementById('quiz-selection-screen').style.display = 'none';
        document.getElementById('quiz-game-screen').style.display = 'block';

        const countSelect = document.getElementById('question-count');
        let questionCount = countSelect.value === 'all' ? currentQuizPool.length : parseInt(countSelect.value, 10);
        
        const shuffledQuestions = shuffleArray([...currentQuizPool]);
        currentQuiz = shuffledQuestions.slice(0, questionCount);
        
        currentQuestionIndex = 0;
        score = 0;
        
        document.getElementById('next-question-btn').addEventListener('click', displayQuestion);
        document.getElementById('restart-quiz-btn').addEventListener('click', () => displayQuizSelection(currentQuizPool));
        displayQuestion();
    }

    // --- 函數：顯示問題 ---
    function displayQuestion() {
        const nextBtn = document.getElementById('next-question-btn');
        const feedbackEl = document.getElementById('quiz-feedback');
        nextBtn.style.display = 'none';
        feedbackEl.style.display = 'none';

        if (currentQuestionIndex >= currentQuiz.length) {
            showResults();
            return;
        }

        const questionData = currentQuiz[currentQuestionIndex];
        document.getElementById('quiz-question').textContent = `${currentQuestionIndex + 1}. ${questionData.question}`;
        const optionsEl = document.getElementById('quiz-options');
        optionsEl.innerHTML = '';

        questionData.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.dataset.index = index;
            button.addEventListener('click', checkAnswer);
            optionsEl.appendChild(button);
        });
    }

    // --- 函數：檢查答案 ---
    function checkAnswer(event) {
        const selectedButton = event.target;
        const selectedIndex = parseInt(selectedButton.dataset.index, 10);
        const questionData = currentQuiz[currentQuestionIndex];
        const correctIndex = questionData.correctAnswer;
        const options = document.getElementById('quiz-options').children;
        const feedbackEl = document.getElementById('quiz-feedback');

        for (const option of options) {
            option.disabled = true;
        }
        
        selectedButton.classList.add('selected');

        if (selectedIndex === correctIndex) {
            score++;
            selectedButton.classList.add('correct');
            feedbackEl.innerHTML = '✅ 答對了！';
            feedbackEl.className = 'quiz-feedback correct-feedback';
        } else {
            selectedButton.classList.add('incorrect');
            options[correctIndex].classList.add('correct');
            feedbackEl.innerHTML = `❌ 答錯了！<br><br><b>【解說】</b>${questionData.explanation}`;
            feedbackEl.className = 'quiz-feedback incorrect-feedback';
        }

        feedbackEl.style.display = 'block';
        currentQuestionIndex++;
        document.getElementById('next-question-btn').style.display = 'inline-block';
    }

    // --- 函數：顯示結果 ---
    function showResults() {
        document.getElementById('quiz-question').textContent = '挑戰完成！';
        document.getElementById('quiz-options').innerHTML = '';
        document.getElementById('next-question-btn').style.display = 'none';
        document.getElementById('restart-quiz-btn').style.display = 'inline-block';
        
        const resultsEl = document.getElementById('quiz-results');
        const percentage = Math.round((score / currentQuiz.length) * 100);
        resultsEl.innerHTML = `你的總成績：<br>${score} / ${currentQuiz.length} (答對率：${percentage}%)`;
    }

    // --- 初始化 ---
    function init() {
        for (const mainId in database) {
            const button = document.createElement('button');
            button.textContent = database[mainId].title;
            button.dataset.mainId = mainId;
            button.addEventListener('click', handleMainClick);
            mainMenuContainer.appendChild(button);
        }
    }

    init();
});
