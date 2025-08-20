import { DOWNLOAD_LINK, SOCIAL_LINKS } from '@/app/config';
import popupStyles from '../popup.module.css';
import btnStyles from '@styles/buttons.module.css';

export const HowToStart = () => {
    return (
        <div className={popupStyles.popup}>
            <h2>Как начать игру?</h2>
            <ol start={0}>
                <li>
                    Перейдите в <a href={SOCIAL_LINKS.DISCORD} target='_blank'>дискорд (тык)</a>, заполните анкету и ожидайте, <br />
                    если вас приняли - переходите к следующим пунктам
                </li>

                <li>
                    Скачайте <a href={DOWNLOAD_LINK} target='_blank'>сборку (тык)</a>
                </li>

                <li>Распакуйте архив в директории игры в папку "mods"</li>

                <li>Запустите майнкрафт версии 1.21.4</li>

                <li>В главном меню будет кнопка для подключения к серверу</li>

                <div className={btnStyles.btns}>
                    <a className={`${btnStyles.btn}`} href={SOCIAL_LINKS.DISCORD} target='_blank'>Дискорд</a>
                    <a className={`${btnStyles.btn} ${btnStyles.accentBtn}`} href={DOWNLOAD_LINK} target='_blank'>Скачать сборку</a>
                </div>
            </ol>
        </div>
    );
}