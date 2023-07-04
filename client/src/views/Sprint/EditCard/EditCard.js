import { useDispatch, useSelector } from 'react-redux';
import { cardActions } from '@actions/cards.actions';
import { userActions } from '@actions/users.actions';
import styles from './EditCard.module.scss';
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { deliverableActions } from '@actions/deliverables.actions';
import moment from 'moment';

const EditCard = () => {
    const location = useLocation()
    const dispatch = useDispatch();
    const userReducer = useSelector(state => state.userReducer);
    const cardsReducer = useSelector(state => state.cardsReducer);
    const deliverableReducer = useSelector(state => state.deliverablesReducer);
    const { id } = useParams();
    const { card } = location.state

    console.log(card);
    const [cardName, setCardName] = useState(card?.cardName);
    const [deliverable, setDeliverable] = useState({ value: card?.deliverable.id, label: `${card?.deliverable?.name}` });
    const [title, setTitle] = useState(card.title);
    const [as, setAs] = useState(card.as);
    const [to, setTo] = useState(card.to);
    const [description, setDescription] = useState(card.description);
    const [length, setLength] = useState(card.length);
    const [members, setMembers] = useState(card.workers.map(worker => {
        return { value: worker.id, label: `${worker.username} (${worker.email})` }
    }));
    const [startDate, setStartDate] = useState(moment(card.startDate).format('yyyy-MM-DD'));
    const [endDate, setEndDate] = useState(moment(card.endDate).format('yyyy-MM-DD'));
    const [tasks, setTasks] = useState(card.tasks);

    const [isSuccessful, setIsSuccessful] = useState(false);
    const [membersOptions, setMembersOptions] = useState([]);
    const [deliverableOptions, setDeliverableOptions] = useState([]);

    const createCard = (e) => {
        e.preventDefault();

        console.log(deliverable);
        const data = {
            cardName: cardName,
            deliverable: deliverable.value,
            title: title,
            as: as,
            to: to,
            description: description,
            length: length,
            workers: members,
            tasks: tasks,
            startDate: startDate,
            endDate: endDate,
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
        dispatch(userActions.getAllWorkers());
        dispatch(deliverableActions.getAll());
    }, [dispatch]);

    useEffect(() => {
        if (cardsReducer.action === 'cards/createSuccess') {
            dispatch(cardActions.clearSuccess());
            setIsSuccessful(true);
        }
        if (userReducer.action === 'user/getAllWorkersSuccess') {
            dispatch(userActions.clearSuccess());
            setMembersOptions(userReducer.users.map(user => {
                return { value: user.id, label: `${user.username} (${user.email})` };
            }));
        }
        if (deliverableReducer.action === 'deliverables/getAllSuccess') {
            dispatch(deliverableActions.clearSuccess());
            setDeliverableOptions(deliverableReducer.deliverables.map(deliverable => {
                return { value: deliverable.id, label: `${deliverable.name}` };
            }));
        }
    }, [dispatch, userReducer, cardsReducer, deliverableReducer]);

    if (isSuccessful)
        return <Navigate to={`/sprints/${id}`} />

    return (
        <div className={styles.edit}>
            <form className={styles.box}>
                <h1>Create a card</h1>
                <div>
                    <label>
                        Card ID
                        <input type="text" placeholder='PLD-1' value={cardName} onChange={(e) => setCardName(e.target.value)} />
                    </label>
                    <label>
                        Deliverable
                        <Select
                            name="deliverables"
                            options={deliverableOptions}
                            className={styles.members}
                            value={deliverable}
                            onChange={(e) => setDeliverable(e)}
                        />
                    </label>
                </div>
                <label>
                    Card's name
                    <input type="text" placeholder='Create the main menu' value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <div>
                    <label>
                        As a
                        <input type="text" placeholder='player' value={as} onChange={(e) => setAs(e.target.value)} />
                    </label>
                    <label>
                        I would like to
                        <input type="text" placeholder='Launch the game and arrive in a main menu' value={to} onChange={(e) => setTo(e.target.value)} />
                    </label>
                </div>
                <label>
                    Description
                    <input type="textarea" placeholder='describe the context of the card...' value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <div>
                    <label>
                        Length
                        <input type="number" min='1' placeholder='3' value={length} onChange={(e) => setLength(e.target.value)} />
                    </label>
                    <label>
                        Members assigned
                        <Select
                            isMulti
                            name="members"
                            options={membersOptions}
                            className={styles.members}
                            value={members}
                            onChange={(e) => setMembers(e)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Start date
                        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </label>
                    <label>
                        Due date
                        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
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

export default EditCard;
