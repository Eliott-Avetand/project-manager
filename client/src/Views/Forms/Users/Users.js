import styles from './Users.module.scss';
import Admin from '@assets/Images/Admin_Logo.png';

const Users = () => {
    return (
        <div className={styles.users}>
            <div className={styles.box}>
                <h1>Nouvel Utilisateur</h1>
                <div className={styles.upload}>
                    <img src={Admin} alt="User's pp" />
                    <input type="submit" value="UPLOAD" />
                </div>
                <label>
                    Nom
                    <input type="text" placeholder='John' />
                </label>
                <label>
                    Email
                    <input type="text" placeholder='example@gmail.com' />
                </label>
                <label>
                    Titre
                    <input type="text" placeholder="L'ingénieur" />
                </label>
                <label>
                    Rôle
                    <select>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
                <input type="submit" value="Créer un utilisateur" className={styles.button} />
            </div>
        </div>
    );
}

export default Users;
