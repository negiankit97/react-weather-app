import React, { useState } from 'react';
import {actions} from '../actions/index';
import '../styles/search.scss';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

const SearchWeatherForecast = (props) => {
    const [city, setCity] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.fetchWeather(city);
        setCity('');
    }
    function handleChange(e) {
        setCity(e.target.value);
    }
    return (
        <div className="search__weather">
            <form className="search__weather__form" onSubmit={(e) => handleSubmit(e)}>
                <div className="search__weather__form__group">
                    <div className="form__control">
                        <label htmlFor="city" className="label">City</label>
                        <input type="text" onChange={(e) => handleChange(e)} name="city" className="input"/>
                    </div>
                    <button type="submit" className="submit__btn">Submit</button>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchWeather: actions.fetchWeather
}, dispatch);
export default connect(null, mapDispatchToProps)(SearchWeatherForecast);