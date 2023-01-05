import { match } from "./types/type"
export const DATA_LIVE: Array<match> = [
{
    player1: 'NewYork',
    player2: 'Boston',
    winner1: 1.3,
    winner2: 5.2,
    draw: 2.2,
    date: new Date('11.10.2022'),
    live: true,
    id: 1,
},
{
    player1: 'Columbus',
    player2: 'Ottawa',
    winner1: 1.5,
    winner2: 3.2,
    draw: 2.8,
    date: new Date('11.10.2022'),
    live: true,
    id: 2
},
{
    player1: 'Pittsburgh',
    player2: 'Washington',
    winner1: 4.1,
    winner2: 1.4,
    draw: 3.3,
    date: new Date('11.10.2022'),
    live: true,
    id: 3,
},
{
    player1: 'Toronto',
    player2: 'Carolina',
    winner1: 2,
    winner2: 2,
    draw: 3.2,
    date: new Date('11.10.2022'),
    live: true,
    id: 4,
},
]

export const DATA: Array<match> = [
    {
        player1: 'Tampa Bay',
        player2: 'Chicago',
        winner1: 1.3,
        winner2: 5.2,
        draw: 2.2,
        date: new Date('11.21.2022'),
        live: false,
        id: 5,
    },
    {
        player1: 'Montréal',
        player2: 'Florida',
        winner1: 1.5,
        winner2: 3.2,
        draw: 2.8,
        date: new Date('11.22.2022'),
        live: false,
        id: 6,
    },
    ]