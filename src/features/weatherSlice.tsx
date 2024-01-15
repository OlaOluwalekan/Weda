import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface stateType {
  current: {} | null
  isLoading: boolean
}

const initialState: stateType = {
  current: null,
  isLoading: false,
}

export const getCurrentData = createAsyncThunk(
  'weather/getCurrentData',
  async (payload: string, thunkAPI) => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: payload },
      headers: {
        'X-RapidAPI-Key': 'b3c7b71d15msh4966d113aace904p1ca73bjsn8d3ee2075fef',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    }

    try {
      const { data } = await axios.request(options)
      console.log(data)
      return data
    } catch (error: any) {
      console.log(error)
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
)

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentData.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCurrentData.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.current = payload
      })
  },
})

export default weatherSlice.reducer
