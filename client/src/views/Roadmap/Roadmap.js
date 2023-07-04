import { useDispatch, useSelector } from 'react-redux';
import styles from './Roadmap.module.scss';
import { userActions } from '../../actions/users.actions';
import { deliverableActions } from '../../actions/deliverables.actions';
import { cardActions } from '../../actions/cards.actions';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import moment, { max } from 'moment';
import touchScroll from '../../utilities/touchScroll';

const Roadmap = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.userReducer.users);
    const deliverables = useSelector(state => state.deliverablesReducer.deliverables);
    const cards = useSelector(state => state.cardsReducer.cards);

    const [rows, setRows] = useState([]);

    const calendarInfo = {
        2023: {
            Q1: ['January', 'February', 'March'],
            Q2: ['April', 'May', 'June'],
            Q3: ['July', 'August', 'September'],
            Q4: ['October', 'November', 'December']
        },
        2024: {
            Q1: ['January', 'February', 'March'],
            Q2: ['April', 'May', 'June'],
            Q3: ['July', 'August', 'September'],
            Q4: ['October', 'November', 'December']
        },
        2025: {
            Q1: ['January', 'February', 'March'],
            Q2: ['April', 'May', 'June'],
            Q3: ['July', 'August', 'September'],
            Q4: ['October', 'November', 'December']
        }
    }

    useEffect(() => {   
        dispatch(userActions.getAllWorkers());
        dispatch(deliverableActions.getAll());
        dispatch(cardActions.getAll());
    }, []);  

    useEffect(() => {
        setRows(users);
    }, [users]);

    useEffect(() => {
        const test = [...document.querySelectorAll(`.${styles.cell}`)];
        test.forEach(cell => cell.style.height = 'auto');
        let maxHeight = Math.max(...test.map(data => data.getBoundingClientRect().height));

        test.forEach(cell => cell.style.height = maxHeight + 'px');
        [...document.querySelectorAll(`.${styles.item}`)].forEach(cell => cell.style.height = maxHeight + 1 + 'px');
    });

    const handleActive = (e) => {
        const activeTitle = document.querySelector(`.${styles.activeTabTitle}`);
        const activeItems = document.querySelector(`.${styles.activeTabItems}`);
        const clickedTitle = e.target;
        const clickedItems = document.querySelector(`#${clickedTitle.id}Items`);

        activeTitle.classList.remove(`${styles.activeTabTitle}`);
        activeItems.classList.remove(`${styles.activeTabItems}`);
        clickedTitle.classList.add(`${styles.activeTabTitle}`);
        clickedItems.classList.add(`${styles.activeTabItems}`);
        setRows(clickedTitle.id === 'deliverables' ? deliverables : users);
    }

    const ele = document.getElementById('scrollable');
    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;
    
        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');
    };

    const mouseDownHandler = function (e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            // The current scroll
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    return (
        <div className={styles.roadmap}>
            <h1>Progress Tracker</h1>
            <div className={styles.planning}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <h2 onClick={handleActive} id='teams' className={styles.activeTabTitle}>Teams</h2>
                        <h2 onClick={handleActive} id='deliverables'>Deliverables</h2>
                    </div>
                    <nav className={`${styles.activeTabItems}`} id='teamsItems'>
                        {
                            users.map(user => {
                                return <div key={user.id} className={styles.item}>
                                    <FontAwesomeIcon icon={faCaretRight} /><h4>{user.username}</h4>
                                </div>
                            })
                        }
                    </nav>
                    <nav id='deliverablesItems'>
                        {
                            deliverables.map(deliverable => {
                                return <div key={deliverable.id} className={styles.item}>
                                    <FontAwesomeIcon icon={faCaretRight} /><h4>{deliverable.name}</h4>
                                </div>
                            })
                        }
                    </nav>
                </div>
                <div className={styles.body} id='scrollable' onMouseDown={mouseDownHandler}>
                    {
                        Object.entries(calendarInfo).map(category => {
                            return <div className={styles.quarters}>
                                {
                                    Object.entries(category[1]).map(quarter => {
                                        return <div className={styles.quarter}>
                                            <h4>{category[0]} {quarter[0]}</h4>
                                            <div className={styles.monthes}>
                                                { quarter[1].map(month => {
                                                    return <div className={styles.month}>
                                                        <div className={styles.monthName}>{month}</div>
                                                        {rows.map(row => {
                                                            return <div className={styles.cell}>
                                                                {
                                                                    cards.map(card => {
                                                                        return moment(card.created_at).format('MMMM').toLowerCase() === month.toLowerCase()
                                                                        && moment(card.startDate).format('YYYY') == category[0] && (card.workers.map(worker => worker.username).includes(row.username) || card.deliverable.name == row.name)
                                                                        ? <div className={styles.data} style={{ width: 202 + 201 * (Number(moment(card.endDate).format('MM')) - Number(moment(card.startDate).format('MM'))) }}>{card.title}</div> : <></>
                                                                    })
                                                                }
                                                            </div>
                                                        })}
                                                    </div>
                                                })}
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Roadmap;
