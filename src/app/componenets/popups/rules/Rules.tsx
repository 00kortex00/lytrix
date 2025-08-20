'use client';

import { useState } from 'react';
import popupStyles from '../popup.module.css';
import styles from './rules.module.css';
import { RulesContent } from './RulesContent';
import { RulesTabs } from './RulesTabs';
import { RULES } from '@/app/config';

export type RuleKey = keyof typeof RULES;

export const Rules = () => {
    const [currentTab, setCurrentTab] = useState<RuleKey>(Object.keys(RULES)[0] as RuleKey);

    return (
        <div className={`${popupStyles.popup} ${styles.rules}`}>
            <h2>Правила</h2>
            <div className={styles.wrapper}>
                <RulesTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
                <RulesContent currentTab={currentTab} />
            </div>
        </div>
    );
}