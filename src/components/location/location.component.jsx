import React from 'react';
import './location.styles.scss';
import { ReactComponent as LocationIcon } from '../../assets/custom-icons/location.svg';

const Location = ({weatherData}) => {
    let currentTime = new Date(weatherData.dt * 1000);

    return(
        <div className="location">
            <h3><LocationIcon />{weatherData.name}, {weatherData.sys.country}</h3>
            <p>{currentTime.getHours()}:{currentTime.getMinutes()} - {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "2-digit"
                }).format((currentTime))}
            </p>
        </div>
    )
};

export default Location;