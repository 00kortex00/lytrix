import { DiscordIcon, TelegramIcon, YouTubeIcon } from '@/app/icons';
import styles from './socials.module.css';
import { FC } from 'react';
import { SOCIAL_LINKS } from '@/app/config';

interface SocialsProps {
    className?: string;
}

export const Socials: FC<SocialsProps> = ({ className }) => {
    const { DISCORD, TELEGRAM, YOUTUBE } = SOCIAL_LINKS;

    return (
        <div className={`${styles.socials} ${className}`}>
            <a href={TELEGRAM} target='_blank'>
                <TelegramIcon />
            </a>

            <a href={DISCORD} target='_blank'>
                <DiscordIcon />
            </a>

            <a href={YOUTUBE} target='_blank'>
                <YouTubeIcon />
            </a>
        </div>
    );
}