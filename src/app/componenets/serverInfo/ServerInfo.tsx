import styles from './serverInfo.module.css';
import { ServerAddress } from './components/ServerAddress';
import { ServerOnline } from './components/ServerOnline';
import { FC } from 'react';

interface ServerInfoProps {
    className?: string;
}

export const ServerInfo: FC<ServerInfoProps> = ({ className }) => {
    return (
        <div className={`${styles.serverInfo} ${className}`}>
            <ServerAddress />
            <ServerOnline />
        </div>
    )
}