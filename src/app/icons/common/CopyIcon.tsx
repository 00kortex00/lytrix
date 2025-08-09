import { FC } from "react";
import { IconProps } from "../types";

export const CopyIcon: FC<IconProps> = ({ className }) => {
    return (
        <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M11 14H9V16H0V2H2V0H11V14ZM1 15H8V14H2V3H1V15ZM3 2H9V13H10V1H3V2ZM3 13H8V3H3V13Z" fill="currentColor"/>
        </svg>
    );
}