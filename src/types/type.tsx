type Commands = 'NewYork' | 'Boston' | 'Washington' | 'Pittsburgh' | 'Ottawa' | 'Columbus' | 'Carolina' | 'Toronto' | 'Montréal' | 'Florida' | 'Tampa Bay' | 'Chicago'

export type match = {
    player1: Commands,
    player2: Commands,
    winner1: number,
    winner2: number,
    draw: number,
    date: Date,
    live: boolean,
    id: number
}