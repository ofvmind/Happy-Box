const undergroundOfKiev = [
    {line: 'red', name: 'Академгородок'},
    {line: 'red', name: 'Житомирська'},
    {line: 'red', name: 'Святошин'},
    {line: 'red', name: 'Нивки'},
    {line: 'red', name: 'Берестейська'},
    {line: 'red', name: 'Шулявська'},
    {line: 'red', name: 'Політехнічний інститут'},
    {line: 'red', name: 'Університет'},
    {line: 'red', name: 'Театральна'},
    {line: 'red', name: 'Хрещатик'},
    {line: 'red', name: 'Арсенальна'},
    {line: 'red', name: 'Дніпро'},
    {line: 'red', name: 'Гідропарк'},
    {line: 'red', name: 'Лівобережна'},
    {line: 'red', name: 'Чернігівська'},
    {line: 'red', name: 'Лісова'},
    {line: 'green', name: 'Сирець'},
    {line: 'green', name: 'Дорогожичі'},
    {line: 'green', name: 'Лукянівська'},
    {line: 'green', name: 'Золоті ворота'},
    {line: 'green', name: 'Палац спорту'},
    {line: 'green', name: 'Дружби народів'},
    {line: 'green', name: 'Відубичі'},
    {line: 'green', name: 'Славутич '},
    {line: 'green', name: 'Осокорки '},
    {line: 'green', name: 'Позняки'},
    {line: 'green', name: 'Харківська'},
    {line: 'green', name: 'Вірлиця'},
    {line: 'green', name: 'Бориспільська'},
    {line: 'blue', name: 'Героїв Дніпра'},
    {line: 'blue', name: 'Мінська'},
    {line: 'blue', name: 'Оболонь'},
    {line: 'blue', name: 'Почайна («Петрівка»)'},
    {line: 'blue', name: 'Тараса Шевченка'},
    {line: 'blue', name: 'Контрактова площа'},
    {line: 'blue', name: 'Поштова площа'},
    {line: 'blue', name: 'Майдан Незалежності'},
    {line: 'blue', name: 'Площа Льва Толстого'},
    {line: 'blue', name: 'Олімпійська'},
    {line: 'blue', name: 'Палац «Україна»'},
    {line: 'blue', name: 'Либідська'},
    {line: 'blue', name: 'Виставковий центр'},
    {line: 'blue', name: 'Іпподром'},
    {line: 'blue', name: 'Теремки'},
];

function click() {
    const audio = new Audio();
    audio.src = './src/sounds/click.mp3';
    audio.autoplay = true;
};

const getOptions = (stations, word) => {
    return stations.filter(s => {
        const regex = new RegExp(word, 'gi');

        return s.name.match(regex);
    });
};

const towns = document.querySelectorAll('.card');
const kievCard = towns[0];
const kharkivCard = towns[1];
const lvivCard = towns[2];

towns.forEach(card => {
    card.addEventListener('mouseover', e => {
        const currentCard = e.currentTarget;
        const img = currentCard.querySelector('.present');
        img.style.width = '70%';
        currentCard.addEventListener('mouseout', e => img.style.width = '80%'); 
      });
});

function createSearchBtn(textContent) {
    const searchBtn = document.createElement('h3');
    searchBtn.classList.add('search-metro-btn');
    searchBtn.innerHTML = textContent;
    return searchBtn;
};

const searchModal = document.createElement('div');
searchModal.classList.add('search-modal');
searchModal.innerHTML = `
<div class="search-modal-content">
    <input placeholder="Пошук станцій" class="search">
    <ul class="options">
    </ul>
</div>    
`;

function clickSearch(underground) {
    click();
    document.body.append(searchModal);
    const searchInput = document.querySelector('.search');
    const searchOptions = document.querySelector('.options');
    searchInput.focus();
    searchModal.addEventListener('click', e => {
        click();
        searchModal.classList.add('modal-close');
        setTimeout(() => {
            searchModal.classList.remove('modal-close');
            searchModal.remove();
        }, 150);
    });
       
    function displayOptions() {
        const options = getOptions(underground, this.value);
        const html = options.map(station => {
            const regex = new RegExp(this.value, 'gi');

            const stationName = station.name.replace(regex, 
                `<span class="hl">${this.value}</span>`
                );
            
            if (station.line === 'red') return `<li><span class="red"><span class="metro">M</span>${stationName}</span></li>`
            if (station.line === 'green') return `<li><span class="green"><span class="metro">M</span>${stationName}</span></li>`
            if (station.line === 'blue') return `<li><span class="blue"><span class="metro">M</span>${stationName}</span></li>`

        })
        .slice(1, 10)
        .join('');
         searchOptions.innerHTML = this.value ? html : null;
        
    };
    searchInput.addEventListener('keyup', displayOptions);
};

