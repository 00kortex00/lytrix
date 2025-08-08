import { FC } from "react";
import { IconProps } from "../types";

export const CopyIcon: FC<IconProps> = ({ className }) => {
    return (
        <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M8.2998 2.78613V15.5H0.5V2.78613H8.2998Z" stroke="currentColor"/>
        </svg>
    );
}