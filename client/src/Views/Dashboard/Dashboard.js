import styles from './Dashboard.module.scss';
import defaultPicture from '@assets/Images/defaultPicture.png';
import { Link } from 'react-router-dom';
import Profilebar from '@components/Profilebar/Profilebar';

const Dashboard = () => {
    return (
        <div className={styles.home}>
            <div className={styles.current}>
                <div className={styles.infos}>
                    <h3>Current Sprint</h3>
                    <i>From June 14th, 2023 To August 30th, 2023</i>
                </div>
                <h2>Nom du sprint en cours</h2>
                <div className={styles.update}>
                    <div className={styles.profile}>
                        <img src={defaultPicture} alt="user" />
                        <p>Soryoz</p>
                    </div>
                    <div className={styles.date}>
                        <p>Last update</p>
                        <p>13:30 June 14th, 2023</p>
                    </div>
                </div>
                <div className={styles.cards}>
                    <div>
                        <h4>Current sprint’s cards</h4>
                        <p>All cards of the current sprint</p>
                    </div>
                    <Link to='/sprints/1/cards'>View cards</Link>
                </div>
                <div className={styles.cardsInfos}>
                    <div className={styles.number}>
                        <h4>Number of cards</h4>
                        <p>36 cards created</p>
                    </div>
                    <div className={styles.time}>
                        <h4>Time left</h4>
                        <p>10 days left</p>
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
            <Profilebar />
        </div>
    );
}

export default Dashboard;
