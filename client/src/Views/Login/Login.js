import styles from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from '@actions/users.actions';
import { useState } from 'react';

const Login = () => {
    const dispatch = useDispatch();

    const [seePasword, setSeePasword] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        const data = {
            email: email,
            password: password
        }

        dispatch(userActions.login(data));
    }

    return (
        <div className={styles.login}>
            <div className={styles.box}>
                <h1>Login</h1>
                <div className={styles.input}>
                    <h6>Pseudo</h6>
                    <FontAwesomeIcon icon={faUser} />
                    <input type="text" name="email" placeholder='Votre email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={styles.input}>
                    <h6>Mot de passe</h6>
                    <FontAwesomeIcon icon={faLock} />
                    <input type={ seePasword ? "text" : "password" } name="username" placeholder='Votre mot de passe' onChange={(e) => setPassword(e.target.value)} />
                    <FontAwesomeIcon icon={seePasword ? faEye : faEyeSlash} onClick={(e) => { setSeePasword(!seePasword); }}/>
                </div>
                <div className={styles.remember}>
                    <input type='checkbox' defaultChecked={true} />
                    <h6>Se souvenir de moi ?</h6>
                </div>
                <input type="submit" value="Se connecter" className={styles.button} onClick={handleLogin} />
                <Link to='/forgot-password'>Mot de passe oublié ?</Link>
            </div>
        </div>
    );
}

export default Login;
