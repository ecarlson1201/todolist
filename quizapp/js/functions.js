'use strict';
// displays the current question number out of total questions and total number correct
const displayQuestionNumber = function () {
    HEADER.text(`Question ${counter.currentQuestion()} of ${questionsList.length} (${counter.currentCorrect()} correct)`);
    if (counter.currentQuestion() > questionsList.length){
        HEADER.text(`Question ${questionsList.length} of ${questionsList.length} (${counter.currentCorrect()} correct)`);
    };
};

// displays question and answers of current question
const generateQuestion = function () {
    QUESTION.text('')
    INPUT.val('');
    displayQuestionNumber();
    let current = questionsList[counter.currentQuestion() - 1];

    QUESTION.text(current.question);

    INPUT.each(function (index) {
        $(this).val(current.options[index]);
    });

    $('label').each(function (index) {
        $(this).text(current.options[index]);
    });
};

// removes 'js.checked' class from all inputs and adds it to the last clicked input
(function () {
    INPUT.click(function (event) {
        event.preventDefault();
        INPUT.removeClass('js-checked');
        $(this).addClass('js-checked');
    });
})();

// displays results of submitted answer
const handleSubmitAnswer = function () {
    $('.js-submit').click(function (event) {
        event.preventDefault();
        if (questionsList[counter.currentQuestion() - 1].answer === $('.js-checked').val()) {
            RESULT.text('correct');
            counter.addCorrect();
        }
        else {
            RESULT.text('incorrect')
        };
        QUIZ.toggleClass('hidden')
        INPUT.removeClass('js-checked');
    });
};

const handleNextQuestion = function () {
    NEXT.click(function (event) {
        event.preventDefault();
        counter.nextQuestion();
        displayNavButtons();
        generateQuestion();
        QUIZ.toggleClass('hidden')
    });
};

const handleRestartQuiz = function () {
    RESTART.click(function (event) {
        event.preventDefault();
        counter.reset();
        displayNavButtons();
    });
};

const displayNavButtons = function () {
    if (counter.currentQuestion() > questionsList.length) {
        RESTART.removeClass('hidden')
        NEXT.addClass('hidden')
    }
    if (counter.currentQuestion() <= questionsList.length) {
        RESTART.addClass('hidden')
        NEXT.removeClass('hidden')
        NEXT.text('Next Question')
    }
    if (counter.currentQuestion() === 0) {
        NEXT.text('Start Quiz')
    }
};