import styles from './Time.module.scss';
import Canva from './Canva';
import moment from 'moment';
import timeZone from 'moment-timezone';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';

const Time = () => {
    const [times, setTimes] = useState([
        moment().tz('Asia/Seoul'),
        moment().tz('Europe/Madrid'),
        moment().tz('Europe/Stockholm'),
        moment().tz('America/Toronto'),
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            let Korea = moment().tz('Asia/Seoul');
            let Spain = moment().tz('Europe/Madrid');
            let Swedish = moment().tz('Europe/Stockholm');
            let Canada = moment().tz('America/Toronto');

            setTimes([Korea, Spain, Swedish, Canada]);
        }, 1000);
    }, [])

    return (
        <div className={styles.time}>
            <div className={styles.region}>
                <h2>South Korea</h2>
                <h3>{moment(times[0]).format('MMMM Do YYYY, HH:mm:ss')}</h3>
                <Canva hours={moment(times[0]).hours()} />
            </div>
            <div className={styles.region}>
                <h2>Spain</h2>
                <h3>{moment(times[1]).format('MMMM Do YYYY, HH:mm:ss')}</h3>
                <Canva hours={moment(times[1]).hours()} />
            </div>
            <div className={styles.region}>
                <h2>Sweden</h2>
                <h3>{moment(times[2]).format('MMMM Do YYYY, HH:mm:ss')}</h3>
                <Canva hours={moment(times[2]).hours()} />
            </div>
            <div className={styles.region}>
                <h2>Canada</h2>
                <h3>{moment(times[3]).format('MMMM Do YYYY, HH:mm:ss')}</h3>
                <Canva hours={moment(times[3]).hours()} />
            </div>
        </div>
    );
}

export default Time;
