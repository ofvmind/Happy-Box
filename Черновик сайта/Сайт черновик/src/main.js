const navbar = document.querySelector('.navbar-content');
document.body.style.backgroundImage = `url(../src/styles/wallpers/wallper10.jpg)`;

function click() {
    const audio = new Audio();
    audio.src = '../src/sounds/click.mp3';
    audio.autoplay = true;
};

const themesModal = document.createElement('div');
themesModal.classList.add('modal');
themesModal.innerHTML = `
    <div class="modal-themes-content">
        <div class="center">
            <img class="theme" id="n1" src="../src/styles/wallpers/wallper.jpg" alt="not found" />
        </div>
        <div class="center">
            <img class="theme" id="n1" src="../src/styles/wallpers/wallper2.jpg" alt="not found" />
        </div>
        <div class="center">
            <img class="theme" id="n1" src="../src/styles/wallpers/wallper3.jpg" alt="not found" />
        </div>
        <div class="center">
            <img class="theme" id="n1" src="../src/styles/wallpers/wallper4.jpg" alt="not found" />
        </div>
        <div class="center">
            <img class="theme" id="n1" src="../src/styles/wallpers/wallper5.jpg" alt="not found" />
        </div>
        <div class="center">
            <img class="theme" id="n1" src="../src/styles/wallpers/wallper6.jpg" alt="not found" />
        </div>
        <div class="center">
            <img class="theme" id="n1" src="../src/styles/wallpers/wallper7.jpg" alt="not found" />
        </div>
        <div class="center">
            <img class="theme" id="n1" src="../src/styles/wallpers/wallper8.jpg" alt="not found" />
        </div>
        <div class="center">
            <img class="theme" id="n1" src="../src/styles/wallpers/wallper9.jpg" alt="not found" />
        </div>
        <div class="center">
            <img class="theme" id="n1" src="../src/styles/wallpers/wallper10.jpg" alt="not found" />
        </div>
        <div class="center">
            <img class="theme" id="n1" src="../src/styles/wallpers/wallper11.jpg" alt="not found" />
        </div>
        <div class="center">
            <img class="theme" id="n1" src="../src/styles/wallpers/wallper12.jpg" alt="not found" />
        </div>
        <div class="center">
            <img class="theme" id="n1" src="../src/styles/wallpers/wallper13.jpg" alt="not found" />
        </div>
        <div class="center">
            <img class="theme" id="n1" src="../src/styles/wallpers/wallper14.jpg" alt="not found" />
        </div>
        <div class="center">
            <img class="theme" id="n1" src="../src/styles/wallpers/wallper15.jpg" alt="not found" />
        </div>
        <div class="center">
            <img class="theme" id="n1" src="../src/styles/wallpers/wallper16.jpg" alt="not found" />
        </div>
        <div class="center">
            <img class="theme" id="n1" src="../src/styles/wallpers/wallper17.jpg" alt="not found" />
        </div>
        <div class="center">
            <img class="theme" id="n1" src="../src/styles/wallpers/wallper18.jpg" alt="not found" />
        </div>
        
    </div>
`

const themesButton = document.createElement('h3');
themesButton.classList.add('navItem');
themesButton.textContent = 'Теми';
navbar.append(themesButton);

themesButton.onclick = () => {
    click();

    document.body.append(themesModal);

    themesButton.classList.add('visit');

    function change(e) {
        const theme = e.currentTarget;
        document.body.style.setProperty('background-image', `url(${theme.src})`)
        //theme.style.border = '2px solid darkcyan';
        theme.style.width = '80px';
        setTimeout(() => theme.style.width = '100px', 200);
    };

    function resetFocus(e) {
        const theme = e.currentTarget;
        theme.style.border = 'none';
    };
    
    const themes = document.querySelectorAll('.theme');
    themes.forEach(theme => {
        theme.tabIndex = 99;
        theme.addEventListener('focusin', change);
        theme.addEventListener('focusout', resetFocus);
        theme.addEventListener('click', e => e.stopPropagation());
    });
};

themesModal.onclick = () => {
    click();
    themesModal.classList.add('modal-close');
    themesButton.classList.remove('visit');
    setTimeout(() => {
        themesModal.classList.remove('modal-close');
        themesModal.remove();
    }, 390);
};

const backSound = document.createElement('audio');
backSound.autoplay = true;
document.body.append(backSound);

const musicList = document.createElement('div'); 
musicList.classList.add('modal');
musicList.innerHTML = `
  <div class="modal-content">
      <select id="changeMusic">
        <option id="off" selected value="Без музики">Без музики</option>
        <option id="IchTuDirWeh">Ich Tu Dir Weh</option>
        <option id="heart">You My Heart</option>
        <option id="scwarz">scwarz</option>
        <option id="rock">rammstein</option>
        <option id="relax">relax</option>
        <option id="memory">Crysis 3 OST</option>
      </select>
  </div>
`

const selectMusic = document.createElement('h3');
selectMusic.textContent = 'Музика';
selectMusic.classList.add('navItem');
navbar.append(selectMusic);

selectMusic.onclick = () => {
    click();

    document.body.append(musicList);
    
    selectMusic.classList.add('visit');

    document.querySelector('.modal-content').addEventListener('click', e => e.stopPropagation());
    changeMusic.onchange = () => {
        if (rock.selected) {
            backSound.src = '../src/sounds/rammstein.mp3';
            backSound.loop = true;
        } else if (scwarz.selected) {
            backSound.src = '../src/sounds/scwarz.mp3';
            backSound.loop = true;
        } else if (heart.selected) {
            backSound.src = '../src/sounds/MTheart.mp3';
            backSound.loop = true;
        } else if (IchTuDirWeh.selected) {
            backSound.src = '../src/sounds/IchTuDirWeh.mp3';
            backSound.loop = true;
        } else if (relax.selected) {
            backSound.src = '../src/sounds/44.mp3';
            backSound.loop = true;
        } else if (memory.selected) {
             backSound.src = '../src/sounds/33.mp3';
             backSound.loop = true;
        } else if (off.selected) backSound.src = null;
         
         
         
    } 
};

musicList.onclick = () => {
    click();
    musicList.classList.add('modal-close');
    selectMusic.classList.remove('visit');
    setTimeout(() => {
        musicList.remove();
        musicList.classList.remove('modal-close');
    }, 400)
 }
   

const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
<div class="modal-content">
<h3 class="modal-text">developer: Zozulya V.V.</h3>
<h3 class="modal-text">version App: 1.1.7</h3>
<h3 class="modal-text">revision: 13.05.2023</h3>
</div>
`;

const info = document.createElement('h3');
info.classList.add('navItem');
info.textContent = 'Info';
navbar.append(info);

info.onclick = () => {
    click();

    document.body.prepend(modal);

    info.classList.add('visit');

    document.querySelector('.modal-content').addEventListener('click', e => e.stopPropagation());
};

modal.onclick = () => {
    click();
    modal.classList.add('modal-close');
    info.classList.remove('visit');
    setTimeout(() => {
        modal.remove();
        modal.classList.remove('modal-close');
    }, 400)
    
};

