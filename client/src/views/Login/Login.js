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
    const [tryConnect, setTryConnect] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);

    const validEmail = new RegExp(/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/);
    const validPassword = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

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

        setTryConnect(true);
        setEmailErr(!validEmail.test(email));
        if (email.trim() !== '' && password.trim() !== '' && !emailErr)
            dispatch(userActions.login(data));
    }

    const handlePassword = (e) => {
        setPasswordErr(!validPassword.test(e.target.value));
        setPassword(e.target.value);
    }

    const handleEmail = (e) => {
        setEmailErr(!validEmail.test(e.target.value));
        setEmail(e.target.value);
    }

    if (isLogin)
        return <Navigate to='/dashboard' />

    return (
        <div className={styles.login}>
            <form className={styles.box}>
                <h1>Sign In</h1>
                <label htmlFor='email'>Email
                    <div className={styles.input}>
                        <FontAwesomeIcon icon={faUser} />
                        <input type="text" name="email" placeholder='Your email' onChange={handleEmail} />
                    </div>
                    { tryConnect && email.trim() === '' ? <i className={styles.error}>Email must not be empty</i> :
                    emailErr ? <i className={styles.error}>Email is invalid</i> : <></> }
                </label>
                <label htmlFor='password'>Password
                    <div className={styles.input}>
                        <FontAwesomeIcon icon={faLock} />
                        <input type={ seePasword ? "text" : "password" } name="password" placeholder='Your password' onChange={handlePassword} />
                        <FontAwesomeIcon icon={seePasword ? faEye : faEyeSlash} onClick={(e) => { setSeePasword(!seePasword); }}/>
                    </div>
                    { passwordErr && password.trim() !== '' ? <i className={styles.error}>Password must contain at least 8 character, with one letter and one number</i> : <></> } 
                    { tryConnect && password.trim() === '' ? <i className={styles.error}>Password must not be empty</i> : <></> }
                </label>
                <div className={styles.remember}>
                    <input type='checkbox' name='remember' defaultChecked={true} />
                    <label htmlFor='remember'>Remember me ?</label>
                </div>
                <input type="submit" value="Sign In" className={styles.button} onClick={handleLogin} />
                <Link to='#'>Forgot password ?</Link>
            </form>
        </div>
    );
}

export default Login;
