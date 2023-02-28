import styles from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '@actions/users.actions';
import { useEffect, useState } from 'react';

const Login = () => {
    const dispatch = useDispatch();
    const action = useSelector(state => state.userReducer.action);

    const [seePasword, setSeePasword] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (action === 'user/loginSuccess')
            setIsLogin(true);
    }, [dispatch, setIsLogin, action]);

    const handleLogin = (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        }

        dispatch(userActions.login(data));
    }

    if (isLogin)
        return <Navigate to='/' />

    return (
        <div className={styles.login}>
            <form className={styles.box}>
                <h1>Sign In</h1>
                <div className={styles.input}>
                    <label htmlFor='email'>Email</label>
                    <FontAwesomeIcon icon={faUser} />
                    <input type="text" name="email" placeholder='Your email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={styles.input}>
                    <label htmlFor='password'>Password</label>
                    <FontAwesomeIcon icon={faLock} />
                    <input type={ seePasword ? "text" : "password" } name="password" placeholder='Your password' onChange={(e) => setPassword(e.target.value)} />
                    <FontAwesomeIcon icon={seePasword ? faEye : faEyeSlash} onClick={(e) => { setSeePasword(!seePasword); }}/>
                </div>
                <div className={styles.remember}>
                    <input type='checkbox' name='remember' defaultChecked={true} />
                    <label htmlFor='remember'>Remember me ?</label>
                </div>
                <input type="submit" value="Sign In" className={styles.button} onClick={handleLogin} />
                <Link to='/forgot-password'>Forgot password ?</Link>
            </form>
        </div>
    );
}

export default Login;
