export interface IPlayer {
  name: string
  color: string
  remainingTime: number
}

export interface IGameState {
  players: IPlayer[]
}