const searchBtnKiev = createSearchBtn('Станції Київського метрополвтену');
const searchBtnKharkiv = createSearchBtn('Станції Харківського метрополвтену')

const modalKiev = document.createElement('div');
modalKiev.classList.add('card-modal');
modalKiev.innerHTML = `
<div class="card-content" id="kyiv">

<h2>Харків</h2>
<div class="center-div">
    <img class="town-image" src="../src/styles/image/kyiv.jpg" alt="not found">
</div>
    <p>Ки́їв — столиця та найбільше місто України. Розташований у середній течії Дніпра, у північній Наддніпрянщині. Політичний, соціально-економічний, транспортний, освітньо-науковий, історичний, культурний та духовний центр України. У системі адміністративно-територіального устрою України Київ має спеціальний статус, визначений Конституцією, і не входить до складу жодної області, хоча і є адміністративним центром Київської області[8]. Місце розташування центральних органів влади України, іноземних місій, штаб-квартир більшості підприємств і громадських об'єднань, що працюють в Україні.
    За «Повістю временних літ», Київ заснував полянський князь Кий зі своїми братами Щеком і Хоривом та сестрою Либіддю. Згідно з археологічними даними та писемними джерелами, початок безперервного розвитку Києва датується 2-ю половиною V ст. — 1-ю половиною VI ст.; осередком розширення Києва була гора Замкова[2]. Був столицею полян, Русі, Київського князівства, Великого князівства Руського, Української Народної Республіки, Української Держави та Української Радянської Соціалістичної Республіки. Також був адміністративним центром однойменного литовсько-польського воєводства, козацького полку, російської губернії, радянської округи, німецької генеральної округи та радянської області.
    Один із найстаріших історичних центрів Східної Європи та християнства — Софійський собор та Києво-Печерська лавра внесені до списку Світової спадщини ЮНЕСКО.</p>
</div>
`

function insertModal(modal) {
    document.body.append(modal);
    document.querySelector('.card-content').addEventListener('click', e => e.stopPropagation());
    modal.addEventListener('click', e => {
    
        modal.classList.add('modal-close');
        setTimeout(() => {
            modal.classList.remove('modal-close');
            modal.remove();
        }, 200);
       });

}

kievCard.addEventListener('click', e => {
   insertModal(modalKiev);
    
   kyiv.append(searchBtnKiev); 

   searchBtnKiev.addEventListener('click', e => clickSearch(undergroundOfKiev)); 
});

const undergroundOfKharkiv = [
    {line: 'red', name: 'Холодна гора'},
    {line: 'red', name: 'Південний вокзал'},
    {line: 'red', name: 'Центральний ринок'},
    {line: 'red', name: 'Майдан Конституції'},
    {line: 'red', name: 'Проспект Гагаріна'},
    {line: 'red', name: 'Спортивна'},
    {line: 'red', name: 'Завод імені Малишева'},
    {line: 'red', name: 'Турбоатом'},
    {line: 'red', name: 'Палац спорту'},
    {line: 'red', name: 'Армійська'},
    {line: 'red', name: 'Імені О.С. Масельського'},
    {line: 'red', name: 'Тракторний завод'},
    {line: 'red', name: 'Індустріальна'},
    {line: 'blue', name: 'Героїв праці'},
    {line: 'blue', name: 'Студентська'},
    {line: 'blue', name: 'Академіка Павлова'},
    {line: 'blue', name: 'Академіка Барабашова'},
    {line: 'blue', name: 'Київська'},
    {line: 'blue', name: 'Пушкінська'},
    {line: 'blue', name: 'Університет'},
    {line: 'blue', name: 'Історичний музей'},
    {line: 'green', name: 'Перемога'},
    {line: 'green', name: 'Олексіївська'},
    {line: 'green', name: '23 Серпня'},
    {line: 'green', name: 'Ботанічний сад'},
    {line: 'green', name: 'Наукова'},
    {line: 'green', name: 'Держпром'},
    {line: 'green', name: 'Архітектора Бекетова'},
    {line: 'green', name: 'Захисників України'},
    {line: 'green', name: 'Метробудівників'},
];

