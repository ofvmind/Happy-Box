const testBoard = document.querySelector('.test-board');

function drop() {
    const audio = new Audio();
    audio.src = '../src/sounds/bull.mp3';
    audio.autoplay = true;
};

const questions = [
    {q: 'Ви впевненні в своїх рішеннях?', type: true},
    {q: 'Ви красивий?', type: true},
    {q: 'Ви би хотіли повернути минуле?', type: false},
    {q: 'Ви сором`язливий при дівчинах?', type: false},
    {q: 'Ви боїтесь публіки?', type: false},
    {q: 'Ви займайтесь спортом?', type: true},
    {q: 'Ми самі винуваті у своїх проблемах?', type: true},
    {q: 'Ви освідчувались в коханні?', type: true},
];

const HTML = questions.map((el, index) => {
    if (el.type) return `
    <div class="anime">
    <p id="type${index + 1}" style="display: none">true</p> 
    <h1 class="ask">${el.q}</h1>
    <div class="space-button">
        <h3 id="yesButton${index + 1}" class="button">Так</h3>
        <h3 id="noButton${index + 1}" class="button">Ні</h3>
    </div>
    <div class="space-button">
        <h2 id="go${index + 1}" class="button">Далі</h2>
    </div>
    </div>
    `
    else return `
    <div class="anime" id="false${index + 1}">
    <p id="type${index + 1}" style="display: none">false</p> 
    <h1 class="ask">${el.q}</h1>
    <div class="space-button">
        <h3 id="yesButton${index + 1}" class="button">Так</h3>
        <h3 id="noButton${index + 1}" class="button">Ні</h3>
    </div>
    <div class="space-button">
        <h2 id="go${index + 1}" class="button">Далі</h2>
    </div>
    </div>
    `
});

let counter = 0;

function result() {
    if (counter < 3) return 'Будь-те впевненіше';
    else if (counter > 3 && counter < 7) return 'Більше позитиву в думках';
    else if (counter > 7) return 'Ви сильна духом людина';
};

function colorChange(yesButton, noButton) {
    yesButton.onclick = () => {
        if (noButton.style.background == 'red') {
            drop();
            yesButton.style.background = 'red';
            noButton.style.background = 'transparent';
        } else {
            drop();
            yesButton.style.background = 'red';
        } 
    }
    noButton.onclick = () => {
        if (yesButton.style.background == 'red') {
            drop();
            noButton.style.background = 'red';
            yesButton.style.background = 'transparent';
    } else {
        drop();
        noButton.style.background = 'red';
    }
    }
}

function asking(yesButton, noButton, q1 ,q2, type) {
    if (yesButton.style.background == 'red' || noButton.style.background == 'red') {
        if (type.textContent == 'true') {
            drop();
            if (yesButton.style.background == 'red') counter+=1;
            q1.replaceWith(q2);
            colorChange(yesButton, noButton);
        }  else {
            drop();
            if (noButton.style.background == 'red') counter+=1;
            q1.replaceWith(q2);
            colorChange(yesButton, noButton);
        }
    }
};

const resultTest = document.createElement('div');
resultTest.classList.add('result');

start.addEventListener('click', e => {

    drop();

    start.remove();

    main.style.margin = '200px auto auto auto'; 

    const q1 = document.createElement('div');
    q1.innerHTML = HTML[0];

    const q2 = document.createElement('div');
    q2.innerHTML = HTML[1];

    const q3 = document.createElement('div');
    q3.innerHTML = HTML[2];

    const q4 = document.createElement('div');
    q4.innerHTML = HTML[3];

    const q5 = document.createElement('div');
    q5.innerHTML = HTML[4];

    const q6 = document.createElement('div');
    q6.innerHTML = HTML[5];

    const q7 = document.createElement('div');
    q7.innerHTML = HTML[6];

    const q8 = document.createElement('div');
    q8.innerHTML = HTML[7];

    testBoard.appendChild(q1);

    colorChange(yesButton1, noButton1)

    go1.onclick = () => {
        asking(yesButton1, noButton1, q1 ,q2 ,type1)
        colorChange(yesButton2, noButton2)
        go2.onclick = () => {
            asking(yesButton2, noButton2, q2 ,q3 ,type2)
            colorChange(yesButton3, noButton3)
            go3.onclick = () => {
                asking(yesButton3, noButton3, q3 ,q4 ,type3)
                colorChange(yesButton4, noButton4)
                go4.onclick = () => {
                    asking(yesButton4, noButton4, q4 ,q5 ,type4)
                    colorChange(yesButton5, noButton5)
                    go5.onclick = () => {
                        asking(yesButton5, noButton5, q5 ,q6 ,type5)
                        colorChange(yesButton6, noButton6)
                        go6.onclick = () => {
                            asking(yesButton6, noButton6, q6 ,q7 ,type6)
                            colorChange(yesButton7, noButton7)
                            go7.onclick = () => {
                                asking(yesButton7, noButton7, q7 ,q8 ,type7)
                                colorChange(yesButton8, noButton8)
                                go8.onclick = () => {
                                    if (yesButton8.style.background == 'red' || noButton8.style.background == 'red') {
                                        if (yesButton8.style.background == 'red') counter+=1;
                                        resultTest.textContent = result();
                                        q8.replaceWith(resultTest);
                                        console.log(counter);
                                    };
                                }
                            };
                        }
                    }
                };
            }
        };
    }
});