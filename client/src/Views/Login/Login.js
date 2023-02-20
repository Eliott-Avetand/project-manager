import styles from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [seePasword, setSeePasword] = useState(false);

    return (
        <div className={styles.login}>
            <div className={styles.box}>
                <h1>Login</h1>
                <div className={styles.input}>
                    <h6>Pseudo</h6>
                    <FontAwesomeIcon icon={faUser} />
                    <input type="text" name="username" placeholder='Votre pseudo' />
                </div>
                <div className={styles.input}>
                    <h6>Mot de passe</h6>
                    <FontAwesomeIcon icon={faLock} />
                    <input type={ seePasword ? "text" : "password" } name="username" placeholder='Votre mot de passe' />
                    <FontAwesomeIcon icon={seePasword ? faEye : faEyeSlash} onClick={(e) => { setSeePasword(!seePasword); }}/>
                </div>
                <div className={styles.remember}>
                    <input type='checkbox' defaultChecked={true} />
                    <h6>Se souvenir de moi ?</h6>
                </div>
                <input type="submit" value="Se connecter" className={styles.button} />
                <Link to='/forgot-password'>Mot de passe oublié ?</Link>
            </div>
        </div>
    );
}

export default Login;
