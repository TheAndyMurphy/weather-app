import React from 'react';
import './weather.styles.scss';
import Main from '../main/main.component';
import Location from '../location/location.component';
import Forecast from '../forecast/forecast.component';
import Description from '../description/description.component';
import Details from '../details/details.component';

import WeatherAssets from './weather.assets';
import { ReactComponent as LocationIcon } from '../../assets/custom-icons/location.svg';

const Weather = ({weatherData, handleModal,forecastData} ) => (
    <div>
        {   
            weatherData.cod === 200 ?
            <div className="weather">
                <div className="weather__background" 
                style={{backgroundImage: `url(${weatherData.weather.map(({icon}) => WeatherAssets.find(x => x.id === icon).img)})` }}/>
                {/* ${WeatherBackgrounds.filter(weather => weather.id = weatherData.weather[0].icon ? weather.img : 'none' )} */}
                <Location weatherData={weatherData} handleModal={handleModal} />
                <Main weatherData={weatherData} weatherAssets={WeatherAssets} />
                <Description weatherData={weatherData} />
                <Details weatherData={weatherData} />
                <Forecast forecastData={forecastData} weatherAssets={WeatherAssets} />
                <button className="weather__change" onClick={handleModal}>Change Location</button>
                </div>
                : <div className="weather__current">
                    <p>Weather Location</p>
                    <div className="weather__current__location">
                        <LocationIcon /><h3>Invalid Location</h3>
                    </div>
                    <div className="weather__current__icon">
                        Please Enter A Valid City
                    </div>
                    <button className="weather__current__change" onClick={handleModal}>CHANGE LOCATION</button>
            </div>
        }
    </div>
);

export default Weather;