// Search filter city
let filter = function () {
    let input = document.getElementById('filter-input');

    input.addEventListener('keyup', () => {
        let filter = input.value.toLowerCase(),
            filterElements = document.querySelectorAll('#filter-list li');

        filterElements.forEach(item => {
            if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        })

    })
};

filter();


let filterCards = function () {
    const filterBox = document.querySelectorAll('.box');

    document.querySelector('nav').addEventListener('click', event => {
        if (event.target.tagName !== 'LI') return false;
        let filterClass = event.target.dataset['f'];
        console.log(filterClass);

        filterBox.forEach(elem => {
            elem.classList.remove('hide');
            if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
                elem.classList.add('hide');
            }
        })
    });
};

filterCards();

const items = [
    {
        ratingRevievs: `264 отзыва`,
        price: {
            oldUan: `4 333 грн`,
            newUan: `3 799 грн`
        },
        name: `Motorola MOTO G4 (XT1622) Black`
    },
    {
        ratingRevievs: `1355 отзывов`,
        price: `4 999 грн`,
        name: `Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!`
    },
    {
        ratingRevievs: `426 отзывов`,
        price: `5 199 грн`,
        name: `Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло + чехол!`
    },
    {
        ratingRevievs: `403 отзыва`,
        price: `4 349 грн`,
        name: `Xiaomi Redmi Note 4X 3/32GB Black`
    },
    {
        ratingRevievs: `488 отзывов`,
        price: `6 199 грн`,
        name: `Samsung Galaxy J7 (2016) J710F/DS Gold + защитное стекло + чехол!`
    },
    {
        ratingRevievs: `198 отзывов`,
        price:
        {
            oldUan: `3 495 грн`,
            newUan: `2 995 грн`
        },
        name: `Lenovo K5 (A6020a40) Silver`
    },
];

function sortByFeedbacks(arr) {
    const temp = JSON.parse(JSON.stringify(arr));

    temp.forEach(item => {
        item.ratingRevievs = +item.ratingRevievs.replace(/\D/g, '');
    });

    temp.sort((a, b) => a.ratingRevievs > b.ratingRevievs ? 1 : -1);

    console.log(temp);

    document.querySelector('.result').innerHTML = '';

    temp.forEach(item => {
        document.querySelector('.result').innerHTML += `
            <h3>${item.name}</h3>
           
            <div>Отзывов: ${item.ratingRevievs}</div>
        `;
    });
}

function sortByPrice(arr) {
    const temp = JSON.parse(JSON.stringify(arr));
    temp.forEach(item => {
        if (typeof(item.price) === 'string') {
            item.price = +item.price.replace(/\D/g, '');
        } else {
            item.price = item.price.newUan.replace(/\D/g, '');
        }
    });
    temp.sort((a, b) => a.price > b.price ? 1 : -1);
    document.querySelector('.result').innerHTML = '';

    temp.forEach(item => {
        document.querySelector('.result').innerHTML += `
            <h3>${item.name}</h3>
            <div>Цена:: ${item.price}</div>
            <div>Отзывов: ${item.ratingRevievs}</div>
        `;
    });
}


document.querySelector('.feed').addEventListener('click', () => {
    sortByFeedbacks(items);
});

document.querySelector('.price').addEventListener('click', () => {
    sortByPrice(items);
});

