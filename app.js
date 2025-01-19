let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';


let usercard = document.getElementById('questions');
console.log(usercard);
console.log(questions);
questions.forEach((question) => {
    let li = document.createElement('li');
    li.innerText = question.question;
    console.log(question);
    question.answers.forEach((answer) => {
        // <input id = "termsCheck" type="checkbox" name="terms" />
        // <label for="scales">Scales</label>
        let div = document.createElement('div');
        let input = document.createElement('input');
        let label = document.createElement('label');
        input.setAttribute('classd', 'answer'+answer.value);
        input.setAttribute('classd', 'answer');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('value', 'answer'+answer.value);
        // label = document.createElement('label');
        // label.setAttribute('for', 'answer'+answer.value);
        label.innerText = answer.text;
        label.appendChild(input);
        div.appendChild(label);
        li.appendChild(div);
    });
    usercard.appendChild(li);
});

// p.innerText = `${tg.initDataUnsafe.user.first_name}
// ${tg.initDataUnsafe.user.last_name}`;
//
// usercard.appendChild(p);