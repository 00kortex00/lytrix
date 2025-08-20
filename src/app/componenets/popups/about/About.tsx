import { StartBtn } from '../../main/StartBtn';
import popupStyles from '../popup.module.css';

export const About = () => {
    return (
        <div className={`${popupStyles.popup}`}>
            <h2>О сервере</h2>
            LytriX - это модовый майнкрафт сервер по тематике преключений и фентези.<br />
            Сервер является условно приватным.
            <StartBtn />
        </div>
    );
}