const testBoard = document.querySelector('.test-board');
const start = document.querySelector('#start');

let counter = 0;

const stopTest = document.createElement('div');
stopTest.innerHTML =  `
<button class="stop-test">&times;</button>
`;
stopTest.classList.add('center-button');
stopTest.onclick = () => {
    counter = 0;
    stopTest.style.color = 'darkcyan';
    drop();
    stopTest.classList.add('close-background');
    document.querySelector('.anime').style.setProperty('--anim', 'close 500ms');
    questionNumber.style.animation = 'close 500ms';
    backSound.src = '';
    closeTest();
    setTimeout(() => {
        document.querySelector('.navbar').classList.remove('dissap');
        document.querySelector('.navbar').style.visibility = "visible";
        document.querySelector('.navbar').classList.add('appeap');
    });
    setTimeout(() =>  document.querySelector('.navbar').classList.remove('appeap') ,990);
    setTimeout(() => {
        stopTest.style.color = '#fff';
        questionNumber.style.animation = 'in 800ms';
        stopTest.classList.remove('close-background');
        stopTest.remove();
        document.querySelector('.anime').replaceWith(start);
        main.style.margin = '300px auto auto auto';
        questionNumber.remove();
    }, 490);
};

const testBackground = document.createElement('div');
testBackground.classList.add('test-background');
function closeTest() {
    testBackground.classList.add('close-background');
    setTimeout(() => {
        testBackground.classList.remove('close-background');
        testBackground.remove();
    }, 340);
};

const reset = document.createElement('h3');
reset.classList.add('space-button');
reset.classList.add('reset');
reset.textContent = 'Заново';
reset.addEventListener('mouseover', e => reset.style.background = 'darkcyan');
reset.addEventListener('mouseout', e => reset.style.background = 'transparent');
reset.onclick = () => {
    drop();
    resultTest.replaceWith(start);
    closeTest();
    main.style.margin = '300px auto auto auto';
    document.querySelector('.navbar').classList.remove('dissap');
    document.querySelector('.navbar').style.visibility = "visible";
    document.querySelector('.navbar').classList.add('appeap');
    setTimeout(() =>  document.querySelector('.navbar').classList.remove('appeap') ,990);
    backSound.src = '';
}

function drop() {
    const audio = new Audio();
    audio.src = './src/sounds/bull.mp3';
    audio.autoplay = true;
};

const questions = [
    {q: 'Ви впевненні в своїх рішеннях?', type: true},
    {q: 'Ви вважаєте себе красивою/красивим?', type: true},
    {q: 'Ви би хотіли повернути минуле?', type: false},
    {q: 'Ви соромитесь при дівчинах/хлопцях?', type: false},
    {q: 'Ви боїтесь публіки?', type: false},
    {q: 'Ви займайтесь спортом?', type: true},
    {q: 'Ми самі винні у своїх проблемах?', type: true},
    {q: 'Ви освідчувались в коханні?', type: true},
    {q: 'Ви би стрибнули з парашутом?', type: true},
    {q: 'Ви звинувачуйте інших в своїх невдачах?', type: false},
    {q: 'Ви часто вихваляйтесь?', type: false},
    {q: 'Життя несправедливе?', type: false},
    {q: 'Ви добра людина?', type: true},
    {q: 'Ви злопамятний?', type: false},
    {q: 'Ви любите життя?', type: true},
    {q: 'Ви важко переносите образи/невдачі?', type: false},
    {q: 'Ви слідкуєте за собою?', type: true},
    {q: 'Ви товариська людина?', type: true},
    {q: 'Часто заздрите іншим?', type: false},
    {q: 'Ви вмієте сказати собі ні?', type: true},
    {q: 'Треба вміти вибачати?', type: true},
    {q: 'Ви молодець?', type: true},
    {q: 'У вас э люди, яким можете відкритись?', type: true},
    {q: 'Ваше почуття гумору на висоті?', type: true},
    {q: 'Все в твоїх руках?', type: true},
    {q: 'У вас є відчуття стилю?', type: true},
    {q: 'Ви залежні від думок інших людей?', type: false},
    {q: 'Вихід є завжди?', type: true},
    {q: 'Ви вмієте тримати себе в руках?', type: true},
    {q: 'Порядок вдома, порядок в голові?', type: true},
    {q: 'У вас часто з`являються негативні думкаи?', type: false},
    {q: 'Ви вмієте релаксувати?', type: true},
    {q: 'Дуже боїтесь невдач/програшу?', type: false},
    {q: 'Всі чоловіки/жінки погані?', type: false},
    {q: 'Ви часто кажете слова ненависті?', type: false},
    {q: 'Добро є?', type: false},
];

