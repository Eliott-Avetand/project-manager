import styles from './Home.module.scss';
import CurrentSprint from '@assets/Images/Current_Sprint_Logo.png';
import Sprint from '@assets/Images/Sprint_Logo.png';
import Day from '@assets/Images/Day_Logo.png';
import Admin from '@assets/Images/Admin_Logo.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from '@actions/users.actions';

const Home = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(userActions.logout());
    }

    return (
        <div className={styles.home}>
            <div className={styles.top}>
                <h2>Bienvenue, <strong>El Proyecto Del Jefe</strong></h2>
                <input type="submit" value="Déconnexion" className={styles.logout} onClick={logout} />
            </div>
            <div className={styles.dashboard}>
                <Link to='/current-sprint' className={styles.card}>
                    <img src={CurrentSprint} alt="The current sprint" />
                    <h3>Current Sprint</h3>
                    <p>Access directly the current sprint and all it’s card.</p>
                </Link>
                <Link to='/sprints' className={styles.card}>
                    <img src={Sprint} alt="All the sprints" />
                    <h3>Sprint</h3>
                    <p>See all previous sprint or create a new one.</p>
                </Link>
                <div className={styles.card}>
                    <img src={Day} alt="Day / Night Cycle" />
                    <h3>Day</h3>
                    <p>You are currently in light mode. Click to change to dark mode.</p>
                </div>
                <Link to='/admin' className={styles.card}>
                    <img src={Admin} alt="Admin panel" />
                    <h3>Admin</h3>
                    <p>The admin panel to handle every users.</p>
                </Link>
            </div>
        </div>
    );
}

export default Home;
