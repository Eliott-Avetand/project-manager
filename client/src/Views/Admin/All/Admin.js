import styles from './Admin.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import Image from '@assets/Images/Admin_Logo.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '@actions/users.actions';

const Admin = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.userReducer.users);

    useEffect(() => {
        dispatch(userActions.getAll());
    }, [dispatch]);

    return (
        <div className={styles.admin}>
            <div className={styles.title}>
                <h2>Admin panel</h2>
                <Link to='/create-user'>
                    <FontAwesomeIcon icon={faPlus} />
                    <h6>Créer un nouvel utilisateur</h6>
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nom + Titre</th>
                        <th>Rôle</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return <tr key={index}>
                                <td><div>
                                    <strong>{user.username}</strong>
                                    <p>{user.title}</p>
                                </div></td>
                                <td>
                                    <select defaultValue={user.role}>
                                        <option value='viewer'>Viewer</option>    
                                        <option value='user'>User</option>    
                                        <option value='admin'>Admin</option>    
                                    </select>
                                </td>
                                <td><FontAwesomeIcon icon={faEllipsis} /></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Admin;
