import { LytrixLogo, RulesIcon, ShopIcon, SupportIcon } from "@icons";
import styles from './header.module.css';
import { Socials } from "../socials/Socials";
import { ServerInfo } from "../serverInfo/ServerInfo";
import { BurgerButton } from "./BurgerButton";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.minimal}>
                    <LytrixLogo className={styles.brand} />
                    <BurgerButton />
                </div>

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

                <ServerInfo className={styles.serverInfo} />

                <Socials className={styles.socials} />
            </div>
        </header>
    );
}