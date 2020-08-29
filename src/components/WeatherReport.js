import React from 'react';
import WeatherForecastList from './WeatherForecastList';
import SearchWeatherForecast from './SearchWeatherForecast';
import '../styles/report.scss';

const WeatherReport = (props) => {
    return (
        <div className="weather__report">
            <header className="weather__report__header">
                <h1 className="weather__report__title">Weather Forecast</h1>
                <SearchWeatherForecast/>
            </header>
            <main className="weather__report__main">
                <section className="weather__report__section">
                    <WeatherForecastList/>
                </section>
            </main>
        </div>
    );
}

export default WeatherReport;