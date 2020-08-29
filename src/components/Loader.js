import React from 'react';
import {FaSpinner} from 'react-icons/fa';
import '../styles/loader.scss';

const Loader = (props) => {
    return (
        <div className="loader">
            <FaSpinner className="loader__icon"/>
        </div>
    );
};

export default Loader;