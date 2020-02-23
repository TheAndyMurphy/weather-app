import React from 'react';
import './main.styles.scss';


const Main = ({weatherData, weatherAssets}) => {
    return(
        <div className="main">
            <div className="main__icon">
                <img src={weatherData.weather.map(({icon}) => weatherAssets.find(x => x.id === icon).icon)} alt="Current Weather Icon"/>
            </div>
            <div className="main__temp">
                {Math.round(weatherData.main.temp)}<span>&#176;</span>
            </div>
        </div>
    )
};

export default Main;