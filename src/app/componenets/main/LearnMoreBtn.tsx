'use client';
import { usePopupStore } from '../popups/PopupStore';
import styles from '@styles/buttons.module.css';

export const LearnMoreBtn = () => {
    const { openAboutPopup } = usePopupStore();

    return (
        <button className={styles.btn} onClick={openAboutPopup}>
            Узнать больше
        </button>
    );
}