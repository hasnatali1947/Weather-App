/* eslint-disable*/

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getLatLon = createAsyncThunk(
    'city/lotlon',
    async (cityName) => {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bade5986f338cd84a201f41eecd691eb`);
      if (response.data === undefined) {
        throw new Error("Invalid city name");
      }
      return response.data;
    }
  );
  


const homeSlice = createSlice ({
        name : 'home',
        initialState : {},
        reducers : {},
        extraReducers(builder){  
            builder.addCase(getLatLon.fulfilled, (state ,action) => {
                return action.payload;
              });
        }
    })

export default homeSlice
