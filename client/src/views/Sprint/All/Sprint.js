import styles from './Sprint.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import defaultPicture from '@assets/Images/defaultPicture.png';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { cardActions } from '@actions/cards.actions';
import { sprintActions } from '@actions/sprints.actions';
import ModalCard from '../ModalCard/ModalCard';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Sprint = () => {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.cardsReducer.cards);
    const sprint = useSelector(state => state.sprintsReducer.sprint);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [cardInfo, setCardInfo] = useState({});
    const { id } = useParams();


    useEffect(() => {
        dispatch(cardActions.getAll(id));
        dispatch(sprintActions.getOne(id));
    }, [dispatch]);

    return (
        <div className={styles.sprint}>
            <div className={styles.searchBar}>
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" name="search" placeholder="Search cards" />
            </div>
            <div className={styles.title}>
                <h2>{sprint.title}</h2>
                <Link to={`/sprints/${sprint.id}/create-card`}>
                    <FontAwesomeIcon icon={faPlus} />
                    <p>Create new card</p>
                </Link>
            </div>
            <div className={styles.cards}>
                <h3>En cours</h3>
                <div>
                    {
                        cards.filter(card => !card.done).map((card, index) => {
                            return <div key={index} className={styles.card} onClick={() => { setModalIsOpen(true); setCardInfo({...card, sprintName: sprint.title }) }}>
                                <h6>{card.title}</h6>
                                <p>{card.description}</p>
                                <i>{card.length}j/h</i>
                                <div className={styles.update}>
                                    <p>Last updated: {moment(new Date(card.modified_at)).format('Do MMMM YYYY')}</p>
                                    <img src={defaultPicture} alt="member" />
                                </div>
                            </div>
                        })
                    }
                </div>
                <h3>Finis</h3>
                <div>
                    {
                        cards.filter(card => card.done).map((card, index) => {
                            return <div key={index} className={`${styles.card} ${styles.done}`} onClick={() => { setModalIsOpen(true); setCardInfo({...card, sprintName: sprint.title }) }}>
                                <h6>{card.title}</h6>
                                <p>{card.description}</p>
                                <i>{card.length}j/h</i>
                                <div className={styles.update}>
                                    <p>Last updated: {moment(new Date(card.modified_at)).format('Do MMMM YYYY')}</p>
                                    <img src={defaultPicture} alt="member" />
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <ModalCard isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} card={cardInfo} />
        </div>
    );
}
export default Sprint;
