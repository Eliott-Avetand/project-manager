import styles from './CreateUsers.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '@actions/users.actions';
import { Navigate } from 'react-router-dom';

const CreateUsers = () => {
    const dispatch = useDispatch();
    const userReducer = useSelector(state => state.userReducer);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [role, setRole] = useState('user');
    const [isSuccessful, setIsSuccessful] = useState(false);

    const createUser = (e) => {
        e.preventDefault();

        const data = {
            username: username,
            role: role,
            title: title,
            email: email,
        }

        dispatch(userActions.create(data));
    }

    useEffect(() => {
        if (userReducer.action === 'user/createSuccess') {
            dispatch(userActions.clearSuccess());
            setIsSuccessful(true);
            return;
        }
    }, [userReducer, setIsSuccessful]);
    
    if (isSuccessful)
        return <Navigate to='/admin-panel' />

    return (
        <div className={styles.create}>
            <form className={styles.box}>
                <h1>Create user</h1>
                <label>
                    Name
                    <input type="text" placeholder='John' value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Email
                    <input type="text" placeholder='example@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Title
                    <input type="text" placeholder="L'ingénieur" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    Role
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="viewer">Viewer</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
                <input type="submit" value="Create user" className={styles.button} onClick={createUser} />
            </form>
        </div>
    );
}

export default CreateUsers;
