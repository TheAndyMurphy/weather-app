import React from 'react';
import './weather.styles.scss';
import CurrentWeather from '../current-weather/current-weather.component';
import Forecast from '../forecast/forecast.component';
import Rain from '../../assets/img/rain.jpg';
import Sunny from '../../assets/img/sunny.jpg';
import Cloudy from '../../assets/img/cloudy.jpg';
import FewClouds from '../../assets/img/few-clouds.jpg';
import CloudScatter from '../../assets/img/cloud-scatter.jpg';
import Thunderstorm from '../../assets/img/thunderstorm.jpg';
import Snow from '../../assets/img/snow.jpg';
import Mist from '../../assets/img/mist.jpg';
import ClearNight from '../../assets/img/clear-night.jpg';
import FewCloudsNight from '../../assets/img/few-clouds-night.jpg';
import CloudScatterNight from '../../assets/img/cloud-scatter-night.jpg';
import CloudyNight from '../../assets/img/cloudy-night.jpg';
import RainyNight from '../../assets/img/rainy-night.jpg';
import { ReactComponent as LocationIcon } from '../../assets/custom-icons/location.svg';



const Weather = ({weatherData, handleModal,forecastData} ) => (
    <div>
    {weatherData.cod === 200 ?
        <div className="weather">
        <div className="weather__background" style={{
            backgroundImage: 
            weatherData.weather[0].icon === '01d' ? `url(${Sunny})` : 
            weatherData.weather[0].icon === '02d' ? `url(${FewClouds})` : 
            weatherData.weather[0].icon === '03d' ? `url(${CloudScatter})` : 
            weatherData.weather[0].icon === '04d' ? `url(${Cloudy})` : 
            weatherData.weather[0].icon === '09d' ? `url(${Rain})` : 
            weatherData.weather[0].icon === '10d' ? `url(${Rain})` : 
            weatherData.weather[0].icon === '11d' ? `url(${Thunderstorm})` : 
            weatherData.weather[0].icon === '13d' ? `url(${Snow})` : 
            weatherData.weather[0].icon === '50d' ? `url(${Mist})` : 
            weatherData.weather[0].icon === '01n' ? `url(${ClearNight})` : 
            weatherData.weather[0].icon === '02n' ? `url(${FewCloudsNight})` : 
            weatherData.weather[0].icon === '03n' ? `url(${CloudScatterNight})` : 
            weatherData.weather[0].icon === '04n' ? `url(${CloudyNight})` : 
            weatherData.weather[0].icon === '09n' ? `url(${RainyNight})` : 
            weatherData.weather[0].icon === '10n' ? `url(${RainyNight})` : 

            weatherData.weather[0].icon === '11n' ? `url(${Thunderstorm})` : 
            weatherData.weather[0].icon === '13n' ? `url(${Snow})` : 
            weatherData.weather[0].icon === '50n' ? `url(${Mist})` : 
            'none'
            }} />
        <CurrentWeather weatherData={weatherData} handleModal={handleModal} />
        <h4>3 Hour Weather</h4>
        <Forecast forecastData={forecastData}/>
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
    }</div>
);

export default Weather;