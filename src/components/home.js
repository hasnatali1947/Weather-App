import '../style/home.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/icons/search-icon.png';
import cloudImg from '../assets/images/weatherIcon.png';
import nextArrow from '../assets/icons/next.png';
import DisplayWeatheronhome from './displayWeatheronhome';
import { getLatLon } from '../Redux/home/homeSlice';
import { getweatherData } from '../Redux/detail/detailSlice';

const Home = () => {
  const [country, setCountry] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const home = useSelector((state) => state.home);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (country === '') {
      setErrorMessage('Please type city name');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      return;
    }
    dispatch(getLatLon(country));
    setCountry('');
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            className="searchcity"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Search your city"
          />
          <button type="submit">
            <img
              type="submit"
              className="searchIcon"
              src={searchIcon}
              alt="searchIcon"
            />
          </button>
        </form>
        {errorMessage && <span className="errorMessage">{errorMessage}</span>}
      </div>

      {(Object.keys(home || {}).length > 1) ? (
        <div className="topWeatherDisplay">
          <div className="topsecond">
            <img className="TopcloudImg" src={cloudImg} alt="cloudImg" />
            <div className="Weatherdetails">
              <span className="countryName">
                Country:
                {home.country}
              </span>
              <span>
                City:
                {home.name}
              </span>
              <span>
                Latitude:
                {home.coord?.lat}
              </span>
              <span>
                Longitude:
                {home.coord?.lon}
              </span>
              <span>
                Timezone:
                {home.timezone}
              </span>
            </div>
          </div>
          <Link
            to="/detail"
            onClick={async () => {
              if (home.coord) {
                await dispatch(getweatherData({ lat: home.coord.lat, lon: home.coord.lon }));
              } else {
                await dispatch(getweatherData({ lat: '33.0281858', lon: '72.0575345' }));
              }
            }}
          >
            <img className="nextArrow" src={nextArrow} alt="nextArrow" />
          </Link>

        </div>
      ) : (
        <div className="topWeatherDisplay">
          <div className="topsecond">
            <img className="TopcloudImg" src={cloudImg} alt="cloudImg" />
            <div className="Weatherdetails">
              <span className="countryName">Country: PK</span>
              <span>City: Nowshera</span>
              <span>Latitude: 33.0281858</span>
              <span>Longitude: 72.0575345</span>
              <span>Timezone: 18000</span>
            </div>
          </div>
          <Link to="/detail" onClick={() => dispatch(getweatherData({ lat: '33.0281858', lon: '72.0575345' }))}>
            <img className="nextArrow" src={nextArrow} alt="nextArrow" />
          </Link>
        </div>
      )}
      <DisplayWeatheronhome />
    </>
  );
};

export default Home;
