import styles from './Sprints.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sprintActions } from '@actions/sprints.actions';
import { useEffect, useState } from 'react';
import moment from 'moment';

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

    const updateSprint = (id) => {
        setIsUpdate(true);
        setUpdateSprintId(id);
    }

    const deleteSprint = (id) => {
        dispatch(sprintActions.remove(id))
    }

    useEffect(() => {
        dispatch(sprintActions.getAll());
    }, [dispatch]);

    if (isUpdate)
        return <Navigate to={`/update-sprint/${updateSprintId}`} />

    return (
        <div className={styles.sprints}>
            <div className={styles.title}>
                <h2>All Sprints Archived</h2>
                <div>
                    <FontAwesomeIcon icon={faPlus} />
                    <Link to='/create-sprint'>Créer un nouveau sprint</Link>
                </div>
            </div>
            <div className={styles.sprints}>
                {
                    [...sprints].sort(sprint => isCurrent(sprint.startDate, sprint.endDate) ? -1 : 1).map((sprint, index) => {
                        return (
                            <div key={index} className={`${styles.card} ${isCurrent(sprint.startDate, sprint.endDate) ? styles.current : styles.passed}`}>
                                <FontAwesomeIcon icon={faPen} onClick={() => updateSprint(sprint.id)}  />
                                <FontAwesomeIcon icon={faTrashCan} onClick={() => deleteSprint(sprint.id)} />
                                <h6>{sprint.title}</h6>
                                <p>From {moment(sprint.startDate).format('Do MMMM YYYY')} to {moment(sprint.endDate).format('Do MMMM YYYY')} ({moment(sprint.endDate).fromNow()})</p>
                                <div className={styles.infos}>
                                    <p className={isCurrent(sprint.startDate, sprint.endDate) ? styles.current : styles.passed}>{isCurrent(sprint.startDate, sprint.endDate) ? "Current" : "Passed"}</p>
                                    <Link to={`${sprint.id}`} className={styles.seeMore}>See more</Link>
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
