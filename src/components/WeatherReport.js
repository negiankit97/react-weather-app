import React from 'react';
import WeatherForecastList from './WeatherForecastList';
import SearchWeatherForecast from './SearchWeatherForecast';
import '../styles/report.scss';
import { Link } from 'react-router-dom';

const WeatherReport = (props) => {
    return (
        <div className="weather__report">
            <header className="weather__report__header">
                <h1 className="weather__report__title">Weather Forecast</h1>
                <nav className="weather__report__nav">
                    <ul className="weather__report__nav__list">
                        <li className="weather__report__nav__list__item"><Link to={{ pathname: '/weather' }} state={{ from: props.location }}>Current Weather Data</Link></li>
                        <li className="weather__report__nav__list__item"><Link to={{ pathname: '/4day' }} state={{ from: props.location }}>4 Day Forecast</Link></li>
                        <li className="weather__report__nav__list__item"><Link to={{ pathname: '/16day' }} state={{ from: props.location }}>16 Day Forecast</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="weather__report__main">
                <section className="weather__report__section">
                    <SearchWeatherForecast />
                    <WeatherForecastList />
                </section>
            </main>
        </div>
    );
}

export default WeatherReport;