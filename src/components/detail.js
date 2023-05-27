import React from 'react';
import { useSelector } from 'react-redux';
import cloudImg from '../assets/images/weatherIcon.png';

const Detail = () => {
  const detail = useSelector((state) => state.detail);

  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="topWeatherInDetail">
        <img className="cloudImg" src={cloudImg} alt="cloudImg" />
        <div>
          <span>
            Temperature:
            {detail.main?.temp}
          </span>
          <span>
            All clouds:
            {detail.clouds?.all}
          </span>
          <span>
            Wind speed:
            {detail.wind?.speed}
          </span>
        </div>
      </div>

      <section className="detailSection">
        <p style={{ background: 'rgba(0, 0, 0, 0.11)' }}>
          Country:
          {' '}
          {detail.sys?.country}
        </p>
        <p style={{ background: 'rgba(0, 0, 0, 0.11)' }}>
          Base:
          {' '}
          {detail.base}
        </p>
        <p style={{ background: 'rgba(0, 0, 0, 0.11)' }}>
          Longitude:
          {' '}
          {detail.coord?.lon}
        </p>
        <p style={{ background: 'rgba(0, 0, 0, 0.11)' }}>
          Latitude:
          {' '}
          {detail.coord?.lat}
        </p>
        <p style={{ background: 'rgba(0, 0, 0, 0.11)' }}>
          Temp_min:
          {' '}
          {detail.main?.temp_min}
        </p>
        <p style={{ background: 'rgba(0, 0, 0, 0.11)' }}>
          Temp_max:
          {' '}
          {detail.main?.temp_max}
        </p>
        <p style={{ background: 'rgba(0, 0, 0, 0.11)' }}>
          Sunrise:
          {' '}
          {detail.sys?.sunrise}
        </p>
        <p style={{ background: 'rgba(0, 0, 0, 0.11)' }}>
          Sunset:
          {' '}
          {detail.sys?.sunset}
        </p>
        <p style={{ background: 'rgba(0, 0, 0, 0.11)' }}>
          wind_deg:
          {' '}
          {detail.wind?.deg}
        </p>
        <p style={{ background: 'rgba(0, 0, 0, 0.11)' }}>
          wind_gust:
          {' '}
          {detail.wind?.gust}
        </p>
        <p style={{ background: 'rgba(0, 0, 0, 0.11)' }}>
          Visibility:
          {' '}
          {detail.visibility}
        </p>
        <p style={{ background: 'rgba(0, 0, 0, 0.11)' }}>
          Timezone:
          {' '}
          {detail.timezone}
        </p>
      </section>
    </div>
  );
};

export default Detail;
