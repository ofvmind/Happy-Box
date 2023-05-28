class Message {
    constructor(user, text) {
        this.user = user;
        this.text = text;
        this.time = new Date().toLocaleString();
    }
    render() {
        return `
        <h5 class="userName">${this.user}</h5>
        <div class="change">
            <h4 class="textMessage">${this.text}</h4>
        </div>
        <p class="time">${this.time}</p>
        `;
    }
};

const frm = document.forms[0];
const chatContent = document.querySelector('.chat');
const btn = document.querySelector('.btn');

let messages = [];

function emptyMessage() {
    const chatting = document.createElement('h1');
    chatting.textContent = 'Почніть спілкування';
    chatting.classList.add('chatting');
    chatContent.appendChild(chatting);
};

emptyMessage();

function emptyField() {
    const audio = new Audio();
    audio.src = './src/sounds/empty.mp3';
    audio.autoplay = true;
};

function sendSound() {
    const audio = new Audio();
    audio.src = './src/sounds/send.mp3';
    audio.autoplay = true;
};

function deleteSound() {
    const audio = new Audio();
    audio.src = './src/sounds/delete.mp3';
    audio.autoplay = true;
};

function keySound() {
    const audio = new Audio();
    audio.src = './src/sounds/keydown.mp3';
    audio.autoplay = true;
}

frm.user.addEventListener('keydown', keySound);
frm.text.addEventListener('keydown', keySound);

frm.addEventListener('submit', e => {
    e.preventDefault();

    if (frm.user.value && frm.text.value) {
        sendSound();
        if (document.querySelector('.chatting')) document.querySelector('.chatting').remove();
        const message = new Message(frm.user.value, frm.text.value);
        const content = document.createElement('div');
        content.tabIndex = 9;
        content.classList.add('message');
        content.innerHTML = message.render();
        const loadDiv = document.createElement('div');
        loadDiv.classList.add('loadDiv');
        const loader = document.createElement('div');
        loader.classList.add('load-ring');
        loadDiv.append(loader);
        chatContent.prepend(loadDiv);

        setTimeout(() => {
            loadDiv.remove();
            chatContent.prepend(content);
        }, 500);
       
        messages.push(message);

        content.addEventListener('contextmenu', e => {
            e.preventDefault();
            const deleteBtn = document.createElement('btn');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.innerHTML = '&times;';
            content.append(deleteBtn);
            deleteBtn.onclick = () => {
                const warningWindow = document.createElement('div');
                warningWindow.classList.add('delete-window');
                warningWindow.innerHTML = `
                <div class="delete-window-content">
                  <button class="window-btn">Так</button>
                  <button class="window-btn">Ні</button>
                </div>
                `;
                chatContent.append(warningWindow);
                const yesDelete = document.querySelector('.window-btn')
                yesDelete.onclick = () => {
                    warningWindow.remove();
                    content.classList.add('message-delete')

                    deleteSound();
                    setTimeout(() =>  content.remove(), 400)
                   
                    delete message.time;
                    messages = messages.filter(message => message.time);
                    if (!messages.length) setTimeout(() => emptyMessage(), 400);
                }

                const noDelete = document.querySelectorAll('.window-btn')[1].onclick = () => {
                    warningWindow.classList.add('delete-window-close');
                    setTimeout(() => {
                        warningWindow.classList.remove('delete-window-close');
                        warningWindow.remove();
                    }, 190)
                }

            };
            content.addEventListener('focusout', e => {
                deleteBtn.remove();
            });
        });

        content.querySelector('.change').addEventListener('dblclick', e => {
            const input = document.createElement('input');
            input.value = message.text;
            input.classList.add('change');
            content.querySelector('h4').replaceWith(input);
            input.focus();
            input.addEventListener('focusout', e => {
                const newText = document.createElement('h4');
                newText.textContent = input.value;
                newText.classList.add('textMessage');
                input.replaceWith(newText);
                message.text = newText.textContent;
            })
        });
        frm.send.classList.add('hide-btn');
        setTimeout(() => {
            frm.send.style.display = 'none';
            frm.send.classList.remove('hide-btn');
        }, 140);
        frm.user.value = '';
        frm.text.value = '';
    }
});

frm.oninput = () => {
    if (frm.user.value || frm.text.value ) {
        frm.send.style.display = 'block';
    } else if (!frm.user.value || !frm.text.value) {
        frm.send.classList.add('hide-btn');
        setTimeout(() => {
            frm.send.classList.remove('hide-btn');
            frm.send.style.display = 'none';
        }, 140);
    };
    
};

btn.onclick = () => {
    if (!frm.user.value || !frm.text.value) {
        emptyField();
        if (!frm.user.value) {
            frm.user.classList.add('empty');
            setTimeout(() => {
                frm.user.classList.remove('empty');
            }, 400)
        }; 
        if (!frm.text.value) {
            frm.text.classList.add('empty');
            setTimeout(() => {//
                frm.text.classList.remove('empty');
            }, 400)//
        };
    };
};





