'use client';

import styles from './popupWrapper.module.css';
import { usePopupStore } from '../PopupStore';

export const PopupWrapper = () => {
    const { popup, closePopup } = usePopupStore();

    return (
        popup && (
            <div className={styles.popupWrapper}>
                <div className={styles.leaveArea} onClick={closePopup}></div>
                {popup}
            </div>
        )
    );
}