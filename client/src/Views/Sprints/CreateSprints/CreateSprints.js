import { useDispatch, useSelector } from 'react-redux';
import { sprintActions } from '@actions/sprints.actions';
import styles from './CreateSprints.module.scss';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const CreateSprints = () => {
    const dispatch = useDispatch();
    const sprints = useSelector(state => state.sprintsReducer);

    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isSuccessful, setIsSuccessful] = useState(false);

    const createSprint = () => {
        const data = {
            title: title,
            startDate: startDate,
            endDate: endDate,
        }

        dispatch(sprintActions.create(data));
    }

    useEffect(() => {
        if (sprints.action === 'sprints/createSuccess') {
            dispatch(sprintActions.clearSuccess());
            setIsSuccessful(true);
        }
    }, [sprints, dispatch]);
    
    if (isSuccessful)
        return <Navigate to='/sprints' />

    return (
        <div className={styles.create}>
            <div className={styles.box}>
                <h1>Create a sprint</h1>
                <label>
                    Name
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    Start Date
                    <input type="date" onChange={(e) => setStartDate(e.target.value)} />
                </label>
                <label>
                    End Date
                    <input type="date" onChange={(e) => setEndDate(e.target.value)} />
                </label>
                <input type="submit" value="Create sprint" className={styles.button} onClick={createSprint} />
            </div>
        </div>
    );
}

export default CreateSprints;
