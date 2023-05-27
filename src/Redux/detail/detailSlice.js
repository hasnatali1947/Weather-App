import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getweatherData = createAsyncThunk(
  'city/weatherData',
  async ({ lat, lon }) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bade5986f338cd84a201f41eecd691eb`);
    return response.data;
  },
);

export const fetchCityList = createAsyncThunk(
  'city/fetchCityList',
  async () => {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/find?mode=json&type=like&sort=population&cnt=30&appid=bade5986f338cd84a201f41eecd691eb');
    return response.data.list.map((city) => city.name);
  },
);

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    cityList: [], // Initialize the cityList property as an empty array
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getweatherData.fulfilled, (state, action) => action.payload)
      .addCase(fetchCityList.fulfilled, (state, action) => {
        state.cityList = action.payload;
      });
  },
  reducer(state, action) {
    switch (action.type) {
      default:
        return state;
    }
  },
});

export default detailSlice;
