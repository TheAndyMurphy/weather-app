import React from 'react';
import './forecast.styles.scss';

const Forecast = ({forecastData, weatherAssets}) => (
    <div className="forecast">
        <h4>3 Hour Weather</h4>
        <div className="forecast__container">
        {
            forecastData.cod === '200' ?
            forecastData.list.map(({dt, main, weather}, index) => {
                let day;
                switch (new Date(dt * 1000).getDay()) {
                   default:
                      day = "Sun";
                      break;
                    case 1:
                      day = "Mon";
                      break;
                    case 2:
                       day = "Tue";
                      break;
                    case 3:
                      day = "Wed";
                      break;
                    case 4:
                      day = "Thu";
                      break;
                    case 5:
                      day = "Fri";
                      break;
                    case 6:
                      day = "Saturday";
                  };
                const time = new Date(dt * 1000).getHours();
                return(
                  
                    <div className="forecast__item" key={index}>
                      <p className="forecast__item__day">{day}</p>
                      <p className="forecast__item__time">{Math.round(Number(time))}.00</p>
                      <img className="forecast__img" src={weather.map(({icon}) => weatherAssets.find(x => x.id === icon).icon)} alt="icon" />
                      <p className="forecast__item__temp">{Math.round(main.temp)}<span>&#176;</span></p>
                    </div>
                )
            }).slice(0,4)
            :
            <p>Inappropriate Response</p>
        }
      </div>
        
    </div>
);

export default Forecast;