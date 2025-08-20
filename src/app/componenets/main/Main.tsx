import { LineFigure } from '@/app/icons';
import styles from './main.module.css';
import btnStyles from '@styles/buttons.module.css';
import { LearnMoreBtn } from './LearnMoreBtn';
import { StartBtn } from './StartBtn';

export const Main = () => {
    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <h1>LytiX</h1>
                <LineFigure className={styles.line} />
                <p>сервер майнкрафт</p>
                <div className={btnStyles.btns}>
                    <LearnMoreBtn />
                    <StartBtn />
                </div>
            </div>
        </main>
    );
}