import styles from './Profilbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import defaultPicture from '@assets/Images/defaultPicture.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userActions } from '@actions/users.actions';

const Profilebar = ({ userId }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer.userInfos)

    useEffect(() => {
        // if (userId)
        //     dispatch(userActions.getProfilePicture(userId));
    }, [dispatch, userId]);

    return (
        <nav className={styles.profilbar}>
            <div className={styles.profile}>
                <div className={styles.picture}>
                    <img src={user.picture instanceof Blob ? URL.createObjectURL(user.picture) : defaultPicture} alt="User" />
                    <FontAwesomeIcon icon={faPen} />
                </div>
                <h6>{ user.username ?? 'Anonymous' }</h6>
                <p>{ user.title ?? 'Anonym\'s hacker' }</p>
            </div>
            <button className={styles.edit}><FontAwesomeIcon icon={faPen} /></button>
        </nav>
    );
}

export default Profilebar;
