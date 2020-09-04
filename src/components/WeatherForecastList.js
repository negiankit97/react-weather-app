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
            {props.forecastList.length !== 0 && props.forecastList.list.map((report, index) => {
                return (
                    <LazyLoad key={index} height={200} offset={100} throttle={2} placeholder={<Loader/>}>
                        <WeatherCard 
                        key={index}
                        desc={report.weather[0].main}
                        humidity={report.main.humidity}
                        sunrise={props.forecastList.city.sunrise}
                        sunset={props.forecastList.city.sunset}
                        date={report.dt_txt}
                        feels_like={report.main.feels_like}
                        mintemp={report.main.temp_min}
                        maxtemp={report.main.temp_max}/>
                    </LazyLoad>)}
                )
            }
        </ul>
    );
}

const mapStateToProps = (state) => ({
    forecastList: state.forecast.forecastList,
    isLoading: state.forecast.loading,
    isError: state.forecast.error
});

export default connect(mapStateToProps, null)(WeatherForecastList);