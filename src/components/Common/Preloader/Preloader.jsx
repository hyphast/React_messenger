import React from "react";
import PreloaderStyles from './Preloader.module.scss';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Icon from "../Icon/Icon";

const Preloader = () => {
    return (
        <Icon className={PreloaderStyles.preloader} name={faSpinner} spin size='2x' alt="preloader"/>
    )
}

export default Preloader;
