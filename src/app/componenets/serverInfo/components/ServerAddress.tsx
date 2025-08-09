'use client';

import { SERVER_ADDRESS } from '@/app/config';
import styles from '../serverInfo.module.css';
import { CopyIcon } from '@/app/icons';
import { useEffect, useRef, useState } from 'react';

export const ServerAddress = () => {
    const [copied, setCopied] = useState<boolean>(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    function copyServerAddress() {
        navigator.clipboard.writeText(SERVER_ADDRESS);
        
        if(!copied) {
            setCopied(true);
            timeoutRef.current = setTimeout(() => setCopied(false), 1000);
        }
    }

    useEffect(() => {
        return () => {
            if(timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        }
    }, [])

    return (
        <div
            onClick={copyServerAddress}
            className={`${styles.serverAddress} ${copied && styles.copied}`}
        >
            <p>адрес</p>
            <div>
                <CopyIcon />
                {SERVER_ADDRESS}
            </div>
        </div>
    );
}