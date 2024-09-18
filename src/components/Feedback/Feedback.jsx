import styles from './Feedback.module.css';

export default function Feedback({good, neutral, bad}){
    const totalFeedback = good + neutral + bad;

    return(
        <ul className={styles.feedback}>
            <li>Good:{good}</li>
            <li>Neutral:{neutral}</li>
            <li>Bad:{bad}</li>
            <li>Total:{totalFeedback}</li>
            <li>Positive:</li>
        </ul>
    )
}