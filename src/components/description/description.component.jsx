import React from 'react';
import './description.styles.scss';

const Description = ({weatherData}) => {
    return(
        <div className="description">
            <div className="description__title">
                {weatherData.weather[0].description}
            </div>
            <div className="description__feel">
                <small>Feels Like : </small> {Math.round(weatherData.main.feels_like)}<span>&#176;</span>
            </div>
        </div>
    )
};

export default Description;