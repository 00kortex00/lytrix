import { DiscordIcon, TelegramIcon, YouTubeIcon } from '@/app/icons';
import styles from './socials.module.css';
import { FC } from 'react';

interface SocialsProps {
    className?: string;
}

export const Socials: FC<SocialsProps> = ({ className }) => {
    return (
        <div className={`${styles.socials} ${className}`}>
            <a href="#" target='_blank'>
                <TelegramIcon />
            </a>

            <a href="#" target='_blank'>
                <DiscordIcon />
            </a>

            <a href="#" target='_blank'>
                <YouTubeIcon />
            </a>
        </div>
    );
}