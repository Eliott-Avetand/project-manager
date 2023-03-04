import styles from './Admin.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '@actions/users.actions';
import moment from 'moment';
import defaultPicture from '@assets/Images/defaultPicture.png';

const Table = ({ users }) => {
    const dispatch = useDispatch();

    const deleteUser = (username, id) => {
        dispatch(userActions.remove(username, id));
    }

    return (
        <table>
            <thead>
                <tr>
                    <th><input type="checkbox" name="name" />Name</th>
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
                                <input type="checkbox" name="name" />
                                <img src={user.picture !== null ? URL.createObjectURL(new Blob([user.picture])) : defaultPicture} alt="profil" />
                                <div>
                                    <strong>{user.username}</strong>
                                    <p>{user.email}</p>
                                </div>
                            </td>
                            <td>{user.title}</td>
                            <td>{moment(new Date(user.created_at)).format('MMMM Do YYYY')}</td>
                            <td className={styles.role}>{user.role}</td>
                            <td>
                                <Link to={`/update-user/${user.id}`}><FontAwesomeIcon icon={faPen} /></Link>
                                <FontAwesomeIcon icon={faTrash} onClick={() => deleteUser(user.username, user.id)} />
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
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
