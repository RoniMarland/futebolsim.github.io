import { createHUD, loadGameData, createClubSelectBtn } from './core/coreFunctions.js'
import { homeButtons } from './core/coreButtons.js'
import { createNewHtmlElement } from './helpers/constructors.js';
import { generateRandomData } from './helpers/rcpg.js'

let gameCanBeStarted = false;
let clubData = null;


async function homePage(){

    clubData = await loadGameData();  
    const testData = generateRandomData();
    createHUD();
    createClubSelectBtn(clubData);
    homeButtons(clubData);






    if(gameCanBeStarted){

        return;

    }


};



homePage();






























function startGame(){


    console.log("Jogo iniciado!");

    gameLoop()

};


function gameLoop(){

    console.log('gameloop')
    console.log(generateRandomData())


};


