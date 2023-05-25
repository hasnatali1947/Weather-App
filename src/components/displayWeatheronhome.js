/* eslint-disable*/
import cloudImg from "../assets/images/weatherIcon.png"
import nextArrow from "../assets/icons/next.png"
import { getLatLon } from "../Redux/home/homeSlice"
import { useDispatch } from "react-redux"

const DisplayWeatheronhome = () => {

    const dispatch = useDispatch();

    const getData = (e) => {
        dispatch(getLatLon(e))
    }

    return (
        <div className="homepageWeathers">
            <div className="WeatherDisplay">
                <div
                    role="button"
                    tabIndex={0}
                    onClick={() => getData('Paris')}
                    style={{ cursor: "pointer" }}
                >
                    <img className="cloudImg" src={cloudImg} alt="cloudImg" />
                    <div className="Weatherdetails">
                        <span className="countryName">Country: FR</span>
                        <span>City: Paris</span>
                        <span>Timezone: 3600</span>
                    </div>
                </div>
                <img onClick={() => getData('Paris')} className="nextArrow" src={nextArrow} alt="nextArrow" />
            </div>
            <div className="WeatherDisplay">
                <div
                    role="button"
                    tabIndex={0}
                    onClick={() => getData("Moscow")}
                    style={{ cursor: "pointer" }}
                >
                    <img className="cloudImg" src={cloudImg} alt="cloudImg" />
                    <div className="Weatherdetails">
                        <span className="countryName">Country: RU</span>
                        <span>City: Moscow</span>
                        <span>Timezone: 10800</span>
                    </div>
                </div>
                <img  onClick={() => getData("Moscow")} className="nextArrow" src={nextArrow} alt="nextArrow" />
            </div>
            <div className="WeatherDisplay">
                <div
                    role="button"
                    tabIndex={0}
                    onClick={() => getData("Dubai")}
                    style={{ cursor: "pointer" }}
                >
                    <img className="cloudImg" src={cloudImg} alt="cloudImg" />
                    <div className="Weatherdetails">
                        <span className="countryName">Country: AE</span>
                        <span>City: Dubai</span>
                        <span>Timezone: 14400</span>
                    </div>
                </div>
                <img onClick={() => getData("Dubai")} className="nextArrow" src={nextArrow} alt="nextArrow" />
            </div>
            <div className="WeatherDisplay">
                <div
                    role="button"
                    tabIndex={0}
                    onClick={() => getData("New York")}
                    style={{ cursor: "pointer" }}
                >
                    <img className="cloudImg" src={cloudImg} alt="cloudImg" />
                    <div className="Weatherdetails">
                        <span className="countryName">Country: US</span>
                        <span>City: New York</span>
                        <span>Timezone: 14400</span>
                    </div>
                </div>
                <img onClick={() => getData("New York")} className="nextArrow" src={nextArrow} alt="nextArrow" />
            </div>
            <div className="WeatherDisplay">
                <div
                    role="button"
                    tabIndex={0}
                    onClick={() => getData("london")}
                    style={{ cursor: "pointer" }}
                >
                    <img className="cloudImg" src={cloudImg} alt="cloudImg" />
                    <div className="Weatherdetails">
                        <span className="countryName">Country: UK</span>
                        <span>City: London</span>
                        <span>Timezone: 28800</span>
                    </div>
                </div>
                <img onClick={() => getData("london")} className="nextArrow" src={nextArrow} alt="nextArrow" />
            </div>
            <div className="WeatherDisplay">
                <div
                    role="button"
                    tabIndex={0}
                    onClick={() => getData("Istanbul")}
                    style={{ cursor: "pointer" }}
                >
                    <img className="cloudImg" src={cloudImg} alt="cloudImg" />
                    <div className="Weatherdetails">
                        <span className="countryName">Country: TR</span>
                        <span>City: Istanbul</span>
                        <span>Timezone: 10800</span>
                    </div>
                </div>
                <img onClick={() => getData("Istanbul")} className="nextArrow" src={nextArrow} alt="nextArrow" />
            </div>
        </div>
    )
}

export default DisplayWeatheronhome;
