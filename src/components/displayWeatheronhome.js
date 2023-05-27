import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cloudImg from '../assets/images/weatherIcon.png';
import nextArrow from '../assets/icons/next.png';
import { getLatLon } from '../Redux/home/homeSlice';
import { getweatherData } from '../Redux/detail/detailSlice';

const DisplayWeatheronhome = () => {
  const dispatch = useDispatch();
  const homeState = useSelector((state) => state.home);

  const getData = async (e) => {
    await dispatch(getLatLon(e));
    const { lat, lon } = homeState;
    dispatch(getweatherData({ lat, lon }));
  };

  const handleKeyPress = (e, cityName) => {
    if (e.key === 'Enter') {
      getData(cityName);
    }
  };

  return (
    <div className="homepageWeathers">
      <div className="WeatherDisplay first" style={{ background: 'rgba(0, 0, 0, 0.11)' }}>
        <div
          role="button"
          tabIndex={0}
          onClick={() => getData('Paris')}
          onKeyDown={(e) => handleKeyPress(e, 'Paris')}
          style={{ cursor: 'pointer' }}
        >
          <img className="cloudImg" src={cloudImg} alt="cloudImg" />
          <div className="Weatherdetails">
            <span className="countryName">Country: FR</span>
            <span>City: Paris</span>
            <span>Timezone: 3600</span>
          </div>
        </div>
        <Link to="/detail" onClick={() => dispatch(getweatherData({ lat: '48.8534', lon: '2.3488' }))}>
          <img className="nextArrow" src={nextArrow} alt="nextArrow" />
        </Link>
      </div>
      <div
        className="WeatherDisplay second"
        style={{ background: 'rgba(0, 0, 0, 0.065)' }}
      >
        <div
          role="button"
          tabIndex={0}
          onClick={() => getData('Moscow')}
          onKeyDown={() => getData('Moscow')}
          style={{ cursor: 'pointer' }}
        >
          <img className="cloudImg" src={cloudImg} alt="cloudImg" />
          <div className="Weatherdetails">
            <span className="countryName">Country: RU</span>
            <span>City: Moscow</span>
            <span>Timezone: 10800</span>
          </div>
        </div>
        <Link to="/detail" onClick={() => dispatch(getweatherData({ lat: '55.7522', lon: '37.6156' }))}>
          <img className="nextArrow" src={nextArrow} alt="nextArrow" />
        </Link>
      </div>
      <div
        className="WeatherDisplay third"
        style={{ background: 'rgba(0, 0, 0, 0.065)' }}
      >
        <div
          role="button"
          tabIndex={0}
          onClick={() => getData('Dubai')}
          onKeyDown={() => getData('Dubai')}
          style={{ cursor: 'pointer' }}
        >
          <img className="cloudImg" src={cloudImg} alt="cloudImg" />
          <div className="Weatherdetails">
            <span className="countryName">Country: AE</span>
            <span>City: Dubai</span>
            <span>Timezone: 14400</span>
          </div>
        </div>
        <Link to="/detail" onClick={() => dispatch(getweatherData({ lat: '25.2582', lon: '55.3047' }))}>
          <img className="nextArrow" src={nextArrow} alt="nextArrow" />
        </Link>
      </div>
      <div
        className="WeatherDisplay forth"
        style={{ background: 'rgba(0, 0, 0, 0.11)' }}
      >
        <div
          role="button"
          tabIndex={0}
          onClick={() => getData('New York')}
          onKeyDown={() => getData('New York')}
          style={{ cursor: 'pointer' }}
        >
          <img className="cloudImg" src={cloudImg} alt="cloudImg" />
          <div className="Weatherdetails">
            <span className="countryName">Country: US</span>
            <span>City: New York</span>
            <span>Timezone: 14400</span>
          </div>
        </div>
        <Link to="/detail" onClick={() => dispatch(getweatherData({ lat: '40.7143', lon: '-74.006' }))}>
          <img className="nextArrow" src={nextArrow} alt="nextArrow" />
        </Link>
      </div>
      <div
        className="WeatherDisplay fifth"
        style={{ background: 'rgba(0, 0, 0, 0.11)' }}
      >
        <div
          role="button"
          tabIndex={0}
          onClick={() => getData('london')}
          onKeyDown={() => getData('london')}
          style={{ cursor: 'pointer' }}
        >
          <img className="cloudImg" src={cloudImg} alt="cloudImg" />
          <div className="Weatherdetails">
            <span className="countryName">Country: UK</span>
            <span>City: London</span>
            <span>Timezone: 28800</span>
          </div>
        </div>
        <Link to="/detail" onClick={() => dispatch(getweatherData({ lat: '51.5074', lon: '-0.1278' }))}>
          <img className="nextArrow" src={nextArrow} alt="nextArrow" />
        </Link>
      </div>
      <div
        className="WeatherDisplay sixth"
        style={{ background: 'rgba(0, 0, 0, 0.065)' }}
      >
        <div
          role="button"
          tabIndex={0}
          onClick={() => getData('Istanbul')}
          onKeyDown={() => getData('Istanbul')}
          style={{ cursor: 'pointer' }}
        >
          <img className="cloudImg" src={cloudImg} alt="cloudImg" />
          <div className="Weatherdetails">
            <span className="countryName">Country: TR</span>
            <span>City: Istanbul</span>
            <span>Timezone: 10800</span>
          </div>
        </div>
        <Link to="/detail" onClick={() => dispatch(getweatherData({ lat: '41.0351', lon: '28.9833' }))}>
          <img className="nextArrow" src={nextArrow} alt="nextArrow" />
        </Link>
      </div>
    </div>
  );
};

export default DisplayWeatheronhome;
