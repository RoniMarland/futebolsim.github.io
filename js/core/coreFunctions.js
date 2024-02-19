import { createNewHtmlElement } from '../helpers/constructors.js'



export async function loadGameData(callback) {
    try {
        const response = await fetch('db/dbclubs.json');
        const clubData = await response.json();
        console.log('Clubes Carregados', clubData);
        return clubData;
    } catch (error) {
        console.log('erro ao carregar base de dados');
    }
};


const appDiv = document.getElementById('App');


export function createClubSelectBtn(clubData) {
    console.log(clubData);
    const selectClubBox = document.querySelector('.selectClubBox');

    if (clubData && clubData.clubs) {

        clubData.clubs.forEach((club, i) => {
            const emblemBtnImg = new createNewHtmlElement('img', 'emblemBtn');
            const selectClubBtn = new createNewHtmlElement('button', 'selectClubBtn');
            selectClubBtn.id = i;
            emblemBtnImg.src = club.image;
            selectClubBtn.appendChild(emblemBtnImg);
            selectClubBox.appendChild(selectClubBtn);
        });        
    } else {
        console.error('clubData ou clubData.clubs é undefined.');
    };
};




export function createHUD() {



    // adiciona o container principal
    const mainContainer = new createNewHtmlElement('div', 'mainContainer');
    appDiv.appendChild(mainContainer);


    // Home Page
    const homeContainer = new createNewHtmlElement('div', 'homeContainer');
    const newGameBtn = new createNewHtmlElement('button', 'newGameBtn');
    const loadGameBtn = new createNewHtmlElement('button', 'loadGameBtn');

    newGameBtn.textContent = 'Novo Jogo';
    loadGameBtn.textContent = 'Carregar Jogo';

    mainContainer.appendChild(homeContainer);
    homeContainer.appendChild(newGameBtn);
    homeContainer.appendChild(loadGameBtn);

    //Selecao Novo Jogador Page;

    const selectClubBox = new createNewHtmlElement('div', 'selectClubBox');
    const selectClubBtn = new createNewHtmlElement('button');



    homeContainer.appendChild(selectClubBox);



};





export function playerHUD() {




};



