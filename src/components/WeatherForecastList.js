import React from 'react';
import WeatherCard from './WeatherCard';
import { connect } from 'react-redux';
import '../styles/forecast.scss';
import LazyLoad from 'react-lazyload';
import Loader from './Loader';

const WeatherForecastList = (props) => {
    return (
        <ul className="weather__report__list">
            {props.isLoading && <Loader/>}
            {props.isError  && <div className="error-alert">No result found.</div>}
            {props.weatherList.length !== 0 && props.weatherList.list.map((report, index) =>
                <LazyLoad height={200} placeholder={<Loader/>}><WeatherCard key={index} desc={report.weather[0].main} humidity={report.main.humidity} sunrise={props.weatherList.city.sunrise} sunset={props.weatherList.city.sunset} date={report.dt_txt}/></LazyLoad>)}
        </ul>
    );
}

const mapStateToProps = (state) => ({
    weatherList: state.weather.weatherList,
    isLoading: state.weather.loading,
    isError: state.weather.error
});

export default connect(mapStateToProps, null)(WeatherForecastList);