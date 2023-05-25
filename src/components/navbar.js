/* eslint-disable*/
import "../index"
import { Link, useLocation } from "react-router-dom";
import { getweatherData } from "../Redux/detail/detailSlice";
import { useDispatch, useSelector } from "react-redux";
import micIcon from "../assets/icons/mic.png"
import settingIcon from "../assets/icons/gear.png"
import leftarrowIcon from "../assets/icons/left-chevron.png"
import { useEffect } from "react";

const Navbar = () => {
    const home = useSelector((state)=>state.home)
    const detail = useSelector((state)=>state.detail)
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (location.pathname === '/detail' && Object.keys(home).length > 1) {
          dispatch(getweatherData({ lat: home.lat, lon: home.lon }));
        }
      }, [dispatch, location, home]);
      
      return(
          <nav className="navbar">
            {(location.pathname === "/") ? <Link to="/" /> : <Link to="/"> <img className="LeftArrow" src={leftarrowIcon} alt="LeftArrowIcon"/> </Link>}  
            {(Object.keys(detail).length > 1) ? <h3>{home.name}</h3> : <h3>Cities</h3> }
            <div>
                <img className="micIcon" src={micIcon} alt="mic" />
                <img className="settingIcon" src={settingIcon} alt="gear.png" />
            </div>
        </nav>
        )
    }

    export default Navbar;