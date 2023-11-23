const inputName = document.getElementById('inputName');
const inputCargo = document.getElementById('inputCargo');
const inputImg = document.getElementById('inputImg');
const select = document.getElementById('select');
const erro = document.getElementById('erro');
const botaoSalvar = document.getElementById('btn-salvar');
const containerTimes = document.getElementById('containerTimes');
const containerCards = document.getElementById('containerCards');

let contentCardFrontEnd = createContentCard('Front End', 'frontEnd', 'borderFrontEnd');
let contentCardDataSciense = createContentCard('Data Sciense', 'dataSciense', 'borderDataSciense');
let contentCardDevops = createContentCard('Devops', 'devops', 'borderDevops');
let contentCardUXeDesing = createContentCard('UX e Design', 'uxEdesing', 'borderUXeDesign');

let contentCardsRenderizados = false;

botaoSalvar.addEventListener('click', function () {
    if(!contentCardsRenderizados) {
        containerTimes.appendChild(contentCardFrontEnd);
        containerTimes.appendChild(contentCardDataSciense);
        containerTimes.appendChild(contentCardDevops);
        containerTimes.appendChild(contentCardUXeDesing);

        contentCardsRenderizados = true
    }
    renderCards();
});

function createContentCard(title, className, borderClassName) {
    let paragrafo = document.createElement('p');
    let contentCard = document.createElement('div');

    paragrafo.classList.add('h4', borderClassName);
    contentCard.classList.add(className);

    paragrafo.textContent = title;
    contentCard.appendChild(paragrafo);

    return contentCard;
}

function renderCards () {
    if (validandoInput()) {
        erro.textContent = '';

        if (select.value == 'Front-End') {
            renderCard(containerTimes.querySelector('.frontEnd'));
        } else if (select.value == 'Data-Sciense') {
            renderCard(containerTimes.querySelector('.dataSciense'));
        } else if (select.value == 'Devops') {
            renderCard(containerTimes.querySelector('.devops'));
        } else if (select.value == 'UX e Design') {
            renderCard(containerTimes.querySelector('.uxEdesing'));
        }
    } else {
        erro.textContent = "Todos os campos devem estar preenchidos";
    }
}

function renderCard(content) {
    let card = createCard(inputName.value, inputCargo.value, inputImg.value);
    content.appendChild(card);

    inputName.value = '';
    inputCargo.value = '';
    inputImg.value = '';
}

function createCard(name, cargo, imgSrc) {
    let cardsContent = document.createElement('div');
    let card = document.createElement('div');
    let cardBody = document.createElement('div');
    let img = document.createElement('img');
    let paragrafoNome = document.createElement('p');
    let paragrafoCargo = document.createElement('p');

    img.src = imgSrc;
    img.alt = "imagem do usuario";

    paragrafoNome.textContent = name;
    paragrafoCargo.textContent = cargo;

    cardsContent.classList.add('d-flex', 'justify-content-center', 'gap-5', 'flex-wrap');
    card.classList.add('card', 'cards', 'mb-4', 'd-flex', 'align-items-center');
    img.classList.add('img-thumbnail', 'mt-5');
    cardBody.classList.add('card-body');
    paragrafoNome.classList.add('h4', 'text-break');
    paragrafoCargo.classList.add('h4', 'text-break');

    card.appendChild(img);
    cardBody.appendChild(paragrafoNome);
    cardBody.appendChild(paragrafoCargo);
    card.appendChild(cardBody);
    cardsContent.appendChild(card);

    return cardsContent;
}


function validandoInput() {
    return (
        inputName.value.trim() !== '' &&
        inputCargo.value.trim() !== '' &&
        inputImg.value.trim() !== '' &&
        select.value.trim() !== ''
    );
}