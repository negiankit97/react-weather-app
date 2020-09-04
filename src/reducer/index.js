import { combineReducers } from "redux";
import forecastReducer from './forecastReducer';
import weatherReducer from "./weatherReducer";

export default combineReducers({
    forecast: forecastReducer,
    weather: weatherReducer
})