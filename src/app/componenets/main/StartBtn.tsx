import styles from './main.module.css';

export const StartBtn = () => {
    return (
        <button className={`${styles.btn} ${styles.startBtn}`}>
            Начать игру
        </button>
    );
}