const modalKharkiv = document.createElement('div');
modalKharkiv.classList.add('card-modal');
modalKharkiv.innerHTML = `
<div class="card-content" id="kharkiv">

<h2>Харків</h2>
<div class="center-div">
    <img class="town-image" src="../src/styles/image/kharkiv.jpg" alt="not found">
</div>
<p>Ха́рків (МФА: [ˈxɑrkiu̯] ( прослухати); заст. укр. Харьків[2][3], лат. Zacharpolis[4][5][6]) — місто України. Розташоване на північному сході України на Слобожанщині, науковий центр України, адміністративний центр Харківської області. Друге за кількістю мешканців місто України з населенням 1 421 125 осіб[1]. Площа міста — 350 км²[7]. Разом із прилеглими містами та районами утворює Харківську агломерацію з людністю понад 2 млн осіб. Місто-герой України (з 2022 року)[8][9].
Великий науковий, культурний, промисловий і транспортний осередок України, був третім індустріальним центром у колишньому СРСР. 60 науково-дослідних інститутів, 41 вищий навчальний заклад[10], серед яких ХНУ імені В. Н. Каразіна, який входить до найкращих 500 ВНЗ світу та НТУ «ХПІ», який входить до найкращих 1000[11], 8 музеїв, міська картинна галерея, 7 державних театрів і кілька десятків недержавних, 80 бібліотек.
Володіє повним комплектом нагород Ради Європи: Європейським Дипломом, Почесним Прапором, Почесною Відзнакою і Призом Європи[12][13].
6 березня 2022 року Указом Президента України з метою відзначення подвигу, масового героїзму та стійкості громадян, виявлених у захисті своїх міст під час відсічі збройної агресії Російської Федерації проти України місту присвоєно почесну відзнаку «Місто-герой України»[14].</p>
    Один із найстаріших історичних центрів Східної Європи та християнства — Софійський собор та Києво-Печерська лавра внесені до списку Світової спадщини ЮНЕСКО.</p>
</div>
`
kharkivCard.addEventListener('click', e => {
    insertModal(modalKharkiv);

    kharkiv.append(searchBtnKharkiv);

    searchBtnKharkiv.addEventListener('click', e => clickSearch(undergroundOfKharkiv));
});

const modalLviv = document.createElement('div');
modalLviv.classList.add('card-modal');
modalLviv.innerHTML = `
<div class="card-content" id="lviv">

<h2>Львів</h2>
<div class="center-div">
    <img class="town-image" src="../src/styles/image/kharkiv.jpg" alt="not found">
</div>
<p>Львів (МФА: [ˈʎʋiu̯] ( прослухати) англ. Lviv, пол. Lwów, нім. Lemberg, їд. לעמבערג/לוויוו‎) — місто в Україні, адміністративний центр області, агломерації, району, міської громади, національно-культурний та освітньо-науковий осередок країни, великий промисловий центр і транспортний вузол, вважається столицею Галичини та центром Західної України. За кількістю населення — сьоме місто країни (717 273 станом на 01.01.2022)[2].
            Львів заснував король Данило приблизно у 1231—1235 роках (перша згадка від 1256 року). Близько 1272 року місто стало столицею Королівства Русі (Галицько-Волинського князівства). Невдовзі після смерті князя Юрія II Львів на понад чотири століття опинився під владою Королівства Польського. 1356 року місто отримало маґдебурзьке право; в добу Середньовіччя Львів був важливим торговельним центром. За австрійського панування місто стало осередком українського та польського національного рухів. Після розпаду Австро-Угорщини восени 1918 року Львів деякий час був столицею Західноукраїнської Народної Республіки, але після українсько-польської битви за місто в листопаді 1918 перейшов до Польщі, що в 1922-23 було визнано міжнародними пактами та угодами. Під час Другої світової війни місто захопив Радянський Союз, а згодом — Німеччина. Після війни було юридично закріплено ялтинську угоду 1945, за якою Східна Галичина і зокрема Львів лишався у складі Української РСР. 1946 року між Польщею та УРСР відбувся обмін населення, який разом із наслідками війни суттєво вплинув на населення Львова. З 1991 року Львів перебуває у складі України. 
            Історичний центр Львова занесено до списку Світової спадщини ЮНЕСКО. У місті розташована найбільша кількість пам'яток архітектури в Україні[3]. 2009 року Львову надано звання Культурної столиці України[4]. Місто періодично посідає чільні місця в рейтингах туристичної та інвестиційної привабливості[5][6][7].</p>
`;

lvivCard.onclick = () => {
    insertModal(modalLviv);
};

