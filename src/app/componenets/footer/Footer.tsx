import { SERVER_NAME } from '@/app/config';
import styles from './footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            © 2025 {SERVER_NAME} | Все права защищены
        </footer>
    );
}