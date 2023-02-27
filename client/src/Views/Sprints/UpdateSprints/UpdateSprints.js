import { useDispatch, useSelector } from 'react-redux';
import { sprintActions } from '@actions/sprints.actions';
import styles from './UpdateSprints.module.scss';
import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

const UpdateSprints = () => {
    const dispatch = useDispatch();
    const sprintsReducer = useSelector(state => state.sprintsReducer);
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isSuccessful, setIsSuccessful] = useState(false);

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    useEffect(() => {
        dispatch(sprintActions.getOne(id));
    }, [dispatch, id]);
    
    useEffect(() => {
        if (sprintsReducer.action === 'sprints/updateSuccess') {
            dispatch(sprintActions.clearSuccess());
            setIsSuccessful(true);
            return;
        } else if (sprintsReducer.action === 'sprints/getOneSuccess') {
            setTitle(sprintsReducer.sprint.title);
            setStartDate(formatDate(sprintsReducer.sprint.startDate));
            setEndDate(formatDate(sprintsReducer.sprint.endDate));
        }
    }, [sprintsReducer, dispatch]);

    const updateSprint = () => {
        const data = {
            title: title,
            startDate: startDate,
            endDate: endDate,
        }

        dispatch(sprintActions.update(data, id));
    }
    
    if (isSuccessful)
        return <Navigate to='/sprints' />

    return (
        <div className={styles.create}>
            <div className={styles.box}>
                <h1>Update the sprint</h1>
                <label>
                    Name
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    Start Date
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </label>
                <label>
                    End Date
                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </label>
                <input type="submit" value="Update sprint" className={styles.button} onClick={updateSprint} />
            </div>
        </div>
    );
}

export default UpdateSprints;
