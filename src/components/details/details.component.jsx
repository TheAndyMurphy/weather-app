import React from 'react';
import './details.styles.scss';

const Details = ({weatherData}) => {
    return(
        <div className="details">
            <div className="details__item"><span>Humidity : </span> {weatherData.main.humidity} %</div>
            <div className="details__item"><span>Wind Speed : </span> { Math.round(weatherData.wind.speed * 3.6) } km/h</div>
        </div>
    )
}

export default Details;