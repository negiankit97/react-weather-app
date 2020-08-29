import {type} from '../constants/constants';
const intitialState = {
    weatherList: [],
    loading: false,
    error: false
}

const weatherReducer = (state=intitialState, action) => {
    switch(action.type){
        case type.FETCH_WEATHER_FORECAST:
            return {
                ...state, 
                weatherList: action.payload.weatherList,
                loading: false,
                error: false
            };
        case type.REQUEST_WEATHER_FORECAST:
            return {
                ...state,
                loading: action.payload.loading
            }
        case type.FAILED_WEATHER_FORECAST:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state; 
    }
}

export default weatherReducer;