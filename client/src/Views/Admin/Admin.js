import styles from './Admin.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import Image from '@assets/Images/Admin_Logo.png';
import { Link } from 'react-router-dom';

const Admin = () => {
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
                        <th>Photo de profil</th>
                        <th>Nom + Titre</th>
                        <th>Rôle</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={Image} alt="Admin Tmp" /></td>
                        <td><div>
                            <strong>Eliott</strong>
                            <p>El proyecto Del Jefe</p>
                        </div></td>
                        <td>Admin</td>
                        <td><FontAwesomeIcon icon={faEllipsis} /></td>
                    </tr>
                    <tr>
                        <td><img src={Image} alt="Admin Tmp" /></td>
                        <td><div>
                            <strong>Eliott</strong>
                            <p>El proyecto Del Jefe</p>
                        </div></td>
                        <td>Admin</td>
                        <td><FontAwesomeIcon icon={faEllipsis} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Admin;
