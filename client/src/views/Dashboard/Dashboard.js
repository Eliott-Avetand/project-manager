import styles from './Dashboard.module.scss';
import defaultPicture from '@assets/Images/defaultPicture.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { sprintActions } from '@actions/sprints.actions';
import { userActions } from '@actions/users.actions';
import moment from 'moment';

const Dashboard = () => {
    const dispatch = useDispatch();
    const sprintsReducer = useSelector(state => state.sprintsReducer);
    const user = useSelector(state => state.userReducer.userInfos);
    const currentSprint = useSelector(state => state.sprintsReducer.sprint);
    const [isCurrentSprint, setIsCurrentSprint] = useState(false);

    useEffect(() => {
        dispatch(sprintActions.getCurrent());
        dispatch(userActions.profil());
    }, [dispatch]);

    useEffect(() => {
        if (sprintsReducer.action === 'sprints/getCurrentSuccess')
            setIsCurrentSprint(true);
    }, [sprintsReducer, setIsCurrentSprint]);

    return (
        <div className={styles.home}>
            <div className={styles.infos}>
                <div>
                {
                    isCurrentSprint
                    ? <>
                        <h2>{currentSprint.title}</h2>
                        <i>From <strong>{moment(new Date(currentSprint.startDate)).format('MMMM Do YYYY')}</strong> to <strong>{moment(new Date(currentSprint.endDate)).format('MMMM Do YYYY')}</strong></i>
                    </>
                    : <h2>There is no current sprint</h2>
                }
                </div>
                <p>{user.username}</p>
            </div>
            {
                isCurrentSprint
                ? <><div className={styles.cards}>
                    <div>
                        <h4>Current sprint’s cards</h4>
                        <p>All cards of the current sprint</p>
                    </div>
                    <Link to={isCurrentSprint ? `/sprints/${currentSprint.id}` : '/dashboard'} state={currentSprint}>View cards</Link>
                </div>
                <div className={styles.cardsInfos}>
                    <div className={styles.number}>
                        <h4>Number of cards</h4>
                        <p>{currentSprint.cards?.length ?? 0} cards created</p>
                    </div>
                    <div className={styles.time}>
                        <h4>Time left</h4>
                        <p>
                            {
                                isCurrentSprint
                                ? moment(new Date(currentSprint.endDate)).endOf('day').fromNow()
                                : moment().fromNow()
                            }
                        </p>
                    </div>
                </div></>
                : <Link to='/sprints' className={styles.noSprint}>Create a sprint</Link>
            }
        </div>
    );
}

export default Dashboard;
