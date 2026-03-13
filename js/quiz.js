const Quiz = (() => {
    let currentQuiz = [];
    let currentIndex = 0;
    let score = 0;
    let answered = false;
    let onCompleteCallback = null;

    function start(quizData, container, onComplete) {
        currentQuiz = quizData;
        currentIndex = 0;
        score = 0;
        onCompleteCallback = onComplete;
        renderQuestion(container);
    }

    function renderQuestion(container) {
        container.innerHTML = '';
        const quiz = document.createElement('div');
        quiz.className = 'quiz';
        const total = currentQuiz.length;
        const question = currentQuiz[currentIndex];

        const progress = document.createElement('div');
        progress.className = 'quiz__progress';
        progress.textContent = '\uBB38\uC81C ' + (currentIndex + 1) + ' / ' + total;
        quiz.appendChild(progress);

        const questionEl = document.createElement('h3');
        questionEl.className = 'quiz__question';
        questionEl.textContent = question.question;
        quiz.appendChild(questionEl);

        const optionsEl = document.createElement('div');
        optionsEl.className = 'quiz__options';

        question.options.forEach((optionText, index) => {
            const button = document.createElement('button');
            button.className = 'quiz-option';
            button.appendChild(document.createTextNode(optionText));
            button.addEventListener('click', () => {
                if (!answered) checkAnswer(index, container);
            });
            optionsEl.appendChild(button);
        });

        quiz.appendChild(optionsEl);
        container.appendChild(quiz);
        answered = false;
    }

    function checkAnswer(selectedIndex, container) {
        if (answered) return;
        answered = true;

        const question = currentQuiz[currentIndex];
        const optionButtons = container.querySelectorAll('.quiz-option');
        const correctIndex = question.correct;

        optionButtons[correctIndex].classList.add('quiz-option--correct');
        if (selectedIndex !== correctIndex) {
            optionButtons[selectedIndex].classList.add('quiz-option--wrong');
        } else {
            score++;
        }

        optionButtons.forEach((btn) => {
            btn.disabled = true;
            btn.classList.add('quiz-option--disabled');
        });

        const quizEl = container.querySelector('.quiz');
        const explanation = document.createElement('div');
        explanation.className = 'quiz__explanation';
        if (selectedIndex === correctIndex) {
            explanation.innerHTML = '\u2705 \uC815\uB2F5\uC785\uB2C8\uB2E4! ' + question.explanation;
        } else {
            explanation.innerHTML = '\u274C \uC624\uB2F5\uC785\uB2C8\uB2E4. ' + question.explanation;
        }
        quizEl.appendChild(explanation);

        const actions = document.createElement('div');
        actions.className = 'quiz__actions';
        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn btn--gold';

        if (currentIndex < currentQuiz.length - 1) {
            nextBtn.textContent = '\uB2E4\uC74C \uBB38\uC81C \u2192';
            nextBtn.addEventListener('click', () => { currentIndex++; renderQuestion(container); });
        } else {
            nextBtn.textContent = '\uACB0\uACFC \uBCF4\uAE30';
            nextBtn.addEventListener('click', () => { showResults(container); });
        }

        actions.appendChild(nextBtn);
        quizEl.appendChild(actions);
    }

    function showResults(container) {
        container.innerHTML = '';
        const total = currentQuiz.length;
        const percentage = (score / total) * 100;

        const result = document.createElement('div');
        result.className = 'quiz__result';

        const icon = document.createElement('div');
        icon.className = 'quiz__result-icon';
        if (percentage === 100) icon.textContent = '\uD83C\uDF89';
        else if (percentage >= 80) icon.textContent = '\uD83D\uDC4F';
        else if (percentage >= 60) icon.textContent = '\uD83D\uDCAA';
        else icon.textContent = '\uD83D\uDCDA';
        result.appendChild(icon);

        const scoreEl = document.createElement('div');
        scoreEl.className = 'quiz__result-score';
        scoreEl.textContent = score + ' / ' + total;
        result.appendChild(scoreEl);

        const resultText = document.createElement('div');
        resultText.className = 'quiz__result-label';
        if (percentage === 100) resultText.textContent = '\uC644\uBCBD\uD569\uB2C8\uB2E4!';
        else if (percentage >= 80) resultText.textContent = '\uC798\uD558\uC168\uC2B5\uB2C8\uB2E4!';
        else if (percentage >= 60) resultText.textContent = '\uC88B\uC740 \uC2DC\uC791\uC785\uB2C8\uB2E4!';
        else resultText.textContent = '\uB2E4\uC2DC \uD55C\uBC88 \uB3C4\uC804\uD574\uBCF4\uC138\uC694!';
        result.appendChild(resultText);

        const details = document.createElement('div');
        details.className = 'quiz__result-details';

        const correctStat = document.createElement('div');
        correctStat.className = 'quiz__result-stat';
        const correctValue = document.createElement('div');
        correctValue.className = 'quiz__result-stat-value quiz__result-stat-value--correct';
        correctValue.textContent = score;
        const correctLabel = document.createElement('div');
        correctLabel.className = 'quiz__result-stat-label';
        correctLabel.textContent = '\uC815\uB2F5';
        correctStat.appendChild(correctValue);
        correctStat.appendChild(correctLabel);

        const wrongStat = document.createElement('div');
        wrongStat.className = 'quiz__result-stat';
        const wrongValue = document.createElement('div');
        wrongValue.className = 'quiz__result-stat-value quiz__result-stat-value--wrong';
        wrongValue.textContent = total - score;
        const wrongLabel = document.createElement('div');
        wrongLabel.className = 'quiz__result-stat-label';
        wrongLabel.textContent = '\uC624\uB2F5';
        wrongStat.appendChild(wrongValue);
        wrongStat.appendChild(wrongLabel);

        details.appendChild(correctStat);
        details.appendChild(wrongStat);
        result.appendChild(details);

        if (percentage >= 60) {
            const celebration = document.createElement('div');
            celebration.className = 'celebration';
            const star = document.createElement('span');
            star.className = 'celebration__star';
            star.textContent = '\u2B50';
            celebration.appendChild(star);
            result.appendChild(celebration);

            const completeBtn = document.createElement('button');
            completeBtn.className = 'btn btn--gold';
            completeBtn.textContent = '\uB808\uC2A8 \uC644\uB8CC!';
            completeBtn.addEventListener('click', () => {
                if (onCompleteCallback) onCompleteCallback({ score, total: currentQuiz.length, passed: true });
            });
            result.appendChild(completeBtn);
        } else {
            const retryBtn = document.createElement('button');
            retryBtn.className = 'btn btn--outline';
            retryBtn.textContent = '\uB2E4\uC2DC \uB3C4\uC804\uD558\uAE30';
            retryBtn.addEventListener('click', () => { currentIndex = 0; score = 0; renderQuestion(container); });
            result.appendChild(retryBtn);

            const skipBtn = document.createElement('button');
            skipBtn.className = 'btn btn--gold btn--sm';
            skipBtn.textContent = '\uADF8\uB798\uB3C4 \uB118\uC5B4\uAC00\uAE30';
            skipBtn.style.marginTop = '12px';
            skipBtn.addEventListener('click', () => {
                if (onCompleteCallback) onCompleteCallback({ score, total: currentQuiz.length, passed: false });
            });
            result.appendChild(skipBtn);
        }

        container.appendChild(result);
    }

    function getScore() { return { score, total: currentQuiz.length }; }

    return { start, getScore };
})();
