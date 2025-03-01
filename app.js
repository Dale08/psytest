const {createApp, reactive, ref} = Vue;
// import questions from 'questions.js';

createApp({
    // data() {
    //     const questions = reactive(
    //         [
    //             {
    //                 "text": "Интеллектуальные признаки стресса",
    //                 "answers": [
    //                     {
    //                         "text": "Преобладание негативных мыслей",
    //                         "score": 1,
    //                         "checked": false
    //                     },
    //                     {
    //                         "text": "Трудность сосредоточения ",
    //                         "score": 1,
    //                         "checked": false
    //                     }
    //                 ],
    //                 order: 1
    //             },
    //             {
    //                 "text": "Поведенческие признаки стресса ",
    //                 "answers": [
    //                     {
    //                         "text": "Потеря аппетита или переедание",
    //                         "score": 1,
    //                         "checked": false
    //                     },
    //                     {
    //                         "text": "Возрастание ошибок при выполнении привычных действий",
    //                         "score": 1,
    //                         "checked": false
    //                     }
    //                 ],
    //                 order: 2
    //             },
    //             {
    //                 "text": "Эмоциональные симптомы ",
    //                 "answers": [
    //                     {
    //                         "text": "Беспокойство, повышенная тревожность ",
    //                         "score": 1,
    //                         "checked": false
    //                     },
    //                     {
    //                         "text": "Подозрительность",
    //                         "score": 1,
    //                         "checked": false
    //                     }
    //                 ],
    //                 order: 3
    //             }
    //         ]
    //     );
    //     return {
    //         questions
    //     }
    // },
    setup() {
        const resultTexts = [
            '0-5.  означает, что в данный момент жизни сколь-либо значимый стресс отсутствует.',
            '6-12. означает, что человек испытывает умеренный стресс, который может быть компенсирован с помощью рационального использования времени, периодического отдыха и нахождения оптимального выхода из сложившейся ситуации.',
            '13-24. указывает на достаточно выраженное напряжение эмоциональных и физиологических систем организма, возникшее в ответ на сильный стрессорный фактор, который не удалось компенсировать. В этом случае требуется применение специальных методов преодоления стресса.'
        ];
        let result = 0;
        let resultText = ref('');
        let isFirstQuestion = ref(true);
        let isLastQuestion = ref(false);
        let questionNumber = ref(1);
        let showResult = ref(0);
        const questions = reactive(
            [
                {
                    "text": "Интеллектуальные признаки стресса",
                    "answers": [
                        {
                            "text": "Преобладание негативных мыслей",
                            "score": 1,
                            "checked": false
                        },
                        {
                            "text": "Трудность сосредоточения ",
                            "score": 1,
                            "checked": false
                        }
                    ],
                    order: 1
                },
                {
                    "text": "Поведенческие признаки стресса ",
                    "answers": [
                        {
                            "text": "Потеря аппетита или переедание",
                            "score": 10,
                            "checked": false
                        },
                        {
                            "text": "Возрастание ошибок при выполнении привычных действий",
                            "score": 10,
                            "checked": false
                        }
                    ],
                    order: 2
                },
                {
                    "text": "Эмоциональные симптомы ",
                    "answers": [
                        {
                            "text": "Беспокойство, повышенная тревожность ",
                            "score": 20,
                            "checked": false
                        },
                        {
                            "text": "Подозрительность",
                            "score": 20,
                            "checked": false
                        }
                    ],
                    order: 3
                }
            ]
        );
        let tg = window.Telegram.WebApp;
        tg.expand();

        return {
            questions,
            isFirstQuestion,
            isLastQuestion,
            resultTexts,
            result,
            resultText,
            showResult,
            questionNumber,
            tg
        }
    },
    methods: {
        getResult() {
            // this.isLastQuestion = this.isFirstQuestion = true;
            switch (true) {
                case (0 <= this.result && this.result <= 5):
                    this.resultText = this.resultTexts[0];
                    break;
                case (6 <= this.result && this.result <= 12):
                    this.resultText = this.resultTexts[1];
                    break;
                case (13 <= this.result && this.result <= 24):
                    this.resultText = this.resultTexts[2];
                    break;
            }
            this.showResult = true;
        },
        setAnswer(answer) {
            answer.checked = !answer.checked;
            if (answer.checked) {
                this.result += answer.score
            } else {
                this.result -= answer.score
            }
        },
        goPrev() {
            this.showResult = this.isLastQuestion = false;
            if (this.questionNumber > 1) {
                this.questionNumber--;
            }
            this.isFirstQuestion = this.questionNumber <= 1;
        },
        goNext() {
            this.showResult = this.isFirstQuestion = false;
            if (this.questionNumber < this.questions.length) {
                this.questionNumber++;
            }
            this.isLastQuestion = this.questionNumber >= this.questions.length;
        },
    }
}).mount('#app');

// tg.MainButton.textColor = '#FFFFFF';
// tg.MainButton.color = '#2cab37';


// let usercard = document.getElementById('questions');
// console.log(usercard);
// console.log(questions);
// questions.forEach((question) => {
//     let li = document.createElement('li');
//     li.innerText = question.question;
//     console.log(question);
//     question.answers.forEach((answer) => {
//         // <input id = "termsCheck" type="checkbox" name="terms" />
//         // <label for="scales">Scales</label>
//         let div = document.createElement('div');
//         let input = document.createElement('input');
//         let label = document.createElement('label');
//         // input.setAttribute('class', 'answer'+answer.value);
//         input.setAttribute('class', 'answer');
//         input.setAttribute('type', 'checkbox');
//         input.setAttribute('value', 'answer'+answer.value);
//         // label = document.createElement('label');
//         // label.setAttribute('for', 'answer'+answer.value);
//         label.innerText = answer.text;
//         label.appendChild(input);
//         div.appendChild(label);
//         li.appendChild(div);
//     });
//     usercard.appendChild(li);
// });
//
// document.getElementById('result').addEventListener("click", function(){
//     document.querySelectorAll('input.answer:checked').forEach((answer) => {
//         console.log(answer);
//     });
// });

// p.innerText = `${tg.initDataUnsafe.user.first_name}
// ${tg.initDataUnsafe.user.last_name}`;
//
// usercard.appendChild(p);