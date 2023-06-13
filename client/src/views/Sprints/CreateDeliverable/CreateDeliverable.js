import { useDispatch, useSelector } from 'react-redux';
import { deliverableActions } from '@actions/deliverables.actions';
import styles from './CreateDeliverable.module.scss';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const CreateDeliverable = () => {
    const dispatch = useDispatch();
    const deliverables = useSelector(state => state.deliverablesReducer);

    const [title, setTitle] = useState('');
    const [isSuccessful, setIsSuccessful] = useState(false);

    const createDeliverable = (e) => {
        e.preventDefault();

        const data = {
            name: title
        }

        dispatch(deliverableActions.create(data));
    }

    useEffect(() => {
        if (deliverables.action === 'deliverables/createSuccess') {
            dispatch(deliverableActions.clearSuccess());
            setIsSuccessful(true);
        }
    }, [deliverables, dispatch]);
    
    if (isSuccessful)
        return <Navigate to='/sprints' />

    return (
        <div className={styles.create}>
            <form className={styles.box}>
                <h1>Create a deliverable</h1>
                <label>
                    Name
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                </label>
                <input type="submit" value="Create deliverable" className={styles.button} onClick={createDeliverable} />
            </form>
        </div>
    );
}

export default CreateDeliverable;
