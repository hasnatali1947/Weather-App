/* eslint-disable*/

import cloudImg from "../assets/images/weatherIcon.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getweatherData } from "../Redux/detail/detailSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
 
  const { lat, lon } = useSelector((state) => state.home);
  console.log("latlon" ,lat , lon);

  useEffect(() => {
    if (lat && lon) {
    dispatch(getweatherData({ lat: lat, lon: lon }));
    }
  }, [dispatch, lat, lon]); 

  return (
    <>
      <div className="topWeatherInDetail">
        <img className="cloudImg" src={cloudImg} alt="cloudImg" />
        <div>
          <span>Temperature: {detail.main?.temp}</span>
          <span>All clouds: {detail.clouds?.all}</span>
          <span>Wind speed: {detail.wind?.speed}</span>
        </div>
      </div>

      <section className="detailSection">
        <div>
          <span>Country: {detail.sys?.country}</span>
        </div>
        <div>
          <span>Base: {detail.base}</span>
        </div>
        <div>
          <span>Longitude: {detail.coord?.lon}</span>
        </div>
        <div>
          <span>Latitude: {detail.coord?.lat}</span>
        </div>
        <div>
          <span>Temp_min: {detail.main?.temp_min}</span>
        </div>
        <div>
          <span>Temp_max: {detail.main?.temp_max}</span>
        </div>
        <div>
          <span>Sunrise: {detail.sys?.sunrise}</span>
        </div>
        <div>
          <span>Sunset: {detail.sys?.sunset}</span>
        </div>
        <div>
          <span>wind_deg: {detail.wind?.deg}</span>
        </div>
        <div>
          <span>wind_gust: {detail.wind?.gust}</span>
        </div>
        <div>
          <span>Visibility: {detail.visibility}</span>
        </div>
        <div>
          <span>Timezone: {detail.timezone}</span>
        </div>
      </section>
    </>
  );
};

export default Detail;
