import styles from './Sprints.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEye, faPen, faPlus, faSearch, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sprintActions } from '@actions/sprints.actions';
import { useEffect, useState } from 'react';
import moment from 'moment';
import defaultPicture from '@assets/Images/defaultPicture.png';

const Sprints = () => {
    const dispatch = useDispatch();
    const sprints = useSelector(state => state.sprintsReducer.sprints);
    const [isUpdate, setIsUpdate] = useState();
    const [updateSprintId, setUpdateSprintId] = useState();

    const isCurrent = (startDate, endDate) => {
        if (new Date(startDate).getTime() <= new Date().getTime() && new Date().getTime() <= new Date(endDate).getTime())
            return true;
        return false;
    }

    const deleteSprint = (name, id) => {
        dispatch(sprintActions.remove(name, id))
    }

    useEffect(() => {
        dispatch(sprintActions.getAll());
    }, [dispatch]);

    return (
        <div className={styles.sprints}>
            <div className={styles.searchBar}>
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" name="search" placeholder="Search sprints" />
            </div>
            <div className={styles.title}>
                <h2>Sprints</h2>
                <Link to='/create-sprint'>
                    <FontAwesomeIcon icon={faPlus} />
                    <p>Create sprint</p>
                </Link>
            </div>
            <div className={styles.sprints}>
                {
                    [...sprints].sort(sprint => isCurrent(sprint.startDate, sprint.endDate) ? -1 : 1).map((sprint, index) => {
                        const percentage = (new Date().getTime() - new Date(sprint.startDate).getTime()) / (new Date(sprint.endDate).getTime() - new Date(sprint.startDate).getTime()) * 100;

                        return (
                            <div key={index} className={styles.card}>
                                <div className={styles.tools}>
                                    <Link to={`/sprints/${sprint.id}`}><FontAwesomeIcon icon={faEye} /></Link>
                                    <Link to={`/update-sprint/${sprint.id}`}><FontAwesomeIcon icon={faPen} /></Link>
                                    <FontAwesomeIcon icon={faTrashCan} onClick={() => deleteSprint(sprint.title, sprint.id)} />
                                </div>
                                <h6>{sprint.title}</h6>
                                <div className={styles.time}>
                                    <div className={styles.date}>
                                        <p>Start: {moment(sprint.startDate).format("MMM Do YYYY")}</p>
                                        <FontAwesomeIcon icon={faCircle} />
                                        <p>End: {moment(sprint.endDate).format("MMM Do YYYY")}</p>
                                    </div>
                                    <div className={styles.progressBar}>
                                        <div className={`${styles.done} ${percentage < 0 ? styles.notStarted : percentage < 70 ? styles.progress : percentage < 100 ? styles.nearEnd : styles.finished}`} style={{ width: `${percentage}%` }}></div>
                                    </div>
                                    <p>
                                        {
                                            percentage < 0 ? 'Not yet started'
                                            : percentage < 70 ? 'In progress'
                                            : percentage < 100 ? 'Near end' : 'Finished'
                                        }
                                    </p>
                                </div>
                                <div className={styles.update}>
                                    <p>Last updated: {moment().format('Do MMMM YYYY')}</p>
                                    <img src={defaultPicture} alt="member" />
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Sprints;
