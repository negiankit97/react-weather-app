import { type } from '../constants/constants';
import axios from 'axios';

export const actions = {
    fetchWeather,
    fetchCurrentWeather
};

function fetchWeather(cityname) {
    console.log('fetchWeather');
    return (dispatch) => {
        dispatch(request());
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.data)
            .then((weatherList) => {
                console.log('ForecastList is' + weatherList);
                dispatch(success(weatherList));
            })
            .catch((err) => {
                dispatch(failure(err));
            })
    }
    function success(weatherList) {
        return {
            type: type.FETCH_WEATHER_FORECAST,
            payload: {
                weatherList: weatherList
            }
        }
    }

    function request() {
        return {
            type: type.REQUEST_WEATHER_FORECAST,
            payload: {
                loading: true
            }
        }
    }

    function failure() {
        return {
            type: type.FAILED_WEATHER_FORECAST,
            payload: {
                error: true
            }
        }
    }
}

function fetchCurrentWeather(cityname) {
    console.log('fetchCurrentWeather');
    return (dispatch) => {
        dispatch(request());
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.data)
            .then((weatherList) => {
                console.log('weatherList is' + JSON.stringify(weatherList));
                dispatch(success(weatherList));
            })
            .catch((err) => {
                dispatch(failure(err));
            })
    }
    function success(weatherList) {
        return {
            type: type.FETCH_CURRENT_WEATHER,
            payload: {
                weatherList: weatherList
            }
        }
    }

    function request() {
        return {
            type: type.REQUEST_CURRENT_WEATHER,
            payload: {
                loading: true
            }
        }
    }

    function failure() {
        return {
            type: type.FAILED_CURRENT_WEATHER,
            payload: {
                error: true
            }
        }
    }
}
