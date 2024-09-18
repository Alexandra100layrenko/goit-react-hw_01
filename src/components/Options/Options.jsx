import { useState, useEffect } from 'react';
import styles from './Options.module.css';

export default function Options(){
    const [clicks, setClicks]=useState(()=>{
        const savedClicks=localStorage.getItem('number');
        if (savedClicks !== null){
            return JSON.parse(savedClicks);
        }
        return 0;
    });

    useEffect(()=>{
        localStorage.setItem('number', clicks);
    },[clicks]);

    return(
        <div className={styles.btn}>
            <button className={styles.btnItems}>Good</button>
            <button className={styles.btnItems}>Neutral</button>
            <button className={styles.btnItems}>Bed</button>
            <button className={styles.btnItems}>Reset</button>
        </div>
    )
}