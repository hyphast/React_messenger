import preloader from '../../../assets/images/preloader.gif'
import PreloaderStyles from './Preloader.module.css'

const Preloader = () => {
    return (
    <div className={PreloaderStyles.preloader}>
        <img src={preloader} alt="preloader"/>
    </div>)
}

export default Preloader;