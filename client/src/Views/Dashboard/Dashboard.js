import styles from './Dashboard.module.scss';
import defaultPicture from '@assets/Images/defaultPicture.png';
import { Link } from 'react-router-dom';
import Profilebar from '@components/Profilebar/Profilebar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { sprintActions } from '@actions/sprints.actions';
import { userActions } from '@actions/users.actions';
import moment from 'moment';

const Dashboard = () => {
    const dispatch = useDispatch();
    const sprintsReducer = useSelector(state => state.sprintsReducer);
    const userId = useSelector(state => state.userReducer.userInfos.id);
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
            <div className={styles.current}>
                <div className={styles.infos}>
                    <h3>Current Sprint</h3>
                    {
                        isCurrentSprint
                        ? <i>From <strong>{moment(new Date(currentSprint.startDate)).format('MMMM Do YYYY')}</strong> to <strong>{moment(new Date(currentSprint.endDate)).format('MMMM Do YYYY')}</strong></i>
                        : <i>From <strong>{moment().format('MMMM Do YYYY')}</strong> to <strong>{moment().format('MMMM Do YYYY')}</strong></i>
                    }
                </div>
                <h2>
                    {
                        isCurrentSprint
                        ? currentSprint.title
                        : 'There is no current sprint'
                    }
                </h2>
                {
                    isCurrentSprint
                    ? <div className={styles.update}>
                        <div className={styles.profile}>
                            <img src={defaultPicture} alt="user" />
                            <p>Soryoz</p>
                        </div>
                        <div className={styles.date}>
                            <p>Last update</p>
                            <p>13:30 June 14th, 2023</p>
                        </div>
                    </div>
                    : <></>
                }
                <div className={styles.cards}>
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
                </div>
            </div>
            <div className={styles.personal}>
                <div className={styles.updates}>
                    <h3>Your last updates</h3>
                    <div className={styles.card}>
                        <i className={styles.time}>2d</i>
                        <div>
                            <i className={styles.id}>CardID</i>
                            <h6>Name of the card</h6>
                        </div>
                        <div>
                            <p>Updated</p>
                            <Link to='/dashboard'>view more</Link>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <i className={styles.time}>2d</i>
                        <div>
                            <i className={styles.id}>CardID</i>
                            <h6>Name of the card</h6>
                        </div>
                        <div>
                            <p>Updated</p>
                            <Link to='/dashboard'>view more</Link>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <i className={styles.time}>2d</i>
                        <div>
                            <i className={styles.id}>CardID</i>
                            <h6>Name of the card</h6>
                        </div>
                        <div>
                            <p>Updated</p>
                            <Link to='/dashboard'>view more</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.statistics}>
                    <h3>Your account</h3>
                    <p>Some stats about you</p>
                    <div className={styles.statBlocs}>
                        <div className={styles.bloc}>
                            <div className={styles.visual}></div>
                            <div className={styles.info}>
                                <h6>Task done</h6>
                                <p>36 tasks finished</p>
                            </div>
                        </div>
                        <div className={styles.bloc}>
                            <div className={styles.visual}></div>
                            <div className={styles.info}>
                                <h6>Task done</h6>
                                <p>36 tasks finished</p>
                            </div>
                        </div>
                        <div className={styles.bloc}>
                            <div className={styles.visual}></div>
                            <div className={styles.info}>
                                <h6>Task done</h6>
                                <p>36 tasks finished</p>
                            </div>
                        </div>
                        <div className={styles.bloc}>
                            <div className={styles.visual}></div>
                            <div className={styles.info}>
                                <h6>Task done</h6>
                                <p>36 tasks finished</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Profilebar userId={userId} />
        </div>
    );
}

export default Dashboard;
