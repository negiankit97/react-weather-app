import { type } from '../constants/constants';
const intitialState = {
    weatherList: null,
    loading: false,
    error: false
}

const weatherReducer = (state = intitialState, action) => {
    switch (action.type) {
        case type.FETCH_CURRENT_WEATHER:
            return {
                ...state,
                weatherList: action.payload.weatherList,
                loading: false,
                error: false
            };
        case type.REQUEST_CURRENT_WEATHER:
            return {
                ...state,
                loading: action.payload.loading
            }
        case type.FAILED_CURRENT_WEATHER:
            return {
                ...state,
                weatherList: null,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}

export default weatherReducer;