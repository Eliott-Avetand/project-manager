import styles from './Navbar.module.scss';
import Day from '@assets/Images/Day_Logo.png';
import Arrow from '@assets/Images/Arrow_Black.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link to='/'><img src={Arrow} alt="Goes back" /></Link>
            <nav>
                <ul>
                    <Link to='/current-sprint'><li>Current Sprint</li></Link>
                    <Link to='/sprints'><li>Sprints</li></Link>
                    <Link to='/Admin'><li>Admin</li></Link>
                </ul>
            </nav>
            <div>
                <img src={Day} alt="Day Night Cycle" />
                <input type="submit" value="Se déconnecter" className={styles.button} />
            </div>
        </div>
    );
}

export default Navbar;
