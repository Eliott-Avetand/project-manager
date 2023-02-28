import styles from './Profilbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import defaultPicture from '@assets/Images/defaultPicture.png';

const Profilebar = () => {
    return (
        <nav className={styles.profilbar}>
            <div className={styles.profile}>
                <img src={defaultPicture} alt="User" />
                <h6>Soryoz</h6>
                <p>El Jefe Del Proyecto</p>
            </div>
            <button className={styles.edit}><FontAwesomeIcon icon={faPen} /></button>
        </nav>
    );
}

export default Profilebar;
