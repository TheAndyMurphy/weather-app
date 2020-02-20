import React from 'react';
import './current-weather.styles.scss';
import { ReactComponent as LocationIcon } from '../../assets/custom-icons/location.svg';


const CurrentWeather = ({weatherData}) => {
    return(
            <div className="weather__current">
                    <div className="weather__current__location">
                        <h3><LocationIcon />{weatherData.name}</h3>
                        <p>{new Intl.DateTimeFormat("en-GB", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit"
                            }).format((weatherData.dt * 1000))}
                        </p>
                    </div>
                    <div className="weather__current__main">
                        <div className="weather__current__icon">
                            <img src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Current Weather Icon"/>
                        </div>
                        <div className="weather__current__temp">
                            {Math.round(weatherData.main.temp)}<span>&#176;</span>
                        </div>
                    </div>
                    <div className="weather__current__feel">
                        <small>Feels Like: </small> {Math.round(weatherData.main.feels_like)}<span>&#176;</span>
                    </div>
                    <div className="weather__current__description">
                        {weatherData.weather[0].description}
                    </div>
                    <div className="weather__current__data">
                        <div className="weather__current__data__item"><span>Humidity:</span> {weatherData.main.humidity} %</div>
                        <div className="weather__current__data__item"><span>Wind Speed:</span> { Math.round(weatherData.wind.speed * 3.6) } km/h</div>
                    </div>
                </div>
    );
}

export default CurrentWeather;