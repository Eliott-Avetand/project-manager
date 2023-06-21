import { useEffect } from 'react';
import styles from './Canva.module.scss';

const Canva = ({ hours }) => {
    useEffect(() => {
        const eclipse = document.querySelector(`.${styles.eclipse}`);
        const sky = document.querySelector(`.${styles.canvas}`);
        const skyColor = {
            16: '#70c4c6',
            17: '#70c4c6',
            18: '#70c4c6',
            19: '#70c4c6',
            20: '#524b64',
            21: '#524b64',
            22: '#524b64',
            23: '#354a4a',
            0: '#354a4a',
            1: '#354a4a',
            2: '#354a4a',
            3: '#354a4a',
            4: '#354a4a',
            5: '#354a4a',
            6: '#354a4a',
            7: '#e2b553',
            8: '#e2b553',
            9: '#e2b553',
            10: '#70c4c6',
            11: '#70c4c6',
            12: '#70c4c6',
            13: '#70c4c6',
            14: '#70c4c6',
            15: '#70c4c6',
        }

        console.log(hours);
        sky.style.background = `${skyColor[hours]}`;
    }, []);

    return (
        <div className={styles.canvas}>
	        <div className={styles.cloud}></div>
	        <div className={`${styles.cloud} ${styles.a}`}></div>
	        <div className={`${styles.cloud} ${styles.b}`}></div>
	        <div className={`${styles.cloud} ${styles.b}`}></div>
	        <div className={styles.land}>
	        	<div className={styles.tree}></div>
	        	<div className={`${styles.tree} ${styles.a}`}></div>
	        	<div className={`${styles.tree} ${styles.b}`}></div>
	        	<div className={`${styles.tree} ${styles.c}`}></div>
	        	<div className={`${styles.tree} ${styles.d}`}></div>
	        </div>
	        <div className={styles.star}></div>
	        <div className={`${styles.star} ${styles.a}`}></div>
	        <div className={`${styles.star} ${styles.b}`}></div>
	        <div className={`${styles.star} ${styles.c}`}></div>
	        <div className={`${styles.star} ${styles.d}`}></div>
	        <div className={styles.wind}></div>
        <div className={styles.swirlyWind}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={`${styles.swirlyWind} ${styles.a}`}></div>
        <div className={`${styles.swirlyWind} ${styles.b}`}></div>
        	<div className={styles.eclipse}>
        		<div className={styles.sun}></div>
        		<div className={`${styles.sun} ${styles.a}`}></div>
        		<div className={styles.moon}></div>
        		<div className={`${styles.moon} ${styles.a}`}></div>
        	</div>
        </div>
    );
}

export default Canva;
