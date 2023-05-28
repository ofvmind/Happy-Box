const options = document.querySelectorAll('.option');
const div = document.querySelector('#select')
const love = options[0];
love.style.background = 'indianred';
const yesNo = options[1];
yesNo.style.background = 'blueviolet';
div.appendChild(options[0]);
div.appendChild(options[1]);

options.forEach((el, index) => {
    el.addEventListener('mouseover', e => el.style.background = 'darkcyan');
    if (index == 0) el.addEventListener('mouseout', e => el.style.background = 'indianred');
    if (index == 1) el.addEventListener('mouseout', e => el.style.background = 'blueviolet');
});

const appSound = document.createElement('audio');
document.body.append(appSound);


function enableSound(sound, src) {
    sound.src = src;
    sound.autoplay = true;
};

const girlScream = document.createElement('audio');
document.body.append(girlScream);


function offAudio(sound) {
    sound.src = '';
};

function clickSound() {
    const audio = new Audio();
    audio.src = './src/sounds/send.mp3';
    audio.autoplay = true;
};

const reset = document.createElement('h2');
reset.innerHTML = '&times;';
reset.classList.add('reset');

function loving() {
   const random = Math.floor(Math.random() * 10);
   if (random === 0) return 'Не кохає';
   if (random === 1) return 'Ревнує';
   if (random === 2) return 'Сумнівається';
   if (random === 3) return 'Сумує без тебе';
   if (random === 4) return 'Ображається';
   if (random === 5) return 'Сумнівається';
   if (random === 6) return 'Зла на тебе';
   if (random === 7) return 'Чекає дзвінка';
   if (random === 8) return 'Кохає';
   if (random === 9) return 'Сподобався';
};

function yesOrNo() {
    return Math.random() > 0.50 ? 'Так' : 'Ні';
}

love.onclick = () => {
    clickSound()

    select.remove();
    
    const heart = document.createElement('div');
    heart.classList.add('space2');
    const innerHeart = document.createElement('div');
    innerHeart.classList.add('lds-heart');
    const innerDiv = document.createElement('div');
    innerHeart.append(innerDiv)
    heart.append(innerHeart);
    
    const buffer = document.createElement('div');
    buffer.classList.add('buffer');
    const loveApp = document.createElement('div');
    loveApp.appendChild(buffer);
    loveApp.classList.add('app');
    loveApp.classList.add('love-background');
    loveApp.classList.add('love-padding');
    const answer = document.createElement('h2');
    answer.textContent = '?';
    answer.classList.add('answer');
    buffer.appendChild(answer); 
    const question = document.createElement('h3');
    question.textContent = 'Гадати';
    question.classList.add('question');
    buffer.appendChild(question);
    conteiner.appendChild(loveApp);
    buffer.append(reset);

    question.onclick = () => {
        if (answer.textContent === '?') {
            reset.style.visibility = 'hidden'
            girlScream.volume = 1;
            clickSound();
            setTimeout(() => enableSound(appSound, './src/sounds/heart.mp3'), 500);
            loveApp.classList.add('heart-way');
            question.replaceWith(heart);
            question.textContent = 'Спробувати ще';
            setTimeout(() => {
                loveApp.classList.remove('heart-way');
                enableSound(girlScream, './src/sounds/girl.mp3');
                heart.replaceWith(question);
                answer.textContent = loving();
                reset.style.visibility = 'visible'
            }, 6400); 
        } else {
            clickSound();
            reset.style.visibility = 'visible'
            answer.textContent = '?';
            question.textContent = 'Гадати';
        }
    }

    reset.onclick = () => {
        offAudio(appSound);
        girlScream.volume = 0;
        love.style.background = 'indianred';
        clickSound()
        loveApp.classList.add('love-exit');
        setTimeout(() => {
            loveApp.remove();
            loveApp.classList.remove('love-exit');
            conteiner.appendChild(div);
        } ,590);
        
    }
};

yesNo.onclick = () => {
    clickSound();

    select.remove();
    
    const space = document.createElement('div');
    space.classList.add('space');
    const circle = document.createElement('div');
    circle.classList.add('lds-circle');
    const innerCirle = document.createElement('div');
    circle.append(innerCirle);
    space.append(circle);

    const buffer = document.createElement('div');
    buffer.classList.add('buffer');
    const randomApp = document.createElement('div');
    randomApp.appendChild(buffer);
    randomApp.classList.add('app');
    randomApp.classList.add('randomApp-background');
    const answer = document.createElement('h1');
    answer.textContent = 'Так чи ні?';
    answer.classList.add('mark');
    buffer.appendChild(answer); 
    conteiner.appendChild(randomApp);
    buffer.append(reset);

    answer.onclick = () => {
        clickSound();
        if (answer.textContent === 'Так чи ні?') {
            setTimeout(() =>enableSound(appSound, './src/sounds/coin.mp3'), 150)
            reset.style.visibility = 'hidden';
            answer.replaceWith(space);
            setTimeout(() => {
                reset.style.visibility = 'visible';
                answer.textContent = yesOrNo();
                space.replaceWith(answer);
            }, 4900);
        } else {
            reset.style.visibility = 'visible';
            answer.remove();
            buffer.prepend(answer);
            answer.textContent = 'Так чи ні?';
        }; 
    };
    
    reset.onclick = () => {
        offAudio(appSound);
        yesNo.style.background = 'blueviolet';
        clickSound()
        randomApp.classList.add('app-exit');
        setTimeout(() => {
            randomApp.remove();
            randomApp.classList.remove('app-exit');
            conteiner.appendChild(div);
        } ,200);
        
    }
};