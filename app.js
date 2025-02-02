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
        let result = 0;
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
                            "score": 1,
                            "checked": false
                        },
                        {
                            "text": "Возрастание ошибок при выполнении привычных действий",
                            "score": 1,
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
                            "score": 1,
                            "checked": false
                        },
                        {
                            "text": "Подозрительность",
                            "score": 1,
                            "checked": false
                        }
                    ],
                    order: 3
                }
            ]
        );
        return {
            questions,
            result,
            showResult,
            questionNumber
        }
    },
    methods: {
        getResult() {
            // let res = 0;
            // this.questions.forEach((answer) => {
            //     question.answer.forEach((answer) => {
            //
            //     });
            // });
            this.showResult = 1;
            console.log(this.result)
        },
        setAnswer(answer) {
            answer.checked = !answer.checked;
            if (answer.checked) {
                this.result += answer.score
            } else {
                this.result -= answer.score
            }
            // let res = 0;
            // this.questions.forEach((answer) => {
            //     question.answer.forEach((answer) => {
            //
            //     });
            // });
            console.log(this.result)
        },
        goPrev() {
            console.log(this.questionNumber);
            if (this.questionNumber !== 1) {
                this.questionNumber--;
            }
            console.log(this.questionNumber)
        },
        goNext() {
            console.log(this.questions.length);
            if (this.questionNumber !== this.questions.length) {
                this.questionNumber++;
            }
            console.log(this.questionNumber)
        }
    }
}).mount('#app');

let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';


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