const questionNumber = document.createElement('div');
questionNumber.classList.add('question-number');

const resultTest = document.createElement('div');
resultTest.classList.add('total');
resultTest.innerHTML = `
<div id="inner">
    <h1 class="ask" style="border-bottom: 1px solid #fff;">Ваш результат:</h1>
    <h2 class="ask"></h2>
</div>
`;

function app() {
    const HTML = questions.sort(() => Math.random() - 0.50).map((el, index) => {
        if (el.type) {
            const question = document.createElement('div');
            question.classList.add('anime');
            question.innerHTML = `
            <p id="type" style="display: none">true</p> 
            <h1 class="ask">${el.q}</h1>
            <div class="center-button">
                <h3 id="yesButton${index + 1}" class="button">Так</h3>
                <h3 id="noButton${index + 1}" class="button">Ні</h3>
            </div>
            `;
            return question;
        }
        else {
            const question = document.createElement('div');
            question.classList.add('anime');
            question.innerHTML = `
            <p id="type" style="display: none">false</p> 
            <h1 class="ask">${el.q}</h1>
            <div class="center-button">
                <h3 id="yesButton" class="button">Так</h3>
                <h3 id="noButton" class="button">Ні</h3>
            </div>
            `;
            return question;
        } 
    }).slice(0, 25);

    HTML.forEach((node, index) => {
        const btns = node.querySelectorAll('.button')
        btns.forEach(btn => {
        btn.addEventListener('mouseover', e => btn.style.background = 'darkcyan');
        btn.addEventListener('mouseout', e => btn.style.background = 'transparent');   
         btn.addEventListener('click', e => {
             questionNumber.innerHTML = `Питання ${index + 2} з 25`;
             drop();
             if (type.textContent == 'true' && btn.innerHTML == 'Так') {
                 counter+=1
             } else if (type.textContent == 'false' && btn.innerHTML == 'Ні') {
                 counter+=1;
             }; 
             if (index !== HTML.length -1) {
                setTimeout(() => {
                    node.replaceWith(HTML[index + 1]);
                }, 50);
             }
             
             if (index == HTML.length -1) {
                 setTimeout(() => {
                     questionNumber.remove();
                     stopTest.remove();
                     resultTest.querySelector('h2').textContent = result();
                     main.style.margin = '200px auto auto auto';
                     node.replaceWith(resultTest)
                     resultTest.querySelector('#inner').appendChild(reset);
                     counter = 0;
                 }, 50);
             };
             btn.style.background = 'darkcyan';
             setTimeout(() => {
                 btn.style.background = 'transparent';
             }, 50);
         }, {once: true});
        })
     })
    start.replaceWith(HTML[0]);
};

function result() {
    if (counter <= 8) return 'Не приймайте все, так близько до серця';
    else if (counter > 8 && counter < 14) return 'Не приймайте все, так близько до серця';
    else if (counter >=14 && counter < 18) return ' Більше позитиву в думках))';
    else if (counter >= 18 && counter < 23) return 'Непогано, гарний потенціал';
    else if (counter >= 23) return 'Ви впевнена у собі людина';
};

start.addEventListener('mouseover', e => start.style.background = 'darkcyan');
start.addEventListener('mouseout', e => start.style.background = 'rgba(82, 2, 49, 0.8)');

start.onclick = () => {
    drop();
    app();
    start.style.background = 'darkcyan';
    setTimeout(() => {
        start.style.background = 'rgba(82, 2, 49, 0.8)';
        document.body.append(stopTest);
        testBoard.appendChild(testBackground);
        document.querySelector('.navbar').classList.add('dissap');
        setTimeout(() => {
            document.querySelector('.navbar').style.visibility = "hidden";
        },990)
        backSound.src = '../src/sounds/test.mp3';
        document.body.prepend(questionNumber);
        questionNumber.innerHTML = `Питання 1 з 25`;
        main.style.margin = '180px auto auto auto';
    } , 50);
   
};



