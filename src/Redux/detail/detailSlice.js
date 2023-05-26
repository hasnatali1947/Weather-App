import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getweatherData = createAsyncThunk(
  'city/weatherData',
  async ({ lat, lon }) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bade5986f338cd84a201f41eecd691eb`);
    return response.data;
  },
);

const detailSlice = createSlice({
  name: 'detail',
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getweatherData.fulfilled, (state, action) => action.payload);
  },
  reducer(state, action) {
    switch (action.type) {
      default:
        return state;
    }
  },
});

export default detailSlice;
