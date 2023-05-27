import { configureStore } from '@reduxjs/toolkit';
import detailSlice from './detail/detailSlice';
import homeSlice from './home/homeSlice';

const store = configureStore({
  reducer: {
    detail: detailSlice.reducer,
    home: homeSlice.reducer,
  },
});

export default store;
