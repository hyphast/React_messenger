import React from "react";
import preloader from '../../../assets/images/preloader.gif';
import PreloaderStyles from './Preloader.module.scss';

const Preloader = () => {
    return (
    <div className={PreloaderStyles.preloader}>
        <img src={preloader} alt="preloader"/>
    </div>
    )
}

export default Preloader;