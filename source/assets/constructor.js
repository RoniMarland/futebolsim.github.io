import { playerPerTatic } from './rpg.js'
import { clubNames } from '../helpers/clubnames.js'

export class newClub {
    constructor(clubId, clubName, clubState, ClubCountry, foundDate, stadium, colors = [], manager = [], players = [], reputation) {
        this.id = clubId;
        this.name = clubName;
        this.state = clubState;
        this.country = ClubCountry;
        this.foundationDate = foundDate;
        this.stadium = stadium;
        this.colors = colors;
        this.manager = manager;
        this.players = players;
        this.reputation = reputation;
    };
};