import styles from './Sprint.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import Arrow from '../../Assets/Images/Arrow_Black.png';
import GreenTick from '../../Assets/Images/Green_Tick.png';

const Sprint = () => {
    const active = (e) => {
        e.target.nextSibling.classList.toggle(`${styles.actifDropdown}`);
        e.target.classList.toggle(`${styles.actifTitle}`);
    }

    return (
        <div className={styles.sprint}>
            <div className={styles.sort}>
                <div className={styles.searchBox}>
                    <input type="text" placeholder="Find a card" />
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <div className={styles.dropbox}>
                    <div className={styles.title} onClick={active}>
                        <h6>Utilisateur(s) assigné(s)</h6>
                        <img src={Arrow} alt="Dropdown" />
                    </div>
                    <div className={styles.content}>
                        <label>
                            <input type="checkbox" value="Eliott" />
                            Eliott
                        </label>
                        <label>
                            <input type="checkbox" value="Grégoire" />
                            Grégoire
                        </label>
                        <label>
                            <input type="checkbox" value="Alexis" />
                            Alexis
                        </label>
                        <label>
                            <input type="checkbox" value="Anthony" />
                            Anthony
                        </label>
                        <label>
                            <input type="checkbox" value="Simon" />
                            Simon
                        </label>
                        <label>
                            <input type="checkbox" value="Eléonore" />
                            Eléonore
                        </label>
                        <label>
                            <input type="checkbox" value="Delivery" />
                            Delivery
                        </label>
                    </div>
                </div>
                <div className={styles.dropbox}>
                    <div className={styles.title} onClick={active}>
                        <h6>Milestones</h6>
                        <img src={Arrow} alt="Dropdown" />
                    </div>
                    <div className={styles.content}>
                        <label>
                            <input type="checkbox" value="Milestone-1" />
                            Milestone 1
                        </label>
                        <label>
                            <input type="checkbox" value="Milestone-2" />
                            Milestone 2
                        </label>
                        <label>
                            <input type="checkbox" value="Delivery" />
                            Delivery
                        </label>
                    </div>
                </div>
                <div className={styles.dropbox}>
                    <div className={styles.title} onClick={active}>
                        <h6>Card's ID</h6>
                        <img src={Arrow} alt="Dropdown" />
                    </div>
                    <div className={styles.content}>
                        <label>
                            <input type="checkbox" value="Menu" />
                            Menu
                        </label>
                        <label>
                            <input type="checkbox" value="LD" />
                            LD
                        </label>
                        <label>
                            <input type="checkbox" value="Gameplay" />
                            Gameplay
                        </label>
                    </div>
                </div>
                <div className={styles.dropbox}>
                    <div className={styles.title} onClick={active}>
                        <h6>En tant que...</h6>
                        <img src={Arrow} alt="Dropdown" />
                    </div>
                    <div className={styles.content}>
                        <label>
                            <input type="checkbox" value="player" />
                            Joueur
                        </label>
                        <label>
                            <input type="checkbox" value="Level-Designer" />
                            Level Designer
                        </label>
                    </div>
                </div>
                <div className={styles.dropbox}>
                    <div className={styles.title} onClick={active}>
                        <h6>Durée (en j/h)</h6>
                        <img src={Arrow} alt="Dropdown" />
                    </div>
                    <div className={styles.content}>
                        <label>
                            <input type="checkbox" value="1" />
                            1
                        </label>
                        <label>
                            <input type="checkbox" value="2" />
                            2
                        </label>
                        <label>
                            <input type="checkbox" value="3" />
                            3
                        </label>
                        <label>
                            <input type="checkbox" value="4" />
                            4
                        </label>
                    </div>
                </div>
                <label className={styles.done}>
                    <input type="checkbox" value="" />
                    Ne montrer que les cartes non faites
                </label>
            </div>
            <div className={styles.cards}>
                <h2>Sprint 1 - 23/11/22 au 23/02/23</h2>
                <div className={styles.title}>
                    <FontAwesomeIcon icon={faPlus} />
                    <h6>Créer une nouvelle carte</h6>
                </div>
                <div className={styles.boxCards}>
                    <div>
                        <i>Menu-1</i>
                        <img src={GreenTick} alt="Validate" />
                        <div>
                            <h6>Menu du jeu</h6>
                            <p>Il est important de laisser au joueur la possibilité de régler ses paramètres dès le début du jeu pour ne pas déranger son expérience en cas de son trop fort par exemple.</p>
                        </div>
                    </div>
                    <div>
                        <i>Menu-1</i>
                        <img src={GreenTick} alt="Validate" />
                        <div>
                            <h6>Menu du jeu</h6>
                            <p>Il est important de laisser au joueur la possibilité de régler ses paramètres dès le début du jeu pour ne pas déranger son expérience en cas de son trop fort par exemple.</p>
                        </div>
                    </div>
                    <div>
                        <i>Menu-1</i>
                        <img src={GreenTick} alt="Validate" />
                        <div>
                            <h6>Menu du jeu</h6>
                            <p>Il est important de laisser au joueur la possibilité de régler ses paramètres dès le début du jeu pour ne pas déranger son expérience en cas de son trop fort par exemple.</p>
                        </div>
                    </div>
                    <div>
                        <i>Menu-1</i>
                        <img src={GreenTick} alt="Validate" />
                        <div>
                            <h6>Menu du jeu</h6>
                            <p>Il est important de laisser au joueur la possibilité de régler ses paramètres dès le début du jeu pour ne pas déranger son expérience en cas de son trop fort par exemple.</p>
                        </div>
                    </div>
                    <div>
                        <i>Menu-1</i>
                        <img src={GreenTick} alt="Validate" />
                        <div>
                            <h6>Menu du jeu</h6>
                            <p>Il est important de laisser au joueur la possibilité de régler ses paramètres dès le début du jeu pour ne pas déranger son expérience en cas de son trop fort par exemple.</p>
                        </div>
                    </div>
                    <div>
                        <i>Menu-1</i>
                        <img src={GreenTick} alt="Validate" />
                        <div>
                            <h6>Menu du jeu</h6>
                            <p>Il est important de laisser au joueur la possibilité de régler ses paramètres dès le début du jeu pour ne pas déranger son expérience en cas de son trop fort par exemple.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sprint;
