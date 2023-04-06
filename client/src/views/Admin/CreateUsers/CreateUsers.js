import styles from './CreateUsers.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '@actions/users.actions';
import { Navigate } from 'react-router-dom';

const CreateUsers = () => {
    const dispatch = useDispatch();
    const userReducer = useSelector(state => state.userReducer);
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState(false);
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

        if (!emailErr)
            dispatch(userActions.create(data));
    }

    const handleEmail = (e) => {
        if (!validEmail.test(e.target.value))
            setEmailErr(true);
        else
            setEmailErr(false);
        setEmail(e.target.value)
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
                    { username === '' ? <i className={styles.error}>Field must not be empty</i> : <></> }
                </label>
                <label>
                    Email
                    <input type="text" placeholder='example@gmail.com' value={email} onChange={handleEmail} />
                    { email === '' ? <i className={styles.error}>Field must not be empty</i> : 
                    emailErr ? <i className={styles.error}>Invalid email provided.</i> : <></> }
                </label>
                <label>
                    Title
                    <input type="text" placeholder="L'ingénieur" value={title} onChange={(e) => setTitle(e.target.value)} />
                    { title === '' ? <i className={styles.error}>Field must not be empty</i> : <></> }
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
