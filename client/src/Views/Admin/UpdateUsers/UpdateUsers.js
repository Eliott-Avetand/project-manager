import styles from './UpdateUsers.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '@actions/users.actions';
import { Navigate, useParams } from 'react-router-dom';

const UpdateUsers = () => {
    const dispatch = useDispatch();
    const userReducer = useSelector(state => state.userReducer);
    const { id } = useParams();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [role, setRole] = useState('user');
    const [isSuccessful, setIsSuccessful] = useState(false);

    const updateUser = (e) => {
        e.preventDefault();

        const data = {
            username: username,
            role: role,
            title: title,
            email: email,
        }

        dispatch(userActions.update(data, id));
    }

    useEffect(() => {
        dispatch(userActions.getOne(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (userReducer.action === 'user/updateSuccess') {
            dispatch(userActions.clearSuccess());
            setIsSuccessful(true);
            return;
        } else if (userReducer.action === 'user/getOneSuccess') {
            setUsername(userReducer.user.username);
            setEmail(userReducer.user.email);
            setTitle(userReducer.user.title);
            setRole(userReducer.user.role);
        }
    }, [userReducer, setIsSuccessful]);
    
    if (isSuccessful)
        return <Navigate to='/admin-panel' />

    return (
        <div className={styles.update}>
            <form className={styles.box}>
                <h1>Update user</h1>
                <label>
                    Nom
                    <input type="text" placeholder='John' value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Email
                    <input type="text" placeholder='example@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Titre
                    <input type="text" placeholder="L'ingénieur" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    Rôle
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="viewer">Viewer</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
                <input type="submit" value="Update user" className={styles.button} onClick={updateUser} />
            </form>
        </div>
    );
}

export default UpdateUsers;
