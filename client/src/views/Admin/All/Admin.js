import styles from './Admin.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faTrash, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '@actions/users.actions';
import Modal from '@components/Modal/Modal';

const Table = ({ users }) => {
    const dispatch = useDispatch();
    const [displayPassword, setDisplayPassword] = useState(false);
    const [password, setPassword] = useState('');

    const deleteUser = (username, id) => {
        dispatch(userActions.remove(username, id));
    }

    const generatePassword = (id) => {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let numbers = '0123456789';

        for (let i = 0; i < 12; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        for (let i = 0; i < 2; i++) {
            result += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        setDisplayPassword(true);
        setPassword(result);
        dispatch(userActions.update(result, id));
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Creation date</th>
                        <th>Role</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return <tr key={index}>
                                <td>
                                    <div>
                                        <strong>{user.username}</strong>
                                        <p>{user.email}</p>
                                    </div>
                                </td>
                                <td>{user.title}</td>
                                <td className={styles.role}>{user.role}</td>
                                <td>
                                    <Link to={`/update-user/${user.id}`}><FontAwesomeIcon icon={faPen} /></Link>
                                    <FontAwesomeIcon icon={faTrash} onClick={() => deleteUser(user.username, user.id)} />
                                    <FontAwesomeIcon icon={faLock} onClick={() => generatePassword(user.id)} />
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            { displayPassword ?
                <Modal
                    display={setDisplayPassword}
                    title="Password successfully generated!"
                    footer={<input type="submit" value="Ok" onClick={() => setDisplayPassword(false)} />}
                    content={<>The password is now: <strong>{password}</strong></>}
                />
            : <></> }
        </>
    )
}

const Admin = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.userReducer.users);

    useEffect(() => {
        dispatch(userActions.getAll());
    }, [dispatch]);

    return (
        <div className={styles.admin}>
            <div className={styles.title}>
                <div>
                    <h2>Team members</h2>
                    <p>Manage your team members and their account permissions here.</p>
                </div>
                <Link to='/create-user'><FontAwesomeIcon icon={faPlus} />Create user</Link>
            </div>
            <Table users={users} />
        </div>
    );
}

export default Admin;
