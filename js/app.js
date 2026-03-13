const App = (() => {
    let currentLesson = null;
    let currentSectionIndex = 0;
    let completedLessons = new Set();

    function init() {
        loadProgress();
        renderSidebar();
        updateProgressBar();
        setupEventListeners();
    }

    function setupEventListeners() {
        document.getElementById('startBtn').addEventListener('click', () => navigateToLesson(1));
        document.getElementById('prevBtn').addEventListener('click', prevSection);
        document.getElementById('nextBtn').addEventListener('click', nextSection);
    }

    function loadProgress() {
        try {
            const saved = localStorage.getItem('pokerTrainer');
            if (saved) {
                const data = JSON.parse(saved);
                completedLessons = new Set(data.completed || []);
            }
        } catch (e) {
            completedLessons = new Set();
        }
    }

    function saveProgress() {
        localStorage.setItem('pokerTrainer', JSON.stringify({ completed: [...completedLessons] }));
    }

    function isLessonUnlocked(lessonId) {
        if (lessonId === 1) return true;
        return completedLessons.has(lessonId - 1);
    }

    function renderSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.innerHTML = '';
        const lessons = Lessons.getAll();
        lessons.forEach(lesson => {
            const item = document.createElement('div');
            item.className = 'sidebar__item';
            const isCompleted = completedLessons.has(lesson.id);
            const isUnlocked = isLessonUnlocked(lesson.id);
            const isCurrent = currentLesson && currentLesson.id === lesson.id;
            if (!isUnlocked) item.classList.add('sidebar__item--locked');
            if (isCurrent) item.classList.add('sidebar__item--current');
            if (isCompleted) item.classList.add('sidebar__item--completed');
            item.innerHTML = `
                <span class="sidebar__item-icon">${lesson.icon}</span>
                <span class="sidebar__item-text">
                    <span class="sidebar__item-subtitle">\uB808\uC2A8 ${lesson.id}</span>
                    <span class="sidebar__item-title">${lesson.title}</span>
                </span>
                <span class="sidebar__item-status">${isCompleted ? '\u2705' : (!isUnlocked ? '\uD83D\uDD12' : '')}</span>
            `;
            if (isUnlocked) item.addEventListener('click', () => navigateToLesson(lesson.id));
            sidebar.appendChild(item);
        });
    }

    function navigateToLesson(lessonId) {
        const lesson = Lessons.getById(lessonId);
        if (!lesson || !isLessonUnlocked(lessonId)) return;
        currentLesson = lesson;
        currentSectionIndex = 0;
        const welcome = document.getElementById('welcome');
        if (welcome) welcome.style.display = 'none';
        document.getElementById('navButtons').style.display = 'flex';
        renderSidebar();
        renderSection();
        updateNavButtons();
    }

    function renderSection() {
        const content = document.getElementById('content');
        const existingLesson = content.querySelector('.lesson');
        if (existingLesson) existingLesson.remove();
        const lessonDiv = document.createElement('div');
        lessonDiv.className = 'lesson';
        if (currentSectionIndex < currentLesson.sections.length) {
            const section = currentLesson.sections[currentSectionIndex];
            renderSectionContent(section, lessonDiv);
        } else {
            renderQuizSection(lessonDiv);
        }
        content.appendChild(lessonDiv);
        content.scrollTop = 0;
    }

    function renderSectionContent(section, container) {
        switch (section.type) {
            case 'text': renderTextSection(section, container); break;
            case 'cards': renderCardsSection(section, container); break;
            case 'hand-ranking': renderHandRankingSection(section, container); break;
            case 'table': renderTableSection(section, container); break;
        }
    }

    function renderTextSection(section, container) {
        const div = document.createElement('div');
        div.className = 'lesson-content';
        if (section.title) {
            const title = document.createElement('h2');
            title.textContent = section.title;
            div.appendChild(title);
        }
        const body = document.createElement('div');
        body.innerHTML = section.content;
        div.appendChild(body);
        container.appendChild(div);
    }

    function renderCardsSection(section, container) {
        const div = document.createElement('div');
        div.className = 'lesson-content';
        if (section.title) {
            const title = document.createElement('h3');
            title.textContent = section.title;
            div.appendChild(title);
        }
        const hand = Cards.createHand(section.cards, { spread: true });
        div.appendChild(hand);
        if (section.caption) {
            const caption = document.createElement('p');
            caption.className = 'lesson-content__caption';
            caption.textContent = section.caption;
            div.appendChild(caption);
        }
        container.appendChild(div);
    }

    function renderHandRankingSection(section, container) {
        const wrapper = document.createElement('div');
        wrapper.className = 'lesson-content';
        if (section.title) {
            const title = document.createElement('h2');
            title.textContent = section.title;
            wrapper.appendChild(title);
        }
        const div = document.createElement('div');
        div.className = 'hand-ranking';
        section.rankings.forEach(ranking => {
            const row = document.createElement('div');
            row.className = 'hand-ranking__row';
            const rankNum = document.createElement('div');
            rankNum.className = 'hand-ranking__rank';
            rankNum.textContent = ranking.rank;
            row.appendChild(rankNum);
            const name = document.createElement('div');
            name.className = 'hand-ranking__name';
            name.textContent = ranking.name;
            row.appendChild(name);
            const cardsDiv = document.createElement('div');
            cardsDiv.className = 'hand-ranking__cards';
            ranking.cards.forEach(cardData => {
                const cardEl = Cards.createCard(cardData.rank, cardData.suit);
                cardEl.classList.add('card--mini');
                cardsDiv.appendChild(cardEl);
            });
            row.appendChild(cardsDiv);
            const desc = document.createElement('div');
            desc.className = 'hand-ranking__description';
            desc.textContent = ranking.description;
            row.appendChild(desc);
            div.appendChild(row);
        });
        wrapper.appendChild(div);
        container.appendChild(wrapper);
    }

    function renderTableSection(section, container) {
        const div = document.createElement('div');
        div.className = 'lesson-content';
        if (section.title) {
            const title = document.createElement('h2');
            title.textContent = section.title;
            div.appendChild(title);
        }
        const body = document.createElement('div');
        body.innerHTML = section.content;
        div.appendChild(body);
        container.appendChild(div);
    }

    function renderQuizSection(container) {
        const quizHeader = document.createElement('div');
        quizHeader.className = 'lesson-content';
        const quizTitle = document.createElement('h2');
        quizTitle.textContent = '\uD83D\uDCDD \uD034\uC988';
        quizHeader.appendChild(quizTitle);
        const quizIntro = document.createElement('p');
        quizIntro.textContent = '\uBC30\uC6B4 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574\uBCF4\uC138\uC694!';
        quizHeader.appendChild(quizIntro);
        container.appendChild(quizHeader);
        const quizContainer = document.createElement('div');
        quizContainer.id = 'quizContainer';
        container.appendChild(quizContainer);
        if (Quiz && typeof Quiz.start === 'function') {
            Quiz.start(currentLesson.quiz, quizContainer, (result) => {
                completeLesson(currentLesson.id);
            });
        }
    }

    function updateNavButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        prevBtn.style.visibility = currentSectionIndex === 0 ? 'hidden' : 'visible';
        if (currentSectionIndex >= currentLesson.sections.length) {
            nextBtn.style.visibility = 'hidden';
        } else {
            nextBtn.style.visibility = 'visible';
            nextBtn.textContent = '\uB2E4\uC74C \u2192';
        }
    }

    function nextSection() {
        const totalSections = currentLesson.sections.length + 1;
        if (currentSectionIndex < totalSections - 1) {
            currentSectionIndex++;
            renderSection();
            updateNavButtons();
        }
    }

    function prevSection() {
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
            renderSection();
            updateNavButtons();
        }
    }

    function completeLesson(lessonId) {
        completedLessons.add(lessonId);
        saveProgress();
        renderSidebar();
        updateProgressBar();
        if (completedLessons.size >= Lessons.getLessonCount()) {
            showCompletionScreen();
        } else {
            const nextId = lessonId + 1;
            if (nextId <= Lessons.getLessonCount()) {
                setTimeout(() => { navigateToLesson(nextId); }, 1500);
            }
        }
    }

    function showCompletionScreen() {
        const content = document.getElementById('content');
        const existingLesson = content.querySelector('.lesson');
        if (existingLesson) existingLesson.remove();
        document.getElementById('navButtons').style.display = 'none';
        const div = document.createElement('div');
        div.className = 'lesson completion';
        div.innerHTML = `
            <div class="celebration">
                <span class="celebration__star">\uD83C\uDFC6</span>
                <h2>\uCD95\uD558\uD569\uB2C8\uB2E4!</h2>
                <p>
                    \uBAA8\uB4E0 \uB808\uC2A8\uC744 \uC644\uB8CC\uD588\uC2B5\uB2C8\uB2E4!<br>
                    \uC774\uC81C \uD14D\uC0AC\uC2A4 \uD640\uB364\uC758 \uAE30\uCD08\uB97C \uB9C8\uC2A4\uD130\uD588\uC2B5\uB2C8\uB2E4. \uD83C\uDF89
                </p>
                <button class="btn btn--gold" onclick="location.reload()">
                    \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uBC30\uC6B0\uAE30
                </button>
            </div>
        `;
        content.appendChild(div);
    }

    function updateProgressBar() {
        const total = Lessons.getLessonCount();
        const completed = completedLessons.size;
        const pct = (completed / total) * 100;
        document.getElementById('progressFill').style.width = pct + '%';
        document.getElementById('progressText').textContent = `${completed}/${total} \uC644\uB8CC`;
    }

    document.addEventListener('DOMContentLoaded', init);
    return { init };
})();
