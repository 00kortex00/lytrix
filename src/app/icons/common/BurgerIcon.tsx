import { FC } from "react";
import { IconProps } from "../types";

export const BurgerIcon: FC<IconProps> = ({ className }) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <line x1="5" y1="8" x2="27" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="5" y1="16" x2="27" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="5" y1="24" x2="27" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    );
}