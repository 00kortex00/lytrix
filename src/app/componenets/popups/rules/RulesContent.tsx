'use client';

import { RULES } from "@/app/config";
import { FC } from "react";
import { RuleKey } from "./Rules";
import styles from './rules.module.css';

interface RulesContentProps {
    currentTab: RuleKey;
}

export const RulesContent: FC<RulesContentProps> = ({ currentTab }) => {
    const currentRules = RULES[currentTab];
    type Key = keyof typeof currentRules;

    return (
        <div className={styles.content}>
            {Object.keys(currentRules).map((key) => (
                <div key={currentRules[key as Key]}>
                    <div className={styles.ruleKey}>{key}</div>
                    <p>{currentRules[key as Key]}</p>
                </div>
            ))}
        </div>
    );
}