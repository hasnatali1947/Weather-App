import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import Home from '../components/home';
import Detail from '../components/detail';
import homeSlice from '../Redux/home/homeSlice';
import detailSlice from '../Redux/detail/detailSlice';
import DisplayWeatheronhome from '../components/displayWeatheronhome';

const store = configureStore({
  reducer: {
    detail: detailSlice.reducer,
    home: homeSlice.reducer,
  },
});

it('test home section', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('tests detail section', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Detail />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('tests detail section', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <DisplayWeatheronhome />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
