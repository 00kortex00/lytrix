import { LytrixLogo, RulesIcon, ShopIcon, SupportIcon } from "@icons";
import styles from './header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className="content">
                <LytrixLogo />
                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                <ShopIcon />
                                магазин
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <RulesIcon />
                                правила
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <SupportIcon />
                                поддержка
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}