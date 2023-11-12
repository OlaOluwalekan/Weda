import { createSlice } from '@reduxjs/toolkit'

interface stateType {
  current: {} | null
}

const initialState: stateType = {
  current: null,
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
})

export default weatherSlice.reducer
