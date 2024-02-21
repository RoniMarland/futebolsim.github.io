import { nomeData } from '../helpers/playerNames.js'

const positionsData = [
    {
        "id": 2,
        "name": "Goleiro",
        "abbreviation": "GK",
        "attributesNecessary": {
            "technical": ["defesa"],
            "mental": ["decisoes", "posicionamento", "imprevisibilidade"],
            "physical": ["impulso", "aptidaoFisica", "forca"]
        }
    },
    {
        "id": 7,
        "name": "Defesa Central",
        "abbreviation": "DCC",
        "attributesNecessary": {
            "technical": ["cabeceamento", "desarme", "marcacao", "defesa",],
            "mental": ["agressividade", "decisoes", "posicionamento", "imprevisibilidade"],
            "physical": ["impulso", "aptidaoFisica", "forca", "velocidade", "resistencia"]
        }
    },
    {
        "id": 8,
        "name": "Defesa Central",
        "abbreviation": "DC",
        "attributesNecessary": {
            "technical": ["cabeceamento", "desarme", "marcacao", "defesa"],
            "mental": ["agressividade", "decisoes", "posicionamento", "imprevisibilidade"],
            "physical": ["impulso", "aptidaoFisica", "forca", "velocidade", "resistencia"]
        }
    },
    {
        "id": 6,
        "name": "Defesa Central",
        "abbreviation": "DC",
        "attributesNecessary": {
            "technical": ["cabeceamento", "desarme", "marcacao", "defesa"],
            "mental": ["agressividade", "decisoes", "posicionamento", "imprevisibilidade"],
            "physical": ["impulso", "aptidaoFisica", "forca", "velocidade", "resistencia"]
        }
    },
    {
        "id": 9,
        "name": "Lateral Esquerdo",
        "abbreviation": "LE",
        "attributesNecessary": {
            "technical": ["passe", "tecnica", "marcacao", "finta"],
            "mental": ["agressividade", "decisoes", "posicionamento", "imprevisibilidade"],
            "physical": ["velocidade", "resistencia", "aptidaoFisica"]
        }
    },
    {
        "id": 5,
        "name": "Lateral Direito",
        "abbreviation": "LD",
        "attributesNecessary": {
            "technical": ["passe", "tecnica", "marcacao", "finta"],
            "mental": ["agressividade", "decisoes", "posicionamento", "imprevisibilidade"],
            "physical": ["velocidade", "resistencia", "aptidaoFisica"]
        }
    },
    {
        "id": 10,
        "name": "Ala Direito",
        "abbreviation": "AD",
        "attributesNecessary": {
            "technical": ["passe", "tecnica", "marcacao", "finta"],
            "mental": ["agressividade", "decisoes", "posicionamento", "imprevisibilidade", "visaoDeJogo"],
            "physical": ["velocidade", "resistencia", "aptidaoFisica"]
        }
    },
    {
        "id": 14,
        "name": "Ala Esquerdo",
        "abbreviation": "AE",
        "attributesNecessary": {
            "technical": ["passe", "tecnica", "marcacao", "finta"],
            "mental": ["agressividade", "decisoes", "posicionamento", "imprevisibilidade", "visaoDeJogo"],
            "physical": ["velocidade", "resistencia", "aptidaoFisica"]
        }
    },
    {
        "id": 11,
        "name": "Meio Campista Defensivo",
        "abbreviation": "MCD",
        "attributesNecessary": {
            "technical": ["desarme", "passe", "marcacao"],
            "mental": ["agressividade", "decisoes", "posicionamento"],
            "physical": ["velocidade", "resistencia", "forca", "aptidaoFisica"]
        }
    },
    {
        "id": 12,
        "name": "Meio Campista Defensivo",
        "abbreviation": "MCD",
        "attributesNecessary": {
            "technical": ["desarme", "passe", "marcacao"],
            "mental": ["agressividade", "decisoes", "posicionamento"],
            "physical": ["velocidade", "resistencia", "forca", "aptidaoFisica"]
        }
    },
    {
        "id": 13,
        "name": "Meio Campista Defensivo",
        "abbreviation": "MCD",
        "attributesNecessary": {
            "technical": ["desarme", "passe", "marcacao"],
            "mental": ["agressividade", "decisoes", "posicionamento"],
            "physical": ["velocidade", "resistencia", "forca", "aptidaoFisica"]
        }
    },
    {
        "id": 16,
        "name": "Meio Campista Central",
        "abbreviation": "MCC",
        "attributesNecessary": {
            "technical": ["tecnica", "passe", "dominio", "desarme"],
            "mental": ["decisoes", "posicionamento", "imprevisibilidade", "visaoDeJogo"],
            "physical": ["velocidade", "resistencia", "aptidaoFisica"]
        }
    },
    {
        "id": 17,
        "name": "Meio Campista Central",
        "abbreviation": "MCC",
        "attributesNecessary": {
            "technical": ["tecnica", "passe", "dominio", "desarme"],
            "mental": ["decisoes", "posicionamento", "imprevisibilidade", "visaoDeJogo"],
            "physical": ["velocidade", "resistencia", "aptidaoFisica"]
        }
    },
    {
        "id": 18,
        "name": "Meio Campista Central",
        "abbreviation": "MCC",
        "attributesNecessary": {
            "technical": ["tecnica", "passe", "dominio", "desarme"],
            "mental": ["decisoes", "posicionamento", "imprevisibilidade", "visaoDeJogo"],
            "physical": ["velocidade", "resistencia", "aptidaoFisica"]
        }
    },
    {
        "id": 15,
        "name": "Meio Campista Direito",
        "abbreviation": "MCCD",
        "attributesNecessary": {
            "technical": ["tecnica", "passe", "dominio", "finta"],
            "mental": ["decisoes", "posicionamento", "imprevisibilidade", "visaoDeJogo"],
            "physical": ["velocidade", "resistencia", "aptidaoFisica"]
        }
    },
    {
        "id": 19,
        "name": "Meio Campista Esquerdo",
        "abbreviation": "MCCE",
        "attributesNecessary": {
            "technical": ["tecnica", "passe", "dominio", "finta"],
            "mental": ["decisoes", "posicionamento", "imprevisibilidade", "visaoDeJogo"],
            "physical": ["velocidade", "resistencia", "aptidaoFisica"]
        }
    },
    {
        "id": 24,
        "name": "Extremo Esquerdo",
        "abbreviation": "EE",
        "attributesNecessary": {
            "technical": ["tecnica", "passe", "dominio", "finta", "finalizacao", "rematesDeLonge"],
            "mental": ["decisoes", "imprevisibilidade"],
            "physical": ["velocidade", "resistencia", "aptidaoFisica"]
        }
    },
    {
        "id": 20,
        "name": "Extremo Direito",
        "abbreviation": "ED",
        "attributesNecessary": {
            "technical": ["tecnica", "passe", "dominio", "finta", "finalizacao", "rematesDeLonge"],
            "mental": ["decisoes", "imprevisibilidade"],
            "physical": ["velocidade", "resistencia", "aptidaoFisica"]
        }
    },
    {
        "id": 21,
        "name": "Meio Campista Ofensivo",
        "abbreviation": "MCO",
        "attributesNecessary": {
            "technical": ["tecnica", "passe", "dominio", "finta", "finalizacao", "rematesDeLonge"],
            "mental": ["decisoes", "imprevisibilidade", "visaoDeJogo"],
            "physical": ["velocidade", "resistencia", "aptidaoFisica"]
        }
    },
    {
        "id": 22,
        "name": "Meio Campista Ofensivo",
        "abbreviation": "MCO",
        "attributesNecessary": {
            "technical": ["tecnica", "passe", "dominio", "finta", "finalizacao", "rematesDeLonge"],
            "mental": ["decisoes", "imprevisibilidade", "visaoDeJogo"],
            "physical": ["velocidade", "resistencia", "aptidaoFisica"]
        }
    },
    {
        "id": 23,
        "name": "Meio Campista Ofensivo",
        "abbreviation": "MCO",
        "attributesNecessary": {
            "technical": ["tecnica", "passe", "dominio", "finta", "finalizacao", "rematesDeLonge"],
            "mental": ["decisoes", "imprevisibilidade", "visaoDeJogo"],
            "physical": ["velocidade", "resistencia", "aptidaoFisica"]
        }
    },
    {
        "id": 26,
        "name": "Atacante",
        "abbreviation": "AT",
        "attributesNecessary": {
            "technical": ["tecnica", "passe", "dominio", "finta", "finalizacao", "cabeceamento"],
            "mental": ["decisoes", "imprevisibilidade"],
            "physical": ["velocidade", "resistencia", "aptidaoFisica", "forca"]
        }
    },
    {
        "id": 27,
        "name": "Atacante",
        "abbreviation": "AT",
        "attributesNecessary": {
            "technical": ["tecnica", "passe", "dominio", "finta", "finalizacao", "cabeceamento"],
            "mental": ["decisoes", "imprevisibilidade"],
            "physical": ["velocidade", "resistencia", "aptidaoFisica", "forca"]
        }
    },
    {
        "id": 28,
        "name": "Atacante",
        "abbreviation": "AT",
        "attributesNecessary": {
            "technical": ["tecnica", "passe", "dominio", "finta", "finalizacao", "cabeceamento"],
            "mental": ["decisoes", "imprevisibilidade"],
            "physical": ["velocidade", "resistencia", "aptidaoFisica", "forca"]
        }
    }
];

