import styles from './Sidebar.module.scss';
import Logo from '@assets/Images/logo.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from '@actions/users.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faGear, faRightFromBracket, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import ThemeContext from '@styles/ThemeContext';
import { useContext } from 'react';

const Sidebar = () => {
    const dispatch = useDispatch();
    const { toggleDark } = useContext(ThemeContext);

    const logout = () => {
        dispatch(userActions.logout());
    }

    return (
        <nav className={styles.sidebar}>
            <div>
                <div className={styles.logo}>
                    <img src={Logo} alt="Loustik Studio" />
                    <h1>Project Manager</h1>
                </div>
                <ul className={styles.items}>
                    <Link to='/dashboard'><li className={styles.active}><FontAwesomeIcon icon={faChartSimple} />Dashboard</li></Link>
                    <Link to='/sprints'><li><FontAwesomeIcon icon={faCalendarCheck} />Sprints</li></Link>
                    <Link to='/admin-panel'><li><FontAwesomeIcon icon={faUsers} />Admin Panel</li></Link>
                    <Link to='/dashboard' onClick={toggleDark}><li><FontAwesomeIcon icon={faGear} />Settings</li></Link>
                </ul>
            </div>
            <button className={styles.logout} onClick={logout}><FontAwesomeIcon icon={faRightFromBracket} />Log out</button>
        </nav>
    );
}

export default Sidebar;
