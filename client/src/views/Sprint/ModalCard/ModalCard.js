import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ModalCard.module.scss';
import defaultPicture from '@assets/Images/defaultPicture.png';
import { cardActions } from '@actions/cards.actions';

const ModalCard = ({ isOpen, onRequestClose, card }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains(`${styles.modal}`))
                onRequestClose();
        })
    }, []);

    if (!isOpen)
        return <></>

    const changeTaskStatus = (taskId, task) => {
        const newTask = { description: task.description, done: !task.done };

        dispatch(cardActions.updateTask(taskId, newTask));
    }

    return (<div className={styles.modal}>
        <div className={styles.box}>
            <div className={styles.title}>
                <i>{card.cardName}</i>
                <h2>{card.title}</h2>
                <p>in sprint <em>{card.sprintName}</em></p>
            </div>
            <div className={styles.duration}>
                <h3>Estimated time:</h3>
                <p><strong>{card.length}</strong> j/h ({card.length / card.workers.length} j/h per member)</p>
            </div>
            <div className={styles.members}>
                <h3>Members</h3>
                {
                    card.workers.map((member, index) => {
                        return <div key={index}>
                            <img src={defaultPicture} alt="member" />
                            <p>{member.username}&nbsp;({member.email})</p>
                        </div>
                    })
                }
            </div>
            <div className={styles.description}>
                <h3>Description</h3>
                <p>{card.description}</p>
            </div>
            <div className={styles.userStory}>
                <div className={styles.as}>
                    <h3>As a:</h3>
                    <p>{card.as}</p>
                </div>
                <div className={styles.to}>
                    <h3>I want to:</h3>
                    <p>{card.to}</p>
                </div>
            </div>
            <div className={styles.dods}>
                <h3>Definition of Done:</h3>
                <ul>
                    {
                        card.tasks.map((task, index) => {
                            return <li key={index}><input type="checkbox" checked={task.done} onChange={(e) => changeTaskStatus(task.id, task)} />{task.description}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    </div>);
}

export default ModalCard;