class NewPlayer {
    constructor(playerID, playerName, playerAge, playerPosition, playerAttributes) {
        this.ID = playerID;
        this.Name = playerName;
        this.Age = playerAge;
        this.Position = playerPosition;
        this.Attributes = playerAttributes;
    }
}

export function playerPerTatic(tatic) {
    let players = []; // Cria uma nova array de jogadores localmente

    tatic.forEach((v, i) => {
        const player = generateRandomPlayer(i, v, 1);
        players.push(player);
    });

    return players;
}


export function generateRandomPlayer(playerID, playerPositionID, playerQuality) {
    const randomName = nomeData[Math.floor(Math.random() * nomeData.length)];
    const randomAge = Math.floor(Math.random() * 23) + 17;
    const position = positionsData.find(pos => pos.id === playerPositionID);

    if (!position) {
        console.error("Position not found!");
        return;
    }

    const playerAttributes = generateAttributes(playerQuality, position);
    const nPlayer = new NewPlayer(playerID, randomName, randomAge, playerPositionID, playerAttributes);
    // console.log(nPlayer);
    return nPlayer;
}


function generateAttributes(playerQuality, playerPosition) {
    let playerAttributes = {
        technical: {
            cabeceamento: 0,
            desarme: 0,
            finalizacao: 0,
            finta: 0,
            marcacao: 0,
            passe: 0,
            dominio: 0,
            rematesDeLonge: 0,
            tecnica: 0,
            defesa: 0
        },
        mental: {
            agressividade: 0,
            decisoes: 0,
            imprevisibilidade: 0,
            posicionamento: 0,
            visaoDeJogo: 0
        },
        physical: {
            aptidaoFisica: 0,
            forca: 0,
            impulso: 0,
            resistencia: 0,
            velocidade: 0
        }
    };

    Object.keys(playerPosition.attributesNecessary).forEach(category => {
        playerPosition.attributesNecessary[category].forEach(attribute => {
            let randomNumber;
            if (playerQuality === 1) {
                randomNumber = Math.floor(1 + Math.random() * 5);
            } else if (playerQuality === 2) {
                randomNumber = Math.floor(1.2 + Math.random() * 6);
            } else if (playerQuality === 3) {
                randomNumber = Math.floor(1.3 + Math.random() * 6);
            } else if (playerQuality === 4) {
                randomNumber = Math.floor(1.4 + Math.random() * 8);
            } else if (playerQuality === 5) {
                randomNumber = Math.floor(1.5 + Math.random() * 10);
            }

            let adjustedValue = randomNumber + playerQuality;
            if (adjustedValue > 20) {
                const i = Math.floor(1 + Math.random() * 3);
                adjustedValue -= i;
            }

            playerAttributes[category][attribute] = adjustedValue;
        });
    });

    Object.keys(playerAttributes).forEach(category => {
        Object.keys(playerAttributes[category]).forEach(attribute => {
            if (playerAttributes[category][attribute] === 0) {
                let randomNumber;
                if (playerQuality === 1) {
                    randomNumber = Math.floor(1 + Math.random() * 4);
                } else if (playerQuality === 2) {
                    randomNumber = Math.floor(1.2 + Math.random() * 6);
                } else if (playerQuality === 3) {
                    randomNumber = Math.floor(1.3 + Math.random() * 6);
                } else if (playerQuality === 4) {
                    randomNumber = Math.floor(1.4 + Math.random() * 8);
                } else if (playerQuality === 5) {
                    randomNumber = Math.floor(1.5 + Math.random() * 10);
                }
                playerAttributes[category][attribute] = randomNumber;
            }
        });
    });

    return playerAttributes;
}

export function generateRandomColor() {
    const hexDigits = '0123456789ABCDEF';
    let result = '#';
    for (let i = 0; i < 6; i++) {
        result += hexDigits[Math.floor(Math.random() * 16)];
    };
    return result
};