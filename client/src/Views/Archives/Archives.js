import styles from './Archives.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Archives = () => {
    return (
        <div className={styles.archives}>
            <div className={styles.title}>
                <h2>All Sprints Archived</h2>
                <div>
                    <FontAwesomeIcon icon={faPlus} />
                    <h6>Créer un nouveau sprint</h6>
                </div>
            </div>
            <div className={styles.sprints}>
                <Link to='/sprint-3' className={styles.card}>
                    <i>Cards: 26</i>
                    <h6>Sprint 3</h6>
                    <p>Du 23/11/22 au 23/01/23 (10 days left)</p>
                    <p>Current</p>
                </Link>
                <Link to='/sprint-3' className={styles.card}>
                    <i>Cards: 26</i>
                    <h6>Sprint 3</h6>
                    <p>Du 23/11/22 au 23/01/23 (10 days left)</p>
                    <p>Current</p>
                </Link>
                <Link to='/sprint-3' className={styles.card}>
                    <i>Cards: 26</i>
                    <h6>Sprint 3</h6>
                    <p>Du 23/11/22 au 23/01/23 (10 days left)</p>
                    <p>Current</p>
                </Link>
                <Link to='/sprint-3' className={styles.card}>
                    <i>Cards: 26</i>
                    <h6>Sprint 3</h6>
                    <p>Du 23/11/22 au 23/01/23 (10 days left)</p>
                    <p>Current</p>
                </Link>
                <Link to='/sprint-3' className={styles.card}>
                    <i>Cards: 26</i>
                    <h6>Sprint 3</h6>
                    <p>Du 23/11/22 au 23/01/23 (10 days left)</p>
                    <p>Current</p>
                </Link>
                <Link to='/sprint-3' className={styles.card}>
                    <i>Cards: 26</i>
                    <h6>Sprint 3</h6>
                    <p>Du 23/11/22 au 23/01/23 (10 days left)</p>
                    <p>Current</p>
                </Link>
                <Link to='/sprint-3' className={styles.card}>
                    <i>Cards: 26</i>
                    <h6>Sprint 3</h6>
                    <p>Du 23/11/22 au 23/01/23 (10 days left)</p>
                    <p>Current</p>
                </Link>
                <Link to='/sprint-3' className={styles.card}>
                    <i>Cards: 26</i>
                    <h6>Sprint 3</h6>
                    <p>Du 23/11/22 au 23/01/23 (10 days left)</p>
                    <p>Current</p>
                </Link>
                <Link to='/sprint-3' className={styles.card}>
                    <i>Cards: 26</i>
                    <h6>Sprint 3</h6>
                    <p>Du 23/11/22 au 23/01/23 (10 days left)</p>
                    <p>Current</p>
                </Link>
                <Link to='/sprint-3' className={styles.card}>
                    <i>Cards: 26</i>
                    <h6>Sprint 3</h6>
                    <p>Du 23/11/22 au 23/01/23 (10 days left)</p>
                    <p>Current</p>
                </Link>
                <Link to='/sprint-3' className={styles.card}>
                    <i>Cards: 26</i>
                    <h6>Sprint 3</h6>
                    <p>Du 23/11/22 au 23/01/23 (10 days left)</p>
                    <p>Current</p>
                </Link>
                <Link to='/sprint-3' className={styles.card}>
                    <i>Cards: 26</i>
                    <h6>Sprint 3</h6>
                    <p>Du 23/11/22 au 23/01/23 (10 days left)</p>
                    <p>Current</p>
                </Link>
                <Link to='/sprint-3' className={styles.card}>
                    <i>Cards: 26</i>
                    <h6>Sprint 3</h6>
                    <p>Du 23/11/22 au 23/01/23 (10 days left)</p>
                    <p>Current</p>
                </Link>
                <Link to='/sprint-3' className={styles.card}>
                    <i>Cards: 26</i>
                    <h6>Sprint 3</h6>
                    <p>Du 23/11/22 au 23/01/23 (10 days left)</p>
                    <p>Current</p>
                </Link>
                <Link to='/sprint-3' className={styles.card}>
                    <i>Cards: 26</i>
                    <h6>Sprint 3</h6>
                    <p>Du 23/11/22 au 23/01/23 (10 days left)</p>
                    <p>Current</p>
                </Link>
                <Link to='/sprint-3' className={styles.card}>
                    <i>Cards: 26</i>
                    <h6>Sprint 3</h6>
                    <p>Du 23/11/22 au 23/01/23 (10 days left)</p>
                    <p>Current</p>
                </Link>
                <Link to='/sprint-3' className={styles.card}>
                    <i>Cards: 26</i>
                    <h6>Sprint 3</h6>
                    <p>Du 23/11/22 au 23/01/23 (10 days left)</p>
                    <p>Current</p>
                </Link>
                <Link to='/sprint-3' className={styles.card}>
                    <i>Cards: 26</i>
                    <h6>Sprint 3</h6>
                    <p>Du 23/11/22 au 23/01/23 (10 days left)</p>
                    <p>Current</p>
                </Link>
                <Link to='/sprint-3' className={styles.card}>
                    <i>Cards: 26</i>
                    <h6>Sprint 3</h6>
                    <p>Du 23/11/22 au 23/01/23 (10 days left)</p>
                    <p>Current</p>
                </Link>
                <Link to='/sprint-3' className={styles.card}>
                    <i>Cards: 26</i>
                    <h6>Sprint 3</h6>
                    <p>Du 23/11/22 au 23/01/23 (10 days left)</p>
                    <p>Current</p>
                </Link>
            </div>
        </div>
    );
}

export default Archives;
