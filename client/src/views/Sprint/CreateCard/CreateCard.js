import { useDispatch, useSelector } from 'react-redux';
import { cardActions } from '@actions/cards.actions';
import { userActions } from '@actions/users.actions';
import styles from './CreateCard.module.scss';
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const CreateCard = () => {
    const dispatch = useDispatch();
    const userReducer = useSelector(state => state.userReducer);
    const cardsReducer = useSelector(state => state.cardsReducer);
    const { id } = useParams();

    const [cardName, setCardName] = useState('');
    const [title, setTitle] = useState('');
    const [as, setAs] = useState('');
    const [to, setTo] = useState('');
    const [description, setDescription] = useState('');
    const [length, setLength] = useState(0);
    const [members, setMembers] = useState([]);
    const [tasks, setTasks] = useState(['']);

    const [isSuccessful, setIsSuccessful] = useState(false);
    const [membersOptions, setMembersOptions] = useState([]);

    const createCard = (e) => {
        e.preventDefault();

        const data = {
            cardName: cardName,
            title: title,
            as: as,
            to: to,
            description: description,
            length: length,
            workers: members,
            tasks: tasks,
            sprint: id
        }

        dispatch(cardActions.create(id, data));
    }

    const createTask = (e, index) => {
        const tmp = [...tasks];
        const newTask = { description: e.target.value };

        tmp[index] = newTask;
        setTasks(tmp);
    }

    useEffect(() => {
        dispatch(userActions.getAll());
    }, [dispatch]);

    useEffect(() => {
        if (cardsReducer.action === 'cards/createSuccess') {
            dispatch(cardActions.clearSuccess());
            setIsSuccessful(true);
        }
        if (userReducer.action === 'user/getAllSuccess') {
            dispatch(userActions.clearSuccess());
            setMembersOptions(userReducer.users.map(user => {
                return { value: user.id, label: `${user.username} (${user.email})` };
            }));
        }
    }, [dispatch, userReducer, cardsReducer]);

    if (isSuccessful)
        return <Navigate to={`/sprints/${id}`} />

    return (
        <div className={styles.create}>
            <form className={styles.box}>
                <h1>Create a card</h1>
                <div>
                    <label>
                        Card ID
                        <input type="text" placeholder='PLD-1' onChange={(e) => setCardName(e.target.value)} />
                    </label>
                    <label>
                        Card's name
                        <input type="text" placeholder='Create the main menu' onChange={(e) => setTitle(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        As a
                        <input type="text" placeholder='player' onChange={(e) => setAs(e.target.value)} />
                    </label>
                    <label>
                        I would like to
                        <input type="text" placeholder='Launch the game and arrive in a main menu' onChange={(e) => setTo(e.target.value)} />
                    </label>
                </div>
                <label>
                    Description
                    <input type="textarea" placeholder='describe the context of the card...' onChange={(e) => setDescription(e.target.value)} />
                </label>
                <div>
                    <label>
                        Length
                        <input type="number" min='1' placeholder='3' onChange={(e) => setLength(e.target.value)} />
                    </label>
                    <label>
                        Members assigned
                        <Select
                            isMulti
                            name="members"
                            options={membersOptions}
                            className={styles.members}
                            onChange={(e) => setMembers(e)}
                        />
                    </label>
                </div>
                <label>
                    Definition of done
                    {
                        tasks.map((task, index) => {
                            return <div key={index} className={styles.taskField}>
                                <input type="text" value={tasks[index].description} onChange={(e) => createTask(e, index)} />
                                {tasks.length > 1
                                ? <FontAwesomeIcon icon={faTrash} onClick={() => {
                                    const tmp = [...tasks];
                                    tmp.splice(index, 1);
                                    setTasks(tmp);
                                }} />
                                : <></>}
                            </div>
                        })
                    }
                </label>
                <div className={styles.taskButton} onClick={() => setTasks([...tasks, ''])}>
                    <FontAwesomeIcon icon={faPlus} />
                    <p>Create new card</p>
                </div>
                <input type="submit" value="Create card" className={styles.button} onClick={createCard} />
            </form>
        </div>
    );
}

export default CreateCard;
