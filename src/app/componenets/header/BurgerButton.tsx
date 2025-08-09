'use client';

import { useState } from 'react';
import styles from './header.module.css';
import { BurgerIcon } from "@/app/icons";

export const BurgerButton = () => {
    const [opened, setOpened] = useState<boolean>(false);

    return (
        <button
            title='burger button'
            className={`${styles.burger} ${opened && styles.opened}`}
            onClick={() => setOpened((prev) => !prev)}
        >
            <BurgerIcon />
        </button>
    );
}   