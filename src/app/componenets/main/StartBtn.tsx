'use client';
import { usePopupStore } from '../popups/PopupStore';
import styles from '@styles/buttons.module.css';

export const StartBtn = () => {
    const { openStartPopup } = usePopupStore();

    return (
        <button className={`${styles.btn} ${styles.accentBtn}`} onClick={openStartPopup}>
            Начать игру
        </button>
    );
}