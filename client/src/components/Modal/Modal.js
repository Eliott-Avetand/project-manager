import { useEffect } from 'react';
import styles from './Modal.module.scss';

const Modal = ({ title, content, footer, display }) => {
    useEffect(() => {
        window.addEventListener('click', (e) => {
            if (e.target.className === styles.wrapper)
                display(false);
        })
    }, [display]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.modal}>
                <h1>{title}</h1>
                <p>{content}</p>
                <i>{footer}</i>
            </div>
        </div>
    );
}

export default Modal;
