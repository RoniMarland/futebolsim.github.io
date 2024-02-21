import { newClub } from '../assets/constructor.js'
import { playerPerTatic, generateRandomPlayer, generateRandomColor } from '../assets/rpg.js'
import { clubNames } from '../helpers/clubnames.js'
import { states } from '../helpers/states.js'
import { stadiumNames } from '../helpers/stadiumNames.js'



const t442 = [2, 5, 6, 8, 9, 19, 18, 16, 15, 28, 26];

let clubs = [];

const clubDiv = document.createElement('div');
clubDiv.className = 'clubDiv';
document.body.appendChild(clubDiv);


for (let i = 0; i < 20; i++) {

    const randomClubName = clubNames[Math.floor(Math.random() * clubNames.length)];
    const randomState = states[Math.floor(Math.random() * states.length)];
    const stadium = stadiumNames[Math.floor(Math.random() * stadiumNames.length)];
    const randomColors = [
        `primary: ${generateRandomColor()}`,
        `secondary: ${generateRandomColor()}`,
        `third: ${generateRandomColor()}`
    ];

    const randomFoundAge = Math.floor(Math.random() * 81).toString().padStart(2, '0');
    const foundAge = `19${randomFoundAge}`;

    const newClubs = new newClub(i, randomClubName, randomState, 'Brasil', foundAge, stadium, randomColors, ['b'], playerPerTatic(t442));

    clubs.push(newClubs);
    const cd = document.createElement('div');
    cd.className = 'cd';
    cd.style.color = newClubs.colors[1].split(':')[1].trim();
    cd.style.background = newClubs.colors[0].split(':')[1].trim();
    clubDiv.appendChild(cd);
    cd.textContent = newClubs.name;
    cd.textContent = newClubs.name;
    cd.textContent = newClubs.name;


}

console.log(clubs);

// setTimeout(function() {
//     location.reload();
// }, 800); 