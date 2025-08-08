import { FC } from "react";
import { IconProps } from "../types";

export const TelegramIcon: FC<IconProps> = ({ className }) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M27.8562 7.8203L24.2573 24.7928C23.9855 25.9904 23.2777 26.2885 22.2717 25.7246L16.7877 21.6836L14.1419 24.2289C13.8489 24.5219 13.6044 24.7663 13.0397 24.7663L13.4341 19.1818L23.5971 9.9984C24.0392 9.60486 23.5008 9.38594 22.9105 9.78033L10.3462 17.692L4.93719 15.9986C3.76084 15.6315 3.73954 14.8222 5.18252 14.2575L26.3391 6.10644C27.3187 5.73931 28.1756 6.32366 27.8562 7.8203Z" fill="currentColor"/>
        </svg>
    );
}