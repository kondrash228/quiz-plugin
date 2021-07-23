"use strict";


const DATA1 = [
    {
        question: "Вопрос 1",
        answers: [
            {
                id: '1',
                value: 'ответ 1',
                correct: true
            },
            {
                id: '2',
                value: 'ответ 2',
                correct: false
            },
            {
                id: '3',
                value: 'ответ 3',
                correct: false
            }
        ]
    },
    {
        question: "Вопрос 2",
        answers: [
            {
                id: '4',
                value: 'ответ 4',
                correct: false
            },
            {
                id: '5',
                value: 'ответ 5',
                correct: true
            },
            {
                id: '6',
                value: 'ответ 6',
                correct: false
            }
        ]
    },
    {
        question: "Вопрос 3",
        answers: [
            {
                id: '7',
                value: 'ответ 7',
                correct: false
            },
            {
                id: '8',
                value: 'ответ 8',
                correct: true
            },
            {
                id: '9',
                value: 'ответ 9',
                correct: false
            }
        ]
    }
];

new QuizPlugin({
    data: DATA1,
    parentSelector: document.getElementById('quiz-1')
})
