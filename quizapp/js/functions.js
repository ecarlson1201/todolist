'use strict';

// counter that tracks current question and correct answer count, adds to question and correct answer count, and resets count
const counter = (function () {
    let counterModule = {};
    let currentQuestion = 0;
    let currentCorrect = 0

    counterModule.nextQuestion = function () {
        return currentQuestion++
    };

    counterModule.addCorrect = function () {
        return currentCorrect++
    };

    counterModule.currentQuestion = function () {
        return currentQuestion
    };

    counterModule.currentCorrect = function () {
        return currentCorrect
    };

    counterModule.reset = function () {
        currentQuestion = 0;
        currentCorrect = 0;
    };

    return counterModule
})();

// displays the current question number out of ten
const displayQuestionNumber = function () {
    $('header').text(`Question ${counter.currentQuestion()} of 10 (${counter.currentCorrect()} correct)`)
};

// retrieves index of question in data based on current question count
const getCurrentIndex = function () {
    let questionIndex = counter.currentQuestion() - 1;
    return questionIndex;
};

// clears text of h2 and li's that display question and answers
const clearQuestion = function () {
    $('h2').text('')
    $('input').val('').after('');
};

// displays question and answers of current question
const generateQuestion = function () {
    clearQuestion()
    displayQuestionNumber()
    let current = questionsList[getCurrentIndex()]

    $('.js-question').text(current.question);

    $('input').each(function (index) {
        $(this).val(current.options[index])
    });

    $('label').each(function (index) {
        $(this).text(current.options[index])
    });
};

// removes all js.checked classes from inputs
const resetChecked = function () {
    $('input').removeClass('js-checked')

}

// removes 'js.checked' class from all inputs and adds it to the last clicked input
const currentClickedAnswer = function () {
    $('input').click(function (event) {
        event.preventDefault()
        resetChecked()
        $(this).addClass('js-checked')
    })
}

// toggles hidden class
const resetStyleDisplay = function () {
    $('.js-quiz').toggleClass('hidden')
}

// calls a different function whether or not the correct answer was submitted
const submitAnswer = function () {
    $('button').click(function (event) {
        event.preventDefault()
        let currentCorrect = questionsList[getCurrentIndex()]
        let currentSelected = $('.js-checked').val()
        if (currentCorrect.answer === currentSelected) {
            $('.js-result').text('correct')
            resetStyleDisplay()
            counter.addCorrect()
            resetChecked()
        }
        else {
            $('.js-result').text('incorrect')
            resetStyleDisplay()
            resetChecked()
        }
    })
}

const restartQuiz = function () {
    renderDom()
}

const nextQuestion = function () {
    $('.js-proceed').text('Begin Question')
    $('.js-proceed').click(function (event) {
        event.preventDefault()
        counter.nextQuestion()
        generateQuestion()
    })
}
nextQuestion()

const proceedQuiz = function () {
    if (counter.currentQuestion() > questionsList.length) {
        $('.js-proceed').text('Restart Quiz')
        restartQuiz()
    }
    else {
        $('.js-proceed').text('Begin Quiz')
    }
}
