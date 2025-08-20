import { RULES } from '@/app/config';
import styles from './rules.module.css';
import { Dispatch, FC, SetStateAction } from 'react';
import { RuleKey } from './Rules';

interface RulesTabsProps {
    currentTab: string;
    setCurrentTab: Dispatch<SetStateAction<RuleKey>>;
}

export const RulesTabs: FC<RulesTabsProps> = ({ currentTab, setCurrentTab }) => {
    return (
        <div className={styles.tabs}>
            {Object.keys(RULES).map((category) => (
                <button
                    className={`${styles.category}
                    ${(category === currentTab) && styles.currentTab}`} key={category}
                    onClick={() => setCurrentTab(category as RuleKey)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}