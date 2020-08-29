import React from 'react';
import '../styles/card.scss';

const icons = {
    Rain: `${process.env.PUBLIC_URL}/icons/rain.svg`,
    Clear: `${process.env.PUBLIC_URL}/icons/clearsky.svg`,
    Clouds: `${process.env.PUBLIC_URL}/icons/cloudy.svg`,
};

const WeatherCard = (props) => {
    const sunset = new Date(props.sunset * 1000).toLocaleTimeString(),
        sunrise = new Date(props.sunrise * 1000).toLocaleTimeString();
    return (
        <li className="weather__card">
            <article className="weather__card__details">
                <img src={icons[props.desc]} className="weather__card__details__icon" />
                <div className="weather__card__details__header">
                    <h1 className="weather__card__details__title">{props.desc}</h1>
                    <span className="weather__card__details__datetime">{props.date}</span>
                </div>
                <div className="weather__card__details__time">
                    <div className="weather__card__details__time__sunrise">
                        <img src={process.env.PUBLIC_URL + '/icons/sunrise.svg'} alt="sunrise" className="weather__card__details__time__sunrise__icon"></img>
                        <span className="weather__card__details__time__sunrise__title">Sunrise</span>
                        <h4 className="weather__card__details__time__sunrise__time">{sunrise}</h4>
                    </div>
                    <div className="weather__card__details__time__humidity">
                        <img src={process.env.PUBLIC_URL + '/icons/humidity.svg'} alt="humidity" className="weather__card__details__time__humidity__icon" />
                        <span className="weather__card__details__time__humidity__title">Humidity</span>
                        <h3 className="weather__card__details__time__humidity__">{props.humidity}%</h3>
                    </div>
                    <div className="weather__card__details__time__sunset">
                        <img src={process.env.PUBLIC_URL + '/icons/sunset.svg'} alt="sunset" className="weather__card__details__time__sunset__icon" />
                        <span className="weather__card__details__time__sunset__title">Sunset</span>
                        <h4 className="weather__card__details__time__sunset__time">{sunset}</h4>
                    </div>
                </div>
            </article>
        </li>
    );
}

export default WeatherCard;