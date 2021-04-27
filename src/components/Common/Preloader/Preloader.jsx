import preloader from '../../../assets/images/preloader.gif'
import preloaderCss from './Preloader.module.css'

const Preloader = () => {
    return (
    <div className={preloaderCss.preloader}>
        <img src={preloader} alt="preloader"/>
    </div>)
}

export default Preloader;