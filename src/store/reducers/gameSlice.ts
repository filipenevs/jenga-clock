import { createSlice } from '@reduxjs/toolkit'
import { IGameState } from '../../typings/gameTypes'

const initialState: IGameState = {
  players: []
}

const slice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {

  }
})

export const {} = slice.actions
export default slice.reducer